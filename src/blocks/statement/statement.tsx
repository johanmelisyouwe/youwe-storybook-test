import { useEffect, useRef, type CSSProperties } from 'react'
import '../../shared/block/block.css'
import './statement.css'

/* Content blocks/Statement — Figma 26543:21679. */

export type GiantRow = {
    text: string /** image-filled text, outlined text, or solid */
    style?: 'image' | 'outline' | 'solid'
    image?: string
}

export type StatementProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    text: string
    /** Giant decorative rows that drift ±9% in opposite directions on scroll (aria-hidden) */
    rows?: GiantRow[]
}

/** Scroll-linked drift, as on the v2 site: shift = (p − 0.5) × 18% per row, alternating direction. */
function useDrift(enabled: boolean) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (
            !enabled ||
            !el ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return
        const rows = Array.from(el.children) as HTMLElement[]
        let raf = 0
        const update = () => {
            raf = 0
            const r = el.getBoundingClientRect()
            const vh = window.innerHeight
            const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)))
            rows.forEach((row, i) =>
                row.style.setProperty(
                    '--shift',
                    ((p - 0.5) * 18 * (i % 2 ? 1 : -1)).toFixed(2)
                )
            )
        }
        const on = () => {
            if (!raf) raf = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', on, { passive: true })
        window.addEventListener('resize', on)
        return () => {
            window.removeEventListener('scroll', on)
            window.removeEventListener('resize', on)
            cancelAnimationFrame(raf)
        }
    }, [enabled])
    return ref
}

/** Giant decorative rows that drift in opposite directions on scroll (also used by Technology logos). */
export function GiantRows({
    rows,
    className,
}: {
    rows: GiantRow[]
    className?: string
}) {
    const giant = useDrift(rows.length > 0)
    return (
        <div
            ref={giant}
            className={['yw-statement__giant', className]
                .filter(Boolean)
                .join(' ')}
            aria-hidden="true"
        >
            {rows.map((r, i) => {
                const style = r.style ?? (i % 2 ? 'outline' : 'image')
                return (
                    <span
                        key={i}
                        className={[
                            'yw-statement__row',
                            style !== 'solid' && `yw-statement__row--${style}`,
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        style={
                            r.image
                                ? ({
                                      ['--img' as string]: `url('${r.image}')`,
                                  } as CSSProperties)
                                : undefined
                        }
                    >
                        {r.text}
                    </span>
                )
            })}
        </div>
    )
}

export function Statement({ text, rows }: StatementProps) {
    return (
        <section className="yw-block yw-statement">
            {rows && rows.length > 0 && <GiantRows rows={rows} />}
            <div className="yw-block__inner">
                <p className="yw-statement__text yw-heading-xl">{text}</p>
            </div>
        </section>
    )
}
