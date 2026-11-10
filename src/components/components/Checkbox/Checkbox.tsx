import { useEffect, useRef } from 'react'
import { Icon } from '../../icons/Icon'
import './Checkbox.css'

/*
  Checkbox — Figma node 15432:8660, and Checkbox label — 15432:8734 (page "– Checkbox").
  A real <input type="checkbox"> drawn as the Figma box. Use CheckboxLabel for the labelled version,
  or give Checkbox an aria-label when it stands alone.
*/

export type CheckboxSize = 'S' | 'M' | 'L'
const ICON: Record<CheckboxSize, number> = { S: 16, M: 24, L: 32 }

export type CheckboxProps = {
    /** Figma: Size */
    Size?: CheckboxSize
    /** Figma: Active */
    Active?: 'No' | 'Yes'
    /** Figma: State=Indeterminate (only with Active=Yes) */
    indeterminate?: boolean
    disabled?: boolean
    name?: string
    value?: string
    'aria-label'?: string
    onChange?: (checked: boolean) => void
    className?: string
    /** Extra class on the <input> (e.g. pseudo-state classes in stories) */
    inputClassName?: string
}

export function Checkbox({
    Size = 'M',
    Active = 'No',
    indeterminate = false,
    disabled,
    className,
    inputClassName,
    onChange,
    ...rest
}: CheckboxProps) {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (ref.current) ref.current.indeterminate = indeterminate
    }, [indeterminate])
    return (
        <span
            className={[
                'yw-checkbox',
                `yw-checkbox--${Size.toLowerCase()}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <input
                ref={ref}
                type="checkbox"
                className={['yw-checkbox__input', inputClassName]
                    .filter(Boolean)
                    .join(' ')}
                checked={Active === 'Yes'}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.checked)}
                {...rest}
            />
            <span className="yw-checkbox__box" aria-hidden="true">
                <Icon
                    className="yw-checkbox__icon yw-checkbox__icon--check"
                    name="check"
                    size={ICON[Size]}
                />
                <Icon
                    className="yw-checkbox__icon yw-checkbox__icon--remove"
                    name="remove"
                    size={ICON[Size]}
                />
            </span>
        </span>
    )
}

const TEXT: Record<CheckboxSize, string> = {
    S: 'yw-body-md-reg',
    M: 'yw-body-lg-reg',
    L: 'yw-body-xl-reg',
}

export type CheckboxLabelProps = Omit<
    CheckboxProps,
    'aria-label' | 'indeterminate'
> & { label: string }

/** Checkbox label — Figma node 15432:8734 */
export function CheckboxLabel({
    label,
    Size = 'M',
    className,
    ...props
}: CheckboxLabelProps) {
    return (
        <label
            className={[
                'yw-checkbox-label',
                `yw-checkbox-label--${Size.toLowerCase()}`,
            ].join(' ')}
        >
            <Checkbox Size={Size} className={className} {...props} />
            <span className={TEXT[Size]}>{label}</span>
        </label>
    )
}
