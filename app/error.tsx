'use client'

import { useEffect } from 'react'
import { ErrorPage } from '../src/templates/error-pages'

/*
  Error boundary for the pages under app/ (Next.js app router error.tsx): when something on a page
  throws while rendering, this page replaces it instead of a blank screen; the root layout stays.
  "Try again" calls reset(), which re-renders the part that failed. The same page as Storybook
  Templates/Error (src/templates/error-pages.tsx). For server errors Next passes a digest, shown as the
  error reference so support can find the log entry (on Render: the service logs). Errors in the root
  layout itself go to global-error.tsx.
*/
export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Report to the error tracker here (e.g. Sentry) once the site has one
        console.error(error)
    }, [error])
    return <ErrorPage Device="Desktop" reset={reset} digest={error.digest} />
}
