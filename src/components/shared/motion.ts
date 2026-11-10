import { useEffect, type RefObject } from 'react';
import './motion.css';

/*
  Page motion (batch 6, "expressive like the v2 site"). One IntersectionObserver for the whole page, so it
  works in every browser (the scroll-timeline reveals only run in some) and staggers are real time delays.
  - rise:  text blocks and section intros fade in and rise distance/lg (duration/reveal, ease/emphasized)
  - stagger: items in card grids, logo grids, stat rows and insight grids rise one after another (motion/stagger)
  - clip:  card and content images open from an inset clip while the image settles from a slight zoom
  Everything plays once. With prefers-reduced-motion nothing is hidden or moved.
  The page root gets data-motion="on" only while this runs, so without JS everything is simply visible.
*/

const RISE = ['.yw-block-reveal', '.yw-insights__heading', '.yw-insights__count', '.yw-weave__content', '.yw-text-media__text', '.yw-two-col', '.yw-feature-list__intro'];
const STAGGER = ['.yw-card-grid__grid', '.yw-tech-logos__grid', '.yw-stat-row', '.yw-insights__grid', '.yw-weave__videos', '.yw-filter-bar__systems'];
const CLIP_EXCLUDE = '.yw-hero__media, .yw-hero__image, .yw-testimonial__image, .yw-vslider__bg, .yw-contact__bg, .yw-ask-snippet__image';

export function useMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = new Set<HTMLElement>();
    const mark = (node: Element, kind: string, delay = 0) => {
      const n = node as HTMLElement;
      if (n.dataset.reveal) return;
      n.dataset.reveal = kind;
      n.style.setProperty('--_reveal-delay', `${delay}ms`);
      targets.add(n);
    };
    const stagger = parseFloat(getComputedStyle(el).getPropertyValue('--motion-stagger')) || 80;

    el.querySelectorAll(RISE.join(',')).forEach((n) => mark(n, 'rise'));
    el.querySelectorAll(STAGGER.join(',')).forEach((list) => {
      Array.from(list.children).forEach((child, i) => mark(child, 'rise', Math.min(i, 7) * stagger));
    });
    el.querySelectorAll('.yw-card-media').forEach((m) => { if (!m.matches(CLIP_EXCLUDE) && !m.closest(CLIP_EXCLUDE)) mark(m, 'clip'); });

    // After the reveal the element is handed back to its component (hover zooms etc. work again).
    const timers: number[] = [];
    const release = (t: HTMLElement) => { delete t.dataset.reveal; t.classList.remove('is-in'); t.style.removeProperty('--_reveal-delay'); };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const t = e.target as HTMLElement;
        t.classList.add('is-in');
        io.unobserve(t);
        timers.push(window.setTimeout(() => release(t), 2200 + (parseFloat(t.style.getPropertyValue('--_reveal-delay')) || 0)));
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    // Anything already on screen at load plays straight away; the rest as it scrolls in.
    targets.forEach((t) => io.observe(t));
    el.dataset.motion = 'on';
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      delete el.dataset.motion;
      targets.forEach(release);
    };
  }, [root]);
}
