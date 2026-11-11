# Sync report — 11 November 2026 (review polish)

Open review items 5–12, each checked against Figma.

## Fixed

- **Work detail, repeated photo:** one stand-in photo was used three times (inline, full-bleed and two-up). Each photo is now used once: full-bleed is XXL and the two-up is Quooker + G-Star.
- **Work detail, Related work:** the carousel on the Quooker case listed the Quooker case itself. It now leaves it out.
- **Stats, thousands separator (found while checking):** "110,000+" ended its count-up as "110.000+" and "3,360" as "3.360", because the comma was read as a decimal point. A comma followed by groups of three digits now counts as a thousands separator and stays in the count.
- **Services detail, What we build:** the feature tile used the tight portrait Bunzl crop, which zoomed in on the icon and showed a red sliver at the edge. It now uses the wide Bunzl photo from Figma (new `wide-bunzl.webp`), with the calendar and BunzlOne icons visible as in Figma.
- **Services detail, Proof quote card:** Figma puts a **light** quote card in the dark Proof grid; ours was dark. Quote Card has a new optional `Mode` prop (Figma axis Mode) for a card whose mode differs from its section, and Proof uses `Mode="Light"`. The space between the quote and the name matches Figma (the name sits at the bottom of the card).
- **Mobile What we do, doubled labels:** each slide showed its number twice ("01 / 03 · Digital Infrastructure" above the slide's own "01 · Digital Infrastructure"). The extra label is gone in both mobile layouts; the step bars still show where you are.
- **Mobile sub-footer, office list:** on mobile the text runs the full width over the photo, but the overlay only darkened from the left. On mobile it now darkens from the bottom, so the office list stays readable on any photo.

## Checked, matches Figma (no change)

- **Challenges grid gap:** Figma has the same five tiles in three columns with an open sixth spot.
- **ACI Weave paragraph spacing:** body, nudge and button spacing match Figma (24, 24, 40).
- **Repeated footer sentence:** "Tell us what you want to achieve and we will think along with you." is in both the Work with us block and the footer in Figma too. That's a copy decision for Figma; not changed here.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Looked at each change: Services detail (What we build, Proof), Work detail (results, two-up, Related work) at 1440, and Home on an iPhone 13 (What we do, sub-footer).
