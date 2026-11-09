# Sync report — 9 November 2026 (batch 8)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: no Figma changes to these blocks since the inventory (signatures unchanged). Step 4 for the grid content blocks. Templates (step 5) are not part of this run.

Batch 7 follow-ups: Statement giant rows stay code-only for now (BACKLOG.md); Ask Youwe removed from the header (Figma and code); Vertical slider follows the v2 site "What we do".

## Step 4: content blocks

| Block | Story | Variants |
|---|---|---|
| Card grid | Content blocks/Card grid | 36 of 36 (9 layouts × Mode × Device) |
| Case carousel | Content blocks/Case carousel | 8 of 8 (Layout × Device) |
| Stats | Content blocks/Stats | 8 of 8 (Type × Mode × Device) |
| Feature list | Content blocks/Feature list | 4 of 4 (Layout × Device) |
| Services split | Content blocks/Services split | 4 of 4 (Mode × Device) |
| Tech partners split | Content blocks/Tech partners split | 4 of 4 (Mode × Device) |
| Technology logos | Content blocks/Technology logos | 20 of 20 (Layout × Mode × Device) |
| Solutions grid | Content blocks/Solutions grid | 1 of 1 |

How they were built:
- **Built from the existing components**: the blocks use the cards, Stat, Section intro/header, Ask Youwe snippets and buttons from earlier batches, on the shared block frame (container-query layouts, so a narrow frame lays out as mobile).
- **Card grid**: all nine Figma layouts (2/3/4/5 columns, Wide + 1, 1 + Wide, Feature + 4, Feature + 2, Overflow scroll); cells take any card and stretch to the row height; cards reveal staggered on scroll. The MixedCards story fills a Feature + 4 grid with a Case, Stat, Quote, Service and Insight card.
- **Case carousel**: Short (header, prev/next and a 01 / 08 counter on the left, cards bleeding off the right edge), Full width 3 / 4, and Scroll. Native snapping scroll; tabbing to a card scrolls it into view; prev is disabled at the start.
- **Stats**: Client (logo + arrow) and Plain, with overlapping borders and count-up on scroll.
- **Feature list**: Grid (rows of three Cards) and Split (header left, numbered Plain list right with a closing border).
- **Services split / Tech partners split**: shared left column (kicker, heading/2xl, body, link, Ask Youwe snippets); Service Cards in two staggered columns, or Technology Cards grouped under Integration, Data platforms and Cloud.
- **Technology logos**: fixed slots per row (Grid 4/5/6/8) with overlapping borders, empty slots without a border, staggered reveal and hover opacity. Default reuses the Statement's giant drifting rows ("We pick the platforms / that fit your business").
- **Solutions grid**: title and three-column image cards with the Figma copy.
- **Kit fix**: `check-legacy` read the first `title:` in a story file as the Storybook title, which broke on story data with card titles; it now picks the meta title (the value with a "/").

Visual comparison with Figma: every block compared. Fixed in this run: the Ask Youwe case snippet no longer shows the placeholder icon behind its text.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (67 complete, 8 missing, 54 internal, 1 not needed, 1 parked; 19 templates missing)

## Could not match exactly

- **Case carousel motion**: Figma describes a pinned horizontal reel (vertical scroll moves the track, images shift ±6% inside the cards). Code uses a snapping scroller with prev/next and the counter (decided: keep the swipe row).
- **Logos and images**: technology and client logos show the name (logos not exported yet); case, solution and snippet images show the Figma placeholder (images on the backlog).
- **Card grid "Person", "Content" and "Office" cells** are listed in Figma as cell options but are not components yet; any card can go in a cell.
- **Tech partners group labels** have no text style in Figma (raw 12px caps); code uses body/xs/bold in capitals.
- **Feature list copy**: the Figma Feature Cards have default copy; the stories use the services.

## Open questions for the design team

Decisions (9 November): Case carousel keeps the swipe row (no pinned reel); the group-label text style is on BACKLOG.md.

1. Open from earlier batches: Service/System Card Motion description (no arrow rotation); Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 9: the remaining blocks — Accordion list, Build your stack, Offices, Leadership, Awards, Contact CTA, Filter bar. Then the templates (including the new Industries design); Pagination last.
