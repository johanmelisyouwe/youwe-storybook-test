# Sync report — 14 November 2026 (Home feedback, round 2)

## Changes

- **Case carousel Pinned** uses the regular **Case Cards** again. The wide reel card is gone. The pinned scroll behaviour, the 01 / 09 counter above the button and the progress line stay.
- **Giant rows (Statement / Technology logos): fixed the image fill.**
  - The cause: the image URL was passed in a CSS custom property. A relative URL there resolves against the stylesheet (`assets/`), not the page, so the image 404'd and the row stayed transparent.
  - The fix: the image is now set as an inline `background-image`.
  - The result: "We pick the platforms" on Home is image-filled, as on the v2 site.
- **ACI Weave:**
  - Removed the background image.
  - Fixed the sticky text column. The background had added `overflow: hidden` to the section, which stops `position: sticky` from working.
  - The panels with caption bars and the two buttons stay.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Checked in a browser at 1440, on Home and in the ACI Weave story:
  - The image-filled row shows.
  - The reel shows Case Cards and moves sideways.
  - The ACI Weave title stays at the same place (162px from the top) while the page scrolls 0 → 900px.
