import { useState } from 'react';
import { Icon } from '../../icons/Icon';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/focus-ring.css';
import './IndustryListItem.css';

/*
  Industry List Item — Figma 25019:679 (page "Industries").
  Interaction (Figma): the first item is active; the active item follows hover and focus.
*/

export type Industry = {
  Number: string;
  Title: string;
  Subtitle?: string;
  /** Preview image (desktop) and the customer shown on it (Figma: Show preview image) */
  preview?: { image?: string; customer: string };
  href: string;
};

export type IndustryListItemProps = Industry & {
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: Expanded */
  Expanded?: 'No' | 'Yes';
  onActivate?: () => void;
  className?: string;
};

export function IndustryListItem({ Number, Title, Subtitle, preview, href, Device = 'Desktop', Expanded = 'No', onActivate, className }: IndustryListItemProps) {
  const desktop = Device === 'Desktop';
  return (
    <li>
      <a
        href={href}
        className={['yw-industry', 'yw-focus-ring', `yw-industry--${Device.toLowerCase()}`, Expanded === 'Yes' && 'is-expanded', className].filter(Boolean).join(' ')}
        onMouseEnter={onActivate}
        onFocus={onActivate}
      >
        <span className="yw-industry__content">
          <span className={['yw-industry__number', desktop ? 'yw-body-xl-reg' : 'yw-body-lg-reg'].join(' ')}>{Number}</span>
          <span className="yw-industry__text">
            <span className="yw-heading-lg">{Title}</span>
            {Subtitle && <span className="yw-industry__sub yw-body-md-reg"><span>{Subtitle}</span></span>}
          </span>
        </span>
        <span className="yw-industry__chevron" aria-hidden="true"><Icon name="chevron-right" size={24} /></span>
        {desktop && preview && (
          <CardMedia src={preview.image} className="yw-industry__preview">
            <span className="yw-industry__customer yw-body-sm-reg">{preview.customer}</span>
          </CardMedia>
        )}
      </a>
    </li>
  );
}

/** List of industries; the first is active and the active row follows hover and focus. */
export function IndustryList({ items, Device = 'Desktop' }: { items: Industry[]; Device?: 'Desktop' | 'Mobile' }) {
  const [active, setActive] = useState(0);
  return (
    <ul className={['yw-industry-list', Device === 'Mobile' && 'yw-industry-list--mobile'].filter(Boolean).join(' ')}>
      {items.map((it, i) => (
        <IndustryListItem key={it.Number} {...it} Device={Device} Expanded={i === active ? 'Yes' : 'No'} onActivate={() => setActive(i)} />
      ))}
    </ul>
  );
}
