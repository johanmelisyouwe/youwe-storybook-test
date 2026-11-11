# Sync report — 11 November 2026 (Quooker video on Work detail)

## Work detail: the real Quooker video

The full-bleed media on Work detail now plays the Quooker video from Vimeo ("INTER | Late summer video", 30 s, 16:9) instead of the placeholder clip made from a still photo.

- **Autoplay "In view":** Vimeo's background mode (muted, looped, no Vimeo controls). It starts when half of it is on screen and pauses when it scrolls away. The pause button stays in the corner, and once someone pauses it, it stays paused.
- **No jarring start:** the Quooker photo shows first, and the video fades in (duration/slow) only once its frames are actually playing, so there's no black frame or jump.
- **Reduced motion:** it doesn't autoplay; the red play button opens the Vimeo player with sound and controls.

## Video Player: Vimeo support

- A `player.vimeo.com` URL as `src` now plays in Vimeo's player. It's driven through Vimeo's postMessage API, so no extra script is loaded.
- Autoplay "In view" uses background mode. "Off" opens the normal Vimeo player (sound, controls) after a click.
- Works anywhere the Video Player is used, including Content blocks/Media (`video`).
- New story **Components/Video Player → Vimeo**.
- `QUOOKER_VIDEO` in `media.ts` holds the URL (`dnt=1`, so Vimeo doesn't track viewers).

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Vimeo can't be reached from the build environment, so the integration was tested against a stand-in player that speaks Vimeo's message protocol:
  - The video stays hidden until it plays, then fades in.
  - It plays in view and pauses on the pause button.
  - It stays paused after scrolling back.
  - "Off" opens the player with autoplay and sound.
  - Reduced motion shows only the play button.
- To be checked once live: the real Vimeo video on GitHub Pages.
