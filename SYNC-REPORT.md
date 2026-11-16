# Sync report — 16 November 2026 (CMS-ready: existing templates connectable to Contentful)

The existing templates were compared with the v2 site (430 pages crawled) to check that every block can take CMS data. No new templates were added. New docs page: **Introduction / CMS integration** (data shapes, conventions, the sections of each template).

## Blockers fixed (all components)

| | Before | Now |
|---|---|---|
| **Images** | URL string only, no alt text on 13 of 17 image props | Every image prop (`image`, `image2`, `images`, `poster`, `featureImage`, `backgroundImage`, badges…) takes a URL or a CMS asset `{ src, alt, width, height }`. The asset's alt text is used. Shared in `src/shared/asset`. |
| **Logos** | Code logo components only | Case Card, Stat, Hero logo bar and client logo, Technology logos, Testimonial, Quote Card and Technology Card take a code logo **or** an uploaded asset `{ src, alt }`. |
| **Rich text** | Body fields were plain strings | Text column, Case intro, Two-column text, Text + media, Section header, Accordion list items (and the new outcomes and tabs) take a string, paragraphs, or rendered rich text (ReactNode). `Prose` (`src/shared/prose`) styles links, bold, lists, H3/H4, quotes, images. |
| **Fixed English UI text** | About 40 strings set inside components | Each component exports its English defaults and takes `labels` for translations: Header, Footer, Ask Youwe (bar, snippet, dock), Case carousel, Filter bar, Insights overview, Build your stack, Contact CTA, Testimonial, Breadcrumbs, Insight Card, Pagination, Video Player, Phone input, Cookie banner, Upcoming events. `{placeholders}` are filled by the component (`src/shared/labels`). |
| **Regions / locales** | Header: one label with a dead link | New **Region switch** (`src/site/region-switch`): Header and Footer take `regions: { label, href, hreflang, current }[]` (Global, UK, NL, SE as on v2). The Header's `homeHref` sets the logo link per locale. |

## v2 options added to existing templates

| Template | Added |
|---|---|
| Industry detail | **Content tabs** (new code block): "Who we work with", one tab per audience with rich text and an optional related Case Card. **Offices** ("Work with us") before the contact form. Offices data moved to `offices.copy.ts`. |
| Service detail | **Phased approach** (Feature list Split, numbered steps) and **FAQ** (Accordion list Split, rich text answers). |
| Work detail | **Stats `outcomes`**: a list of results under the stats (v2 "The results"). **Media `Layout="Gallery"`**: any number of images (3 columns, 2 on mobile). |

## New stories

- Content blocks/Content tabs (Default, Mobile)
- Header: With regions
- Text column: Rich text body
- Media: Gallery
- Stats: With outcomes

## Checks

- `pnpm typecheck`, `pnpm check` (Content tabs is in `figma-sync.json` as `code-only`), `pnpm build-storybook`: pass.
- Checked in a browser at 1440:
  - The Content tabs switch, and links and lists render in a panel.
  - The Region menu opens and the current region is marked.
  - The rich text body shows links, bold, lists and H3.
  - The Gallery shows six images.
  - The outcomes list shows under the stats.
  - The changed templates load without errors.
