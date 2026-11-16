import { useEffect, useId, useRef, useState } from 'react'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import { Icon } from '../../shared/icons/icon'
import styles from './region-switch.module.css'

/*
  Region switch (code part, used by Header and Footer): the site's regions / locales, as on the v2 site
  (Global, UK, NL, SE → /, /en-gb, /nl, /sv). A button with the current region opens a list of links
  (hreflang set, aria-current on the current one). Escape or a click outside closes it.
  CMS: one entry per Contentful locale → { label, href, hreflang }.
*/

export type Region = {
    label: string
    href: string
    /** e.g. en, en-GB, nl, sv */
    hreflang?: string
    current?: boolean
}

export function RegionSwitch({
    regions,
    label = 'Region',
    align = 'end',
    direction = 'down',
    className,
}: {
    regions: Region[]
    /** Accessible name of the button: "{label}: {current}" */
    label?: string
    align?: 'start' | 'end'
    direction?: 'down' | 'up'
    className?: string
}) {
    const id = useId()
    const [open, setOpen] = useState(false)
    const root = useRef<HTMLDivElement>(null)
    const cur = regions.find((r) => r.current) ?? regions[0]

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false)
                root.current?.querySelector('button')?.focus()
            }
        }
        const onDown = (e: PointerEvent) => {
            if (!root.current?.contains(e.target as Node)) setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        window.addEventListener('pointerdown', onDown)
        return () => {
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('pointerdown', onDown)
        }
    }, [open])

    if (!cur) return null
    return (
        <div
            ref={root}
            className={cx(styles.root, className)}
            data-align={align}
            data-direction={direction}
        >
            <button
                type="button"
                className={cx(styles.button, ring.root, 'yw-body-sm-med')}
                aria-expanded={open}
                aria-controls={`${id}-list`}
                aria-label={`${label}: ${cur.label}`}
                onClick={() => setOpen((o) => !o)}
            >
                <Icon name="language" size={16} />
                {cur.label}
            </button>
            {open && (
                <ul id={`${id}-list`} className={styles.list}>
                    {regions.map((r) => (
                        <li key={r.href}>
                            <a
                                href={r.href}
                                hrefLang={r.hreflang}
                                lang={r.hreflang}
                                aria-current={r === cur ? 'true' : undefined}
                                className={cx(
                                    styles.item,
                                    ring.root,
                                    'yw-body-sm-reg'
                                )}
                            >
                                {r.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
