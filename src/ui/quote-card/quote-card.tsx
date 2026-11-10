import type { ReactNode } from 'react'
import { Button } from '../button'
import { cx } from '../../shared/cx'
import styles from './quote-card.module.css'

/* Quote Card — Figma 26895:260 (page "Cards"). */

export type QuoteCardProps = {
    Quote: string
    Name: string
    /** Figma: Role (Show role) */
    Role?: string
    /** Figma: Logo (Show logo) */
    logo?: ReactNode
    /** Figma: Show quote mark */
    'Show quote mark'?: boolean
    /** Figma: Show buttons (up to 3) */
    buttons?: { label: string; href?: string }[]
    className?: string
}

export function QuoteCard({
    Quote,
    Name,
    Role,
    logo,
    'Show quote mark': mark = true,
    buttons,
    className,
}: QuoteCardProps) {
    return (
        <figure className={cx(styles.root, className)}>
            <div className={styles.quote}>
                {mark && (
                    <span className={styles.mark} aria-hidden="true">
                        “
                    </span>
                )}
                <blockquote className="yw-body-xl-reg">{Quote}</blockquote>
            </div>
            <div className={styles.bottom}>
                <figcaption className={styles.attribution}>
                    <span className={styles.person}>
                        <span className="yw-body-sm-bold">{Name}</span>
                        {Role && (
                            <span className={cx(styles.role, 'yw-body-sm-reg')}>
                                {Role}
                            </span>
                        )}
                    </span>
                    {logo && <span className={styles.logo}>{logo}</span>}
                </figcaption>
                {buttons && buttons.length > 0 && (
                    <div className={styles.actions}>
                        {buttons.slice(0, 3).map((b) => (
                            <Button
                                key={b.label}
                                Variant="Solid"
                                Size="M"
                                label={b.label}
                                href={b.href}
                            />
                        ))}
                    </div>
                )}
            </div>
        </figure>
    )
}
