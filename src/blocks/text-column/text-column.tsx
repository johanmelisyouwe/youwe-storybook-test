import { cx } from '../../shared/cx'
import { Prose, type RichText } from '../../shared/prose'
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

/** Long-form body: paragraphs (string[]) or CMS rich text (ReactNode), see shared/prose */
export function Body({ paragraphs }: { paragraphs: RichText }) {
    return (
        <Prose className={cx(styles['longform-body'], 'yw-body-lg-reg')}>
            {paragraphs}
        </Prose>
    )
}

export type TextColumnProps = {
    /** Figma: Alignment */
    Alignment?: 'Centered' | 'Left'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    lead: string
    /** Paragraphs, or CMS rich text (links, lists, bold, H3) */
    body: RichText
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
