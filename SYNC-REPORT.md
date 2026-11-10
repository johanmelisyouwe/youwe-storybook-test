# Sync report — 10 November 2026 (polish: accessibility + Work detail statement)

Four items from the component and template review.

## 1. Reduced motion fully respected

The scroll-driven animations (section title word rise, card grid and logo grid reveals, feature cards, Text + media and sub-footer image clips, hero recede) follow the scroll position, not a duration, so the reduced-motion safety net (1ms durations) didn't stop them. They now only exist under `prefers-reduced-motion: no-preference`. With reduced motion every page loads fully visible with no scroll animations (checked: 0 scroll-linked animations, nothing left hidden). The JS motion (template reveals, count-ups, drift, pinned slider, testimonial transition) already stopped for reduced motion.

## 2. Tap targets of 24px or more

Footer links (about 25 per page) and the header's plain links (Careers) were under 24px tall, below the WCAG 2.2 target size. They get 4px padding above and below with an equal negative margin, so the target grows and the Figma spacing stays the same. No links under 24px are left on the templates.

## 3. Heading order on Home

The What we do slider had h3 slide titles with no h2 above them. Its kicker ("What we do") is now the section's h2 (looks the same), so the outline reads h1 → h2 → h3 with no jumps on any template.

## 4. Work detail statement

The centred statement ("Quooker transitioned from B2B to B2B2C…") was a narrow tower of about 14 lines with centred body text. The Centered Section header now has an 860px measure (6 lines) and the body is a left-aligned 632px reading column under it. Section header Centered is only used here. Figma's 524px measure suits short headings; listed as a deliberate deviation.

## Checks

- `npm run typecheck`: pass
- `npm run build-storybook`: pass
- `check-legacy`, `check-coverage`: clean
