# Sync report — 19 November 2026 (Insight detail: Blog template)

New template **Templates / Insight detail / Blog** (Desktop and Mobile). It is the first of the insight detail pages; News, Whitepaper, Event and Video follow after review.

## Approach

- **Copy only from Figma.** The text comes from "Desktop 1440 — Insight Blog detail (R6)" (27263:16555). That frame's layout and blocks are not used.
- **Modelled on the case page (Work detail)**, so it reads as an editorial, long-form article. It uses existing components only.
- **Images are Storybook placeholders** (abstract images and the Kingspan case photo), not the Figma stand-ins.

## Page, in order

1. Header, then a Title + image hero with the breadcrumb Home / Insights / Blog.
2. **Case intro:**
   - Meta: Published, Type, Topics.
   - Lead: the intro paragraph.
   - Rich text: "The Wennink report in brief" and "The key facts" as a list with bold lead-ins.
3. **Key figures** as Stats (Plain): €151–187bn, 1.5–2%, €6.6bn.
4. Contained media.
5. **Article sections** as Two-column text 4/8 (small label, heading, rich text):
   - What the Dutch government is doing with it: a list with a pull quote.
   - Why digitalization and AI are so central.
   - A full-bleed image.
   - What this means for your organization.
6. **Investment-ready in 6 steps** as a numbered Feature list (Split).
7. **How Youwe helps** (Two-column text with a list), then **An example from practice** (Text + media, Kingspan, "Read the case"), then the closing question with "Contact Youwe".
8. **FAQ** as an Accordion list (Split).
9. **Sources** (numbered links and the note).
10. **More blogs**: a Card grid of three Insight Cards.
11. Contact CTA "Where does growth get stuck?" (Contact us, Submit an RFP), then the footer.

## Component change

- **Accordion list:** `'Accordion title': ''` now hides the small title above the accordions. Use it when the heading already says FAQ. The default is unchanged.

## Not included (yet)

- **The "On this page" table of contents** from the Figma copy. It needs a new part, such as a sticky in-page nav. We are trying existing components first.
- **The "All insights" link** under More blogs. The Card grid has no button.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Desktop (1440) and mobile (390) screenshots checked. No console errors.

# Update — 19 November 2026 (Blog v2: "On this page" anchor nav)

New template **Templates / Insight detail / Blog v2** (Desktop and Mobile), next to v1. It adds the "On this page" quick links from the Figma copy, styled our way.

## Blog v2

- **Same top as v1:** hero with breadcrumb, intro with meta and lead, key figures, image.
- **Then the article** runs in a new **Article** block:
  - A sticky "On this page" nav sits on the left.
  - All sections are in one reading column on the right (740 wide, the same as the intro text): the report in brief, the government, why AI, what it means, the 6 steps, how Youwe helps (with the Kingspan example as a Case Card and the closing line), FAQ and sources.
  - Every nav item points into that column.
- **Same end as v1:** More blogs, the contact section and the footer.

## New: Anchor nav (Components / Anchor nav, code component)

- **Title:** "On this page", in brand red (`labels.title`, so it can be translated).
- **Desktop:** links on a thin rail. The section you are reading is marked in white with a red bar (scroll spy). Hover turns a link white, and the focus ring is the shared one.
- **Mobile:** a collapsed bar that shows "On this page" and the current section. Tap it to open the list; picking a link closes it.
- **`current`:** optional, for a fixed marked link.

## New: Article (Content blocks / Article, code block)

- **Sections:** `{ id, nav?, kicker?, heading, body, steps?, faq?, children? }`.
  - The nav is built from the sections.
  - Anchor jumps leave room for the fixed header.
- **Layout:** 4/8 grid like Two-column text 4/8. The nav column is sticky.
  - Mobile: one column, with the nav above the sections.
  - `nav={false}` gives a single centred reading column.
- **Steps** reuse Feature Card Plain with numbers, as in Feature list Split. **FAQ** reuses the Accordion (Plus-Minus).

## Other changes

- **Case intro:** `body` is now optional, for when the article follows below. Existing uses are unchanged.
- **Copy file:** the Blog copy moved to `src/templates/insight-blog.copy.tsx`, which v1 and v2 share. v1 looks the same.
- **figma-sync.json:** Article and Anchor nav added as code-only.
- **CMS integration doc:** rows added for Blog and Blog v2.

## Checks (v2)

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- In a browser at 1440:
  - The nav stays in view while scrolling, and the marked link follows the section being read.
  - Clicking "FAQ" jumps to the FAQ with the header space kept, and marks FAQ.
- At 390: the "On this page" bar opens and closes, and shows the current section.
- No console errors.

# Update — 19 November 2026 (spacing and alignment fixes)

## Blog v2: nav closer to the text

- **Article block:** the 4/8 grid left a wide gap between the links and the text on large screens. The layout is now a narrow left column (288) with the reading column (740) right next to it, 80 apart, at every width.
- **Meta in the left column:** the Article block can now take `meta` and `lead`.
  - The published date, type and topics now sit above "On this page", in the same style as the case intro.
  - The lead opens the reading column.
- **The v2 page:** hero, key figures, then the article. The separate intro block and the extra image were dropped, so the meta, the links and the text share one grid.

## v1: columns line up

- **Feature list (Split) and Accordion list (Split):** the right column is now 740 wide and right-aligned, like the Case intro text and the Two-column text 4/8 body.
  - On wide screens the steps and FAQ started further left than the text above them.
  - At 1440 the change is 4px.
  - This applies wherever these blocks are used, such as Service detail.
- **Checked at 1440 and 1920:**
  - The intro text, the two-column bodies, the steps and the FAQ all start at the same x (620 at 1440, 1100 at 1920).

# Update — 19 November 2026 (Blog v2: intro beside the key figures)

This follows Rob's idea: the key figures sit higher, next to the intro, like the Industries detail intro (text left, case card right).

- **Order:** under the hero image, a Text + media (6/6).
  - Left: the intro, with its first sentence as the heading and the rest as the body.
  - Right: the three key figures stacked.
  - Below that: the article, with the meta and menu on the left and the text on the right.
- **Why 6/6 and not 8/4:** with 8/4 the figure "€151–187bn" broke over two lines.
- **Stat row:** new `vertical` option that stacks the Stat cards with overlapping borders. Existing rows are unchanged.
- **Spacing:** the article section starts closer to the intro (`flush="top"`), so the two read as one opening.
- **Mobile:** intro, then the stacked figures, the meta, the "On this page" bar and the article.
- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass. No console errors at 1440 or 390.
