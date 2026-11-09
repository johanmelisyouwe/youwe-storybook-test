import type { ReactNode } from 'react';
import { TechnologyCard, type TechnologyCardProps } from '../TechnologyCard/TechnologyCard';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { SplitIntro } from '../ServicesSplit/ServicesSplit';
import '../../shared/block.css';
import '../ServicesSplit/ServicesSplit.css';

/* Content blocks/Tech partners split — Figma 26851:911. Styles in ServicesSplit.css. */

export type TechPartnersSplitProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  kicker: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
  snippets?: ReactNode;
  groups: { label: string; partners: TechnologyCardProps[] }[];
};

export function TechPartnersSplit({ kicker, title, body, link, snippets, groups }: TechPartnersSplitProps) {
  return (
    <section className="yw-block yw-split yw-split--tech" aria-label={title}>
      <div className="yw-block__inner">
        <SplitIntro kicker={kicker} title={title} body={body} snippets={snippets} link={link && <ButtonLink Size="md" label={link.label} href={link.href} />} />
        <div className="yw-split__groups">
          {groups.map((g) => (
            <section key={g.label} className="yw-split__group yw-block-reveal" aria-label={g.label}>
              <h3 className="yw-split__group-label yw-body-xs-bold">{g.label}</h3>
              <ul className="yw-split__cols" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {g.partners.map((p) => <li key={p.Name}><TechnologyCard {...p} Layout="Vertical" /></li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
