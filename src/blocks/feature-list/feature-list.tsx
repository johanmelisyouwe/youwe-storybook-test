import { FeatureCard, type FeatureCardProps } from '../../ui/feature-card'
import { Words } from '../section-header'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../stats-block/stats-block.module.css'

/* Content blocks/Feature list — Figma 26534:132. Styles in StatsBlock.css (shared grid blocks). */

export type FeatureListProps = {
    /** Figma: Layout */
    Layout?: 'Grid' | 'Split'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    heading: string
    body?: string
    items: Omit<FeatureCardProps, 'Variant'>[]
}

export function FeatureList({
    Layout = 'Grid',
    kicker,
    heading,
    body,
    items,
}: FeatureListProps) {
    const head = (
        <div className={styles.featureListHead}>
            {kicker && (
                <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                    {kicker}
                </span>
            )}
            <h2 className="yw-heading-xl">
                <Words text={heading} />
            </h2>
            {body && <p className="yw-body-md-reg">{body}</p>}
        </div>
    )
    return (
        <section
            data-split={Layout === 'Split' || undefined}
            className={cx(block.root, styles.featureList)}
        >
            <div
                className={cx(
                    block.inner,
                    styles.inner,
                    styles.featureListInner
                )}
            >
                {head}
                {Layout === 'Grid' ? (
                    <ul className={styles.featureListGrid}>
                        {items.map((it) => (
                            <li key={it.Title}>
                                <FeatureCard {...it} Variant="Card" reveal />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ol className={styles.featureListItems}>
                        {items.map((it, i) => (
                            <li key={it.Title}>
                                <FeatureCard
                                    {...it}
                                    Number={
                                        it.Number ??
                                        String(i + 1).padStart(2, '0')
                                    }
                                    Variant="Plain"
                                    reveal
                                />
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </section>
    )
}
