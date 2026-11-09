import { FeatureCard, type FeatureCardProps } from '../FeatureCard/FeatureCard';
import { Words } from '../SectionHeader/SectionHeader';
import '../../shared/block.css';
import '../StatsBlock/StatsBlock.css';

/* Content blocks/Feature list — Figma 26534:132. Styles in StatsBlock.css (shared grid blocks). */

export type FeatureListProps = {
  /** Figma: Layout */
  Layout?: 'Grid' | 'Split';
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  kicker?: string;
  heading: string;
  body?: string;
  items: Omit<FeatureCardProps, 'Variant'>[];
};

export function FeatureList({ Layout = 'Grid', kicker, heading, body, items }: FeatureListProps) {
  const head = (
    <div className="yw-feature-list__head">
      {kicker && <span className="yw-kicker yw-body-sm-bold">{kicker}</span>}
      <h2 className="yw-heading-xl"><Words text={heading} /></h2>
      {body && <p className="yw-body-md-reg">{body}</p>}
    </div>
  );
  return (
    <section className={['yw-block', 'yw-feature-list', Layout === 'Split' && 'yw-feature-list--split'].filter(Boolean).join(' ')}>
      <div className="yw-block__inner yw-feature-list__inner">
        {head}
        {Layout === 'Grid'
          ? <ul className="yw-feature-list__grid">{items.map((it) => <li key={it.Title}><FeatureCard {...it} Variant="Card" reveal /></li>)}</ul>
          : <ol className="yw-feature-list__items">{items.map((it, i) => <li key={it.Title}><FeatureCard {...it} Number={it.Number ?? String(i + 1).padStart(2, '0')} Variant="Plain" reveal /></li>)}</ol>}
      </div>
    </section>
  );
}
