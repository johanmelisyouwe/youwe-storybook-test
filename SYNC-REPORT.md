# Sync report — 19 November 2026 (Insight detail, Contact, Legal, 404 and Error templates, combined)

This is one PR for all insight detail templates. It replaces #53 (Blog), #54 (Event) and #55 (Whitepaper). All five Figma insight detail pages are in: Blog (with v2), News, Whitepaper, Event and Video.

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

- **Video:**
  - The hero's wide image is the video: a poster with the play button, which plays with sound in the Vimeo player. The film is a placeholder, the Quooker film.
  - **No sticky panel here:** it would cover the video while it plays. The details panel (on-demand webinar, published, expert, Download webinar) sits beside the intro, as in Blog v2.
  - Article sections: about the webinar, the topics (numbered), and the download form as in Figma (no company or job title; phone, country, the PWA question as a text area, the PWA opt-in, the privacy text).

- **News:**
  - A short page, so there is no panel beside the hero. The Title + image hero leads straight into the Article.
  - Left: meta (published, type, topic) and "On this page". Right: the intro as the lead, then the reading column.
  - **The announcement:** paragraphs, the two quotes (Henk Mensinga, Benjamin Lang) as Quote Cards, and the closing lines with the link.
  - **The eCommerce comparison guide teaser:** "Download now" and "Contact us".
  - The Figma Shopify Plus logo image is replaced by a placeholder.

## Contact and Legal templates

The copy comes only from the Figma frames in section 27263:19276 (Contact 27263:18403, Cookies 27263:18529, Privacy Policy 27263:18605, Terms & Conditions 27263:18713).

- **Contact** (Templates / Contact):
  - An own layout from existing components, with the same logic as the Event page. The Figma layout is not copied.
  - **Hero aside:**
    - A title-only hero (breadcrumb, Contact tag, "Let’s talk about your next step").
    - Beside it, a contact panel (Event details): Call us +31 10 466 86 38, response time within one working day, the eight offices, and a "Call us" button.
    - "Where are your offices?" is the page's Ask Youwe dock question. It is not a snippet in the panel.
    - The panel stays in view while you fill in the form and rests at its end.
  - **Reading column:**
    - The intro as lead and body, then "Send us a message".
    - The Registration form on its panel, with the Figma fields: name, business email, phone, country, who do you want to contact, message, an optional attachment, the opt-in.
    - The confirmation reads "Thank you, {name}. One of our experts will get back to you within one working day."
  - **Then:** offices with live local time, the work CTA "See what we build with clients" as the usual Sub-footer background, and the footer.
- **Legal / Cookies:**
  - A title-only hero (breadcrumb, "Legal" tag, title), then the intro.
  - **Cookie preferences:** Necessary is always on; Preferences, Analytics and Marketing are toggles. "Save preferences" is still to be wired to the consent platform.
- **Legal / Privacy Policy:**
  - Title-only hero, then the Article block: "On this page" with 8 sections, the intro as lead, numbered sections in rich text.
  - The Figma "[To confirm]" gaps show as "To confirm" notes in quote style, so legal can fill them in.
- **Legal / Terms & Conditions:**
  - Title-only hero, then the Article block with an "Articles" nav (11 articles) and "Download / open full PDF" under it.
  - The version line is the lead, the scope is the intro, and the source note comes at the end.

## 404 (Templates / 404)

- **Not in Figma.** Built from existing components only.
- **Hero:** the Gradient hero with the moving WebGL background, as on Home.
  - Label "404", "Page not found. / Let’s get you back on track." (the second line in red).
  - A short body, with "Back to home" and "Contact us".
- **Ask Youwe:** the dock question is "What are you looking for?".
- **Popular pages:** Services, Work, Industries and Insights as clickable Feature Cards, with an arrow and the card hover. The descriptions are the hero lines of those templates.
- Footer. No sub-footer, because the hero already has the contact button.

## Error page (Templates / Error), after the review

This follows f3bw's review comment on error handling and error boundaries.

- **Not in Figma.** Same build as the 404: the Gradient hero with "Error", "Something went wrong. / It’s not you, it’s us.", a short body, **Try again** and **Back to home**, then the popular pages and the footer.
- **Try again** calls `reset`, the error boundary's retry. Without a reset it reloads the page.
- **Error reference:** an optional `digest` (e.g. a server log id) is shown, so support can find it. See the "With reference" story.
- **Shared module:** the 404 and Error pages now live in `src/templates/error-pages.tsx` (`NotFoundPage`, `ErrorPage`), so the site can render them from its 404 route and its error boundary.
- **Next.js app router files** (the site uses Next.js 16.4.5 with the app router, the same as this repo):
  - `app/not-found.tsx` shows the 404 page.
  - `app/error.tsx` is the error boundary. It shows the Error page with `reset` and `error.digest`, and logs the error (the place to hook up an error tracker).
  - `app/global-error.tsx` is a bare last-resort fallback for when the root layout itself fails: own html/body, no header or footer, same copy.
- **CMS integration doc:** a new "404 and error pages" section with these files and when each one applies.
- **Hero:** a button without `href` can have `onClick`, which the "Try again" button uses.

## New code-only components (in figma-sync.json)

| Component | What it does |
|---|---|
| Content blocks / Article | Sticky anchor nav and meta beside a 740 reading column; sections with rich text, steps, FAQ or any content |
| Components / Anchor nav | "On this page" links with scroll spy; a disclosure on mobile |
| Content blocks / Hero aside | A panel beside the hero title, sticky over the image until the end of the intro; in the flow below 1024 |
| Components / Event details | Label/value rows (the first one as headline) with primary and secondary buttons |
| Components / Timetable | Time and what happens, one row per slot |
| Components / Registration form | Sign-up or download form from the form components; options `choice`, `question`, `phone`, `optIn`, `notice`; states |
| Components / File Input | Attachment field on the Field shell: Choose file and the file name or hint |
| Components / Cookie preferences | Cookie categories with Toggles (Necessary locked on) and Save preferences |
| Components / Map embed | Keyless Google Maps embed, Dark (colour filter) or Light; `routeUrl()` for directions |

## Changes to existing components

- **Feature list (Split) and Accordion list (Split):** the right column is now 740 and right-aligned, so it lines up with the Case intro and Two-column text bodies on wide screens. At 1440 the change is 4px.
- **Accordion list:** `'Accordion title': ''` hides the small title.
- **Case intro:** `body` is optional.
- **Stat row:** `vertical` option.
- **Feature Card:** `Description` is optional. Article steps can be titles only.
- **Hero:** new `tags` (type and topics) and `date` above the title.
- **Hero (Title + image):** new `video` (and `videoTitle`) shows a Video Player (Autoplay Off) in place of the wide image, with the image as poster.
- **Registration form:** also `company` and `jobTitle` (both on by default), `countries` (dropdown), `topics` (a required dropdown, e.g. who to contact), `attachment` (File Input), a multiline and/or required `question` (text area) and `optInLabel`.
- **Radio:** `required` option.
- **Event details:** the first row (date, phone) steps down from body/2xl to body/xl in a narrow panel, so it stays on one line. The size now follows the panel width instead of `Device`.
- **Hero (Title + image):** without `image` or `video` it shows the title area only (legal pages).
- **Article:** inside Hero aside, the reading column without nav keeps to the left 8 columns, so it never runs under the sticky panel (on screens between 1024 and about 1300 it did). New `intro` (rich text after the lead) and `navFooter` (under the nav, e.g. the PDF button). Without a nav, the reading column now aligns left under the hero title (it was centred).
- **Hero (Title + image):** keeps its title to the left 8 columns inside Hero aside.
- **Site-wide:** in-page anchor links scroll smoothly (`scroll-behavior: smooth`), except with reduced motion.

## Hero tags instead of the meta list (all insight detail pages)

- **The type and topics are now tags next to the page heading**, between the breadcrumb and the title. This follows Patrick's suggestion, in our own styling.
  - The type comes first, filled brand red. The topics follow as outlined pills, styled like the Insight Card type tag.
  - Blog and News also show the publish date after the tags. On Event, Whitepaper and Video the date stays in the details panel.
- **The meta list is gone:**
  - Article pages (Blog v2, Event, Whitepaper, Video, News): only "On this page" remains in the left column.
  - Blog v1: the Case intro meta column is left empty, so the text keeps its column.
- **Hero:** new `tags` and `date` props. Heroes without them are unchanged.

## Please check

- **Copy that is not in Figma:**
  - The registration form texts: heading, the slope and dietary questions, the opt-in, and the confirmation and error messages.
  - The whitepaper and video confirmation title "Thank you, {name}".
  - The video confirmation "We will send the webinar to {email}." and the "Expert: Elze Kool" row (the name is from the Figma text).
  - The "Download" and "Register" nav labels.
- **Contact:** "Send us a message", the panel labels (Call us, Response time, Offices) and the confirmation are mine. The "Who do you want to contact?" options are mine too (Start a new project, Support for an existing project, Partnerships, Press and media, Careers, Something else). Figma only has the label.
- **Cookies:** the "Save preferences" button and the "Your preferences are saved." line are mine, because Figma has toggles only.
- **404 and Error:** the hero texts and the Ask question are mine.
- **Left out on purpose:** the prototype and design notes in these frames:
  - the Contact "This prototype form does not send data…";
  - the Cookies "design-complete preferences view…", "Source framing…" and "Design mock only…";
  - the Privacy "Live page note" and "Last structured for Site A R6 design…".
- **Privacy:** on the live site, load the map only after consent for third-party content. The Privacy Policy "To confirm" items need legal text before launch.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Every page checked at 1440 and 390, with no console errors.
