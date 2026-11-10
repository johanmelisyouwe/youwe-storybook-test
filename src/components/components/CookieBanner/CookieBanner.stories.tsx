import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CookieBanner } from './CookieBanner'

/* Cookie Banner — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26536-71 (message and buttons are the Figma copy) */

const meta: Meta<typeof CookieBanner> = {
    title: 'Components/Cookie Banner',
    component: CookieBanner,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Bottom-right on desktop, full width at the bottom on mobile. Motion: enters from the bottom (distance/md, duration/slow, ease/emphasized). Focus moves into the banner when it appears.',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Device: 'Desktop', fixed: false },
    render: (args) => (
        <div style={{ width: args.Device === 'Mobile' ? 366 : 600 }}>
            <CookieBanner key={args.Device} {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<typeof CookieBanner>

export const Default: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }

/** Every Figma variant (Device). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: 'var(--spacing-xl)',
                alignItems: 'start',
            }}
        >
            <div style={{ width: 600 }}>
                <CookieBanner Device="Desktop" />
            </div>
            <div style={{ width: 366 }}>
                <CookieBanner Device="Mobile" />
            </div>
        </div>
    ),
}
