import { useId, useState, type ChangeEvent } from 'react'
import { Icon } from '../../icons/Icon'
import { FieldShell, type FieldLabels, type FieldStatus } from '../Field/Field'

/*
  Text Input — Figma "Text Input/Static Labels" (6284:6276) and "Text Input/Floating Labels" (6394:3683),
  page "– Input/Text". Props follow the Figma property names.
  State in Figma = real behaviour here: Hover/Focused/Active are CSS, Filled = has a value,
  Success/Error = `status`, Disabled = `disabled`.
*/

export type TextInputProps = {
    /** Which Figma component: Static Labels or Floating Labels */
    Labels?: FieldLabels
    /** Figma: Label */
    Label: string
    /** Figma: Required */
    Required?: boolean
    /** Static: Figma Placeholder (boolean). Floating: Figma Placeholder axis (Yes = label stays up, placeholder shown) */
    Placeholder?: boolean
    /** The placeholder text */
    placeholderText?: string
    /** Figma: Hint */
    Hint?: boolean
    /** Figma: Hint text */
    'Hint text'?: string
    /** Figma: Suffix (search icon by default) */
    Suffix?: boolean
    status?: FieldStatus
    disabled?: boolean
    type?: 'text' | 'email' | 'tel' | 'url' | 'search' | 'password'
    name?: string
    autoComplete?: string
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    controlClassName?: string
}

export function TextInput({
    Labels = 'Static',
    Label,
    Required = false,
    Placeholder = true,
    placeholderText,
    Hint = false,
    'Hint text': hintText,
    Suffix = false,
    status,
    disabled,
    type = 'text',
    name,
    autoComplete,
    value,
    defaultValue,
    onChange,
    controlClassName,
}: TextInputProps) {
    const id = useId()
    const [inner, setInner] = useState(defaultValue ?? '')
    const v = value ?? inner
    const showPlaceholder = Placeholder && placeholderText
    return (
        <FieldShell
            labels={Labels}
            id={id}
            label={Label}
            required={Required}
            hint={Hint}
            hintText={hintText}
            status={status}
            disabled={disabled}
            floated={Labels === 'Floating' && Boolean(showPlaceholder)}
            controlClassName={controlClassName}
            trailing={
                Suffix ? (
                    <span className="yw-field__suffix" aria-hidden="true">
                        <Icon name="search" size={24} />
                    </span>
                ) : null
            }
        >
            <input
                id={id}
                className="yw-field__input yw-body-sm-reg"
                type={type}
                name={name}
                autoComplete={autoComplete}
                required={Required}
                disabled={disabled}
                aria-invalid={status === 'Error' || undefined}
                aria-describedby={Hint && hintText ? `${id}-hint` : undefined}
                placeholder={showPlaceholder ? placeholderText : ' '}
                value={v}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInner(e.target.value)
                    onChange?.(e.target.value)
                }}
            />
        </FieldShell>
    )
}
