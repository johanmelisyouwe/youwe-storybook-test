# Media

Images and logos exported from the Figma file for the Storybook presentation. The site will get them from the CMS later.

- `public/media/cases/` — case photos (Figma `Case/Portrait/*` as 720 px wide WebP, `Case/Wide/*` as 1920 px wide WebP).
- `public/media/abstract/` — abstract backgrounds (Figma library `Abstract new *`, 1920×1080 WebP).
- `public/media/logos/` — client and technology logos (Figma `Clients/*`, `Technologies/*` vectors) as SVG with `currentColor`.

`media.ts` maps Figma names to these files (`caseImage`, `abstract`, `clientPhoto`, `logoFor`). Components only take plain URLs (`image`, `src`) or a `logo` node, so connecting the CMS means replacing these lookups, not changing components. `components/logos/Logo.tsx` draws a logo as a mask in the text colour, so it works in dark and light mode; names without a logo fall back to text.

To add an image: export the Figma component (download_assets in the Figma MCP server), convert to WebP at the sizes above, and add the name to `media.ts`.
