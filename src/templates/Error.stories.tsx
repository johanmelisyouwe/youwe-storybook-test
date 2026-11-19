import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ErrorPage } from './error-pages'

/*
  Templates/Error — not in Figma (19 November). The page lives in error-pages.tsx; the site shows it
  from its error boundary when something on a page fails. "Try again" calls the boundary's reset (here
  it reloads the story). "With reference" shows an error reference (e.g. a server log id).
*/

const meta: Meta = {
    title: 'Templates/Error',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Error page (not in Figma; shown by the site’s error boundary): Gradient hero with "Something went wrong", Try again (reset) and Back to home, popular pages, footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <ErrorPage Device="Desktop" /> }
export const Mobile: Story = {
    render: () => <ErrorPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
export const WithReference: Story = {
    name: 'With reference',
    render: () => <ErrorPage Device="Desktop" digest="2318431049" />,
}
