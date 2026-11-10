import {
    Location,
    LocationList,
    type LocationProps,
} from '../Location/Location'
import '../../shared/block.css'
import '../AccordionList/AccordionList.css'

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
        <section className="yw-block yw-offices" aria-label={Title ?? Kicker}>
            <div className="yw-block__inner">
                {(Kicker || Title) && (
                    <div className="yw-offices__header yw-block-reveal">
                        {Kicker && (
                            <span className="yw-kicker yw-body-sm-bold">
                                {Kicker}
                            </span>
                        )}
                        <div className="yw-offices__row">
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
