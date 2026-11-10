import { useRef, useState, type ReactNode } from 'react'
import { Button } from '../../ui/button'
import { CaseCard, type CaseCardProps } from '../../ui/case-card'
import '../../shared/block/block.css'
import './case-carousel.css'

/* Content blocks/Case carousel — Figma 24985:700. */

export type CaseCarouselProps = {
    /** Figma: Layout */
    Layout?: 'Short' | 'Full width 3' | 'Full width 4' | 'Scroll'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Kicker (Show kicker) */
    Kicker?: string
    Title: string
    /** Short: body under the title */
    body?: string
    /** Figma: Show button */
    button?: { label: string; href: string }
    cases: CaseCardProps[]
}

export function CaseCarousel({
    Layout = 'Short',
    Kicker,
    Title,
    body,
    button,
    cases,
}: CaseCarouselProps) {
    const track = useRef<HTMLUListElement>(null)
    const [index, setIndex] = useState(0)
    const step = (dir: number) => {
        const el = track.current
        if (!el) return
        const card = el.querySelector('li') as HTMLElement | null
        el.scrollBy({
            left: dir * ((card?.offsetWidth ?? 416) + 16),
            behavior: 'smooth',
        })
    }
    const onScroll = () => {
        const el = track.current
        if (!el) return
        const card = el.querySelector('li') as HTMLElement | null
        setIndex(Math.round(el.scrollLeft / ((card?.offsetWidth ?? 416) + 16)))
    }
    const atEnd = track.current
        ? track.current.scrollLeft + track.current.clientWidth >=
          track.current.scrollWidth - 4
        : false
    const items: ReactNode = cases.map((c, i) => (
        <li
            key={i}
            onFocus={(e) =>
                (e.currentTarget as HTMLElement).scrollIntoView({
                    block: 'nearest',
                    inline: 'nearest',
                })
            }
        >
            <CaseCard
                {...c}
                Size={Layout === 'Full width 4' ? 'One quarter' : 'One third'}
            />
        </li>
    ))
    const pad = (n: number) => String(n).padStart(2, '0')

    if (Layout === 'Short') {
        return (
            <section
                className="yw-block yw-case-carousel yw-case-carousel--short"
                aria-roledescription="carousel"
                aria-label={Title}
            >
                <div className="yw-block__inner">
                    <div className="yw-case-carousel__aside">
                        <div className="yw-case-carousel__text">
                            <h2 className="yw-heading-xl">{Title}</h2>
                            {body && <p className="yw-body-md-reg">{body}</p>}
                        </div>
                        <div className="yw-case-carousel__controls">
                            <Button
                                Variant="Outline"
                                Icon="Only"
                                Size="M"
                                iconName="chevron-left"
                                label="Previous case"
                                disabled={index === 0}
                                onClick={() => step(-1)}
                            />
                            <Button
                                Variant="Outline"
                                Icon="Only"
                                Size="M"
                                iconName="chevron-right"
                                label="Next case"
                                disabled={atEnd && index > 0}
                                onClick={() => step(1)}
                            />
                            <span
                                className="yw-case-carousel__count yw-body-sm-bold"
                                aria-live="polite"
                            >
                                {pad(Math.min(index + 1, cases.length))} /{' '}
                                {pad(cases.length)}
                            </span>
                        </div>
                    </div>
                    <ul
                        ref={track}
                        className="yw-case-carousel__track"
                        onScroll={onScroll}
                    >
                        {items}
                    </ul>
                </div>
            </section>
        )
    }

    const head = (
        <div className="yw-case-carousel__head">
            {Kicker && (
                <span className="yw-kicker yw-body-sm-bold">{Kicker}</span>
            )}
            <div className="yw-case-carousel__titlebar">
                <h2 className="yw-heading-xl">{Title}</h2>
                {button && (
                    <Button
                        Variant="Solid"
                        Size="M"
                        label={button.label}
                        href={button.href}
                    />
                )}
            </div>
        </div>
    )

    if (Layout === 'Scroll') {
        return (
            <section
                className="yw-block yw-case-carousel yw-case-carousel--scroll"
                aria-label={Title}
            >
                <div className="yw-block__inner">
                    {head}
                    <ul
                        ref={track}
                        className="yw-case-carousel__track"
                        onScroll={onScroll}
                    >
                        {items}
                    </ul>
                </div>
            </section>
        )
    }

    return (
        <section
            className="yw-block yw-case-carousel yw-case-carousel--grid"
            aria-label={Title}
        >
            <div className="yw-block__inner">
                {head}
                <ul
                    className="yw-case-carousel__grid"
                    style={{
                        ['--_cols' as string]:
                            Layout === 'Full width 4' ? 4 : 3,
                    }}
                >
                    {items}
                </ul>
            </div>
        </section>
    )
}
