import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '../../icons/Icon';
import { YouweLogo } from '../../logos/YouweLogo';
import { Button } from '../Button/Button';
import { ButtonUtility } from '../ButtonUtility/ButtonUtility';
import { AskYouwe } from '../AskYouwe/AskYouwe';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/focus-ring.css';
import '../../shared/block.css';
import '../../shared/responsive.css';
import './Header.css';

/* Header/Corporate — Figma 24999:631; _Nav link 24998:575; _Utility link 24998:583; _Mega menu 26977:1552. */

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export type NavItem = { label: string; href: string; mega?: MegaMenuProps };

/* _Nav link */
export function NavLink({ Size = 'M', label, href, active, className }: { Size?: 'M' | 'L'; label: string; href: string; active?: boolean; className?: string }) {
  return (
    <a href={href} className={cx('yw-nav-link', 'yw-focus-ring', Size === 'L' && 'yw-nav-link--l', Size === 'L' ? 'yw-body-xl-med' : 'yw-body-md-med', className)} aria-current={active ? 'page' : undefined}>
      {label}
    </a>
  );
}

/* _Utility link */
export function UtilityLink({ label, href }: { label: string; href: string }) {
  return <a href={href} className="yw-utility-link yw-focus-ring yw-body-xs-reg">{label}</a>;
}

/* _Mega menu */
export type MegaMenuProps = {
  /** Figma: Feature */
  Feature?: 'ACI Weave' | 'Ask Youwe';
  columns: { heading: string; links: { label: string; href: string }[] }[];
  /** ACI Weave feature: Eyebrow / Title / Link */
  Eyebrow?: string;
  Title?: string;
  Link?: string;
  featureHref?: string;
  featureImage?: string;
  id?: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function MegaMenu({ Feature = 'ACI Weave', columns, Eyebrow = 'Our own platform', Title = 'ACI Weave: Governed AI agents, connected to your systems', Link = 'Explore ACI Weave', featureHref = '#', featureImage, id, className, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div id={id} className={cx('yw-mega', className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {columns.slice(0, 3).map((c) => (
        <div key={c.heading} className="yw-mega__col">
          <span className="yw-mega__heading yw-body-xs-med">{c.heading}</span>
          <ul className="yw-mega__links">{c.links.map((l) => <li key={l.label}><NavLink label={l.label} href={l.href} className="yw-nav-link--plain" /></li>)}</ul>
        </div>
      ))}
      {Feature === 'ACI Weave' ? (
        <a href={featureHref} className="yw-mega__feature yw-focus-ring">
          <CardMedia src={featureImage} ratio="314 / 120" />
          <span className="yw-mega__feature-text">
            <span className="yw-mega__eyebrow yw-body-xs-med">{Eyebrow}</span>
            <span className="yw-body-md-med">{Title}</span>
            <span className="yw-mega__more yw-body-sm-med">{Link}</span>
          </span>
        </a>
      ) : (
        <div className="yw-mega__col">
          <span className="yw-mega__heading yw-body-xs-med">Not sure where to start?</span>
          <AskYouwe {...{ 'Show shortcut': false }} />
        </div>
      )}
    </div>
  );
}

export type HeaderProps = {
  /** Figma: Device. 'Auto' renders both and lets the screen width choose (hamburger below 1024px). */
  Device?: 'Desktop' | 'Mobile' | 'Auto';
  /** Figma: Expanded (desktop: mega menu open; mobile: menu sheet open) */
  Expanded?: 'No' | 'Yes';
  nav: NavItem[];
  /** Label of the current page */
  current?: string;
  utility?: { label: string; href: string }[];
  language?: string;
  cta?: { label: string; href: string };
  /** Fixed to the top with scroll behaviour (glass, hide on scroll down) */
  fixed?: boolean;
  /** Story helper: render the open sheet / mega menu in the flow instead of fixed */
  inline?: boolean;
};

function useScrollState(enabled: boolean) {
  const [state, setState] = useState({ scrolled: false, hidden: false });
  useEffect(() => {
    if (!enabled) return;
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setState({ scrolled: y > 8, hidden: y > last && y > 120 });
      last = y;
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [enabled]);
  return state;
}

export function Header(props: HeaderProps) {
  if (props.Device === 'Auto') {
    return (
      <>
        <div className="yw-only-lg"><HeaderView {...props} Device="Desktop" /></div>
        <div className="yw-below-lg"><HeaderView {...props} Device="Mobile" /></div>
      </>
    );
  }
  return <HeaderView {...props} />;
}

function HeaderView({
  Device = 'Desktop', Expanded = 'No', nav, current, utility = [{ label: 'Careers', href: '#' }],
  language = 'The Netherlands', cta = { label: 'Contact', href: '#' }, fixed = false, inline = false,
}: HeaderProps) {
  const id = useId();
  const megaItem = nav.find((n) => n.mega);
  const [open, setOpen] = useState(Expanded === 'Yes');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { scrolled, hidden } = useScrollState(fixed);

  useEffect(() => setOpen(Expanded === 'Yes'), [Expanded]);

  // Esc closes; mobile sheet locks page scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const lock = Device === 'Mobile' && !inline;
    if (lock) document.documentElement.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); if (lock) document.documentElement.style.overflow = ''; };
  }, [open, Device, inline]);

  const enter = () => { clearTimeout(timer.current); setOpen(true); };
  const leave = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 300); };

  if (Device === 'Mobile') {
    const sheet = (
      <div className={cx('yw-sheet', inline && 'yw-sheet--static')} id={`${id}-sheet`} role="dialog" aria-modal={!inline} aria-label="Menu">
        <div className="yw-sheet__top">
          <a href="/" className="yw-header__logo yw-focus-ring"><YouweLogo /></a>
          <ButtonUtility Size="M" label="Close menu" onClick={() => setOpen(false)} />
        </div>
        <ul className="yw-sheet__links">{nav.map((n) => <li key={n.label}><NavLink Size="L" label={n.label} href={n.href} active={n.label === current} /></li>)}</ul>
        <div className="yw-sheet__divider" />
        <div className="yw-sheet__utility">
          {utility.map((u) => <UtilityLink key={u.label} {...u} />)}
          <span className="yw-sheet__lang"><Icon name="language" size={16} /><UtilityLink label={language} href="#" /></span>
        </div>
        <div className="yw-sheet__cta"><Button Variant="Primary" Size="M" label={cta.label} href={cta.href} /></div>
      </div>
    );
    return (
      <header className={cx('yw-header', 'yw-header--mobile', fixed && 'yw-header--fixed', hidden && !open && 'is-hidden')}>
        {open && inline ? sheet : (
          <div className="yw-header__top">
            <a href="/" className="yw-header__logo yw-focus-ring"><YouweLogo /></a>
            <div className="yw-header__mright">
              <button type="button" className="yw-header__menu-btn yw-focus-ring" aria-label="Open menu" aria-expanded={open} aria-controls={`${id}-sheet`} onClick={() => setOpen(true)}>
                <Icon name="hamburger-menu" size={24} />
              </button>
            </div>
          </div>
        )}
        {open && !inline && sheet}
      </header>
    );
  }

  return (
    <header className={cx('yw-header', fixed && 'yw-header--fixed', scrolled && 'is-scrolled', hidden && !open && 'is-hidden')}>
      <nav className="yw-header__bar" aria-label="Main">
        <a href="/" className="yw-header__logo yw-focus-ring"><YouweLogo /></a>
        <ul className="yw-header__menu">
          {nav.map((n) => n.mega ? (
            <li key={n.label} onMouseEnter={enter} onMouseLeave={leave}>
              <a
                href={n.href}
                className="yw-nav-link yw-focus-ring yw-body-md-med"
                aria-current={n.label === current ? 'page' : undefined}
                aria-expanded={open}
                aria-controls={`${id}-mega`}
                onKeyDown={(e) => { if (e.key === 'ArrowDown' || (e.key === 'Enter' && !open)) { e.preventDefault(); setOpen(true); } }}
              >
                {n.label}
              </a>
            </li>
          ) : <li key={n.label}><NavLink label={n.label} href={n.href} active={n.label === current} /></li>)}
        </ul>
        <div className="yw-header__right">
          {utility.map((u) => <a key={u.label} href={u.href} className="yw-nav-link yw-nav-link--plain yw-focus-ring yw-body-md-med">{u.label}</a>)}
          <Button Variant="Primary" Size="S" label={cta.label} href={cta.href} />
        </div>
      </nav>
      {open && megaItem?.mega && <MegaMenu {...megaItem.mega} id={`${id}-mega`} className={inline ? 'yw-mega--static' : undefined} onMouseEnter={enter} onMouseLeave={leave} />}
    </header>
  );
}
