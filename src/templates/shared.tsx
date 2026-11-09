import type { ReactNode } from 'react';
import { Header, type HeaderProps } from '../components/components/Header/Header';
import { Footer, type FooterColumn } from '../components/components/Footer/Footer';
import { Logo } from '../components/logos/Logo';
import type { Mode } from '../components/shared/ModeFrame';
import './templates.css';

/*
  Shared pieces for the page templates (FIGMA-SYNC.md step 5). Copy comes from the Figma templates.
  Sections are stacked without extra spacing: each block's own padding sets the rhythm.
*/

export type Device = 'Desktop' | 'Mobile';
/** Story frame width: desktop is fluid (full viewport), mobile 360 as in Figma. */
export const WIDTH: Record<Device, number | string> = { Desktop: '100%', Mobile: 360 };

export const NAV: HeaderProps['nav'] = ['Services', 'Work', 'Industries', 'Tech Partners', 'Insights', 'About Us'].map((label) => ({ label, href: '#' }));
export const header = (Device: Device) => <Header Device={Device} nav={NAV} />;

/** Client and technology logos exported from Figma (name as text when there is no logo yet). */
export const logo = (name: string, width = 96) => <Logo name={name} box={[width, Math.round(width / 3)]} />;

export const OFFICES = ['Rotterdam', 'Groningen', 'London', 'Leeds', 'Shrewsbury', 'Stockholm', 'Bandung', 'Kyiv'];

/** The "Work with us" sub-footer of the desktop templates. The mobile frames have other copy; desktop is correct (decided 9 November). */
export const WORK_WITH_US = {
  title: 'Work with us',
  body: 'Tell us what you want to achieve and we will think along with you.',
  primary: { label: 'Get in touch', href: '#' },
  offices: ['Rotterdam', 'Groningen', 'London', 'Shrewsbury', 'Leeds', 'Stockholm', 'Kyiv', 'Bandung'],
};
export const CLIENT_LOGOS = ['Exigent', 'G-Star', 'GoCardless', 'ING', 'LaSalle', 'Munich Re', 'Newland', 'Subway'];

const l = (labels: string[]) => labels.map((label) => ({ label, href: '#' }));
const SERVICE_COLUMNS: FooterColumn[] = [
  { heading: 'Digital Infrastructure', links: l(['B2B Enterprise Commerce', 'D2C Commerce', 'PIM/MDM', 'Digital Experience (DXP)', 'Customer & Partner Portals', 'Cloud Architecture']) },
  { heading: 'Operational Optimization & Intelligence', links: l(['Pricing Intelligence', 'Agentic AI', 'AI Process Intelligence', 'Contract & Supply Chain', 'Product Lifecycle Management (PLM)', 'Sustainability & ESG']) },
  { heading: 'Foundation for Data & Integrations', links: l(['Enterprise Data Architecture', 'Data Compliance & Security', 'Data Engineering & API', 'AI & Analytics', 'ACI Weave']) },
];
/** The Youwe column differs per template in Figma; pass the links the template shows. */
export const YOUWE_PAGES = ['Home', 'Services', 'Work', 'Industries', 'Tech Partners', 'Insights', 'About Us'];
export const YOUWE_SITEMAP = ['Work', 'Services', 'Industries', 'About us', 'Contact'];
export const footer = (Device: Device, youwe: string[] = YOUWE_PAGES) => (
  <Footer
    Variant="Newsletter"
    Device={Device}
    columns={[{ heading: 'Youwe', links: l(youwe) }, ...SERVICE_COLUMNS]}
    newsletter={{ text: 'Tell us what you want to achieve and we will think along with you.', cta: { label: 'Contact us', href: '#' } }}
  />
);

/** A section in a Figma Mode (Dark / Light); blocks take their surface from data-theme. */
export function Section({ Mode = 'Dark', flush, children }: { Mode?: Mode; flush?: 'top' | 'bottom' | 'both'; children: ReactNode }) {
  const cls = flush ? [flush !== 'bottom' && 'yw-flush-top', flush !== 'top' && 'yw-flush-bottom'].filter(Boolean).join(' ') : undefined;
  return <div className={cls} data-theme={Mode.toLowerCase()} style={{ background: 'var(--color-shared-surface-base-1)', color: 'var(--color-shared-content-primary)' }}>{children}</div>;
}

/** A hand-built Figma frame that is not a component (step 5.4): same height, clearly marked. */
export function NotAComponent({ name, height, uses }: { name: string; height: number; uses?: string[] }) {
  return (
    <div
      role="note"
      style={{
        display: 'grid',
        placeContent: 'center',
        gap: 'var(--spacing-2xs)',
        height,
        padding: 'var(--spacing-lg)',
        background: 'repeating-linear-gradient(135deg, var(--color-shared-surface-base-2) 0 12px, var(--color-shared-surface-base-1) 12px 24px)',
        color: 'var(--color-shared-content-secondary)',
        textAlign: 'center',
      }}
    >
      <strong className="yw-body-md-bold">{`Not a component yet: ${name}`}</strong>
      {uses && <span className="yw-body-sm-reg">{`Uses ${uses.join(', ')}`}</span>}
    </div>
  );
}

export function Page({ Device, children }: { Device: Device; children: ReactNode }) {
  return <div data-theme="dark" style={{ width: '100%', maxWidth: WIDTH[Device], margin: '0 auto', background: 'var(--color-shared-surface-base-1)' }}>{children}</div>;
}
