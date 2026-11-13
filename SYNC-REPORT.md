# Sync report — 13 November 2026 (Figma design system updated to match Storybook)

This time the direction is reversed: Figma was updated so it matches what Storybook has. This PR records those Figma changes in code.

## Figma changes (file IP237ISXsaciooPrSykYMh)

- **Video Player (new component, 27239:102):** has its own page. Autoplay Off shows the red play button. Autoplay In view shows a pause button on glass in the corner. There is a Poster instance swap. Content blocks/Media lists Video Player in both of its Image swaps.
- **Content blocks/ACI Weave (new component set, 27239:117):** made from the loose Home "Frame 6", with Device Desktop and Mobile. The six video placeholders are now Video Player instances, and the mobile nudge copy matches desktop.
- **Content blocks/Insights overview (new component set, 27239:155):** made from the loose "All insights" frames, with Device Desktop and Mobile.
- **Vertical slider:** new Behaviour axis with Click and Scroll (now 16 variants). The Scroll variants always show the progress line. Mobile Scroll shows the background image and steps. The progress line is 4px everywhere.
- **Ask Youwe:** new State Docked, which is the sticky bar on frosted glass (65% base-1 with a 32 blur).
- **Contrast colours:** the 8 semantic colour variables now have the WCAG AA values that code was overriding:
  - dark: brand and link use brand-red/200; placeholder and tag use neutral/400
  - light: brand uses brand-red/500; placeholder uses neutral/500; tertiary and tag use neutral/600
- **Templates:**
  - Home: ACI Weave is now an instance, and both Vertical sliders use Behaviour Scroll.
  - Insights: "All insights" is now an Insights overview instance.
  - Work detail:
    - The title is in sentence case: "Scaling smart: Quooker’s expansion to 17 countries".
    - The hero image is quooker-1.
    - The full-bleed media is a Video Player (In view) with the quooker-1 poster.
    - The two-up shows quooker-1 and g-star.
    - Related work no longer shows Quooker.

## Code changes

- **Ask Youwe:** new `State="Docked"`. It is Contextual on frosted glass, and the sticky AskDock bar now uses it. The glass style moved from `.dock > .ask-glass` to `.ask-glass[data-docked]`. A Docked story was added and AllVariants now includes it.
- **Video Player:** new AllVariants story. The comments now point to the Figma component.
- **ACI Weave, Insights overview:** the comments point to the new component sets.
- **Tokens:** `tokens/figma-variables.json` now has the new contrast aliases, and `tokens.css` was rebuilt from it. `src/tokens/contrast-overrides.css` was deleted. Because the values are the same as the overrides, nothing changes on screen.
- **figma-sync.json:**
  - Video Player, ACI Weave and Insights overview are now `complete`, with their new node IDs and axes.
  - Vertical slider has Behaviour(2).
  - Ask Youwe has State(4).
- **BACKLOG:**
  - The "Contrast colours in Figma" item is done.
  - New item: the Tech partners split in Figma needs a repeatable group. See the section below.
  - The Section intro colour note is now its own item.

## Not changed in Figma

- **Tech Partners "Systems that optimize" and "Systems that drive revenue"** are still loose frames. The Tech partners split component has a fixed 3 groups with up to 2+2 cards. These sections have 3 and 6 groups with up to 3+2 cards. I tried adding hidden extra groups to the component, but instances in the file did not pick them up, so I reverted that change. This needs a component with a repeatable group, using Figma slots or a nested `_Partner group` component.
- The other loose frames (Industries, Work, Industries detail, Insights detail, Tech Partners detail "Get in touch") have no code block of their own yet.

## Checks

- `pnpm typecheck`, `pnpm check` (79 complete, 19 templates, coverage clean), `pnpm build-storybook`: pass
- Ask Youwe Docked and Video Player AllVariants checked visually. Figma Home and Work detail templates checked with screenshots.
