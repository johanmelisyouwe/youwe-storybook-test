import { useEffect, useId, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Pills } from '../Pills/Pills';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import { Button } from '../Button/Button';
import { Icon } from '../../icons/Icon';
import '../../shared/focus-ring.css';
import './FilterBar.css';

/* Content blocks/Filter bar — Figma 27090:1370 (variants: Desktop Default, Mobile Default, Mobile Open). */

export type FilterField = { label: string; options: { value: string; label: string }[] };
export type FilterBarProps = {
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  /** Figma: State — Open shows the mobile bottom sheet (Mobile only) */
  State?: 'Default' | 'Open';
  /** System tiles (desktop) / pills (mobile) */
  systems: string[];
  /** Selected system; null = All */
  system?: string | null;
  onSystemChange?: (s: string | null) => void;
  /** Dropdown filters (value '' = All) */
  fields: FilterField[];
  values?: Record<string, string>;
  onChange?: (values: Record<string, string>) => void;
  /** Number of results, e.g. 9 → "9 cases" */
  count: number;
  /** Results noun */
  noun?: string;
  /** Render the open sheet in place instead of fixed to the viewport (stories) */
  inline?: boolean;
};

const ALL = { value: '', label: 'All' };
// No filter → no selected option, so the field shows the "All" placeholder as in Figma
const NONE = '__none__';

export function FilterBar({ Device = 'Desktop', State = 'Default', systems, system: sysProp, onSystemChange, fields, values: valProp, onChange, count, noun = 'cases', inline }: FilterBarProps) {
  const [sysState, setSys] = useState<string | null>(sysProp ?? null);
  const [valState, setVals] = useState<Record<string, string>>(valProp ?? {});
  const [open, setOpen] = useState(State === 'Open');
  const sheetId = useId();
  const system = sysProp !== undefined ? sysProp : sysState;
  const values = valProp ?? valState;
  useEffect(() => setOpen(State === 'Open'), [State]);

  const pick = (s: string | null) => { setSys(s); onSystemChange?.(s); };
  const set = (label: string, v: string) => { const next = { ...values, [label]: v }; setVals(next); onChange?.(next); };
  const active = Object.values(values).filter(Boolean).length;

  const dropdowns = fields.map((f) => (
    <Dropdown key={f.label} Label={f.label} placeholderText="All" options={[ALL, ...f.options]} value={values[f.label] || NONE} onChange={(v: string) => set(f.label, v)} />
  ));

  if (Device === 'Desktop') {
    return (
      <div className="yw-filter-bar" role="search" aria-label="Filter">
        <ul className="yw-filter-bar__systems">
          {systems.map((s) => (
            <li key={s}>
              <button type="button" className="yw-filter-tile yw-focus-ring" aria-pressed={system === s} onClick={() => pick(system === s ? null : s)}>
                <span className="yw-body-sm-reg">{s}</span>
                <Icon name="arrow-forward" size={16} />
              </button>
            </li>
          ))}
        </ul>
        <div className="yw-filter-bar__fields">{dropdowns}</div>
      </div>
    );
  }

  const sheet = (
    <div id={sheetId} className={`yw-filter-sheet${inline ? ' yw-filter-sheet--static' : ''}`} role="dialog" aria-modal={!inline} aria-label="Filters">
      <span className="yw-filter-sheet__handle" aria-hidden="true" />
      <div className="yw-filter-sheet__head">
        <h2 className="yw-heading-sm">Filters</h2>
        <Button Variant="Outline" Size="S" label="Clear all" onClick={() => { setVals({}); onChange?.({}); }} />
      </div>
      <div className="yw-filter-sheet__fields">{dropdowns}</div>
      <Button Variant="Primary" Size="M" label={`Show ${count} ${noun}`} onClick={() => setOpen(false)} />
    </div>
  );

  return (
    <div className="yw-filter-bar yw-filter-bar--mobile" role="search" aria-label="Filter">
      <ul className="yw-filter-bar__pills">
        <li><Pills Variant={system === null ? 'Primary' : 'Neutral'} label="All" pressed={system === null} onClick={() => pick(null)} /></li>
        {systems.map((s) => (
          <li key={s}><Pills Variant={system === s ? 'Primary' : 'Neutral'} label={s} pressed={system === s} onClick={() => pick(s)} /></li>
        ))}
      </ul>
      <div className="yw-filter-bar__bar">
        <ButtonFilter Size="M" label="Filters" {...{ 'Active Filter': active > 0 }} count={active} aria-expanded={open} aria-controls={sheetId} onClick={() => setOpen(true)} />
        <span className="yw-filter-bar__count yw-body-sm-reg">{`${count} ${noun}`}</span>
      </div>
      {open && (inline ? sheet : <><div className="yw-filter-scrim" onClick={() => setOpen(false)} />{sheet}</>)}
    </div>
  );
}
