import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EventDetails, type EventDetailsProps } from './'

/*
  Event details — code component (not in Figma), 19 November. Copy from the Figma event page (27263:17242).
  Used by Templates/Insight detail/Event.
*/

const meta: Meta<EventDetailsProps> = {
    title: 'Components/Event details',
    component: EventDetails,
    parameters: { layout: 'padded' },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        items: { control: 'object' },
    },
    args: {
        Device: 'Desktop',
        items: [
            { label: 'Date', value: 'December 3, 2026' },
            { label: 'Time', value: '2:00 PM to 9:00 PM (CET)' },
            {
                label: 'Venue',
                value: 'SnowWorld Zoetermeer\nBuytenparklaan 30\n2717 AX Zoetermeer\nNetherlands',
            },
        ],
        primary: { label: 'Register now', href: '#' },
        secondary: { label: 'Plan your route', href: '#' },
    },
    render: (args) => (
        <div style={{ maxWidth: args.Device === 'Mobile' ? 343 : 405 }}>
            <EventDetails {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<EventDetailsProps>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const WithoutButtons: Story = {
    name: 'Without buttons',
    args: { primary: undefined, secondary: undefined },
}
