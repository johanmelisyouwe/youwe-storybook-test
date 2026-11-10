import './Radio.css'

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
            className={[
                'yw-radio',
                `yw-radio--${Size.toLowerCase()}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <input
                type="radio"
                className={['yw-radio__input', inputClassName]
                    .filter(Boolean)
                    .join(' ')}
                checked={checked}
                disabled={disabled}
                value={value}
                onChange={() => onChange?.(value)}
                {...rest}
            />
            <span className="yw-radio__circle" aria-hidden="true" />
        </span>
    )
}

export type RadioLabelProps = Omit<RadioProps, 'Size' | 'aria-label'> & {
    label: string
}

/** Radio button label — Figma node 14649:9859 (one size, M) */
export function RadioLabel({ label, ...props }: RadioLabelProps) {
    return (
        <label className="yw-radio-label">
            <Radio Size="M" {...props} />
            <span className="yw-body-md-reg">{label}</span>
        </label>
    )
}
