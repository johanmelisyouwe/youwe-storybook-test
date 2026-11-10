import { useEffect, useRef } from 'react'
import { Button } from '../Button/Button'
import './CookieBanner.css'

/*
  Cookie Banner — Figma node 26536:71 (page "Cookie Banner").
  Interaction (Figma): focus moves into the banner; decline is as prominent as accept.
*/

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
}

export function CookieBanner({
    Device = 'Desktop',
    fixed = false,
    privacyHref = '#',
    onAccept,
    onSettings,
    autoFocus = false,
}: CookieBannerProps) {
    const ref = useRef<HTMLElement>(null)
    useEffect(() => {
        if (autoFocus) ref.current?.focus()
    }, [autoFocus])
    return (
        <section
            ref={ref}
            tabIndex={-1}
            role="region"
            aria-label="Cookie consent"
            className={[
                'yw-cookie',
                Device === 'Mobile' && 'yw-cookie--mobile',
                fixed && 'yw-cookie--fixed',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <p className="yw-cookie__message yw-body-md-reg">
                We collect data to optimize your online experience. Want to know
                more? Check out our <a href={privacyHref}>Privacy Policy</a>.
            </p>
            <div className="yw-cookie__actions">
                <Button
                    Variant="Primary"
                    Size="M"
                    label="Accept"
                    onClick={onAccept}
                />
                <Button
                    Variant="Solid"
                    Size="M"
                    label="Cookie settings"
                    onClick={onSettings}
                />
            </div>
        </section>
    )
}
