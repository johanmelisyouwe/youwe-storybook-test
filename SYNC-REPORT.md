# Sync report — 11 November 2026 (video in the Media block)

## Media block can show a video

Content blocks/Media now takes a video in the image's place, in every layout (Contained, Full bleed, Two-up, Two-up staggered).

- New props (not Figma properties): `video` and `video2` (Two-up), and `Autoplay`.
- With a video, the frame is the Video Player and the image becomes its poster. It keeps the same ratio, the full-bleed square edges and the clip reveal on scroll.
- **Autoplay "In view" (default):** plays muted and looped while half of it is on screen, with the pause button in the corner.
- **Autoplay "Off":** shows the red play button.
- **Reduced motion:** never autoplays.
- New story **Content blocks/Media → With video**, with controls for Layout and Autoplay.
- Video Player has a new `ratio` prop (default 16 / 9) so the Media block can use its own frame sizes.

## Work detail

The full-bleed image is now a video (Autoplay "In view"). Until the real case video arrives it plays a 10-second placeholder clip made from the same XXL photo (`public/media/video/placeholder-xxl.mp4`, 16:9, about 500 KB, no sound; `video('xxl')`).

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Work detail (desktop and iPhone 13): the video plays when in view, edge to edge with square corners.
- Media With video: Contained and Two-up play in their frames (1280×666, 632×736) with radius 4.
