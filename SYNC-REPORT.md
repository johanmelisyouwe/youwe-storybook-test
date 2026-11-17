# Sync report — 17 November 2026 (Services overview: mosaic alternative)

An alternative Services overview, with the practices laid out as on the v2 site. The hero, the cases, the sub-footer and the footer are the same as on the current page.

## New block: Content blocks/Services mosaic (code-only)

One practice per section, on a 12-column grid with gap 16:
- **Head:** the kicker across the full width, the heading/xl title on the left and a one-line tagline on the right.
- **Lead tile:** 6 columns × 3 rows. A full image with a text card at the bottom left (eyebrow + body).
- **Service tiles:** Service Cards, 2 per row next to the lead. An odd last card spans both columns.
- **Case tile:** 8 columns. An image with a stat card ("800+ / Categories active / BunzlOne · Read the case").
- **Ask tile:** 4 columns. "Ask Youwe about …" with the question and an Ask pill. Clicking it asks through `askYouwe()`, so the page's dock answers it.
- **Hover:** the case and Ask tiles now have the **card hover** (red reveal, also on keyboard focus), like the Service Cards.
- **`Lead="Left" | "Right"`** mirrors the top part (alternate per practice).
- **Cards follow the section Mode:** dark cards on dark sections, light cards (surface/base-2) on light sections.
- **Tablet:** the tiles are stacked and the services stay in 2 columns. **Phone:** a single column.

## Template

- **Templates / Services** has new stories, **Mosaic desktop** and **Mosaic mobile**: the three practices as Services mosaic (dark, light, dark).
- The original Desktop and Mobile stories are unchanged.

## Checks

- `pnpm typecheck`, `pnpm check` (Services mosaic is in `figma-sync.json` as `code-only`), `pnpm build-storybook`: pass.
- Checked in a browser at 1440:
  - Practice 1 (dark, lead left) and 2 (light, lead right, light cards) render.
  - Hovering the case tile shows the red reveal.
  - On an iPhone 13 everything is in one column.
  - No console errors.
