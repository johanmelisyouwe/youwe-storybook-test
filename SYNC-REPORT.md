# Sync report — 9 November 2026 (fluid container)

The layout no longer stops at 1440px. Decided 9 November: fluid with a maximum.

## What changed

- **Backgrounds are full width** on every screen size; the 1440px page frame around templates and Desktop stories is gone (the black side bars).
- **Content is fluid**: it keeps the Figma 80px side gutters and grows with the screen up to `--yw-container-max` (1760px, a 1920 screen), then centres. At 1440 nothing changes (1280px content, as in Figma).
- **One variable**: `--yw-container-max` in `src/components/shared/block.css` (`legacy-ok`: a layout decision, not a Figma token). Used by the block frame, the bleeding carousels and scroll grids, the Vertical slider, the footer and the header bar (which stays 56px outside the content edge, as in Figma).
- **Stories**: Desktop stories and templates fill the canvas; Mobile stays at 360px. The side-by-side AllVariants stories keep their fixed 1440/360 frames.
- **Unchanged**: tablet and mobile breakpoints, vertical rhythm, text-line widths (intros, bodies) — those keep their readable maximum widths.

Visual check: Home and Services detail at 1440 (unchanged), 1920 (content 1760) and 2560 (content centred, header, slider and footer aligned with the blocks).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (75 components complete, 19 of 19 templates)

## For the design team

1. The Figma designs stay at 1440; this is the rule for wider screens: full-width backgrounds, content up to 1760px. Worth adding to Brand / Page guidelines.
