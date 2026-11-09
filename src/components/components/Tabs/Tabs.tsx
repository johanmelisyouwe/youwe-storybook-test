import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button/Button';
import '../../shared/focus-ring.css';
import './Tabs.css';

/*
  Tab — Figma 15713:6093, Tab group — 15715:6340, _Trailing action — 15797:7280 (page "– Tabs").
  TabGroup implements WAI-ARIA tabs: roving tabindex, Arrow Left/Right, Home, End (Figma Interaction line).
*/

export type TabProps = {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  id?: string;
  controls?: string;
  tabIndex?: number;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonRef?: (el: HTMLButtonElement | null) => void;
};

export function Tab({ label, selected = false, disabled, id, controls, tabIndex, onClick, onKeyDown, className, buttonRef }: TabProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      role="tab"
      id={id}
      aria-selected={selected}
      aria-controls={controls}
      tabIndex={tabIndex ?? (selected ? 0 : -1)}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={['yw-tab', 'yw-focus-ring', className].filter(Boolean).join(' ')}
    >
      <span className={selected ? 'yw-body-sm-bold' : 'yw-body-sm-reg'}>{label}</span>
    </button>
  );
}

export type TabGroupProps = {
  /** Tab labels (Figma: Tab container slot) */
  tabs: string[];
  /** Panel content per tab (optional) */
  panels?: ReactNode[];
  selected?: number;
  onChange?: (index: number) => void;
  /** Figma: Trailing action */
  'Trailing action'?: boolean;
  trailingLabel?: string;
  onTrailingAction?: () => void;
  /** Accessible name of the tab list */
  label: string;
};

export function TabGroup({ tabs, panels, selected: controlled, onChange, 'Trailing action': trailing = true, trailingLabel = 'More options', onTrailingAction, label }: TabGroupProps) {
  const [inner, setInner] = useState(controlled ?? 0);
  const selected = controlled ?? inner;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ink, setInk] = useState({ x: 0, w: 0 });
  const base = useId();

  const select = (i: number, focus = false) => {
    setInner(i);
    onChange?.(i);
    if (focus) refs.current[i]?.focus();
  };

  useLayoutEffect(() => {
    const el = refs.current[selected];
    if (el) setInk({ x: el.offsetLeft, w: el.offsetWidth });
  }, [selected, tabs]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    const map: Record<string, number> = { ArrowRight: selected === last ? 0 : selected + 1, ArrowLeft: selected === 0 ? last : selected - 1, Home: 0, End: last };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div>
      <div className="yw-tab-group">
        <div className="yw-tab-group__list" role="tablist" aria-label={label}>
          {tabs.map((t, i) => (
            <Tab
              key={t}
              label={t}
              selected={i === selected}
              id={`${base}-tab-${i}`}
              controls={panels ? `${base}-panel-${i}` : undefined}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              buttonRef={(el) => { refs.current[i] = el; }}
            />
          ))}
          <span className="yw-tab-group__ink" aria-hidden="true" style={{ width: ink.w, transform: `translateX(${ink.x}px)` }} />
        </div>
        {trailing && (
          <div className="yw-tab-group__trailing">
            <Button Variant="Outline" Icon="Only" Size="S" iconName="more-settings-horizontal" label={trailingLabel} onClick={onTrailingAction} />
          </div>
        )}
      </div>
      {panels?.map((p, i) => (
        <div key={i} role="tabpanel" id={`${base}-panel-${i}`} aria-labelledby={`${base}-tab-${i}`} hidden={i !== selected} tabIndex={0} className="yw-tab-panel">
          {p}
        </div>
      ))}
    </div>
  );
}
