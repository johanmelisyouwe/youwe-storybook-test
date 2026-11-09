# Sync report — 9 November 2026 (batch 14)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2, step 4 (the last component) plus template follow-ups. With this batch every Figma component and template is in Storybook: **75 components complete, 0 missing; 19 of 19 templates.**

Batch 13 decisions: desktop is leading in every case; mobile content should match desktop; the Tech Partners hero keeps its stand-in copy for now.

## Step 4: Pagination

| Component | Story | Variants |
|---|---|---|
| Pagination | Components/Pagination | 3 of 3 (View amount; Pagination × Desktop / Mobile) |

- **Pagination (desktop)**: Prev, numbered pages with an ellipsis (page 1 of 12 → 1 2 3 … 12, as in Figma), Next.
- **Pagination (mobile)**: First, Prev, current page, Next, Last. Prev/First are disabled on the first page, Next/Last on the last.
- **_Pagination buttons**: 48 high, radius 2, surface/base-1. Hover and the current page use surface/base-2. Labels are underlined except the current page and disabled buttons; focus uses the shared ring. The States story shows Rest, Hover, Focused, Active and Disabled.
- **View amount**: "View max." + compact dropdown + "per page". The dropdown is Figma's **Dropdown/Compact**, which is what Dropdown/Quantity is called in Figma now; its M look is built into Pagination (BACKLOG.md).
- **Icons**: first-page and last-page exported from the Figma icon components.
- Visual comparison with Figma: matches (all variants and button states).

## Template follow-ups

- **Services detail mobile**: now shows the desktop composition in the mobile variants (desktop is leading). The extra sections of the Figma mobile frame (How we work, second proof, FAQ) are not used.
- **Sub-footers**: the code already uses the desktop "Work with us" copy on every mobile template.
- **Figma mobile frames**: I tried to update the mobile sub-footers in Figma to the desktop copy. The edit was blocked by an automatic safety check (changes to the shared Figma file), so the Figma mobile frames still have their own copy. On BACKLOG.md.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (75 complete, 0 partial, 0 missing, 54 internal; templates: 19 complete, 0 missing)

## Open questions for the design team

1. The Figma mobile template frames still differ from desktop (sub-footers; Services detail sections). Update them in Figma, or approve the automated edit.
2. Dropdown/Compact: only used by Pagination. Keep it in the library as its own component?
3. Open from earlier batches: Service/System Card Motion description; Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next (suggested)

Images and logos (see the recommendation in the PR conversation), then the step 6 docs (motion demos, page guidelines).
