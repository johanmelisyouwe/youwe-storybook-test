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
npm install
npm run storybook      # http://localhost:6006
npm run dev            # Next.js app on http://localhost:3000
```

## Project structure

```
tokens/figma-variables.json   Figma export (variables, text styles, effects). Never edit by hand.
scripts/build-tokens.mjs      Turns the export into src/styles/tokens.css + tokens.json
src/styles/
  globals.css                 Entry point; declares the layer order
  reset.css                   Base reset (box-sizing, links, form fonts) in @layer reset
  tokens.css                  GENERATED: CSS variables + .text-* classes
  base.css                    Body defaults, .container
src/foundations/              Colour, type, spacing, radius, motion, effects pages (from tokens.json)
src/components/               Components and content blocks, one folder each, filled by the sync
app/                          Next.js app (pages built from the components)
.storybook/                   Storybook config (Mode toolbar = Figma dark/light, Figma viewports)
.github/workflows/            Builds Storybook and deploys it to GitHub Pages
```

## Updating from Figma

1. Re-export the Figma variables into `tokens/figma-variables.json`
2. `npm run tokens`
3. Components and templates: run the Figma → Storybook sync described in `FIGMA-SYNC.md`

## Styling rules

- Use **semantic tokens** only (`var(--surface-base-2)`, `var(--content-secondary)`, `var(--space-lg)`), never raw hex or px values from Figma.
- Use the **text style classes** (`.text-heading-xl`, `.text-body-md-reg`) for typography.
- Component CSS goes in `@layer components` so the reset and tokens never fight it.
- Dark is the default mode. Light is `data-theme="light"` on any wrapper.

## Fonts

Aktiv Grotesk is licensed and must **not** be committed (font files are git-ignored). To load it, set `STORYBOOK_ADOBE_FONTS_KIT` to an Adobe Fonts project id that includes *aktiv-grotesk*: locally in `.env`, or on GitHub under Settings → Secrets and variables → Actions → Variables.
