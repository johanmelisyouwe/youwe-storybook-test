import type { ReactNode } from 'react'
import { CardArrow, CardReveal } from '../../shared/card-reveal'
import './technology-card.css'

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
        <span className="yw-tech-card__logo" aria-hidden="true">
            {logo ?? <span className="yw-body-md-bold">{Name}</span>}
        </span>
    )
    const text = (
        <span className="yw-tech-card__text">
            <span className="yw-tech-card__heading">
                <span className="yw-body-lg-med">{Name}</span>
                {Level && (
                    <span className="yw-tech-card__level yw-body-xs-med">
                        {Level}
                    </span>
                )}
            </span>
            {Description && (
                <span className="yw-tech-card__desc yw-body-sm-reg">
                    {Description}
                </span>
            )}
        </span>
    )
    return (
        <a
            href={href}
            className={[
                'yw-reveal',
                'yw-tech-card',
                Layout === 'Vertical' && 'yw-tech-card--vertical',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {Layout === 'Vertical' ? (
                <>
                    <span className="yw-tech-card__top">
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
