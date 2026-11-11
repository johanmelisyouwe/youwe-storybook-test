# Sync report — 11 November 2026 (hero title descenders)

## Problem

Hero titles cut off descenders (the g in "Manufacturing", the p in "products"). Each title line sits in a mask for the line-rise animation (`overflow: hidden`), and the heading styles have line-height 1 from Figma, so the mask was exactly 1em tall and the tails of g, p, y and j fell outside it. The mask stayed after the animation, so the clipping was permanent.

## Fix

The hero line mask is now a clip shape (`clip-path: inset(-0.15em -0.1em -0.3em -0.1em)`) instead of `overflow: hidden`. It reaches past the line box, so descenders and accented capitals stay visible, and nothing in the layout or line spacing changes (still line-height 1, as in Figma). The rise starts at 140% (was 105%) so the text still begins fully hidden below the larger clip.

Checked the other masks with large type: the What we do slider titles already have room (0.12em / 0.16em padding) and the giant rows have 40px above and below, so neither clips. Section title words rise without a mask.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Visual: Industries detail ("Manufacturing", desktop and iPhone) and Home ("Complex products.") show full descenders.
