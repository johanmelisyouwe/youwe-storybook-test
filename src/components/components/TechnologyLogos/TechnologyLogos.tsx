import type { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button/Button';
import { GiantRows } from '../Statement/Statement';
import '../../shared/block.css';
import '../Statement/Statement.css';
import './TechnologyLogos.css';

/* Content blocks/Technology logos — Figma 26851:1733. */

export type TechLogo = { name: string; logo?: ReactNode } | null;

export type TechnologyLogosProps = {
  /** Figma: Layout */
  Layout?: 'Default' | 'Grid 6' | 'Grid 4' | 'Grid 5' | 'Grid 8';
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  Title: string;
  /** Figma: Body (Show body) */
  Body?: string;
  /** Default layout: the giant drifting rows */
  rows?: string[];
  /** Logo slots; null = empty slot (keeps its space, no border) */
  logos: TechLogo[];
  /** Figma: Show button */
  button?: { label: string; href: string };
};

export function TechnologyLogos({ Layout = 'Grid 6', Title, Body, rows, logos, button }: TechnologyLogosProps) {
  const isDefault = Layout === 'Default';
  const n = isDefault ? 6 : parseInt(Layout.replace('Grid ', ''), 10);
  return (
    <section className={['yw-block', 'yw-tech-logos', isDefault && 'yw-tech-logos--default'].filter(Boolean).join(' ')} aria-label={Title}>
      {isDefault && rows && rows.length > 0 && <GiantRows rows={rows.map((t, i) => ({ text: t, style: i % 2 ? 'outline' : 'solid' }))} />}
      <div className="yw-block__inner">
        <div className="yw-tech-logos__text">
          <h2 className={isDefault ? 'yw-heading-lg' : 'yw-heading-xl'}>{Title}</h2>
          {Body && <p className={isDefault ? 'yw-body-lg-reg' : 'yw-body-md-reg'}>{Body}</p>}
        </div>
        <ul className="yw-tech-logos__grid" style={{ ['--_n' as string]: n } as CSSProperties}>
          {logos.map((l, i) => (
            <li key={i} className={l ? undefined : 'is-empty'} style={{ ['--_i' as string]: i % n } as CSSProperties}>
              {l && (l.logo ?? <span className="yw-body-md-bold">{l.name}</span>)}
            </li>
          ))}
        </ul>
        {button && <Button Variant="Outline" Size="M" label={button.label} href={button.href} />}
      </div>
    </section>
  );
}
