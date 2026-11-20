# Sync report — 20 November 2026 (Tech Partners detail v2, Pimcore)

New template **Templates / Tech Partners detail v2** (Desktop and Mobile). It is separate from #57, which has Tech Partners detail v1 and the Ask Youwe voice input.

The copy comes from Figma "Partner detail Pimcore (R6)" (file "Youwe website 2026 – Homepage A (Flow)", page "Tech partner detail - dark", 127:2). It is built only from existing blocks:

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

**Other pages in the same Figma file:** Symson, Hypernode and ACI Weave can reuse this structure; they are not built yet.

## Checks

- `pnpm typecheck`, `pnpm check`, `pnpm build-storybook`: pass.
- Checked at 1440 and 390, with no console errors.
