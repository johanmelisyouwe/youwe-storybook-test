import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import { Prose, type RichText } from '../../shared/prose'
import { CaseCard, type CaseCardProps } from '../../ui/case-card'
import { TabGroup } from '../../ui/tabs'
import styles from './content-tabs.module.css'

/*
  Content blocks/Content tabs (code block, for the v2 "Who we work with" section on Industry detail): kicker,
  title and intro, then a Tab group (WAI-ARIA tabs, arrow keys) with one panel per tab: rich text and,
  optionally, a related Case Card next to it. Desktop: text 7 / case 5 columns; mobile: stacked.
  CMS: tabs[] → { label, body (rich text), case? (a case entry mapped to Case Card props) }.
*/

export type ContentTab = {
    label: string
    body: RichText
    /** Related case next to the text */
    case?: CaseCardProps
}

export type ContentTabsProps = {
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    title: string
    intro?: RichText
    tabs: ContentTab[]
    /** Accessible name of the tab list (defaults to the title) */
    label?: string
}

export function ContentTabs({
    kicker,
    title,
    intro,
    tabs,
    label,
}: ContentTabsProps) {
    return (
        <section className={cx(block.root, styles.root)}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={cx(styles.head, block.reveal)}>
                    {kicker && (
                        <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                            {kicker}
                        </span>
                    )}
                    <h2 className="yw-heading-xl">{title}</h2>
                    {intro && (
                        <Prose className={cx(styles.intro, 'yw-body-md-reg')}>
                            {intro}
                        </Prose>
                    )}
                </div>
                <TabGroup
                    label={label ?? title}
                    {...{ 'Trailing action': false }}
                    tabs={tabs.map((t) => t.label)}
                    panels={tabs.map((t) => (
                        <div
                            key={t.label}
                            data-case={t.case ? '' : undefined}
                            className={styles.panel}
                        >
                            <Prose
                                className={cx(styles.body, 'yw-body-lg-reg')}
                            >
                                {t.body}
                            </Prose>
                            {t.case && (
                                <div className={styles.case}>
                                    <CaseCard {...t.case} Size="One third" />
                                </div>
                            )}
                        </div>
                    ))}
                />
            </div>
        </section>
    )
}
