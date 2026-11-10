import { Icon } from '../../icons/Icon'
import './ButtonLink.css'

/* Button/Link — Figma node 20540:33000 (page "– Buttons"). Text link with a chevron. */

export type ButtonLinkSize = 'lg' | 'md' | 'sm'

export type ButtonLinkProps = {
    /** Figma: Size */
    Size?: ButtonLinkSize
    label: string
    href?: string
    onClick?: () => void
    className?: string
    /** Render as a non-interactive span, for use inside a card that is already one link */
    as?: 'span'
}

const CHEVRON = { lg: [9, 13], md: [8, 12], sm: [7, 10] } as const
const TEXT = { lg: '', md: 'yw-body-md-reg', sm: 'yw-body-sm-reg' } as const

export function ButtonLink({
    Size = 'md',
    label,
    href,
    onClick,
    className,
    as,
}: ButtonLinkProps) {
    const [w, h] = CHEVRON[Size]
    const cls = ['yw-link-button', `yw-link-button--${Size}`, className]
        .filter(Boolean)
        .join(' ')
    const inner = (
        <>
            <span className={TEXT[Size] || undefined}>{label}</span>
            <span className="yw-link-button__chevron" aria-hidden="true">
                <Icon name="link-chevron" size={w} height={h} />
            </span>
        </>
    )
    if (as === 'span') return <span className={cls}>{inner}</span>
    return href ? (
        <a className={cls} href={href} onClick={onClick}>
            {inner}
        </a>
    ) : (
        <button type="button" className={cls} onClick={onClick}>
            {inner}
        </button>
    )
}
