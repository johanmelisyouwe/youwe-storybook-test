# Sync report — 9 November 2026 (batch 2)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3 unchanged since batch 1 (no new Figma changes; tokens identical). Step 4 for the next set of building blocks. Templates (step 5) are not part of this run.

## Step 4: components

| Component | Story | Variants |
|---|---|---|
| Button/Filter | Components/Buttons/Filter | 15 of 15 (State × Size) + Active Filter |
| Button/Utility | Components/Buttons/Utility | 6 of 6 (State × Size) |
| Button/Link | Components/Buttons/Link | 3 of 3 (Size) |
| Chip | Components/Chips | 8 of 8 (Variant × Size) |
| Toggle (+ _Handle) | Components/Toggle | 14 of 14 (State × Size × Active) |
| Checkbox | Components/Checkbox | 30 of 30 (Active × State × Size) |
| Checkbox label | Components/Checkbox | 27 of 27 |
| Radio button | Components/Radio Button | 18 of 18 (State × Size) |
| Radio button label | Components/Radio Button | 9 of 9 |
| Tab | Components/Tabs | 5 of 5 (State) |
| Tab group (+ _Trailing action) | Components/Tabs | 1 of 1, with and without trailing action |

How they were built (same method as batch 1):
- Geometry, colours, strokes, effects and text styles read per variant from Figma; heights fixed where Figma fixes them (Filter L 52 / M 44 / S 36, Utility 44 / 24, Tab 44, Toggle 42×24 / 58×32, Checkbox 18 / 24 / 44, Radio 18 / 24).
- Real controls and ARIA: native checkbox and radio inputs (indeterminate supported), Toggle as `role="switch"`, Tab group as WAI-ARIA tabs with roving tabindex and Arrow/Home/End (Figma Interaction line; tested in the browser).
- Motion from the Figma descriptions: Toggle knob slides (duration/base, ease/emphasized) and track colour (duration/base, ease/standard); the Tab group ink slides between tabs (duration/slow, ease/emphasized); hover colours duration/fast.
- New Figma icons exported as SVG: filter-tune, close (two sizes), check, remove, more-settings-horizontal and the Button/Link chevron.
- Only combinations that exist in Figma: Toggle has no disabled-on; Checkbox has Indeterminate only checked and Disabled only unchecked. Those cells stay empty in the AllVariants grids.

**Focus Ring, now shared and exact.** Reading the Focus Ring layer showed it also carries the effect style `shadow/outer/md/focus` (a dark blue glow around the light ring), which batch 1 missed. There's now one shared Focus Ring (`src/components/shared/focus-ring.css`): 2px `shared/border/system/focus`, 4px outside the control, with the glow and a transparent gap. Button/Basic, Pills, Button/Filter and Toggle use it; Checkbox (radius 4) and Radio (circle) follow the same values; Tab places it 4px inside, as in Figma; Button/Utility has its ring on the button itself, as in Figma.

Visual comparison with Figma (component set screenshots vs. the AllVariants stories): every variant of every component in this batch compared. One story-only artefact found and fixed: a square outline in the focus preview of Checkbox and Radio, caused by the preview class landing on the wrapper.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (14 complete, 63 missing, 54 internal; 19 templates missing)

## Could not match exactly

- **Button/Link** has no hover state in Figma. I gave the chevron the same nudge as Button/Basic (`distance/xs`) so the link reacts to hover. Remove it if design prefers no hover.
- **Button/Link lg** and **Checkbox label L** use a plain 20px / 24px regular font in Figma instead of a text style. Code uses the matching size (`font-size/body-lg`, `.yw-body-xl-reg`).
- **Tab group's trailing action** opens an options panel (`_Dropdown/Options`) in Figma. That panel comes with the dropdowns in batch 3.

## Open questions for the design team

1. Button/Link: keep the hover nudge, or no hover?
2. Attach text styles to Button/Link lg and Checkbox label L?
3. Tab labels in Figma are "Label"; the stories use the three practice names. Any specific default?

## Next batch (suggested)

Batch 3: the inputs (Text Input, Text Area, Dropdown incl. options panel, Phone Input, Locale select), then Accordion, Tooltip, Toaster, Pagination, Progress Bar, Breadcrumbs.
