import type { ReactNode } from 'react'
import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import styles from './list-item.module.css'

/* List Item — Figma node 26533:21001 (page "List Item"). Use inside <List>. */

export type ListItemProps = {
    /** Figma: Icon */
    Icon?: 'Bullet' | 'Check'
    /** Figma: Label */
    label: ReactNode
}

export function ListItem({ Icon: kind = 'Bullet', label }: ListItemProps) {
    return (
        <li className={cx(styles.root, 'yw-body-lg-reg')}>
            <span className={styles.icon} aria-hidden="true">
                {kind === 'Check' ? (
                    <Icon name="check" size={20} />
                ) : (
                    <span className={styles.bullet} />
                )}
            </span>
            <span>{label}</span>
        </li>
    )
}

export function List({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return <ul className={cx(styles.list, className)}>{children}</ul>
}
