import { useEffect, useId, useRef, useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { YouweLogo } from '../../shared/logos/youwe-logo'
import { Button } from '../../ui/button'
import { ButtonUtility } from '../../ui/button-utility'
import { AskYouwe } from '../ask-youwe'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
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
                styles.navLink,
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
        <a href={href} className={cx(styles.utilityLink, 'yw-body-xs-reg')}>
            {label}
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
                <div key={c.heading} className={styles.megaCol}>
                    <span className={cx(styles.megaHeading, 'yw-body-xs-med')}>
                        {c.heading}
                    </span>
                    <ul className={styles.megaLinks}>
                        {c.links.map((l) => (
                            <li key={l.label}>
                                <NavLink label={l.label} href={l.href} plain />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {Feature === 'ACI Weave' ? (
                <a href={featureHref} className={styles.megaFeature}>
                    <CardMedia src={featureImage} ratio="314 / 120" />
                    <span className={styles.megaFeatureText}>
                        <span
                            className={cx(styles.megaEyebrow, 'yw-body-xs-med')}
                        >
                            {Eyebrow}
                        </span>
                        <span className="yw-body-md-med">{Title}</span>
                        <span className={cx(styles.megaMore, 'yw-body-sm-med')}>
                            {Link}
                        </span>
                    </span>
                </a>
            ) : (
                <div className={styles.megaCol}>
                    <span className={cx(styles.megaHeading, 'yw-body-xs-med')}>
                        Not sure where to start?
                    </span>
                    <AskYouwe {...{ 'Show shortcut': false }} />
                </div>
            )}
        </div>
    )
}

export type HeaderProps = {
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
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
            setState({ scrolled: y > 8, hidden: y > last && y > 120 })
            last = y
        }
        window.addEventListener('scroll', on, { passive: true })
        return () => window.removeEventListener('scroll', on)
    }, [enabled])
    return state
}

export function Header({
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

    useEffect(() => setOpen(Expanded === 'Yes'), [Expanded])

    // Esc closes; mobile sheet locks page scroll
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        const lock = Device === 'Mobile' && !inline
        if (lock) document.documentElement.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            if (lock) document.documentElement.style.overflow = ''
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
            >
                <div className={styles.sheetTop}>
                    <a href="/" className={styles.logo}>
                        <YouweLogo />
                    </a>
                    <ButtonUtility
                        Size="M"
                        label="Close menu"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <ul className={styles.sheetLinks}>
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
                <div className={styles.sheetDivider} />
                <div className={styles.sheetUtility}>
                    {utility.map((u) => (
                        <UtilityLink key={u.label} {...u} />
                    ))}
                    <span className={styles.sheetLang}>
                        <Icon name="language" size={16} />
                        <UtilityLink label={language} href="#" />
                    </span>
                </div>
                <div className={styles.sheetCta}>
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
                data-hidden={(hidden && !open) || undefined}
                className={styles.root}
            >
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
                                className={styles.menuBtn}
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
                                        styles.navLink,
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
                            className={cx(styles.navLink, 'yw-body-md-med')}
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
