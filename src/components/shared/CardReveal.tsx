import { Icon } from '../icons/Icon'
import './card-reveal.css'

/* The "Hover · red overlay" layer shared by the linked cards. Place inside an element with class `yw-reveal`. */
export function CardReveal({
    cta,
    context,
}: {
    cta: string
    context?: string
}) {
    return (
        <span className="yw-reveal__overlay" aria-hidden="true">
            <span className="yw-reveal__arrow">
                <Icon name="arrow-forward" size={24} />
            </span>
            <span className="yw-reveal__message">
                <span className="yw-heading-sm">{cta}</span>
                {context && <span className="yw-body-sm-reg">{context}</span>}
            </span>
        </span>
    )
}

export function CardArrow({ className }: { className?: string }) {
    return (
        <span
            className={['yw-card-arrow', className].filter(Boolean).join(' ')}
            aria-hidden="true"
        >
            <Icon name="arrow-forward" size={24} />
        </span>
    )
}
