import { useId, useState } from 'react';
import { Icon } from '../../icons/Icon';
import { FieldShell, type FieldLabels, type FieldStatus } from '../Field/Field';
import { OptionsPanel, type Option } from '../OptionsPanel/OptionsPanel';
import { useListbox } from '../OptionsPanel/useListbox';
import './Dropdown.css';

/*
  Dropdown — Figma "Dropdown/Static Labels" (18505:20713) and "Dropdown/Floating Labels" (18505:21072),
  page "– Input/Dropdown". A select-only combobox (WAI-ARIA) with the Figma options panel.
*/

export type DropdownProps = {
  Labels?: FieldLabels;
  /** Figma: Label */
  Label: string;
  /** Figma: Required */
  Required?: boolean;
  /** Static: Figma Placeholder (boolean). Floating: Figma Placeholder axis */
  Placeholder?: boolean;
  placeholderText?: string;
  /** Figma: Hint */
  Hint?: boolean;
  /** Figma: Hint text */
  'Hint text'?: string;
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  status?: FieldStatus;
  disabled?: boolean;
  /** Open the panel initially (story previews of State=Active) */
  defaultOpen?: boolean;
  name?: string;
  controlClassName?: string;
};

export function Dropdown({ Labels = 'Static', Label, Required = false, Placeholder = true, placeholderText, Hint = false, 'Hint text': hintText, options, value, defaultValue, onChange, status, disabled, defaultOpen, name, controlClassName }: DropdownProps) {
  const id = useId();
  const listId = `${id}-list`;
  const [inner, setInner] = useState(defaultValue);
  const current = value ?? inner;
  const selectedIndex = options.findIndex((o) => o.value === current);
  const choose = (i: number) => {
    const v = options[i]?.value;
    if (v === undefined) return;
    setInner(v);
    onChange?.(v);
  };
  const lb = useListbox(options.length, selectedIndex, choose, Boolean(defaultOpen && !disabled));
  const open = lb.open;
  const shown = selectedIndex >= 0 ? options[selectedIndex].label : Placeholder ? placeholderText : '';

  return (
    <div ref={lb.root} className="yw-dropdown-root" style={{ position: 'relative', width: '100%' }}>
      <FieldShell
        labels={Labels}
        id={id}
        label={Label}
        required={Required}
        hint={Hint}
        hintText={hintText}
        status={status}
        disabled={disabled}
        filled={selectedIndex >= 0}
        floated={Labels === 'Floating' && Boolean(Placeholder && placeholderText)}
        controlClassName={controlClassName}
        titleClass="yw-body-sm-bold"
        className={['yw-dropdown', open && 'is-open'].filter(Boolean).join(' ')}
        onControlClick={() => !disabled && lb.setOpen(!lb.open)}
        trailing={<span className="yw-dropdown__chevron" aria-hidden="true"><Icon name="chevron-down" size={24} /></span>}
      >
        <button
          id={id}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open && lb.active >= 0 ? `${listId}-${lb.active}` : undefined}
          aria-invalid={status === 'Error' || undefined}
          aria-describedby={Hint && hintText ? `${id}-hint` : undefined}
          disabled={disabled}
          className={['yw-dropdown__button', 'yw-body-md-reg', selectedIndex < 0 && 'is-placeholder'].filter(Boolean).join(' ')}
          onKeyDown={lb.onKeyDown}
        >
          {shown}
        </button>
        {name && <input type="hidden" name={name} value={current ?? ''} />}
        {open && (
          <OptionsPanel
            id={listId}
            options={options}
            selected={current}
            activeIndex={lb.active}
            labelledBy={id}
            onHover={lb.setActive}
            onSelect={(v) => { choose(options.findIndex((o) => o.value === v)); lb.setOpen(false); }}
          />
        )}
      </FieldShell>
    </div>
  );
}
