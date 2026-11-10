import { CardArrow } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { Pills } from '../pills'
import { Button } from '../button'
import { ButtonLink } from '../button-link'
import { cx } from '../../shared/cx'
import styles from './feature-card.module.css'

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
            data-variant={Variant.toLowerCase()}
            data-reveal={reveal || undefined}
            className={cx(styles.root, className)}
        >
            {Variant === 'AI' && (
                <span className={styles.aura} aria-hidden="true" />
            )}
            {image && (
                <CardMedia
                    className={styles.image}
                    src={typeof image === 'string' ? image : undefined}
                    ratio="16 / 9"
                    style={{ borderRadius: 0 }}
                />
            )}
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        {Number && (
                            <span
                                className={cx(styles.number, 'yw-body-sm-bold')}
                            >
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
                    className={cx(styles.desc, 'yw-body-md-reg')}
                    style={{ margin: 0 }}
                >
                    {Description}
                </p>
                {tags && tags.length > 0 && (
                    <div className={styles.tags}>
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
                    <div className={styles.bottom}>
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
