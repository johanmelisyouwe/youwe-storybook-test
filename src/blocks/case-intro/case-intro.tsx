import { Body, Lead } from '../text-column'
import '../../shared/block/block.css'
import '../text-column/text-column.css'

/* Content blocks/Case intro — Figma 24988:571. Styles in TextColumn.css (shared long-form). */

export type CaseIntroProps = {
    /** Figma: Meta position */
    'Meta position'?: 'Left' | 'Right'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** e.g. Platforms / Role / Solution */
    meta: { label: string; value: string }[]
    lead: string
    body: string[]
}

export function CaseIntro({
    'Meta position': pos = 'Left',
    meta,
    lead,
    body,
}: CaseIntroProps) {
    return (
        <section className="yw-block yw-longform">
            <div className="yw-block__inner">
                <div
                    className={[
                        'yw-case-intro',
                        'yw-block-reveal',
                        pos === 'Right' && 'yw-case-intro--meta-right',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <dl className="yw-case-intro__meta">
                        {meta.map((m) => (
                            <div key={m.label} className="yw-case-intro__item">
                                <dt className="yw-body-xs-bold">{m.label}</dt>
                                <dd className="yw-body-md-reg">{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="yw-case-intro__text">
                        <Lead>{lead}</Lead>
                        <Body paragraphs={body} />
                    </div>
                </div>
            </div>
        </section>
    )
}
