import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { InsightsOverviewDemo } from './insights-overview.demo'

/*
  Content blocks/Insights overview — Figma 27239:155 (Device: Desktop, Mobile).
  https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27239-155
  Filters and Show more work on the 12 Figma sample cards.
*/

type Args = { Device: 'Desktop' | 'Mobile' }
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Insights overview',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'All insights: type filters (tiles on desktop, a sideways pill row on mobile), "Showing x of y", the Insight Card grid and Show more. Pick a type to filter; Show more adds the next 12.',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Device: 'Desktop' },
    render: ({ Device }) => (
        <div style={{ width: W[Device], margin: '0 auto' }}>
            <InsightsOverviewDemo key={Device} Device={Device} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            <InsightsOverviewDemo Device="Desktop" />
            <div style={{ width: 360, margin: '0 auto' }}>
                <InsightsOverviewDemo Device="Mobile" />
            </div>
        </div>
    ),
}
