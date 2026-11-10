# Backlog

Work agreed with the team that is not part of a sync batch yet. Newest first.

| Item | Why | Status |
|---|---|---|
| More motion on the templates | Motion feels thin on the pages. Proposal to make: scroll reveals per section (blocks, card staggers, image clip reveals, count-ups) applied consistently, hero entrance, slider and carousel transitions, all from the Figma motion tokens and with reduced-motion respected. (Johan, 2026-11-10) | To propose |
| Contrast colours in Figma | Code now overrides 8 semantic colour values that fail WCAG AA (src/tokens/contrast-overrides.css). The same change to the Figma variables was blocked by the edit permission check; make it in Figma (or approve it), re-export the tokens and delete the override file. Also: Section intro unread words are content/tertiary (not 28% opacity) and read words content/secondary. | Waiting for Figma |
| Text style for the Tech partners split group labels | INTEGRATION / DATA PLATFORMS / CLOUD use raw 12px caps in Figma; code uses body/xs/bold in capitals until there is a style. | Waiting for Figma |
| Statement giant rows in Figma | Built in code after the v2 site (image-filled + outlined rows, drift ±9%). Leave the Figma component for now (decided 2026-11-09). | Later |
| Theme toggle (light/dark) | In the Figma mobile menu as loose layers, not a component (desktop has a hidden copy). Fine for now (decided 2026-11-09). | Later |
| Industry List Item | Parked: the Industries template has a new design. Code and story are kept; revisit when that template is synced. | Parked |
| Breadcrumbs: back button variant | The desktop Breadcrumbs need a back button variant. The Figma property "Show back button" exists but is not connected to a layer. Design adds the variant, then we build it. | Waiting for Figma |
| Breadcrumb link: Hover state in Figma | Built in code (text to `content/primary`, `duration/fast`). Design to add State=Hover to `_breadcrumb-link` so Figma and code match. | Waiting for Figma |
| Action List Item copy | Stand-in copy is fine for now (decided 2026-11-09). | Won't do for now |
| Client quotes (Home "In their words") | Copy for Chadwicks Group, Thomas Telford and Symson; Johan supplies screenshots. Shows "Quote to follow" until then. | Waiting for copy |
| Home mobile frame in Figma | Sub-footer copy and the footer's Youwe links differ from desktop; desktop is correct (decided 2026-11-09). Code uses the desktop copy. | Waiting for Figma |
| Industries mobile frame in Figma | Mobile should follow the desktop design: industry Case Cards instead of the Industry List (decided 2026-11-09). Code already does; the Figma mobile frame still uses the parked Industry List. | Waiting for Figma |
| Mobile template frames in Figma | Desktop is leading (decided 2026-11-09). The mobile frames still differ: sub-footer copy on Home, About Us, Work, Work detail, Industries, Insights, Tech Partners and Services detail; Services detail mobile has extra sections (How we work, second proof, FAQ). Code follows desktop. Updating the Figma frames was blocked by an automatic safety check; design (or Johan) to update them, or approve the edit. | Waiting for Figma |
| Image rights check | Case photos and abstract backgrounds are exported from Figma into public/media for the Storybook presentation. Confirm they may be shown on the (noindex) public Storybook URL. | Before sharing |
| CMS images | When the CMS is connected, replace the lookups in src/media/media.ts with CMS asset URLs; components already take plain URLs. | With the CMS |
| Stat hover in Figma | Built in code (whole card is the link; surface/base-2, arrow filled brand red). Add State=Hover to the Figma Stat component (Figma batch). | To do |
| Review proposed components in Figma | Page "Proposed components (review)" holds Content blocks/ACI Weave and Content blocks/Insights overview (Desktop + Mobile), made from the hand-built template frames and built in code. Design to review, then swap the template frames for instances. | Waiting for Figma |
| Docked Ask Youwe bar in Figma | The templates now have the sticky Ask Youwe bar (bottom centre, slides in after the hero, steps aside at the footer, opens the answer panel). Figma has the bar but not its placement on the pages. | Waiting for Figma |
