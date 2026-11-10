import { CardArrow, CardReveal } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { ButtonLink } from '../button-link'
import { cx } from '../../shared/cx'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './service-card.module.css'

/*
  Service Card — Figma 26763:51, System Card — Figma 26751:66 (page "Cards").
  Whole card is one link; State=Hover is the end state of the red reveal (also on keyboard focus).
*/

type Common = {
    /** Figma: Eyebrow (Show eyebrow) — e.g. "01" */
    Eyebrow?: string
    Title: string
    Description: string
    /** Figma: Hover CTA / Hover context */
    'Hover CTA': string
    'Hover context'?: string
    href: string
    className?: string
}

export type ServiceCardProps = Common

export function ServiceCard({
    Eyebrow,
    Title,
    Description,
    'Hover CTA': cta,
    'Hover context': ctx,
    href,
    className,
}: ServiceCardProps) {
    return (
        <a
            href={href}
            data-reveal="lift"
            className={cx(reveal.root, styles.root, className)}
        >
            <span className={cx(styles.text, reveal.lift)}>
                <span className={styles.top}>
                    <span className={styles.heading}>
                        {Eyebrow && (
                            <span
                                className={cx(
                                    styles.eyebrow,
                                    'yw-body-sm-bold'
                                )}
                            >
                                {Eyebrow}
                            </span>
                        )}
                        <span className="yw-body-xl-med">{Title}</span>
                    </span>
                    <CardArrow />
                </span>
                <span className={cx(styles.body, 'yw-body-md-reg')}>
                    {Description}
                </span>
            </span>
            <CardReveal cta={cta} context={ctx ?? Title} />
        </a>
    )
}

export type SystemCardProps = Common & {
    /** Figma: Caption under the image */
    Caption?: string
    /** Figma: Show image — the case photo */
    image?: string
    'Show image'?: boolean
    /** Figma: Show link — the Button/Link label */
    link?: string
}

export function SystemCard({
    Eyebrow,
    Title,
    Description,
    Caption,
    image,
    'Show image': showImage = true,
    link,
    'Hover CTA': cta,
    'Hover context': ctx,
    href,
    className,
}: SystemCardProps) {
    return (
        <a
            href={href}
            data-reveal="lift"
            className={cx(reveal.root, styles.root, className)}
        >
            <span className={cx(styles.heading, reveal.lift)}>
                {Eyebrow && (
                    <span className={cx(styles.eyebrow, 'yw-body-sm-bold')}>
                        {Eyebrow}
                    </span>
                )}
                <span className="yw-body-xl-med">{Title}</span>
            </span>
            <span className={cx(styles.body, 'yw-body-md-reg', reveal.lift)}>
                {Description}
            </span>
            {showImage && (
                <span className={styles.media}>
                    <CardMedia src={image} ratio="368 / 208" />
                    {Caption && (
                        <span className={cx(styles.caption, 'yw-body-sm-reg')}>
                            {Caption}
                        </span>
                    )}
                </span>
            )}
            {link && <ButtonLink as="span" Size="md" label={link} />}
            <CardReveal cta={cta} context={ctx ?? link ?? Title} />
        </a>
    )
}
