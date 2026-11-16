/** Fills {name} placeholders in a UI label: fmt('Page {n}', { n: 2 }) → 'Page 2' */
export const fmt = (label: string, vars: Record<string, string | number>) =>
    label.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
