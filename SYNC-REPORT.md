# Sync report — 11 November 2026 (What we do images, progress line)

## What we do: an image per chapter

Each chapter of Home's What we do slider now has its own background, so the circular wipe between chapters is easy to follow:
- 01 Build it: the blue/violet ribbons (abstract-001)
- 02 Keep it running: the orange ribbon (abstract-009)
- 03 Connect it: the red/gold arc (abstract-016)

On mobile (Behaviour Scroll) the images now wipe in per chapter too, under an even base-1 tint (78%) so the text stays readable over the full width. On desktop a dark gradient on the right edge keeps the index labels readable over the brighter images.

## Progress line

The scroll progress line at the bottom of the Vertical slider is now 4px (border width token shared/width/4), was 2px.

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Visual: Home at 1440 and iPhone 13, at 10%, 36%, 50% and 90% through the section.
