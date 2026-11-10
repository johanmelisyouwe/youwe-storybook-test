# Sync report — 10 November 2026 (Figma alignment)

Backlog batch 5: Figma brought in line with what is built in code (desktop leading). All edits below were made in the Figma file and checked there; nothing was deleted (sections that desktop doesn't have are hidden and renamed).

## Components in Figma

- **Stat → State=Hover** (new axis, Rest/Hover). Client cards: surface/base-2, round arrow filled surface/fixed/brand-red with a content/fixed/light arrow, in Dark and Light, L and M. Matches the code hover from batch 2. Plain cards have State=Rest only.
- **_breadcrumb-link → State=Hover**: text content/primary, as in code.
- **Breadcrumbs/Desktop → back button**: the existing "Show back button" property now controls a real layer (Button/Basic Outline, Leading chevron-left, S, "Back") before the crumbs. Its default is now **off**, so none of the 11 existing instances changed. Built in code too: `Show back button` prop, Back links to the parent page; new *Back button* story.
- **New text style body/xs/caps** (body/xs/bold + 6% letter spacing + uppercase, same font variables) applied to the INTEGRATION / DATA PLATFORMS / CLOUD labels in Tech partners split (12 labels, which used raw values). Code now uses the generated `.yw-body-xs-caps` class; letter spacing goes from 8% (guessed) to Figma's 6%. The token export and build now carry text case (`text-transform`).

## Template frames in Figma (mobile follows desktop)

- **Sub-footers** on 8 mobile frames (Home, Services detail, Industries, Work, Work detail, Tech Partners, Insights, About Us) now have the desktop copy: *Work with us*, the desktop body, one *Get in touch* button (the second button is hidden) and the desktop office order. Services already matched.
- **Footer/Corporate mobile** now has the same Youwe links as desktop (Home, Services, Work, Industries, Tech Partners, Insights, About Us) in the component, so every mobile frame matches; the Home mobile footer's different links are cleared.
- **Services detail mobile**: *How we work*, *Proof · Chadwicks* and *FAQ* are hidden (renamed "… (hidden: not on desktop)").
- **Industries mobile**: the parked Industry List is hidden; in its place an *Industry cards* frame with the 14 desktop industry cards (Case Card, Size=One third, Device=Mobile, the only mobile Case Card; gap spacing/lg).

## Not done

- **Contrast colours (batch 3)**: retried as part of this batch and **blocked again** by the edit permission check ("Modify Shared Resources"). Not worked around. The code override (`src/tokens/contrast-overrides.css`) stays. To finish it, either change the eight variables in Figma yourself (table in the batch 3 report) or allow the edit.
- **Statement giant rows**: skipped. The backlog decision (9 Nov) is to leave the Figma component for now, and the earlier attempt was blocked as well.

## Sync bookkeeping

`figma-sync.json` has the new signatures and axes for Stat, _breadcrumb-link, Breadcrumbs/Desktop, Tech partners split and Footer/Corporate. The edited mobile template frames will show as changed at the next template sync; that is expected (the code already follows desktop).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (76 complete, 19 templates)

Visual check in Figma (Stat set, an Industries mobile card) and Storybook (Breadcrumbs, Tech partners split labels).

## Backlog

Removed: group label text style, Breadcrumbs back button, breadcrumb hover, Home mobile frame, Industries mobile frame, mobile template frames, Stat hover in Figma. Still open in Figma: contrast colours, Statement giant rows (later), proposed components review, docked Ask Youwe bar placement. Next: batch 6 (expressive motion).
