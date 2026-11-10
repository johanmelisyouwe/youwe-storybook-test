import type { ReactNode } from 'react'
import { Accordion } from '../Accordion/Accordion'
import { Button } from '../Button/Button'
import { List, ListItem } from '../ListItem/ListItem'
import { Words } from '../SectionHeader/SectionHeader'
import '../../shared/block.css'
import '../StatsBlock/StatsBlock.css'
import './AccordionList.css'

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
        <div className="yw-feature-list__head">
            {kicker && (
                <span className="yw-kicker yw-body-sm-bold">{kicker}</span>
            )}
            <h2 className="yw-heading-xl">
                <Words text={heading} />
            </h2>
            {body && <p className="yw-body-md-reg">{body}</p>}
        </div>
    )
    const ctaEl = cta && (
        <div className="yw-acc-list__cta yw-block-reveal">
            <div className="yw-acc-list__cta-text">
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
        <div className="yw-acc-list__items">
            {items.map((it, i) => (
                <Accordion
                    key={it.label}
                    Style="Plus-Minus"
                    Expanded={i === 0 ? 'Yes' : 'No'}
                    label={it.label}
                    className="yw-block-reveal"
                >
                    {it.content}
                </Accordion>
            ))}
        </div>
    )
    if (Layout === 'Stacked') {
        return (
            <section className="yw-block yw-acc-list">
                <div className="yw-block__inner">
                    {head}
                    {list}
                    {ctaEl}
                </div>
            </section>
        )
    }
    return (
        <section className="yw-block yw-acc-list yw-acc-list--split">
            <div className="yw-block__inner">
                <div className="yw-acc-list__intro">
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
                <div className="yw-acc-list__faq">
                    <h3 className="yw-heading-lg">{faqTitle}</h3>
                    {list}
                </div>
            </div>
        </section>
    )
}
