# Sync report — 10 November 2026 (new blocks, header, Ask Youwe dock)

Backlog batch 4 plus three requests added today: hero logo loop, header on scroll up, docked Ask Youwe bar.

## New blocks (no more placeholders)

- **Content blocks/ACI Weave** (Home). Built from the hand-built frames (desktop *Frame 6*, mobile *ACI Weave · video + nudge*): kicker, title, body, Ask Youwe nudge snippet, *Explore ACI Weave* button, next to three video frames with captions. On desktop the text column stays in view while the videos scroll; mobile stacks. The frames show an abstract poster with a play button; give a video `src` and it plays inline. Figma desktop copy.
- **Content blocks/Insights overview** (Insights). Built from the hand-built *All insights* frames: heading, type filters (desktop: tiles in the Filter bar box; mobile: a sideways pill row), *Showing 12 of 174*, the Insight Card grid and *Show more*. In Storybook the filters and Show more work on the 12 Figma sample cards (Show more repeats them up to the type's total; Video has no samples, so it shows an empty message).
  - The selected type tile uses the Filter bar's pressed outline (brand red), as on Work. Figma shows the Focused state (blue focus ring) as "selected", which reads as keyboard focus.
- **Insights desktop "Latest"** is now composed from Insight Card (Featured) + Upcoming events, as in the frame.
- Home and Insights templates have **no placeholders left**.

## Compact dropdown

**Dropdown/Compact** is now its own component (Components/Input/Compact dropdown): sizes M and S, all nine states (Rest, Hover, Active, Filled, Filled Hover, Disabled, Focused, Success, Error) and the hint. It uses the shared input-field states. Pagination's *View max. … per page* now uses it. It's a native select, so *Active* is the platform's own option list.

## Requested today

- **Hero logo bar loops seamlessly.** The logos repeat as often as the screen needs (2 sets at 1440, 3 at 2560) and each set slides by exactly its own width, so the loop restarts on an identical frame: no empty end, no jump.
- **Header appears on scroll up.** On every template the header is fixed: it slides away when you scroll down and comes back as soon as you scroll up (Figma header motion, duration/slow). Once scrolled it becomes dark glass (base-1 80% + blur), so it stays readable over light sections; on mobile the whole top bar gets the glass.
- **Docked Ask Youwe bar** on every template: bottom centre, slides in after the first 480px, steps aside while the footer is on screen. Desktop shows the page's question as the Contextual chip (e.g. Home *Which service fits my problem?*, Services detail *What does "Build it" include?*); mobile shows the plain bar (no room for the chip). Asking opens the answer panel above the bar (Esc or close returns). The answer is a placeholder saying Ask Youwe isn't connected in Storybook. Over light sections the glass sits on a dark base so the text stays readable.
  - The per-page questions other than Services detail are my suggestions; Figma has the bar, not its placement on pages.

## Figma

- **Proposed components added** on a new page *Proposed components (review)*: Content blocks/ACI Weave and Content blocks/Insights overview, Desktop and Mobile, made from copies of the hand-built template frames. The template frames themselves are unchanged. For design to review.
- Contrast variables (batch 3) are still waiting: that change was blocked by the permission check; I did not retry it.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`: clean
- `check-coverage`: clean (76 complete components, 19 templates)
- axe colour-contrast on the new and changed stories: 0 failures (plus the known Ask Youwe case-snippet false positive)
- No horizontal scroll on Home and Insights (1440 and iPhone 13); header and dock tested on desktop, phone and the Mobile stories.

## Backlog

Removed: ACI Weave section, Insights overview, Dropdown/Compact. Added: review the proposed components in Figma, docked Ask Youwe bar in Figma. Next: batch 5 (Figma alignment).
