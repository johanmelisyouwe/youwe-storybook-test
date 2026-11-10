import type { ReactNode } from 'react'
import { Icon, type IconName } from '../../shared/icons/icon'
import '../../shared/focus-ring/focus-ring.css'
import './button.css'

/* Button/Basic — Figma node 6284:4476 (page "– Buttons"). Axis and prop names match Figma. */

export type ButtonVariant = 'Primary' | 'Outline' | 'Solid'
export type ButtonIcon = 'Off' | 'Leading' | 'Trailing' | 'Only'
export type ButtonSize = 'XS' | 'S' | 'M' | 'L'

const TEXT_STYLE: Record<ButtonSize, string> = {
    L: 'yw-body-lg-reg',
    M: 'yw-body-md-reg',
    S: 'yw-body-sm-reg',
    XS: 'yw-body-xs-reg',
}
const ICON_SIZE: Record<ButtonSize, number> = { L: 24, M: 24, S: 16, XS: 16 }

export type ButtonProps = {
    /** Figma: Variant */
    Variant?: ButtonVariant
    /** Figma: Icon */
    Icon?: ButtonIcon
    /** Figma: Size */
    Size?: ButtonSize
    /** Button text. Also the accessible name when Icon=Only. */
    label: string
    /** Which Figma icon to show (Figma default: shopping-basket) */
    iconName?: IconName
    /** Custom icon node; overrides iconName */
    icon?: ReactNode
    /** Renders a link instead of a button */
    href?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    className?: string
}

export function Button({
    Variant = 'Primary',
    Icon: iconPos = 'Off',
    Size = 'L',
    label,
    iconName = 'shopping-basket',
    icon,
    href,
    disabled = false,
    type = 'button',
    onClick,
    className,
}: ButtonProps) {
    const classes = [
        'yw-button',
        'yw-focus-ring',
        `yw-button--${Variant.toLowerCase()}`,
        `yw-button--${Size.toLowerCase()}`,
        iconPos !== 'Off' && `yw-button--${iconPos.toLowerCase()}`,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    const iconEl =
        iconPos === 'Off' ? null : (
            <span className="yw-button__icon" aria-hidden="true">
                {icon ?? <Icon name={iconName} size={ICON_SIZE[Size]} />}
            </span>
        )

    const content =
        iconPos === 'Only' ? (
            iconEl
        ) : (
            <>
                {iconPos === 'Leading' && iconEl}
                <span className={TEXT_STYLE[Size]}>{label}</span>
                {iconPos === 'Trailing' && iconEl}
            </>
        )

    const a11y = iconPos === 'Only' ? { 'aria-label': label } : {}

    if (href) {
        return (
            <a
                className={classes}
                href={disabled ? undefined : href}
                aria-disabled={disabled || undefined}
                onClick={onClick}
                {...a11y}
            >
                {content}
            </a>
        )
    }
    return (
        <button
            className={classes}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...a11y}
        >
            {content}
        </button>
    )
}
