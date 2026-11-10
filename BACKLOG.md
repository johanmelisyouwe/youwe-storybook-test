# Backlog

Work agreed with the team that is not part of a sync batch yet. Newest first.

| Item | Why | Status |
|---|---|---|
| Cards on mobile: no hover, always a link | The red hover overlay works on desktop but not on touch. On mobile, turn the hover off and always show a link or button on the card (the top-right arrow button is fine). Applies to all cards with the hover reveal (Case, Service, System, Insight, Feature, Image). (Johan, 2026-11-10) | To do |
| Card hover: keep the arrow button still | On desktop the card's own arrow button moves up during the hover animation, which feels jumpy next to the hover arrow that appears. Keep it static. (Johan, 2026-11-10) | To do |
| Mobile footer not used on mobile | Header and footer switch by the Device setting, not by screen width, so a real phone gets the desktop footer. Make them switch on width (like the content blocks do). (Johan, 2026-11-10) | To do |
| Mobile header: hamburger instead of full nav | Same cause as the footer: on a phone the desktop navigation shows. Below the mobile breakpoint the header should show the logo and the hamburger button. (Johan, 2026-11-10) | To do |
| More motion on the templates | Motion feels thin on the pages. Proposal to make: scroll reveals per section (blocks, card staggers, image clip reveals, count-ups) applied consistently, hero entrance, slider and carousel transitions, all from the Figma motion tokens and with reduced-motion respected. (Johan, 2026-11-10) | To propose |
| Horizontal scroll on desktop and mobile | The page scrolls sideways. Likely the case carousel bleeding off the right edge (and possibly the hero logo marquee or the Statement giant rows). Clip horizontal overflow on the page and check each block. (Johan, 2026-11-10) | To do |
| Case card logo padding | The client logo on case cards sits too close to the edges. Use the Figma logo slot: the logo inside a box with padding and margins. (Johan, 2026-11-10) | To do |
| Logos: same box as in Figma everywhere | All logos (case cards, stats, hero bar, technology grid, partner cards) should use the Figma logo box (190×100 frame with the logo centred and inner margins), so sizes and spacing match. (Johan, 2026-11-10) | To do |
| Stat card hover | The hover state on the (client) stat cards is missing. Build it from the Figma Stat component. (Johan, 2026-11-10) | To do |
| Text contrast (accessibility) | Some text fails the contrast check (Storybook accessibility panel). Go through the a11y results per component and template and fix the token pairs, or flag them to design where the Figma colours themselves fail. (Johan, 2026-11-10) | To do |
| Text style for the Tech partners split group labels | INTEGRATION / DATA PLATFORMS / CLOUD use raw 12px caps in Figma; code uses body/xs/bold in capitals until there is a style. | Waiting for Figma |
| Statement giant rows in Figma | Built in code after the v2 site (image-filled + outlined rows, drift ±9%). Leave the Figma component for now (decided 2026-11-09). | Later |
| Theme toggle (light/dark) | In the Figma mobile menu as loose layers, not a component (desktop has a hidden copy). Fine for now (decided 2026-11-09). | Later |
| Industry List Item | Parked: the Industries template has a new design. Code and story are kept; revisit when that template is synced. | Parked |
| Breadcrumbs: back button variant | The desktop Breadcrumbs need a back button variant. The Figma property "Show back button" exists but is not connected to a layer. Design adds the variant, then we build it. | Waiting for Figma |
| Breadcrumb link: Hover state in Figma | Built in code (text to `content/primary`, `duration/fast`). Design to add State=Hover to `_breadcrumb-link` so Figma and code match. | Waiting for Figma |
| Action List Item copy | Stand-in copy is fine for now (decided 2026-11-09). | Won't do for now |
| ACI Weave section (Home) | Hand-built frame in Figma (videos + Ask Youwe snippet). Make it a component so the Home template can use it instead of the placeholder (decided 2026-11-09). | Later |
| Client quotes (Home "In their words") | Copy for Chadwicks Group, Thomas Telford and Symson; Johan supplies screenshots. Shows "Quote to follow" until then. | Waiting for copy |
| Home mobile frame in Figma | Sub-footer copy and the footer's Youwe links differ from desktop; desktop is correct (decided 2026-11-09). Code uses the desktop copy. | Waiting for Figma |
| Insights overview component | Type filters, insight card grid, "Showing 12 of 174" and Show more are hand-built in Figma (desktop and mobile). Make it a component so the Insights template can use it instead of the placeholder (decided 2026-11-09). | Later |
| Industries mobile frame in Figma | Mobile should follow the desktop design: industry Case Cards instead of the Industry List (decided 2026-11-09). Code already does; the Figma mobile frame still uses the parked Industry List. | Waiting for Figma |
| Mobile template frames in Figma | Desktop is leading (decided 2026-11-09). The mobile frames still differ: sub-footer copy on Home, About Us, Work, Work detail, Industries, Insights, Tech Partners and Services detail; Services detail mobile has extra sections (How we work, second proof, FAQ). Code follows desktop. Updating the Figma frames was blocked by an automatic safety check; design (or Johan) to update them, or approve the edit. | Waiting for Figma |
| Dropdown/Compact | Renamed from Dropdown/Quantity in Figma and used by Pagination (View amount). Its M look is built into Pagination; build it as its own component if it is used elsewhere. | Later |
| Image rights check | Case photos and abstract backgrounds are exported from Figma into public/media for the Storybook presentation. Confirm they may be shown on the (noindex) public Storybook URL. | Before sharing |
| Remaining logos and photos | Logos not in the Figma templates yet (e.g. Unipart, Databricks, Microsoft, Google Cloud, OpenAI, n8n and the other partner logos on Tech Partners) still show the name. Export them the same way when needed. | Later |
| CMS images | When the CMS is connected, replace the lookups in src/media/media.ts with CMS asset URLs; components already take plain URLs. | With the CMS |
