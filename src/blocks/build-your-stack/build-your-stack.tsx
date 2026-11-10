import { useState } from 'react'
import { TabGroup } from '../../ui/tabs'
import {
    TechnologyCard,
    type TechnologyCardProps,
} from '../../ui/technology-card'
import { CaseCard, type CaseCardProps } from '../../ui/case-card'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../accordion-list/accordion-list.module.css'

/* Content blocks/Build your stack — Figma 26851:1491. Styles in AccordionList.css (batch 9 blocks). */

export type StackGoal = {
    /** Tab label, e.g. "Sell B2B online" */
    label: string
    /** e.g. "05  Drive revenue" */
    system?: string
    intro?: string
    partners?: TechnologyCardProps[]
    case?: CaseCardProps
}

export type BuildYourStackProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker: string
    title: string
    body: string
    goals: StackGoal[]
    /** Initially selected goal */
    selected?: number
}

export function BuildYourStack({
    kicker,
    title,
    body,
    goals,
    selected = 0,
}: BuildYourStackProps) {
    const [tab, setTab] = useState(selected)
    return (
        <section className={cx(block.root, styles.stack)} aria-label={title}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles['stack-header']}>
                    <h2 className={styles['stack-title']}>
                        <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                            {kicker}
                        </span>
                        <span className="yw-heading-xl">{title}</span>
                    </h2>
                    <p className="yw-body-md-reg">{body}</p>
                </div>
                <TabGroup
                    label="Goals"
                    tabs={goals.map((g) => g.label)}
                    {...{ 'Trailing action': false }}
                    selected={tab}
                    onChange={setTab}
                    panels={goals.map((g) => (
                        <div key={g.label} className={styles['stack-goal']}>
                            <div className={styles['stack-goal-intro']}>
                                {g.system && (
                                    <span
                                        className={cx(
                                            styles['stack-system'],
                                            'yw-body-xs-bold'
                                        )}
                                    >
                                        {g.system}
                                    </span>
                                )}
                                {g.intro && (
                                    <p className="yw-body-lg-reg">{g.intro}</p>
                                )}
                            </div>
                            {g.partners && (
                                <ul className={styles['stack-partners']}>
                                    {g.partners.map((p) => (
                                        <li key={p.Name}>
                                            <TechnologyCard
                                                {...p}
                                                Layout="Vertical"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {g.case && <CaseCard {...g.case} Size="Full" />}
                        </div>
                    ))}
                />
            </div>
        </section>
    )
}
