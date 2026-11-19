import { useState } from 'react'
import { Toggle } from '../toggle'
import { Button } from '../button'
import { cx } from '../../shared/cx'
import styles from './cookie-preferences.module.css'

/*
  Cookie preferences — code component (not in Figma as a component; the Figma Cookies page, added
  19 November). One row per cookie category: title, On/Off and a Toggle, and the description under it.
  Necessary cookies are always on (the toggle is disabled). "Save preferences" calls `onSave` with the
  choices; connect it to the consent management platform. Same panel as the Registration form.
*/

export const COOKIE_PREFERENCES_LABELS = {
    on: 'On',
    off: 'Off',
    save: 'Save preferences',
    saved: 'Your preferences are saved.',
}

export type CookieCategory = {
    id: string
    title: string
    description: string
    /** Always on, cannot be switched off (Necessary) */
    locked?: boolean
    /** Initial state for the other categories (default off) */
    defaultOn?: boolean
}

export type CookiePreferencesProps = {
    categories: CookieCategory[]
    /** Called with { [id]: on } when the visitor saves */
    onSave?: (choices: Record<string, boolean>) => void
    className?: string
    /** UI text, for translations: { ...COOKIE_PREFERENCES_LABELS } */
    labels?: Partial<typeof COOKIE_PREFERENCES_LABELS>
}

export function CookiePreferences({
    categories,
    onSave,
    className,
    labels: l,
}: CookiePreferencesProps) {
    const L = { ...COOKIE_PREFERENCES_LABELS, ...l }
    const [on, setOn] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(
            categories.map((c) => [c.id, !!(c.locked || c.defaultOn)])
        )
    )
    const [saved, setSaved] = useState(false)
    return (
        <div className={cx(styles.root, className)}>
            <ul className={styles.list}>
                {categories.map((c) => {
                    const active = on[c.id]
                    const titleId = `cookie-${c.id}`
                    return (
                        <li key={c.id} className={styles.item}>
                            <div className={styles.head}>
                                <span
                                    id={titleId}
                                    className={cx(
                                        styles.title,
                                        'yw-body-lg-med'
                                    )}
                                >
                                    {c.title}
                                </span>
                                <span className={styles.control}>
                                    <span
                                        className={cx(
                                            styles.state,
                                            'yw-body-sm-reg'
                                        )}
                                        aria-hidden="true"
                                    >
                                        {active ? L.on : L.off}
                                    </span>
                                    <Toggle
                                        Active={active ? 'Yes' : 'No'}
                                        aria-labelledby={titleId}
                                        disabled={c.locked}
                                        onChange={(v) => {
                                            setOn((s) => ({ ...s, [c.id]: v }))
                                            setSaved(false)
                                        }}
                                    />
                                </span>
                            </div>
                            <p
                                className={cx(
                                    styles.description,
                                    'yw-body-md-reg'
                                )}
                            >
                                {c.description}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button
                    Variant="Primary"
                    Size="M"
                    label={L.save}
                    onClick={() => {
                        onSave?.(on)
                        setSaved(true)
                    }}
                />
                <span
                    role="status"
                    className={cx(styles.saved, 'yw-body-sm-reg')}
                >
                    {saved ? L.saved : ''}
                </span>
            </div>
        </div>
    )
}
