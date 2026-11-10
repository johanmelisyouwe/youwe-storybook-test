import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TechnologyLogos, type TechnologyLogosProps } from './TechnologyLogos'
import { ModeFrame, type Mode } from '../../shared/ModeFrame'

/* Content blocks/Technology logos — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26851-1733 (Figma copy; logos shown as names until exported) */

const NAMES = [
    'Pimcore',
    'Adobe',
    'Commercetools',
    'HubSpot',
    'Shopify',
    'Hyvä',
    'Alumio',
    'Storyblok',
    'Drupal',
    'Symson',
    'AWS',
    'ACI Weave',
    'Databricks',
    'Microsoft Fabric',
    'Klaviyo',
    'Adyen',
    'Sendcloud',
    'Channable',
]
const logos = (n: number, rowsN = 2) =>
    NAMES.slice(0, n * rowsN).map((name) => ({ name }))
const GRID = {
    Title: 'Driven by the best technologies',
    Body: 'Everything we do is aimed at delivering real business outcomes for our clients. We rely on proven foundations, using the best AI technologies available today. No experimental tools, but enterprise-grade solutions you can trust to scale securely and reliably.',
    button: { label: 'All tech partners', href: '#' },
}
const DEFAULT = {
    Title: 'The technology we build on',
    Body: 'We pick the platform that fits your business, then connect it to the rest of your landscape.',
    rows: ['We pick the platforms', 'that fit your business'],
    button: { label: 'All tech partners', href: '#' },
}
type Layout = NonNullable<TechnologyLogosProps['Layout']>
const N: Record<Layout, number> = {
    Default: 6,
    'Grid 4': 4,
    'Grid 5': 5,
    'Grid 6': 6,
    'Grid 8': 8,
}
const props = (l: Layout) => ({
    ...(l === 'Default' ? DEFAULT : GRID),
    logos: logos(N[l]),
})

type Args = Pick<TechnologyLogosProps, 'Layout' | 'Device'> & { Mode: Mode }
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Technology logos',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Technology logos in fixed slots per row (Grid 4/5/6/8); Default adds the giant drifting rows. Empty slots keep their space without a border. Motion: logos reveal staggered; hover lowers the opacity.',
            },
        },
    },
    argTypes: {
        Layout: {
            control: 'inline-radio',
            options: ['Default', 'Grid 6', 'Grid 4', 'Grid 5', 'Grid 8'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { Layout: 'Grid 6', Device: 'Desktop', Mode: 'Dark' },
    render: ({ Layout = 'Grid 6', Device = 'Desktop', Mode }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: W[Device] }}>
                <TechnologyLogos Layout={Layout} {...props(Layout)} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = { args: { Layout: 'Default' } }
export const Grid6: Story = {}
export const WithEmptySlot: Story = {
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: 1440 }}>
                <TechnologyLogos
                    Layout="Grid 6"
                    {...GRID}
                    logos={[...logos(6, 1), ...logos(5, 1), null]}
                />
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Layout × Mode × Device. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m} padding={0}>
                    {(
                        [
                            'Default',
                            'Grid 6',
                            'Grid 4',
                            'Grid 5',
                            'Grid 8',
                        ] as Layout[]
                    ).map((l) => (
                        <div
                            key={l}
                            style={{
                                display: 'flex',
                                gap: 'var(--spacing-lg)',
                                alignItems: 'start',
                            }}
                        >
                            <div style={{ width: 1440, flexShrink: 0 }}>
                                <TechnologyLogos Layout={l} {...props(l)} />
                            </div>
                            <div style={{ width: 360, flexShrink: 0 }}>
                                <TechnologyLogos Layout={l} {...props(l)} />
                            </div>
                        </div>
                    ))}
                </ModeFrame>
            ))}
        </div>
    ),
}
