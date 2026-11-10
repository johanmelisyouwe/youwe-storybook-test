import { CardArrow } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { Pills } from '../pills'
import { Button } from '../button'
import { ButtonLink } from '../button-link'
import './feature-card.css'

/* Feature Card — Figma 26533:129 (page "Cards"). Static card; tags, button and link are separate links where used. */

export type FeatureCardProps = {
    /** Figma: Variant */
    Variant?: 'Card' | 'Plain' | 'AI'
    /** Figma: Number (Show number) — e.g. "01" */
    Number?: string
    Title: string
    Description: string
    /** Figma: Show image */
    image?: string | true
    /** Figma: Show tags (up to 3) */
    tags?: string[]
    /** Figma: Show arrow */
    'Show arrow'?: boolean
    /** Figma: Show button — button label */
    button?: { label: string; href?: string }
    /** Figma: Show link — link label */
    link?: { label: string; href?: string }
    /** Scroll reveal (Figma motion); off in Storybook grids by default */
    reveal?: boolean
    className?: string
}

export function FeatureCard({
    Variant = 'Card',
    Number,
    Title,
    Description,
    image,
    tags,
    'Show arrow': arrow = false,
    button,
    link,
    reveal = false,
    className,
}: FeatureCardProps) {
    return (
        <article
            className={[
                'yw-feature-card',
                `yw-feature-card--${Variant.toLowerCase()}`,
                reveal && 'yw-feature-card--reveal',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {Variant === 'AI' && (
                <span className="yw-feature-card__aura" aria-hidden="true" />
            )}
            {image && (
                <CardMedia
                    className="yw-feature-card__image"
                    src={typeof image === 'string' ? image : undefined}
                    ratio="16 / 9"
                    style={{ borderRadius: 0 }}
                />
            )}
            <div className="yw-feature-card__content">
                <div className="yw-feature-card__header">
                    <div className="yw-feature-card__heading">
                        {Number && (
                            <span className="yw-feature-card__number yw-body-sm-bold">
                                {Number}
                            </span>
                        )}
                        <h3 className="yw-body-xl-med" style={{ margin: 0 }}>
                            {Title}
                        </h3>
                    </div>
                    {arrow && <CardArrow />}
                </div>
                <p
                    className="yw-feature-card__desc yw-body-md-reg"
                    style={{ margin: 0 }}
                >
                    {Description}
                </p>
                {tags && tags.length > 0 && (
                    <div className="yw-feature-card__tags">
                        {tags.slice(0, 3).map((t) => (
                            <Pills
                                key={t}
                                Variant="Neutral"
                                Size="S"
                                label={t}
                            />
                        ))}
                    </div>
                )}
                {button && (
                    <div className="yw-feature-card__bottom">
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={button.label}
                            href={button.href}
                        />
                    </div>
                )}
                {link && (
                    <ButtonLink
                        Size="md"
                        label={link.label}
                        href={link.href ?? '#'}
                    />
                )}
            </div>
        </article>
    )
}
