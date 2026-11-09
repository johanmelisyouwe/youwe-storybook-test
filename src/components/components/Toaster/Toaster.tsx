import { useState } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import '../../shared/focus-ring.css';
import './Toaster.css';

/* Toaster — Figma node 6284:7291 (page "– Toaster"). Transient notification. */

export type ToasterVariant = 'Information' | 'Success' | 'Warning' | 'Error';

const ICON: Record<ToasterVariant, IconName> = { Information: 'info-two-tone', Success: 'success-check', Warning: 'warning', Error: 'error' };

export type ToasterProps = {
  /** Figma: Variant */
  Variant?: ToasterVariant;
  /** Figma: Shadow */
  Shadow?: 'Yes' | 'No';
  title: string;
  message: string;
  closeLabel?: string;
  onClose?: () => void;
};

export function Toaster({ Variant = 'Information', Shadow = 'Yes', title, message, closeLabel = 'Close', onClose }: ToasterProps) {
  const [leaving, setLeaving] = useState(false);
  const urgent = Variant === 'Error' || Variant === 'Warning';
  return (
    <div
      role={urgent ? 'alert' : 'status'}
      className={['yw-toaster', `yw-toaster--${Variant.toLowerCase()}`, Shadow === 'Yes' && 'yw-toaster--shadow', leaving && 'is-leaving'].filter(Boolean).join(' ')}
      onAnimationEnd={(e) => { if (leaving && e.animationName === 'yw-toaster-out') onClose?.(); }}
    >
      <span className="yw-toaster__icon" aria-hidden="true"><Icon name={ICON[Variant]} size={24} /></span>
      <span className="yw-toaster__content">
        <span className="yw-toaster__title yw-body-sm-bold">{title}</span>
        <span className="yw-toaster__message yw-body-sm-reg">{message}</span>
      </span>
      <button type="button" className="yw-toaster__close yw-focus-ring" aria-label={closeLabel} onClick={() => (onClose ? setLeaving(true) : undefined)}>
        <Icon name="close-md" size={16} />
      </button>
    </div>
  );
}
