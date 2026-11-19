import type { ReactNode } from 'react'
import { AnchorNav, type ANCHOR_NAV_LABELS } from '../../ui/anchor-nav'
import { Accordion } from '../../ui/accordion'
import { FeatureCard } from '../../ui/feature-card'
import { Prose, type RichText } from '../../shared/prose'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import stats from '../stats-block/stats-block.module.css'
import styles from './article.module.css'

/*
  Content blocks/Article (code block, not in Figma; added 19 November for the long-form insight pages).
  The body of an article: a sticky "On this page" Anchor nav in the left column (4 of 12) and the
  sections in a reading column on the right (740, like the Case intro text). Each section has an id
  (the nav links to it), an H2 and rich text, plus optional numbered steps (Feature Card Plain, as in
  Feature list Split), FAQ accordions (as in Accordion list) or any other content.
  Mobile: one column; the nav is a collapsed "On this page" disclosure above the sections.
*/

export type ArticleSection = {
    /** Anchor id (the nav links to #id) */
    id: string
    /** Short label in the nav; defaults to the heading */
    nav?: string
    /** Small brand label above the heading */
    kicker?: string
    heading: string
    /** Paragraphs, or CMS rich text (lists, bold, quotes, H3, links) */
    body?: RichText
    /** Numbered steps under the body */
    steps?: { Title: string; Description: string }[]
    /** FAQ accordions under the body (the first one is open) */
    faq?: { label: string; content: RichText }[]
    /** Anything else under the body, e.g. a Case Card */
    children?: ReactNode
}

export type ArticleProps = {
    /** Figma-style Device (layout also follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    sections: ArticleSection[]
    /** Show the "On this page" nav (default true) */
    nav?: boolean
    /** UI text, for translations: { ...ANCHOR_NAV_LABELS } */
    labels?: Partial<typeof ANCHOR_NAV_LABELS>
}

export function Article({
    Device = 'Desktop',
    sections,
    nav = true,
    labels,
}: ArticleProps) {
    return (
        <div
            data-nav={nav || undefined}
            className={cx(block.root, styles.root)}
        >
            <div className={cx(block.inner, styles.inner)}>
                {nav && (
                    <aside className={styles.aside}>
                        <AnchorNav
                            Device={Device}
                            labels={labels}
                            items={sections.map((s) => ({
                                id: s.id,
                                label: s.nav ?? s.heading,
                            }))}
                            className={styles.nav}
                        />
                    </aside>
                )}
                <div className={styles.content}>
                    {sections.map((s) => (
                        <section
                            key={s.id}
                            id={s.id}
                            aria-labelledby={`${s.id}-h`}
                            className={cx(styles.section, block.reveal)}
                        >
                            <div className={styles.head}>
                                {s.kicker && (
                                    <span
                                        className={cx(
                                            styles.kicker,
                                            'yw-body-sm-bold'
                                        )}
                                    >
                                        {s.kicker}
                                    </span>
                                )}
                                <h2 id={`${s.id}-h`} className="yw-heading-lg">
                                    {s.heading}
                                </h2>
                            </div>
                            {s.body && (
                                <Prose
                                    className={cx(
                                        styles.body,
                                        'yw-body-lg-reg'
                                    )}
                                >
                                    {s.body}
                                </Prose>
                            )}
                            {s.steps && (
                                <ol className={stats['feature-list-items']}>
                                    {s.steps.map((it, i) => (
                                        <li key={it.Title}>
                                            <FeatureCard
                                                {...it}
                                                Variant="Plain"
                                                Number={String(i + 1).padStart(
                                                    2,
                                                    '0'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            )}
                            {s.faq && (
                                <div className={styles.faq}>
                                    {s.faq.map((it, i) => (
                                        <Accordion
                                            key={it.label}
                                            Style="Plus-Minus"
                                            Expanded={i === 0 ? 'Yes' : 'No'}
                                            label={it.label}
                                        >
                                            <Prose>{it.content}</Prose>
                                        </Accordion>
                                    ))}
                                </div>
                            )}
                            {s.children}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}
