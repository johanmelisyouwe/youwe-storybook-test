# Sync report — 9 November 2026 (batch 10)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2, step 5 (templates). No component or token changes in this run.

## Step 5: templates

| Template | Story | Figma | Signature | Placeholders |
|---|---|---|---|---|
| Home | Templates/Home → Desktop | 26584:5280 | 1dkipj1 | Frame 6 (ACI Weave · videos + snippet) |
| Home | Templates/Home → Mobile | 26805:3646 | ckt2vh | ACI Weave · video + nudge |
| Services | Templates/Services → Desktop | 26586:8230 | 100svzb | none |
| Services | Templates/Services → Mobile | 26809:28 | 19ze3px | none |

How they were built:
- Every section is the real component with the props, copy and nested items from `figma/templates.js`, in the Figma order, without extra spacing between blocks. Dark and light sections follow the Figma Mode per block.
- **Home**: Hero (client logos bar), Vertical slider "What we do" (dark, background image), Stats (client, light), Case carousel (Scroll, the eight Figma cases), Vertical slider "In their words" (light, Index left), ACI Weave section (placeholder), Technology logos (Default, twelve logos), Contact CTA (sub-footer background) and Footer.
- **Services**: Hero (stats bar), three Services splits (dark / light / dark) with their Service Cards and Ask Youwe snippets, Case carousel (Full width 3), Contact CTA and Footer.
- Desktop and mobile take their own copy where Figma differs on purpose (the mobile Services practices have longer descriptions and a second snippet). On Home, the desktop sub-footer and footer copy is correct (decided 9 November) and is used on mobile too; the Figma mobile frame is on BACKLOG.md.
- Shared template pieces (header, footer columns, Mode sections, placeholder) are in `src/templates/shared.tsx`.
- **Kit fix**: `figma/templates.js` failed when a slot held a bare text node; it now reads those too.

Visual comparison (full-page capture vs Figma at 1440 / 360):
- Services desktop and mobile: same structure and heights (5377 vs 5237, 10213 vs 10247). Fixed: the hero title now breaks onto two lines with the second line in red, as in Figma.
- Home desktop: same structure (7751 vs 7230); the difference comes from the Technology logos giant rows and the Case carousel being slightly taller.
- Home mobile: taller than Figma (10406 vs 7965) because the mobile Vertical slider stacks all chapters, while the Figma frame shows only chapter 1.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (74 complete, 1 missing = Pagination; templates: 4 complete, 15 missing)

## Could not match exactly

- **Images and logos** are placeholders (not imported yet).
- **Vertical slider "What we do"**: Figma only fills chapter 1. Chapters 2 and 3 use the copy from the v2 site screenshots ("Keep it running.", "Connect it.") with the Figma index labels and order. The v2 site uses shorter labels (Data & integrations, Operations & AI) and puts Data second.
- **Vertical slider "In their words"**: Figma has one quote (BunzlOne). Chadwicks Group, Thomas Telford and Symson show "Quote to follow" until the copy arrives.
- **Sliders are not pinned** in the templates, so the page height matches Figma. The pinned scroll behaviour is in Content blocks/Vertical slider → Pinned.
- **ACI Weave section** (Home) is a hand-built frame in Figma: shown as a placeholder with the Figma height.

## Open questions for the design team

Decisions (9 November): ACI Weave section → BACKLOG.md; chapter copy from the v2 site screenshots; quotes to follow; Home desktop copy is correct.

1. Open from earlier batches: Service/System Card Motion description; Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 11: About Us, Work and Work detail. Then Industries (new design), Industries detail, Insights, Tech Partners and Services detail; Pagination last.
