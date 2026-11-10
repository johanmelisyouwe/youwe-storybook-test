# Youwe Storybook (test)

The Youwe design system as a Next.js + React project with Storybook. **Figma is the source of truth.** Components, variants, tokens and page templates come from the Youwe Figma file and are kept up to date with the Figma → Storybook sync.

Live Storybook: https://johanmelisyouwe.github.io/youwe-storybook-test/ (deployed automatically on every push to `main`).

## Stack

The same stack as the main Youwe Storybook, so results can be compared:

- Next.js 16 + React 19 + TypeScript
- Storybook 10.6.5 (`@storybook/nextjs-vite`), with Docs and Accessibility (a11y) add-ons
- Plain CSS with cascade layers. Tokens are CSS custom properties generated from Figma.

## Run it locally

```bash
pnpm install
pnpm storybook      # http://localhost:6006
pnpm dev            # Next.js app on http://localhost:3000
```

## Project structure

```
AGENTS.md / CLAUDE.md          Entry point for AI tools → FIGMA-SYNC.md
FIGMA-SYNC.md                  The Figma → Storybook sync instructions (v2)
figma-sync.json                Sync record: every Figma component/template, status, code path, signature
figma/                         Read-only Figma snippets: export-figma-variables.js, inventory.js, templates.js
scripts/
  build-tokens.mjs             Figma export → src/tokens/tokens.css + tokens.resolved.json
  check-legacy.mjs             Fails on non-Figma values, placeholder copy, missing reset, layer problems
  check-coverage.mjs           Fails when "complete" components/templates miss Figma variants or stories
tokens/figma-variables.json    Figma export (variables, text styles, effects). Never edit by hand.
src/tokens/                    GENERATED tokens.css + tokens.resolved.json
src/styles/                    globals.css (layer order), reset.css, base.css
src/foundations/               Colour, type, spacing, radius, motion, effects pages (from the tokens)
src/ui/                        Figma components (one kebab-case folder each), filled by the sync
src/blocks/                    Content blocks, filled by the sync
src/site/                      Header, footer, Ask Youwe
src/shared/                    Focus ring, block frame, card reveal, icons, logos, cx
src/templates/                 Page template stories, filled by the sync
public/figma-assets/           Images exported from Figma by the sync
app/                           Next.js app (pages built from the components)
```

## Updating from Figma

Connect the Figma MCP server (see the appendix in `FIGMA-SYNC.md`), then ask your AI assistant:

> Run the sync described in FIGMA-SYNC.md.

It exports the tokens, works through the components and templates, compares them with Figma, runs the checks and opens a pull request with `SYNC-REPORT.md`. To update only the tokens by hand: re-export into `tokens/figma-variables.json` and run `pnpm tokens`.

Checks (also run in CI on every push):

```bash
pnpm check          # check-legacy + check-coverage
pnpm lint           # biome (not in check yet: pre-existing findings)
```

## Styling rules

- Use **semantic tokens** only (`var(--color-shared-surface-base-2)`, `var(--color-shared-content-secondary)`, `var(--spacing-lg)`), never raw hex or px values.
- Use the **text style classes** (`.yw-heading-xl`, `.yw-body-md-reg`) for typography. They sit above components in the cascade, so they always win.
- Component CSS is a CSS Module in `@layer components`; variants are `data-*` attributes, not class names.
- All copy and images come from Figma; no placeholder text.
- Dark is the default mode. Light is `data-theme="light"` on any wrapper.

## Fonts

Aktiv Grotesk, the family Figma uses, is loaded from `public/fonts/aktiv-grotesk/` (Regular 400, Medium 500, Bold 700: the weights the Figma text styles use) and declared in `src/styles/fonts.css`. The files are Youwe-licensed web versions (woff2). Never commit the source `.ttf`/`.otf` files, and don't add weights or cuts Figma doesn't use (such as Aktiv Grotesk Ex).
