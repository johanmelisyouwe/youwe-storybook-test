# Sync report — 9 November 2026 (batch 1)

Figma file: `IP237ISXsaciooPrSykYMh` (Youwe Tools Design System: Corporate). Instructions: FIGMA-SYNC.md v2. Step 0 skipped (`"migrated"`: fresh repo).

## Scope of this run

Steps 1–3 completely, step 4 for the first batch of building blocks: **Button/Basic, Pills, Tag**. Templates (step 5) are not part of this run.

## Step 2: inventory

- 130 entries read from the `– ` component pages (paged, `figma/inventory.js`).
- **New since the 6 Nov record (32):** `Content blocks/Awards`, `Content blocks/Filter bar`, and 30 logo assets (`Logos/…`, recorded as internal assets for Technology Card and logo strips).
- **Not found on a component page (1):** `Industry List Item` (25019:679). It is still used in the Industries template, so it's kept as `missing` with a note rather than `removed-in-figma`. Question for design: should it move to a `– ` page?
- Every component now has its full variant options (`figma.axes`) and current signature in `figma-sync.json`.
- Story titles: `Button/Basic`, `Button/Utility`, `Button/Filter` and `Button/Link` all had the title `Components/Buttons`. A title must be unique per component, so they're now `Components/Buttons/Basic` (and `/Utility`, `/Filter`, `/Link`).

## Step 3: tokens

No changes. The export of 9 Nov matches `tokens/figma-variables.json` (231 variables, 24 text styles, 10 effect styles).

## Step 4: components

| Component | Status | Story | Variants |
|---|---|---|---|
| Button/Basic | complete | Components/Buttons/Basic | 240 of 240 (Variant × Icon × State × Size) |
| Pills | complete | Components/Pill | 60 of 60 (Variant × State × Icon × Size) |
| Tag | complete | Components/Tag | 4 of 4 (Variant × Size) + Show icon |

How they were built:
- Geometry, colours and text styles read **per variant** from Figma (sizes, padding per side, gaps, radius, icon sizes, fills, strokes, text fills, focus ring). Heights are fixed in Figma (Button L 56 / M 48 / S 36 / XS 24, Pills M 36 / S 24, Tag M 24 / S 20) and set explicitly. XS buttons have 8px padding on the icon side, as in Figma.
- All values are tokens; text uses the `.yw-*` classes; CSS is in `@layer components`.
- States are real CSS (`:hover`, `:active`, `:focus-visible`, `:disabled`). The stories preview them with storybook-addon-pseudo-states (installed in this run).
- Focus ring: 2px `shared/border/system/focus`, 4px outside, like the Figma Focus Ring layer.
- Motion (from each Figma description): background/colour transitions with `duration/fast` + `ease/standard`; on the button the trailing icon nudges forward and the leading icon back (`duration/base` + `ease/emphasized`).
- Icons (shopping-basket, show-password, info, star-full) exported from the Figma icon components as SVG, recoloured with `currentColor`.
- Each component has `Default`, one story per Variant and `AllVariants`; Pills also has `FilterRow` (as used in the Figma Filter bar).

Visual comparison with Figma (component set screenshots vs. the `AllVariants` stories at 1440px):
- Button/Basic: every Variant × State × Size × Icon row compared. Sizes measured in the browser match Figma (for example L 56, icon + gap adds 32px; XS leading adds 16px, as in Figma).
- Pills: all 60 compared. One difference found and fixed: Figma uses the *show-password* icon on Primary pills and *info* on Neutral pills in both positions.
- Tag: all 4 compared, on the same `surface/base-3` backdrop as the Figma set.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean (no exemptions added)
- `check-coverage`: clean (3 complete, 74 missing, 54 internal; 19 templates missing)

## Could not match exactly

- **Icon nudge distance.** Figma says the arrow "nudges" but there is no token for a small distance. I used half of `motion/distance/sm` (4px). Design: is a `distance/xs` token wanted?
- **Second text element.** Button/Basic has a hidden "Second text" layer (same text style, colour not bound to a variable). It's available as `Show second text element` + `secondText`, but its purpose isn't clear from Figma.

## Open questions for the design team

1. Button/Basic description mentions a **Destructive** variant that doesn't exist in the component set. Remove it from the description, or add the variant?
2. **Tag default copy** ("Very popular", "Only 3 left") reads like web-shop placeholder text. Is there real copy for Youwe (for example case tags)?
3. Button/Basic default label is "Default". The stories use "Get in touch" (from the templates).
4. `Industry List Item` is not on a `– ` component page (see step 2).

## Next batch (suggested)

Button/Filter, Button/Utility, Button/Link, Chip, Toggle, Checkbox, Radio button, Tab, then the inputs; after those the cards.
