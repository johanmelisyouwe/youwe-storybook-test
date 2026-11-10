# Sync report — 10 November 2026 (mobile & layout fixes)

First batch of the backlog from the 10 November review. Decisions: arrow button top-right on touch cards; hamburger below 1024px; templates follow the screen width.

## Fixed

- **Templates work on a real phone.** The Desktop template stories now follow the screen: below 768px they render the mobile variants (slider, cards, hero, filter bar, footer…), so opening a Desktop template on a phone shows the mobile design instead of a squeezed desktop. The Mobile stories still always render mobile at 360px. (`useDevice` in `src/templates/shared.tsx`.)
- **Header: hamburger below 1024px.** Header and Footer have a new `Device="Auto"`: both versions render and the screen width picks one (header below 1024px, footer below 768px). Templates use it; the Header and Footer stories have a *Responsive* story to try it by resizing.
- **Mobile footer** now shows on phones (same mechanism).
- **Horizontal scroll.** Found on Work (mobile): the filter pills row stretched its grid wider than the screen. Fixed, and as a safeguard every content block and template page clips sideways overflow (`overflow-x: clip`, which keeps sticky/pinned sections working). Bleeding rows (case carousel, giant text, logo marquee) stay inside the page. The case carousel itself still swipes sideways, by design.
- **Cards on touch screens:** no red hover overlay; an always-visible round arrow button top-right (the Figma hover arrow tile). Cards that already show their own arrow button (Service, Technology, Feature) keep theirs. On case cards the client logo moves left of the arrow.
- **Static arrow on hover (desktop):** on Service and System cards the card's own arrow button no longer moves up with the text when the red overlay comes in.
- **Hero:** long titles no longer run under the header (top padding equal to the header area). At 1440 the hero looks the same.

Checked on an emulated iPhone 13 (Home, Work, Services detail, Tech Partners, Industries, Work detail: no sideways scroll, hamburger, mobile footer, touch arrows) and at 1440 (unchanged).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean

## Backlog

The five items above are removed from BACKLOG.md. Next batch: logos (Figma logo boxes, case card padding, remaining exports) and the stat card hover.
