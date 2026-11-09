import { CardMedia } from '../../shared/CardMedia';
import '../../shared/block.css';
import '../AccordionList/AccordionList.css';

/* Content blocks/Awards — Figma 27096:9988. Styles in AccordionList.css (batch 9 blocks). */

export type AwardsProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: Title */
  Title?: string;
  /** Badges (95×95); `image` is the badge artwork, `name` its accessible name */
  badges: { name: string; image?: string }[];
};

export function Awards({ Title = 'Trusted by industry leaders', badges }: AwardsProps) {
  return (
    <section className="yw-block yw-awards" aria-label={Title}>
      <div className="yw-block__inner">
        <div className="yw-awards__row yw-block-reveal">
          <h2 className="yw-awards__title yw-body-lg-bold">{Title}</h2>
          <ul className="yw-awards__badges">
            {badges.map((b) => <li key={b.name} className="yw-awards__badge" title={b.name}><CardMedia src={b.image} alt={b.name} ratio="1 / 1" /><span className="yw-visually-hidden">{b.name}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
