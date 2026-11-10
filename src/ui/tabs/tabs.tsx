import {
    useId,
    useLayoutEffect,
    useRef,
    useState,
    type KeyboardEvent,
    type ReactNode,
} from 'react'
import { Button } from '../button'
import { OptionsPanel, type Option } from '../options-panel'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './tabs.module.css'

/*
  Tab — Figma 15713:6093, Tab group — 15715:6340, _Trailing action — 15797:7280 (page "– Tabs").
  TabGroup implements WAI-ARIA tabs: roving tabindex, Arrow Left/Right, Home, End (Figma Interaction line).
*/

export type TabProps = {
    label: string
    selected?: boolean
    disabled?: boolean
    id?: string
    controls?: string
    tabIndex?: number
    onClick?: () => void
    onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void
    className?: string
    buttonRef?: (el: HTMLButtonElement | null) => void
}

export function Tab({
    label,
    selected = false,
    disabled,
    id,
    controls,
    tabIndex,
    onClick,
    onKeyDown,
    className,
    buttonRef,
}: TabProps) {
    return (
        <button
            ref={buttonRef}
            type="button"
            role="tab"
            id={id}
            aria-selected={selected}
            aria-controls={controls}
            tabIndex={tabIndex ?? (selected ? 0 : -1)}
            disabled={disabled}
            onClick={onClick}
            onKeyDown={onKeyDown}
            className={cx(styles.tab, ring.root, className)}
        >
            <span className={selected ? 'yw-body-sm-bold' : 'yw-body-sm-reg'}>
                {label}
            </span>
        </button>
    )
}

export type TabGroupProps = {
    /** Tab labels (Figma: Tab container slot) */
    tabs: string[]
    /** Panel content per tab (optional) */
    panels?: ReactNode[]
    selected?: number
    onChange?: (index: number) => void
    /** Figma: Trailing action */
    'Trailing action'?: boolean
    trailingLabel?: string
    onTrailingAction?: () => void
    /** Menu shown by the trailing action (Figma _Trailing action State=Active with _Dropdown/Options) */
    trailingOptions?: Option[]
    onTrailingSelect?: (value: string) => void
    /** Open the trailing menu initially (story preview of _Trailing action State=Active) */
    defaultMenuOpen?: boolean
    /** Accessible name of the tab list */
    label: string
}

export function TabGroup({
    tabs,
    panels,
    selected: controlled,
    onChange,
    'Trailing action': trailing = true,
    trailingLabel = 'More options',
    onTrailingAction,
    trailingOptions,
    onTrailingSelect,
    defaultMenuOpen = false,
    label,
}: TabGroupProps) {
    const [menu, setMenu] = useState(defaultMenuOpen)
    const menuId = useId()
    const [inner, setInner] = useState(controlled ?? 0)
    const selected = controlled ?? inner
    const refs = useRef<(HTMLButtonElement | null)[]>([])
    const [ink, setInk] = useState({ x: 0, w: 0 })
    const base = useId()

    const select = (i: number, focus = false) => {
        setInner(i)
        onChange?.(i)
        if (focus) refs.current[i]?.focus()
    }

    useLayoutEffect(() => {
        const el = refs.current[selected]
        if (el) setInk({ x: el.offsetLeft, w: el.offsetWidth })
    }, [selected, tabs])

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        const last = tabs.length - 1
        const map: Record<string, number> = {
            ArrowRight: selected === last ? 0 : selected + 1,
            ArrowLeft: selected === 0 ? last : selected - 1,
            Home: 0,
            End: last,
        }
        if (e.key in map) {
            e.preventDefault()
            select(map[e.key], true)
        }
    }

    return (
        <div>
            <div className={styles.root}>
                <div className={styles.list} role="tablist" aria-label={label}>
                    {tabs.map((t, i) => (
                        <Tab
                            key={t}
                            label={t}
                            selected={i === selected}
                            id={`${base}-tab-${i}`}
                            controls={panels ? `${base}-panel-${i}` : undefined}
                            onClick={() => select(i)}
                            onKeyDown={onKeyDown}
                            buttonRef={(el) => {
                                refs.current[i] = el
                            }}
                        />
                    ))}
                    <span
                        className={styles.ink}
                        aria-hidden="true"
                        style={{
                            transform: `translateX(${ink.x}px) scaleX(${ink.w})`,
                        }}
                    />
                </div>
                {trailing && (
                    <div
                        className={styles.trailing}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setMenu(false)
                        }}
                        onBlur={(e) => {
                            if (
                                !e.currentTarget.contains(
                                    e.relatedTarget as Node
                                )
                            )
                                setMenu(false)
                        }}
                    >
                        <Button
                            Variant="Outline"
                            Icon="Only"
                            Size="S"
                            iconName="more-settings-horizontal"
                            label={trailingLabel}
                            onClick={() => {
                                onTrailingAction?.()
                                if (trailingOptions) setMenu(!menu)
                            }}
                        />
                        {trailingOptions && menu && (
                            <OptionsPanel
                                className={styles.options}
                                id={menuId}
                                role="menu"
                                label={trailingLabel}
                                options={trailingOptions}
                                onSelect={(v) => {
                                    onTrailingSelect?.(v)
                                    setMenu(false)
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
            {panels?.map((p, i) => (
                <div
                    key={i}
                    role="tabpanel"
                    id={`${base}-panel-${i}`}
                    aria-labelledby={`${base}-tab-${i}`}
                    hidden={i !== selected}
                    tabIndex={0}
                    className={styles['tab-panel']}
                >
                    {p}
                </div>
            ))}
        </div>
    )
}
