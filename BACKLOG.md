# Backlog

Work agreed with the team that is not part of a sync batch yet. Newest first.

| Item | Why | Status |
|---|---|---|
| More motion on the templates | Motion feels thin on the pages. Proposal to make: scroll reveals per section (blocks, card staggers, image clip reveals, count-ups) applied consistently, hero entrance, slider and carousel transitions, all from the Figma motion tokens and with reduced-motion respected. (Johan, 2026-11-10) | To propose |
| Contrast colours in Figma | Code now overrides 8 semantic colour values that fail WCAG AA (src/tokens/contrast-overrides.css). The same change to the Figma variables was blocked by the edit permission check twice (batch 3 and batch 5); make it in Figma (or approve it), re-export the tokens and delete the override file. Also: Section intro unread words are content/tertiary (not 28% opacity) and read words content/secondary. | Waiting for Figma |
| Statement giant rows in Figma | Built in code after the v2 site (image-filled + outlined rows, drift ±9%). Leave the Figma component for now (decided 2026-11-09). | Later |
| Theme toggle (light/dark) | In the Figma mobile menu as loose layers, not a component (desktop has a hidden copy). Fine for now (decided 2026-11-09). | Later |
| Industry List Item | Parked: the Industries template has a new design. Code and story are kept; revisit when that template is synced. | Parked |
| Action List Item copy | Stand-in copy is fine for now (decided 2026-11-09). | Won't do for now |
| Client quotes (Home "In their words") | Copy for Chadwicks Group, Thomas Telford and Symson; Johan supplies screenshots. Shows "Quote to follow" until then. | Waiting for copy |
| Image rights check | Case photos and abstract backgrounds are exported from Figma into public/media for the Storybook presentation. Confirm they may be shown on the (noindex) public Storybook URL. | Before sharing |
| CMS images | When the CMS is connected, replace the lookups in src/media/media.ts with CMS asset URLs; components already take plain URLs. | With the CMS |
| Review proposed components in Figma | Page "Proposed components (review)" holds Content blocks/ACI Weave and Content blocks/Insights overview (Desktop + Mobile), made from the hand-built template frames and built in code. Design to review, then swap the template frames for instances. | Waiting for Figma |
| Docked Ask Youwe bar in Figma | The templates now have the sticky Ask Youwe bar (bottom centre, slides in after the hero, steps aside at the footer, opens the answer panel). Figma has the bar but not its placement on the pages. | Waiting for Figma |
