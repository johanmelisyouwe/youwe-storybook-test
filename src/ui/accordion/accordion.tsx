import type { ReactNode } from 'react'
import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './accordion.module.css'

/* Accordion — Figma node 18830:12898 (page "– Accordion"). Native <details>/<summary>, as the Figma Interaction line asks. */

export type AccordionProps = {
    /** Figma: Style */
    Style?: 'Caret' | 'Plus-Minus'
    /** Figma: Expanded (initial state) */
    Expanded?: 'No' | 'Yes'
    label: string
    /** Figma: Content slot */
    children: ReactNode
    name?: string
    className?: string
    summaryClassName?: string
}

export function Accordion({
    Style = 'Caret',
    Expanded = 'No',
    label,
    children,
    name,
    className,
    summaryClassName,
}: AccordionProps) {
    return (
        <details
            data-style={Style.toLowerCase()}
            className={cx(styles.root, className)}
            open={Expanded === 'Yes'}
            name={name}
        >
            <summary className={cx(styles.header, ring.root, summaryClassName)}>
                <span className={cx(styles.label, 'yw-body-lg-med')}>
                    {label}
                </span>
                {Style === 'Caret' ? (
                    <span className={styles.icon} aria-hidden="true">
                        <Icon name="chevron-down" size={24} />
                    </span>
                ) : (
                    <>
                        <span
                            className={cx(styles.icon, styles.iconClosed)}
                            aria-hidden="true"
                        >
                            <Icon name="add" size={24} />
                        </span>
                        <span
                            className={cx(styles.icon, styles.iconOpen)}
                            aria-hidden="true"
                        >
                            <Icon name="remove" size={24} />
                        </span>
                    </>
                )}
            </summary>
            <div className={cx(styles.content, 'yw-body-md-reg')}>
                {children}
            </div>
        </details>
    )
}
