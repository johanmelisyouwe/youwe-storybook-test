import { Body, Lead } from '../text-column'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../text-column/text-column.module.css'

/* Content blocks/Case intro — Figma 24988:571. Styles in TextColumn.css (shared long-form). */

export type CaseIntroProps = {
    /** Figma: Meta position */
    'Meta position'?: 'Left' | 'Right'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** e.g. Platforms / Role / Solution */
    meta: { label: string; value: string }[]
    lead: string
    body: string[]
}

export function CaseIntro({
    'Meta position': pos = 'Left',
    meta,
    lead,
    body,
}: CaseIntroProps) {
    return (
        <section className={cx(block.root, styles.longform)}>
            <div className={block.inner}>
                <div
                    data-meta-right={pos === 'Right' || undefined}
                    className={cx(styles['case-intro'], block.reveal)}
                >
                    <dl className={styles['case-intro-meta']}>
                        {meta.map((m) => (
                            <div
                                key={m.label}
                                className={styles['case-intro-item']}
                            >
                                <dt className="yw-body-xs-bold">{m.label}</dt>
                                <dd className="yw-body-md-reg">{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className={styles['case-intro-text']}>
                        <Lead>{lead}</Lead>
                        <Body paragraphs={body} />
                    </div>
                </div>
            </div>
        </section>
    )
}
