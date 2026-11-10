import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Button } from '../../ui/button'
import { Breadcrumbs, type Crumb } from '../../ui/breadcrumbs'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { CountUp } from '../../ui/stat'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './hero.module.css'

/* Content blocks/Hero — Figma 24985:698; _Hero/Bar — 26880:273; _Hero/Label — 26882:927. */

/* _Hero/Label */
export type HeroLabelProps = {
    Type?: 'Subtitle' | 'Breadcrumb'
    Device?: 'Desktop' | 'Mobile'
    Subtitle?: string
    crumbs?: Crumb[]
}
export function HeroLabel({
    Type = 'Subtitle',
    Device = 'Desktop',
    Subtitle,
    crumbs = [],
}: HeroLabelProps) {
    if (Type === 'Breadcrumb')
        return (
            <Breadcrumbs
                items={crumbs}
                Device={Device}
                {...{ 'Filter button': false }}
            />
        )
    return (
        <span className={cx(block.kicker, 'yw-body-sm-bold')}>{Subtitle}</span>
    )
}

/* _Hero/Bar */
export type HeroStat = { value: string; label: string; client: string }
export type HeroBarProps = {
    Type?: 'Logos' | 'Stats'
    logos?: ReactNode[]
    stats?: HeroStat[]
}
export function HeroBar({
    Type = 'Logos',
    logos = [],
    stats = [],
}: HeroBarProps) {
    const items =
        Type === 'Logos'
            ? logos.map((l, i) => (
                  <span key={i} className={styles['hero-bar-logo']}>
                      {l}
                  </span>
              ))
            : stats.map((s) => (
                  <span
                      key={s.client + s.value}
                      className={styles['hero-bar-stat']}
                  >
                      <CountUp className="yw-heading-lg" value={s.value} />
                      <span
                          className={cx(
                              styles['hero-bar-label'],
                              'yw-body-sm-reg'
                          )}
                      >
                          {s.label}
                      </span>
                      <span
                          className={cx(
                              styles['hero-bar-client'],
                              'yw-body-sm-med'
                          )}
                      >
                          {s.client}
                      </span>
                  </span>
              ))
    // Endless marquee: the items form one group; the group is repeated until the bar is covered
    // plus one spare, and every group slides left by exactly its own width (gap included), so the
    // loop restarts on an identical frame (no jump) and wide screens never run out of logos.
    // Only the first group is read by screen readers.
    const bar = useRef<HTMLDivElement>(null)
    const group = useRef<HTMLDivElement>(null)
    const [copies, setCopies] = useState(2)
    useLayoutEffect(() => {
        const b = bar.current,
            g = group.current
        if (!b || !g || typeof ResizeObserver === 'undefined') return
        const fit = () => {
            const w = g.offsetWidth
            if (w) setCopies(Math.max(2, Math.ceil(b.offsetWidth / w) + 1))
        }
        const ro = new ResizeObserver(fit)
        ro.observe(b)
        ro.observe(g)
        fit()
        return () => ro.disconnect()
    }, [])
    return (
        <div
            ref={bar}
            data-stats={Type === 'Stats' || undefined}
            className={cx(styles['hero-bar'])}
        >
            <div className={styles['hero-bar-track']}>
                {Array.from({ length: copies }, (_, n) => (
                    <div
                        key={n}
                        ref={n === 0 ? group : undefined}
                        className={styles['hero-bar-group']}
                        aria-hidden={n > 0 || undefined}
                    >
                        {items}
                    </div>
                ))}
            </div>
        </div>
    )
}

export type HeroProps = {
    /** Figma: Variant */
    Variant?: 'Gradient' | 'Title + image'
    /** Figma: Device (layout also follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Title lines; the second line is brand red (Gradient) */
    title: string[]
    body?: string
    /** Figma: Show label */
    label?: HeroLabelProps
    /** Figma: Show buttons / Show second button */
    buttons?: { label: string; href: string }[]
    /** Figma: Show bar */
    bar?: HeroBarProps
    /** Figma: Image (background for Gradient, wide image for Title + image) */
    image?: string
    /** Title + image: client logo */
    logo?: ReactNode
    /** Figma: Show header — the Header/Corporate instance on top */
    header?: ReactNode
    /** Scroll: hero recedes over the first 860px */
    recede?: boolean
}

export function Hero({
    Variant = 'Gradient',
    Device = 'Desktop',
    title,
    body,
    label,
    buttons = [],
    bar,
    image,
    logo,
    header,
    recede = false,
}: HeroProps) {
    const lines = (
        <h1 className={cx(styles.title, 'yw-heading-3xl')}>
            {title.map((t, i) => (
                <span key={i} className={styles.line}>
                    <span>{t}</span>
                </span>
            ))}
        </h1>
    )
    if (Variant === 'Title + image') {
        return (
            <section
                data-image
                data-mobile={Device === 'Mobile' || undefined}
                className={cx(block.root, styles.root)}
            >
                {header && <div className={styles.header}>{header}</div>}
                <div className={block.inner} style={{ paddingBottom: 0 }}>
                    <div className={styles.row}>
                        <div className={styles.titlecol}>
                            {label && <HeroLabel Device={Device} {...label} />}
                            {lines}
                        </div>
                        {logo && <span className={styles.logo}>{logo}</span>}
                    </div>
                </div>
                <CardMedia
                    src={image}
                    ratio="16 / 9"
                    clip={false}
                    className={styles.image}
                />
            </section>
        )
    }
    return (
        <section
            data-gradient
            data-mobile={Device === 'Mobile' || undefined}
            data-recede={recede || undefined}
            className={cx(block.root, styles.root)}
        >
            <CardMedia
                src={image}
                className={styles.media}
                placeholder={false}
            />
            {header && <div className={styles.header}>{header}</div>}
            <div className={cx(block.inner, styles.content)}>
                <div className={styles.titlecol}>
                    {label && <HeroLabel Device={Device} {...label} />}
                    {lines}
                </div>
                {(body || buttons.length > 0) && (
                    <div className={styles.textcol}>
                        {body && <p className="yw-body-lg-reg">{body}</p>}
                        {buttons.length > 0 && (
                            <div className={styles.actions}>
                                {buttons.slice(0, 2).map((b, i) => (
                                    <Button
                                        key={b.label}
                                        Variant={i === 0 ? 'Primary' : 'Solid'}
                                        Size="M"
                                        label={b.label}
                                        href={b.href}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            {bar && <HeroBar {...bar} />}
        </section>
    )
}
