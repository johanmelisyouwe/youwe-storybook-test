import type { ReactNode } from 'react'
import { Icon } from '../../shared/icons/icon'
import './list-item.css'

/* List Item — Figma node 26533:21001 (page "List Item"). Use inside <List>. */

export type ListItemProps = {
    /** Figma: Icon */
    Icon?: 'Bullet' | 'Check'
    /** Figma: Label */
    label: ReactNode
}

export function ListItem({ Icon: kind = 'Bullet', label }: ListItemProps) {
    return (
        <li className="yw-list-item yw-body-lg-reg">
            <span className="yw-list-item__icon" aria-hidden="true">
                {kind === 'Check' ? (
                    <Icon name="check" size={20} />
                ) : (
                    <span className="yw-list-item__bullet" />
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
    return (
        <ul className={['yw-list', className].filter(Boolean).join(' ')}>
            {children}
        </ul>
    )
}
