import { Icon, type IconName } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import styles from './button-utility.module.css'

/* Button/Utility — Figma node 6464:5164 (page "– Buttons"). Compact round icon button (close, …). */

export type ButtonUtilitySize = 'M' | 'S'

export type ButtonUtilityProps = {
    /** Figma: Size */
    Size?: ButtonUtilitySize
    /** Accessible name, e.g. "Close" */
    label: string
    /** Figma icon; default close (24 on M, 16 on S) */
    iconName?: IconName
    onClick?: () => void
    className?: string
}

export function ButtonUtility({
    Size = 'M',
    label,
    iconName,
    onClick,
    className,
}: ButtonUtilityProps) {
    const name: IconName = iconName ?? (Size === 'S' ? 'close-md' : 'close')
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            data-size={Size.toLowerCase()}
            className={cx(styles.root, className)}
        >
            <Icon name={name} size={Size === 'S' ? 16 : 24} />
        </button>
    )
}
