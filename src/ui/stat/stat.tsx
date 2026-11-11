import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { CardArrow, CardReveal } from '../../shared/card-reveal'
import { cx } from '../../shared/cx'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './stat.module.css'

/* Stat — Figma 26795:73 (page "Stats"). */

export type StatProps = {
    /** Figma: Type */
    Type?: 'Client' | 'Plain'
    /** Figma: Size (L desktop, M mobile) */
    Size?: 'L' | 'M'
    /** e.g. "+12.7%", "900+", "25" */
    Value: string
    Label: string
    /** Type=Client: Figma Logo */
    logo?: ReactNode
    /** Type=Client: link of the round arrow (Show button) */
    href?: string
    /** Hover overlay CTA (linked Client stat) */
    cta?: string
    /** Hover overlay context line, e.g. the client */
    context?: string
    /** Count up when scrolled into view (Figma motion: 1.6s ease-out, once) */
    countUp?: boolean
    className?: string
}

/* Splits "+12.7%" into prefix "+", number 12.7 (1 decimal) and suffix "%". A comma followed by groups of
   three digits ("110,000+", "3,360") is a thousands separator and is kept in the count. */
function parse(v: string) {
    const m = v.match(/^(\D*)([\d.,]+)(.*)$/)
    if (!m) return null
    const digits = m[2]
    const grouped = /^\d{1,3}(,\d{3})+(\.\d+)?$/.test(digits)
    const plain = grouped ? digits.replace(/,/g, '') : digits.replace(',', '.')
    const num = parseFloat(plain)
    const dec = (plain.split('.')[1] || '').length
    return { pre: m[1], num, dec, grouped, post: m[3] }
}

const group = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function useCountUp(value: string, on: boolean) {
    const ref = useRef<HTMLSpanElement>(null)
    const latest = useRef(value)
    latest.current = value
    // Layout effect: the final value never flashes before the count starts. The count writes into
    // React's own text node instead of re-rendering every frame, and puts the real value back on cleanup.
    useLayoutEffect(() => {
        const p = parse(value)
        const el = ref.current
        const node = el?.firstChild
        if (
            !on ||
            !p ||
            !el ||
            !node ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return
        const show = (n: number) => {
            const [int, frac] = n.toFixed(p.dec).split('.')
            const text =
                (p.grouped ? group(int) : int) + (frac ? `.${frac}` : '')
            node.nodeValue = `${p.pre}${text}${p.post}`
        }
        show(0)
        let raf = 0
        const io = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return
            io.disconnect()
            const t0 = performance.now()
            const tick = (t: number) => {
                const k = Math.min(1, (t - t0) / 1600)
                show(p.num * (1 - (1 - k) ** 3)) // ease-out
                if (k < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
        })
        io.observe(el)
        return () => {
            io.disconnect()
            cancelAnimationFrame(raf)
            node.nodeValue = latest.current
        }
    }, [value, on])
    return ref
}

export function Stat({
    Type = 'Plain',
    Size = 'L',
    Value,
    Label,
    logo,
    href,
    cta = 'Read the case',
    context,
    countUp = false,
    className,
}: StatProps) {
    const ref = useCountUp(Value, countUp)
    const linked = Type === 'Client' && !!href
    const body = (
        <>
            {Type === 'Client' && (
                <div className={styles.top}>
                    <span className={styles.logo}>{logo}</span>
                    {href && <CardArrow className={styles.arrow} />}
                </div>
            )}
            <span
                ref={ref}
                className={cx(
                    styles.value,
                    Size === 'L' ? 'yw-heading-2xl' : 'yw-heading-xl'
                )}
                aria-label={Value}
            >
                {Value}
            </span>
            <span className={cx(styles.label, 'yw-body-md-reg')}>{Label}</span>
        </>
    )
    // Linked Client stat: the whole card is the link with the shared red overlay hover, like the other cards.
    if (linked) {
        return (
            <a
                href={href}
                data-link
                className={cx(reveal.root, styles.root, className)}
            >
                {body}
                <span className="yw-visually-hidden">, {cta}</span>
                <CardReveal cta={cta} context={context} />
            </a>
        )
    }
    return <div className={cx(styles.root, className)}>{body}</div>
}

/** A number that counts up once when it scrolls into view (same motion as Stat), e.g. hero bar stats. */
export function CountUp({
    value,
    className,
}: {
    value: string
    className?: string
}) {
    const ref = useCountUp(value, true)
    return (
        <span ref={ref} className={className} aria-label={value}>
            {value}
        </span>
    )
}

export function StatRow({ children }: { children: ReactNode }) {
    return (
        <div data-stagger className={styles['stat-row']}>
            {children}
        </div>
    )
}
