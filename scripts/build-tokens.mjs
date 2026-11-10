#!/usr/bin/env node
// Builds CSS custom properties from tokens/figma-variables.json (exported from Figma).
// Deterministic: same input → same output. No network, no dependencies (Node 18+).
//
//   node scripts/build-tokens.mjs [input] [outDir]
//   defaults: tokens/figma-variables.json → src/tokens/
//
// Writes:
//   tokens.css          custom properties, modes, text-style classes, reduced motion
//   tokens.resolved.json every token with its final value per mode (for docs / Storybook)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const input = process.argv[2] || 'tokens/figma-variables.json'
const outDir = process.argv[3] || 'src/tokens'
const src = JSON.parse(readFileSync(input, 'utf8'))

// ---- Naming: Figma collection → CSS prefix (matches the website kit names) ----
const PREFIX = {
    color_primitives: 'color',
    color_semantics: 'color',
    spacing: 'spacing',
    font_semantics: 'font-size',
    font_primitives: 'font',
    border: '', // names already start with shared/… or component/…
    layout: 'layout',
    motion: 'motion',
}
// ---- Modes: which Figma mode is the default, and how the others apply ----
const MODES = {
    color_semantics: {
        default: 'dark',
        selectors: {
            dark: '[data-theme="dark"]',
            light: '[data-theme="light"]',
        },
    },
    font_semantics: {
        default: 'desktop',
        media: { tablet: '(max-width: 1023px)', mobile: '(max-width: 767px)' },
    },
    layout: {
        default: 'desktop-md',
        media: {
            'desktop-lg': '(min-width: 1920px)',
            tablet: '(max-width: 1023px)',
            mobile: '(max-width: 767px)',
        },
    },
}
const WEIGHT = {
    Thin: 100,
    Light: 300,
    Regular: 400,
    Medium: 500,
    'Semi Bold': 600,
    SemiBold: 600,
    Bold: 700,
    Black: 900,
}
const UNITLESS = new Set(['font_primitives'])

const slug = (s) =>
    String(s)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
const cssName = (col, name) => {
    const p = PREFIX[col] ?? slug(col)
    return '--' + [p, slug(name)].filter(Boolean).join('-')
}
const isAlias = (v) => typeof v === 'string' && /^\{[^}]+\}$/.test(v)
const aliasTarget = (v) => {
    const inner = v.slice(1, -1)
    const i = inner.indexOf('.')
    return { col: inner.slice(0, i), name: inner.slice(i + 1) }
}

const fmt = (col, name, v) => {
    if (v === null || v === undefined) return null
    if (isAlias(v)) {
        const t = aliasTarget(v)
        return `var(${cssName(t.col, t.name)})`
    }
    if (typeof v === 'number') {
        if (col === 'motion')
            return name.startsWith('duration') || name === 'stagger'
                ? `${v}ms`
                : `${v}px`
        if (col === 'layout' && name === 'breakpoint') return `${v}px`
        if (UNITLESS.has(col)) return String(v)
        return `${v}px`
    }
    if (col === 'font_primitives' && name.startsWith('weight/'))
        return String(WEIGHT[v] ?? v)
    if (col === 'font_primitives' && name.startsWith('family/'))
        return `'${v}', '${slug(v)}', system-ui, sans-serif` // second name = Adobe Fonts / Typekit family id (e.g. aktiv-grotesk)
    return String(v)
}

// ---- Build blocks ----
const root = [] // :root default values
const sel = {} // selector → lines
const media = {} // media query → lines
const resolved = {}
const add = (bucket, key, line) => {
    ;(bucket[key] = bucket[key] || []).push(line)
}

for (const [col, data] of Object.entries(src)) {
    if (col.startsWith('_')) continue
    const m = MODES[col]
    const modes = data.modes
    const defIdx = m ? Math.max(0, modes.indexOf(m.default)) : 0
    for (const [name, values] of Object.entries(data.vars)) {
        const prop = cssName(col, name)
        const def = fmt(col, name, values[defIdx])
        if (def !== null) root.push(`  ${prop}: ${def};`)
        resolved[prop] = Object.fromEntries(
            modes.map((md, i) => [md, fmt(col, name, values[i])])
        )
        if (!m) continue
        modes.forEach((md, i) => {
            if (i === defIdx && !(m.selectors && m.selectors[md])) return
            const v = fmt(col, name, values[i])
            if (v === null) return
            if (m.selectors && m.selectors[md])
                add(sel, m.selectors[md], `  ${prop}: ${v};`)
            if (m.media && m.media[md])
                add(media, m.media[md], `  ${prop}: ${v};`)
        })
    }
}

// Effects → shadows / blur
for (const s of src._effectStyles || []) {
    const shadows = s.effects
        .filter((e) => e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW')
        .map(
            (e) =>
                `${e.type === 'INNER_SHADOW' ? 'inset ' : ''}${e.offset?.x ?? 0}px ${e.offset?.y ?? 0}px ${e.radius ?? 0}px ${e.spread ?? 0}px ${e.color}`
        )
    const blur = s.effects.find((e) => e.type === 'BACKGROUND_BLUR')
    const base = '--effect-' + slug(s.name)
    if (shadows.length) {
        root.push(`  ${base}-shadow: ${shadows.join(', ')};`)
        resolved[base + '-shadow'] = { Value: shadows.join(', ') }
    }
    if (blur) {
        root.push(`  ${base}-blur: ${blur.radius}px;`)
        resolved[base + '-blur'] = { Value: blur.radius + 'px' }
    }
}

// Text styles → classes (.yw-heading-xl, .yw-body-sm-bold …)
const classes = []
const val = (v) =>
    isAlias(v) ? fmt(aliasTarget(v).col, aliasTarget(v).name, v) : v
for (const t of src._textStyles || []) {
    const fam = isAlias(t.family)
        ? val(t.family)
        : `'${t.family}', system-ui, sans-serif`
    const w = isAlias(t.weight) ? val(t.weight) : (WEIGHT[t.weight] ?? 400)
    const size = isAlias(t.size) ? val(t.size) : `${t.size}px`
    const lh = isAlias(t.lineHeight) ? val(t.lineHeight) : t.lineHeight
    classes.push(
        `.yw-${slug(t.name)} {\n  font-family: ${fam};\n  font-weight: ${w};\n  font-size: ${size};\n  line-height: ${lh};\n  letter-spacing: ${t.letterSpacing};${t.textCase ? `\n  text-transform: ${{ UPPER: 'uppercase', LOWER: 'lowercase', TITLE: 'capitalize' }[t.textCase] || 'none'};` : ''}\n}`
    )
}

// Reduced motion: every duration becomes 1ms, reveals do not move
const motionCol = src.motion?.vars || {}
const reduce = Object.keys(motionCol)
    .filter(
        (n) =>
            n.startsWith('duration') ||
            n === 'stagger' ||
            n.startsWith('distance')
    )
    .map(
        (n) =>
            `  ${cssName('motion', n)}: ${n.startsWith('distance') ? '0px' : '1ms'};`
    )

// ---- Write ----
const meta = src._meta || {}
// Cascade layers. The project's entry stylesheet must declare the order once:
//   @layer reset, tokens, components, typography, utilities;
// Tokens sit low; the .yw-* text classes sit ABOVE components, so a text style
// put on an element always wins over a component's base font rules
// (this was the `.yw-btn { font: inherit }` bug).
let css = `/* Generated by scripts/build-tokens.mjs from Figma (${meta.fileKey || 'unknown file'}, exported ${meta.exportedAt || 'unknown'}).\n   Do not edit by hand: change Figma, re-export, rebuild. */\n\n@layer tokens {\n`
css += `:root {\n${root.join('\n')}\n}\n\n`
for (const [s, lines] of Object.entries(sel))
    css += `${s} {\n${lines.join('\n')}\n}\n\n`
// media blocks: wide first, then tablet, then mobile so smaller wins
const order = (q) =>
    q.includes('min-width') ? 0 : -parseInt(q.match(/\d+/)[0], 10)
for (const q of Object.keys(media).sort((a, b) => order(a) - order(b)))
    css += `@media ${q} {\n  :root {\n${media[q].map((l) => '  ' + l).join('\n')}\n  }\n}\n\n`
if (reduce.length)
    css += `@media (prefers-reduced-motion: reduce) {\n  :root {\n${reduce.map((l) => '  ' + l).join('\n')}\n  }\n}\n\n`
css += `}\n\n@layer typography {\n${classes.join('\n\n')}\n}\n`

mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'tokens.css'), css)
writeFileSync(
    join(outDir, 'tokens.resolved.json'),
    JSON.stringify(resolved, null, 2) + '\n'
)
console.log(
    `tokens.css: ${root.length} properties, ${Object.keys(sel).length} theme blocks, ${Object.keys(media).length} breakpoints, ${classes.length} text styles → ${outDir}`
)
