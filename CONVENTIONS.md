# Conventions (borrowed from waypoint)

The setup follows the conventions of our waypoint repo, so the two projects look and behave the same: pnpm, biome (4 spaces, single quotes, no semicolons), CSS Modules with cascade layers, and kebab-case component folders grouped by role.

Every component folder looks the same:

```
src/ui/button/
  button.tsx           component, props keep their Figma names (Variant, Size)
  button.module.css    local kebab-case classes (.root, .bar-track), nested under each class with &
  button.stories.tsx
  index.ts             export * from './button'
```

Groups work like waypoint's `app → features → shared`: imports only flow `templates → site / blocks → ui → shared`. Code that two groups need moves down into `shared/`.

Figma variants are rendered as `data-*` attributes (`data-variant="outline"`) and styled with `&[data-variant='outline']` instead of modifier classes. Class names are kebab-case like the files; multi-word ones are read as `styles['bar-track']` (Turbopack can't convert them to camelCase the way Vite can, so bracket access is what works in both Next and Storybook). Classes are merged with the `cx` one-liner from `src/shared/cx.ts`. Lengths are rem, px only for borders and hairlines.

The layer order lives in `src/styles/globals.css`: `reset, tokens, components, typography, utilities, project`. Components sit in `components`, and template or consumer overrides go in `project` so they win without specificity tricks. `composes` (used for the shared focus ring) has to stay outside `@layer`, because Turbopack rejects it inside.

What we didn't take over: waypoint's bare/semi-styled split. This repo has only one look, so each component has a single module.
