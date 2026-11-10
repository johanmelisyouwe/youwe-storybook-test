import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero, HeroBar, HeroLabel, type HeroProps, type HeroStat } from './'
import { Header, type HeaderProps } from '../../site/header'
import { ClientLogo } from '../../shared/logos/client-logo'
import { abstract, caseImage } from '../../media/media'

/*
  Content blocks/Hero — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24985-698
  _Hero/Bar 26880:273, _Hero/Label 26882:927. Copy from Figma. Background image and client logos exported from Figma (src/media).
*/

const KICKER = 'Business improvement agency'
const CLIENTS = [
    'Exigent',
    'G-Star',
    'GoCardless',
    'ING',
    'LaSalle',
    'Munich Re',
    'Newland',
    'Subway',
]
const LOGOS = CLIENTS.map((c) => <ClientLogo key={c} name={c} width={118} />)
const STATS: HeroStat[] = [
    { value: '17', label: 'markets supported', client: 'Quooker' },
    {
        value: '−86%',
        label: 'response time',
        client: 'De Heus Animal Nutrition',
    },
    { value: '93%', label: 'average match score', client: 'Symson' },
    { value: '41%', label: 'IT cost reduction', client: 'PostNL' },
    { value: '43%', label: 'marketable catalog uplift', client: 'Chadwicks' },
]
const NAV: HeaderProps['nav'] = [
    'Services',
    'Work',
    'Industries',
    'Tech Partners',
    'Insights',
    'About Us',
].map((l) => ({ label: l, href: '#' }))
const GRADIENT: HeroProps = {
    image: abstract('016'),
    title: ['Complex products.', 'Clear platforms.'],
    body: 'Digital transformation is about reshaping how platforms, processes, data and people work together. We design connected digital ecosystems and help teams adopt new ways of working, so change leads to lasting performance.',
    label: { Type: 'Subtitle', Subtitle: KICKER },
    buttons: [
        { label: 'See our work', href: '#' },
        { label: 'What we do', href: '#' },
    ],
    bar: { Type: 'Logos', logos: LOGOS },
}
const CASE: HeroProps = {
    image: caseImage('quooker-1', 'wide'),
    Variant: 'Title + image',
    title: ['Scaling Smart: Quooker’s Expansion to 17 Countries'],
    label: {
        Type: 'Breadcrumb',
        crumbs: [
            { label: 'Home', href: '#' },
            { label: 'Work', href: '#' },
            { label: 'Quooker' },
        ],
    },
    logo: <ClientLogo name="Quooker" width={150} />,
}

type Args = Pick<HeroProps, 'Variant' | 'Device'> & {
    Bar: 'Logos' | 'Stats' | 'None'
    'Show header': boolean
}
const meta: Meta<Args> = {
    title: 'Content blocks/Hero',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Hero. Gradient: kicker + heading/3xl title (2nd line brand red), body and up to 2 buttons, optional bottom bar (client logos or stats, slow marquee). Title + image: case/detail pages. Motion: title rises line by line in a mask; with `recede`, the hero recedes over the first 860px of scroll.',
            },
        },
    },
    argTypes: {
        Variant: {
            control: 'inline-radio',
            options: ['Gradient', 'Title + image'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Bar: { control: 'inline-radio', options: ['Logos', 'Stats', 'None'] },
    },
    args: {
        Variant: 'Gradient',
        Device: 'Desktop',
        Bar: 'Logos',
        'Show header': true,
    },
    render: ({ Variant, Device, Bar, 'Show header': sh }) => {
        const base = Variant === 'Gradient' ? GRADIENT : CASE
        const bar =
            Bar === 'None'
                ? undefined
                : Bar === 'Stats'
                  ? { Type: 'Stats' as const, stats: STATS }
                  : GRADIENT.bar
        return (
            <div style={{ maxWidth: Device === 'Mobile' ? 360 : 1440 }}>
                <Hero
                    {...base}
                    Device={Device}
                    bar={Variant === 'Gradient' ? bar : undefined}
                    header={
                        sh ? <Header Device={Device} nav={NAV} /> : undefined
                    }
                />
            </div>
        )
    },
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const StatsBar: Story = { args: { Bar: 'Stats' } }
export const TitleImage: Story = {
    args: { Variant: 'Title + image', 'Show header': false },
}
export const Mobile: Story = {
    args: { Device: 'Mobile' },
    globals: { viewport: { value: 'mobile' } },
}

/** _Hero/Bar (Logos, Stats) and _Hero/Label (Subtitle, Breadcrumb). */
export const Parts: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gap: 'var(--spacing-lg)',
                maxWidth: 1440,
            }}
        >
            <HeroBar Type="Logos" logos={LOGOS} />
            <HeroBar Type="Stats" stats={STATS} />
            <HeroLabel Type="Subtitle" Subtitle={KICKER} />
            <HeroLabel
                Type="Breadcrumb"
                crumbs={[
                    { label: 'Home', href: '#' },
                    { label: 'Work', href: '#' },
                    { label: 'Quooker' },
                ]}
            />
            <div style={{ width: 360 }}>
                <HeroLabel
                    Type="Breadcrumb"
                    Device="Mobile"
                    crumbs={[
                        { label: 'Home', href: '#' },
                        { label: 'Work', href: '#' },
                        { label: 'Quooker' },
                    ]}
                />
            </div>
        </div>
    ),
}

/** Every Figma variant: Device × Variant. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-2xl)' }}>
            <div style={{ maxWidth: 1440 }}>
                <Hero {...GRADIENT} header={<Header nav={NAV} />} />
            </div>
            <div style={{ maxWidth: 1440 }}>
                <Hero {...CASE} />
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-2xl)',
                    alignItems: 'start',
                }}
            >
                <div style={{ width: 360 }}>
                    <Hero
                        {...GRADIENT}
                        Device="Mobile"
                        header={<Header Device="Mobile" nav={NAV} />}
                    />
                </div>
                <div style={{ width: 360 }}>
                    <Hero {...CASE} Device="Mobile" />
                </div>
            </div>
        </div>
    ),
}
