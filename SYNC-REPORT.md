# Sync report — 17 November 2026 (Services detail: card hovers)

On Services detail, the clickable-looking Feature Cards had no hover. These were the building blocks, which have an arrow, and the "Where B2B ordering gets stuck" AI cards, which have a "Learn more" link.

## Feature Card: whole-card hover (code option)

- **`href`:** the whole card becomes one link, with the shared **card hover**: the red reveal with `Hover CTA` + the card title, the text lifts, and it also works on keyboard focus. This is the same as Service, Case and Stat cards.
- **`ask`** (and no `button`): the whole card becomes a button that opens Ask Youwe with the question, with the same hover. The reveal shows the link label ("Learn more").
- **Link label:** in both cases it shows as text, so there are no nested links.
- **No change for cards without `href`/`ask`.** Static info cards keep no hover.
- **Scroll reveal:** the scroll reveal attribute moved from `data-reveal` to `data-scroll`, so it doesn't clash with the card-reveal `data-reveal="lift"`.

## Services detail template

- **B2B commerce building blocks:** the 8 tiles with arrows now have `href` and "Explore the building block" as the hover. The "View case study" link on the third tile is removed.
- **Where B2B ordering gets stuck:** the 5 AI cards are now whole-card Ask buttons with the hover.
- **Info cards without arrow or link** (such as "Why B2B commerce") stay static.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- In a browser at 1440:
  - Hovering a building block shows the red reveal "Explore the building block".
  - Hovering an AI card shows "Learn more".
  - Clicking an AI card opens the Ask Youwe dock with that question.
  - No console errors.
- New story: Feature Card / Clickable.
