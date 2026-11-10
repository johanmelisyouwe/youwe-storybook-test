import { useId } from 'react'
import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './tooltip.module.css'

/* Tooltip — Figma 14683:4523, Icon tooltip — 6284:7455 (page "– Tooltip"). */

export type TooltipProps = {
    /** Figma: Size */
    Size?: 'M' | 'S'
    text: string
    id?: string
    className?: string
}

export function Tooltip({ Size = 'M', text, id, className }: TooltipProps) {
    return (
        <span
            role="tooltip"
            id={id}
            data-size={Size.toLowerCase()}
            className={cx(styles.root, className)}
        >
            <span className={cx(styles.text, 'yw-body-xs-reg')}>{text}</span>
        </span>
    )
}

export type IconTooltipProps = {
    /** Figma: Size (icon 24 / 16) */
    Size?: 'M' | 'S'
    /** Tooltip text (shown on hover and keyboard focus) */
    text: string
    /** Accessible name of the trigger */
    label?: string
    /** Tooltip size; defaults to M (Figma shows the M tooltip on both icon sizes) */
    tooltipSize?: 'M' | 'S'
    className?: string
    triggerClassName?: string
}

export function IconTooltip({
    Size = 'M',
    text,
    label = 'More information',
    tooltipSize = 'M',
    className,
    triggerClassName,
}: IconTooltipProps) {
    const id = useId()
    return (
        <span
            data-size={Size.toLowerCase()}
            className={cx(styles['icon-tooltip'], className)}
        >
            <button
                type="button"
                className={cx(
                    styles['icon-tooltip-trigger'],
                    ring.root,
                    triggerClassName
                )}
                aria-label={label}
                aria-describedby={id}
            >
                <Icon name="info-filled" size={Size === 'S' ? 16 : 24} />
            </button>
            <span className={styles['icon-tooltip-bubble']}>
                <Tooltip id={id} Size={tooltipSize} text={text} />
            </span>
        </span>
    )
}
