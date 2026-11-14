# Sync report — 14 November 2026 (Home: feedback from the v2 site comparison)

Rob compared our Storybook with the v2 site (youwe-website-v2-test.onrender.com) for the Home page. Storybook is the source of truth, so the missing parts are now components or options here. They use our tokens. The v2 site was the reference for behaviour and layout, checked against the live page and its scripts.

| Feedback | Change |
|---|---|
| Hero: the moving WebGL background is missing | **Hero `Background="WebGL"`** (new `hero-webgl.tsx`), ported from the v2 fluid stage. Glossy ribbons light up in brand red, purple, blue and red-100 on the surface colour, and stay dark on the left behind the text. They lean towards the pointer and drift as you scroll. The still image stays underneath. **Desktop only:** phones, tablets and screens under 1024 keep the image. With reduced motion it shows one still frame. If a frame is slow, it draws fewer pixels. Home uses it. |
| Chapters: "Keep it running" comes before "Connect it" | The Home Vertical slider order is now Build it → Connect it → Keep it running. |
| "In their words": no block with tabs per client, and a 7s rotator instead | **Testimonial `Layout="Tabs"`**. The kicker sits above, with a tab per client on the left (real tabs, arrow keys) and the quote, name, role and "Read the case" on the right. It moves to the next client every 7s while in view, pauses on hover or focus, and animates the switch with a View Transition. With reduced motion there is no timer. On mobile the tabs scroll sideways above the quote. Home uses it with the four client quotes from the v2 site (`testimonial.copy.ts`). |
| Case reel: the version that stays fixed while you scroll is not built, and the counter is only on Short | **Case carousel `Layout="Pinned"`**. The section stays in view while scrolling moves a row of wide reel cards sideways. Each card is min(760, 70vw) with an image twice as wide as tall, the stat on the image, the client, the title and a round arrow that turns red on hover. Each image shifts slightly as the card passes. The 01 / 09 counter sits above the button. A 2px line at the bottom fills with progress. Tabbing to a card scrolls the page to it. On mobile and with reduced motion the cards are swiped instead. Home uses it. |
| ACI Weave: stacked videos and one button, instead of the v2 layout with two buttons | **ACI Weave** now matches v2. Each item is a panel with a caption bar (caption on the left, tag on the right, e.g. "Demo"). An item without a video file shows a still screenshot. Optional `background` image (kept quiet under 85% surface). Optional `button2` (Solid): "Kingspan case". |
| Technologies: the image fill is missing | **Technology logos `rows`** accept a GiantRow (`style: 'image'`, `image`). On Home, row 1 is filled with an image and row 2 is outlined. |

## Notes

- Copy stays as it was. The copy differences with v2 were left out on purpose, except the client quotes, which were missing.
- The Symson role was cut off when it was read from the v2 data. "CEO, Symson" is assumed.
- The Home reel uses the case photos we have. The ACI Weave panels 2 and 3 use placeholder stills until the product screenshots are added.
- No Figma axes changed. Pinned, Tabs and Background are code options, so `figma-sync.json` is unchanged.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass
- Checked in a browser at 1440 and on an iPhone 13:
  - The WebGL hero renders.
  - The reel stays in place and moves sideways; the counter follows and the line fills.
  - The tabs work, including on mobile.
  - The ACI Weave panels and both buttons show.
  - No console errors.
