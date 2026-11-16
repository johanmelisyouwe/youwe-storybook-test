# Sync report — 16 November 2026 (Hero: viewport height)

The Hero **Gradient** variant (Home and the overview pages) now fills the viewport.
- It used to be fixed at 840 on desktop and 640 on mobile.
- `min-height` is now `100svh`, with a `100vh` fallback. Small viewport units mean the mobile browser bars don't make it jump.
- When the content needs more room (for example on a small phone with the logo bar), the hero grows to fit, so nothing gets cut off.
- Title + image (detail pages) is unchanged.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass
- Measured on Home:
  - 1440×900: hero 900
  - 1440×700: hero 700
  - iPhone 13: hero 759 in a 664 viewport, because the content needs more height there
