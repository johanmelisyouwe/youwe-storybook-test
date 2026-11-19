import { useEffect, useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './anchor-nav.module.css'

/*
  Anchor nav — "On this page" (code component, not in Figma; added 19 November for the long-form insight
  pages). A list of in-page links to the sections of an article. The link of the section being read is
  marked (scroll spy): content/primary with a brand-red bar, the others content/secondary.
  Desktop: a vertical list, made sticky by its parent (Article). Mobile: a collapsed disclosure that shows
  the current section; opening it shows the list.
*/

export const ANCHOR_NAV_LABELS = {
    title: 'On this page',
}

export type AnchorNavItem = { label: string; id: string }

export type AnchorNavProps = {
    Device?: 'Desktop' | 'Mobile'
    items: AnchorNavItem[]
    /** Controlled current section id; leave out to follow the scroll position */
    current?: string
    className?: string
    /** UI text, for translations: { ...ANCHOR_NAV_LABELS } */
    labels?: Partial<typeof ANCHOR_NAV_LABELS>
}

/** The id of the section that is being read: the last one whose top passed 30% of the viewport */
function useScrollSpy(ids: string[], off: boolean) {
    const [id, setId] = useState(ids[0])
    const key = ids.join('|')
    useEffect(() => {
        if (off) return
        const els = key
            .split('|')
            .map((i) => document.getElementById(i))
            .filter((e): e is HTMLElement => !!e)
        if (!els.length) return
        let raf = 0
        const update = () => {
            raf = 0
            const line = window.innerHeight * 0.3
            let cur = els[0].id
            for (const el of els)
                if (el.getBoundingClientRect().top <= line) cur = el.id
            // At the very bottom the last section is current, even when it is short
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2
            )
                cur = els[els.length - 1].id
            setId(cur)
        }
        const on = () => {
            if (!raf) raf = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', on, { passive: true })
        window.addEventListener('resize', on)
        return () => {
            window.removeEventListener('scroll', on)
            window.removeEventListener('resize', on)
            cancelAnimationFrame(raf)
        }
    }, [key, off])
    return id
}

export function AnchorNav({
    Device = 'Desktop',
    items,
    current,
    className,
    labels: l,
}: AnchorNavProps) {
    const labels = { ...ANCHOR_NAV_LABELS, ...l }
    const spy = useScrollSpy(
        items.map((i) => i.id),
        current !== undefined
    )
    const active = current ?? spy
    const [open, setOpen] = useState(false)

    const list = (
        <ol className={styles.list}>
            {items.map((it) => (
                <li key={it.id}>
                    <a
                        href={`#${it.id}`}
                        aria-current={it.id === active ? 'location' : undefined}
                        className={cx(styles.link, ring.root, 'yw-body-sm-reg')}
                        onClick={() => setOpen(false)}
                    >
                        {it.label}
                    </a>
                </li>
            ))}
        </ol>
    )

    if (Device === 'Mobile') {
        const label = items.find((i) => i.id === active)?.label
        return (
            <nav
                aria-label={labels.title}
                className={cx(styles.root, styles.mobile, className)}
            >
                <details
                    open={open}
                    onToggle={(e) => setOpen(e.currentTarget.open)}
                >
                    <summary className={cx(styles.summary, ring.root)}>
                        <span className={styles['summary-text']}>
                            <span
                                className={cx(styles.title, 'yw-body-xs-bold')}
                            >
                                {labels.title}
                            </span>
                            <span className="yw-body-md-reg">{label}</span>
                        </span>
                        <Icon
                            name="chevron-down"
                            size={20}
                            className={styles.chevron}
                        />
                    </summary>
                    {list}
                </details>
            </nav>
        )
    }

    return (
        <nav aria-label={labels.title} className={cx(styles.root, className)}>
            <span className={cx(styles.title, 'yw-body-xs-bold')}>
                {labels.title}
            </span>
            {list}
        </nav>
    )
}
