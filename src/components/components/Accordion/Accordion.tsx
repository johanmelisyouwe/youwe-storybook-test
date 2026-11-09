import type { ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import '../../shared/focus-ring.css';
import './Accordion.css';

/* Accordion — Figma node 18830:12898 (page "– Accordion"). Native <details>/<summary>, as the Figma Interaction line asks. */

export type AccordionProps = {
  /** Figma: Style */
  Style?: 'Caret' | 'Plus-Minus';
  /** Figma: Expanded (initial state) */
  Expanded?: 'No' | 'Yes';
  label: string;
  /** Figma: Content slot */
  children: ReactNode;
  name?: string;
  className?: string;
  summaryClassName?: string;
};

export function Accordion({ Style = 'Caret', Expanded = 'No', label, children, name, className, summaryClassName }: AccordionProps) {
  return (
    <details className={['yw-accordion', `yw-accordion--${Style.toLowerCase()}`, className].filter(Boolean).join(' ')} open={Expanded === 'Yes'} name={name}>
      <summary className={['yw-accordion__header', 'yw-focus-ring', summaryClassName].filter(Boolean).join(' ')}>
        <span className="yw-accordion__label yw-body-lg-med">{label}</span>
        {Style === 'Caret' ? (
          <span className="yw-accordion__icon" aria-hidden="true"><Icon name="chevron-down" size={24} /></span>
        ) : (
          <>
            <span className="yw-accordion__icon yw-accordion__icon--closed" aria-hidden="true"><Icon name="add" size={24} /></span>
            <span className="yw-accordion__icon yw-accordion__icon--open" aria-hidden="true"><Icon name="remove" size={24} /></span>
          </>
        )}
      </summary>
      <div className="yw-accordion__content yw-body-md-reg">{children}</div>
    </details>
  );
}
