# Sync report — 11 November 2026 (keyboard navigation, Video Player)

## Keyboard navigation

Tested with the keyboard only on the templates (desktop and iPhone 13). Four fixes:

- **Skip to content:** the first Tab on every page now shows a "Skip to content" link at the top left. Enter moves focus past the menu to the page title, so the next Tab lands on the first link in the page (e.g. "See our work" on Home).
- **Header comes back on focus:** the header hides while you scroll down. Tabbing (or Shift+Tab) back into it now brings it back, so the focused link is never off screen.
- **Nothing hides the focused item:** the page keeps a margin below the fixed header and above the Ask Youwe bar when it scrolls to the focused element. "All cases" and "Get in touch" used to end up under the Ask bar (WCAG 2.4.11).
- **Mobile menu holds focus:** opening the menu moves focus into it, Tab and Shift+Tab stay inside the menu while it's open, and Esc or Close puts focus back on the menu button.

Already fine: every link and button has a visible focus ring, the tab order follows the page, and Esc closes the menu, the mega menu and the Ask panel.

## Video Player (new component)

`Components/Video Player`: a basic player for the "Video" frames. There's no Figma component for it (registered as code-only in figma-sync.json; a Figma component is proposed for design review).

- **Autoplay "Off":** the poster with the red play button. Click or Enter plays the video with the browser's own controls.
- **Autoplay "In view":** plays muted and looped while at least half of it is on screen, and pauses when it scrolls away. A small pause button sits in the corner (WCAG 2.2.2). Once someone pauses a video, it doesn't start again by itself.
- **Reduced motion:** never autoplays; it shows the play button instead.
- Optional WebVTT captions (`captions`). Without a `src` it shows the poster only.

**ACI Weave** now uses the Video Player with Autoplay "In view" (new `Autoplay` prop, default "In view"; the story has a control to switch to "Off"). Until the real videos arrive, the three videos are 8-second placeholder clips made from their poster images (`public/media/video/`, about 140 KB each, no sound; `video()` in `media.ts`).

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Keyboard (Playwright): skip link moves focus to the h1; a hidden header shows when a link in it gets focus; no focused item under the header or Ask bar on Home; mobile menu keeps focus inside and returns it on Esc.
- Video: in-view videos play when half visible and pause off screen; a paused video stays paused after scrolling back; "Off" plays on Enter with controls; with reduced motion nothing autoplays. On Home the first two ACI Weave videos play when the section is in view.
