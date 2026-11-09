// Figma Plugin API snippet — run it through the Figma MCP server's "run plugin code" tool
// (use_figma in Figma's official MCP server). It only READS.
//
// Lists the APPROVED page templates: frames named "Page / …" on the Templates page
// (sections "Desktop" and "Mobile"). For each template it returns its sections in order:
// component sections with the component name and every property value, and hand-built
// frames (not components) so they can be reported. It also returns the content inside each
// section: the components placed in slots (Card grid cells) and nested cards with their props.
//
// One template per call: run with INDEX = 0, then the returned `next`, until `next` is null.

const INDEX = 0;   // ← change per call

const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
const tplPage = figma.root.children.find((p) => p.name === 'Templates');
await tplPage.loadAsync();
const list = [];
for (const sec of tplPage.children.filter((n) => n.type === 'SECTION' && /^(Desktop|Mobile)$/.test(n.name))) {
  for (const f of sec.children.filter((n) => n.type === 'FRAME' && n.name.startsWith('Page / '))) list.push({ device: sec.name, frame: f });
}
list.sort((a, b) => (a.frame.name + a.device).localeCompare(b.frame.name + b.device));
if (!list.length) return JSON.stringify({ total: 0, next: null, error: 'No "Page / …" frames found on the Templates page.' });

const { device, frame } = list[INDEX];

// Component name + property values of an instance (instance swaps resolved to names).
const describe = async (inst) => {
  const main = await inst.getMainComponentAsync();
  const set = main && main.parent && main.parent.type === 'COMPONENT_SET' ? main.parent : main;
  const props = {};
  for (const [k, v] of Object.entries(inst.componentProperties)) {
    let value = v.value;
    if (v.type === 'INSTANCE_SWAP') { const sw = await figma.getNodeByIdAsync(v.value); value = sw ? sw.name : v.value; }
    props[k.split('#')[0]] = value;
  }
  return { component: set ? set.name : inst.name, componentNodeId: set ? set.id : null, props };
};
const textsOf = (n, max = 40) => n.findAll((t) => t.type === 'TEXT' && t.visible).slice(0, max).map((t) => ({ layer: t.name, text: t.characters.slice(0, 400) }));

// The content placed INSIDE a section: what sits in each slot (Card grid cells …) and the
// nested cards/items with their own props (case cards in a carousel, stats …).
// Without this a template can only be rebuilt with invented content.
const contentOf = async (section) => {
  const slots = [];
  for (const sl of section.findAll((n) => n.type === 'SLOT' && n.visible)) {
    const items = [];
    for (const ch of sl.children.filter((c) => c.visible)) {
      if (ch.type === 'INSTANCE') items.push({ ...(await describe(ch)), texts: textsOf(ch, 12) });
      else items.push({ kind: 'frame', name: ch.name, texts: textsOf(ch, 12) });
    }
    slots.push({ slot: sl.name, items });
  }
  const inSlot = (n) => { let p = n.parent; while (p && p !== section) { if (p.type === 'SLOT') return true; p = p.parent; } return false; };
  const nested = [];
  for (const n of section.findAll((x) => x.type === 'INSTANCE' && x.visible)) {
    if (nested.length >= 30 || inSlot(n)) continue;
    const d = await describe(n);
    if (/^_|Button|Icon|Logo|Arrow|Chevron/i.test(d.component)) continue; // parts, not content
    if (!Object.values(n.componentProperties).some((v) => v.type !== 'VARIANT')) continue;
    nested.push({ ...d, texts: textsOf(n, 12) });
  }
  return { slots, nested };
};

// Returns the instances inside a frame if the frame is only a wrapper around components
// (directly, or through nested layout frames), otherwise null.
const flatten = (f, d = 0) => {
  if (d > 3) return null;
  const out = [];
  for (const ch of f.children.filter((x) => x.visible)) {
    if (ch.type === 'INSTANCE') out.push(ch);
    else if (ch.type === 'FRAME' && ch.children.length) { const inner = flatten(ch, d + 1); if (!inner) return null; out.push(...inner); }
    else return null;
  }
  return out.length ? out : null;
};

const sections = [];
for (const c of frame.children) {
  if (!c.visible) continue;
  const base = { name: c.name, nodeId: c.id, height: Math.round(c.height) };
  if (c.type === 'INSTANCE') {
    const d = await describe(c);
    // section-level copy (headings, intro); slot contents are listed separately below
    const own = c.findAll((t) => t.type === 'TEXT' && t.visible && !(() => { let p = t.parent; while (p && p !== c) { if (p.type === 'SLOT') return true; p = p.parent; } return false; })());
    sections.push({ ...base, kind: 'component', ...d, texts: own.slice(0, 40).map((t) => ({ layer: t.name, text: t.characters.slice(0, 400) })), ...(await contentOf(c)) });
  } else if (flatten(c)) {
    // A plain wrapper frame that only groups real components (e.g. Section intro + Filter bar):
    // build it as those components in order, NOT as a placeholder.
    const children = [];
    for (const i of flatten(c)) children.push({ name: i.name, nodeId: i.id, ...(await describe(i)), texts: textsOf(i, 20), ...(await contentOf(i)) });
    sections.push({ ...base, kind: 'wrapper', children, fill: c.fills && c.fills.length ? 'has background' : 'none' });
  } else {
    // Hand-built: list the components used inside, so the report can say what it is made of
    const used = [...new Set((await Promise.all(c.findAll((n) => n.type === 'INSTANCE').slice(0, 60).map(async (n) => (await describe(n)).component))).filter((n) => !/^_/.test(n)))];
    sections.push({ ...base, kind: 'frame', uses: used, texts: textsOf(c, 20), note: 'Hand-built frame, not a component instance. Report it; do not copy it.' });
  }
}
const out = {
  total: list.length,
  index: INDEX,
  next: INDEX + 1 < list.length ? INDEX + 1 : null,
  template: frame.name.replace('Page / ', ''),
  device,
  nodeId: frame.id,
  width: Math.round(frame.width),
  height: Math.round(frame.height),
  sections,
};
out.signature = hash(JSON.stringify(sections.map((s) => [s.kind, s.component, s.props, s.height, (s.texts || []).map((t) => t.text), s.slots, s.nested, s.children])));
// Keep the answer under the MCP response limit (~48 KB): shorten texts step by step.
let json = JSON.stringify(out);
for (const max of [200, 120, 60]) {
  if (json.length < 45000) break;
  const cut = (arr) => (arr || []).forEach((t) => { t.text = t.text.slice(0, max); });
  for (const s of sections) { cut(s.texts); (s.nested || []).forEach((n) => cut(n.texts)); (s.slots || []).forEach((sl) => sl.items.forEach((i) => cut(i.texts))); }
  out.truncated = `texts shortened to ${max} characters to fit the response; read the node for full copy`;
  json = JSON.stringify(out);
}
return json;
