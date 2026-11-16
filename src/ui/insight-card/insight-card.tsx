import type { ImageInput } from '../../shared/asset'
import { CardReveal } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { ButtonLink } from '../button-link'
import { cx } from '../../shared/cx'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './insight-card.module.css'

/* Insight Card — Figma 26733:125 (page "Cards"). Blog, whitepaper, event, video or news. Whole card is one link. */

/** Fixed UI text (English defaults); pass `labels` to translate (NL, SV) */
export const INSIGHT_CARD_LABELS = {
    readMore: 'Read more',
}

export type InsightCardProps = {
    /** Figma: Variant (Featured = the large "Latest" card) */
    Variant?: 'Default' | 'Featured'
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Type (Show type) — e.g. Blog, Whitepaper, Event, News */
    Type?: string
    Title: string
    /** Figma: Meta (Show meta) — e.g. "Whitepaper · 6 min read" */
    Meta?: string
    image?: ImageInput
    'Hover CTA'?: string
    'Hover context'?: string
    href: string
    className?: string
    /** UI text, for translations: { ...INSIGHT_CARD_LABELS } */
    labels?: Partial<typeof INSIGHT_CARD_LABELS>
}

const RATIO = {
    Default: { Desktop: '416 / 480', Mobile: '336 / 392' },
    Featured: { Desktop: '1280 / 640', Mobile: '336 / 260' },
}

export function InsightCard({
    Variant = 'Default',
    Device = 'Desktop',
    Type,
    Title,
    Meta,
    image,
    'Hover CTA': cta = 'Read more',
    'Hover context': ctx,
    href,
    className,
    labels,
}: InsightCardProps) {
    const L = { ...INSIGHT_CARD_LABELS, ...labels }
    const featured = Variant === 'Featured'
    return (
        <a
            href={href}
            data-featured={featured || undefined}
            className={cx(reveal.root, styles.root, className)}
        >
            <CardMedia src={image} ratio={RATIO[Variant][Device]} />
            <span className={styles.text}>
                <span className={featured ? 'yw-heading-lg' : 'yw-body-xl-med'}>
                    {Title}
                </span>
                {Meta && (
                    <span className={cx(styles.meta, 'yw-body-md-reg')}>
                        {Meta}
                    </span>
                )}
                {Type && (
                    <span className={reveal.tags}>
                        <span
                            data-type
                            className={cx(reveal.tag, 'yw-body-xs-reg')}
                        >
                            {Type}
                        </span>
                    </span>
                )}
            </span>
            {featured && <ButtonLink as="span" Size="md" label={L.readMore} />}
            <CardReveal cta={cta} context={ctx ?? Title} />
        </a>
    )
}
