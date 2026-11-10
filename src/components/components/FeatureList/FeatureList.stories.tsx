import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FeatureList, type FeatureListProps } from './FeatureList'

/*
  Content blocks/Feature list — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26534-132
  Header copy from Figma; the Feature Cards in Figma have default copy, so the stories use the Figma services.
*/

const HEAD = {
    kicker: 'Industries we serve',
    heading: 'Selected case studies',
    body: 'Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices.',
}
const ITEMS = [
    {
        Title: 'B2B Enterprise Commerce',
        Description:
            'B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering.',
    },
    {
        Title: 'D2C Commerce',
        Description:
            'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly.',
    },
    {
        Title: 'PIM/MDM',
        Description:
            'One source of truth for your product and master data, from PIM to customer and supplier records.',
    },
    {
        Title: 'Digital Experience (DXP)',
        Description:
            'Digital experience platforms that combine content management, personalization and marketing automation.',
    },
    {
        Title: 'Customer & Partner Portals',
        Description:
            'Self-service portals that bring information together for your customers and partners.',
    },
    {
        Title: 'Cloud Architecture',
        Description:
            'Scalable cloud architectures for your applications and machine learning workloads.',
    },
]
type Args = Pick<FeatureListProps, 'Layout' | 'Device'>
const W = { Desktop: '100%', Mobile: 390 }
const items = (l: FeatureListProps['Layout']) =>
    l === 'Split' ? ITEMS.slice(0, 4) : ITEMS

const meta: Meta<Args> = {
    title: 'Content blocks/Feature list',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Section header plus Feature Cards: Grid (rows of three Cards) or Split (header left, numbered Plain list right). Motion: block reveal staggered.',
            },
        },
    },
    argTypes: {
        Layout: { control: 'inline-radio', options: ['Grid', 'Split'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Layout: 'Grid', Device: 'Desktop' },
    render: ({ Layout = 'Grid', Device = 'Desktop' }) => (
        <div style={{ maxWidth: W[Device] }}>
            <FeatureList Layout={Layout} {...HEAD} items={items(Layout)} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Split: Story = { args: { Layout: 'Split' } }

/** Every Figma variant: Layout × Device. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Grid', 'Split'] as const).map((l) => (
                <div
                    key={l}
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'start',
                    }}
                >
                    <div style={{ width: 1440, flexShrink: 0 }}>
                        <FeatureList Layout={l} {...HEAD} items={items(l)} />
                    </div>
                    <div style={{ width: 390, flexShrink: 0 }}>
                        <FeatureList Layout={l} {...HEAD} items={items(l)} />
                    </div>
                </div>
            ))}
        </div>
    ),
}
