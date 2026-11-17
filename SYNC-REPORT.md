# Sync report — 17 November 2026 (Ask Youwe: answer service)

Rob's request for the v3 site: Ask Youwe has to pass questions to the site and show the answers.

## AskDock

- **`onAsk(question, locale, { signal }) => Promise<AskAnswer>`**
  - The site calls its own server-side API route, so no key reaches the browser.
  - `AskAnswer` is `{ text, sources?: { title, url }[], followUps?: string[], cta?: { label, href } }`.
  - `locale` is a prop that is passed through to `onAsk`.
- **States**
  - Loading: pulsing dots and `labels.loading`, with `aria-busy` set.
  - Answered: the text becomes paragraphs at blank lines (rich text also works), followed by source links, follow-up chips and the CTA.
  - Error: `labels.error` plus a Try again button, in a `role="alert"` region.
  - Unavailable: the `fallback` prop, or `labels.unavailable`.
- **Fallback:** there is no `onAsk` yet, or `onAsk` rejects with `AskUnavailableError`.
- **Newest question wins:** the previous request is aborted through `signal`.
- **Focus (WCAG):** opening moves focus to the panel's follow-up field. Esc or Close returns it to where it came from (the bar, or the snippet or card that asked), or to the bar's field.
- **Labels:** new keys `panelTitle`, `loading`, `error`, `retry`, `sources` and `unavailable`, next to the existing `close`, `send`, `followUp`, `followUpPlaceholder` and the `Prompt` prop. NL and SV can all come from Contentful.

## AskSnippet

- "Ask about it" and the Ask button now default to `askYouwe(question)`. The page's AskDock opens and answers through the same `onAsk`.

## AskYouwe (panel)

- New props for the states: `status`, `sources`, `followUps`, `answerText`, `fallback` and `onRetry`.
- The Figma props `Answer` and `Source` still work.

## Docs and stories

- Introduction / CMS integration has a new "Ask Youwe (answer service)" section with a `fetch('/api/ask')` example.
- New stories:
  - Answer states
  - Dock with answer service: a mock service. Questions containing "fail" give the error and "unavailable" gives the fallback.
  - Dock without service (fallback)

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Interaction test in a browser:
  - Ask from the bar → loading → answer with 2 source links.
  - Focus moves to "Ask a follow-up".
  - A follow-up containing "fail" → error with Try again.
  - Esc → focus goes back to the bar.
  - Without a service → fallback text.
  - No console errors.
