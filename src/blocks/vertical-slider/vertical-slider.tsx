import { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './vertical-slider.module.css'

/*
  Vertical slider — Figma 26715:410; _Vertical slider/Index item 26713:47; _Vertical slider/Slide 26713:174.
  Behaviour (code variant, next to the Figma variants):
  - Click (default): index items are buttons; hover, focus and click switch slides. Mobile is stacked.
  - Scroll: the section stays in the viewport while you scroll through it; the progress line at the bottom
    fills with the scroll and the slides change one by one (desktop and mobile), as the v2 site's "What we
    do". A click on an index item scrolls to that chapter. With reduced motion it falls back to Click.
*/

type Btn = { label: string; href: string }

export type SlideData =
    | {
          Type: 'Service'
          eyebrow: string
          Title: string
          body: string
          pills?: string[]
          button?: Btn
      }
    | {
          Type: 'Quote'
          quote: string
          name: string
          role?: string
          button?: Btn
      }
    | {
          Type: 'Stat'
          eyebrow: string
          value: string
          statement: string
          button?: Btn
      }
    | {
          Type: 'Case'
          eyebrow: string
          Title: string
          body: string
          image?: string
          button?: Btn
      }
    | {
          Type: 'Content'
          eyebrow: string
          Title: string
          body: string
          list?: string[]
      }

/* _Vertical slider/Slide */
export function Slide(props: SlideData) {
    switch (props.Type) {
        case 'Service':
            return (
                <div className={styles.slide}>
                    <div className={styles['slide-text']}>
                        <h3 className={styles['slide-heading']}>
                            <span className="yw-body-sm-bold">
                                {props.eyebrow}
                            </span>
                            <span className={cx('yw-heading-3xl', styles.mask)}>
                                <span>{props.Title}</span>
                            </span>
                        </h3>
                        <p className="yw-body-lg-reg">{props.body}</p>
                    </div>
                    {props.pills && (
                        <div className={styles['slide-pills']}>
                            {props.pills.map((p) => (
                                <span
                                    key={p}
                                    className={cx(reveal.tag, 'yw-body-xs-reg')}
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    )}
                    {props.button && (
                        <Button
                            Variant="Solid"
                            Size="M"
                            label={props.button.label}
                            href={props.button.href}
                        />
                    )}
                </div>
            )
        case 'Quote':
            return (
                <figure className={styles.slide} style={{ margin: 0 }}>
                    <blockquote className="yw-heading-2xl">
                        {props.quote}
                    </blockquote>
                    <figcaption className={styles['slide-attribution']}>
                        <span className={styles['slide-person']}>
                            <span className="yw-body-lg-med">{props.name}</span>
                            {props.role && (
                                <span
                                    className={cx(
                                        styles['slide-secondary'],
                                        'yw-body-md-reg'
                                    )}
                                >
                                    {props.role}
                                </span>
                            )}
                        </span>
                        {props.button && (
                            <Button
                                Variant="Outline"
                                Size="M"
                                label={props.button.label}
                                href={props.button.href}
                            />
                        )}
                    </figcaption>
                </figure>
            )
        case 'Stat':
            return (
                <div className={styles.slide}>
                    <h3 className={styles['slide-heading']}>
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <span
                            className={cx(
                                styles['slide-value'],
                                'yw-heading-3xl',
                                styles.mask
                            )}
                        >
                            <span>{props.value}</span>
                        </span>
                    </h3>
                    <p className="yw-heading-md">{props.statement}</p>
                    {props.button && (
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={props.button.label}
                            href={props.button.href}
                        />
                    )}
                </div>
            )
        case 'Case':
            return (
                <div data-case className={cx(styles.slide)}>
                    <CardMedia
                        src={props.image}
                        className={styles['slide-image']}
                    />
                    <div className={styles['slide-text']}>
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <h3
                            className={cx('yw-heading-xl', styles.mask)}
                            style={{ margin: 0 }}
                        >
                            <span>{props.Title}</span>
                        </h3>
                        <p
                            className={cx(
                                styles['slide-secondary'],
                                'yw-body-lg-reg'
                            )}
                        >
                            {props.body}
                        </p>
                        {props.button && (
                            <Button
                                Variant="Solid"
                                Size="M"
                                label={props.button.label}
                                href={props.button.href}
                            />
                        )}
                    </div>
                </div>
            )
        default:
            return (
                <div className={styles.slide}>
                    <h3 className={styles['slide-heading']}>
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <span className={cx('yw-heading-xl', styles.mask)}>
                            <span>{props.Title}</span>
                        </span>
                    </h3>
                    <p
                        className={cx(
                            styles['slide-secondary'],
                            'yw-body-lg-reg'
                        )}
                    >
                        {props.body}
                    </p>
                    {props.list && (
                        <ul className={styles['slide-list']}>
                            {props.list.map((l) => (
                                <li key={l} className="yw-body-md-med">
                                    {l}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )
    }
}

/* _Vertical slider/Index item */
export function IndexItem({
    label,
    active,
    onSelect,
    hoverSelect = true,
    className,
}: {
    label: string
    active?: boolean
    onSelect?: () => void
    hoverSelect?: boolean
    className?: string
}) {
    return (
        <button
            type="button"
            className={cx(styles.vindex, ring.root, className)}
            aria-current={active ? 'true' : undefined}
            onClick={onSelect}
            onMouseEnter={hoverSelect ? onSelect : undefined}
            onFocus={hoverSelect ? onSelect : undefined}
        >
            <span className={styles['vindex-bar']} aria-hidden="true" />
            <span className="yw-body-sm-bold">{label}</span>
        </button>
    )
}

export type VerticalSliderProps = {
    /** Figma: Index */
    Index?: 'Right' | 'Left'
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    Kicker: string
    /** Figma: Tagline (Show tagline) */
    Tagline?: string
    /** Chapters; `image` is the chapter's full-bleed background (opens with a circular wipe) */
    items: { label: string; slide: SlideData; image?: string }[]
    /** Figma: Show background image */
    backgroundImage?: string | true
    /** Figma: Show progress (default on for Behaviour Scroll) */
    'Show progress'?: boolean
    /** Figma: Show steps (mobile) */
    'Show steps'?: boolean
    /** Click: hover / click switches slides. Scroll: the section pins, the progress line fills with scroll and slides change one by one (desktop and mobile). */
    Behaviour?: 'Click' | 'Scroll'
    /** @deprecated Use Behaviour="Scroll" */
    pin?: boolean
    /** Initially active item */
    initial?: number
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export function VerticalSlider({
    Index = 'Right',
    Device = 'Desktop',
    Kicker,
    Tagline,
    items,
    backgroundImage,
    'Show progress': progressProp,
    'Show steps': steps = true,
    Behaviour,
    pin: pinProp = false,
    initial = 0,
}: VerticalSliderProps) {
    const [active, setActive] = useState(initial)
    const ref = useRef<HTMLElement>(null)
    const N = items.length
    // Scroll behaviour, unless the visitor prefers reduced motion (then the slides switch on click instead)
    const [reduce, setReduce] = useState(false)
    useEffect(() => {
        setReduce(
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
    }, [])
    const pin = (Behaviour === 'Scroll' || pinProp) && !reduce
    // The progress line is part of the Scroll behaviour; for Click it's the Figma 'Show progress' option
    const progress = progressProp ?? Behaviour === 'Scroll'

    // Pinned: progress p (0–1) through the section drives the active chapter, media wipes and index bars (as on the v2 site)
    useEffect(() => {
        if (!pin) return
        let raf = 0
        const update = () => {
            raf = 0
            const el = ref.current
            if (!el) return
            const r = el.getBoundingClientRect()
            const pr = clamp(
                -r.top / Math.max(1, el.offsetHeight - window.innerHeight)
            )
            // Written straight to the DOM: a React render per scroll frame is too much
            el.style.setProperty('--p', pr.toFixed(4))
            setActive(Math.min(N - 1, Math.floor(pr * N * 0.9999)))
        }
        const on = () => {
            if (!raf) raf = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', on, { passive: true })
        return () => {
            window.removeEventListener('scroll', on)
            cancelAnimationFrame(raf)
        }
    }, [pin, N])

    const select = (i: number) => {
        if (!pin) {
            setActive(i)
            return
        }
        const el = ref.current
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
            top: top + ((i + 0.5) / N) * (el.offsetHeight - window.innerHeight),
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 'auto'
                : 'smooth',
        })
    }

    const header = (
        <div className={styles.header}>
            {/* The kicker is the section heading (h2), so the slide titles (h3) sit under it in the outline */}
            <h2 className={styles.kicker}>
                <span className={styles.line} aria-hidden="true" />
                <span className="yw-body-sm-bold">{Kicker}</span>
            </h2>
            {Tagline && <span className="yw-body-sm-bold">{Tagline}</span>}
        </div>
    )
    const bgOn = !!backgroundImage || items.some((it) => it.image)
    const fallback =
        typeof backgroundImage === 'string' ? backgroundImage : undefined

    if (Device === 'Mobile' && pin) {
        // Mobile, Scroll: one slide at a time in a pinned full-screen frame; step bars, "01 / 03 · Label"
        // and the progress line follow the scroll
        return (
            <section
                ref={ref}
                data-mobile
                data-pinned
                className={cx(styles.root)}
                style={{ ['--_steps' as string]: N }}
                aria-label={Kicker}
            >
                <div className={styles.frame}>
                    {/* Each chapter's image opens with the same circular wipe as on desktop */}
                    {bgOn &&
                        items.map((it, i) => (
                            <CardMedia
                                key={i}
                                src={it.image ?? fallback}
                                className={styles.bg}
                                placeholder={false}
                                style={{
                                    ['--_i' as string]: i,
                                    ['--r' as string]: i === 0 ? '150%' : undefined,
                                }}
                            />
                        ))}
                    {header}
                    <div className={styles.current}>
                        {steps && (
                            <span className={styles.steps} aria-hidden="true">
                                {items.map((_, j) => (
                                    <span
                                        key={j}
                                        data-done={j <= active || undefined}
                                    />
                                ))}
                            </span>
                        )}
                        {/* Counter only: the slide's own eyebrow already names the chapter */}
                        <span className="yw-body-sm-bold">{`${String(active + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`}</span>
                    </div>
                    <div className={styles.chapters} aria-live="polite">
                        {items.map((it, i) => (
                            <div
                                key={it.label}
                                data-active={i === active || undefined}
                                data-past={i < active || undefined}
                                className={cx(styles.chapter)}
                                aria-hidden={i !== active}
                                inert={i !== active ? true : undefined}
                            >
                                <Slide {...it.slide} />
                            </div>
                        ))}
                    </div>
                    {progress && (
                        <div className={styles.progress} aria-hidden="true">
                            <span />
                        </div>
                    )}
                </div>
            </section>
        )
    }

    if (Device === 'Mobile') {
        return (
            <section
                data-mobile
                data-left={Index === 'Left' || undefined}
                className={cx(styles.root)}
                aria-label={Kicker}
            >
                <div className={styles.frame}>
                    {bgOn && (
                        <CardMedia
                            src={items[0].image ?? fallback}
                            className={styles.bg}
                            placeholder={false}
                        />
                    )}
                    {header}
                    <div className={styles.stack}>
                        {items.map((it, i) => (
                            <div
                                key={it.label}
                                data-active
                                className={styles.step}
                            >
                                <div className={styles.current}>
                                    {steps && (
                                        <span
                                            className={styles.steps}
                                            aria-hidden="true"
                                        >
                                            {items.map((_, j) => (
                                                <span
                                                    key={j}
                                                    data-done={
                                                        j <= i || undefined
                                                    }
                                                />
                                            ))}
                                        </span>
                                    )}
                                    <span className="yw-body-sm-bold">{`${String(i + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')} · ${it.label}`}</span>
                                </div>
                                <Slide {...it.slide} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            ref={ref}
            data-pinned={pin || undefined}
            data-left={Index === 'Left' || undefined}
            className={cx(styles.root)}
            style={{
                ['--_steps' as string]: N,
                // Without pinning, p follows the selected chapter so the media and bars show the same states
                ['--p' as string]: pin ? undefined : (active + 0.5) / N,
            }}
            aria-label={Kicker}
        >
            <div className={styles.frame}>
                {bgOn &&
                    items.map((it, i) => (
                        <CardMedia
                            key={i}
                            src={it.image ?? fallback}
                            className={styles.bg}
                            placeholder={false}
                            style={{
                                ['--_i' as string]: i,
                                ['--r' as string]: i === 0 ? '150%' : undefined,
                            }}
                        />
                    ))}
                {header}
                <div className={styles.body}>
                    <div className={styles.chapters} aria-live="polite">
                        {items.map((it, i) => (
                            <div
                                key={it.label}
                                data-active={i === active || undefined}
                                data-past={i < active || undefined}
                                className={cx(styles.chapter)}
                                aria-hidden={i !== active}
                                inert={i !== active ? true : undefined}
                            >
                                <Slide {...it.slide} />
                            </div>
                        ))}
                    </div>
                    <ul className={styles.index}>
                        {items.map((it, i) => (
                            <li
                                key={it.label}
                                style={{ ['--_i' as string]: i }}
                            >
                                <IndexItem
                                    label={it.label}
                                    active={i === active}
                                    onSelect={() => select(i)}
                                    hoverSelect={!pin}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {progress && (
                    <div className={styles.progress} aria-hidden="true">
                        <span />
                    </div>
                )}
            </div>
        </section>
    )
}
