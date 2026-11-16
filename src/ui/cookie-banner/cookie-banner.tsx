import { useEffect, useRef } from 'react'
import { Button } from '../button'
import { cx } from '../../shared/cx'
import styles from './cookie-banner.module.css'

/*
  Cookie Banner — Figma node 26536:71 (page "Cookie Banner").
  Interaction (Figma): focus moves into the banner; decline is as prominent as accept.
*/

/** Fixed UI text (English defaults); pass `labels` to translate (NL, SV) */
export const COOKIE_BANNER_LABELS = {
    region: 'Cookie consent',
    accept: 'Accept',
    settings: 'Cookie settings',
}

export type CookieBannerProps = {
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    /** Fixed to the bottom of the viewport (off in stories) */
    fixed?: boolean
    privacyHref?: string
    onAccept?: () => void
    onSettings?: () => void
    /** Move focus into the banner when it appears (Figma interaction note) */
    autoFocus?: boolean
    /** UI text, for translations: { ...COOKIE_BANNER_LABELS } */
    labels?: Partial<typeof COOKIE_BANNER_LABELS>
}

export function CookieBanner({
    Device = 'Desktop',
    fixed = false,
    privacyHref = '#',
    onAccept,
    onSettings,
    autoFocus = false,
    labels,
}: CookieBannerProps) {
    const L = { ...COOKIE_BANNER_LABELS, ...labels }
    const ref = useRef<HTMLElement>(null)
    useEffect(() => {
        if (autoFocus) ref.current?.focus()
    }, [autoFocus])
    return (
        <section
            ref={ref}
            tabIndex={-1}
            role="region"
            aria-label={L.region}
            data-mobile={Device === 'Mobile' || undefined}
            data-fixed={fixed || undefined}
            className={cx(styles.root)}
        >
            <p className={cx(styles.message, 'yw-body-md-reg')}>
                We collect data to optimize your online experience. Want to know
                more? Check out our <a href={privacyHref}>Privacy Policy</a>.
            </p>
            <div className={styles.actions}>
                <Button
                    Variant="Primary"
                    Size="M"
                    label={L.accept}
                    onClick={onAccept}
                />
                <Button
                    Variant="Solid"
                    Size="M"
                    label={L.settings}
                    onClick={onSettings}
                />
            </div>
        </section>
    )
}
