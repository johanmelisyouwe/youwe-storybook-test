import { Icon, type IconName } from '../../icons/Icon';
import './Pills.css';

/*
  Pills — Figma node 6285:1970 (page "– Pill"). Selectable tag for filters and option toggles.
  Rendered as a toggle button: `pressed` sets aria-pressed (the selected filter).
  In Figma the selected pill is Variant=Primary and the others Neutral (see Filter bar).
*/

export type PillsVariant = 'Primary' | 'Neutral';
export type PillsIcon = 'Leading' | 'Trailing' | 'Off';
export type PillsSize = 'M' | 'S';

export type PillsProps = {
  /** Figma: Variant */
  Variant?: PillsVariant;
  /** Figma: Icon */
  Icon?: PillsIcon;
  /** Figma: Size */
  Size?: PillsSize;
  label: string;
  /** Figma icon (defaults: show-password on Primary, info on Neutral) */
  iconName?: IconName;
  /** Selected state for toggle use (aria-pressed) */
  pressed?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Pills({
  Variant = 'Primary',
  Icon: iconPos = 'Off',
  Size = 'M',
  label,
  iconName,
  pressed,
  disabled = false,
  onClick,
  className,
}: PillsProps) {
  const size = Size === 'M' ? 16 : 12;
  // Figma: Primary pills use show-password, Neutral pills use info (both positions)
  const name: IconName = iconName ?? (Variant === 'Neutral' ? 'info' : 'show-password');
  const icon = iconPos === 'Off' ? null : (
    <span className="yw-pill__icon" aria-hidden="true"><Icon name={name} size={size} /></span>
  );
  return (
    <button
      type="button"
      className={['yw-pill', `yw-pill--${Variant.toLowerCase()}`, `yw-pill--${Size.toLowerCase()}`, className].filter(Boolean).join(' ')}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
    >
      {iconPos === 'Leading' && icon}
      <span className={Size === 'M' ? 'yw-body-sm-reg' : 'yw-body-xs-reg'}>{label}</span>
      {iconPos === 'Trailing' && icon}
    </button>
  );
}
