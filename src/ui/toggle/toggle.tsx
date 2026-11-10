import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './toggle.module.css'

/*
  Toggle — Figma node 15416:13125 (page "– Toggle"), handle = _Handle (15416:13163).
  A switch (role="switch"). Pass `label` for the accessible name, or aria-labelledby.
*/

export type ToggleSize = 'M' | 'L'

export type ToggleProps = {
    /** Figma: Size */
    Size?: ToggleSize
    /** Figma: Active */
    Active?: 'No' | 'Yes'
    label?: string
    'aria-labelledby'?: string
    disabled?: boolean
    onChange?: (active: boolean) => void
    className?: string
}

export function Toggle({
    Size = 'M',
    Active = 'No',
    label,
    disabled,
    onChange,
    className,
    ...aria
}: ToggleProps) {
    const on = Active === 'Yes'
    const icon = Size === 'L' ? 16 : 12
    return (
        <button
            type="button"
            role="switch"
            aria-checked={on}
            aria-label={label}
            disabled={disabled}
            onClick={() => onChange?.(!on)}
            data-size={Size.toLowerCase()}
            className={cx(styles.root, ring.root, className)}
            {...aria}
        >
            <span className={styles.handle} aria-hidden="true">
                <Icon
                    className={cx(styles.icon, styles['icon-off'])}
                    name="close-md"
                    size={icon}
                />
                <Icon
                    className={cx(styles.icon, styles['icon-on'])}
                    name="check"
                    size={icon}
                />
            </span>
        </button>
    )
}
