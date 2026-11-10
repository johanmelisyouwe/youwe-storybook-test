import { useId } from 'react';
import { Icon } from '../../icons/Icon';
import type { FieldStatus } from '../Field/Field';
import '../Field/Field.css';
import '../../shared/focus-ring.css';
import './CompactDropdown.css';

/*
  Dropdown/Compact — Figma 18597:11473 (State × Size; Hint). A small number picker without a label
  (e.g. "View max. [12] per page"). Native <select>, so the option list is the platform's own (Figma Active).
  Field states come from the shared field styles: hover, focus, filled, success, error, disabled.
*/

export type CompactDropdownProps = {
  /** Figma: Size — M 72×44, S 64×36 */
  Size?: 'M' | 'S';
  /** Figma: Hint */
  Hint?: boolean;
  'Hint text'?: string;
  options: (string | number)[];
  /** Empty choice shown until a value is picked (Figma Rest); omit to always show a value (Filled) */
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
  status?: FieldStatus;
  disabled?: boolean;
  /** No visible label: name it with aria-label or aria-labelledby */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Story helper: pseudo-state classes on the control */
  controlClassName?: string;
  className?: string;
};

export function CompactDropdown({ Size = 'M', Hint = false, 'Hint text': hintText, options, placeholder, value, defaultValue, onChange, status, disabled, controlClassName, className, ...aria }: CompactDropdownProps) {
  const hintId = useId();
  const cls = ['yw-field', 'yw-compact', Size === 'S' && 'yw-compact--s', status && `is-${status.toLowerCase()}`, disabled && 'is-disabled', className].filter(Boolean).join(' ');
  return (
    <span className={cls}>
      <span className={['yw-field__control', controlClassName].filter(Boolean).join(' ')}>
        <select
          className="yw-compact__select yw-body-md-reg"
          value={value}
          defaultValue={value === undefined ? (defaultValue ?? (placeholder !== undefined ? '' : undefined)) : undefined}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          aria-invalid={status === 'Error' || undefined}
          aria-describedby={Hint && hintText ? hintId : undefined}
          {...aria}
        >
          {placeholder !== undefined && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <Icon name="chevron-down" size={24} />
      </span>
      {Hint && hintText && <span id={hintId} className="yw-field__hint yw-body-sm-reg">{hintText}</span>}
    </span>
  );
}
