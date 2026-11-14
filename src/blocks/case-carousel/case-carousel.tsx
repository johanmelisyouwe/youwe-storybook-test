import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Button } from '../../ui/button'
import { CaseCard, type CaseCardProps } from '../../ui/case-card'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './case-carousel.module.css'

/* Content blocks/Case carousel — Figma 24985:700.
   Pinned (code layout, the Home "Selected work" reel): the section stays in view while vertical scroll moves the
   row of cards sideways; a 01 / 09 counter follows the card at the left edge. Mobile and reduced motion: the
   Scroll row (swipe) with the counter. Tabbing to a card scrolls the page to where that card is in view. */

export type CaseCarouselProps = {
    /** Figma: Layout */
    Layout?: 'Short' | 'Full width 3' | 'Full width 4' | 'Scroll' | 'Pinned'
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
    Device = 'Desktop',
    Kicker,
    Title,
    body,
    button,
    cases,
}: CaseCarouselProps) {
    const track = useRef<HTMLUListElement>(null)
    const root = useRef<HTMLElement>(null)
    const [index, setIndex] = useState(0)
    const [reduce, setReduce] = useState(false)
    useEffect(() => {
        setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }, [])
    const pinned = Layout === 'Pinned' && Device === 'Desktop' && !reduce

    // Pinned: distance the row travels (--_dist) and progress p (0–1) through the section (--p)
    useEffect(() => {
        const el = root.current,
            row = track.current
        if (!pinned || !el || !row) return
        let raf = 0
        // offsetLeft/offsetWidth ignore the transform, so this stays right while the row is moved
        const reach = () => {
            const last = row.lastElementChild as HTMLElement | null
            return Math.max(
                0,
                (last ? last.offsetLeft + last.offsetWidth : 0) -
                    row.clientWidth +
                    parseFloat(getComputedStyle(row).paddingRight)
            )
        }
        const measure = () => el.style.setProperty('--_dist', `${reach()}px`)
        const update = () => {
            raf = 0
            const r = el.getBoundingClientRect()
            const span = Math.max(1, el.offsetHeight - window.innerHeight)
            const p = Math.min(1, Math.max(0, -r.top / span))
            el.style.setProperty('--p', p.toFixed(4))
            const card = row.querySelector('li') as HTMLElement | null
            const w = (card?.offsetWidth ?? 416) + 16
            setIndex(Math.min(cases.length - 1, Math.round((p * reach()) / w)))
        }
        const on = () => {
            if (!raf) raf = requestAnimationFrame(update)
        }
        const ro = new ResizeObserver(() => {
            measure()
            on()
        })
        ro.observe(row)
        measure()
        update()
        window.addEventListener('scroll', on, { passive: true })
        return () => {
            ro.disconnect()
            window.removeEventListener('scroll', on)
            cancelAnimationFrame(raf)
        }
    }, [pinned, cases.length])
    // Pinned: bring a focused card into view by scrolling the page to its point in the reel
    const reveal = (li: HTMLElement) => {
        const el = root.current,
            row = track.current
        if (!el || !row) return
        const dist = parseFloat(el.style.getPropertyValue('--_dist')) || 1
        const p = Math.min(1, li.offsetLeft / dist)
        const top = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
            top: top + p * (el.offsetHeight - window.innerHeight),
            behavior: 'auto',
        })
    }
    const step = (dir: number) => {
        const el = track.current
        if (!el) return
        const card = el.querySelector('li') as HTMLElement | null
        el.scrollBy({
            left: dir * ((card?.offsetWidth ?? 416) + 16),
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 'auto'
                : 'smooth',
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
                pinned
                    ? reveal(e.currentTarget as HTMLElement)
                    : (e.currentTarget as HTMLElement).scrollIntoView({
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
                data-layout="short"
                className={cx(block.root, styles.root)}
                aria-roledescription="carousel"
                aria-label={Title}
            >
                <div className={cx(block.inner, styles.inner)}>
                    <div className={styles.aside}>
                        <div className={styles.text}>
                            <h2 className="yw-heading-xl">{Title}</h2>
                            {body && <p className="yw-body-md-reg">{body}</p>}
                        </div>
                        <div className={styles.controls}>
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
                                className={cx(styles.count, 'yw-body-sm-bold')}
                                aria-live="polite"
                            >
                                {pad(Math.min(index + 1, cases.length))} /{' '}
                                {pad(cases.length)}
                            </span>
                        </div>
                    </div>
                    <ul
                        ref={track}
                        className={styles.track}
                        onScroll={onScroll}
                    >
                        {items}
                    </ul>
                </div>
            </section>
        )
    }

    const counter = (
        <span
            className={cx(styles.count, 'yw-body-sm-bold')}
            aria-live="polite"
        >
            {pad(Math.min(index + 1, cases.length))} / {pad(cases.length)}
        </span>
    )
    const head = (
        <div className={styles.head}>
            {Kicker && (
                <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                    {Kicker}
                </span>
            )}
            <div className={styles.titlebar}>
                <h2 className="yw-heading-xl">{Title}</h2>
                <div className={styles.titleactions}>
                    {Layout === 'Pinned' && counter}
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
        </div>
    )

    if (Layout === 'Scroll' || Layout === 'Pinned') {
        return (
            <section
                ref={root}
                data-layout="scroll"
                data-pinned={pinned || undefined}
                className={cx(block.root, styles.root)}
                aria-label={Title}
            >
                <div className={styles.frame}>
                    <div className={cx(block.inner, styles.inner)}>
                        {head}
                        <ul
                            ref={track}
                            className={styles.track}
                            onScroll={pinned ? undefined : onScroll}
                        >
                            {items}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            data-layout="grid"
            className={cx(block.root, styles.root)}
            aria-label={Title}
        >
            <div className={cx(block.inner, styles.inner)}>
                {head}
                <ul
                    className={styles.grid}
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
