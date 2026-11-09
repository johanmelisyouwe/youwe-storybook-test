# Sync report — 9 November 2026 (batch 11)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2, step 5 (templates). No component or token changes in this run.

Batch 10 decisions: ACI Weave section on BACKLOG.md; "What we do" chapters use the v2 site copy; quotes to follow; desktop copy is correct where the mobile frames differ.

## Step 5: templates

| Template | Story | Figma | Signature | Placeholders |
|---|---|---|---|---|
| About Us | Templates/About Us → Desktop | 26661:7478 | 1jju5pr | none |
| About Us | Templates/About Us → Mobile | 26815:1094 | av6wib | none |
| Work | Templates/Work → Desktop | 26588:9829 | 1x3cvxo | none |
| Work | Templates/Work → Mobile | 26809:1150 | oz072y | none |
| Work detail | Templates/Work detail → Desktop | 26829:20476 | 1ohemy8 | none |
| Work detail | Templates/Work detail → Mobile | 26924:2198 | 1pdjf6r | none |

How they were built (real components, Figma props, copy and order; no extra spacing between blocks):
- **About Us**: Hero (no bar), Card grid with the three System Cards, Stats (Plain), Offices with live clocks, Leadership, then "Trusted by industry leaders": Stats intro, the client logo bar, Stats with three client stats and Awards. Then Contact CTA and Footer.
- **Work**: Hero, the "Our work" wrapper (Section intro Split + Filter bar, eCommerce selected on desktop), Card grid with the nine tagged Case Cards, Contact CTA and Footer.
- **Work detail** (Quooker throughout, decided 9 November): Header as its own section, Hero Title + image with breadcrumb and client logo, Case intro, Media (Contained), Section header (centered), Media (Full bleed), Text column, Text + media, Testimonial, Stats (results), Media (Two-up), Case carousel "Related work", Contact CTA and Footer.
- **Sub-footer**: the desktop "Work with us" copy on both devices (shared as `WORK_WITH_US` in `src/templates/shared.tsx`). The mobile frames have different copy ("It might just be the best decision you make.", "Your system could be next.", "Could this be your system?").

Visual comparison (full-page capture vs Figma at 1440 / 360): every template compared. Fixed in this run:
- **Stats intros**: in Figma the short line is the kicker and the long sentence is the large title ("Global thinking, local understanding", "Trusted by industry leaders", "The results").
- **Work hero title**: now breaks onto two lines with the second line in red.
- **Work filter bar**: the eCommerce tile is selected on desktop.

Heights are close (About 6390 vs 6482, Work 4604 vs 4575, Work detail 10082 vs 10023).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean (one `legacy-ok`: the Work detail Testimonial uses the stand-in quote that is in the Figma template)
- `check-coverage`: clean (74 complete, 1 missing = Pagination; templates: 10 complete, 9 missing)

## Could not match exactly

- **Images and logos** are placeholders (not imported yet).
- **Filter options** (Work) are not in Figma; the dropdowns show "All" with example options.

## Work detail: Quooker copy

Figma pairs the Quooker hero with JC-Electronics body copy. The template now uses the Quooker case copy from the Figma long-form components (Case intro, Two-column text → Section header, Text column). The results block is built from those facts: "The results" with 17 markets supported and 110,000+ units a year. The Figma template frame itself still has the JC-Electronics copy. The Testimonial keeps the stand-in quote (decided 9 November).

## Found in Figma

- **Work detail**: the hero is the Quooker case ("Scaling Smart: Quooker’s Expansion to 17 Countries"), while the case intro and section copy are JC-Electronics.
- **Work detail**: the Testimonial has placeholder copy ("Quote from the client goes here…", "Client name", "Role, company").
- **Mobile frames**: the sub-footer copy differs from desktop on About Us, Work and Work detail (code uses desktop).

## Open questions for the design team

1. Open from earlier batches: Service/System Card Motion description; Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 12: Industries (new design), Industries detail, Insights, Tech Partners and Services detail. Pagination last.
