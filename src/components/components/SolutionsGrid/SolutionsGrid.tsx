import { CardMedia } from '../../shared/CardMedia';
import '../../shared/block.css';

/*
  Content blocks/Solutions grid — Figma 24984:21277. Title (body/2xl/med, centred) and a three-column grid of
  image cards (416×367 image, radius 4; title body/xl/med, line body/md/reg secondary, gap 12; 16 under the
  image), gap 16. Motion (Figma): block reveal staggered. Styles inline: the block only uses shared pieces.
*/

export type SolutionsGridProps = {
  title?: string;
  items: { title: string; body: string; image?: string; href?: string }[];
};

export function SolutionsGrid({ title = 'Solutions', items }: SolutionsGridProps) {
  return (
    <section className="yw-block" aria-label={title}>
      <div className="yw-block__inner" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
        <h2 className="yw-body-2xl-med" style={{ margin: 0, textAlign: 'center' }}>{title}</h2>
        <ul className="yw-solutions" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 'var(--spacing-sm)', margin: 0, padding: 0, listStyle: 'none' }}>
          {items.map((it) => (
            <li key={it.title} className="yw-block-reveal" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <CardMedia src={it.image} ratio="416 / 367" />
              <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                <span className="yw-body-xl-med">{it.title}</span>
                <span className="yw-body-md-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{it.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
