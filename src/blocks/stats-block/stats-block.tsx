import type { CSSProperties } from 'react'
import { Stat, type StatProps } from '../../ui/stat'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './stats-block.module.css'

/* Content blocks/Stats — Figma 24985:701. */

export type StatsBlockProps = {
    /** Figma: Type */
    Type?: 'Client' | 'Plain'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Show intro */
    intro?: { kicker?: string; title: string; body?: string }
    /** Figma: Show stat 3 / Show stat 4 — 2 to 4 stats */
    stats: Omit<StatProps, 'Type' | 'Size'>[]
}

export function StatsBlock({ Type = 'Client', intro, stats }: StatsBlockProps) {
    return (
        <section
            className={cx(block.root, styles.root)}
            aria-label={intro?.kicker}
        >
            <div className={cx(block.inner, styles.inner)}>
                {intro && (
                    <div className={cx(styles.intro, block.reveal)}>
                        {intro.kicker && (
                            <span
                                className={cx(block.kicker, 'yw-body-sm-bold')}
                            >
                                {intro.kicker}
                            </span>
                        )}
                        <h2 className="yw-heading-2xl">{intro.title}</h2>
                        {intro.body && (
                            <p className={cx(styles.body, 'yw-body-lg-reg')}>
                                {intro.body}
                            </p>
                        )}
                    </div>
                )}
                <div
                    className={styles.row}
                    style={
                        { ['--_n' as string]: stats.length } as CSSProperties
                    }
                >
                    {stats.slice(0, 4).map((s) => (
                        <Stat
                            key={s.Value + s.Label}
                            {...s}
                            Type={Type}
                            countUp
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
