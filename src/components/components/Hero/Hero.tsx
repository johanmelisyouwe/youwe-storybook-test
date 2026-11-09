import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Breadcrumbs, type Crumb } from '../Breadcrumbs/Breadcrumbs';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/block.css';
import './Hero.css';

/* Content blocks/Hero — Figma 24985:698; _Hero/Bar — 26880:273; _Hero/Label — 26882:927. */

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/* _Hero/Label */
export type HeroLabelProps = { Type?: 'Subtitle' | 'Breadcrumb'; Device?: 'Desktop' | 'Mobile'; Subtitle?: string; crumbs?: Crumb[] };
export function HeroLabel({ Type = 'Subtitle', Device = 'Desktop', Subtitle, crumbs = [] }: HeroLabelProps) {
  if (Type === 'Breadcrumb') return <Breadcrumbs items={crumbs} Device={Device} {...{ 'Filter button': false }} />;
  return <span className="yw-kicker yw-body-sm-bold">{Subtitle}</span>;
}

/* _Hero/Bar */
export type HeroStat = { value: string; label: string; client: string };
export type HeroBarProps = { Type?: 'Logos' | 'Stats'; logos?: ReactNode[]; stats?: HeroStat[] };
export function HeroBar({ Type = 'Logos', logos = [], stats = [] }: HeroBarProps) {
  const items = Type === 'Logos'
    ? logos.map((l, i) => <span key={i} className="yw-hero-bar__logo">{l}</span>)
    : stats.map((s) => (
      <span key={s.client + s.value} className="yw-hero-bar__stat">
        <span className="yw-heading-lg">{s.value}</span>
        <span className="yw-hero-bar__label yw-body-sm-reg">{s.label}</span>
        <span className="yw-hero-bar__client yw-body-sm-med">{s.client}</span>
      </span>
    ));
  // The track holds the items twice so the marquee loops seamlessly; the copy is hidden from screen readers.
  return (
    <div className={cx('yw-hero-bar', Type === 'Stats' && 'yw-hero-bar--stats')}>
      <div className="yw-hero-bar__track">
        {items}
        <span aria-hidden="true" style={{ display: 'contents' }}>{items}</span>
      </div>
    </div>
  );
}

export type HeroProps = {
  /** Figma: Variant */
  Variant?: 'Gradient' | 'Title + image';
  /** Figma: Device (layout also follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  /** Title lines; the second line is brand red (Gradient) */
  title: string[];
  body?: string;
  /** Figma: Show label */
  label?: HeroLabelProps;
  /** Figma: Show buttons / Show second button */
  buttons?: { label: string; href: string }[];
  /** Figma: Show bar */
  bar?: HeroBarProps;
  /** Figma: Image (background for Gradient, wide image for Title + image) */
  image?: string;
  /** Title + image: client logo */
  logo?: ReactNode;
  /** Figma: Show header — the Header/Corporate instance on top */
  header?: ReactNode;
  /** Scroll: hero recedes over the first 860px */
  recede?: boolean;
};

export function Hero({ Variant = 'Gradient', Device = 'Desktop', title, body, label, buttons = [], bar, image, logo, header, recede = false }: HeroProps) {
  const lines = <h1 className="yw-hero__title yw-heading-3xl">{title.map((t, i) => <span key={i} className="yw-hero__line"><span>{t}</span></span>)}</h1>;
  if (Variant === 'Title + image') {
    return (
      <section className={cx('yw-block', 'yw-hero', 'yw-hero--image', Device === 'Mobile' && 'yw-hero--mobile')}>
        {header && <div className="yw-hero__header">{header}</div>}
        <div className="yw-block__inner" style={{ paddingBottom: 0 }}>
          <div className="yw-hero__row">
            <div className="yw-hero__titlecol">{label && <HeroLabel Device={Device} {...label} />}{lines}</div>
            {logo && <span className="yw-hero__logo">{logo}</span>}
          </div>
        </div>
        <CardMedia src={image} ratio="16 / 9" className="yw-hero__image" />
      </section>
    );
  }
  return (
    <section className={cx('yw-block', 'yw-hero', 'yw-hero--gradient', Device === 'Mobile' && 'yw-hero--mobile', recede && 'yw-hero--recede')}>
      <CardMedia src={image} className="yw-hero__media" />
      {header && <div className="yw-hero__header">{header}</div>}
      <div className="yw-block__inner yw-hero__content">
        <div className="yw-hero__titlecol">{label && <HeroLabel Device={Device} {...label} />}{lines}</div>
        {(body || buttons.length > 0) && (
          <div className="yw-hero__textcol">
            {body && <p className="yw-body-lg-reg">{body}</p>}
            {buttons.length > 0 && <div className="yw-hero__actions">{buttons.slice(0, 2).map((b, i) => <Button key={b.label} Variant={i === 0 ? 'Primary' : 'Solid'} Size="M" label={b.label} href={b.href} />)}</div>}
          </div>
        )}
      </div>
      {bar && <HeroBar {...bar} />}
    </section>
  );
}
