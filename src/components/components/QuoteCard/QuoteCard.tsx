import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './QuoteCard.css';

/* Quote Card — Figma 26895:260 (page "Cards"). */

export type QuoteCardProps = {
  Quote: string;
  Name: string;
  /** Figma: Role (Show role) */
  Role?: string;
  /** Figma: Logo (Show logo) */
  logo?: ReactNode;
  /** Figma: Show quote mark */
  'Show quote mark'?: boolean;
  /** Figma: Show buttons (up to 3) */
  buttons?: { label: string; href?: string }[];
  className?: string;
};

export function QuoteCard({ Quote, Name, Role, logo, 'Show quote mark': mark = true, buttons, className }: QuoteCardProps) {
  return (
    <figure className={['yw-quote-card', className].filter(Boolean).join(' ')}>
      <div className="yw-quote-card__quote">
        {mark && <span className="yw-quote-card__mark" aria-hidden="true">“</span>}
        <blockquote className="yw-body-xl-reg">{Quote}</blockquote>
      </div>
      <div className="yw-quote-card__bottom">
        <figcaption className="yw-quote-card__attribution">
          <span className="yw-quote-card__person">
            <span className="yw-body-sm-bold">{Name}</span>
            {Role && <span className="yw-quote-card__role yw-body-sm-reg">{Role}</span>}
          </span>
          {logo && <span className="yw-quote-card__logo">{logo}</span>}
        </figcaption>
        {buttons && buttons.length > 0 && (
          <div className="yw-quote-card__actions">{buttons.slice(0, 3).map((b) => <Button key={b.label} Variant="Solid" Size="M" label={b.label} href={b.href} />)}</div>
        )}
      </div>
    </figure>
  );
}
