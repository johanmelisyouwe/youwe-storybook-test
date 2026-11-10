import type { CSSProperties } from 'react'
import { Stat, type StatProps } from '../../ui/stat'
import '../../shared/block/block.css'
import './stats-block.css'

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
        <section className="yw-block yw-stats-block" aria-label={intro?.kicker}>
            <div className="yw-block__inner">
                {intro && (
                    <div className="yw-stats-block__intro yw-block-reveal">
                        {intro.kicker && (
                            <span className="yw-kicker yw-body-sm-bold">
                                {intro.kicker}
                            </span>
                        )}
                        <h2 className="yw-heading-2xl">{intro.title}</h2>
                        {intro.body && (
                            <p className="yw-stats-block__body yw-body-lg-reg">
                                {intro.body}
                            </p>
                        )}
                    </div>
                )}
                <div
                    className="yw-stats-block__row"
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
