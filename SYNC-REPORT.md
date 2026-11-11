# Sync report — 11 November 2026 (stagger on every row, sweep fixes)

## Stagger on every row

On Industries only the first two rows of cards staggered. Each card's delay was counted from the top of the whole grid and capped at the 8th card, so from row 3 on every card got the same maximum delay and they appeared together.

- **Now:** the delay is counted per group of cards that scrolls in together. Every row staggers left to right (0, 80, 160, 240 ms), however long the grid is.
- This is fixed in the shared page motion, so it applies to **every grid** on every template, not only Industries: card grids, insight grids, logo grids, stat rows.
- Reduced motion is unchanged: nothing is hidden or moved.

## Fixes from the full sweep

I checked all 20 templates (desktop and iPhone 13) and all 276 component stories for errors, broken images, overflow, clipped text, reveals that never play, keyboard focus and accessibility.

- **Ask Youwe case snippet, light mode:** the "Ask about it" button was dark on the photo's dark overlay, so it was almost invisible. The text over the photo now always uses the dark-mode colours, so the button shows as a light outline.
- **Mobile menu, current page:** the fixed brand red failed contrast at 18 px (3.9:1, AA needs 4.5:1). It now uses content/brand, like the other small red text.
- **Linked stat cards** (Home, Services detail, Work detail, About): the screen-reader name left out text that is visible on the card, so voice control ("click 17 markets") could miss it. The name now comes from the card content, with "Read the case" added.
- **Pagination:** the "Prev" button was named "Previous page", which doesn't contain the visible word. It's now "Prev page".

## Checked, nothing to fix

- No console errors, failed requests or broken images on any template.
- No sideways scroll on any template, desktop or mobile.
- Keyboard: a visible focus ring on all ~120 tab stops per template.
- Every scroll reveal plays. Exceptions: cards in hidden tabs and off-screen carousel slides, which play when they're shown.
- Accessibility check (axe) on all templates: 0 serious or critical issues.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Industries: every row checked, staggers 0, 80, 160, 240 ms.
