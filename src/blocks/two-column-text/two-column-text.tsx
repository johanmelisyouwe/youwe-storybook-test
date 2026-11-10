import { Body, Lead } from '../text-column'
import '../../shared/block/block.css'
import '../text-column/text-column.css'

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
        <section className="yw-block yw-longform">
            <div className="yw-block__inner">
                <div
                    className={[
                        'yw-two-col',
                        'yw-block-reveal',
                        Split === '4/8' && 'yw-two-col--4-8',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <div className="yw-two-col__lead">
                        {label && (
                            <span className="yw-two-col__label yw-body-md-bold">
                                {label}
                            </span>
                        )}
                        <Lead>{lead}</Lead>
                    </div>
                    <div className="yw-two-col__body">
                        <Body paragraphs={body} />
                    </div>
                </div>
            </div>
        </section>
    )
}
