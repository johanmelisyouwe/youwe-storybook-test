# Sync report — 9 November 2026 (batch 9)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: no Figma changes to these blocks since the inventory (signatures unchanged). Step 4 for the last content blocks. Templates (step 5) are not part of this run.

Batch 8 decisions: Case carousel keeps the swipe row; the Tech partners group-label text style is on BACKLOG.md.

## Step 4: content blocks

| Block | Story | Variants |
|---|---|---|
| Accordion list | Content blocks/Accordion list | 12 of 12 (Layout × Mode × Device) |
| Build your stack | Content blocks/Build your stack | all (Mode × Device) |
| Offices | Content blocks/Offices | all (Mode × Device) |
| Leadership | Content blocks/Leadership | all (Mode × Device) |
| Awards | Content blocks/Awards | all (Device) |
| Contact CTA | Content blocks/Contact CTA | 6 of 6 (Variant × Device) |
| Filter bar | Content blocks/Filter bar | 3 of 3 (Desktop, Mobile, Mobile Open) |

How they were built:
- **Accordion list**: Stacked, Split and Split list (header with bullets) layouts; Plus-Minus accordions with the first item open; "More questions?" CTA. Copy: the ACI Weave FAQ from the templates (the Figma component has placeholder labels).
- **Build your stack**: goal tabs (Tab group) switch a panel with the goal intro, four partner Technology Cards and a full-width Case Card. Copy from Figma ("Sell B2B online": Alumio, Adobe, Hyvä, Pimcore and the XXL Nutrition case).
- **Offices**: header ("Eight offices, one team") and the eight Locations with live local clocks.
- **Leadership**: section intro and ten Person Cards (name and role) in four columns, two on mobile.
- **Awards**: title and four award badges.
- **Contact CTA**: Form (First/Last name, Business email, Phone, Country, Message, opt-in checkbox, Send message; phone link in brand red), Sub-footer split (image half with a clip reveal) and Sub-footer background (image with a gradient overlay). Built from the existing form components and buttons.
- **Filter bar**: desktop system tiles (toggle, `aria-pressed`) and five dropdowns that show "All" until set; mobile system pills, a Filters button with the active count and "9 cases", and a bottom sheet (Clear all, five dropdowns, "Show 9 cases") that slides up.

Visual comparison with Figma: every block compared at desktop and mobile. Fixed in this run: Contact CTA inputs show the Figma placeholders, mobile form keeps the two-column rows and a full-width button, the split image sits above the text on mobile; Filter bar arrows sit next to the tile label and the result count is right-aligned.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (74 complete, 1 missing = Pagination, 54 internal; 19 templates missing)

## Could not match exactly

- **Images, logos and badges** are placeholders (images not imported yet): partner logos show the name, case/office/contact images and award badges show the placeholder.
- **Build your stack**: Figma only has content for "Sell B2B online"; the other four goals are tabs without panel content.
- **Person Card** (Figma 26763:60) is used by Leadership but is not in the inventory, so it has no own story entry; it is exported from Leadership.
- **Filter bar selected tile**: Figma shows the selected tile with the Focused look; code uses a brand border for the selected state so it is not confused with keyboard focus.
- **Leadership copy**: Figma has "Board or Directors" for Steve Hulmes; code uses "Board of Directors".

## Open questions for the design team

1. Should the selected Filter bar tile get its own Selected state in Figma (instead of Focused)?
2. Content for the other four Build your stack goals.
3. Fix the "Board or Directors" typo in Figma?
4. Open from earlier batches: Service/System Card Motion description (no arrow rotation); Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 10: the templates (including the new Industries design). Pagination last.
