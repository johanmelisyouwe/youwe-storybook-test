import type { ReactNode } from 'react'
import { CardArrow, CardReveal } from '../../shared/card-reveal'
import { cx } from '../../shared/cx'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './technology-card.module.css'

/* Technology Card — Figma 26721:87 (page "Cards"). Whole card is one link to the partner page. */

export type TechnologyCardProps = {
    /** Figma: Layout */
    Layout?: 'Horizontal' | 'Vertical'
    Name: string
    /** Figma: Level (Show level) — e.g. "Certified Partner" */
    Level?: string
    /** Figma: Description (Show description) */
    Description?: string
    /** Figma: Logo — partner logo; without it the name is shown as a wordmark (Figma logo placeholder) */
    logo?: ReactNode
    /** Figma: Show button */
    'Show button'?: boolean
    'Hover CTA'?: string
    'Hover context'?: string
    href: string
    className?: string
}

export function TechnologyCard({
    Layout = 'Horizontal',
    Name,
    Level,
    Description,
    logo,
    'Show button': showButton = true,
    'Hover CTA': cta = 'Go to partner page',
    'Hover context': ctx,
    href,
    className,
}: TechnologyCardProps) {
    const tile = (
        <span className={styles.logo} aria-hidden="true">
            {logo ?? <span className="yw-body-md-bold">{Name}</span>}
        </span>
    )
    const text = (
        <span className={styles.text}>
            <span className={styles.heading}>
                <span className="yw-body-lg-med">{Name}</span>
                {Level && (
                    <span className={cx(styles.level, 'yw-body-xs-med')}>
                        {Level}
                    </span>
                )}
            </span>
            {Description && (
                <span className={cx(styles.desc, 'yw-body-sm-reg')}>
                    {Description}
                </span>
            )}
        </span>
    )
    return (
        <a
            href={href}
            data-vertical={Layout === 'Vertical' || undefined}
            className={cx(reveal.root, styles.root, className)}
        >
            {Layout === 'Vertical' ? (
                <>
                    <span className={styles.top}>
                        {tile}
                        {showButton && <CardArrow />}
                    </span>
                    {text}
                </>
            ) : (
                <>
                    {tile}
                    {text}
                    {showButton && <CardArrow />}
                </>
            )}
            <CardReveal cta={cta} context={ctx ?? `${Name} at Youwe`} />
        </a>
    )
}
