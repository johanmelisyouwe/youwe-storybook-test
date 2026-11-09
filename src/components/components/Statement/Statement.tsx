import '../../shared/block.css';
import './Statement.css';

/* Content blocks/Statement — Figma 26543:21679. */

export type StatementProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  text: string;
  /** Optional giant decorative words that drift on scroll (aria-hidden) */
  rows?: string[];
};

export function Statement({ text, rows }: StatementProps) {
  return (
    <section className="yw-block yw-statement">
      {rows && rows.length > 0 && (
        <div className="yw-statement__rows" aria-hidden="true">{rows.map((r) => <span key={r} className="yw-statement__row yw-heading-3xl">{r}</span>)}</div>
      )}
      <div className="yw-block__inner">
        <p className="yw-statement__text yw-heading-xl">{text}</p>
      </div>
    </section>
  );
}
