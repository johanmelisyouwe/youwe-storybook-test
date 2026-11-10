import { useEffect, useRef, useState, type ReactNode } from 'react'
import { CardArrow } from '../../shared/CardReveal'
import '../../shared/focus-ring.css'
import './Stat.css'

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
    const [text, setText] = useState(value)
    useEffect(() => {
        const p = parse(value)
        const el = ref.current
        if (
            !on ||
            !p ||
            !el ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setText(value)
            return
        }
        setText(`${p.pre}${(0).toFixed(p.dec)}${p.post}`)
        let raf = 0
        const io = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return
            io.disconnect()
            const t0 = performance.now()
            const tick = (t: number) => {
                const k = Math.min(1, (t - t0) / 1600)
                const eased = 1 - Math.pow(1 - k, 3) // ease-out
                setText(`${p.pre}${(p.num * eased).toFixed(p.dec)}${p.post}`)
                if (k < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
        })
        io.observe(el)
        return () => {
            io.disconnect()
            cancelAnimationFrame(raf)
        }
    }, [value, on])
    return [ref, text] as const
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
    const [ref, text] = useCountUp(Value, countUp)
    return (
        <div className={['yw-stat', className].filter(Boolean).join(' ')}>
            {Type === 'Client' && (
                <div className="yw-stat__top">
                    <span className="yw-stat__logo">{logo}</span>
                    {href && (
                        <a
                            href={href}
                            className="yw-focus-ring"
                            style={{
                                borderRadius: 'var(--shared-radius-circular)',
                            }}
                            aria-label={`Read the case: ${Label}`}
                        >
                            <CardArrow className="yw-stat__arrow" />
                        </a>
                    )}
                </div>
            )}
            <span
                ref={ref}
                className={[
                    'yw-stat__value',
                    Size === 'L' ? 'yw-heading-2xl' : 'yw-heading-xl',
                ].join(' ')}
                aria-label={Value}
            >
                {text}
            </span>
            <span className="yw-stat__label yw-body-md-reg">{Label}</span>
        </div>
    )
}

export function StatRow({ children }: { children: ReactNode }) {
    return <div className="yw-stat-row">{children}</div>
}
