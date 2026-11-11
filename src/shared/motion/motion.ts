import { type RefObject, useEffect } from 'react'
import block from '../block/block.module.css'

/*
  Page motion (batch 6, "expressive like the v2 site"). One IntersectionObserver for the whole page, so it
  works in every browser (the scroll-timeline reveals only run in some) and staggers are real time delays.
  - rise:  block reveals and [data-rise] fade in and rise distance/lg (duration/reveal, ease/emphasized)
  - stagger: children of [data-stagger] (card grids, logo grids, stat rows, insight grids) rise one after another,
             counted per group that scrolls in together, so every row of a grid staggers
  - clip:  CardMedia frames with data-clip open from an inset clip while the image settles from a slight zoom
  Everything plays once. With prefers-reduced-motion nothing is hidden or moved.
  The page root gets data-motion="on" only while this runs, so without JS everything is simply visible.
  Components opt in through data attributes, so this file doesn't reach into other modules' class names
  (the block reveal class is the exception, it's the shared hook for section intros). Styles: styles/base.css.
*/

const RISE = `.${block.reveal}, [data-rise]`

export function useMotion(root: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const el = root.current
        if (!el || typeof IntersectionObserver === 'undefined') return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return

        const targets = new Set<HTMLElement>()
        const mark = (node: Element, kind: string) => {
            if (!(node instanceof HTMLElement) || node.dataset.motionReveal)
                return
            node.dataset.motionReveal = kind
            node.style.setProperty('--_reveal-delay', '0ms')
            targets.add(node)
        }
        const stagger =
            parseFloat(
                getComputedStyle(el).getPropertyValue('--motion-stagger')
            ) || 80

        for (const n of el.querySelectorAll(RISE)) mark(n, 'rise')
        // Stagger children get their delay when they scroll in, counted within the group that enters
        // together. So every row of a long grid staggers, not only the first rows on screen.
        const staggered = new Set<Element>()
        for (const list of el.querySelectorAll('[data-stagger]')) {
            for (const child of list.children) {
                mark(child, 'rise')
                staggered.add(child)
            }
        }
        for (const m of el.querySelectorAll('[data-clip]')) mark(m, 'clip')

        // After the reveal the element is handed back to its component (hover zooms etc. work again).
        // data-motion-done keeps the scroll-timeline reveals off so nothing plays twice.
        const timers: number[] = []
        const release = (t: HTMLElement) => {
            delete t.dataset.motionReveal
            delete t.dataset.motionIn
            t.dataset.motionDone = ''
            t.style.removeProperty('--_reveal-delay')
        }
        const io = new IntersectionObserver(
            (entries) => {
                const batch = new Map<Element | null, number>()
                for (const e of entries) {
                    if (!e.isIntersecting || !(e.target instanceof HTMLElement))
                        continue
                    const t = e.target
                    if (staggered.has(t)) {
                        const k = batch.get(t.parentElement) ?? 0
                        batch.set(t.parentElement, k + 1)
                        t.style.setProperty(
                            '--_reveal-delay',
                            `${Math.min(k, 7) * stagger}ms`
                        )
                    }
                    t.dataset.motionIn = ''
                    io.unobserve(t)
                    const delay =
                        parseFloat(
                            t.style.getPropertyValue('--_reveal-delay')
                        ) || 0
                    timers.push(
                        window.setTimeout(() => release(t), 2200 + delay)
                    )
                }
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
        )

        // Anything already on screen at load plays straight away; the rest as it scrolls in.
        for (const t of targets) io.observe(t)
        el.dataset.motion = 'on'
        return () => {
            io.disconnect()
            for (const t of timers) clearTimeout(t)
            delete el.dataset.motion
            for (const t of targets) {
                release(t)
                delete t.dataset.motionDone
            }
        }
    }, [root])
}
