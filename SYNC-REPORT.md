# Sync report — 9 November 2026 (batch 7)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: no Figma changes to these blocks since the inventory (signatures unchanged). Step 4 for the text and media content blocks. Templates (step 5) are not part of this run.

Batch 6 decisions applied: theme toggle on the backlog; the duplicate "Digital Experience" footer link is removed in Figma (all four Footer/Corporate variants).

**Header update (9 November):** Ask Youwe is removed from Header/Corporate, because the site uses the sticky docked Ask Youwe bar. Removed in Figma (the Ask Youwe layers in all four variants and the "Show Ask Youwe" property) and in code (desktop pill, mobile orb button and the bar in the mobile menu). The Ask Youwe feature column of the mega menu stays.

## Step 4: content blocks

| Block | Story | Variants |
|---|---|---|
| Hero (+ _Hero/Bar, _Hero/Label) | Content blocks/Hero | 4 of 4 (Device × Variant); bar Logos/Stats; label Subtitle/Breadcrumb |
| Section header | Content blocks/Section header | 4 of 4 (Device × Alignment) |
| Section intro | Content blocks/Section intro | 8 of 8 (Layout × Mode × Device) |
| Statement | Content blocks/Statement | 2 of 2 (Device) |
| Text column | Content blocks/Text column | 4 of 4 (Device × Alignment) |
| Two-column text | Content blocks/Two-column text | 4 of 4 (Device × Split) |
| Case intro | Content blocks/Case intro | 4 of 4 (Device × Meta position) |
| Text + media | Content blocks/Text + media | 30 of 30 (Device incl. Tablet × Media position × Split × Theme) |
| Media | Content blocks/Media | 8 of 8 (Device × Layout) |
| Testimonial | Content blocks/Testimonial | 2 of 2 (Device), with/without image |

How they were built:
- **One block frame** (`src/components/shared/block.css`) for all content blocks: the Figma 1280 container with 80px gutters and 120px vertical padding, 32/80 on tablet and 12/64 on mobile. The layout switches use container queries, so a block in a 360px frame lays out as mobile (the stories show desktop and mobile side by side). Text sizes follow the viewport tokens.
- **Motion** from the Figma descriptions, with CSS scroll-driven animations where the browser supports them (static otherwise, and off with reduced motion):
  - Hero: title lines rise in a mask (`duration/cinematic`, +120ms per line); optional recede over the first 860px of scroll; the logo/stat bar is a 40s marquee that pauses on hover.
  - Section header and Section intro: title words rise in a mask (`duration/reveal`, half a stagger per word). The Section intro body lights up word by word as you scroll (28% → 100%, never fades back).
  - Text column, Two-column text, Case intro, Text + media: block reveal. Media and the Text + media image: clip reveal (inset 18%/8% → 0, scale 0.96 → 1).
  - Statement: optional giant decorative rows, rebuilt after the v2 site's partners section (the team's reference): oversized headline type, one image-filled row and one outlined row, drifting (p − 0.5) × 18% in opposite directions as the block scrolls through the viewport (aria-hidden; off with reduced motion). The image fill falls back to the Ask Youwe glow colours until images are imported.
  - Testimonial: with several quotes it auto-advances every 7s using a View Transition (old quote blurs 6px and lifts, new one rises in) and pauses on hover, focus and when off-screen.
- **Accessibility**: word-split headings keep the plain text for screen readers; the Hero marquee duplicates its items for the loop but hides the copy from screen readers; Case intro meta is a definition list; Testimonial is a `figure` with `blockquote`.
- **Copy** from Figma: Hero ("Complex products. Clear platforms."), the Quooker case texts (Text column, Two-column text, Case intro, Statement), Section header/intro, Text + media ("Global thinking, global understanding"). The Testimonial uses the Bunzl quote (Figma has default copy there).

Visual comparison with Figma: every block compared. Fixed in this run: background media (Hero, Testimonial, Vertical slider) no longer shows the placeholder icon.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean (marked exception: the Hero's +120ms per title line, which has no motion token)
- `check-coverage`: clean (59 complete, 16 missing, 54 internal, 1 not needed, 1 parked; 19 templates missing)

## Could not match exactly

- **Images and video** (Hero background, Title + image, Media, Text + media, Testimonial photo) show the empty Figma image frame; images are on the backlog.
- **Client logos** in the Hero bar: only G-Star is exported; the other seven show the client name until the logos are exported.
- **Statement giant rows** are described in Figma but not drawn; code follows the v2 site (size clamp(72px, 15vw, 260px), line-height 0.92, letter-spacing −0.04em, 1.5px outline), marked `legacy-ok` because Figma has no text style for it.
- **Section header** has a hidden "Eyebrow" layer in the Centered variant; code only shows the kicker on Left, as in Figma.
- **Mobile text sizes** in the side-by-side story frames follow the desktop viewport; the Mobile stories (mobile viewport) show the real mobile sizes.

## Open questions for the design team

1. Statement: add the giant rows to the Figma component (as on the v2 site), with a text style for the giant size?
2. Open from earlier batches: Service/System Card Motion description (no arrow rotation); Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 8: the grid blocks — Card grid, Case carousel, Stats, Feature list, Services split, Tech partners split, Technology logos, Solutions grid, Build your stack, Accordion list, Offices, Leadership, Awards, Contact CTA, Filter bar. Then the templates; Pagination last.
