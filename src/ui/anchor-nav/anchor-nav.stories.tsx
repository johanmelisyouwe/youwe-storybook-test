import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AnchorNav, type AnchorNavProps } from './'

/*
  Anchor nav — code component (not in Figma), 19 November. "On this page" links for long-form pages; used
  by the Article block. Here `current` is set so the marked link is fixed; on a page it follows the scroll.
*/

const ITEMS = [
    { id: 'in-brief', label: 'The report in brief' },
    { id: 'government', label: 'What the government does' },
    { id: 'why-ai', label: 'Why AI is central' },
    { id: 'what-it-means', label: 'What it means for you' },
    { id: 'six-steps', label: 'Investment-ready in 6 steps' },
    { id: 'how-youwe-helps', label: 'How Youwe helps' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sources', label: 'Sources' },
]

const meta: Meta<AnchorNavProps> = {
    title: 'Components/Anchor nav',
    component: AnchorNav,
    parameters: { layout: 'padded' },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        current: {
            control: 'select',
            options: ITEMS.map((i) => i.id),
        },
        items: { control: 'object' },
    },
    args: { Device: 'Desktop', items: ITEMS, current: 'why-ai' },
    render: (args) => (
        <div style={{ maxWidth: args.Device === 'Mobile' ? 343 : 288 }}>
            <AnchorNav {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<AnchorNavProps>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const AllVariants: Story = {
    name: 'All variants',
    render: (args) => (
        <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
            <div style={{ width: 288 }}>
                <AnchorNav {...args} Device="Desktop" />
            </div>
            <div style={{ width: 343 }}>
                <AnchorNav {...args} Device="Mobile" />
            </div>
        </div>
    ),
}
