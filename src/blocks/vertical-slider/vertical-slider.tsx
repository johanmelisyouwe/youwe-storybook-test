import { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { CardMedia } from '../../shared/card-reveal/card-media'
import '../../shared/focus-ring/focus-ring.css'
import '../../shared/block/block.css'
import './vertical-slider.css'

/*
  Vertical slider — Figma 26715:410; _Vertical slider/Index item 26713:47; _Vertical slider/Slide 26713:174.
  Interaction (Figma): index items are buttons (hover and focus also switch slides; when pinned, a click
  scrolls to that chapter). Desktop pins and follows scroll (`pin`), with the behaviour of the v2 site's
  "What we do" section; mobile is stacked without pinning.
*/

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')
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
                <div className="yw-slide">
                    <div className="yw-slide__text">
                        <h3 className="yw-slide__heading">
                            <span className="yw-body-sm-bold">
                                {props.eyebrow}
                            </span>
                            <span className="yw-heading-3xl yw-mask">
                                <span>{props.Title}</span>
                            </span>
                        </h3>
                        <p className="yw-body-lg-reg">{props.body}</p>
                    </div>
                    {props.pills && (
                        <div className="yw-slide__pills">
                            {props.pills.map((p) => (
                                <span
                                    key={p}
                                    className="yw-card-tag yw-body-xs-reg"
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
                <figure className="yw-slide" style={{ margin: 0 }}>
                    <blockquote className="yw-heading-2xl">
                        {props.quote}
                    </blockquote>
                    <figcaption className="yw-slide__attribution">
                        <span className="yw-slide__person">
                            <span className="yw-body-lg-med">{props.name}</span>
                            {props.role && (
                                <span className="yw-slide__secondary yw-body-md-reg">
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
                <div className="yw-slide">
                    <h3 className="yw-slide__heading">
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <span className="yw-slide__value yw-heading-3xl yw-mask">
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
                <div className="yw-slide yw-slide--case">
                    <CardMedia src={props.image} className="yw-slide__image" />
                    <div className="yw-slide__text">
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <h3
                            className="yw-heading-xl yw-mask"
                            style={{ margin: 0 }}
                        >
                            <span>{props.Title}</span>
                        </h3>
                        <p className="yw-slide__secondary yw-body-lg-reg">
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
                <div className="yw-slide">
                    <h3 className="yw-slide__heading">
                        <span className="yw-body-sm-bold">{props.eyebrow}</span>
                        <span className="yw-heading-xl yw-mask">
                            <span>{props.Title}</span>
                        </span>
                    </h3>
                    <p className="yw-slide__secondary yw-body-lg-reg">
                        {props.body}
                    </p>
                    {props.list && (
                        <ul className="yw-slide__list">
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
            className={cx('yw-vindex', 'yw-focus-ring', className)}
            aria-current={active ? 'true' : undefined}
            onClick={onSelect}
            onMouseEnter={hoverSelect ? onSelect : undefined}
            onFocus={hoverSelect ? onSelect : undefined}
        >
            <span className="yw-vindex__bar" aria-hidden="true" />
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
        <div className="yw-vslider__header">
            <span className="yw-vslider__kicker">
                <span className="yw-vslider__line" aria-hidden="true" />
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
                className={cx(
                    'yw-vslider',
                    'yw-vslider--mobile',
                    Index === 'Left' && 'yw-vslider--left'
                )}
                aria-label={Kicker}
            >
                <div className="yw-vslider__frame">
                    {bgOn && (
                        <CardMedia
                            src={items[0].image ?? fallback}
                            className="yw-vslider__bg"
                        />
                    )}
                    {header}
                    <div className="yw-vslider__stack">
                        {items.map((it, i) => (
                            <div
                                key={it.label}
                                className="yw-vslider__step is-active"
                            >
                                <div className="yw-vslider__current">
                                    {steps && (
                                        <span
                                            className="yw-vslider__steps"
                                            aria-hidden="true"
                                        >
                                            {items.map((_, j) => (
                                                <span
                                                    key={j}
                                                    className={
                                                        j <= i
                                                            ? 'is-done'
                                                            : undefined
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
            className={cx(
                'yw-vslider',
                pin && 'yw-vslider--pinned',
                Index === 'Left' && 'yw-vslider--left'
            )}
            style={{ ['--_steps' as string]: N }}
            aria-label={Kicker}
        >
            <div className="yw-vslider__frame">
                {bgOn &&
                    items.map((it, i) => (
                        <CardMedia
                            key={i}
                            src={it.image ?? fallback}
                            className="yw-vslider__bg"
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
                <div className="yw-vslider__body">
                    <div className="yw-vslider__chapters" aria-live="polite">
                        {items.map((it, i) => (
                            <div
                                key={it.label}
                                className={cx(
                                    'yw-vslider__chapter',
                                    i === active && 'is-active',
                                    i < active && 'is-past'
                                )}
                                aria-hidden={i !== active}
                                inert={i !== active ? true : undefined}
                            >
                                <Slide {...it.slide} />
                            </div>
                        ))}
                    </div>
                    <ul className="yw-vslider__index">
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
                    <div className="yw-vslider__progress" aria-hidden="true">
                        <span style={{ transform: `scaleX(${prog})` }} />
                    </div>
                )}
            </div>
        </section>
    )
}
