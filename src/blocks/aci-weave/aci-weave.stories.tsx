import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AciWeave } from './aci-weave'
import { ACI_WEAVE, ACI_WEAVE_MOSAIC } from './aci-weave.copy'

/*
  Content blocks/ACI Weave — Figma 27239:117 (Device: Desktop, Mobile).
  https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27239-117
  Videos are placeholder clips made from the posters until the real videos arrive.
*/

type Args = {
    Device: 'Desktop' | 'Mobile'
    Layout: 'Videos' | 'Mosaic'
    Autoplay: 'In view' | 'Off'
}
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/ACI Weave',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'ACI Weave section (Home): kicker, title, body, Ask Youwe nudge and button next to a stack of demo videos (Layout "Videos") or a mosaic of still images with two buttons (Layout "Mosaic", the Home block). On desktop the text stays in view while the videos scroll; mobile stacks. Videos use the Video Player: they play muted while in view (Autoplay "In view", with a pause button), or on click with Autoplay "Off". With reduced motion they never autoplay.',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Layout: { control: 'inline-radio', options: ['Videos', 'Mosaic'] },
        Autoplay: { control: 'inline-radio', options: ['In view', 'Off'] },
    },
    args: { Device: 'Desktop', Layout: 'Videos', Autoplay: 'In view' },
    render: ({ Device, Layout, Autoplay }) => (
        <div style={{ width: W[Device], margin: '0 auto' }}>
            <AciWeave
                Device={Device}
                Autoplay={Autoplay}
                {...(Layout === 'Mosaic' ? ACI_WEAVE_MOSAIC : ACI_WEAVE)}
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
/** The Home block: still-image mosaic and two buttons. */
export const Mosaic: Story = { args: { Layout: 'Mosaic' } }
export const MosaicMobile: Story = {
    name: 'Mosaic mobile',
    args: { Layout: 'Mosaic', Device: 'Mobile' },
}
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            <AciWeave Device="Desktop" {...ACI_WEAVE} />
            <div style={{ width: 360, margin: '0 auto' }}>
                <AciWeave Device="Mobile" {...ACI_WEAVE} />
            </div>
        </div>
    ),
}
