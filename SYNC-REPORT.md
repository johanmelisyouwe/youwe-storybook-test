# Sync report — 10 November 2026 (logos & states)

Backlog batch 2: logos in their Figma boxes, the remaining logo exports and the stat card hover.

## Logos

- **Figma logo boxes everywhere.** In Figma every client and technology logo is a 190×100 frame with the logo placed inside with its own margins (Clients/*, Technologies/*), and the partner logos on Tech Partners are 120×40 frames (Logos/*). The logo files are now those frames, so a logo drawn at a slot size carries the Figma margins: case cards 140×74 (One quarter 104×55, mobile 112×59), stats 80×42, hero logo bars and the technology grid 118×62, partner cards 120×40, case hero 190×100.
- **Case card logo** no longer touches the edges: the image keeps its Figma padding (8/16) and the logo its box margins.
- **19 more logos exported** (the partner logos on Tech Partners and Build your stack): Databricks, Microsoft Fabric, Google Cloud, OpenAI, n8n, Spryker, Contentful, DotDigital, Salesforce, Klaviyo, Algolia, Tweakwise, Klevu, Channable, Adyen, Buckaroo, Mollie, Sendcloud, Hypernode. Partner cards now show logos instead of names.
- `Logo` takes the slot `width` (and `kind="partner"` for the 120×40 partner box); `ClientLogo` uses it. Logos stay one colour (text colour), so Databricks' red mark is drawn in the text colour too.
- Unipart has no logo in Figma, so it still shows the name.

## Stat card hover

Not in Figma yet, so designed in code to match the cards: the whole Client stat card is the link; on hover the card goes to surface/base-2 and the round arrow fills brand red with a light arrow (duration/fast). No hover on touch screens. New *Hover* story. Adding the state to the Figma Stat component is on the backlog (Figma batch).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean

Visual check: Home (stats, hero logos, carousel), Tech Partners (partner cards), Case carousel and Stat stories.

## Backlog

Removed: case card logo padding, Figma logo boxes, stat hover, remaining logos. Added: Stat hover in Figma. Next: text contrast.
