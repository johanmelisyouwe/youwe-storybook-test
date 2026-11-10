import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './button-filter.module.css'

/* Button/Filter — Figma node 7375:5158 (page "– Buttons"). Opens or applies filters; shows the active-filter count. */

export type ButtonFilterSize = 'M' | 'S' | 'L'

export type ButtonFilterProps = {
    /** Figma: Size */
    Size?: ButtonFilterSize
    /** Figma: Active Filter (shows the counter) */
    'Active Filter'?: boolean
    /** Number shown in the counter */
    count?: number
    label: string
    disabled?: boolean
    onClick?: () => void
    className?: string
    /** For a button that opens a filter panel */
    'aria-expanded'?: boolean
    'aria-controls'?: string
}

const TEXT = {
    L: 'yw-body-lg-med',
    M: 'yw-body-md-med',
    S: 'yw-body-sm-med',
} as const

export function ButtonFilter({
    Size = 'M',
    'Active Filter': active = true,
    count = 1,
    label,
    disabled,
    onClick,
    className,
    ...aria
}: ButtonFilterProps) {
    return (
        <button
            type="button"
            data-size={Size.toLowerCase()}
            className={cx(styles.root, ring.root, className)}
            disabled={disabled}
            onClick={onClick}
            {...aria}
        >
            <span className={styles.icon} aria-hidden="true">
                <Icon name="filter-tune" size={Size === 'S' ? 20 : 24} />
            </span>
            <span className={TEXT[Size]}>{label}</span>
            {active && (
                <span className={styles.counter}>
                    <span className={cx(styles.count, 'yw-body-xs-med')}>
                        {count}
                        <span className="yw-visually-hidden"> active</span>
                    </span>
                </span>
            )}
        </button>
    )
}
