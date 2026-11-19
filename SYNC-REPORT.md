# Sync report — 19 November 2026 (Insight detail: Event template, first version)

New template **Templates / Insight detail / Event** (Desktop and Mobile). It builds on Blog v2 and its Article block, so this PR is stacked on #53.

## Approach

- **Copy only from Figma.** The text comes from "Desktop 1440 — Insight Event detail (R6)" (27263:17242). Only its copy is used.
- **Same layout logic as Blog v2:**
  1. Title + image hero with breadcrumb.
  2. The intro next to a details panel (Text + media 8/4).
  3. The Article block: meta and the "On this page" nav on the left, the sections on the right.
  4. More events, the contact section and the footer.
- **Images are placeholders.**

## Page, in order

1. Header, then the hero: Home / Insights / Event, "Higher Ground: what’s next for product data".
2. **Intro + Event details:** the intro's first sentence is the heading and the rest is the body. Next to it is the details panel:
   - Date (the largest line), time and venue.
   - "Register now" jumps to the form (`#register`).
   - "Plan your route" opens Google Maps.
3. **Article:**
   - Meta: Type Event, Topic Product Information Management.
   - Nav: Why attend · Agenda · Timetable · What you will take away · Venue · Register.
   - Why attend and Agenda are lists. The first "Why attend" item keeps its bold lead-in.
   - Timetable: five slots.
   - What you will take away: a list.
   - Venue: name, address, image, "Plan your route".
   - **Register your interest:** the registration form.
4. More events (three Insight Cards), "Where does growth get stuck?", footer.

## New components (code-only, not in Figma yet)

- **Event details** (Components / Event details):
  - Label and value rows; values can have line breaks, such as an address.
  - The first row is the headline.
  - Optional primary and secondary buttons.
  - A dark panel with a thin border, styled like the Case intro meta.
- **Timetable** (Components / Timetable):
  - Time (brand red, tabular numbers) and what happens, one row per slot, with dividers.
  - Stacks when narrow.
- **Registration form** (Components / Registration form):
  - Built from Text Input, Radio, Checkbox and Button, laid out like the Contact CTA form.
  - **Fields:** first name, last name, business email and company (required), job title, an optional required choice (radios), an optional free-text question, an opt-in.
  - **States:** sending (the button shows "Sending…"); registered (a confirmation panel with a check, which gets focus and scrolls into view); error (an error Toaster above the button, and the entries stay).
  - `onSubmit(FormData)`: resolve for success, throw for an error.
  - All texts sit in `labels` (`REGISTRATION_FORM_LABELS`).
  - Stories: Default (submit to see the states), Registered, Error, Mobile.
- **Radio:** gained a native `required` option, so one option of the group must be picked.

## Please check: copy that is not in Figma

The Figma page has no form, only "Register now" and "Register your interest" buttons. These texts are mine:

- **Form heading:** "Register your interest". It reuses the button text.
- **Field labels:** standard ones (first name, last name, business email, company, job title).
- **Slope choice:** "Will you join on the snow?", with "Yes, I will join on the slopes" or "No, I will join the drinks and discussion off the slope". This is based on the timetable.
- **Dietary question:** "Dietary requirements" (for the seated dinner).
- **Opt-in:** "Keep me informed about future Youwe events".
- **Confirmation:** "You are registered" and "Thank you, {name}. We will send the confirmation and practical details to {email}."
- **Error:** "Something went wrong" and "Your registration was not sent. Please try again."

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- At 1440:
  - "Register now" jumps to the form.
  - A filled-in submit shows "Sending…" and then the confirmation in view.
  - The nav follows the scroll.
- At 390 everything stacks: intro, details panel, meta, the "On this page" bar, sections and form.
- No console errors.
- `figma-sync.json`: the three components are added as code-only. The CMS integration doc has a row for Event.

# Update — 19 November 2026 (Event details beside the hero title, sticky)

- **New block Hero aside** (Content blocks / Hero aside, code-only):
  - The Event details panel now starts next to the hero title, in the right 4 of 12 columns.
  - It stays in view below the fixed header while the hero image scrolls by, so it moves over the image.
  - It stops beside the intro, where the panel was before. Measured at 1440: it starts at 280, sticks at 120, and is released at the end of the intro.
  - It is meant for the Event and, later, the Whitepaper template.
- **Hero (Title + image):** inside Hero aside, the title keeps to the left 8 columns, so the panel never covers it. Other heroes are unchanged.
- **Intro:** Text + media 8/4 with the right column left empty. The panel rests there.
- **Clicks:** the layer over the page lets clicks through, except on the panel. "Register now" still jumps to the form.
- **Below 1024:** no sticky panel. It sits in the flow under the hero image, above the intro.
- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass. No console errors.

# Update — 19 November 2026 (venue map, form panel)

- **New: Map embed** (Components / Map embed, code-only):
  - The Venue section now shows a Google Maps embed of SnowWorld Zoetermeer instead of the placeholder image.
  - **Dark theme:** the keyless embed has no style options, so a colour filter shows the map in dark colours. Water stays blue and the pin stays red. Light shows Google's own colours.
  - `routeUrl(place)` gives a Google Maps directions link. "Plan your route", under the map and in the Event details panel, now opens directions to the venue.
  - **Privacy:** the embed loads Google content and cookies when it scrolls into view. On the live site, show it only after consent for third-party content, or show the route button alone.
- **Registration form on a panel:** the same surface as the Event details panel and the confirmation (base-2, a thin border, padding 32).
  - The fields use base-1, so they stand out from the panel. In dark mode the field colour is the panel colour, so without this they disappeared.
- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass. No console errors.
