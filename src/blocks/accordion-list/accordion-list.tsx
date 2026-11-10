import type { ReactNode } from 'react'
import { Accordion } from '../../ui/accordion'
import { Button } from '../../ui/button'
import { List, ListItem } from '../../ui/list-item'
import { Words } from '../section-header'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './accordion-list.module.css'
import stats from '../stats-block/stats-block.module.css'

/* Content blocks/Accordion list — Figma 26534:21312. */

export type AccordionListProps = {
    /** Figma: Layout */
    Layout?: 'Stacked' | 'Split' | 'Split list'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    heading: string
    body?: string
    /** Split list: bullets under the header */
    bullets?: string[]
    /** Split layouts: title above the accordions */
    'Accordion title'?: string
    items: { label: string; content: ReactNode }[]
    /** Figma: Show CTA */
    cta?: {
        title: string
        body: string
        button: { label: string; href: string }
    }
}

export function AccordionList({
    Layout = 'Stacked',
    kicker,
    heading,
    body,
    bullets,
    'Accordion title': faqTitle = 'Frequently asked questions',
    items,
    cta,
}: AccordionListProps) {
    const head = (
        <div className={stats.featureListHead}>
            {kicker && (
                <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                    {kicker}
                </span>
            )}
            <h2 className="yw-heading-xl">
                <Words text={heading} />
            </h2>
            {body && <p className="yw-body-md-reg">{body}</p>}
        </div>
    )
    const ctaEl = cta && (
        <div className={cx(styles.cta, block.reveal)}>
            <div className={styles.ctaText}>
                <span className="yw-body-xl-med">{cta.title}</span>
                <p className="yw-body-md-reg">{cta.body}</p>
            </div>
            <Button
                Variant="Primary"
                Size="M"
                label={cta.button.label}
                href={cta.button.href}
            />
        </div>
    )
    const list = (
        <div className={styles.items}>
            {items.map((it, i) => (
                <Accordion
                    key={it.label}
                    Style="Plus-Minus"
                    Expanded={i === 0 ? 'Yes' : 'No'}
                    label={it.label}
                    className={block.reveal}
                >
                    {it.content}
                </Accordion>
            ))}
        </div>
    )
    if (Layout === 'Stacked') {
        return (
            <section className={cx(block.root, styles.root)}>
                <div className={cx(block.inner, styles.inner)}>
                    {head}
                    {list}
                    {ctaEl}
                </div>
            </section>
        )
    }
    return (
        <section data-layout="split" className={cx(block.root, styles.root)}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles.intro}>
                    {head}
                    {Layout === 'Split list' && bullets && (
                        <List>
                            {bullets.map((b) => (
                                <ListItem key={b} label={b} />
                            ))}
                        </List>
                    )}
                    {ctaEl}
                </div>
                <div className={styles.faq}>
                    <h3 className="yw-heading-lg">{faqTitle}</h3>
                    {list}
                </div>
            </div>
        </section>
    )
}
