# Sync report — 20 November 2026 (Tech Partners detail, Ask Youwe voice)

This follows Rob's feedback: "partner detail is missing" and "Ask Youwe is missing a voice icon: you should be able to talk to it, and see the waves so you know the sound comes in".

## Tech Partners detail (Templates / Tech Partners detail)

Built from Figma "Tech Partners detail" (26906:10343, Templates page), the ACI Weave page. It uses the same blocks in the same order:

1. **Gradient hero:** breadcrumb Home / Tech Partners / ACI Weave, body, "Talk to an ACI Weave expert" and "Get in touch".
2. **Text + media 6/6:** "What ACI Weave is", with the agent marketplace screenshot.
3. **Card grid Feature + 4:** capabilities 01–05. The first card has the competitor analysis screenshot, and every card has tags.
4. **Card grid 1 + Wide:** 06 Governance and security, plus the approval loop diagram.
5. **Accordion list Split:** 10 FAQ.
6. **Card grid 3 columns:** "What ACI Weave gives you", with the dashboard, pricing and Wickey images.
7. **Feature list Split:** "What ACI Weave agents do", the ten agents as a numbered list (01–10), the same list as on Services detail.
   - Figma has a 5-column grid of ten cards. I changed it on review because ten cards felt like a lot.
8. **Card grid 2 columns, Light:** "Deployment and data quality".
9. **Card grid Wide + 1 with the stacked "Get in touch" intro:** the Kingspan image and quote card (with "How ACI Weave agents work"), plus the G-Star and Wickey case cards.
10. **Contact CTA Form**, then the footer.

**Images:**
- The product screenshots, the approval loop and the Wickey photo come from the Figma frame (`public/media/products`, WebP).
- The hero uses an abstract background instead of the Figma stock photo.
- The Kingspan image is our Kingspan case photo.

**Left out (Figma leftovers):**
- the "Industries we serve" kicker above the FAQ ("FAQ" instead);
- the "Default" tags on the G-Star case card.

**Image Card: new `Fit="Contain"`.** It shows a whole diagram or screenshot on the dark surface instead of cropping it. The approval loop uses it; at the cell's height it was cut off on both sides.

## Tech Partners detail v2 (Templates / Tech Partners detail v2), Pimcore

The copy comes from Figma "Partner detail Pimcore (R6)" (file "Youwe website 2026 – Homepage A (Flow)", 127:2). It is built only from existing blocks:

1. **Gradient hero:** breadcrumb Home / Tech Partners / Pimcore, "One data spine / for every channel.", two buttons, and the **Stats bar**: 27 published cases, 25 clients, 9 industries, Founding partnership.
2. **Services split:** "Where Pimcore fits", with the three services it is part of (Service Cards with the "Systems that scale / optimize" eyebrow).
3. **Content tabs:** "Five steps, one platform", one tab per step (MDM, PIM + AI, DAM, Portal, DXP), each with its client case card.
   - Heidelberg shows "3 SAP ERP systems integrated" and Chadwicks "20,000 products enriched".
4. **Feature list Split, Light:** "Where our Pimcore platforms run", the case count per industry with the clients.
5. **Text + media:** "Questions about Pimcore?" with two Ask Youwe questions.
6. **Accordion list (Split list):** "Strategic Partner, from day one", with the three partner facts as bullets and the FAQ.
7. **Contact CTA Sub-footer background:** "Talk to a Pimcore expert", then the footer.

**Not used:**
- the "data in / channels out" diagram, because there is no component; the five steps tell the same story;
- the blog teaser next to the partner facts.

**Images:** Heidelberg and Chadwicks case photos; abstract placeholders for FroQ, Vivisol and CMSNL.

**Other pages in the same Figma file:** Symson, Hypernode and ACI Weave, not built yet.

## Ask Youwe: voice input

There is no Figma design for this, so it is built from the Ask Youwe parts.

- **Mic button:** at the end of the Ask bar (docked and in-page) and next to send in the answer panel.
  - It is the Figma "mic" icon from Brand / Iconography (8192:28913), added to the icon set.
  - It only shows where the browser supports speech recognition (Chrome, Edge, Safari), so it is hidden in Firefox.
- **While listening:**
  - The mic button turns red and pulses.
  - A live wave of 24 bars, red to blue like the Orb, moves with the microphone level, so you can see the sound coming in.
  - The field says "Listening…" and fills with your words as you speak.
- **When you stop speaking, or press the mic again:** the question is asked through the same `onAsk` as typing.
- **Language:** follows `locale` ('en' / 'nl' / 'sv' → en-GB / nl-NL / sv-SE).
- **States:**
  - Microphone refused: "Allow microphone access to ask with your voice".
  - Not heard: "Couldn’t hear that. Try again".
  - With reduced motion, the bars fade with the level instead of moving.
- **Labels for translation:** `voice`, `voiceStop`, `listening`, `voiceDenied`, `voiceError`.
- **Stories:**
  - "Listening" shows the bar and the panel with a demo wave.
  - "Voice (try it)" lets you talk to it for real; it shows what it heard.
- **CMS integration doc:** has a voice input bullet under Ask Youwe.

## Ask Youwe: active state and listening animation

**The problem:** you couldn't see when the bar was active. Its focus style was overridden by the docked bar's glass border. A first fix (a 2px red ring with a halo) was too heavy, so this is a softer version.

- **Typing (focus):**
  - a thin red ring (Ask glow at 55%) and a soft red glow below;
  - the raised Ask surface, and the aura at full strength;
  - the Orb slightly larger.
  - The ring is also the keyboard focus indicator.
- **Listening (mic on):** the whole bar moves with your voice. The live wave sets a smoothed level (0–1) on the bar, and that level drives:
  - the strength of the ring;
  - the size and strength of the glow around the bar, which swells while you speak and settles when you pause;
  - the size and glow of the Orb.
  - A soft red-to-blue band also sweeps through the bar like a sound wave, brighter when you speak.
- **Reduced motion:** there is no sweep and no Orb animation.

## Checks

- `pnpm typecheck`, `pnpm check` (templates: 20 complete), `pnpm build-storybook`: pass.
- Tech Partners detail checked at 1440 and 390, with no console errors.
- Voice, in Chromium with a fake microphone: the mic button shows, pressing it asks for the microphone, the field shows "Listening…", the wave runs, and there are no errors.
- **Not testable here:** real speech recognition. Please try "Voice (try it)" in Chrome.
