import { useEffect, useRef, useState, type CSSProperties } from 'react';
import '../../shared/block.css';
import './SectionHeader.css';

/* Content blocks/Section header — Figma 24985:699; Content blocks/Section intro — 26847:85. */

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/** Splits a heading into words for the masked word-rise reveal (screen readers get the plain text). */
export function Words({ text }: { text: string }) {
  const lines = text.split('\n');
  let i = 0;
  return (
    <>
    <span className="yw-visually-hidden">{text.replace(/\n/g, ' ')}</span>
    <span className="yw-words" aria-hidden="true">
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block', overflow: 'visible' }}>
          {line.split(' ').map((w, wi) => <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}><span style={{ display: 'inline-block', ['--_i' as string]: i++ } as CSSProperties} className="yw-word">{w}&nbsp;</span></span>)}
        </span>
      ))}
    </span>
    </>
  );
}

export type SectionHeaderProps = {
  /** Figma: Alignment */
  Alignment?: 'Left' | 'Centered';
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: Kicker (shown on Left) */
  kicker?: string;
  heading: string;
  body?: string;
};

export function SectionHeader({ Alignment = 'Left', kicker, heading, body }: SectionHeaderProps) {
  return (
    <section className={cx('yw-block', 'yw-section-header', Alignment === 'Centered' && 'yw-section-header--centered')}>
      <div className="yw-block__inner">
        <div className="yw-section-header__text">
          {kicker && Alignment === 'Left' && <span className="yw-kicker yw-body-sm-bold">{kicker}</span>}
          <h2 className="yw-heading-xl"><Words text={heading} /></h2>
          {body && <p className="yw-body-md-reg">{body}</p>}
        </div>
      </div>
    </section>
  );
}

/** Scroll highlight: words go from 28% to 100% opacity as the paragraph scrolls up, and never fade back. */
function useHighlight(words: number) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(words);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setLit(0);
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.9 - r.top) / (window.innerHeight * 0.5)));
      setLit((prev) => Math.max(prev, Math.round(p * words)));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [words]);
  return [ref, lit] as const;
}

export type SectionIntroProps = {
  /** Figma: Layout */
  Layout?: 'Split' | 'Stacked';
  /** Figma: Kicker (Show kicker) */
  Kicker?: string;
  Title: string;
  /** Figma: Body (Show body) */
  Body?: string;
  className?: string;
};

export function SectionIntro({ Layout = 'Split', Kicker, Title, Body, className }: SectionIntroProps) {
  const words = Body ? Body.split(' ') : [];
  const [ref, lit] = useHighlight(words.length);
  return (
    <div className={cx('yw-section-intro', Layout === 'Stacked' && 'yw-section-intro--stacked', className)}>
      {Kicker && <span className="yw-kicker yw-body-sm-bold">{Kicker}</span>}
      <div className="yw-section-intro__row">
        <h2 className="yw-heading-xl"><Words text={Title} /></h2>
        {Body && (
          <p ref={ref} className="yw-section-intro__body yw-body-md-reg">
            <span className="yw-visually-hidden">{Body}</span>
            {words.map((w, i) => <span key={i} aria-hidden="true" style={{ opacity: i < lit ? 1 : 0.28 }}>{w} </span>)}
          </p>
        )}
      </div>
    </div>
  );
}
