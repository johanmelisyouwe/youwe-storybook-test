import type { ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import { CardReveal } from '../../shared/CardReveal';
import { CardMedia } from '../../shared/CardMedia';
import './CaseCard.css';

/*
  Case Card — Figma 24984:520; _Case Card/Stat — 26708:88 (page "Cards").
  Whole card is one link; Hover/focus plays the red reveal.
*/

export type CaseStatType = 'Single' | 'Trend' | 'Before-after' | 'Stacked' | 'Pair';
export type CaseStatProps = {
  /** Figma: Type */
  Type?: CaseStatType;
  /** Figma: Size (L = desktop card, M = mobile card) */
  Size?: 'L' | 'M';
  value: string;
  label: string;
  /** Before-after: the "before" value */
  before?: string;
  /** Pair: the second stat */
  value2?: string;
  label2?: string;
};

export function CaseStat({ Type = 'Single', Size = 'L', value, label, before, value2, label2 }: CaseStatProps) {
  const v = Size === 'L' ? 'yw-heading-lg' : 'yw-heading-md';
  const l = Size === 'L' ? 'yw-body-sm-reg' : 'yw-body-xs-reg';
  const icon = Size === 'L' ? 24 : 16;
  const cls = ['yw-case-stat', `yw-case-stat--${Size.toLowerCase()}`, (Type === 'Before-after' || Type === 'Stacked') && 'yw-case-stat--stack', Type === 'Pair' && 'yw-case-stat--pair'].filter(Boolean).join(' ');
  if (Type === 'Pair') {
    return (
      <span className={cls}>
        <span className="yw-case-stat__pair"><span className={v}>{value}</span><span className={l}>{label}</span></span>
        <span className="yw-case-stat__divider" aria-hidden="true" />
        <span className="yw-case-stat__pair"><span className={v}>{value2}</span><span className={l}>{label2}</span></span>
      </span>
    );
  }
  let main: ReactNode = <span className={v}>{value}</span>;
  if (Type === 'Trend') main = <span className="yw-case-stat__value"><Icon name="arrow-upward" size={icon} /><span className={v}>{value}</span></span>;
  if (Type === 'Before-after') main = (
    <span className="yw-case-stat__values">
      <span className={v}>{before}</span>
      <Icon name="arrow-forward" size={icon} />
      <span className="yw-visually-hidden">to</span>
      <span className={v}>{value}</span>
    </span>
  );
  return <span className={cls}>{main}<span className={l}>{label}</span></span>;
}

export type CaseCardSize = 'One third' | 'Two thirds' | 'Full' | 'One quarter';
export type CaseCardProps = {
  /** Figma: Size */
  Size?: CaseCardSize;
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  Title: string;
  Client: string;
  /** Figma: Client logo */
  logo?: ReactNode;
  /** Figma: Image — case photo (without it: the image placeholder) */
  image?: string;
  /** Figma: Show stat */
  stat?: Omit<CaseStatProps, 'Size'>;
  /** Figma: Show tags */
  tags?: string[];
  'Hover CTA'?: string;
  'Hover context'?: string;
  href: string;
  className?: string;
};

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

export function CaseCard({ Size = 'One third', Device = 'Desktop', Title, Client, logo, image, stat, tags, 'Hover CTA': cta = 'Read the case', 'Hover context': ctx, href, className }: CaseCardProps) {
  return (
    <a href={href} className={['yw-reveal', 'yw-case-card', Device === 'Mobile' ? 'yw-case-card--mobile' : `yw-case-card--${slug(Size)}`, className].filter(Boolean).join(' ')}>
      <CardMedia src={image} className="yw-case-card__image">
        {logo && <span className="yw-case-card__logo">{logo}</span>}
        {stat && <span className="yw-case-card__stat"><CaseStat {...stat} Size={Device === 'Mobile' ? 'M' : 'L'} /></span>}
      </CardMedia>
      <span className="yw-case-card__text">
        <span className="yw-body-xl-med">{Title}</span>
        <span className="yw-case-card__client yw-body-md-reg">{Client}</span>
        {tags && tags.length > 0 && <span className="yw-card-tags">{tags.map((t) => <span key={t} className="yw-card-tag yw-body-xs-reg">{t}</span>)}</span>}
      </span>
      <CardReveal cta={cta} context={ctx ?? Client} />
    </a>
  );
}
