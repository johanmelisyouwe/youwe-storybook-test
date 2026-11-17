import type { ImageInput } from '../../shared/asset'
import { askYouwe } from '../../shared/ask'
import block from '../../shared/block/block.module.css'
import { CardReveal } from '../../shared/card-reveal'
import { CardMedia } from '../../shared/card-reveal/card-media'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import { cx } from '../../shared/cx'
import { Icon } from '../../shared/icons/icon'
import { AskOrb } from '../../site/ask-youwe'
import { ServiceCard, type ServiceCardProps } from '../../ui/service-card'
import styles from './services-mosaic.module.css'

/*
  Content blocks/Services mosaic (code block, the v2 services overview; alternative to Services split).
  One practice as a 12-column mosaic, gap 16:
  - head: kicker over the full width, heading/xl title (left) and a one-line tagline (right)
  - lead tile (6 columns × 3 rows): a full image with a card bottom-left (eyebrow + body)
  - service tiles (3 columns each, 2 per row): Service Cards, with the card hover (red reveal)
  - case tile (8 columns): image with a stat card ("800+ / Categories active / Client · Read the case")
  - Ask tile (4 columns): "Ask Youwe about …" with the question; asks it through askYouwe() (the page's dock)
  Case and Ask tiles are links/buttons with the same card hover as the Service Cards (red reveal, also on focus).
  Lead "Left" (default) or "Right" mirrors the top part (alternate per practice). Mobile: one column; the
  service tiles in two columns from 600px. Cards follow the section Mode: dark cards on dark, light on light.
*/

export type ServicesMosaicProps = {
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    /** One line, top right */
    tagline?: string
    /** Which side the lead image takes */
    Lead?: 'Left' | 'Right'
    lead: {
        image: ImageInput
        /** e.g. 01 · Infrastructure · 6 services */
        eyebrow: string
        body: string
    }
    services: ServiceCardProps[]
    case?: {
        image: ImageInput
        value: string
        label: string
        client: string
        href: string
        /** Default: Read the case */
        cta?: string
    }
    ask?: {
        /** e.g. Ask Youwe about Infrastructure */
        label: string
        question: string
        /** Default: Ask */
        button?: string
        /** Default: askYouwe(question), answered by the page's Ask Youwe dock */
        onAsk?: (question: string) => void
    }
}

export function ServicesMosaic({
    kicker,
    title,
    tagline,
    Lead = 'Left',
    lead,
    services,
    case: kase,
    ask,
}: ServicesMosaicProps) {
    const cta = kase?.cta ?? 'Read the case'
    return (
        <section
            className={cx(block.root, styles.root)}
            aria-label={title}
            data-lead={Lead.toLowerCase()}
        >
            <div className={cx(block.inner, styles.inner)}>
                <div className={cx(styles.head, block.reveal)}>
                    <span
                        className={cx(
                            block.kicker,
                            styles.kicker,
                            'yw-body-sm-bold'
                        )}
                    >
                        {kicker}
                    </span>
                    <h2 className="yw-heading-xl">{title}</h2>
                    {tagline && (
                        <p className={cx(styles.tagline, 'yw-body-md-reg')}>
                            {tagline}
                        </p>
                    )}
                </div>
                <div className={styles.grid}>
                    <div className={cx(styles.lead, block.reveal)}>
                        <CardMedia
                            src={lead.image}
                            placeholder={false}
                            className={styles.leadimg}
                        />
                        <div className={styles.leadcard}>
                            <span
                                className={cx(
                                    styles.eyebrow,
                                    'yw-body-sm-bold'
                                )}
                            >
                                {lead.eyebrow}
                            </span>
                            <p className="yw-body-lg-reg">{lead.body}</p>
                        </div>
                    </div>
                    <ul className={styles.services}>
                        {services.map((s) => (
                            <li key={s.Title} className={block.reveal}>
                                <ServiceCard {...s} className={styles.svc} />
                            </li>
                        ))}
                    </ul>
                    {kase && (
                        <a
                            href={kase.href}
                            className={cx(
                                reveal.root,
                                styles.case,
                                block.reveal
                            )}
                        >
                            <CardMedia
                                src={kase.image}
                                className={styles.caseimg}
                            />
                            <span className={styles.stat}>
                                <span className={styles.value}>
                                    {kase.value}
                                </span>
                                <span
                                    className={cx(
                                        styles.label,
                                        'yw-body-sm-reg'
                                    )}
                                >
                                    {kase.label}
                                </span>
                                <span
                                    className={cx(
                                        styles.client,
                                        'yw-body-xs-med'
                                    )}
                                >
                                    {kase.client} · {cta}
                                    <Icon name="arrow-forward" size={16} />
                                </span>
                            </span>
                            <CardReveal cta={cta} context={kase.client} />
                        </a>
                    )}
                    {ask && (
                        <button
                            type="button"
                            className={cx(
                                reveal.root,
                                styles.ask,
                                block.reveal
                            )}
                            onClick={() =>
                                (ask.onAsk ?? askYouwe)(ask.question)
                            }
                        >
                            <span className={styles.asktop}>
                                <AskOrb />
                                <span className="yw-body-xs-med">
                                    {ask.label}
                                </span>
                            </span>
                            <span
                                className={cx(styles.question, 'yw-heading-sm')}
                            >
                                “{ask.question}”
                            </span>
                            <span
                                className={cx(styles.askbtn, 'yw-body-xs-med')}
                            >
                                {ask.button ?? 'Ask'}
                                <Icon name="arrow-forward" size={16} />
                            </span>
                            <CardReveal
                                cta={ask.button ?? 'Ask'}
                                context={ask.question}
                            />
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
