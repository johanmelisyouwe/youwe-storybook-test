import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Timetable, type TimetableProps } from './'

/*
  Timetable — code component (not in Figma), 19 November. Copy from the Figma event page (27263:17242).
  Used by Templates/Insight detail/Event.
*/

const meta: Meta<TimetableProps> = {
    title: 'Components/Timetable',
    component: Timetable,
    parameters: { layout: 'padded' },
    argTypes: { items: { control: 'object' } },
    args: {
        items: [
            {
                time: '2:00 PM – 3:00 PM',
                title: 'Arrival, coffee and pastries',
            },
            {
                time: '3:00 PM – 4:00 PM',
                title: 'Keynote: what is next for product data, with Pimcore',
            },
            {
                time: '7:00 PM – 9:00 PM',
                title: 'Seated dinner into après with PIM specialists from Youwe and Pimcore',
            },
        ],
    },
    render: (args) => (
        <div style={{ maxWidth: 740 }}>
            <Timetable {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<TimetableProps>

export const Default: Story = {}
export const Narrow: Story = {
    render: (args) => (
        <div style={{ maxWidth: 343 }}>
            <Timetable {...args} />
        </div>
    ),
}
