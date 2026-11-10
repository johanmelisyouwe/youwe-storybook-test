import { useId, useState } from 'react'
import { FieldShell, type FieldLabels, type FieldStatus } from '../field'
import './text-area.css'

/*
  Text Area — Figma "Text Area/Static Label" (18505:19110) and "Text Area/Floating Labels" (18505:19469),
  page "– Input/Text Area". Same state model as Text Input.
*/

export type TextAreaProps = {
    Labels?: FieldLabels
    /** Figma: Label */
    Label: string
    /** Figma: Required */
    Required?: boolean
    /** Static: Figma Placeholder (boolean). Floating: Figma Placeholder axis */
    Placeholder?: boolean
    placeholderText?: string
    /** Figma: Hint */
    Hint?: boolean
    /** Figma: Hint text */
    'Hint text'?: string
    status?: FieldStatus
    disabled?: boolean
    name?: string
    rows?: number
    value?: string
    defaultValue?: string
    onChange?: (value: string) => void
    controlClassName?: string
}

export function TextArea({
    Labels = 'Static',
    Label,
    Required = false,
    Placeholder = true,
    placeholderText,
    Hint = false,
    'Hint text': hintText,
    status,
    disabled,
    name,
    rows = 4,
    value,
    defaultValue,
    onChange,
    controlClassName,
}: TextAreaProps) {
    const id = useId()
    const [inner, setInner] = useState(defaultValue ?? '')
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
            className="yw-textarea"
        >
            <textarea
                id={id}
                className="yw-field__input yw-body-md-reg"
                name={name}
                rows={rows}
                required={Required}
                disabled={disabled}
                aria-invalid={status === 'Error' || undefined}
                aria-describedby={Hint && hintText ? `${id}-hint` : undefined}
                placeholder={showPlaceholder ? placeholderText : ' '}
                value={value ?? inner}
                onChange={(e) => {
                    setInner(e.target.value)
                    onChange?.(e.target.value)
                }}
            />
        </FieldShell>
    )
}
