// Figma Plugin API snippet — run it through the Figma MCP server's "run plugin code" tool
// (use_figma in Figma's official MCP server). It only READS.
// Returns a JSON string: every component and component set on the component pages,
// with a signature that changes whenever the component changes in a way that matters for code.
// Compare signatures with figma-sync.json to find what needs a re-sync.
//
// The full list is larger than one MCP response allows, so it is paged:
// run it with START = 0, then again with START = the returned `next`, until `next` is null.

const START = 0;   // ← change per call
const COUNT = 15;  // lower it if a response is cut off

const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
// NOTE: async on purpose. `node.mainComponent` (sync) throws in the Figma MCP server,
// which runs plugin code with dynamic page loading; use getMainComponentAsync().
const shape = async (n, d = 0) => {
  const o = [n.type, n.name, Math.round(n.width), Math.round(n.height), n.layoutMode || '', n.itemSpacing || 0,
    n.paddingTop || 0, n.paddingRight || 0, n.paddingBottom || 0, n.paddingLeft || 0, n.cornerRadius === figma.mixed ? 'mixed' : n.cornerRadius || 0,
    n.visible, JSON.stringify(n.boundVariables || {}), n.type === 'TEXT' ? n.characters.length : ''];
  if ('children' in n && n.type !== 'INSTANCE' && d < 6) { const kids = []; for (const c of n.children) kids.push(await shape(c, d + 1)); o.push(kids); }
  if (n.type === 'INSTANCE') { const mc = await n.getMainComponentAsync(); if (mc) o.push(mc.key); }
  return o;
};
// key → name for local components, to describe the choices of instance-swap properties (image pickers, logos)
const localByKey = {};
for (const page of figma.root.children) {
  if (!page.name.startsWith('–') && !page.name.startsWith('Brand')) continue;
  await page.loadAsync();
  for (const c of page.findAll((n) => n.type === 'COMPONENT')) localByKey[c.key] = c.parent.type === 'COMPONENT_SET' ? c.parent.name : c.name;
}
const choices = (v) => {
  const pref = v.preferredValues || [];
  const names = pref.map((p) => localByKey[p.key] || 'library: ' + p.key);
  const groups = {};
  for (const n of names) { const g = n.startsWith('library') ? 'Youwe – Imagery library' : n.split('/').slice(0, -1).join('/') || n; groups[g] = (groups[g] || 0) + 1; }
  return { count: pref.length, groups, sample: names.slice(0, 6) };
};
// 1. List every component (cheap), 2. describe only the requested page (expensive part).
const all = [];
for (const page of figma.root.children) {
  if (!page.name.startsWith('–')) continue;          // component pages are named "– Something"
  await page.loadAsync();
  const nodes = page.findAll((n) => n.type === 'COMPONENT_SET' || (n.type === 'COMPONENT' && n.parent.type !== 'COMPONENT_SET'));
  for (const s of nodes) {
    if (/^_flags \//.test(s.name)) continue;            // country flags: assets, not components
    all.push({ s, page });
  }
}
const items = [];
for (const { s, page } of all.slice(START, START + COUNT)) {
  const defs = s.componentPropertyDefinitions || {};
  const props = Object.entries(defs).map(([k, v]) => ({
    name: k.split('#')[0], type: v.type,
    options: v.variantOptions, default: v.type === 'INSTANCE_SWAP' ? undefined : v.defaultValue,
    choices: v.type === 'INSTANCE_SWAP' ? choices(v) : undefined,
  }));
  const variants = s.type === 'COMPONENT_SET' ? s.children.map((c) => c.name) : [s.name];
  const shapes = [];
  for (const c of (s.type === 'COMPONENT_SET' ? s.children : [s])) shapes.push(await shape(c));
  items.push({
    name: s.name,
    page: page.name.replace(/^–\s*/, ''),
    nodeId: s.id,
    key: s.key,
    internal: s.name.startsWith('_'),
    description: s.description || '',
    props,
    variants,
    signature: hash(JSON.stringify([props, variants, s.description, shapes])),
  });
}
return JSON.stringify({ total: all.length, start: START, next: START + COUNT < all.length ? START + COUNT : null, items });
