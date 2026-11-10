import type { ReactNode } from 'react'
import { cx } from '../../shared/cx'
import styles from './field.module.css'

/*
  Shared building block for the Figma input components (label, required mark, control, hint).
  Not a Figma component itself: Text Input, Text Area, Phone Input and Dropdown are built on it.
*/

export type FieldLabels = 'Static' | 'Floating'
export type FieldStatus = 'Success' | 'Error'

export type FieldShellProps = {
    labels: FieldLabels
    id: string
    label: string
    required?: boolean
    hint?: boolean
    hintText?: string
    status?: FieldStatus
    disabled?: boolean
    /** Floating label stays up (focused, filled or showing a placeholder) */
    floated?: boolean
    filled?: boolean
    /** A popup (dropdown list) belonging to the control is open */
    open?: boolean
    /** Extra class on the control (pseudo-state previews in stories) */
    controlClassName?: string
    /** Label text style for the static title (Figma differs per component) */
    titleClass?: string
    onControlClick?: () => void
    /** Rendered at the end of the control, outside the floating-label stack (suffix, chevron) */
    trailing?: ReactNode
    children: ReactNode
    className?: string
}

export function FieldShell({
    labels,
    id,
    label,
    required,
    hint,
    hintText,
    status,
    disabled,
    floated,
    filled,
    open,
    controlClassName,
    titleClass = 'yw-body-sm-med',
    onControlClick,
    trailing,
    children,
    className,
}: FieldShellProps) {
    const hintId = hint && hintText ? `${id}-hint` : undefined
    const req = required ? (
        <span
            className={[
                styles.required,
                labels === 'Static' ? 'yw-body-sm-bold' : '',
            ].join(' ')}
            aria-hidden="true"
        >
            *
        </span>
    ) : null
    return (
        <div
            data-labels={labels.toLowerCase()}
            data-success={status === 'Success' || undefined}
            data-error={status === 'Error' || undefined}
            data-disabled={disabled || undefined}
            data-floated={floated || undefined}
            data-filled={filled || undefined}
            data-open={open || undefined}
            className={cx(styles.root, className)}
            data-hint-id={hintId}
        >
            {labels === 'Static' && (
                <label className={styles.title} htmlFor={id}>
                    <span className={titleClass}>{label}</span>
                    {req}
                </label>
            )}
            <div
                className={cx(styles.control, controlClassName)}
                onClick={onControlClick}
            >
                {labels === 'Floating' ? (
                    <span className={styles.stack}>
                        <label className={styles.floatLabel} htmlFor={id}>
                            <span>{label}</span>
                            {req}
                        </label>
                        {children}
                    </span>
                ) : (
                    children
                )}
                {trailing}
            </div>
            {hint && hintText && (
                <p
                    id={hintId}
                    className={cx(styles.hint, 'yw-body-sm-reg')}
                    role={status === 'Error' ? 'alert' : undefined}
                >
                    {hintText}
                </p>
            )}
        </div>
    )
}
