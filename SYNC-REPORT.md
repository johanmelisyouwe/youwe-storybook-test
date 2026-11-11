# Sync report — 11 November 2026 (hero title spacing)

## Hero "Title + image": top padding as in Figma

On Work detail the breadcrumbs and title sat directly under the header. In Figma (Page / Work detail, Content blocks/Hero, Title + image) there is room above them: hero padding 80 + text padding 80, so the breadcrumbs start 160 below the 122 header.

- **Desktop:** our header overlays the hero, so the top padding is now header + 160 (120 + 80 + 80). The breadcrumbs start at 280 from the top of the page (Figma 282). The 80 gap to the image is unchanged.
- **Mobile:** header 80 + 24, as in the mobile frame. The breadcrumbs used to start under the mobile header.
- Applies to every page that uses the Title + image hero.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass
- Work detail measured at 1440: header 0–122, breadcrumbs 280, title 320–480, image at 560. On iPhone 13: breadcrumbs at 104, below the 80 header.
