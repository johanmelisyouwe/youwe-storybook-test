import type { CSSProperties, ReactNode } from 'react'
import { SectionIntro, type SectionIntroProps } from '../section-header'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './card-grid.module.css'

/* Content blocks/Card grid — Figma 26897:1361. Fill the cells with any card component. */

export type CardGridLayout =
    | '2 columns'
    | '3 columns'
    | '4 columns'
    | '5 columns'
    | 'Wide + 1'
    | '1 + Wide'
    | 'Feature + 4'
    | 'Feature + 2'
    | 'Overflow scroll'
const LAYOUT: Record<CardGridLayout, string | undefined> = {
    '2 columns': undefined,
    '3 columns': undefined,
    '4 columns': undefined,
    '5 columns': undefined,
    'Wide + 1': 'wide-1',
    '1 + Wide': '1-wide',
    'Feature + 4': 'feature-4',
    'Feature + 2': 'feature-2',
    'Overflow scroll': 'scroll',
}

export type CardGridProps = {
    /** Figma: Layout */
    Layout?: CardGridLayout
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Show intro — the Section intro on top */
    intro?: SectionIntroProps
    /** Figma: Cell 1–10 / Cards */
    cells: ReactNode[]
    label?: string
}

export function CardGrid({
    Layout = '3 columns',
    intro,
    cells,
    label,
}: CardGridProps) {
    const cols = parseInt(Layout, 10) || 3
    return (
        <section
            data-layout={LAYOUT[Layout]}
            className={cx(block.root, styles.root)}
            aria-label={label ?? intro?.Kicker}
        >
            <div className={cx(block.inner, styles.inner)}>
                {intro && (
                    <div className={styles.intro}>
                        <SectionIntro {...intro} />
                    </div>
                )}
                <ul
                    className={styles.grid}
                    style={{ ['--_cols' as string]: cols } as CSSProperties}
                    tabIndex={Layout === 'Overflow scroll' ? 0 : undefined}
                >
                    {cells.map((c, i) => (
                        <li
                            key={i}
                            style={
                                { ['--_i' as string]: i % 4 } as CSSProperties
                            }
                        >
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
