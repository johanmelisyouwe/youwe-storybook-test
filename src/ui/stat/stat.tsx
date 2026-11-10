import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { CardArrow } from '../../shared/card-reveal'
import { cx } from '../../shared/cx'
import styles from './stat.module.css'
import ring from '../../shared/focus-ring/focus-ring.module.css'

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
    /** Count up when scrolled into view (Figma motion: 1.6s ease-out, once) */
    countUp?: boolean
    className?: string
}

/* Splits "+12.7%" into prefix "+", number 12.7 (1 decimal) and suffix "%" */
function parse(v: string) {
    const m = v.match(/^(\D*)([\d.,]+)(.*)$/)
    if (!m) return null
    const num = parseFloat(m[2].replace(',', '.'))
    const dec = (m[2].split(/[.,]/)[1] || '').length
    return { pre: m[1], num, dec, post: m[3] }
}

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
            node.nodeValue = `${p.pre}${n.toFixed(p.dec)}${p.post}`
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
    countUp = false,
    className,
}: StatProps) {
    const ref = useCountUp(Value, countUp)
    return (
        <div className={cx(styles.root, className)}>
            {Type === 'Client' && (
                <div className={styles.top}>
                    <span className={styles.logo}>{logo}</span>
                    {href && (
                        <a
                            href={href}
                            className={ring.root}
                            style={{
                                borderRadius: 'var(--shared-radius-circular)',
                            }}
                            aria-label={`Read the case: ${Label}`}
                        >
                            <CardArrow className={styles.arrow} />
                        </a>
                    )}
                </div>
            )}
            <span
                ref={ref}
                className={[
                    styles.value,
                    Size === 'L' ? 'yw-heading-2xl' : 'yw-heading-xl',
                ].join(' ')}
                aria-label={Value}
            >
                {Value}
            </span>
            <span className={cx(styles.label, 'yw-body-md-reg')}>{Label}</span>
        </div>
    )
}

export function StatRow({ children }: { children: ReactNode }) {
    return <div className={styles['stat-row']}>{children}</div>
}
