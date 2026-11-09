import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/focus-ring.css';
import '../../shared/block.css';
import './VerticalSlider.css';

/*
  Vertical slider — Figma 26715:410; _Vertical slider/Index item 26713:47; _Vertical slider/Slide 26713:174.
  Interaction (Figma): index items are buttons (hover and focus also switch slides). Desktop pins and follows
  scroll (`pin`); mobile is stacked without pinning.
*/

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');
type Btn = { label: string; href: string };

export type SlideData =
  | { Type: 'Service'; eyebrow: string; Title: string; body: string; pills?: string[]; button?: Btn }
  | { Type: 'Quote'; quote: string; name: string; role?: string; button?: Btn }
  | { Type: 'Stat'; eyebrow: string; value: string; statement: string; button?: Btn }
  | { Type: 'Case'; eyebrow: string; Title: string; body: string; image?: string; button?: Btn }
  | { Type: 'Content'; eyebrow: string; Title: string; body: string; list?: string[] };

/* _Vertical slider/Slide */
export function Slide(props: SlideData) {
  switch (props.Type) {
    case 'Service':
      return (
        <div className="yw-slide">
          <div className="yw-slide__text">
            <h3 className="yw-slide__heading"><span className="yw-body-sm-bold">{props.eyebrow}</span><span className="yw-heading-3xl">{props.Title}</span></h3>
            <p className="yw-body-lg-reg">{props.body}</p>
          </div>
          {props.pills && <div className="yw-slide__pills">{props.pills.map((p) => <span key={p} className="yw-card-tag yw-body-xs-reg">{p}</span>)}</div>}
          {props.button && <Button Variant="Solid" Size="M" label={props.button.label} href={props.button.href} />}
        </div>
      );
    case 'Quote':
      return (
        <figure className="yw-slide" style={{ margin: 0 }}>
          <blockquote className="yw-heading-2xl">{props.quote}</blockquote>
          <figcaption className="yw-slide__attribution">
            <span className="yw-slide__person"><span className="yw-body-lg-med">{props.name}</span>{props.role && <span className="yw-slide__secondary yw-body-md-reg">{props.role}</span>}</span>
            {props.button && <Button Variant="Outline" Size="M" label={props.button.label} href={props.button.href} />}
          </figcaption>
        </figure>
      );
    case 'Stat':
      return (
        <div className="yw-slide">
          <h3 className="yw-slide__heading"><span className="yw-body-sm-bold">{props.eyebrow}</span><span className="yw-slide__value yw-heading-3xl">{props.value}</span></h3>
          <p className="yw-heading-md">{props.statement}</p>
          {props.button && <Button Variant="Outline" Size="M" label={props.button.label} href={props.button.href} />}
        </div>
      );
    case 'Case':
      return (
        <div className="yw-slide yw-slide--case">
          <CardMedia src={props.image} className="yw-slide__image" />
          <div className="yw-slide__text">
            <span className="yw-body-sm-bold">{props.eyebrow}</span>
            <h3 className="yw-heading-xl" style={{ margin: 0 }}>{props.Title}</h3>
            <p className="yw-slide__secondary yw-body-lg-reg">{props.body}</p>
            {props.button && <Button Variant="Solid" Size="M" label={props.button.label} href={props.button.href} />}
          </div>
        </div>
      );
    default:
      return (
        <div className="yw-slide">
          <h3 className="yw-slide__heading"><span className="yw-body-sm-bold">{props.eyebrow}</span><span className="yw-heading-xl">{props.Title}</span></h3>
          <p className="yw-slide__secondary yw-body-lg-reg">{props.body}</p>
          {props.list && <ul className="yw-slide__list">{props.list.map((l) => <li key={l} className="yw-body-md-med">{l}</li>)}</ul>}
        </div>
      );
  }
}

/* _Vertical slider/Index item */
export function IndexItem({ label, active, onSelect, className }: { label: string; active?: boolean; onSelect?: () => void; className?: string }) {
  return (
    <button type="button" className={cx('yw-vindex', 'yw-focus-ring', className)} aria-current={active ? 'true' : undefined} onClick={onSelect} onMouseEnter={onSelect} onFocus={onSelect}>
      <span className="yw-vindex__bar" aria-hidden="true" />
      <span className="yw-body-sm-bold">{label}</span>
    </button>
  );
}

export type VerticalSliderProps = {
  /** Figma: Index */
  Index?: 'Right' | 'Left';
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  Kicker: string;
  /** Figma: Tagline (Show tagline) */
  Tagline?: string;
  items: { label: string; slide: SlideData }[];
  /** Figma: Show background image */
  backgroundImage?: string | true;
  /** Figma: Show progress */
  'Show progress'?: boolean;
  /** Figma: Show steps (mobile) */
  'Show steps'?: boolean;
  /** Desktop: pin the section and follow scroll */
  pin?: boolean;
  /** Initially active item */
  initial?: number;
};

export function VerticalSlider({ Index = 'Right', Device = 'Desktop', Kicker, Tagline, items, backgroundImage, 'Show progress': progress = false, 'Show steps': steps = true, pin = false, initial = 0 }: VerticalSliderProps) {
  const [active, setActive] = useState(initial);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!pin || Device !== 'Desktop') return;
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, span)));
      setActive(Math.min(items.length - 1, Math.floor(p * items.length)));
    };
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, [pin, Device, items.length]);

  const header = (
    <div className="yw-vslider__header">
      <span className="yw-vslider__kicker"><span className="yw-vslider__line" aria-hidden="true" /><span className="yw-body-sm-bold">{Kicker}</span></span>
      {Tagline && <span className="yw-body-sm-bold">{Tagline}</span>}
    </div>
  );
  const bg = backgroundImage && <CardMedia src={typeof backgroundImage === 'string' ? backgroundImage : undefined} className="yw-vslider__bg" />;

  if (Device === 'Mobile') {
    return (
      <section className={cx('yw-vslider', 'yw-vslider--mobile', Index === 'Left' && 'yw-vslider--left')} aria-label={Kicker}>
        <div className="yw-vslider__frame">
          {bg}
          {header}
          <div className="yw-vslider__stack">
            {items.map((it, i) => (
              <div key={it.label} className="yw-vslider__step">
                <div className="yw-vslider__current">
                  {steps && <span className="yw-vslider__steps" aria-hidden="true">{items.map((_, j) => <span key={j} className={j <= i ? 'is-done' : undefined} />)}</span>}
                  <span className="yw-body-sm-bold">{`${String(i + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')} · ${it.label}`}</span>
                </div>
                <Slide {...it.slide} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={cx('yw-vslider', pin && 'yw-vslider--pinned', Index === 'Left' && 'yw-vslider--left')} style={{ ['--_steps' as string]: items.length }} aria-label={Kicker}>
      <div className="yw-vslider__frame">
        {bg}
        {header}
        <div className="yw-vslider__body">
          <div className="yw-vslider__slide" aria-live="polite"><Slide key={active} {...items[active].slide} /></div>
          <ul className="yw-vslider__index">
            {items.map((it, i) => <li key={it.label}><IndexItem label={it.label} active={i === active} onSelect={() => setActive(i)} /></li>)}
          </ul>
        </div>
        {progress && <div className="yw-vslider__progress" aria-hidden="true"><span style={{ width: `${((active + 1) / items.length) * 100}%` }} /></div>}
      </div>
    </section>
  );
}
