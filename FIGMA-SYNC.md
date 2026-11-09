# Figma → Storybook sync (v2)

Instructions for an AI coding assistant (Claude Code, Cursor, Copilot, Windsurf or any tool that supports MCP). Run them whenever the design system changes in Figma: *"Run the sync described in FIGMA-SYNC.md."*

**Figma is the source of truth.** This file contains no design specs on purpose. Every value, variant, state, text and motion rule is read from Figma at run time. If something is missing or unclear in Figma, report it. Do not invent it here or in code.

- Figma file: **Youwe Tools Design System: Corporate**, file key `IP237ISXsaciooPrSykYMh`, https://www.figma.com/design/IP237ISXsaciooPrSykYMh/
- Sync record: `figma-sync.json` (every Figma component and approved page template, its Storybook title, code path, status and last synced signature)
- Checks: `npm run check` (= `scripts/check-legacy.mjs` + `scripts/check-coverage.mjs`)

> **What changed in v2** (after the first run on the main Storybook): a project-setup table, cascade layers and a required reset, content only from Figma, no word-splitting that eats spaces, exact per-variant geometry, Figma layout behaviour kept (scrolling carousels), per-variant design context before building, a concrete screenshot comparison, template content from slots, component-by-component migration, and two automatic checks that block placeholders and missing variants.

---

## 0. Project setup (fill in once per repo)

Everything below refers to these paths. If you use this kit in another repo, update this table first and keep the rest of the file unchanged.

| What | This repo |
|---|---|
| Stack | Next.js 16 + React 19 + TypeScript, Storybook 10 (`@storybook/nextjs-vite`), plain CSS with cascade layers |
| Token export (input) | `tokens/figma-variables.json` |
| Generated tokens (output) | `src/tokens/tokens.css`, `src/tokens/tokens.resolved.json`, built with `npm run tokens` |
| Entry stylesheet | `src/styles/globals.css`: declares `@layer reset, tokens, components, typography, utilities;`, imports the reset and tokens. Imported by `.storybook/preview.tsx` and `app/layout.tsx` |
| Components | `src/components/<group>/<Name>/`: `<Name>.tsx`, `<Name>.css`, `<Name>.stories.tsx`. Groups: `components` (Figma `Components/…`), `content-blocks` (Figma `Content blocks/…`), `site` (header, footer, Ask Youwe) |
| Building blocks (`_` names) | inside the parent's folder, no story |
| Templates | `src/templates/<Name>.stories.tsx`, title `Templates/<Name>`, exports `Desktop` and `Mobile` |
| Foundations docs | `src/foundations/` (rendered from `tokens.resolved.json`) |
| Exported images | `public/figma-assets/<group>/<name>.<ext>`, referenced as `/figma-assets/…` |
| Fonts | family from tokens; files in `public/fonts/aktiv-grotesk/` (Regular, Medium, Bold woff2, Youwe-licensed), declared in `src/styles/fonts.css` |
| Run / build / check | `npm run storybook` · `npm run build-storybook` · `npm run typecheck` · `npm run check` |
| Old Storybook to migrate | none (`figma-sync.json` has `"migrated"`), so step 0 is skipped |

---

## 1. Where things live in Figma

| What | Where in Figma | How to read it |
|---|---|---|
| Colours, spacing, font sizes, radii, borders, layout, **motion** | Local variables (collections `color_primitives`, `color_semantics`, `spacing`, `font_semantics`, `font_primitives`, `border`, `layout`, `motion`) | Run `figma/export-figma-variables.js` (step 3) |
| Text styles and effects (shadows, blur) | Local styles | Same export |
| Components | Pages whose name starts with `– ` (for example `– Case Card`, `– Content blocks/Hero`) | Run `figma/inventory.js`, then read **each variant** with the MCP design-context tool, plus a screenshot |
| Component behaviour | Each component's **description**: lines starting with `Motion:` and `Interaction:` | Part of the inventory output |
| Motion principles and recipes | Page **Brand / Motion** | Read the page (design context or screenshot) |
| Ask Youwe behaviour | Page **– Ask Youwe**, frame "Usage notes" | Read the page |
| Imagery | Pages **Brand / Imagery** and **Brand / Cases Content**; library file "Youwe – Imagery" | Export assets through the MCP tools into `public/figma-assets/`. Never hot-link Figma image URLs: they expire. |
| Approved page templates | Page **Templates**, frames named `Page / …` in the sections *Desktop* and *Mobile* | Run `figma/templates.js` (step 5). Every other frame on that page is an exploration: ignore it. |
| Page structure, rhythm and content rules | Page **Brand / Page guidelines** | Read the page (step 6) |

Names starting with `_` (for example `_Ask Youwe/Chip`) are **building blocks**. Build them as internal parts of their parent component. They get no story of their own.

---

## 2. Rules (always)

1. **No hard-coded design values.** Colours, sizes, spacing, radii, shadows, font families, durations and easings come from the generated `src/tokens/tokens.css` custom properties. If a value has no token, report it in the sync report.
2. **Never edit generated token files by hand.** They come from step 3.
3. **Fonts** come from the tokens (`--font-family-headings`, `--font-family-body`). Remove any `@font-face` or `font-family` that Figma does not use, for example *Aktiv Grotesk Ex*. Only the weights the Figma text styles use are loaded (see section 0); commit licensed font files only where the license allows it.
4. **Names match Figma.**
   - Story title: the `storybook.title` in `figma-sync.json` (`Components/<page>` or `Content blocks/<name>`).
   - Each Figma **variant axis** becomes an arg with the same name and options (`Mode`, `Device`, `Size`, `State`, `Layout` …).
   - Each **boolean, text, instance-swap and slot property** becomes a control or prop with the same name and default. Slots become `children`-style props (React nodes).
5. **Stories:** one *Default* story, one story per value of the main axis (for example `Layout`, `Variant` or `Size`), and one `AllVariants` story that renders the full variant grid like the Figma component set.
   - **Only build combinations that exist in Figma.** The inventory lists the exact variant names. When a combination does not exist, the controls must not offer it: disable the option or fall back to the nearest existing variant, and say so in the story description.
   - **Image and logo pickers** (instance-swap properties with `choices` in the inventory) become a select control with a small, representative set of real assets exported into `public/figma-assets/`.
6. **Mode and Device.**
   - `Mode=Dark/Light`: render inside a wrapper with `data-theme="dark"` or `data-theme="light"` (the tokens switch on that attribute).
   - `Device=Mobile`: 360px viewport. `Device=Desktop`: 1440px. **Mobile variants are their own designs** (different layout, order, sizes). Read them from Figma; never just squeeze the desktop version.
7. **States are real CSS.** `State=Hover/Focus/Pressed/Disabled` variants describe the end state of real `:hover`, `:focus-visible`, `:active` and `[disabled]` styles, not props that switch classes. Show them in stories with `storybook-addon-pseudo-states`.
8. **Motion.**
   - Implement the component's `Motion:` line with the `--motion-*` tokens (`duration/card` → `var(--motion-duration-card)`, `ease/emphasized` → `var(--motion-ease-emphasized)`).
   - Recipes that are not spelled out (word reveal, clip reveal, red reveal …) are on the **Brand / Motion** page.
   - Everything must still work and show its content with `prefers-reduced-motion: reduce`.
9. **Interaction:** implement the `Interaction:` line (keyboard support, focus behaviour, timing). Accessible markup is required: real links and buttons, ARIA patterns for tabs and disclosure. Fix every a11y-panel violation or report it.
10. **Do not overwrite hand-written logic.** Code between `// @keep-start` and `// @keep-end`, and any component with `"locked": true` in `figma-sync.json`, is left alone. Report the differences instead.
11. **Never delete** a component or story because it disappeared from Figma. Mark it `"status": "removed-in-figma"` and list it in the report. The exception is the first-run migration (step 0).
12. **Nothing old or invented may persist.** Every run ends with `npm run check`. Both checks must report *clean*:
    - `check-legacy`: fonts Figma does not use, variables that are not Figma tokens, hard-coded colours, font sizes and durations, old story titles, **placeholder copy**, a **missing reset**, component CSS **outside `@layer components`**, and **word spans that lose their spaces**.
    - `check-coverage`: every `complete`/`partial` component has its axes as args (and, if complete, every option plus an `AllVariants` story); every synced template has its device stories.
    - A line may be exempted with a `legacy-ok` comment only with a reason; list every exemption in the report.
13. **Cascade layers and reset.** The entry stylesheet declares `@layer reset, tokens, components, typography, utilities;`.
    - `reset`: box-sizing, margins, media, form controls inherit font, `:where(a, a:visited) { color: inherit; text-decoration: none; }`. It must exist before any component is built.
    - Every component stylesheet is wrapped in `@layer components { … }`.
    - The `.yw-*` text-style classes are in `typography`, **above** components, so a text style on an element always wins. Do not fight them with `font: inherit` or font shorthands in components; put the right `.yw-*` class on the element instead.
14. **All content comes from Figma.** Texts, images, logos, numbers and links shown in stories are the ones in the Figma component defaults or the templates.
    - Never invent copy, never show placeholder text (*Lorem ipsum*, *Hint text*, *Client name* …), and never render a property, layer or variant name as visible text (for example a layout name like "3 columns" as a heading).
    - If Figma itself contains placeholder copy, keep the component working but list it in the report under *Open questions*.
15. **Keep text intact.** Do not split text into word or letter spans unless the Figma motion spec requires it (word reveal). If you must, keep the spaces: render the space outside the `inline-block` span or use `white-space: pre`, and make sure the text still reads correctly and copies as one sentence.
16. **Exact geometry per variant.** Heights, paddings, gaps, radii, icon sizes and font styles differ per variant (for example each `Size` of Button/Basic has its own height and text style). Read them from the design context of **that variant**. Do not interpolate from one variant or round to "close enough".
17. **Keep Figma's layout behaviour.** Auto-layout direction, wrapping, fixed vs. fill widths, clipping and scrolling are part of the design. A horizontally scrolling row (for example Case carousel `Layout=Scroll`, Filter bar pills on mobile) stays a horizontal scroll at every width; it must not stack vertically. Sections fill the page width; content follows `--layout-container-max-width` and `--layout-container-padding`.

---

## 3. Steps for every run

### Step 0: First run only, migrate an old Storybook
Skip this step when `figma-sync.json` has `"migrated"`. Otherwise:

1. **Check what is shared.** Find out whether old stylesheets, fonts or component code are also used by the website. **Storybook-only files** may be cleaned up. **Shared files** are not deleted from: override old values with the generated tokens and list the leftovers in the report.
2. **Map old to new.** Use `GAP-REPORT.md` (if present) to map each old story to its new Figma title. Put the table in the migration report.
3. **Replace, then delete, one component at a time.** Build a new component (step 4). Only when it passes the definition of done **and** `npm run check`, delete its old stories, old code and old styles in the same commit. **Never remove an old stylesheet in bulk** while components still depend on it: the Storybook must look at least as good after every commit.
4. **Remove the old foundations** once nothing uses them: hand-written variables that `tokens.css` now provides, unused font files and `@font-face` rules.
5. **Park what has no Figma counterpart** in a **Legacy/** group and list it in the report. Do not delete it.
6. Add `"migrated": "<date>"` to `figma-sync.json`.

### Step 1: Check the connection
- Confirm the Figma MCP server is connected and can open file `IP237ISXsaciooPrSykYMh` (see the appendix).
- Confirm the project builds: `npm install`, `npm run tokens`, `npm run typecheck`.
- If the MCP server has no tool for running plugin code, use the fallbacks noted in steps 2 and 3.

### Step 2: Inventory
- Run `figma/inventory.js` through the run-plugin-code tool (`use_figma`). It is paged: run it with `START = 0`, then again with the returned `next`, until `next` is `null`. Lower `COUNT` if a response is cut off.
- Compare the result with `figma-sync.json`:
  - **new:** in Figma, not in the record → add it, status `missing`.
  - **changed:** signature differs from `lastSyncedSignature` → needs a sync.
  - **removed:** in the record, not in Figma → status `removed-in-figma` (rule 11).
- Record each component's full variant options in `figma.axes` (for example `{"Mode": ["Dark", "Light"], "Size": ["L", "M", "S", "XS"]}`); `check-coverage` uses it.
- *Fallback without plugin code:* use the MCP metadata tool on each `– ` page and treat every component as changed.

### Step 3: Tokens
1. Run `figma/export-figma-variables.js` through the run-plugin-code tool. Save the returned JSON unchanged as `tokens/figma-variables.json`.
2. Run `npm run tokens`.
3. Make sure only `src/styles/globals.css` imports the tokens. Remove hand-written duplicates of those variables.
4. Commit the JSON and the generated files together, so the diff shows exactly what changed in Figma.

### Step 4: Components
Work on one component at a time: building blocks and small components first (buttons, pills, tags, inputs), then cards, then content blocks, then header, footer and Ask Youwe. Reuse what is built; a card uses the real Button, a content block uses the real cards.

For each component that is `missing`, `partial` or **changed**:
1. **Read it from Figma, per variant.** Do not build from a screenshot or from memory.
   - Run the design-context tool on the component set **and on one variant per value of every axis** (always Dark + Light and Desktop + Mobile when those axes exist, and every `Size`/`Layout`). Note the geometry per variant (rule 16).
   - Take a screenshot of the component set for reference.
   - Read its description (`Motion:`, `Interaction:`) and its default texts and images (rule 14).
2. **Build or update** the component and its stories following section 2. Use the `.yw-*` text classes and tokens, wrap CSS in `@layer components`, export real images to `public/figma-assets/`.
3. **Compare it with Figma, side by side.**
   - Start Storybook (`npm run storybook`) and capture each story in the iframe (`/iframe.html?id=<story-id>&viewMode=story`) at the Figma frame width (1440 or 360) with a headless browser (Playwright).
   - Capture the same Figma variant with the MCP screenshot tool.
   - Compare the pair and fix differences in size, spacing, type, colour, radius and content before moving on. Components with **up to 40 variants**: compare every variant. **Bigger sets**: every value of every axis at least once, every Mode × Device combination and every `State`.
   - List what you compared, and anything you could not match, in the report.
4. **Run `npm run check`** and fix what it finds for this component.
5. **Update `figma-sync.json` for this component:** `code` (all file paths), `status` (`complete` / `partial` with a short `note`), `figma.axes`, `lastSyncedSignature`, `lastSynced`.

### Step 5: Templates (page stories)
Approved templates show how pages are built: section order, rhythm, the switch between dark and light, and real content lengths. They are compositions of components, not new components.

1. Run `figma/templates.js` once per template (`INDEX = 0`, then the returned `next`, until `next` is `null`). Each section comes back as one of:
   - `component`: the component, its props, its own `texts`, its **`slots`** (what sits in each slot, for example the cards in each Card grid cell, with their props and texts) and its **`nested`** cards (for example the case cards inside a Case carousel, with their props).
   - `wrapper`: a plain frame that only groups real components (`children`). Render those components in order.
   - `frame`: hand-built, not a component (`uses` lists what is inside).
2. Compare each template's `signature` with `figma-sync.json`. Only rebuild new or changed templates.
3. For each new or changed template, build `src/templates/<Name>.stories.tsx` (title `Templates/<Name>`) with a `Desktop` and a `Mobile` story (1440px / 360px viewport), where Figma has both:
   - Stack the real components in the same order with the same props. **Fill slots and nested cards with exactly the items `templates.js` lists**, with their props, texts and images. Never use the component's default content in a template.
   - The page header is part of the Hero (or a separate `Header/Corporate` section); it must be there.
   - Do not add spacing between sections: the section padding inside each block creates the rhythm.
4. For every `frame` section, render a clearly marked placeholder of the same height labelled *"Not a component yet: <frame name>"*, and list it in `placeholders` and in the report. **Never rebuild a hand-built frame as one-off markup.**
5. Compare a full-page capture of the story with the Figma template screenshot at the same width. Differences that come from a component go back to step 4.
6. Update the template in `figma-sync.json`: `code`, `status`, `placeholders`, `lastSyncedSignature`, `lastSynced`.

### Step 6: Foundations, motion and page guideline docs
- **Foundations/Colours, Typography, Spacing, Radius, Motion, Effects:** rendered from the generated token files (already in `src/foundations/`). Keep them generated, never typed by hand.
- **Foundations/Motion demos:** the principles and patterns from **Brand / Motion**, with live demos built from the real components (card red reveal, scroll and word reveal, clip reveal, header hide/show, Ask Youwe states), including reduced motion.
- **Templates/Page guidelines:** the rules from **Brand / Page guidelines** as text (MDX), with links to the template stories as worked examples.

### Step 7: Check and report
1. `npm run typecheck`, `npm run build-storybook` and `npm run check` must all pass.
2. Write `SYNC-REPORT.md` (overwrite it each run):
   - date and Figma file key
   - token changes: added, changed and removed variables (from the JSON diff)
   - components added, updated, unchanged and removed in Figma, with what was compared visually
   - templates added or updated, with their *Not a component yet* placeholders
   - the results of both checks, and any `legacy-ok` exemptions with reasons
   - on a migration run: the old → new mapping, and what was deleted, parked or left in shared files
   - anything that could not be matched to Figma, placeholder copy found **in Figma**, and open questions for the design team
3. Open a pull request with the report as its description. **Do not merge it yourself.**

---

## 4. Definition of done

**For a component**
- [ ] Every Figma variant axis and property is an arg or control, with the same names, options and defaults; `figma.axes` is recorded.
- [ ] Built from the design context of each variant; geometry matches per variant.
- [ ] Dark/Light and Desktop/Mobile render correctly, where those axes exist; mobile follows the mobile design.
- [ ] Hover, focus, active and disabled states work with real CSS and are shown in stories.
- [ ] The `Motion:` and `Interaction:` lines are implemented, and reduced motion is respected.
- [ ] Texts and images are the Figma ones; no placeholder copy and no property or variant names on screen.
- [ ] CSS is in `@layer components`, uses tokens and `.yw-*` classes only; text keeps its spaces.
- [ ] The side-by-side comparison with Figma passes.
- [ ] `npm run check` is clean for it; old stories, code and styles are gone (migration runs).
- [ ] `figma-sync.json` is updated.

**For a template**
- [ ] Every section uses a real component with the props from Figma, in the same order, with the slot and nested content from `templates.js`.
- [ ] The header is present; scrolling rows scroll; no spacing added between sections.
- [ ] Hand-built frames appear as labelled placeholders and are listed.
- [ ] Desktop (1440px) and Mobile (360px) stories exist where Figma has both.
- [ ] The full-page comparison passes, apart from the placeholders.

---

## Appendix: connecting the Figma MCP server

Figma's remote MCP server address is `https://mcp.figma.com/mcp`. Sign in with a Figma account that can open the file (Dev or Full seat). If these steps are out of date, check Figma's MCP documentation.

- **Claude Code:** `claude mcp add --transport http figma https://mcp.figma.com/mcp`, then run `/mcp` and authenticate.
- **Cursor:** add this to `.cursor/mcp.json`, then authenticate in Settings → MCP:
  ```json
  { "mcpServers": { "figma": { "url": "https://mcp.figma.com/mcp" } } }
  ```
- **VS Code (Copilot):** add this to `.vscode/mcp.json`, then start the server and sign in:
  ```json
  { "servers": { "figma": { "type": "http", "url": "https://mcp.figma.com/mcp" } } }
  ```
- **Other tools:** add an HTTP MCP server with the address above.

The **run plugin code** tool (`use_figma`) is part of Figma's remote server. The local Dev Mode server in the Figma desktop app may not offer it; then use the fallbacks in steps 2 and 3.
