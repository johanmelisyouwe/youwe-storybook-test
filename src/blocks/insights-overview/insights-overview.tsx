import type { CSSProperties } from 'react'
import block from '../../shared/block/block.module.css'
import { cx } from '../../shared/cx'
import { Icon } from '../../shared/icons/icon'
import { Button } from '../../ui/button'
import { InsightCard, type InsightCardProps } from '../../ui/insight-card'
import { Pills } from '../../ui/pills'
import filter from '../filter-bar/filter-bar.module.css'
import styles from './insights-overview.module.css'

/*
  Content blocks/Insights overview — built from the hand-built "All insights" frames on Page / Insights:
  desktop 26734:89 (inside "Insights · content" 26661:7329), mobile 26816:3083. Not a Figma component yet
  (proposed for design review).
  Heading: red-line kicker + heading/xl (gap 12). Desktop: type filters in the Filter bar box (tiles
  "All · 174" etc., label + arrow, 120 high, gap 16; the selected tile has the Filter bar's pressed outline),
  "Showing 12 of 174" body/sm/reg tertiary, a 3-column Insight Card grid (gap 16, rows 40), Show more
  (Outline M). Mobile: the types as a sideways-scrolling pill row, one card per row (gap 24).
  Gaps: heading → filters → count → grid → more 40 (mobile 24).
*/

export type InsightType = { label: string; count: number }
export type InsightItem = Omit<
    InsightCardProps,
    'Device' | 'Variant' | 'className'
>

export type InsightsOverviewProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    title?: string
    /** Type filters; the first is usually "All" */
    types: InsightType[]
    /** Selected type label */
    type: string
    onTypeChange?: (type: string) => void
    /** Cards currently shown */
    items: InsightItem[]
    /** Total for the selected type (for "Showing x of y" and Show more) */
    total: number
    onShowMore?: () => void
    /** Shown when the selected type has no cards */
    empty?: string
}

export function InsightsOverview({
    Device = 'Desktop',
    kicker = 'Insights',
    title = 'All insights',
    types,
    type,
    onTypeChange,
    items,
    total,
    onShowMore,
    empty = 'Nothing here yet.',
}: InsightsOverviewProps) {
    const label = (t: InsightType) => `${t.label} · ${t.count}`
    return (
        <section className={cx(block.root, styles.root)}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles.stack}>
                    <div data-rise className={styles.heading}>
                        <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                            {kicker}
                        </span>
                        <h2 className="yw-heading-xl">{title}</h2>
                    </div>
                    {Device === 'Mobile' ? (
                        <ul
                            className={cx(filter.pills, styles.pills)}
                            aria-label="Insight type"
                        >
                            {types.map((t) => (
                                <li key={t.label}>
                                    <Pills
                                        Variant={
                                            t.label === type
                                                ? 'Primary'
                                                : 'Neutral'
                                        }
                                        label={label(t)}
                                        pressed={t.label === type}
                                        onClick={() => onTypeChange?.(t.label)}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div
                            className={filter.root}
                            role="group"
                            aria-label="Insight type"
                        >
                            <ul
                                data-stagger
                                className={cx(filter.systems, styles.types)}
                                style={
                                    {
                                        ['--_types' as string]: types.length,
                                    } as CSSProperties
                                }
                            >
                                {types.map((t) => (
                                    <li key={t.label}>
                                        <button
                                            type="button"
                                            className={filter['filter-tile']}
                                            aria-pressed={t.label === type}
                                            onClick={() =>
                                                onTypeChange?.(t.label)
                                            }
                                        >
                                            <span className="yw-body-sm-reg">
                                                {label(t)}
                                            </span>
                                            <Icon
                                                name="arrow-forward"
                                                size={16}
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p
                        data-rise
                        className={cx(styles.count, 'yw-body-sm-reg')}
                        aria-live="polite"
                    >
                        {`Showing ${items.length} of ${total}`}
                    </p>
                    {items.length === 0 && (
                        <p className={cx(styles.count, 'yw-body-md-reg')}>
                            {empty}
                        </p>
                    )}
                    <ul data-stagger className={styles.grid}>
                        {items.map((it, i) => (
                            <li key={`${it.Title}-${i}`}>
                                <InsightCard Device={Device} {...it} />
                            </li>
                        ))}
                    </ul>
                    {items.length < total && (
                        <div>
                            <Button
                                Variant="Outline"
                                Size="M"
                                label="Show more"
                                onClick={onShowMore}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
