import { Location, LocationList, type LocationProps } from '../../ui/location'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../accordion-list/accordion-list.module.css'

/* Content blocks/Offices — Figma 26799:617. Styles in AccordionList.css (batch 9 blocks). */

export type OfficesProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Show header */
    Kicker?: string
    Title?: string
    Body?: string
    offices: Omit<LocationProps, 'Device'>[]
}

export function Offices({
    Device = 'Desktop',
    Kicker,
    Title,
    Body,
    offices,
}: OfficesProps) {
    return (
        <section
            className={cx(block.root, styles.offices)}
            aria-label={Title ?? Kicker}
        >
            <div className={cx(block.inner, styles.inner)}>
                {(Kicker || Title) && (
                    <div className={cx(styles['offices-header'], block.reveal)}>
                        {Kicker && (
                            <span
                                className={cx(block.kicker, 'yw-body-sm-bold')}
                            >
                                {Kicker}
                            </span>
                        )}
                        <div className={styles['offices-row']}>
                            {Title && (
                                <h2 className="yw-heading-xl">{Title}</h2>
                            )}
                            {Body && <p className="yw-body-md-reg">{Body}</p>}
                        </div>
                    </div>
                )}
                <LocationList>
                    {offices.map((o) => (
                        <Location key={o.City} {...o} Device={Device} />
                    ))}
                </LocationList>
            </div>
        </section>
    )
}
