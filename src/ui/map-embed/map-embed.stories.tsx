import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MapEmbed, type MapEmbedProps } from './'

/*
  Map embed — code component (not in Figma), 19 November. Google Maps embed of the Event venue
  (Templates/Insight detail/Event). Needs a network connection to show the map.
*/

const meta: Meta<MapEmbedProps> = {
    title: 'Components/Map embed',
    component: MapEmbed,
    parameters: { layout: 'padded' },
    argTypes: {
        Theme: { control: 'inline-radio', options: ['Dark', 'Light'] },
        zoom: { control: { type: 'range', min: 3, max: 20, step: 1 } },
    },
    args: {
        query: 'SnowWorld Zoetermeer, Buytenparklaan 30, 2717 AX Zoetermeer, Netherlands',
        title: 'Map: SnowWorld Zoetermeer',
        zoom: 15,
        Theme: 'Dark',
        ratio: '740 / 420',
    },
    render: (args) => (
        <div style={{ maxWidth: 740 }}>
            <MapEmbed {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<MapEmbedProps>

export const Dark: Story = {}
export const Light: Story = { args: { Theme: 'Light' } }
