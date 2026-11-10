import { Icon } from '../icons/icon'
import { cx } from '../cx'
import styles from './card-reveal.module.css'

/* The "Hover · red overlay" layer shared by the linked cards. Place inside an element with the `root` class of card-reveal.module.css. */
export function CardReveal({
    cta,
    context,
}: {
    cta: string
    context?: string
}) {
    return (
        <>
            {/* Touch screens: no hover, an always-visible arrow button top-right instead (decided 2026-11-10) */}
            <span className={styles.touch} aria-hidden="true">
                <Icon name="arrow-forward" size={24} />
            </span>
            <span className={styles.overlay} aria-hidden="true">
                <span className={styles.arrow}>
                    <Icon name="arrow-forward" size={24} />
                </span>
                <span className={styles.message}>
                    <span className="yw-heading-sm">{cta}</span>
                    {context && (
                        <span className="yw-body-sm-reg">{context}</span>
                    )}
                </span>
            </span>
        </>
    )
}

export function CardArrow({ className }: { className?: string }) {
    return (
        <span
            className={cx(styles['card-arrow'], className)}
            aria-hidden="true"
        >
            <Icon name="arrow-forward" size={24} />
        </span>
    )
}
