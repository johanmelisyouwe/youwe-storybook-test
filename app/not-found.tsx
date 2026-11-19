'use client'

import { NotFoundPage } from '../src/templates/error-pages'

/*
  404 (Next.js app router not-found.tsx): shown for unknown URLs and when a page calls notFound(). The
  same page as Storybook Templates/404 (src/templates/error-pages.tsx). Desktop follows the screen:
  below 768px it renders the mobile variants.
*/
export default function NotFound() {
    return <NotFoundPage Device="Desktop" />
}
