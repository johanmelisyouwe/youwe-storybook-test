# Sync report — 9 November 2026 (batch 3)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3 unchanged (no Figma changes since batch 2). Step 4 for the form inputs. Templates (step 5) are not part of this run.

## Step 4: components

| Component | Story | Variants |
|---|---|---|
| Text Input/Static Labels | Components/Input/Text | 9 of 9 (State) |
| Text Input/Floating Labels | Components/Input/Text | 13 of 13 (State × Placeholder) |
| Text Area/Static Label | Components/Input/Text Area | 9 of 9 |
| Text Area/Floating Labels | Components/Input/Text Area | 13 of 13 |
| Phone Input/Static Labels (+ _Locale select) | Components/Input/Phone | 8 of 8 |
| Phone Input/Floating Labels | Components/Input/Phone | 8 of 8 |
| Dropdown/Static Labels (+ _Dropdown/Options) | Components/Input/Dropdown | 9 of 9 (Active = open) |
| Dropdown/Floating Labels | Components/Input/Dropdown | 13 of 13 |
| Tab group (update) | Components/Tabs | the trailing action now opens the Figma options menu |
| Dropdown/Quantity | — | **not built** (web-shop component, see below) |

How they were built:
- One shared field building block (`src/components/components/Field/`) for label, required mark, control, hint and all states, so the four inputs behave the same. Values read per variant from Figma: static control 44 high (padding 8/8/8/12), floating 48 (0/8/0/12), text area 128, label body/sm/med (Dropdown: body/sm/bold, as in Figma), hint body/sm/reg.
- Figma states are real behaviour: Hover, Focused and Active are CSS (`:hover`, `:focus-within`); Filled = the field has a value; Success and Error = `status`; Disabled = `disabled`. Focus = 2px `border/system/focus` + `shadow/outer/md/focus`; Error = `surface/system/negative-1` + 2px `border/system/negative` + `shadow/outer/md/error`.
- Floating labels sit in the field and float up when focused, filled or showing a placeholder (Placeholder=Yes), as in the Figma variants. Phone floating keeps the label up in every state, as in Figma.
- Accessible markup: real `<input>`, `<textarea>` and `type="tel"`; labels tied to fields; hint/error linked with `aria-describedby`, errors announced (`role="alert"`, `aria-invalid`). Dropdown and the country-code select are WAI-ARIA select-only comboboxes: Enter/Space/Arrow opens, Arrow keys move, Enter selects, Escape closes, a click outside closes (tested in the browser). The Tab group menu uses `role="menu"`.
- `_Dropdown/Options` built as the shared options panel: `surface/base-1`, radius 2, `shadow/outer/sm/drop`, 45px rows, hover `surface/base-3`, max 220 high with the native scrollbar.
- Icons and assets exported from Figma: chevron-bottom-down, dropdown arrows (down/up), search (the default Suffix), and the five flags of the locale panel (NL, GB, SE, ID, UA) as SVG files in `public/figma-assets/flags/`.
- Content: labels, placeholders and options from the Figma contact form (Contact CTA, Variant=Form) and the Offices block: "Business email" / "name@company.com", "Message" / "How can we help you?", "Country" / "Select your country", "Phone" / "0000 000 000".

Visual comparison with Figma: every variant of each input compared with the Figma component sets. Two issues found and fixed in this run: the Dropdown chevron and the input suffix wrapped under the floating label (moved outside the label stack), and success fields showed the error copy (hint now only shown for Error).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean. Small fix: Figma property names such as `'Hint text'` are no longer flagged as placeholder copy (only text content is).
- `check-coverage`: clean (22 complete, 54 missing, 54 internal, 1 not needed; 19 templates missing). It now also reads shared story helpers listed in `code`.

## Could not match exactly

- **Hint and error copy.** Every Figma input uses "Hint text"; there is no real hint, success or error copy. The stories use stand-ins for the error state only: "Enter a valid business email address.", "Tell us briefly how we can help.", "Select your country.", "Enter a valid phone number.". Success shows no hint.
- **Floating-label motion.** Figma calls the label "animated" but gives no Motion line. Code uses `duration/fast` + `ease/standard`.
- **Text Area corner.** The drawn resize corner is the browser's own resize handle.
- **Text Input/Static, State=Disabled** uses body/md/reg for the placeholder while all other states use body/sm/reg. Treated as a Figma slip; code keeps body/sm/reg.
- **Selected option** in the options panel has no Figma state; code uses `surface/base-2` (the Figma "Selector" rows).

## Open questions for the design team

1. **Dropdown/Quantity** is a web-shop component (quantity in product or cart). Not built, recorded as `not-needed`. Remove it from Figma?
2. Can design add real hint and error copy to the inputs (at least for the contact form fields)?
3. Floating-label animation: is `duration/fast` + `ease/standard` right, or should a Motion line be added?
4. Text Input/Static Disabled placeholder style: fix to body/sm/reg in Figma?
5. Open from batch 2: Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels.

## Next batch (suggested)

Batch 4: Accordion, Tooltip + Icon tooltip, Toaster, Pagination, Progress Bar, Breadcrumbs, Action List Item, List Item, Cookie Banner.
