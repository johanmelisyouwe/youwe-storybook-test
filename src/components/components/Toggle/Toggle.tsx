import { Icon } from '../../icons/Icon';
import '../../shared/focus-ring.css';
import './Toggle.css';

/*
  Toggle — Figma node 15416:13125 (page "– Toggle"), handle = _Handle (15416:13163).
  A switch (role="switch"). Pass `label` for the accessible name, or aria-labelledby.
*/

export type ToggleSize = 'M' | 'L';

export type ToggleProps = {
  /** Figma: Size */
  Size?: ToggleSize;
  /** Figma: Active */
  Active?: 'No' | 'Yes';
  label?: string;
  'aria-labelledby'?: string;
  disabled?: boolean;
  onChange?: (active: boolean) => void;
  className?: string;
};

export function Toggle({ Size = 'M', Active = 'No', label, disabled, onChange, className, ...aria }: ToggleProps) {
  const on = Active === 'Yes';
  const icon = Size === 'L' ? 16 : 12;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!on)}
      className={['yw-toggle', 'yw-focus-ring', `yw-toggle--${Size.toLowerCase()}`, className].filter(Boolean).join(' ')}
      {...aria}
    >
      <span className="yw-toggle__handle" aria-hidden="true">
        <Icon className="yw-toggle__icon yw-toggle__icon--off" name="close-md" size={icon} />
        <Icon className="yw-toggle__icon yw-toggle__icon--on" name="check" size={icon} />
      </span>
    </button>
  );
}
