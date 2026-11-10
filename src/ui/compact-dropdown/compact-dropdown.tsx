import { useId } from 'react'
import { cx } from '../../shared/cx'
import { Icon } from '../../shared/icons/icon'
import type { FieldStatus } from '../field'
import field from '../field/field.module.css'
import styles from './compact-dropdown.module.css'

/*
  Dropdown/Compact — Figma 18597:11473 (State × Size; Hint). A small number picker without a label
  (e.g. "View max. [12] per page"). Native <select>, so the option list is the platform's own (Figma Active).
  Field states come from the shared field styles (field.module.css root/control/hint and its data-* states):
  hover, focus, filled, success, error, disabled.
*/

export type CompactDropdownProps = {
    /** Figma: Size — M 72×44, S 64×36 */
    Size?: 'M' | 'S'
    /** Figma: Hint */
    Hint?: boolean
    'Hint text'?: string
    options: (string | number)[]
    /** Empty choice shown until a value is picked (Figma Rest); omit to always show a value (Filled) */
    placeholder?: string
    value?: string | number
    defaultValue?: string | number
    onChange?: (value: string) => void
    status?: FieldStatus
    disabled?: boolean
    /** No visible label: name it with aria-label or aria-labelledby */
    'aria-label'?: string
    'aria-labelledby'?: string
    /** Story helper: pseudo-state classes on the control */
    controlClassName?: string
    className?: string
}

export function CompactDropdown({
    Size = 'M',
    Hint = false,
    'Hint text': hintText,
    options,
    placeholder,
    value,
    defaultValue,
    onChange,
    status,
    disabled,
    controlClassName,
    className,
    ...aria
}: CompactDropdownProps) {
    const hintId = useId()
    return (
        <span
            data-size={Size.toLowerCase()}
            data-success={status === 'Success' || undefined}
            data-error={status === 'Error' || undefined}
            data-disabled={disabled || undefined}
            className={cx(field.root, styles.root, className)}
        >
            <span
                className={cx(field.control, styles.control, controlClassName)}
            >
                <select
                    className={cx(styles.select, 'yw-body-md-reg')}
                    value={value}
                    defaultValue={
                        value === undefined
                            ? (defaultValue ??
                              (placeholder !== undefined ? '' : undefined))
                            : undefined
                    }
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={disabled}
                    aria-invalid={status === 'Error' || undefined}
                    aria-describedby={Hint && hintText ? hintId : undefined}
                    {...aria}
                >
                    {placeholder !== undefined && (
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                    )}
                    {options.map((o) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </select>
                <span className={styles.chevron}>
                    <Icon name="chevron-down" size={24} />
                </span>
            </span>
            {Hint && hintText && (
                <span id={hintId} className={cx(field.hint, 'yw-body-sm-reg')}>
                    {hintText}
                </span>
            )}
        </span>
    )
}
