import type { ReactNode } from 'react'
import { ServiceCard, type ServiceCardProps } from '../../ui/service-card'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './services-split.module.css'

/* Content blocks/Services split — Figma 26849:946. */

/** Shared left column of the split blocks: kicker, heading/2xl title, body, optional link and snippets. */
export function SplitIntro({
    kicker,
    title,
    body,
    link,
    snippets,
}: {
    kicker: string
    title: string
    body: string
    link?: ReactNode
    snippets?: ReactNode
}) {
    return (
        <div className={styles.left}>
            <div className={cx(styles.intro, block.reveal)}>
                <h2 className={styles.title}>
                    <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                        {kicker}
                    </span>
                    <span className="yw-heading-2xl">{title}</span>
                </h2>
                <p className="yw-body-lg-reg">{body}</p>
                {link}
            </div>
            {snippets && (
                <div className={cx(styles.snippets, block.reveal)}>
                    {snippets}
                </div>
            )}
        </div>
    )
}

export type ServicesSplitProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    body: string
    /** Ask Youwe snippets under the intro */
    snippets?: ReactNode
    services: ServiceCardProps[]
}

export function ServicesSplit({
    kicker,
    title,
    body,
    snippets,
    services,
}: ServicesSplitProps) {
    const a = services.filter((_, i) => i % 2 === 0)
    const b = services.filter((_, i) => i % 2 === 1)
    return (
        <section className={cx(block.root, styles.root)} aria-label={title}>
            <div className={cx(block.inner, styles.inner)}>
                <SplitIntro
                    kicker={kicker}
                    title={title}
                    body={body}
                    snippets={snippets}
                />
                <div className={styles.cols}>
                    <ul className={styles.col}>
                        {a.map((s) => (
                            <li key={s.Title} className={block.reveal}>
                                <ServiceCard {...s} />
                            </li>
                        ))}
                    </ul>
                    <ul className={cx(styles.col, styles['col-offset'])}>
                        {b.map((s) => (
                            <li key={s.Title} className={block.reveal}>
                                <ServiceCard {...s} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
