#!/usr/bin/env node
// Finds design values and styles that did not come from Figma.
// Run at the end of every sync. Exit code 1 when something is found, so it can gate CI.
//
//   node scripts/check-legacy.mjs [srcDir ...]
//   defaults: src .storybook stories css
//
// Checks
//   1. Fonts Figma does not use (e.g. "Aktiv Grotesk Ex")
//   2. CSS custom properties that are used but not defined by tokens.css or locally
//   3. Hard-coded colours (#hex, rgb(), hsl()) outside tokens.css
//   4. Hard-coded font sizes in px and durations in ms/s outside tokens.css
//   5. Storybook titles that do not exist in figma-sync.json (old naming)
//   6. Placeholder or invented copy (lorem ipsum, "Hint text", "Client name" …): content comes from Figma
//   7. CSS reset missing (box-sizing: border-box and links inheriting colour)
//   8. Component stylesheets outside @layer components (they would beat the text-style classes)
//   9. Word/letter spans set to inline-block without keeping the spaces (words run together)
// Lines containing "legacy-ok" are ignored (use sparingly, with a reason).

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const roots = (
    process.argv.slice(2).length
        ? process.argv.slice(2)
        : ['src', '.storybook', 'stories', 'css']
).filter(existsSync)
const TOKENS = ['src/tokens/tokens.css', 'tokens/tokens.css'].find(existsSync)
const SYNC = existsSync('figma-sync.json')
    ? JSON.parse(readFileSync('figma-sync.json', 'utf8'))
    : null
const VARS = existsSync('tokens/figma-variables.json')
    ? JSON.parse(readFileSync('tokens/figma-variables.json', 'utf8'))
    : null

const SKIP_DIRS = new Set([
    'node_modules',
    'storybook-static',
    'dist',
    'build',
    '.git',
    'coverage',
])
const EXT = new Set([
    '.css',
    '.scss',
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mdx',
    '.html',
    '.vue',
    '.svelte',
])
const files = []
const walk = (d) => {
    for (const n of readdirSync(d)) {
        if (SKIP_DIRS.has(n)) continue
        const p = join(d, n)
        const s = statSync(p)
        if (s.isDirectory()) walk(p)
        else if (EXT.has(extname(n))) files.push(p)
    }
}
roots.forEach(walk)

// Allowed font families: the ones in Figma's font_primitives
const allowedFonts = new Set(
    VARS
        ? Object.values(VARS.font_primitives?.vars || {})
              .map((v) => v[0])
              .filter(
                  (v) => /[a-z]/i.test(v) && !/^(Regular|Medium|Bold)$/.test(v)
              )
        : ['Aktiv Grotesk']
)
const defined = new Set()
if (TOKENS)
    for (const m of readFileSync(TOKENS, 'utf8').matchAll(
        /(--[a-z0-9-]+)\s*:/gi
    ))
        defined.add(m[1])
const titles = new Set(
    SYNC
        ? [
              ...SYNC.components.map((c) => c.storybook?.title),
              ...(SYNC.templates || []).map((t) => t.storybook?.title),
          ].filter(Boolean)
        : []
)
const ALLOWED_TITLE_PREFIX = [
    'Foundations/',
    'Templates/',
    'Legacy/',
    'Introduction',
]

const issues = []
const seen = new Set()
const add = (type, file, line, text) => {
    const k = type + file + line
    if (seen.has(k)) return
    seen.add(k)
    issues.push({ type, file, line, text: text.trim().slice(0, 140) })
}

// local custom properties defined anywhere (component-scoped vars are fine)
for (const f of files)
    for (const m of readFileSync(f, 'utf8').matchAll(/(--[a-z0-9-]+)\s*:/gi))
        defined.add(m[1])
// variables set from JavaScript (el.style.setProperty('--x', …)) are runtime parameters, also fine
for (const f of files)
    for (const m of readFileSync(f, 'utf8').matchAll(
        /setProperty\(\s*['"`](--[a-z0-9-]+)/gi
    ))
        defined.add(m[1])

for (const f of files) {
    if (TOKENS && f.endsWith(basename(TOKENS)) && f.includes('tokens')) continue // generated file
    const lines = readFileSync(f, 'utf8').split('\n')
    const isStyle = /\.(css|scss)$/.test(f)
    // The formatter wraps long CSS values over several lines, so a legacy-ok
    // on any line of a declaration exempts the whole declaration.
    const exempt = new Set()
    if (isStyle) {
        let start = 0
        lines.forEach((l, i) => {
            if (!/[;{}]/.test(l)) return
            if (lines.slice(start, i + 1).some((x) => x.includes('legacy-ok')))
                for (let j = start; j <= i; j++) exempt.add(j)
            start = i + 1
        })
    }
    lines.forEach((l, i) => {
        if (l.includes('legacy-ok') || exempt.has(i)) return
        const n = i + 1
        // 1. fonts
        for (const m of l.matchAll(/font-family\s*:\s*([^;}{]+)/gi)) {
            for (const fam of m[1]
                .split(',')
                .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))) {
                if (
                    !fam ||
                    fam.startsWith('var(') ||
                    /^(inherit|initial|system-ui|sans-serif|serif|monospace|ui-sans-serif|-apple-system|BlinkMacSystemFont)$/i.test(
                        fam
                    )
                )
                    continue
                if (!allowedFonts.has(fam)) add('font not in Figma', f, n, l)
            }
        }
        if (/@font-face/.test(l) || /Ex[_-]?Md|GroteskEx|Grotesk Ex/i.test(l)) {
            if (/Ex[_-]?Md|GroteskEx|Grotesk Ex/i.test(l))
                add('font not in Figma', f, n, l)
        }
        // 2. undefined custom properties
        for (const m of l.matchAll(/var\(\s*(--[a-z0-9-]+)\s*([,)])/gi))
            if (m[2] === ')' && !defined.has(m[1]))
                add(
                    'variable not defined by Figma tokens',
                    f,
                    n,
                    m[1] + '  ←  ' + l
                ) // var(--x, fallback) = optional local parameter, allowed
        if (!isStyle && !/style|css|sx=|styled/i.test(l)) return
        // 3. colours
        if (
            /(^|[^&\w-])#[0-9a-f]{3,8}\b/i.test(l) &&
            !/url\(|href=|\bid=|#(region|main|content)/i.test(l)
        )
            add('hard-coded colour', f, n, l)
        if (/\b(rgba?|hsla?)\(\s*\d/i.test(l)) add('hard-coded colour', f, n, l)
        // 4. sizes and durations
        if (/font-size\s*:\s*\d+(\.\d+)?px/i.test(l))
            add('hard-coded font size', f, n, l)
        if (
            /(transition|animation)[^;]*\b\d+(\.\d+)?m?s\b/i.test(l) &&
            !/var\(--motion/.test(l)
        )
            add('hard-coded duration', f, n, l)
    })
    // 5. old story titles
    if (/\.stories\.(js|jsx|ts|tsx|mdx)$/.test(f) && titles.size) {
        const src = lines.join('\n')
        // The Storybook title is the meta's `title:`; story data can also have `title:` keys (card titles), so
        // prefer the first value that looks like a Storybook path (contains "/").
        const all = [...src.matchAll(/title\s*:\s*['"`]([^'"`]+)['"`]/g)]
        const m =
            all.find((x) => x[1].includes('/')) ||
            all[0] ||
            src.match(/<Meta[^>]*title=["']([^"']+)["']/)
        if (
            m &&
            !titles.has(m[1]) &&
            !ALLOWED_TITLE_PREFIX.some(
                (p) => m[1].startsWith(p) || m[1] === p.replace(/\/$/, '')
            )
        )
            add('story title not in figma-sync.json (old naming)', f, 1, m[1])
    }
}

// 6. placeholder / invented copy in components, stories and templates
const PLACEHOLDER =
    /lorem ipsum|dolor sit amet|\bHint text\b|Quote from the client goes here|\bClient name\b|Role, company|Title goes here|Your (text|title|heading) here|Card title|Description goes here|TODO:? copy|\[placeholder\]/i
for (const f of files) {
    if (
        !/\.(tsx|jsx|ts|js|mdx|html|vue|svelte)$/.test(f) ||
        /\.d\.ts$/.test(f) ||
        f.includes('scripts/')
    )
        continue
    readFileSync(f, 'utf8')
        .split('\n')
        .forEach((l, i) => {
            if (l.includes('legacy-ok')) return
            // Figma property NAMES (e.g. the prop 'Hint text') are allowed; only copy is checked
            const copy = l
                .replace(/['"]Hint text['"]\??\s*:/g, '')
                .replace(/Figma:\s*Hint text/g, '')
            if (
                PLACEHOLDER.test(copy) ||
                /(['">])Placeholder\1|>Placeholder</.test(copy)
            )
                add('placeholder copy (use the texts from Figma)', f, i + 1, l)
        })
}
// 7. reset: some stylesheet must set box-sizing and make links inherit their colour
const allCss = files
    .filter((f) => /\.(css|scss)$/.test(f))
    .map((f) => readFileSync(f, 'utf8'))
    .join('\n')
if (files.some((f) => /\.(css|scss)$/.test(f))) {
    if (!/box-sizing\s*:\s*border-box/.test(allCss))
        add(
            'CSS reset missing',
            '(project)',
            0,
            'No stylesheet sets `box-sizing: border-box` on all elements'
        )
    if (!/a[^{]*\{[^}]*color\s*:\s*inherit/.test(allCss))
        add(
            'CSS reset missing',
            '(project)',
            0,
            'Links do not inherit their colour (`:where(a, a:visited) { color: inherit }`)'
        )
}
// 8 + 9. component stylesheets
for (const f of files.filter(
    (x) => /\.(css|scss)$/.test(x) && /components?\//.test(x)
)) {
    const css = readFileSync(f, 'utf8')
    if (
        /\{[^}]*:[^}]*\}/.test(css) &&
        !/@layer\s+components/.test(css) &&
        !css.includes('legacy-ok')
    )
        add(
            'component styles outside @layer components',
            f,
            1,
            'Wrap the file in `@layer components { … }` so text-style classes and the reset keep their order'
        )
    for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
        if (
            /word|char|letter/i.test(m[1]) &&
            /display\s*:\s*inline-block/.test(m[2]) &&
            !/white-space|margin-inline|margin-right|gap/.test(m[2])
        ) {
            const line = css.slice(0, m.index).split('\n').length
            add(
                'word spans lose their spaces',
                f,
                line,
                m[1].trim() +
                    ' { display: inline-block } — keep the space (white-space: pre, or render the space outside the span)'
            )
        }
    }
}

const byType = {}
for (const i of issues) (byType[i.type] = byType[i.type] || []).push(i)
if (!issues.length) {
    console.log(
        'check-legacy: clean. Everything comes from Figma tokens and names.'
    )
    process.exit(0)
}
console.log(`check-legacy: ${issues.length} finding(s)\n`)
for (const [t, list] of Object.entries(byType)) {
    console.log(`## ${t} (${list.length})`)
    for (const i of list.slice(0, 50))
        console.log(`- ${i.file}:${i.line}  ${i.text}`)
    if (list.length > 50) console.log(`  … and ${list.length - 50} more`)
    console.log('')
}
process.exit(1)
