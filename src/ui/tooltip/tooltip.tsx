import { useId } from 'react'
import { Icon } from '../../shared/icons/icon'
import '../../shared/focus-ring/focus-ring.css'
import './tooltip.css'

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
            className={[
                'yw-tooltip',
                `yw-tooltip--${Size.toLowerCase()}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <span className="yw-tooltip__text yw-body-xs-reg">{text}</span>
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
            className={[
                'yw-icon-tooltip',
                `yw-icon-tooltip--${Size.toLowerCase()}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <button
                type="button"
                className={[
                    'yw-icon-tooltip__trigger',
                    'yw-focus-ring',
                    triggerClassName,
                ]
                    .filter(Boolean)
                    .join(' ')}
                aria-label={label}
                aria-describedby={id}
            >
                <Icon name="info-filled" size={Size === 'S' ? 16 : 24} />
            </button>
            <span className="yw-icon-tooltip__bubble">
                <Tooltip id={id} Size={tooltipSize} text={text} />
            </span>
        </span>
    )
}
