import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StatsBlock, type StatsBlockProps } from './StatsBlock'
import { ClientLogo } from '../../logos/ClientLogo'
import { ModeFrame, type Mode } from '../../shared/ModeFrame'

/* Content blocks/Stats — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24985-701 (Figma copy) */

const name = (n: string) => <span className="yw-body-md-bold">{n}</span>
const CLIENT = {
    intro: {
        kicker: 'What changed for our clients',
        title: 'Most of our clients have a large catalog, more than one market and an ERP that is staying put. We work with that.',
    },
    stats: [
        {
            Value: '+12.7%',
            Label: 'More checkout starts in the first UK post-launch comparison',
            logo: name('Quooker'),
            href: '#',
        },
        {
            Value: '+43%',
            Label: 'Marketable catalog uplift',
            logo: <ClientLogo name="G-Star" width={80} />,
            href: '#',
        },
        {
            Value: '800+',
            Label: 'Categories active',
            logo: name('Chadwicks'),
            href: '#',
        },
        {
            Value: '+93%',
            Label: 'Average match score',
            logo: name('Symson'),
            href: '#',
        },
    ],
}
const PLAIN = {
    intro: {
        title: 'Global thinking, local understanding',
        body: 'We’re a driven collective of over 250 specialists working across strategy, design, technology and growth. Wherever you are, we know your market.',
    },
    stats: [
        { Value: '25', Label: 'Years building digital commerce' },
        { Value: '900+', Label: 'Projects delivered since 2000' },
        { Value: '250+', Label: 'Specialists across every digital discipline' },
        {
            Value: '8',
            Label: 'Offices in the Netherlands, the UK, Sweden, Indonesia and Ukraine',
        },
    ],
}
type Args = Pick<StatsBlockProps, 'Type' | 'Device'> & { Mode: Mode }
const W = { Desktop: '100%', Mobile: 360 }
const copy = (t: StatsBlockProps['Type']) => (t === 'Plain' ? PLAIN : CLIENT)

const meta: Meta<Args> = {
    title: 'Content blocks/Stats',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Key figures: intro and a row of Stat tiles (borders overlap). Type Client adds client logos and arrows. Motion: numbers count up once when scrolled into view (1.6s ease-out).',
            },
        },
    },
    argTypes: {
        Type: { control: 'inline-radio', options: ['Client', 'Plain'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { Type: 'Client', Device: 'Desktop', Mode: 'Dark' },
    render: ({ Type, Device = 'Desktop', Mode }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: W[Device] }}>
                <StatsBlock Type={Type} {...copy(Type)} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Plain: Story = { args: { Type: 'Plain' } }

/** Every Figma variant: Type × Mode × Device. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m} padding={0}>
                    {(['Client', 'Plain'] as const).map((t) => (
                        <div
                            key={t}
                            style={{
                                display: 'flex',
                                gap: 'var(--spacing-lg)',
                                alignItems: 'start',
                            }}
                        >
                            <div style={{ width: 1440, flexShrink: 0 }}>
                                <StatsBlock Type={t} {...copy(t)} />
                            </div>
                            <div style={{ width: 360, flexShrink: 0 }}>
                                <StatsBlock Type={t} {...copy(t)} />
                            </div>
                        </div>
                    ))}
                </ModeFrame>
            ))}
        </div>
    ),
}
