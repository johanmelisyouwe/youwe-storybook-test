import { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './vertical-slider.module.css'

/*
  Vertical slider — Figma 26715:410; _Vertical slider/Index item 26713:47; _Vertical slider/Slide 26713:174.
  Interaction (Figma): index items are buttons (hover and focus also switch slides; when pinned, a click
  scrolls to that chapter). Desktop pins and follows scroll (`pin`), with the behaviour of the v2 site's
  "What we do" section; mobile is stacked without pinning.
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
    /** Figma: Show progress */
    'Show progress'?: boolean
    /** Figma: Show steps (mobile) */
    'Show steps'?: boolean
    /** Desktop: pin the section and follow scroll */
    pin?: boolean
    /** Initially active item */
    initial?: number
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (a: number, b: number, v: number) => {
    const t = clamp((v - a) / (b - a))
    return t * t * (3 - 2 * t)
}

export function VerticalSlider({
    Index = 'Right',
    Device = 'Desktop',
    Kicker,
    Tagline,
    items,
    backgroundImage,
    'Show progress': progress = false,
    'Show steps': steps = true,
    pin = false,
    initial = 0,
}: VerticalSliderProps) {
    const [active, setActive] = useState(initial)
    const [p, setP] = useState(0)
    const ref = useRef<HTMLElement>(null)
    const N = items.length

    // Pinned: progress p (0–1) through the section drives the active chapter, media wipes and index bars (as on the v2 site)
    useEffect(() => {
        if (
            !pin ||
            Device !== 'Desktop' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
            return
        let raf = 0
        const update = () => {
            raf = 0
            const el = ref.current
            if (!el) return
            const r = el.getBoundingClientRect()
            const pr = clamp(
                -r.top / Math.max(1, el.offsetHeight - window.innerHeight)
            )
            setP(pr)
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
    }, [pin, Device, N])

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
            behavior: 'smooth',
        })
    }

    const header = (
        <div className={styles.header}>
            <span className={styles.kicker}>
                <span className={styles.line} aria-hidden="true" />
                <span className="yw-body-sm-bold">{Kicker}</span>
            </span>
            {Tagline && <span className="yw-body-sm-bold">{Tagline}</span>}
        </div>
    )
    const bgOn = !!backgroundImage || items.some((it) => it.image)
    const fallback =
        typeof backgroundImage === 'string' ? backgroundImage : undefined

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

    // Without pinning, p follows the selected chapter so the media and bars show the same states
    const prog = pin ? p : (active + 0.5) / N

    return (
        <section
            ref={ref}
            data-pinned={pin || undefined}
            data-left={Index === 'Left' || undefined}
            className={cx(styles.root)}
            style={{ ['--_steps' as string]: N }}
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
                                ['--r' as string]:
                                    i === 0
                                        ? '150%'
                                        : `${(smooth(i / N - 0.035, i / N + 0.045, prog) * 150).toFixed(2)}%`,
                                ['--k' as string]: clamp(
                                    prog * N - i + 0.5
                                ).toFixed(3),
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
                                style={{
                                    ['--f' as string]: clamp(
                                        prog * N - i
                                    ).toFixed(3),
                                }}
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
                        <span style={{ transform: `scaleX(${prog})` }} />
                    </div>
                )}
            </div>
        </section>
    )
}
