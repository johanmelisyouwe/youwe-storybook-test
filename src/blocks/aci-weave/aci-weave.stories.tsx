import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AciWeave } from './aci-weave'
import { ACI_WEAVE } from './aci-weave.copy'

/*
  Content blocks/ACI Weave — Figma 27239:117 (Device: Desktop, Mobile).
  https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27239-117
  Videos are placeholder clips made from the posters until the real videos arrive.
*/

type Args = { Device: 'Desktop' | 'Mobile'; Autoplay: 'In view' | 'Off' }
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/ACI Weave',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'ACI Weave section (Home): kicker, title, body, Ask Youwe nudge and button next to a stack of demo videos: each a panel with a caption bar (caption and tag); a panel without a video file is a still screenshot. Two buttons, optional background image. On desktop the text stays in view while the videos scroll; mobile stacks. Videos use the Video Player: they play muted while in view (Autoplay "In view", with a pause button), or on click with Autoplay "Off". With reduced motion they never autoplay.',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Autoplay: { control: 'inline-radio', options: ['In view', 'Off'] },
    },
    args: { Device: 'Desktop', Autoplay: 'In view' },
    render: ({ Device, Autoplay }) => (
        <div style={{ width: W[Device], margin: '0 auto' }}>
            <AciWeave Device={Device} Autoplay={Autoplay} {...ACI_WEAVE} />
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
            <AciWeave Device="Desktop" {...ACI_WEAVE} />
            <div style={{ width: 360, margin: '0 auto' }}>
                <AciWeave Device="Mobile" {...ACI_WEAVE} />
            </div>
        </div>
    ),
}
