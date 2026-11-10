import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './text-column.module.css'

/* Content blocks/Text column — Figma 24988:596. Also exports the shared long-form pieces. */

export function Lead({ children }: { children: string }) {
    return (
        <p className={cx(styles['longform-lead'], 'yw-body-2xl-med')}>
            {children}
        </p>
    )
}

export function Body({ paragraphs }: { paragraphs: string[] }) {
    return (
        <div className={cx(styles['longform-body'], 'yw-body-lg-reg')}>
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
            data-centered={Alignment === 'Centered' || undefined}
            className={cx(block.root, styles.longform, styles.root)}
        >
            <div className={block.inner}>
                <div className={cx(styles.text, block.reveal)}>
                    <Lead>{lead}</Lead>
                    <Body paragraphs={body} />
                </div>
            </div>
        </section>
    )
}
