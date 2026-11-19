# Sync report — 19 November 2026 (Insight detail: Whitepaper template, first version)

New template **Templates / Insight detail / Whitepaper** (Desktop and Mobile). It is built like the Event template, so this PR is stacked on #54 (and #53).

## Approach

- **Copy only from Figma.** The text comes from "Desktop 1440 — Insight Whitepaper detail (R6)" (27263:17032), including the form, its privacy text, the FAQ and the More whitepapers cards.
- **Same layout as Event:**
  - The details panel sits next to the hero title and stays in view over the hero image until it rests beside the intro (Hero aside).
  - Then the Article block, with the meta and "On this page" on the left.
- **Images are placeholders.** The Figma red "cover" card has no image either.

## Page, in order

1. Header, then the hero: Home / Insights / Whitepaper, "Know what to fix before you invest in a data platform".
2. **Details panel** (Event details component):
   - Whitepaper: "Data foundation whitepaper" (the headline).
   - Published: October 1, 2026.
   - "Download the whitepaper", which jumps to the form.
3. **Intro** (Text + media 8/4, right column for the panel):
   - Heading: the first sentence.
   - Body: the rest, plus the "Written by Youwe’s data team…" line from the Figma cover.
4. **Chapter tiles:** the three Figma tiles as Feature Cards with numbers 01–03.
5. **Article:**
   - Meta: Type Whitepaper, Topic Data Management.
   - Nav: What you will get · Why download it? · Download · Questions.
   - "What you will get": intro, then "Inside you will find:" with the five items.
   - "Why download it?": three items, plus the download button.
   - **Download the whitepaper:** the form.
   - **Questions you may have:** FAQ accordions.
6. More whitepapers (three Insight Cards), "Where does growth get stuck?", footer.

## Component changes

- **Registration form:** now also used for downloads.
  - New `phone` (the Phone number field), `optIn` (default on; off for the whitepaper) and `notice` (text under the fields; here the Figma privacy text with a Privacy Policy link).
  - `successTitle` can use `{name}`.
  - The whitepaper confirmation: "Thank you, {name}" and "The whitepaper arrives in your inbox straight away." (from the Figma FAQ).
  - New story: Download.
- **Feature Card:** `Description` is now optional, for the chapter tiles that have a title only. Cards with a description are unchanged.

## Please check

- **Mine:** the confirmation title "Thank you, {name}", the "Download" nav label and the "Download" kicker above the form.
- **Left out of the form:** the Figma form has no opt-in checkbox. I left it out, so the privacy text explains the contact.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- At 1440:
  - The panel starts beside the title and stays in view while scrolling.
  - "Download the whitepaper" glides to the form.
  - A filled-in submit shows "Sending…" and then the confirmation in view.
- At 390 everything stacks.
- No console errors.
- The CMS integration doc has a row for Whitepaper.
