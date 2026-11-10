import '../../shared/block/block.css'
import './text-column.css'

/* Content blocks/Text column — Figma 24988:596. Also exports the shared long-form pieces. */

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

export function Lead({ children }: { children: string }) {
    return <p className="yw-longform__lead yw-body-2xl-med">{children}</p>
}

export function Body({ paragraphs }: { paragraphs: string[] }) {
    return (
        <div className="yw-longform__body yw-body-lg-reg">
            {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </div>
    )
}

export type TextColumnProps = {
    /** Figma: Alignment */
    Alignment?: 'Centered' | 'Left'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    lead: string
    body: string[]
}

export function TextColumn({
    Alignment = 'Centered',
    lead,
    body,
}: TextColumnProps) {
    return (
        <section
            className={cx(
                'yw-block',
                'yw-longform',
                'yw-text-column',
                Alignment === 'Centered' && 'yw-text-column--centered'
            )}
        >
            <div className="yw-block__inner">
                <div className="yw-text-column__text yw-block-reveal">
                    <Lead>{lead}</Lead>
                    <Body paragraphs={body} />
                </div>
            </div>
        </section>
    )
}
