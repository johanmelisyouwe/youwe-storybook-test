// Figma Plugin API snippet — run it through the Figma MCP server's "run plugin code"
// tool (called use_figma in Figma's official MCP server) against the design system file.
// It only READS. It returns a JSON string: save it as tokens/figma-variables.json
// (pretty-printing it before saving is fine).
//
// Output shape:
// {
//   "_meta": { "fileKey": "...", "exportedAt": "ISO date" },
//   "<collection>": { "modes": ["dark","light"], "vars": { "<name>": [valuePerMode, ...] } },
//   "_textStyles": [ { name, family, weight, size, lineHeight, letterSpacing } ],
//   "_effectStyles": [ { name, effects: [...] } ]
// }
// Aliases are written as "{collection.variable/name}". Colours are hex (#rrggbb or #rrggbbaa).

const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byId = {};
for (const c of cols) for (const id of c.variableIds) {
  const v = await figma.variables.getVariableByIdAsync(id);
  byId[id] = { v, c };
}
const hex = (x) => '#' + [x.r, x.g, x.b].map((n) => Math.round(n * 255).toString(16).padStart(2, '0')).join('') +
  (x.a !== undefined && x.a < 1 ? Math.round(x.a * 255).toString(16).padStart(2, '0') : '');
const val = (raw, type) => {
  if (raw && raw.type === 'VARIABLE_ALIAS') { const t = byId[raw.id]; return t ? '{' + t.c.name + '.' + t.v.name + '}' : null; }
  if (type === 'COLOR') return hex(raw);
  return raw;
};
const out = { _meta: { fileKey: figma.fileKey || 'IP237ISXsaciooPrSykYMh', exportedAt: new Date().toISOString() } };
for (const c of cols) {
  if (c.name.startsWith('_')) continue;
  const o = { modes: c.modes.map((m) => m.name), vars: {} };
  for (const id of c.variableIds) {
    const { v } = byId[id];
    if (v.name.startsWith('_') || v.name.includes('/_')) continue; // private / browser UI helpers
    o.vars[v.name] = c.modes.map((m) => val(v.valuesByMode[m.modeId], v.resolvedType));
  }
  out[c.name] = o;
}
const ref = (s, f) => {
  const b = s.boundVariables && s.boundVariables[f];
  if (!b) return null;
  const t = byId[b.id];
  return t ? '{' + t.c.name + '.' + t.v.name + '}' : null;
};
const ts = await figma.getLocalTextStylesAsync();
out._textStyles = ts.map((s) => ({
  name: s.name,
  family: ref(s, 'fontFamily') || s.fontName.family,
  weight: ref(s, 'fontStyle') || s.fontName.style,
  size: ref(s, 'fontSize') || s.fontSize,
  lineHeight: ref(s, 'lineHeight') || (s.lineHeight.unit === 'AUTO' ? 'normal' : s.lineHeight.unit === 'PERCENT' ? +(s.lineHeight.value / 100).toFixed(3) : s.lineHeight.value + 'px'),
  letterSpacing: s.letterSpacing.unit === 'PERCENT' ? +(s.letterSpacing.value / 100).toFixed(4) + 'em' : s.letterSpacing.value + 'px',
  ...(s.textCase && s.textCase !== 'ORIGINAL' ? { textCase: s.textCase } : {}),
}));
const es = await figma.getLocalEffectStylesAsync();
out._effectStyles = es.map((s) => ({
  name: s.name,
  effects: s.effects.filter((e) => e.visible !== false).map((e) => ({
    type: e.type, radius: e.radius, offset: e.offset, spread: e.spread,
    color: e.color ? hex(e.color) : undefined,
  })),
}));
return JSON.stringify(out); // compact: indented output can exceed the MCP response limit
