import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NotFoundPage } from './error-pages'

/*
  Templates/404 — not in Figma (19 November). The page lives in error-pages.tsx; the site shows it for
  unknown URLs.
*/

const meta: Meta = {
    title: 'Templates/404',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    '404 page (not in Figma): Gradient hero with "Page not found", Back to home and Contact us, the Ask Youwe dock ("What are you looking for?"), four popular pages as clickable Feature Cards, footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <NotFoundPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <NotFoundPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
