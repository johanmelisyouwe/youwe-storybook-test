import { Icon } from '../../icons/Icon';
import { Button } from '../Button/Button';
import '../../shared/focus-ring.css';
import '../../shared/block.css';
import './Footer.css';

/* Footer/Corporate — Figma 25022:751; _Footer link — 25034:672 (page "Footer"). */

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');
type Link = { label: string; href: string };

/* _Footer link */
export function FooterLink({ Size = 'M', label, href }: { Size?: 'M' | 'S'; label: string; href: string }) {
  return <a href={href} className={cx('yw-footer-link', 'yw-focus-ring', Size === 'S' && 'yw-footer-link--s', Size === 'S' ? 'yw-body-sm-reg' : 'yw-body-md-reg')}>{label}</a>;
}

/* Social icons exported from Figma (Social/Instagram, Social/Linkedin), drawn at 24px in currentColor */
function SocialIcon({ name }: { name: 'Instagram' | 'LinkedIn' }) {
  const d = name === 'Instagram'
    ? 'M16 0C20.3453 0 20.8902 0.0184189 22.5968 0.0962847C24.2998 0.17396 25.4629 0.444458 26.4806 0.840012C27.5327 1.24884 28.425 1.79593 29.3146 2.68542C30.2041 3.57497 30.7512 4.46725 31.1601 5.51939C31.5555 6.53711 31.826 7.70021 31.9037 9.40322C31.9816 11.1098 32 11.6547 32 16C32 20.3453 31.9816 20.8902 31.9037 22.5968C31.826 24.2998 31.5555 25.4629 31.1601 26.4806C30.7512 27.5327 30.2041 28.425 29.3146 29.3146C28.425 30.2041 27.5327 30.7512 26.4806 31.1601C25.4629 31.5555 24.2998 31.826 22.5968 31.9037C20.8902 31.9816 20.3453 32 16 32C11.6547 32 11.1098 31.9816 9.40322 31.9037C7.70021 31.826 6.53711 31.5555 5.51939 31.1601C4.46725 30.7512 3.57497 30.2041 2.68542 29.3146C1.79593 28.425 1.24884 27.5327 0.840012 26.4806C0.444458 25.4629 0.17396 24.2998 0.0962847 22.5968C0.0184189 20.8902 0 20.3453 0 16C0 11.6547 0.0184189 11.1098 0.0962847 9.40322C0.17396 7.70021 0.444458 6.53711 0.840012 5.51939C1.24884 4.46725 1.79593 3.57497 2.68542 2.68542C3.57497 1.79593 4.46725 1.24884 5.51939 0.840012C6.53711 0.444458 7.70021 0.17396 9.40322 0.0962847C11.1098 0.0184189 11.6547 0 16 0ZM16 2.88288C11.7278 2.88288 11.2218 2.8992 9.53463 2.97618C7.97464 3.04731 7.12746 3.30796 6.56366 3.52708C5.81682 3.81733 5.28383 4.16404 4.72397 4.72397C4.16404 5.28383 3.81733 5.81682 3.52708 6.56366C3.30796 7.12746 3.04731 7.97464 2.97618 9.53463C2.8992 11.2218 2.88288 11.7278 2.88288 16C2.88288 20.2722 2.8992 20.7782 2.97618 22.4654C3.04731 24.0254 3.30796 24.8725 3.52708 25.4363C3.81733 26.1832 4.16411 26.7162 4.72397 27.276C5.28383 27.836 5.81682 28.1827 6.56366 28.4729C7.12746 28.692 7.97464 28.9527 9.53463 29.0238C11.2216 29.1008 11.7275 29.1171 16 29.1171C20.2725 29.1171 20.7785 29.1008 22.4654 29.0238C24.0254 28.9527 24.8725 28.692 25.4363 28.4729C26.1832 28.1827 26.7162 27.836 27.276 27.276C27.836 26.7162 28.1827 26.1832 28.4729 25.4363C28.692 24.8725 28.9527 24.0254 29.0238 22.4654C29.1008 20.7782 29.1171 20.2722 29.1171 16C29.1171 11.7278 29.1008 11.2218 29.0238 9.53463C28.9527 7.97464 28.692 7.12746 28.4729 6.56366C28.1827 5.81682 27.836 5.28383 27.276 4.72397C26.7162 4.16404 26.1832 3.81733 25.4363 3.52708C24.8725 3.30796 24.0254 3.04731 22.4654 2.97618C20.7782 2.8992 20.2722 2.88288 16 2.88288ZM15.9647 21.3514C18.9102 21.3514 21.298 18.9636 21.298 16.0181C21.298 13.0726 18.9102 10.6848 15.9647 10.6848C13.0192 10.6848 10.6314 13.0726 10.6314 16.0181C10.6314 18.9636 13.0192 21.3514 15.9647 21.3514ZM15.9647 7.80189C20.5024 7.80189 24.1809 11.4804 24.1809 16.0181C24.1809 20.5558 20.5024 24.2343 15.9647 24.2343C11.427 24.2343 7.74848 20.5558 7.74848 16.0181C7.74848 11.4804 11.427 7.80189 15.9647 7.80189ZM26.4503 7.43549C26.4503 8.49589 25.5907 9.35546 24.5303 9.35546C23.4699 9.35546 22.6103 8.49589 22.6103 7.43549C22.6103 6.37509 23.4699 5.51545 24.5303 5.51545C25.5907 5.51545 26.4503 6.37509 26.4503 7.43549Z'
    : 'M29.6368 0H2.36447C1.05856 0 0 1.02617 0 2.29273V29.7063C0 30.9729 1.05893 32 2.36447 32H29.6368C30.9424 32 31.9997 30.9723 31.9997 29.7063V2.29273C31.9997 1.02655 30.9424 0 29.6368 0ZM9.70147 26.7862H4.86655V12.3386H9.70147V26.7862ZM7.28449 10.3648H7.25198C5.63062 10.3648 4.5796 9.25595 4.5796 7.86776C4.5796 6.45159 5.6615 5.37281 7.315 5.37281C8.96865 5.37281 9.98582 6.45129 10.018 7.86776C10.018 9.25625 8.96902 10.3648 7.28449 10.3648ZM27.1299 26.7862H22.2966V19.0562C22.2966 17.1139 21.5963 15.7886 19.8483 15.7886C18.5112 15.7886 17.7174 16.6827 17.3689 17.5459C17.2397 17.8542 17.2077 18.2854 17.2077 18.7161V26.7859H12.3753C12.3753 26.7859 12.4385 13.6934 12.3753 12.3383H17.2085V14.3866C17.8501 13.4024 18.9966 11.9984 21.5633 11.9984C24.7446 11.9984 27.1299 14.0622 27.1299 18.5019V26.7862Z';
  return <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"><path fillRule="evenodd" d={d} fill="currentColor" /></svg>;
}

export type FooterColumn = { heading: string; links: Link[] };
export type FooterProps = {
  /** Figma: Variant */
  Variant?: 'Sitemap' | 'Newsletter';
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  /** First column ("Youwe") and the three service columns */
  columns: FooterColumn[];
  legal?: Link[];
  social?: { Instagram?: string; LinkedIn?: string };
  /** Newsletter variant: text + button; language selector label */
  newsletter?: { text: string; cta: Link };
  language?: string;
};

export function Footer({ Variant = 'Sitemap', Device = 'Desktop', columns, legal = [{ label: 'Terms & Conditions', href: '#' }, { label: 'Privacy Policy', href: '#' }], social = { Instagram: '#', LinkedIn: '#' }, newsletter, language = 'The Netherlands' }: FooterProps) {
  return (
    <footer className={cx('yw-footer', Variant === 'Newsletter' && 'yw-footer--newsletter', Device === 'Mobile' && 'yw-footer--mobile')}>
      <div className="yw-footer__columns">
        {Variant === 'Newsletter' && newsletter && (
          <div className="yw-footer__newsletter">
            <p className="yw-body-sm-reg">{newsletter.text}</p>
            <Button Variant="Primary" Size="M" label={newsletter.cta.label} href={newsletter.cta.href} />
          </div>
        )}
        {columns.map((c) => (
          <nav key={c.heading} className="yw-footer__col" aria-label={c.heading}>
            <h2 className="yw-footer__heading yw-body-md-bold">{c.heading}</h2>
            <ul className="yw-footer__links">{c.links.map((l) => <li key={l.label}><FooterLink {...l} /></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="yw-footer__bottom">
        <div className="yw-footer__divider" />
        <div className="yw-footer__legal">
          <div className="yw-footer__legal-links">{legal.map((l) => <a key={l.label} href={l.href} className="yw-footer-link yw-focus-ring yw-body-sm-reg">{l.label}</a>)}</div>
          <div className="yw-footer__social">
            {social.Instagram && <a href={social.Instagram} className="yw-focus-ring" aria-label="Youwe on Instagram"><SocialIcon name="Instagram" /></a>}
            {social.LinkedIn && <a href={social.LinkedIn} className="yw-focus-ring" aria-label="Youwe on LinkedIn"><SocialIcon name="LinkedIn" /></a>}
            {Variant === 'Newsletter' && <button type="button" className="yw-footer__lang yw-focus-ring yw-body-sm-reg" aria-label={`Language: ${language}`}><Icon name="language" size={16} />{language}</button>}
          </div>
        </div>
      </div>
    </footer>
  );
}
