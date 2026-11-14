import {
    type KeyboardEvent,
    type ReactNode,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react'
import { Button } from '../../ui/button'
import { flushSync } from 'react-dom'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './testimonial.module.css'

/* Content blocks/Testimonial — Figma 26535:238.
   Layout "Tabs" (code layout, Home "In their words"): kicker, a tab per client on the left (arrow keys move
   between them), the quote with name, role and "Read the case" on the right. It also moves to the next client
   every 7s while in view, pausing on hover and focus; the switch is a View Transition. Reduced motion: no timer. */

export type Quote = {
    Quote: string
    Name?: string
    Role?: string
    logo?: ReactNode
    /** Tabs: the tab label (the client) */
    client?: string
    /** Tabs: the button under the quote, e.g. Read the case */
    cta?: { label: string; href: string }
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
    /** "Default": the Figma block (dots). "Tabs": a tab per client, for Home "In their words" */
    Layout?: 'Default' | 'Tabs'
    /** Tabs: kicker above the block */
    kicker?: string
}

export function Testimonial({
    quotes,
    image,
    'Show logo': showLogo = true,
    autoAdvance = true,
    Layout = 'Default',
    Device = 'Desktop',
    kicker,
}: TestimonialProps) {
    const uid = useId()
    const tabsRef = useRef<HTMLDivElement>(null)
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

    // biome-ignore lint/correctness/useExhaustiveDependencies: go is recreated every render; it only reads quotes, covered by quotes.length
    useEffect(() => {
        if (
            !autoAdvance ||
            paused ||
            quotes.length < 2 ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return
        const t = setTimeout(() => go(i + 1), 7000)
        return () => clearTimeout(t)
    }, [autoAdvance, paused, i, quotes.length])

    // Announce quote changes only when the user drives them, not on every auto-advance
    const live = autoAdvance && !paused ? 'off' : 'polite'

    if (Layout === 'Tabs') {
        const key = (e: KeyboardEvent, n: number) => {
            const d =
                e.key === 'ArrowDown' || e.key === 'ArrowRight'
                    ? 1
                    : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
                      ? -1
                      : 0
            if (!d) return
            e.preventDefault()
            const next = (n + d + quotes.length) % quotes.length
            go(next)
            tabsRef.current
                ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                [next]?.focus()
        }
        return (
            <section
                ref={ref}
                data-layout="tabs"
                data-mobile={Device === 'Mobile' || undefined}
                className={cx(block.root, styles.root)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
            >
                <div className={cx(block.inner, styles.inner)}>
                    {kicker && (
                        <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                            {kicker}
                        </span>
                    )}
                    <div className={styles.tabsgrid}>
                        <div
                            ref={tabsRef}
                            role="tablist"
                            aria-orientation="vertical"
                            aria-label={kicker}
                            className={styles.tabs}
                        >
                            {quotes.map((x, n) => (
                                <button
                                    key={x.client ?? n}
                                    id={`${uid}-tab-${n}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={n === i}
                                    aria-controls={`${uid}-panel`}
                                    tabIndex={n === i ? 0 : -1}
                                    className={cx(styles.tab, 'yw-body-md-med')}
                                    onClick={() => go(n)}
                                    onKeyDown={(e) => key(e, n)}
                                >
                                    {x.client ?? x.Name}
                                </button>
                            ))}
                        </div>
                        <figure
                            id={`${uid}-panel`}
                            role="tabpanel"
                            aria-labelledby={`${uid}-tab-${i}`}
                            className={styles.tabpanel}
                        >
                            <div
                                style={{ viewTransitionName: 'yw-quote' }}
                                aria-live={live}
                            >
                                <blockquote className="yw-heading-xl">
                                    {q.Quote}
                                </blockquote>
                            </div>
                            <div className={styles.tabfoot}>
                                <figcaption className={styles.person}>
                                    {q.Name && (
                                        <span className="yw-body-sm-bold">
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
                                </figcaption>
                                {q.cta && (
                                    <Button
                                        Variant="Outline"
                                        Size="M"
                                        label={q.cta.label}
                                        href={q.cta.href}
                                    />
                                )}
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        )
    }

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
                        aria-live={quotes.length > 1 ? live : undefined}
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
