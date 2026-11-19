# Sync report — 19 November 2026 (Insight detail templates, combined)

This is one PR for all insight detail templates. It replaces #53 (Blog), #54 (Event) and #55 (Whitepaper), and it stays a draft until every page is in. Still to come: News and Video.

The copy comes only from the Figma insight detail frames (27263:16299). Layouts are built from our own components, as long-form editorial pages modelled on the case page. Images are placeholders.

## Templates (Templates / Insight detail)

- **Blog (v1):**
  - Hero, Case intro (meta, lead, rich text), key figures and an image.
  - The article as Two-column text 4/8 sections, numbered steps, a Kingspan example, FAQ, sources, More blogs and the contact section.
- **Blog v2:**
  - Hero, then the intro beside the key figures stacked (Text + media 8/4).
  - Then the **Article** block: meta and a sticky **"On this page"** nav on the left, one reading column on the right.
- **Event:**
  - The **Event details** panel (date, time, venue, Register now, Plan your route) sits next to the hero title and stays in view over the hero image until it rests beside the intro (**Hero aside**).
  - Article sections: why attend, agenda, **Timetable**, takeaways, venue with a dark **Google Maps embed**, and the **Registration form** (sending, confirmation and error states).
- **Whitepaper:**
  - The same structure as Event: the details panel with Download, the intro and the chapter tiles.
  - Article sections: what you will get, why download it, the download form (phone, Figma privacy text, no opt-in) and questions.

## New code-only components (in figma-sync.json)

| Component | What it does |
|---|---|
| Content blocks / Article | Sticky anchor nav and meta beside a 740 reading column; sections with rich text, steps, FAQ or any content |
| Components / Anchor nav | "On this page" links with scroll spy; a disclosure on mobile |
| Content blocks / Hero aside | A panel beside the hero title, sticky over the image until the end of the intro; in the flow below 1024 |
| Components / Event details | Label/value rows (the first one as headline) with primary and secondary buttons |
| Components / Timetable | Time and what happens, one row per slot |
| Components / Registration form | Sign-up or download form from the form components; options `choice`, `question`, `phone`, `optIn`, `notice`; states |
| Components / Map embed | Keyless Google Maps embed, Dark (colour filter) or Light; `routeUrl()` for directions |

## Changes to existing components

- **Feature list (Split) and Accordion list (Split):** the right column is now 740 and right-aligned, so it lines up with the Case intro and Two-column text bodies on wide screens. At 1440 the change is 4px.
- **Accordion list:** `'Accordion title': ''` hides the small title.
- **Case intro:** `body` is optional.
- **Stat row:** `vertical` option.
- **Feature Card:** `Description` is optional.
- **Radio:** `required` option.
- **Hero (Title + image):** keeps its title to the left 8 columns inside Hero aside.
- **Site-wide:** in-page anchor links scroll smoothly (`scroll-behavior: smooth`), except with reduced motion.

## Please check

- **Copy that is not in Figma:**
  - The registration form texts: heading, the slope and dietary questions, the opt-in, and the confirmation and error messages.
  - The whitepaper confirmation title "Thank you, {name}".
  - The "Download" and "Register" nav labels.
- **Privacy:** on the live site, load the map only after consent for third-party content.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Every page checked at 1440 and 390, with no console errors.
