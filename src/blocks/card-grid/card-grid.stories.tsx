import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CardGrid, type CardGridLayout, type CardGridProps } from './'
import { FeatureCard } from '../../ui/feature-card'
import { CaseCard } from '../../ui/case-card'
import { QuoteCard } from '../../ui/quote-card'
import { Stat } from '../../ui/stat'
import { InsightCard } from '../../ui/insight-card'
import { ServiceCard } from '../../ui/service-card'
import { ClientLogo } from '../../shared/logos/client-logo'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Content blocks/Card grid — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26897-1361
  Figma's cells are swappable placeholders; the stories fill them with the real cards and their Figma copy.
*/

const INTRO = {
    Kicker: 'Industries we serve',
    Title: 'Pick an industry.\nSee the work.',
    Body: 'Each tile opens a quick view with the clients we work for in that industry.',
}
const SERVICES = [
    [
        'B2B Enterprise Commerce',
        'B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering.',
    ],
    [
        'D2C Commerce',
        'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly.',
    ],
    [
        'PIM/MDM',
        'One source of truth for your product and master data, from PIM to customer and supplier records.',
    ],
    [
        'Digital Experience (DXP)',
        'Digital experience platforms that combine content management, personalization and marketing automation.',
    ],
    [
        'Customer & Partner Portals',
        'Self-service portals that bring information together for your customers and partners.',
    ],
    [
        'Cloud Architecture',
        'Scalable cloud architectures for your applications and machine learning workloads.',
    ],
    [
        'Pricing Intelligence',
        'Pricing tools that take repeat work off your teams.',
    ],
    ['Agentic AI', 'AI agents that automate the steps worth automating.'],
    [
        'AI Process Intelligence',
        'Process mining that shows where work gets stuck.',
    ],
    [
        'Data Engineering & API',
        'Data architecture, APIs and governance for one shared source of data.',
    ],
]
const features = (n: number) =>
    SERVICES.slice(0, n).map(([t, d], i) => (
        <FeatureCard
            key={t}
            Number={String(i + 1).padStart(2, '0')}
            Title={t}
            Description={d}
        />
    ))
const GSTAR = {
    Title: 'How a Design System strengthened G-Star’s brand consistency',
    Client: 'G-Star RAW',
    logo: <ClientLogo name="G-Star" />,
    href: '#',
}
const MIXED = [
    <CaseCard
        key="c"
        {...GSTAR}
        stat={{ value: '+43%', label: 'marketable catalog uplift' }}
    />,
    <Stat key="s" Value="900+" Label="Projects delivered since 2000" />,
    <QuoteCard
        key="q"
        Quote="“We turned the vision into a platform. Now we’re adding new customers and suppliers.”"
        Name="Frank Daamen"
        Role="Digital Director Bunzl & Founder of BunzlOne"
    />,
    <ServiceCard
        key="sv"
        Eyebrow="01"
        Title="B2B Enterprise Commerce"
        Description={SERVICES[0][1]}
        {...{ 'Hover CTA': 'Explore the service' }}
        href="#"
    />,
    <InsightCard
        key="i"
        Type="Whitepaper"
        Title="What has to be in place before a PIM pays off"
        Meta="Whitepaper · 6 min read"
        href="#"
    />,
]
const CELLS: Record<CardGridLayout, number> = {
    '2 columns': 4,
    '3 columns': 6,
    '4 columns': 8,
    '5 columns': 10,
    'Wide + 1': 2,
    '1 + Wide': 2,
    'Feature + 4': 5,
    'Feature + 2': 3,
    'Overflow scroll': 6,
}
const LAYOUTS = Object.keys(CELLS) as CardGridLayout[]
const cellsFor = (l: CardGridLayout) =>
    l === 'Overflow scroll'
        ? Array.from({ length: 6 }, (_, i) => <CaseCard key={i} {...GSTAR} />)
        : features(CELLS[l])

type Args = Pick<CardGridProps, 'Layout' | 'Device'> & {
    Mode: Mode
    'Show intro': boolean
}
const W = { Desktop: '100%', Mobile: 390 }

const meta: Meta<Args> = {
    title: 'Content blocks/Card grid',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Section intro + a grid of card cells. Pick a Layout and fill the cells with any card; Overflow scroll is one horizontal row that runs off the right edge. Motion: cards reveal staggered on scroll; cards keep their own hover.',
            },
        },
    },
    argTypes: {
        Layout: { control: 'select', options: LAYOUTS },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: {
        Layout: '3 columns',
        Device: 'Desktop',
        Mode: 'Dark',
        'Show intro': true,
    },
    render: ({
        Layout = '3 columns',
        Device = 'Desktop',
        Mode,
        'Show intro': si,
    }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: W[Device] }}>
                <CardGrid
                    Layout={Layout}
                    intro={si ? INTRO : undefined}
                    cells={cellsFor(Layout)}
                />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const MixedCards: Story = {
    args: { Layout: 'Feature + 4' },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: 1440 }}>
                <CardGrid Layout="Feature + 4" intro={INTRO} cells={MIXED} />
            </div>
        </ModeFrame>
    ),
}
export const OverflowScroll: Story = { args: { Layout: 'Overflow scroll' } }

/** Every Figma variant: Layout × Device (Mode via the toolbar; both modes in the Mode story args). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m} padding={0}>
                    {LAYOUTS.map((l) => (
                        <div
                            key={l}
                            style={{
                                display: 'flex',
                                alignItems: 'start',
                                gap: 'var(--spacing-lg)',
                            }}
                        >
                            <div style={{ width: 1440, flexShrink: 0 }}>
                                <CardGrid
                                    Layout={l}
                                    cells={cellsFor(l)}
                                    label={l}
                                />
                            </div>
                            <div style={{ width: 390, flexShrink: 0 }}>
                                <CardGrid
                                    Layout={l}
                                    cells={cellsFor(l).slice(0, 2)}
                                    label={l}
                                />
                            </div>
                        </div>
                    ))}
                </ModeFrame>
            ))}
        </div>
    ),
}
