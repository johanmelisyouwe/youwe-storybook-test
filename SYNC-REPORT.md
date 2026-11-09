# Sync report — 9 November 2026 (batch 5)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: no Figma changes to the components in this batch since the inventory (signatures unchanged). Step 4 for the cards and list components below. Templates (step 5) are not part of this run.

Batch 4 follow-ups: breadcrumb links have a Hover state in code; BACKLOG.md added (Pagination last, Breadcrumbs back button variant, Figma hover state for `_breadcrumb-link`).

## Step 4: components

| Component | Story | Variants |
|---|---|---|
| Case Card (+ _Case Card/Stat) | Components/Case Card | 20 of 20 (5 sizes incl. Mobile × Mode × State); stat Type × Size 10 of 10 |
| Insight Card | Components/Insight Card | 16 of 16 (Variant × Device × Mode × State) |
| Service Card | Components/Service Card | 4 of 4 (Mode × State) |
| System Card | Components/Service Card | 4 of 4 (Mode × State) |
| Technology Card (+ logo placeholder) | Components/Technology Card | 8 of 8 (Layout × Mode × State) |
| Feature Card | Components/Feature Card | 12 of 12 (Device × Variant × Mode) |
| Quote Card | Components/Quote Card | 4 of 4 (Mode × Device) |
| Image Card | Components/Image Card | 2 of 2 (Mode) |
| Stat | Components/Stat | 8 of 8 (Type × Size × Mode) |
| Location + Clock | Components/Location | 4 of 4 + 2 of 2 |
| Industry List Item | Components/Industry List Item | 8 of 8 (Device × Expanded × Mode) |

How they were built:
- **One shared red reveal** (`src/components/shared/card-reveal.css`, `CardReveal`) for Case, Insight, Service, System and Technology Card, as the Figma descriptions say "same red reveal". The red panel wipes up from the bottom (clip-path), its text slides in 40px from the right and fades in, `duration/card` + `ease/card`. Keyboard focus plays it too, with the focus ring on top. Service and System Card add the "lift": the card text slides up `distance/card` and fades, and the arrow turns.
- **Each linked card is one link** (Figma: "Whole card is one link"). Tags and "Read more" inside a linked card are drawn as text, not separate links, so there are no links inside links.
- **Mode** (Dark / Light) is the theme: every card uses the Figma tokens, and the stories show both modes side by side.
- **Case Card**: the sizes keep the Figma image proportions; the client logo sits top-right over the legibility gradient; the result stat (`_Case Card/Stat`, all five types in L and M) sits bottom-left. Copy from the Figma Case carousel ("How a Design System strengthened G-Star's brand consistency", +43% marketable catalog uplift).
- **Insight Card**: Default and Featured (heading/lg title plus "Read more"). Copy from the Figma Insights page.
- **Service / System / Technology Card**: copy from the Services split block, the Card hover example and the partners overview (Databricks, Microsoft Fabric, Pimcore, Shopify Plus).
- **Feature Card**: Card, Plain (top divider) and AI (Ask Youwe surface and aura). Optional image, arrow, tags, button and link are props. Scroll reveal (`reveal`) uses CSS scroll-driven animation where the browser supports it.
- **Quote Card**: the Bunzl quote from the Figma Vertical slider (Frank Daamen). Built as `figure` / `blockquote` / `figcaption`.
- **Stat**: Client and Plain, L and M; optional count-up on scroll (1.6 s ease-out, once), as in the Figma description. Values from the Figma Stats block. The story is titled **Components/Stat**, so "Content blocks/Stats" stays free for the block itself.
- **Location + Clock**: the eight offices from the Offices block; the clock shows the live local time per office and the digits flip on change (520 ms, `ease/emphasized`).
- **Industry List Item**: the 14 industries from Figma. `IndustryList` makes the first row active and the active row follows hover and keyboard focus (Figma interaction note). The subtitle opens with `duration/slow` + `ease/emphasized`; the desktop preview fades and slides in.
- New icons from Figma: arrow-forward, arrow-upward, image. New: the G-Star client logo as SVG.

Visual comparison with Figma: every variant compared. Fixed in this run: the reveal arrow on short cards (Technology Card), and the strength of the AI aura.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (44 complete, 32 missing, 54 internal, 1 not needed; 19 templates missing)

## Could not match exactly

- **Case photos and most client logos are not in the repo.** This session cannot download images from Figma (figma.com is not on the network allow list), and the photos are too large to pass through the Figma connection. The image frames show the Figma placeholder (`surface/base-3` + image icon). Only the G-Star logo is exported (small SVG). Partner logos on the Technology Card show the partner name in the white tile.
- **Service / System Card arrow**: the Figma description says the arrow rotates −45° on hover, but the Figma Hover variant shows it unrotated. Code follows the description.
- **Technology Card logo tile**: the description says the tile is white in both modes; the Figma placeholder has no fill. Code uses a white tile.
- **Industry List Item chevron**: the description says it rotates, but both Figma variants show the same chevron. Code does not rotate it.
- **Industry subtitles**: Figma only has one (Retail: "eCommerce Infrastructures for Modern Retail"). The other industries have no subtitle.
- **Insight Card mobile image heights** are derived from the card heights (Figma does not name them).
- **Feature Card copy**: Figma only has default copy; stories use the services from the Services split block.
- **AI aura** (Feature Card) is drawn with CSS gradients and blur, close to the Figma aura but not identical.
- **Quote mark** uses the heading/2xl size (64px on desktop, smaller on mobile); Figma uses a fixed 64px with no text style.

## To unblock images (needs you)

Either add `www.figma.com` to the allowed domains for this workspace (Settings → Capabilities), so the sync can download the case photos and client logos from Figma, or put the photos in `public/images/cases/` and the logos in `public/images/clients/`, and the next sync wires them into the cards.

## Open questions for the design team

1. Service / System Card: should the arrow rotate −45° on hover (description) or stay (Hover variant)?
2. Industry List Item: should the chevron rotate when a row opens?
3. Subtitles for the other 13 industries.
4. Open from earlier batches: Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 6: Header/Corporate (+ nav links, mega menu), Footer/Corporate, Ask Youwe (+ snippet and its parts), Upcoming events, Vertical slider. Then the content blocks; Pagination last.
