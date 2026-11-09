# Sync report — 9 November 2026 (batch 12)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2, step 5 (templates), plus one small component addition.

Batch 11 decisions: Work detail shows Quooker throughout; the Testimonial keeps the stand-in quote.

## Step 5: templates

| Template | Story | Figma | Signature | Placeholders |
|---|---|---|---|---|
| Industries (new design) | Templates/Industries → Desktop | 26657:16750 | 974if1 | none |
| Industries (new design) | Templates/Industries → Mobile | 26814:197 | 9j0b0p | none |
| Industries detail | Templates/Industries detail → Desktop | 26926:34632 | 1ukya6e | none |
| Insights | Templates/Insights → Desktop | 26661:7306 | k6b9g9 | Insights · content (Latest + All insights) |
| Insights | Templates/Insights → Mobile | 26816:3024 | pk0eyr | All insights (type filters + grid + Show more) |

Industries detail has no mobile frame in Figma, so it only has a Desktop story.

How they were built (real components, Figma props, copy and order; no extra spacing between blocks):
- **Industries**:
  - Hero with the client logo bar.
  - Industry overview: Section intro + 14 industry Case Cards (One quarter, rows of four on desktop). Mobile uses the same cards in their mobile variant, following the desktop design (decided 9 November). The Figma mobile frame still uses the parked Industry List (BACKLOG.md).
  - "In focus" grid (three Case Cards, light), "What connects them" grid (three System Cards), Contact CTA and Footer.
- **Industries detail (Manufacturing)**: Hero with breadcrumb and client logos, the industry intro (Text + media 8/4 with the Unipart Case Card as its media, decided 9 November), a full-width XXL Nutrition Case Card, the quote-only Testimonial, "Related services" (six Service Cards), "Manufacturing case studies" (Full width 3), the contact form and Footer.
- **Insights**: Hero, then on mobile the "Latest" Card grid (Wide + 1: featured Insight Card + Upcoming events). The insight overview (type filters, card grid, Show more) is hand-built in Figma on both devices, so it is a placeholder.
- **Sub-footer**: desktop "Work with us" copy on both devices, as decided.

**Component changes:**
- **Contact CTA**: the form's submit label is now a prop (`submit`, default "Send message"). The Industries detail template uses "Get in touch", as in Figma.
- **Text + media**: an optional `media` slot (for example a Case Card) in place of the image, for the Industries detail intro.

Visual comparison (full-page capture vs Figma at 1440 / 360): every template compared. Heights are close (Industries desktop 6159 vs 5967; Industries mobile is now 13133 vs 7199 because the fourteen cards stack in one column, Industries detail 5944 vs 5934, Insights 6459 vs 6409 and 10882 vs 10932). Fixed in this run:
- **Industries hero**: added the client logo bar.
- **"In focus" intro**: now stacked, with the title on one line.
- **Insights mobile hero**: shows the logo bar, as in Figma.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (74 complete, 1 missing = Pagination; templates: 15 complete, 4 missing)

## Could not match exactly

- **Images and logos** are placeholders (not imported yet).
- **Contact form country list** is an example list (Figma shows only the placeholder).
- **Industry tiles**: Figma uses Case Cards (One quarter) with an industry as the title and the clients as the client line.

## Open questions for the design team

Decisions (9 November): Insights overview → BACKLOG.md; Industries detail intro uses Text + media; Industries mobile follows desktop (cards).

1. Open from earlier batches: Service/System Card Motion description; Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 13: Tech Partners and Services detail (desktop and mobile), the last templates. Then Pagination.
