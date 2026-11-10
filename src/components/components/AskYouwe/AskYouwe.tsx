import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '../../icons/Icon';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/focus-ring.css';
import '../../shared/block.css';
import './AskYouwe.css';

/*
  Ask Youwe — Figma 27019:3067; Ask Youwe/Snippet — 26692:106; parts _Ask Youwe/Orb, Aura, Button, Chip, Label.
  The UI only: wiring to a real answer service is out of scope (onAsk callback).
*/

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/* _Ask Youwe/Orb */
export function AskOrb({ Size = 'S', className }: { Size?: 'S' | 'M' | 'L'; className?: string }) {
  return <span className={cx('yw-ask-orb', Size !== 'S' && `yw-ask-orb--${Size.toLowerCase()}`, className)} aria-hidden="true" />;
}

/* _Ask Youwe/Aura — place inside a .yw-ask-glass surface */
export function AskAura() {
  return <span className="yw-ask-aura" aria-hidden="true" />;
}

/* _Ask Youwe/Button */
export type AskButtonProps = {
  Type?: 'Label' | 'Icon';
  Variant?: 'Primary' | 'Glass' | 'Disabled';
  Size?: 'M' | 'S';
  label: string;
  icon?: 'arrow-forward' | 'close';
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function AskButton({ Type = 'Label', Variant = 'Glass', Size = 'M', label, icon = 'arrow-forward', href, onClick, className }: AskButtonProps) {
  const cls = cx('yw-ask-btn', 'yw-focus-ring', `yw-ask-btn--${Variant.toLowerCase()}`, Type === 'Icon' && 'yw-ask-btn--icon', Size === 'S' && 'yw-ask-btn--s', className);
  const inner = Type === 'Icon'
    ? <Icon name={icon} size={16} />
    : <><span className="yw-body-sm-med">{label}</span><Icon name={icon} size={16} /></>;
  if (href && Variant !== 'Disabled') return <a href={href} className={cls} aria-label={Type === 'Icon' ? label : undefined}>{inner}</a>;
  return <button type="button" className={cls} onClick={onClick} disabled={Variant === 'Disabled'} aria-label={Type === 'Icon' ? label : undefined}>{inner}</button>;
}

/* _Ask Youwe/Chip */
export function AskChip({ Type = 'Suggestion', label, meta, onClick }: { Type?: 'Suggestion' | 'Context' | 'Key'; label: string; meta?: string; onClick?: () => void }) {
  if (Type === 'Key') return <kbd className="yw-ask-chip yw-ask-chip--key yw-body-xs-med">{label}</kbd>;
  if (Type === 'Context') return <span className="yw-ask-chip yw-ask-chip--context"><span className="yw-ask-chip__meta yw-body-xs-reg">{meta ?? 'This page'}</span><span className="yw-body-xs-med">{label}</span></span>;
  return <button type="button" className="yw-ask-chip yw-ask-chip--suggestion yw-focus-ring yw-body-sm-reg" onClick={onClick}>{label}</button>;
}

/* _Ask Youwe/Label */
export function AskLabel({ label = 'Ask Youwe' }: { label?: string }) {
  return <span className="yw-ask-label yw-body-xs-med"><AskOrb />{label}</span>;
}

export type AskYouweProps = {
  /** Figma: State */
  State?: 'Default' | 'Contextual' | 'Active';
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: Prompt */
  Prompt?: string;
  /** Figma: Show shortcut (⌘K focuses the bar) */
  'Show shortcut'?: boolean;
  /** Contextual: the page-specific question chip */
  context?: string;
  /** Active: Figma Question / Answer / Source */
  Question?: string;
  Answer?: string;
  Source?: string;
  followUp?: string;
  cta?: { label: string; href: string };
  onAsk?: (q: string) => void;
  onClose?: () => void;
  className?: string;
};

export function AskYouwe({
  State = 'Default', Device = 'Desktop', Prompt = 'Ask or search Youwe', 'Show shortcut': shortcut = true, context,
  Question, Answer, Source, followUp, cta, onAsk, onClose, className,
}: AskYouweProps) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState('');

  useEffect(() => {
    if (!shortcut || State === 'Active') return;
    const onKey = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); input.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shortcut, State]);

  useEffect(() => {
    if (State !== 'Active' || !onClose) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [State, onClose]);

  const submit = (e: React.FormEvent) => { e.preventDefault(); if (q.trim()) onAsk?.(q.trim()); };

  if (State === 'Active') {
    return (
      <section className={cx('yw-ask-glass', 'yw-ask-panel', Device === 'Mobile' && 'yw-ask-panel--mobile', className)} aria-labelledby={`${id}-t`}>
        <AskAura />
        <div className="yw-ask-panel__header">
          <AskOrb />
          <span id={`${id}-t`} className="yw-body-md-bold">Ask Youwe</span>
          <AskButton Type="Icon" Size="S" icon="close" label="Close" onClick={onClose} />
        </div>
        {Question && <div className="yw-ask-panel__question"><p className="yw-ask-panel__bubble yw-body-md-reg">{Question}</p></div>}
        <div className="yw-ask-panel__answer" aria-live="polite">
          <p className="yw-body-md-reg">{Answer}</p>
          {Source && <span className="yw-ask-panel__source yw-body-xs-reg">{Source}</span>}
        </div>
        {(followUp || cta) && (
          <div className="yw-ask-panel__followups">
            {followUp && <AskChip label={followUp} onClick={() => onAsk?.(followUp)} />}
            {cta && <AskButton Variant="Primary" label={cta.label} href={cta.href} />}
          </div>
        )}
        <form className="yw-ask-panel__composer" onSubmit={submit}>
          <input className="yw-ask-bar__input yw-body-md-reg" placeholder="Ask a follow-up…" aria-label="Ask a follow-up" value={q} onChange={(e) => setQ(e.target.value)} />
          <AskButton Type="Icon" Variant={q ? 'Primary' : 'Disabled'} label="Send" onClick={() => q && onAsk?.(q)} />
        </form>
      </section>
    );
  }

  return (
    <form role="search" className={cx('yw-ask-glass', 'yw-ask-bar', State === 'Contextual' && Device === 'Desktop' && 'yw-ask-bar--contextual', className)} onSubmit={submit} onClick={() => input.current?.focus()}>
      <AskAura />
      <AskOrb />
      <input ref={input} className="yw-ask-bar__input yw-body-md-reg" placeholder={Prompt} aria-label={Prompt} value={q} onChange={(e) => setQ(e.target.value)} />
      {State === 'Contextual' && context && <span className="yw-ask-bar__context"><AskChip label={context} onClick={() => onAsk?.(context)} /></span>}
      {shortcut && Device === 'Desktop' && <AskChip Type="Key" label="⌘K" />}
    </form>
  );
}

export type AskSnippetProps = {
  /** Figma: Type */
  Type?: 'Question' | 'Nudge' | 'Case';
  Device?: 'Desktop' | 'Mobile';
  /** Question / Nudge text, or the Case Title */
  Title: string;
  /** Case: Meta (Show meta) */
  Meta?: string;
  /** Eyebrow reason, e.g. "Related case" */
  reason?: string;
  image?: string;
  /** Case: Show second button */
  'Show second button'?: boolean;
  href?: string;
  onAsk?: (q: string) => void;
  className?: string;
};

export function AskSnippet({ Type = 'Question', Device = 'Desktop', Title, Meta, reason, image, 'Show second button': second = true, href = '#', onAsk, className }: AskSnippetProps) {
  const base = cx('yw-ask-glass', 'yw-ask-glass--flat', 'yw-ask-snippet', `yw-ask-snippet--${Type.toLowerCase()}`, Device === 'Mobile' && 'yw-ask-snippet--mobile', className);
  if (Type === 'Case') {
    return (
      <article className={base}>
        <CardMedia src={image} className="yw-ask-snippet__image" />
        <div className="yw-ask-snippet__content">
          <AskLabel label={`Ask Youwe · ${reason ?? 'Related case'}`} />
          <h3 className="yw-body-xl-med" style={{ margin: 0 }}>{Title}</h3>
          {Meta && <span className="yw-body-sm-reg">{Meta}</span>}
          <div className="yw-ask-snippet__actions">
            <AskButton Variant="Primary" label="Read the case" href={href} />
            {second && <AskButton label="Ask about it" onClick={() => onAsk?.(Title)} />}
          </div>
        </div>
      </article>
    );
  }
  if (Type === 'Nudge') {
    return (
      <aside className={base}>
        <AskAura />
        <span className="yw-ask-snippet__text"><AskOrb /><span className="yw-body-sm-reg">{Title}</span></span>
        <AskButton label="Read" href={href} />
      </aside>
    );
  }
  return (
    <aside className={base}>
      <AskAura />
      <span className="yw-ask-snippet__text">
        <AskLabel label={reason ? `Ask Youwe · ${reason}` : 'Ask Youwe'} />
        <span className="yw-body-md-reg">{Title}</span>
      </span>
      <AskButton Type="Icon" Variant="Primary" label={`Ask: ${Title}`} onClick={() => onAsk?.(Title)} />
    </aside>
  );
}


/* Docked bar (code: the site's sticky Ask Youwe bar; Figma only has the bar itself, not its placement) */
export type AskDockProps = {
  Device?: 'Desktop' | 'Mobile';
  /** Page-specific question shown as the Contextual chip (desktop; on mobile the bar stays Default, there is no room) */
  context?: string;
  /** Static answer shown in the panel (no AI service is connected) */
  answer?: Partial<AskYouweProps>;
  /** Scroll distance before the bar slides in (px) */
  after?: number;
};

/**
 * Fixed to the bottom of the viewport, centred on the page column. Slides in after the hero, steps aside
 * while the footer is on screen, and opens the answer panel above itself; Esc or close returns to the bar.
 */
export function AskDock({ Device = 'Desktop', context, answer, after = 480 }: AskDockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [q, setQ] = useState<string | null>(null);
  useEffect(() => {
    const root = ref.current?.closest('[data-page]') ?? document;
    const footer = root.querySelector('.yw-footer');
    let footerInView = false;
    const update = () => setShown(window.scrollY > after && !footerInView);
    const io = footer && typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([e]) => { footerInView = e.isIntersecting; update(); })
      : null;
    if (io && footer) io.observe(footer);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', update); io?.disconnect(); };
  }, [after]);
  const open = q !== null;
  return (
    <div ref={ref} className={cx('yw-ask-dock', (shown || open) && 'is-shown', open && 'is-open', Device === 'Mobile' && 'yw-ask-dock--mobile')}>
      {open
        ? <AskYouwe key="panel" State="Active" Device={Device} {...answer} Question={q} onClose={() => setQ(null)} onAsk={setQ} />
        : <AskYouwe key="bar" State={context && Device === 'Desktop' ? 'Contextual' : 'Default'} Device={Device} context={context} onAsk={setQ} />}
    </div>
  );
}
