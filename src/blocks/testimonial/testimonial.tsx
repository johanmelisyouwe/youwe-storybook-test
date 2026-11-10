import { useEffect, useRef, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './testimonial.module.css'

/* Content blocks/Testimonial — Figma 26535:238. */

export type Quote = {
    Quote: string
    Name?: string
    Role?: string
    logo?: ReactNode
}
export type TestimonialProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** One or more quotes; with several, the block auto-advances every 7s */
    quotes: Quote[]
    /** Figma: Show image — full-bleed photo with the tint-1 overlay */
    image?: string | true
    /** Figma: Show logo */
    'Show logo'?: boolean
    autoAdvance?: boolean
}

export function Testimonial({
    quotes,
    image,
    'Show logo': showLogo = true,
    autoAdvance = true,
}: TestimonialProps) {
    const [i, setI] = useState(0)
    const [paused, setPaused] = useState(false)
    const ref = useRef<HTMLElement>(null)
    const q = quotes[i]

    const go = (n: number) => {
        const next = (n + quotes.length) % quotes.length
        const doc = document as Document & {
            startViewTransition?: (cb: () => void) => void
        }
        if (
            doc.startViewTransition &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            doc.startViewTransition(() => flushSync(() => setI(next)))
        else setI(next)
    }

    // Pause when off-screen
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(([e]) =>
            setPaused(!e.isIntersecting)
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    useEffect(() => {
        if (!autoAdvance || paused || quotes.length < 2) return
        const t = setTimeout(() => go(i + 1), 7000)
        return () => clearTimeout(t)
    })

    return (
        <section
            ref={ref}
            className={cx(block.root, styles.root)}
            aria-roledescription={quotes.length > 1 ? 'carousel' : undefined}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {image && (
                <CardMedia
                    src={typeof image === 'string' ? image : undefined}
                    className={styles.image}
                    placeholder={false}
                />
            )}
            <div className={cx(block.inner, styles.inner)}>
                <figure className={styles.content}>
                    <span className={styles.accent} aria-hidden="true" />
                    <div
                        style={{ viewTransitionName: 'yw-quote' }}
                        aria-live={quotes.length > 1 ? 'polite' : undefined}
                    >
                        <blockquote className="yw-heading-lg">
                            {q.Quote}
                        </blockquote>
                    </div>
                    {(q.Name || (showLogo && q.logo)) && (
                        <figcaption className={styles.attribution}>
                            {showLogo && q.logo && (
                                <span className={styles.logo}>{q.logo}</span>
                            )}
                            <span className={styles.person}>
                                {q.Name && (
                                    <span className="yw-body-md-bold">
                                        {q.Name}
                                    </span>
                                )}
                                {q.Role && (
                                    <span
                                        className={cx(
                                            styles.role,
                                            'yw-body-sm-reg'
                                        )}
                                    >
                                        {q.Role}
                                    </span>
                                )}
                            </span>
                        </figcaption>
                    )}
                    {quotes.length > 1 && (
                        <div className={styles.dots}>
                            {quotes.map((x, n) => (
                                <button
                                    key={n}
                                    type="button"
                                    className={styles.dot}
                                    aria-label={`Quote ${n + 1} of ${quotes.length}`}
                                    aria-current={n === i ? 'true' : undefined}
                                    onClick={() => go(n)}
                                />
                            ))}
                        </div>
                    )}
                </figure>
            </div>
        </section>
    )
}
