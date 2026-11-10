# Sync report — 10 November 2026 (motion, stat hover, logo colour)

Backlog batch 6 (expressive motion, after the v2 site) plus two fixes from your review of batch 5.

## Fixes from review

- **Stat hover = the card hover.** A linked Client stat now behaves like the other cards: the whole card is the link and the red overlay wipes up with "Read the case" and the client name (Card reveal, duration/card). Square corners, because stats sit edge to edge in rows. Touch screens keep the always-visible arrow. In Figma the four Stat *State=Hover* variants are rebuilt the same way (the Rest card + the shared "Hover · red overlay", CTA "Read the case", context "Quooker").
- **Youwe logo back to the original red.** The contrast fix (batch 3) made brand text lighter (brand-red/200), and the logo used the same colour. The logo, and other graphics and large text, now use `shared/surface/fixed/brand-red` (always the original brand red): the logo mark, card arrow tiles, testimonial accent and dots, list icons, the hero's second title line, Vertical slider values, quote marks and the active link in the mobile menu. Logos are exempt from contrast rules; graphics and large text need 3:1, which the original red passes (3.9:1 on dark). Small brand text (footer headings, card numbers, kickers) stays on the lighter, readable red.

## Motion on the templates

One motion layer for every template page (`src/components/shared/motion.ts`), using an IntersectionObserver, so it works in every browser and staggers are real (the previous scroll-timeline reveals ran in Chrome only and their stagger delays did nothing). Everything plays once and is then handed back to the component (so hover zooms keep working).

- **Section reveals:** text blocks, section intros, the ACI Weave text and the Insights heading fade in and rise 48px (distance/lg, duration/reveal, ease/emphasized).
- **Card staggers:** cards in card grids, logos in technology grids, stats in stat rows, insight cards, ACI Weave videos and filter tiles come in one after another, 80ms apart (motion/stagger).
- **Image clip reveals:** card and content images open from an inset clip while the image settles from a 12% zoom (duration/zoom). Background images (hero, testimonial, slider, sub-footer) are left out.
- **Hero entrance:** label, then the title lines (as before), then body, buttons and the logo bar rise in, while the background image settles from a slight zoom.
- **Count-ups:** the hero bar stats now count up like the stat cards.
- Already in place and kept: pinned What we do slider, drifting giant rows (Statement, Technology logos), section title word rise, sub-footer image clip, header and Ask Youwe motion.
- **Reduced motion:** nothing is hidden or moved (the layer doesn't start, and the motion tokens drop to 1ms).
- Without JavaScript everything is simply visible.

Component stories stay still (motion runs on the templates), so components are easy to review.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean
- Scrolled through all 10 desktop templates and Home + Insights on an iPhone 13: every revealed element ends visible (cards in the case carousel reveal as they're swiped in), no horizontal scroll.

## Backlog

Removed: more motion on the templates. Open: contrast colours in Figma (blocked), Statement giant rows in Figma (later), proposed components review, docked Ask Youwe bar placement in Figma, theme toggle, Industry List Item (parked), Action List copy, client quotes, image rights, CMS images.
