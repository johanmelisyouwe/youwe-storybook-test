import { Icon } from '../../shared/icons/icon'
import { Button } from '../button'
import { ButtonFilter } from '../button-filter'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './breadcrumbs.module.css'

/*
  Breadcrumbs — Figma Breadcrumbs/Desktop 18846:21440 and Breadcrumbs/Mobile 18703:12478 (page "Breadcrumbs").
  Links are _breadcrumb-link (15409:8869): State Rest / Active (current page) / Focused.
*/

export type Crumb = { label: string; href?: string }

export type BreadcrumbsProps = {
    /** Path from Home to the current page; the last item is the current page (State=Active) */
    items: Crumb[]
    /** Figma: two components, Breadcrumbs/Desktop and Breadcrumbs/Mobile */
    Device?: 'Desktop' | 'Mobile'
    /** Mobile only. Figma: Filter button */
    'Filter button'?: boolean
    onFilter?: () => void
    className?: string
    /** Story helper: class on every link (e.g. pseudo-focus-visible) */
    linkClassName?: string
}

export function Breadcrumbs({
    items,
    Device = 'Desktop',
    'Filter button': filter = true,
    onFilter,
    className,
    linkClassName,
}: BreadcrumbsProps) {
    if (Device === 'Mobile') {
        const parent = items[items.length - 2] ?? items[0]
        return (
            <nav
                aria-label="Breadcrumb"
                data-mobile
                className={cx(styles.root, className)}
            >
                <Button
                    Variant="Outline"
                    Icon="Leading"
                    Size="S"
                    iconName="chevron-left"
                    label={parent.label}
                    href={parent.href}
                />
                {filter && (
                    <ButtonFilter
                        Size="S"
                        label="Filter"
                        {...{ 'Active Filter': false }}
                        onClick={onFilter}
                    />
                )}
            </nav>
        )
    }
    return (
        <nav aria-label="Breadcrumb" className={cx(styles.root, className)}>
            <ol className={styles.list}>
                {items.map((c, i) => {
                    const current = i === items.length - 1
                    return (
                        <li
                            key={`${c.label}-${i}`}
                            className={cx(styles.item, 'yw-body-xs-reg')}
                        >
                            <a
                                className={cx(
                                    styles.link,
                                    ring.root,
                                    linkClassName
                                )}
                                href={c.href ?? '#'}
                                aria-current={current ? 'page' : undefined}
                            >
                                {i > 0 && (
                                    <span
                                        className={styles.chevron}
                                        aria-hidden="true"
                                    >
                                        <Icon name="chevron-right" size={16} />
                                    </span>
                                )}
                                <span className={styles.text}>{c.label}</span>
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
