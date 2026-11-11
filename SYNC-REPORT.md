# Sync report — 11 November 2026 (intro, award badges, dark page, slider Scroll variant)

## Dark behind the page

The macOS overscroll bounce showed white above the page. The page behind everything is now dark: the Storybook UI page (`html, body`), the story canvas (`html`, base-1 so it follows the mode) and the Next.js app (`html` in base.css).

## Introduction page

Rebuilt in the design system's own styling (dark site surface, tokens, `.yw-*` text styles, the Youwe logo):
- Intro with live counts from `figma-sync.json` (76 components in sync, 25 content blocks, 19 templates, AA contrast).
- What's here: Foundations, Components, Content blocks and Templates cards that open the section.
- Principles, Using this Storybook (mode, viewport, accessibility, states), From Figma to code (5 steps), For developers (stack, folders, docs to read, typeface) and links to the Figma file and the repository.
Docs pages now use a dark docs theme (same colours as the Storybook UI), so the page no longer sits on white.

## Trusted by industry leaders: badges

The Awards row showed grey placeholders. The four badges are exported from Figma (Awards/Northern-Digital-Award, Certificates/LRQA, Awards/Award-winning-B2B-Implementation, Certificates/GPTW) to `public/media/awards/`, with the Figma page backgrounds removed. They're white line art in Figma, so the Awards block draws them in `content/primary` (they follow light and dark mode). Used on About Us and in the Awards stories.

## Vertical slider: Behaviour Scroll

New code variant `Behaviour` next to the Figma variants:
- **Click** (default, unchanged): hover, focus and click on the index switch slides; mobile is stacked.
- **Scroll**: the section stays in the viewport while you scroll through it, the progress line at the bottom fills with the scroll and the slides change one by one. Works on desktop (index on the side, background wipes) and on mobile (one slide per screen with step bars and a "02 / 03" counter; the tagline is left out so a slide fits one screen). A click on an index item scrolls to that chapter. The progress line is on by default for Scroll.
- With reduced motion, Scroll falls back to Click (nothing pins).
- The docked Ask Youwe bar steps aside while a pinned section fills the screen, so it doesn't cover the slide.
- Stories: *Scroll* and *Scroll Mobile* (replace *Pinned*). The old `pin` prop still works.
- **Home's What we do now uses Behaviour Scroll** (desktop and mobile).

Not in Figma yet: the Behaviour variant (noted in figma-sync.json).

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`, `pnpm build`: pass
- Scroll variant tested on Home at 1440 and on an iPhone 13: the frame stays at the top, the active slide goes 01 → 02 → 03 and the line fills with the scroll (5% → 50% → 95%).
