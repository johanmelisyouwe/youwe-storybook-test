# Sync report — 9 November 2026 (media)

Figma file: `IP237ISXsaciooPrSykYMh`. Images and logos from Figma are now in the Storybook, for presenting the templates. Components and templates are unchanged in structure.

## What was added

| Media | Source in Figma | Files | Size |
|---|---|---|---|
| Case photos (23 portrait, 6 wide) | `Case/Portrait/*`, `Case/Wide/*` (page Brand / Cases Content) | `public/media/cases/*.webp` | 1.3 MB |
| Abstract backgrounds (11) | library `Abstract new 001–016` | `public/media/abstract/*.webp` | 0.3 MB |
| Logos (22 clients, 12 technologies) | `Clients/*`, `Technologies/*` | `public/media/logos/*.svg` (currentColor) | 0.4 MB |

Total about 2 MB. Exported with the Figma MCP server (component renders for case photos, original sources for the library backgrounds, vector SVG for logos), converted to WebP (portrait 720 px, wide/abstract 1920 px).

## How it is wired

- **`src/media/media.ts`**: `caseImage(name)`, `abstract(number)`, `clientPhoto(client)` and `logoFor(name)` map Figma names to files. Relative paths, so they work locally and on GitHub Pages. See `src/media/README.md`.
- **`Logo`** (`src/components/logos/Logo.tsx`): draws a logo as a mask in the text colour (dark and light mode), sized to fit a slot; names without a logo fall back to text. `ClientLogo` now uses it.
- **CMS-ready**: components take plain URLs and logo nodes as before; when the CMS arrives, only the lookups in `media.ts` change.

## Where the media shows

- **Templates (all 19)**:
  - Hero backgrounds (the Figma abstract per page; Work detail uses the Quooker photo, Industries detail the Heidelberg photo).
  - Hero logo bars, the What we do slider background, case cards (the photo per client, as in Figma), industry tiles, system cards, Work detail media, Text + media, testimonials, sub-footer backgrounds.
  - Client logos in stats and case cards; technology logos in the logo grids, Build your stack and Tech partners.
- **Component stories**: Hero, Case Card, Case carousel, Media, Text + media, Testimonial, Contact CTA and Build your stack, plus everything that uses `ClientLogo`.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass (static build 13 MB including fonts and media)
- `check-legacy`: clean
- `check-coverage`: clean (75 components complete, 19 of 19 templates)

## Not done / to check

- **Image rights**: confirm the case photos and backgrounds may be shown on the public (noindex) Storybook URL.
- **Logos not in the templates yet** (Unipart, Databricks, Microsoft Fabric, Google Cloud, OpenAI, n8n and other partner logos on Tech Partners) still show the name.
- **Figma mobile template frames** still differ from desktop (blocked edit, see BACKLOG.md).
