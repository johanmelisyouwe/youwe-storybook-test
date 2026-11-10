import './chip.css'

/* Chip — Figma node 24519:4237 (page "– Chips"). Non-interactive status label. */

export type ChipVariant = 'Positive' | 'Caution' | 'Negative' | 'Info'
export type ChipSize = 'M' | 'S'

export type ChipProps = {
    /** Figma: Variant */
    Variant?: ChipVariant
    /** Figma: Size */
    Size?: ChipSize
    label: string
    className?: string
}

export function Chip({
    Variant = 'Positive',
    Size = 'M',
    label,
    className,
}: ChipProps) {
    return (
        <span
            className={[
                'yw-chip',
                `yw-chip--${Variant.toLowerCase()}`,
                `yw-chip--${Size.toLowerCase()}`,
                Size === 'M' ? 'yw-body-md-med' : 'yw-body-xs-med',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {label}
        </span>
    )
}
