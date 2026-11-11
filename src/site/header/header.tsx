import { useEffect, useId, useRef, useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { YouweLogo } from '../../shared/logos/youwe-logo'
import { Button } from '../../ui/button'
import { ButtonUtility } from '../../ui/button-utility'
import { AskYouwe } from '../ask-youwe'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import responsive from '../../shared/responsive/responsive.module.css'
import styles from './header.module.css'

/* Header/Corporate — Figma 24999:631; _Nav link 24998:575; _Utility link 24998:583; _Mega menu 26977:1552. */

export type NavItem = { label: string; href: string; mega?: MegaMenuProps }

/* _Nav link */
export function NavLink({
    Size = 'M',
    label,
    href,
    active,
    plain,
    className,
}: {
    Size?: 'M' | 'L'
    label: string
    href: string
    active?: boolean
    /** Plain link inside the mega menu (no underline animation) */
    plain?: boolean
    className?: string
}) {
    return (
        <a
            href={href}
            data-l={Size === 'L' || undefined}
            data-plain={plain || undefined}
            className={cx(
                styles['nav-link'],
                ring.root,
                Size === 'L' ? 'yw-body-xl-med' : 'yw-body-md-med',
                className
            )}
            aria-current={active ? 'page' : undefined}
        >
            {label}
        </a>
    )
}

/* _Utility link */
export function UtilityLink({ label, href }: { label: string; href: string }) {
    return (
        <a href={href} className={cx(styles['utility-link'], 'yw-body-xs-reg')}>
            {label}
        </a>
    )
}

/* Skip link: first Tab stop on the page; moves focus past the header to #main-content, or the page's h1. */
function SkipLink() {
    return (
        <a
            href="#main-content"
            className={cx(styles.skip, ring.root, 'yw-body-md-med')}
            onClick={(e) => {
                const target =
                    document.getElementById('main-content') ??
                    Array.from(document.querySelectorAll('h1')).find(
                        (h) => h.getClientRects().length > 0
                    )
                if (!(target instanceof HTMLElement)) return
                e.preventDefault()
                if (!target.hasAttribute('tabindex'))
                    target.setAttribute('tabindex', '-1')
                target.focus()
            }}
        >
            Skip to content
        </a>
    )
}

/* _Mega menu */
export type MegaMenuProps = {
    /** Figma: Feature */
    Feature?: 'ACI Weave' | 'Ask Youwe'
    columns: { heading: string; links: { label: string; href: string }[] }[]
    /** ACI Weave feature: Eyebrow / Title / Link */
    Eyebrow?: string
    Title?: string
    Link?: string
    featureHref?: string
    featureImage?: string
    id?: string
    /** Rendered in place (stories, mobile sheet) instead of as a dropdown */
    inline?: boolean
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

export function MegaMenu({
    Feature = 'ACI Weave',
    columns,
    Eyebrow = 'Our own platform',
    Title = 'ACI Weave: Governed AI agents, connected to your systems',
    Link = 'Explore ACI Weave',
    featureHref = '#',
    featureImage,
    id,
    inline,
    className,
    onMouseEnter,
    onMouseLeave,
}: MegaMenuProps) {
    return (
        <div
            id={id}
            data-static={inline || undefined}
            className={cx(styles.mega, className)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {columns.slice(0, 3).map((c) => (
                <div key={c.heading} className={styles['mega-col']}>
                    <span
                        className={cx(styles['mega-heading'], 'yw-body-xs-med')}
                    >
                        {c.heading}
                    </span>
                    <ul className={styles['mega-links']}>
                        {c.links.map((l) => (
                            <li key={l.label}>
                                <NavLink label={l.label} href={l.href} plain />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {Feature === 'ACI Weave' ? (
                <a href={featureHref} className={styles['mega-feature']}>
                    <CardMedia src={featureImage} ratio="314 / 120" />
                    <span className={styles['mega-feature-text']}>
                        <span
                            className={cx(
                                styles['mega-eyebrow'],
                                'yw-body-xs-med'
                            )}
                        >
                            {Eyebrow}
                        </span>
                        <span className="yw-body-md-med">{Title}</span>
                        <span
                            className={cx(
                                styles['mega-more'],
                                'yw-body-sm-med'
                            )}
                        >
                            {Link}
                        </span>
                    </span>
                </a>
            ) : (
                <div className={styles['mega-col']}>
                    <span
                        className={cx(styles['mega-heading'], 'yw-body-xs-med')}
                    >
                        Not sure where to start?
                    </span>
                    <AskYouwe {...{ 'Show shortcut': false }} />
                </div>
            )}
        </div>
    )
}

export type HeaderProps = {
    /** Figma: Device. 'Auto' renders both and lets the screen width choose (hamburger below 1024px). */
    Device?: 'Desktop' | 'Mobile' | 'Auto'
    /** Figma: Expanded (desktop: mega menu open; mobile: menu sheet open) */
    Expanded?: 'No' | 'Yes'
    nav: NavItem[]
    /** Label of the current page */
    current?: string
    utility?: { label: string; href: string }[]
    language?: string
    cta?: { label: string; href: string }
    /** Fixed to the top with scroll behaviour (glass, hide on scroll down) */
    fixed?: boolean
    /** Story helper: render the open sheet / mega menu in the flow instead of fixed */
    inline?: boolean
}

function useScrollState(enabled: boolean) {
    const [state, setState] = useState({ scrolled: false, hidden: false })
    useEffect(() => {
        if (!enabled) return
        let last = window.scrollY
        const on = () => {
            const y = window.scrollY
            const scrolled = y > 8
            const hidden = y > last && y > 120
            // Same object back = no re-render; most scroll events change nothing
            setState((s) =>
                s.scrolled === scrolled && s.hidden === hidden
                    ? s
                    : { scrolled, hidden }
            )
            last = y
        }
        window.addEventListener('scroll', on, { passive: true })
        return () => window.removeEventListener('scroll', on)
    }, [enabled])
    return state
}

export function Header(props: HeaderProps) {
    if (props.Device === 'Auto') {
        return (
            <>
                <div className={responsive['only-lg']}>
                    <HeaderView {...props} Device="Desktop" />
                </div>
                <div className={responsive['below-lg']}>
                    <HeaderView {...props} Device="Mobile" />
                </div>
            </>
        )
    }
    return <HeaderView {...props} />
}

function HeaderView({
    Device = 'Desktop',
    Expanded = 'No',
    nav,
    current,
    utility = [{ label: 'Careers', href: '#' }],
    language = 'The Netherlands',
    cta = { label: 'Contact', href: '#' },
    fixed = false,
    inline = false,
}: HeaderProps) {
    const id = useId()
    const megaItem = nav.find((n) => n.mega)
    const [open, setOpen] = useState(Expanded === 'Yes')
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
    const { scrolled, hidden } = useScrollState(fixed)

    // Follow the Expanded prop (story control) when it changes, without an effect
    const [prevExpanded, setPrevExpanded] = useState(Expanded)
    if (Expanded !== prevExpanded) {
        setPrevExpanded(Expanded)
        setOpen(Expanded === 'Yes')
    }

    const sheetRef = useRef<HTMLDivElement>(null)
    const menuBtn = useRef<HTMLButtonElement>(null)

    // Esc closes; the mobile sheet locks page scroll, takes focus, keeps Tab inside it (it's a modal dialog)
    // and gives focus back to the menu button when it closes.
    useEffect(() => {
        if (!open) return
        const modal = Device === 'Mobile' && !inline
        const focusables = () =>
            Array.from(
                sheetRef.current?.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                ) ?? []
            )
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
            if (!modal || e.key !== 'Tab') return
            const f = focusables()
            if (!f.length) return
            const first = f[0]
            const last = f[f.length - 1]
            const inside = sheetRef.current?.contains(document.activeElement)
            if (e.shiftKey && (document.activeElement === first || !inside)) {
                e.preventDefault()
                last.focus()
            } else if (
                !e.shiftKey &&
                (document.activeElement === last || !inside)
            ) {
                e.preventDefault()
                first.focus()
            }
        }
        window.addEventListener('keydown', onKey)
        if (modal) {
            document.documentElement.style.overflow = 'hidden'
            focusables()[0]?.focus()
        }
        const btn = menuBtn.current
        return () => {
            window.removeEventListener('keydown', onKey)
            if (modal) {
                document.documentElement.style.overflow = ''
                btn?.focus()
            }
        }
    }, [open, Device, inline])

    const enter = () => {
        clearTimeout(timer.current)
        setOpen(true)
    }
    const leave = () => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setOpen(false), 300)
    }

    if (Device === 'Mobile') {
        const sheet = (
            <div
                data-static={inline || undefined}
                className={cx(styles.sheet)}
                id={`${id}-sheet`}
                role="dialog"
                aria-modal={!inline}
                aria-label="Menu"
                ref={sheetRef}
            >
                <div className={styles['sheet-top']}>
                    <a href="/" className={styles.logo}>
                        <YouweLogo />
                    </a>
                    <ButtonUtility
                        Size="M"
                        label="Close menu"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <ul className={styles['sheet-links']}>
                    {nav.map((n) => (
                        <li key={n.label}>
                            <NavLink
                                Size="L"
                                label={n.label}
                                href={n.href}
                                active={n.label === current}
                            />
                        </li>
                    ))}
                </ul>
                <div className={styles['sheet-divider']} />
                <div className={styles['sheet-utility']}>
                    {utility.map((u) => (
                        <UtilityLink key={u.label} {...u} />
                    ))}
                    <span className={styles['sheet-lang']}>
                        <Icon name="language" size={16} />
                        <UtilityLink label={language} href="#" />
                    </span>
                </div>
                <div className={styles['sheet-cta']}>
                    <Button
                        Variant="Primary"
                        Size="M"
                        label={cta.label}
                        href={cta.href}
                    />
                </div>
            </div>
        )
        return (
            <header
                data-mobile
                data-fixed={fixed || undefined}
                data-scrolled={scrolled || undefined}
                data-hidden={(hidden && !open) || undefined}
                className={styles.root}
            >
                {!inline && <SkipLink />}
                {open && inline ? (
                    sheet
                ) : (
                    <div className={styles.top}>
                        <a href="/" className={styles.logo}>
                            <YouweLogo />
                        </a>
                        <div className={styles.mright}>
                            <button
                                type="button"
                                ref={menuBtn}
                                className={styles['menu-btn']}
                                aria-label="Open menu"
                                aria-expanded={open}
                                aria-controls={`${id}-sheet`}
                                onClick={() => setOpen(true)}
                            >
                                <Icon name="hamburger-menu" size={24} />
                            </button>
                        </div>
                    </div>
                )}
                {open && !inline && sheet}
            </header>
        )
    }

    return (
        <header
            data-fixed={fixed || undefined}
            data-scrolled={scrolled || undefined}
            data-hidden={(hidden && !open) || undefined}
            className={styles.root}
        >
            {!inline && <SkipLink />}
            <nav className={styles.bar} aria-label="Main">
                <a href="/" className={styles.logo}>
                    <YouweLogo />
                </a>
                <ul className={styles.menu}>
                    {nav.map((n) =>
                        n.mega ? (
                            <li
                                key={n.label}
                                onMouseEnter={enter}
                                onMouseLeave={leave}
                            >
                                <a
                                    href={n.href}
                                    className={cx(
                                        styles['nav-link'],
                                        'yw-body-md-med'
                                    )}
                                    aria-current={
                                        n.label === current ? 'page' : undefined
                                    }
                                    aria-expanded={open}
                                    aria-controls={`${id}-mega`}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'ArrowDown' ||
                                            (e.key === 'Enter' && !open)
                                        ) {
                                            e.preventDefault()
                                            setOpen(true)
                                        }
                                    }}
                                >
                                    {n.label}
                                </a>
                            </li>
                        ) : (
                            <li key={n.label}>
                                <NavLink
                                    label={n.label}
                                    href={n.href}
                                    active={n.label === current}
                                />
                            </li>
                        )
                    )}
                </ul>
                <div className={styles.right}>
                    {utility.map((u) => (
                        <a
                            key={u.label}
                            href={u.href}
                            data-plain
                            className={cx(styles['nav-link'], 'yw-body-md-med')}
                        >
                            {u.label}
                        </a>
                    ))}
                    <Button
                        Variant="Primary"
                        Size="S"
                        label={cta.label}
                        href={cta.href}
                    />
                </div>
            </nav>
            {open && megaItem?.mega && (
                <MegaMenu
                    {...megaItem.mega}
                    id={`${id}-mega`}
                    inline={inline}
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                />
            )}
        </header>
    )
}
