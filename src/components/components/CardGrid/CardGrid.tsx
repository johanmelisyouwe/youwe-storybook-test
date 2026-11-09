import type { CSSProperties, ReactNode } from 'react';
import { SectionIntro, type SectionIntroProps } from '../SectionHeader/SectionHeader';
import '../../shared/block.css';
import './CardGrid.css';

/* Content blocks/Card grid — Figma 26897:1361. Fill the cells with any card component. */

export type CardGridLayout = '2 columns' | '3 columns' | '4 columns' | '5 columns' | 'Wide + 1' | '1 + Wide' | 'Feature + 4' | 'Feature + 2' | 'Overflow scroll';
const CLS: Record<CardGridLayout, string> = {
  '2 columns': '', '3 columns': '', '4 columns': '', '5 columns': '',
  'Wide + 1': 'yw-card-grid--wide-1', '1 + Wide': 'yw-card-grid--1-wide', 'Feature + 4': 'yw-card-grid--feature-4', 'Feature + 2': 'yw-card-grid--feature-2', 'Overflow scroll': 'yw-card-grid--scroll',
};

export type CardGridProps = {
  /** Figma: Layout */
  Layout?: CardGridLayout;
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: Show intro — the Section intro on top */
  intro?: SectionIntroProps;
  /** Figma: Cell 1–10 / Cards */
  cells: ReactNode[];
  label?: string;
};

export function CardGrid({ Layout = '3 columns', intro, cells, label }: CardGridProps) {
  const cols = parseInt(Layout, 10) || 3;
  return (
    <section className={['yw-block', 'yw-card-grid', CLS[Layout]].filter(Boolean).join(' ')} aria-label={label ?? intro?.Kicker}>
      <div className="yw-block__inner yw-card-grid__inner">
        {intro && <div className="yw-card-grid__intro"><SectionIntro {...intro} /></div>}
        <ul className="yw-card-grid__grid" style={{ ['--_cols' as string]: cols } as CSSProperties} tabIndex={Layout === 'Overflow scroll' ? 0 : undefined}>
          {cells.map((c, i) => <li key={i} style={{ ['--_i' as string]: i % 4 } as CSSProperties}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}
