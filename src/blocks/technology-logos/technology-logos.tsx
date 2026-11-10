import type { CSSProperties, ReactNode } from 'react'
import { Button } from '../../ui/button'
import { GiantRows } from '../statement'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './technology-logos.module.css'

/* Content blocks/Technology logos — Figma 26851:1733. */

export type TechLogo = { name: string; logo?: ReactNode } | null

export type TechnologyLogosProps = {
    /** Figma: Layout */
    Layout?: 'Default' | 'Grid 6' | 'Grid 4' | 'Grid 5' | 'Grid 8'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    Title: string
    /** Figma: Body (Show body) */
    Body?: string
    /** Default layout: the giant drifting rows */
    rows?: string[]
    /** Logo slots; null = empty slot (keeps its space, no border) */
    logos: TechLogo[]
    /** Figma: Show button */
    button?: { label: string; href: string }
}

export function TechnologyLogos({
    Layout = 'Grid 6',
    Title,
    Body,
    rows,
    logos,
    button,
}: TechnologyLogosProps) {
    const isDefault = Layout === 'Default'
    const n = isDefault ? 6 : parseInt(Layout.replace('Grid ', ''), 10)
    return (
        <section
            data-default={isDefault || undefined}
            className={cx(block.root, styles.root)}
            aria-label={Title}
        >
            {isDefault && rows && rows.length > 0 && (
                <GiantRows
                    rows={rows.map((t, i) => ({
                        text: t,
                        style: i % 2 ? 'outline' : 'solid',
                    }))}
                />
            )}
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles.text}>
                    <h2
                        className={
                            isDefault ? 'yw-heading-lg' : 'yw-heading-xl'
                        }
                    >
                        {Title}
                    </h2>
                    {Body && (
                        <p
                            className={
                                isDefault ? 'yw-body-lg-reg' : 'yw-body-md-reg'
                            }
                        >
                            {Body}
                        </p>
                    )}
                </div>
                <ul
                    data-stagger
                    className={styles.grid}
                    style={{ ['--_n' as string]: n } as CSSProperties}
                >
                    {logos.map((l, i) => (
                        <li
                            key={i}
                            data-empty={!l || undefined}
                            style={
                                { ['--_i' as string]: i % n } as CSSProperties
                            }
                        >
                            {l &&
                                (l.logo ?? (
                                    <span className="yw-body-md-bold">
                                        {l.name}
                                    </span>
                                ))}
                        </li>
                    ))}
                </ul>
                {button && (
                    <Button
                        Variant="Outline"
                        Size="M"
                        label={button.label}
                        href={button.href}
                    />
                )}
            </div>
        </section>
    )
}
