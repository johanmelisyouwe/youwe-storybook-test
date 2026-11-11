# Sync report — 11 November 2026 (Vimeo fade-in fix)

Follow-up to #37, found while checking the live page. The Quooker video played on Work detail but stayed invisible. It was waiting for a `timeupdate` message to fade in, but Vimeo's postMessage API reports progress as `playProgress` (`timeupdate` is the name in Vimeo's player.js). The player now listens for both, so the video fades in as soon as it plays.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass
- Live page (before the fix): Vimeo reported play and `playProgress` (seconds 11.9 → 12.7), so the video was running behind the poster.
- Stand-in Vimeo player test with `playProgress`: fades in when in view, pause works.
