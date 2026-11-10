import { cx } from '../../shared/cx'
import styles from './radio.module.css'

/*
  Radio button — Figma node 14649:9792, Radio button label — 14649:9859 (page "– Radio Button").
  A real <input type="radio">. Group radios with the same `name`, or use RadioGroup.
*/

export type RadioSize = 'M' | 'L'

export type RadioProps = {
    /** Figma: Size */
    Size?: RadioSize
    /** Selected (Figma State=Active…) */
    checked?: boolean
    disabled?: boolean
    name?: string
    value?: string
    'aria-label'?: string
    onChange?: (value: string | undefined) => void
    className?: string
    /** Extra class on the <input> (e.g. pseudo-state classes in stories) */
    inputClassName?: string
}

export function Radio({
    Size = 'M',
    checked = false,
    disabled,
    className,
    inputClassName,
    onChange,
    value,
    ...rest
}: RadioProps) {
    return (
        <span
            data-size={Size.toLowerCase()}
            className={cx(styles.root, className)}
        >
            <input
                type="radio"
                className={cx(styles.input, inputClassName)}
                checked={checked}
                disabled={disabled}
                value={value}
                onChange={() => onChange?.(value)}
                {...rest}
            />
            <span className={styles.circle} aria-hidden="true" />
        </span>
    )
}

export type RadioLabelProps = Omit<RadioProps, 'Size' | 'aria-label'> & {
    label: string
}

/** Radio button label — Figma node 14649:9859 (one size, M) */
export function RadioLabel({ label, ...props }: RadioLabelProps) {
    return (
        <label className={styles.radioLabel}>
            <Radio Size="M" {...props} />
            <span className="yw-body-md-reg">{label}</span>
        </label>
    )
}
