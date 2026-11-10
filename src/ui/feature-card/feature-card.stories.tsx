import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeatureCard, type FeatureCardProps } from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Feature Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26533-129
  Figma only has default copy for this card; the stories use services from the Figma Services split
  block as numbered features.
*/

type Args = Pick<FeatureCardProps, 'Variant'> & {
    Device: 'Desktop' | 'Mobile'
    Mode: Mode
}
const W = { Desktop: 416, Mobile: 336 }
const ITEMS = [
    {
        Number: '01',
        Title: 'B2B Enterprise Commerce',
        Description:
            'B2B webshops and procurement portals with customer-specific pricing and self-service ordering.',
    },
    {
        Number: '02',
        Title: 'PIM/MDM',
        Description:
            'One source of truth for your product and master data, from PIM to customer and supplier records.',
    },
    {
        Number: '03',
        Title: 'Cloud Architecture',
        Description:
            'Scalable cloud architectures for your applications and machine learning workloads.',
    },
]

const meta: Meta<Args> = {
    title: 'Components/Feature Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Text-only card for features, solutions and numbered benefits. Card sits on a surface, Plain uses a top divider for lists, AI uses the Ask Youwe surface and aura. Motion: scroll block reveal (`reveal` prop).',
            },
        },
    },
    argTypes: {
        Variant: { control: 'inline-radio', options: ['Card', 'Plain', 'AI'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { Variant: 'Card', Device: 'Desktop', Mode: 'Dark' },
    render: ({ Variant, Device, Mode }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W[Device] }}>
                <FeatureCard {...ITEMS[0]} Variant={Variant} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Plain: Story = { args: { Variant: 'Plain' } }
export const AI: Story = { args: { Variant: 'AI' } }

/** Optional parts switched on: image, arrow, tags, button and link. */
export const WithOptions: Story = {
    render: ({ Variant, Device, Mode }) => (
        <ModeFrame Mode={Mode}>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                    alignItems: 'start',
                }}
            >
                <div style={{ width: W[Device] }}>
                    <FeatureCard
                        {...ITEMS[1]}
                        Variant={Variant}
                        image
                        tags={['PIM', 'MDM', 'Pimcore']}
                        {...{ 'Show arrow': true }}
                    />
                </div>
                <div style={{ width: W[Device] }}>
                    <FeatureCard
                        {...ITEMS[2]}
                        Variant={Variant}
                        button={{ label: 'Contact us', href: '#' }}
                    />
                </div>
                <div style={{ width: W[Device] }}>
                    <FeatureCard
                        {...ITEMS[0]}
                        Variant={Variant}
                        link={{ label: 'Read more' }}
                    />
                </div>
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Device × Variant × Mode. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Desktop', 'Mobile'] as const).flatMap((d) =>
                            (['Card', 'Plain', 'AI'] as const).map((v, i) => (
                                <div key={d + v} style={{ width: W[d] }}>
                                    <FeatureCard {...ITEMS[i]} Variant={v} />
                                </div>
                            ))
                        )}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
