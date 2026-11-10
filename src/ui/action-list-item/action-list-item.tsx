import { useId, useState, type ReactNode } from 'react'
import { Icon, type IconName } from '../../shared/icons/icon'
import { Checkbox } from '../checkbox'
import { Toggle } from '../toggle'
import { Radio } from '../radio'
import { cx } from '../../shared/cx'
import styles from './action-list-item.module.css'
import ring from '../../shared/focus-ring/focus-ring.module.css'

/*
  Action List Item — Figma node 18788:17600 (page "Action List").
  Single row in an action list, for navigation or selectable actions (Figma description).
  - Icon / no control: rendered as a link (href) or button (onClick).
  - Checkbox / Toggle / Radio button: rendered as a <label> around the control, so the whole row toggles it.
*/

export type ActionElement = 'Icon' | 'Checkbox' | 'Toggle' | 'Radio button'

export type ActionListItemProps = {
    label: string
    /** Figma: Supporting Text (shown when Show supporting text) */
    'Supporting Text'?: string
    /** Figma: Show results counter — the counter text, e.g. "100+" */
    counter?: string
    /** Figma: Show leading element + _Leading element/Element */
    leading?: ActionElement
    /** Figma: Show trailing element + _Trailing element/Element */
    trailing?: ActionElement
    leadingIcon?: IconName
    trailingIcon?: IconName
    /** Figma: Show divider */
    'Show divider'?: boolean
    /** For Checkbox / Toggle / Radio button elements */
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
    /** Radio group name */
    name?: string
    href?: string
    onClick?: () => void
    className?: string
}

const isControl = (e?: ActionElement) =>
    e === 'Checkbox' || e === 'Toggle' || e === 'Radio button'

export function ActionListItem({
    label,
    'Supporting Text': support,
    counter,
    leading = 'Icon',
    trailing = 'Icon',
    leadingIcon = 'account-circle',
    trailingIcon = 'chevron-right',
    'Show divider': divider = true,
    checked: checkedProp,
    onCheckedChange,
    name,
    href,
    onClick,
    className,
}: ActionListItemProps) {
    const labelId = useId()
    const [own, setOwn] = useState(false)
    const checked = checkedProp ?? own
    const set = (v: boolean) => {
        setOwn(v)
        onCheckedChange?.(v)
    }

    const element = (
        e: ActionElement | undefined,
        icon: IconName
    ): ReactNode => {
        switch (e) {
            case 'Icon':
                return (
                    <span className={styles.icon} aria-hidden="true">
                        <Icon name={icon} size={24} />
                    </span>
                )
            case 'Checkbox':
                return (
                    <Checkbox
                        Size="M"
                        Active={checked ? 'Yes' : 'No'}
                        onChange={set}
                    />
                )
            case 'Toggle':
                return (
                    <Toggle
                        Size="M"
                        Active={checked ? 'Yes' : 'No'}
                        onChange={set}
                        aria-labelledby={labelId}
                    />
                )
            case 'Radio button':
                return (
                    <Radio
                        Size="M"
                        checked={checked}
                        name={name}
                        onChange={() => set(true)}
                    />
                )
            default:
                return null
        }
    }

    const inner = (
        <>
            {leading && (
                <span className={styles.lead}>
                    {element(leading, leadingIcon)}
                </span>
            )}
            <span className={styles.body}>
                <span id={labelId} className="yw-body-md-reg">
                    {label}
                </span>
                {support && (
                    <span className={cx(styles.support, 'yw-body-sm-reg')}>
                        {support}
                    </span>
                )}
            </span>
            {(counter || trailing) && (
                <span className={styles.trail}>
                    {counter && (
                        <span className={cx(styles.count, 'yw-body-xs-reg')}>
                            {counter}
                        </span>
                    )}
                    {element(trailing, trailingIcon)}
                </span>
            )}
        </>
    )

    const attrs = {
        className: cx(styles.root, className),
        'data-divider': divider || undefined,
    }
    let row: ReactNode
    if (isControl(leading) || isControl(trailing))
        row = <label {...attrs}>{inner}</label>
    else if (href)
        row = (
            <a
                {...attrs}
                className={cx(attrs.className, ring.root)}
                href={href}
            >
                {inner}
            </a>
        )
    else
        row = (
            <button
                type="button"
                {...attrs}
                className={cx(attrs.className, ring.root)}
                onClick={onClick}
            >
                {inner}
            </button>
        )
    return <li>{row}</li>
}

export function ActionList({
    children,
    label,
}: {
    children: ReactNode
    label?: string
}) {
    return (
        <ul className={styles.actionList} aria-label={label}>
            {children}
        </ul>
    )
}
