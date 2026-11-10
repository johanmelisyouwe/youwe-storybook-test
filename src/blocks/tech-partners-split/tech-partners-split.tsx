import type { ReactNode } from 'react'
import {
    TechnologyCard,
    type TechnologyCardProps,
} from '../../ui/technology-card'
import { ButtonLink } from '../../ui/button-link'
import { SplitIntro } from '../services-split'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../services-split/services-split.module.css'

/* Content blocks/Tech partners split — Figma 26851:911. Styles in ServicesSplit.css. */

export type TechPartnersSplitProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    body: string
    link?: { label: string; href: string }
    snippets?: ReactNode
    groups: { label: string; partners: TechnologyCardProps[] }[]
}

export function TechPartnersSplit({
    kicker,
    title,
    body,
    link,
    snippets,
    groups,
}: TechPartnersSplitProps) {
    return (
        <section
            data-layout="tech"
            className={cx(block.root, styles.root)}
            aria-label={title}
        >
            <div className={cx(block.inner, styles.inner)}>
                <SplitIntro
                    kicker={kicker}
                    title={title}
                    body={body}
                    snippets={snippets}
                    link={
                        link && (
                            <ButtonLink
                                Size="md"
                                label={link.label}
                                href={link.href}
                            />
                        )
                    }
                />
                <div className={styles.groups}>
                    {groups.map((g) => (
                        <section
                            key={g.label}
                            className={cx(styles.group, block.reveal)}
                            aria-label={g.label}
                        >
                            <h3
                                className={cx(
                                    styles['group-label'],
                                    'yw-body-xs-bold'
                                )}
                            >
                                {g.label}
                            </h3>
                            <ul
                                className={styles.cols}
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    listStyle: 'none',
                                }}
                            >
                                {g.partners.map((p) => (
                                    <li key={p.Name}>
                                        <TechnologyCard
                                            {...p}
                                            Layout="Vertical"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    )
}
