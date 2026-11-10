import { CardArrow, CardReveal } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { ButtonLink } from '../button-link'
import './service-card.css'

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
            className={[
                'yw-reveal',
                'yw-reveal--lift',
                'yw-service-card',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <span className="yw-service-card__text yw-reveal__lift">
                <span className="yw-service-card__top">
                    <span className="yw-service-card__heading">
                        {Eyebrow && (
                            <span className="yw-service-card__eyebrow yw-body-sm-bold">
                                {Eyebrow}
                            </span>
                        )}
                        <span className="yw-body-xl-med">{Title}</span>
                    </span>
                    <CardArrow />
                </span>
                <span className="yw-service-card__body yw-body-md-reg">
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
            className={[
                'yw-reveal',
                'yw-reveal--lift',
                'yw-service-card',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <span className="yw-service-card__heading yw-reveal__lift">
                {Eyebrow && (
                    <span className="yw-service-card__eyebrow yw-body-sm-bold">
                        {Eyebrow}
                    </span>
                )}
                <span className="yw-body-xl-med">{Title}</span>
            </span>
            <span className="yw-service-card__body yw-body-md-reg yw-reveal__lift">
                {Description}
            </span>
            {showImage && (
                <span className="yw-service-card__media">
                    <CardMedia src={image} ratio="368 / 208" />
                    {Caption && (
                        <span className="yw-service-card__caption yw-body-sm-reg">
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
