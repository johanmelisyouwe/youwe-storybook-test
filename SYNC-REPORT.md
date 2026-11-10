# Sync report — 10 November 2026 (Ask Youwe glass, input fixes)

## Docked Ask Youwe bar: more glass

The bar stays at the bottom of the screen. It's now frosted glass: the ask/glass blur (32px) with extra saturation over a 65% base-1 tint (was 88%), a soft light gradient from the top, a light top edge and the ask border. The page now shows through clearly over images; over light sections it reads as smoked glass and the text stays readable (white on the tint passes AA). The open answer panel uses the same glass.

## Figma check: what changed since the last sync

A full signature check of all components against `figma-sync.json` found 5 components changed in Figma since the 9 November sync, all form fields: Dropdown (floating labels), Compact dropdown, Phone input (floating labels), Text input (floating labels), Text area (floating labels). Variants and properties are unchanged; comparing them with Storybook found two differences, both fixed in code:

- **Hover ring missing.** Figma's input Hover and Filled Hover states have the shadow/outer/md/hover ring (4px, white 20%). Code had only the border. Added to every field (Text input, Dropdown, Phone, Text area, Compact dropdown).
  - In Figma, **Text Input** (static and floating labels) is the only field without the ring. Code gives it the ring too, for consistency; adding it in Figma is listed as a follow-up.
- **Success border not showing on filled fields** (a code bug): the "filled" border overrode the green Success border. Success now shows its green border, as in Figma.

Signatures for the 5 components are updated.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`, `check-coverage`: clean
