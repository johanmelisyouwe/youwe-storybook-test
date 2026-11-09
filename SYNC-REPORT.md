# Sync report — 9 November 2026 (batch 6)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2. Steps 1–3: no Figma changes to these components since the inventory (signatures unchanged). Step 4 for the site chrome, Ask Youwe, Upcoming events and the Vertical slider. Templates (step 5) are not part of this run.

Batch 5 decisions applied: card arrow stays straight; Industry List Item parked; images not imported (BACKLOG.md).

## Step 4: components

| Component | Story | Variants |
|---|---|---|
| Header/Corporate (+ _Nav link, _Utility link, _Mega menu) | Components/Header/Corporate | 4 of 4 (Device × Expanded); nav link 6 of 6; mega menu 2 of 2 |
| Footer/Corporate (+ _Footer link) | Components/Footer/Corporate | 4 of 4 (Variant × Device); footer link 2 of 2 |
| Ask Youwe | Components/Ask Youwe | 12 of 12 (State × Mode × Device) |
| Ask Youwe/Snippet | Components/Ask Youwe | 12 of 12 (Type × Device × Mode) |
| _Ask Youwe/Orb, Aura, Button, Chip, Label | Components/Ask Youwe (Parts) | all variants |
| Upcoming events (+ row) | Components/Upcoming events | 4 of 4 (Mode × Device); row Rest/Hover |
| Vertical slider (+ index item, slides) | Content blocks/Vertical slider | 8 of 8 (Index × Mode × Device); 5 slide types; index item 3 states |

How they were built:
- **Header**: the logo is the Figma SVG (mark in `content/brand`, wordmark follows the mode). Desktop has the centred menu, the Ask Youwe pill, Careers and Contact. The Services mega menu follows the Figma interaction note: it opens on hover straight away and closes 300ms after the pointer leaves; Enter or ArrowDown opens it, Esc closes it; it opens with a clip reveal (`duration/slow`). Mobile: logo, Ask Youwe orb and menu button; the menu is a full-screen sheet that locks page scroll and closes with Esc. With `fixed`, the bar turns to glass once scrolled and hides on scroll down, returning on scroll up (`duration/slow`, `ease/emphasized`).
- **Footer**: Sitemap and Newsletter, desktop and mobile, with the Figma links, legal links, Instagram/LinkedIn icons (Figma SVG) and the language pill.
- **Ask Youwe**: the bar (Default), Contextual (the bar widens over 640ms, then the page question fades in) and Active (answer panel with question, answer, source, follow-up, CTA and composer; opens from the bar with a clip reveal, `duration/cinematic`). ⌘K focuses the bar and Esc closes the panel. The aura breathes on a ~6s loop. Glass uses the Figma `ask/glass` effect tokens. The Interactive story shows the flow; the answer is the Figma copy (no AI service is connected; `onAsk` is the hook for it).
- **Snippets**: Question, Nudge and Case with the Figma copy (Kingspan, Quooker).
- **Upcoming events**: the four Figma events; each card is one link with the shared red reveal. Story titled Components/Upcoming events (the inventory title was the Insight Card's).
- **Vertical slider**: the five slide types (Service, Quote, Stat, Case, Content) with the Figma copy. On desktop the section can pin and the active item follows scroll (Pinned story); index items are buttons and hover/focus switch slides too. Slide text rolls in line by line (`duration/zoom`, staggered); the case image opens with a circular wipe and settles from scale 1.15. Mobile is stacked with step bars and "01 / 03 · …", no pinning.
- New icons from Figma: hamburger-menu, language. New: Youwe logo, social icons.

Visual comparison with Figma: header (both devices, mega menu open), footer, Ask Youwe (all states), events and the slider compared. Fixed in this run: the mega menu feature link is underlined as in Figma.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean (two marked exceptions: the Orb's raw gradient colours, which Figma does not tokenise, and the 6s aura loop, which has no motion token)
- `check-coverage`: clean (49 complete, 26 missing, 54 internal, 1 not needed, 1 parked; 19 templates missing)

## Could not match exactly

- **Theme toggle** in the mobile menu (light/dark sun/moon switch at the bottom) is not built: it is loose layers in Figma, not a component, and the site theme is set per section ("Theme follows the section beneath"). Desktop has a hidden copy of it as well.
- **Ask Youwe Orb** colours are raw values in Figma, not tokens (`legacy-ok` in code).
- **Footer "Digital Infrastructure" column** lists both "Digital Experience" and "Digital Experience (DXP)" in Figma; code uses the header's six links (no duplicate).
- **Images** (mega menu feature, case snippet, slider case image and background) show the Figma placeholder; images are on the backlog.
- **Ask Youwe docked bar** (after the hero the bar docks to the bottom centre) belongs to the templates ("Templates › Docked bar") and is not part of this run.
- **Mobile Ask Youwe Contextual** shows the full prompt next to the chip; Figma shortens it to "Ask".

## Open questions for the design team

1. Mobile menu theme toggle: should it become a component (and also show on desktop), or be dropped?
2. Footer: remove the duplicate "Digital Experience" link?
3. Service Card / System Card: update the Motion description (no arrow rotation). Open from earlier batches: Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 7: the content blocks (Hero, Section header/intro, Statement, Stats, Card grid, Case carousel, Contact CTA, Offices, Testimonial and the rest). Then the templates (including the new Industries design); Pagination last.
