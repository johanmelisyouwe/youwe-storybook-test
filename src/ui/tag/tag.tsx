import { Icon, type IconName } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import styles from './tag.module.css'

/* Tag — Figma node 6284:7265 (page "– Tag"). Non-interactive status label. */

export type TagVariant = 'Info' | 'Neutral'
export type TagSize = 'S' | 'M'

export type TagProps = {
    /** Figma: Variant */
    Variant?: TagVariant
    /** Figma: Size */
    Size?: TagSize
    /** Figma: Show icon */
    'Show icon'?: boolean
    label: string
    /** Figma icon (default: star-full) */
    iconName?: IconName
    className?: string
}

export function Tag({
    Variant = 'Info',
    Size = 'S',
    'Show icon': showIcon = true,
    label,
    iconName = 'star-full',
    className,
}: TagProps) {
    return (
        <span
            data-variant={Variant.toLowerCase()}
            data-size={Size.toLowerCase()}
            className={cx(styles.root, className)}
        >
            {showIcon && (
                <span className={styles.icon} aria-hidden="true">
                    <Icon name={iconName} size={Size === 'M' ? 16 : 12} />
                </span>
            )}
            <span
                className={Size === 'M' ? 'yw-body-sm-reg' : 'yw-body-xs-reg'}
            >
                {label}
            </span>
        </span>
    )
}
