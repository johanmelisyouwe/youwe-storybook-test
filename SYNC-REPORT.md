# Sync report — 9 November 2026 (batch 13)

Figma file: `IP237ISXsaciooPrSykYMh`. Instructions: FIGMA-SYNC.md v2, step 5 (templates). This batch completes the templates: **19 of 19**.

Batch 12 decisions: Insights overview on BACKLOG.md; Industries detail intro uses Text + media; Industries mobile follows desktop (cards).

## Step 5: templates

| Template | Story | Figma | Signature | Placeholders |
|---|---|---|---|---|
| Tech Partners | Templates/Tech Partners → Desktop | 26661:7114 | 1wjiwfx | none |
| Tech Partners | Templates/Tech Partners → Mobile | 26816:2055 | 5yz4d5 | none |
| Services detail | Templates/Services detail → Desktop | 26875:18627 | kiz47u | none |
| Services detail | Templates/Services detail → Mobile | 26920:28 | xfy70r | none |

How they were built (real components, Figma props, copy and order; no extra spacing between blocks):
- **Tech Partners**:
  - Hero with the client logo bar, then Build your stack (same copy as its component story, now shared in `buildYourStack.copy.ts`).
  - "All partners" Section intro, then three Tech partners splits (light): Systems that scale, Systems that optimize, Systems that drive revenue.
  - Contact CTA and Footer.
  - In Figma, "optimize" and "drive revenue" are hand-built frames with the same structure as Tech partners split. They are built with that component, as decided for the Industries detail intro, with the Figma partner cards, groups, levels and snippets.
- **Services detail (B2B Enterprise Commerce)**: Hero with breadcrumb and the client stats bar.
  - Desktop: Feature list (why), building blocks (Feature + 4 and a row of three), challenges (AI cards), proof (Case Card + Quote Card), client stats, more cases, Platforms (Technology logos Grid 4) and related services.
  - The Figma mobile frame is a longer composition with extra sections: a building-block case with an Ask Youwe snippet, How we work (five steps), a second proof (Chadwicks), and FAQ with a snippet. Each device follows its own frame.
- **Section spacing**: where Figma continues a block with a second grid or the stats row directly underneath, the template removes the section padding between them (`src/templates/templates.css`, `Section flush`).
- **Sub-footer**: the desktop "Work with us" copy on both devices, as decided. Mobile Figma has page-specific copy: "Which platform fits?" and "Where does B2B ordering get stuck?"

Visual comparison (full-page capture vs Figma at 1440 / 360): every template compared. Heights: Tech Partners 7701 vs 7413 and 11275 vs 11433; Services detail 7732 vs 7785 and 18135 vs 17111. Fixed in this run:
- **Services detail hero**: two-line title with the second line in red.
- **Building blocks**: the second row now sits directly under the first.
- **Stats**: sit directly under the proof grid.
- **Challenges grid**: no longer starts with an empty cell (a zero-width text in Figma).

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean (one `legacy-ok`: the Tech Partners hero body is stand-in copy in Figma)
- `check-coverage`: clean (74 complete, 1 missing = Pagination; templates: 19 complete, 0 missing)

## Could not match exactly

- **Images and logos** are placeholders (not imported yet).

## Found in Figma

- **Tech Partners hero body** is stand-in copy: "Intro text missing, lorem ipsum dolor sit amet…".
- **Services detail**: desktop and mobile have different content. Mobile has How we work, a second proof and FAQ; desktop doesn't.
- **Sub-footer**: the mobile frames have page-specific copy; the code uses the desktop "Work with us".

## Open questions for the design team

1. Services detail: should desktop get the mobile-only sections (How we work, the Chadwicks proof, FAQ)?
2. Sub-footer: the mobile frames now use page-specific titles ("Where does B2B ordering get stuck?", "Which platform fits?"). Keep "Work with us" everywhere, or use page-specific titles on desktop too?
3. Tech Partners hero intro copy.
4. Open from earlier batches: Service/System Card Motion description; Button/Link hover nudge; text styles for Button/Link lg and Checkbox label L; default tab labels; real hint and error copy for the inputs.

## Next batch (suggested)

Batch 14: Pagination (the last component), then the step 6 docs (Foundations motion demos, Page guidelines) if wanted.
