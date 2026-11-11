# Sync report — 11 November 2026 (AI cards ask Youwe)

## AI Feature Cards open Ask Youwe

On the site, the "Learn more" link on an AI card opens the Ask Youwe bar with the card's question. That's now simulated in Storybook:

- **Services detail → Challenges we solve:** "Learn more" on any of the five AI cards opens the docked Ask Youwe bar's answer panel with the card's question, e.g. *How does Youwe solve "A legacy platform that limits growth"?*, and the placeholder answer (Ask Youwe isn't connected in Storybook). Focus moves to the follow-up field; Esc or close returns to the bar. Works on desktop and mobile.
- **How it's wired:** a small page-wide "ask Youwe this" request (`src/shared/ask`: `askYouwe(question)` and `useAskYouwe()`). The card only sends the question; the docked bar listens. They don't import each other, so on the real site the same request can go to the real Ask Youwe service.
- **Feature Card:** new `ask` prop (AI variant). With `ask` the link is a button that asks Youwe instead of going to a page. New story *AI asks Youwe* shows the question it would send (there's no docked bar in a single-component story).
- The questions are derived from the card titles (*How does Youwe solve "<title>"?*); replace them when the real copy is known.

Not in Figma: the `ask` behaviour (Figma has the AI card and the bar, not the link between them).

## Checks

- `pnpm typecheck`, `pnpm check`: pass
- `pnpm build-storybook`: pass
- Tested on Services detail at 1440 and on an iPhone 13: the panel opens with the question, focus lands in the follow-up field, Esc closes it.
