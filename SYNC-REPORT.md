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
