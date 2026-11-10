import { cx } from '../../shared/cx'
import styles from './options-panel.module.css'

/* _Dropdown/Options — Figma 18505:21645. Listbox used by Dropdown, LocaleSelect and the Tab group menu. */

export type Option = { value: string; label: string; flag?: string }

export type OptionsPanelProps = {
    id: string
    options: Option[]
    selected?: string
    activeIndex?: number
    label?: string
    labelledBy?: string
    onSelect: (value: string) => void
    onHover?: (index: number) => void
    role?: 'listbox' | 'menu'
    className?: string
}

export function OptionsPanel({
    id,
    options,
    selected,
    activeIndex = -1,
    label,
    labelledBy,
    onSelect,
    onHover,
    role = 'listbox',
    className,
}: OptionsPanelProps) {
    const itemRole = role === 'menu' ? 'menuitem' : 'option'
    return (
        <ul
            className={cx(styles.root, className)}
            onClick={(e) => e.stopPropagation()}
            id={id}
            role={role}
            aria-label={label}
            aria-labelledby={labelledBy}
            tabIndex={-1}
        >
            {options.map((o, i) => (
                <li
                    key={o.value}
                    id={`${id}-${i}`}
                    role={itemRole}
                    aria-selected={
                        role === 'listbox' ? o.value === selected : undefined
                    }
                    data-active={i === activeIndex || undefined}
                    className={styles.option}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                        e.stopPropagation()
                        onSelect(o.value)
                    }}
                    onMouseEnter={() => onHover?.(i)}
                >
                    {o.flag && (
                        <img
                            className={styles.flag}
                            src={o.flag}
                            alt=""
                            width={22}
                            height={16}
                        />
                    )}
                    <span className="yw-body-md-reg">{o.label}</span>
                </li>
            ))}
        </ul>
    )
}
