import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TwoColumnText, type TwoColumnTextProps } from './'
import { TWO_COLUMN } from '../text-column/longform.copy'

/* Content blocks/Two-column text — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-587 (Figma copy) */

type Args = Pick<TwoColumnTextProps, 'Split' | 'Device'>
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Two-column text',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Label + lead on the left, body on the right. Split 4/8 gives the lead a narrower column. Motion: block reveal.',
            },
        },
    },
    argTypes: {
        Split: { control: 'inline-radio', options: ['6/6', '4/8'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Split: '6/6', Device: 'Desktop' },
    render: (args) => (
        <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}>
            <TwoColumnText {...TWO_COLUMN} {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Second: Story = { name: '4/8', args: { Split: '4/8' } }

/** Every Figma variant: Device × Split. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['6/6', '4/8'] as const).map((v) => (
                <div key={v} style={{ maxWidth: 1440 }}>
                    <TwoColumnText {...TWO_COLUMN} {...{ Split: v }} />
                </div>
            ))}
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'start',
                }}
            >
                {(['6/6', '4/8'] as const).map((v) => (
                    <div key={v} style={{ width: 360 }}>
                        <TwoColumnText {...TWO_COLUMN} {...{ Split: v }} />
                    </div>
                ))}
            </div>
        </div>
    ),
}
