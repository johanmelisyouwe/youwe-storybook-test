# Sync report — 10 November 2026 (text contrast)

Backlog batch 3: every text colour pair now passes WCAG AA (4.5:1).

## What the audit found

axe-core colour-contrast over all 282 Storybook stories: **677 failing text nodes** before, **0** after (bar one known false positive, below). Almost all came from a handful of semantic colours that fail on the standard surfaces (base-1 / base-2).

## Colour changes (nearest passing primitive)

| Token | Mode | Figma now | Code now | Before → after (worst surface) | Where you see it |
|---|---|---|---|---|---|
| shared/content/brand | dark | brand-red/400 | brand-red/200 | 3.16 → 5.01 | Footer headings, feature card numbers, event months, two-column labels, kickers |
| shared/content/brand | light | brand-red/400 | brand-red/500 | 4.25 → 5.83 | Feature card numbers on light cards |
| shared/content/link | dark | brand-red/300 | brand-red/200 | 3.99 → 5.01 | Service card eyebrow |
| shared/content/placeholder | dark | neutral/600 | neutral/400 | 2.05 → 5.20 | Input and dropdown placeholders, Industry list idle rows |
| shared/content/placeholder | light | neutral/300 | neutral/500 | 1.94 → 4.69 | Industry list idle rows (light) |
| shared/content/tertiary | light | neutral/500 | neutral/600 | 4.17 → 6.57 | Service card caption on light cards |
| component/tag/content | dark | neutral/450 | neutral/400 | 3.73 → 5.20 | Card type tags |
| component/tag/content | light | neutral/500 | neutral/600 | 4.17 → 6.57 | Card type tags (light) |

Buttons (white on brand red, 4.79) already passed and are unchanged.

**Design note for review:** in light mode, content/tertiary now equals content/secondary (neutral/600), because there is no primitive between neutral/500 and neutral/600. Brand red text on dark is now the lighter brand-red/200; surfaces, buttons and borders keep brand-red/400.

## Section intro scroll highlight

Unread words were drawn at 28% opacity (1.4–1.6:1). They now use **content/tertiary** (the Figma body colour, which passes) and light up to **content/secondary** as the paragraph scrolls. The effect is kept and every state passes AA. With reduced motion all words show as read.

## Figma: blocked

Changing the eight Figma variables (color_semantics, dark/light modes) was **denied by the edit permission check** ("Modify Shared Resources"). As agreed, I did not work around it. Until Figma is updated, the code values live in `src/tokens/contrast-overrides.css` (a small, documented override on top of the generated tokens, using only existing primitives). Once the Figma variables are changed and the tokens re-exported, delete that file. Listed on the backlog.

## Known false positive

Ask Youwe *Related case* snippet: axe reads the white text against the grey placeholder behind the image, but the snippet has a dark scrim (82–96% base-1) under the text, giving 12:1 or more. Checked visually.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean
- axe colour-contrast, 282 stories: 0 failures (excluding the false positive above)

## Backlog

Removed: Text contrast. Added: Contrast colours in Figma. Next: batch 4 (ACI Weave section, Insights overview, compact dropdown).
