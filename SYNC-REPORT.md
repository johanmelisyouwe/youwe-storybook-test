# Sync report — 11 November 2026 (hero title shrink to fit)

## Problem

On phones, "Manufacturing" (Industries detail) was wider than the screen at the mobile hero size (heading/3xl, 56px), so it broke mid-word: "Manufacturin / g". The word doesn't fit a 360px frame at 56px in Figma either.

## Fix

Hero title lines now use `font-size: min(1em, 13cqi)`: the title keeps the Figma heading/3xl size wherever it fits, and on narrow heroes it scales with the hero width so the longest single word in any title (Manufacturing, 6.7em) stays on one line.

| Width | Title size |
|---|---|
| 320 | 42px |
| 360 | 47px |
| 390 | 51px |
| 430 and up | 56px (Figma mobile) |
| 768 | 64px (Figma tablet) |
| 1440 | 80px (Figma desktop) |

Checked all 10 templates at 320, 360, 390, 430, 768 and 1440: no word breaks mid-word anywhere.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
