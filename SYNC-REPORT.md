# Sync report — 11 November 2026 (event dates and partner logos)

## Upcoming events: date matches Figma

Checked against Upcoming events (26740:42) and its row (26887:988).

- **Before:** the date sat in a dark, centred tile, 76 px wide.
- **In Figma:** the Date frame's base-1 fill is switched off. The day and month are **left-aligned with no background**, and the frame hugs the text. The day uses heading/2xl and the month sits 4 px below it.
- **Now:** the date matches Figma. The day number lines up with the title and the place tag below it.

## Technology Card: logo position, no white background

Checked against Technology Card (26721:87), its logo slot (26721:29) and the cards on Tech Partners and Tech partners split.

- **White background removed.** The 120×40 logo slot has no fill in Figma. Logos are drawn in the content colour, so they're white on dark and dark on light, like Figma.
- **Logo position:** the logo now sits **left in its slot and vertically centred**. Before, it was centred in a white box. Each partner SVG is the Figma 120×40 frame, so every logo keeps its exact Figma offset. For example, AWS sits at the left and fills the height; Alumio is full width with the height centred.
- A partner without a logo file still shows its name, now left-aligned in the content colour.
- The Technology Card stories now use the real partner logos instead of name placeholders.

Small difference from Figma: in Figma the Databricks mark is red. Logos here are one colour, so that they follow the mode.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Compared with Figma screenshots: Upcoming events at desktop size, all Technology Card variants (dark and light, rest and hover), and Tech Partners → Systems that scale.
