import { useState } from 'react'
import { Icon, type IconName } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import styles from './toaster.module.css'

/* Toaster — Figma node 6284:7291 (page "– Toaster"). Transient notification. */

export type ToasterVariant = 'Information' | 'Success' | 'Warning' | 'Error'

const ICON: Record<ToasterVariant, IconName> = {
    Information: 'info-two-tone',
    Success: 'success-check',
    Warning: 'warning',
    Error: 'error',
}

export type ToasterProps = {
    /** Figma: Variant */
    Variant?: ToasterVariant
    /** Figma: Shadow */
    Shadow?: 'Yes' | 'No'
    title: string
    message: string
    closeLabel?: string
    onClose?: () => void
}

export function Toaster({
    Variant = 'Information',
    Shadow = 'Yes',
    title,
    message,
    closeLabel = 'Close',
    onClose,
}: ToasterProps) {
    const [leaving, setLeaving] = useState(false)
    const urgent = Variant === 'Error' || Variant === 'Warning'
    return (
        <div
            role={urgent ? 'alert' : 'status'}
            data-variant={Variant.toLowerCase()}
            data-shadow={Shadow === 'Yes' || undefined}
            data-leaving={leaving || undefined}
            className={cx(styles.root)}
            onAnimationEnd={(e) => {
                if (leaving && e.animationName === styles['toaster-out'])
                    onClose?.()
            }}
        >
            <span className={styles.icon} aria-hidden="true">
                <Icon name={ICON[Variant]} size={24} />
            </span>
            <span className={styles.content}>
                <span className={cx(styles.title, 'yw-body-sm-bold')}>
                    {title}
                </span>
                <span className={cx(styles.message, 'yw-body-sm-reg')}>
                    {message}
                </span>
            </span>
            <button
                type="button"
                className={styles.close}
                aria-label={closeLabel}
                onClick={() => (onClose ? setLeaving(true) : undefined)}
            >
                <Icon name="close-md" size={16} />
            </button>
        </div>
    )
}
