# Sync report — 9 November 2026 (batch 4)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: one Figma change since batch 3 (Text Input/Static Labels, the Disabled placeholder now uses body/sm/reg, which matches the code; signature updated). Step 4 for the components below. Templates (step 5) are not part of this run.

Batch 3 decisions applied: Dropdown/Quantity stays `not-needed`; hint/error stand-in copy stays for now; floating-label motion stays `duration/fast` + `ease/standard`.

## Step 4: components

| Component | Story | Variants |
|---|---|---|
| Accordion | Components/Accordion | 12 of 12 (Style × Expanded × State) |
| Tooltip | Components/Tooltip | 2 of 2 (Size) |
| Icon tooltip | Components/Tooltip | 6 of 6 (State × Size) |
| Toaster | Components/Toaster | 8 of 8 (Variant × Shadow) |
| Progress Bar | Components/Progress Bar | 5 of 5 (Progress) |
| Breadcrumbs/Desktop (+ _breadcrumb-link) | Components/Breadcrumbs | link states Rest / Active / Focused |
| Breadcrumbs/Mobile | Components/Breadcrumbs | Filter button on / off |
| Action List Item (+ _Leading / _Trailing element) | Components/Action list | 4 of 4 (State); elements Icon, Checkbox, Toggle, Radio button |
| List Item | Components/List Item | 4 of 4 (Device × Icon) |
| Cookie Banner | Components/Cookie Banner | 2 of 2 (Device) |
| Pagination | — | **held back** (uses Dropdown/Quantity, see below) |

How they were built:
- **Accordion**: native `<details>`/`<summary>`, so it opens with the keyboard and works without JavaScript. Header 52 high, label body/lg/med, content body/md/reg secondary. Opening animates the height (`duration/slow`, `ease/emphasized`); the caret rotates (`duration/base`). Optional `name` makes a group where one item is open at a time. Content: the ACI Weave FAQ from the Figma templates.
- **Tooltip / Icon tooltip**: the bubble is `surface/base-2` with radius 4, `shadow/outer/sm/drop` and the 10px point. The info icon (`content/tertiary`, 24 / 16) shows the tooltip on hover and on keyboard focus, linked with `aria-describedby`. It fades in with a 4px rise (`duration/fast`, `ease/standard`).
- **Toaster**: 400 wide, system colours per variant, two-tone icons exported from Figma, and the Figma titles and messages. Error and Warning use `role="alert"`, the others `role="status"`. It enters with a fade and an 8px rise (`duration/base`, `ease/emphasized`) and leaves with a fade (`duration/fast`, `ease/exit`); see the Motion story.
- **Progress Bar**: the five Figma steps, plus any value from 0 to 100. Built as `role="progressbar"`.
- **Breadcrumbs**: Desktop is an ordered list with `aria-current="page"` on the current page. Mobile is a back button to the parent page plus the optional Filter button, as in Figma. Path from the Figma Hero: Home / Work / JC-Electronics.
- **Action List Item**: a link or button by default. With a Checkbox, Toggle or Radio button element the whole row is the label of that control. Hover `surface/base-3`, Pressed `surface/base-2`, Focus Ring 6px inside the row.
- **List Item**: bullet or check in `content/brand`, label body/lg/reg secondary, stacked with `List` (gap 2xs, as the Figma description says). Copy from the event page and the Accordion list content block.
- **Cookie Banner**: Figma copy; Accept = Primary, Cookie settings = Solid, the same size. It enters from the bottom (`distance/md`, `duration/slow`, `ease/emphasized`). `autoFocus` moves focus into the banner (Figma interaction note); `fixed` places it bottom-right (desktop) or full width (mobile).
- New icons exported from Figma: chevron-right, chevron-left, account-circle.

Visual comparison with Figma: every variant compared with the Figma component sets. Fixed in this run: tooltip line height and icon colour, the toaster close button (top-aligned as in Figma), and the breadcrumb focus ring (now wraps chevron and text, like `_breadcrumb-link`).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (32 complete, 44 missing, 54 internal, 1 not needed; 19 templates missing)

## Could not match exactly

- **Action List Item copy.** Figma only has default copy and no template uses the component. The stories use stand-in industry rows ("Manufacturing", "Retail", "Wholesale" with counts).
- **_Leading element, Element=Image** is not built: it has no image spec yet.
- **Breadcrumbs/Desktop "Show back button"** is a Figma property that is not connected to any layer, so it does nothing. Not built.
- **Breadcrumb links have no Hover state** in Figma. Code shows no hover change, as in Figma.
- **Cookie Banner "Privacy Policy"** is plain text in Figma. Code makes it an underlined link so it is recognisable as a link.
- **Progress Bar motion**: no Figma Motion line. Code animates the width with `duration/base` + `ease/standard`.

## Open questions for the design team

1. **Pagination** uses Dropdown/Quantity for its "View amount" variant. Dropdown/Quantity was marked for removal in batch 3. Keep it for Pagination, or remove the "View amount" variant too? Pagination is built once this is settled.
2. Action List Item: real copy, and where is it used (filters, mobile menu)?
3. Breadcrumbs/Desktop: remove the unused "Show back button" property, or connect it?
4. Breadcrumb links: add a Hover state?
5. Open from earlier batches: Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 5: the cards (Case, Feature, Image, Insight, Quote, Service, System, Technology Card), Stat, Location, Clock, Industry List Item and Pagination (after question 1). Header/Corporate, Footer/Corporate and the content blocks follow after that.
