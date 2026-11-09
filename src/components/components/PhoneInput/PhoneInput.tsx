import { useId, useState } from 'react';
import { Icon } from '../../icons/Icon';
import { FieldShell, type FieldLabels, type FieldStatus } from '../Field/Field';
import { OptionsPanel, type Option } from '../OptionsPanel/OptionsPanel';
import { useListbox } from '../OptionsPanel/useListbox';
import './PhoneInput.css';

/*
  Phone Input — Figma "Phone Input/Static Labels" (18709:10372) and "Phone Input/Floating Labels" (18709:10502),
  page "– Input/Phone", with the _Locale select building block (18781:13057).
  Default country codes are the five in the Figma locale panel (flags exported from Figma).
*/

const FLAG = (c: string) => `/figma-assets/flags/${c}.svg`;
export const FIGMA_LOCALES: (Option & { country: string })[] = [
  { value: '+31', label: '+31', flag: FLAG('NL'), country: 'The Netherlands' },
  { value: '+44', label: '+44', flag: FLAG('GB'), country: 'United Kingdom' },
  { value: '+46', label: '+46', flag: FLAG('SE'), country: 'Sweden' },
  { value: '+62', label: '+62', flag: FLAG('ID'), country: 'Indonesia' },
  { value: '+38', label: '+38', flag: FLAG('UA'), country: 'Ukraine' },
];

type LocaleSelectProps = { value: string; onChange: (v: string) => void; disabled?: boolean; defaultOpen?: boolean; locales?: typeof FIGMA_LOCALES };

/** _Locale select — Figma 18781:13057 (building block, no own story). */
function LocaleSelect({ value, onChange, disabled, defaultOpen, locales = FIGMA_LOCALES }: LocaleSelectProps) {
  const id = useId();
  const idx = locales.findIndex((l) => l.value === value);
  const lb = useListbox(locales.length, idx, (i) => onChange(locales[i].value), defaultOpen);
  const cur = locales[idx] ?? locales[0];
  return (
    <span ref={lb.root} style={{ display: 'contents' }}>
      <button
        type="button"
        className="yw-locale"
        aria-haspopup="listbox"
        aria-expanded={lb.open}
        aria-controls={`${id}-list`}
        aria-label={`Country code ${cur.label} (${cur.country})`}
        disabled={disabled}
        onClick={(e) => { e.stopPropagation(); lb.setOpen(!lb.open); }}
        onKeyDown={lb.onKeyDown}
      >
        <img className="yw-locale__flag" src={cur.flag} alt="" width={22} height={16} />
        <Icon name={lb.open ? 'arrow-drop-up' : 'arrow-drop-down'} size={24} />
        <span className="yw-locale__code yw-body-md-reg">{cur.label}</span>
      </button>
      {lb.open && (
        <OptionsPanel
          id={`${id}-list`}
          options={locales}
          selected={value}
          activeIndex={lb.active}
          label="Country code"
          onHover={lb.setActive}
          onSelect={(v) => { onChange(v); lb.setOpen(false); }}
        />
      )}
    </span>
  );
}

export type PhoneInputProps = {
  Labels?: FieldLabels;
  /** Figma: Label */
  Label: string;
  /** Figma: Required */
  Required?: boolean;
  /** Figma: Hint */
  Hint?: boolean;
  /** Figma: Hint text */
  'Hint text'?: string;
  /** Figma: Suffix (search icon) */
  Suffix?: boolean;
  placeholderText?: string;
  countryCode?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: { countryCode: string; number: string }) => void;
  status?: FieldStatus;
  disabled?: boolean;
  /** Open the locale panel initially (story previews) */
  defaultLocaleOpen?: boolean;
  name?: string;
  controlClassName?: string;
};

export function PhoneInput({ Labels = 'Static', Label, Required = false, Hint = false, 'Hint text': hintText, Suffix = false, placeholderText = '0000 000 000', countryCode = '+31', value, defaultValue, onChange, status, disabled, defaultLocaleOpen, name, controlClassName }: PhoneInputProps) {
  const id = useId();
  const [code, setCode] = useState(countryCode);
  const [num, setNum] = useState(defaultValue ?? '');
  const n = value ?? num;
  return (
    <FieldShell
      labels={Labels}
      id={id}
      label={Label}
      required={Required}
      hint={Hint}
      hintText={hintText}
      status={status}
      disabled={disabled}
      floated
      filled={Boolean(n)}
      controlClassName={controlClassName}
      className="yw-phone"
      trailing={Suffix ? <span className="yw-field__suffix" aria-hidden="true"><Icon name="search" size={24} /></span> : null}
    >
      <span className="yw-phone__row">
        <LocaleSelect value={code} disabled={disabled} defaultOpen={defaultLocaleOpen} onChange={(c) => { setCode(c); onChange?.({ countryCode: c, number: n }); }} />
        <input
          id={id}
          className="yw-field__input yw-body-md-reg"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          name={name}
          required={Required}
          disabled={disabled}
          aria-invalid={status === 'Error' || undefined}
          aria-describedby={Hint && hintText ? `${id}-hint` : undefined}
          placeholder={placeholderText}
          value={n}
          onChange={(e) => { setNum(e.target.value); onChange?.({ countryCode: code, number: e.target.value }); }}
        />
      </span>
    </FieldShell>
  );
}
