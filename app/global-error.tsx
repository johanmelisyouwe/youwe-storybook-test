'use client'

import '../src/styles/globals.css'
import { Button } from '../src/ui/button'
import { ERROR } from '../src/templates/not-found.copy'

/*
  Last-resort error boundary (Next.js app router global-error.tsx): used only when the root layout
  itself fails, so it renders its own <html> and <body> and keeps to the bare minimum (no header,
  footer or Ask dock, which could be what failed). Same copy as the Error page; "Try again" calls reset().
*/
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="en" data-theme="dark">
            <body>
                <main
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-lg)',
                        maxWidth: '46.25rem',
                        margin: '0 auto',
                        padding: 'var(--spacing-5xl) var(--spacing-xl)',
                    }}
                >
                    <p
                        className="yw-body-sm-bold"
                        style={{ color: 'var(--color-shared-content-brand)' }}
                    >
                        {ERROR.label}
                    </p>
                    <h1 className="yw-heading-2xl">{ERROR.title[0]}</h1>
                    <p
                        className="yw-body-lg-reg"
                        style={{
                            color: 'var(--color-shared-content-secondary)',
                        }}
                    >
                        {ERROR.body}
                        {error.digest && ` ${ERROR.reference}: ${error.digest}`}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-xs)',
                        }}
                    >
                        <Button
                            Variant="Primary"
                            Size="M"
                            label={ERROR.retry}
                            onClick={reset}
                        />
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={ERROR.home.label}
                            href={ERROR.home.href}
                        />
                    </div>
                </main>
            </body>
        </html>
    )
}
