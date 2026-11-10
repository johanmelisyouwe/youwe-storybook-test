import { Body, Lead } from '../text-column'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../text-column/text-column.module.css'

/* Content blocks/Two-column text — Figma 24988:587. Styles in TextColumn.css (shared long-form). */

export type TwoColumnTextProps = {
    /** Figma: Split */
    Split?: '6/6' | '4/8'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    label?: string
    lead: string
    body: string[]
}

export function TwoColumnText({
    Split = '6/6',
    label,
    lead,
    body,
}: TwoColumnTextProps) {
    return (
        <section className={cx(block.root, styles.longform)}>
            <div className={block.inner}>
                <div
                    data-split={Split === '4/8' ? '4-8' : undefined}
                    className={cx(styles.twoCol, block.reveal)}
                >
                    <div className={styles.twoColLead}>
                        {label && (
                            <span
                                className={cx(
                                    styles.twoColLabel,
                                    'yw-body-md-bold'
                                )}
                            >
                                {label}
                            </span>
                        )}
                        <Lead>{lead}</Lead>
                    </div>
                    <div className={styles.twoColBody}>
                        <Body paragraphs={body} />
                    </div>
                </div>
            </div>
        </section>
    )
}
