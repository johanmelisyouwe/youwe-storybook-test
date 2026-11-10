import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CardGrid } from '../blocks/card-grid'
import { CaseCard, type CaseCardProps } from '../ui/case-card'
import { SystemCard } from '../ui/service-card'
import { ContactCTA } from '../blocks/contact-cta'
import {
    CLIENT_LOGOS,
    Page,
    Section,
    WORK_WITH_US,
    footer,
    header,
    logo,
    type Device,
    useDevice,
} from './shared'
import { abstract, caseImage, clientPhoto } from '../media/media'

/*
  Templates/Industries — Figma "Page / Industries" (new design): Desktop 26657:16750, Mobile 26814:197.
  Copy, props and order from figma/templates.js. Desktop "Frame 4" wraps Section intro + fourteen industry
  Case Cards (One quarter, rows of four). Mobile follows the desktop design with the same cards (decided
  9 November); the Figma mobile frame still uses the parked Industry List.
  Sub-footer: the desktop copy on both devices.
*/

const INTRO = {
    Kicker: 'Industries we serve',
    Title: 'Pick an industry.\nSee the work.',
    Body: 'Each tile opens a quick view with the clients we work for in that industry.',
}
/* Photo per industry tile (Figma Case/Portrait/*; Food & Agriculture uses the default g-star photo in Figma). */
const TILE_PHOTO = [
    'amac',
    'azerty',
    'g-star',
    'heidelberg',
    'adyen',
    'g-star',
    'umcg',
    'jc-electronics',
    'chadwicks',
    'quooker-1',
    'unipart',
    'beeckestijn',
    'advania',
    'booking',
]
const INDUSTRIES: [string, string][] = [
    ['Retail & Consumer Goods', 'Amac, BunzlOne'],
    ['Wholesale', 'Azerty, FroQ'],
    ['Fashion & Lifestyle', 'G-Star RAW'],
    ['Manufacturing', 'Heidelberg, Tata Steel Europe'],
    ['Financial Services', 'Adyen, Munich Re Automation Solutions'],
    ['Food & Agriculture', 'Bejo Zaden, Avebe'],
    ['Healthcare & Pharma', 'Vivisol, UMCG'],
    ['Industrial Supplies & Components', 'JC-Electronics'],
    [
        'Construction & Building Materials',
        'Chadwicks Group, Kingspan Insulated Panels',
    ],
    ['Home & Living', 'Eichholtz, Quooker'],
    ['Automotive & Cycling', 'Focus Bikes, Unipart'],
    ['Education & Training', 'Beeckestijn, 360training'],
    ['IT & Technology Services', 'Advania'],
    ['Travel and Hospitality', 'Booking.com'],
]

const c = (
    Title: string,
    Client: string,
    stat?: [string, string]
): CaseCardProps => ({
    Title,
    Client,
    logo: logo(Client),
    image: clientPhoto(Client),
    stat: stat && { value: stat[0], label: stat[1] },
    href: '#',
})
const IN_FOCUS: CaseCardProps[] = [
    c('Scaling product data with Pimcore & AI', 'Chadwicks Group', [
        '+43%',
        'marketable catalog uplift',
    ]),
    c('From inbox to SAP: AI order intake', 'Kingspan Insulated Panels'),
    c('Scaling smarter: a digital platform for global growth', 'Quooker', [
        '17',
        'markets supported',
    ]),
]

const SYSTEMS = [
    [
        '01',
        'Systems that drive revenue',
        'Commerce platforms and experiences that help you reach customers and grow revenue.',
        'Proven at BunzlOne · 800+ categories active',
        'Digital Infrastructure',
    ],
    [
        '02',
        'Systems that optimize',
        'Complex workflows turned into intelligent, efficient systems: less manual work, less risk.',
        'Proven at Kingspan Insulated Panels · AI order intake into SAP',
        'Operational Optimization & Intelligence',
    ],
    [
        '03',
        'Systems that scale',
        'Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.',
        'Proven at Quooker · 17 markets supported',
        'Foundation for Data & Integrations',
    ],
]

function IndustriesPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="Which industries do you work in?">
            <Hero
                Device={Device}
                image={abstract('006')}
                title={['Twelve industries.', 'One connected way of working.']}
                body="Every industry has its own buyers, rules and systems. We bring commerce, data and AI together for each of them."
                label={{ Type: 'Subtitle', Subtitle: 'Industries' }}
                buttons={[{ label: 'Find your industry', href: '#' }]}
                bar={{
                    Type: 'Logos',
                    logos: CLIENT_LOGOS.map((n) => logo(n, 118)),
                }}
                header={header(Device)}
            />
            <Section Mode="Dark">
                <CardGrid
                    Layout="4 columns"
                    Device={Device}
                    intro={{ Layout: 'Split', ...INTRO }}
                    cells={INDUSTRIES.map(([Title, Client], i) => (
                        <CaseCard
                            key={Title}
                            Size="One quarter"
                            Device={Device}
                            Title={Title}
                            Client={Client}
                            image={caseImage(TILE_PHOTO[i])}
                            href="#"
                        />
                    ))}
                />
            </Section>
            <Section Mode="Light">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Stacked',
                        Kicker: 'In focus',
                        Title: 'Trade, homeowners and the ERP behind both.',
                    }}
                    cells={IN_FOCUS.map((p) => (
                        <CaseCard key={p.Title} Device={Device} {...p} />
                    ))}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Split',
                        Kicker: 'What connects them',
                        Title: 'Three practices,\nevery industry.',
                        Body: 'Everything we do comes down to three systems. Most clients run more than one.',
                    }}
                    cells={SYSTEMS.map(
                        ([Eyebrow, Title, Description, Caption, link]) => (
                            <SystemCard
                                key={Title}
                                image={caseImage(
                                    ['bunzl', 'kingspan-1', 'quooker-1'][
                                        Number(Eyebrow) - 1
                                    ]
                                )}
                                Eyebrow={Eyebrow}
                                Title={Title}
                                Description={Description}
                                Caption={Caption}
                                link={link}
                                {...{
                                    'Hover CTA': 'Explore the system',
                                    'Hover context': link,
                                }}
                                href="#"
                            />
                        )
                    )}
                />
            </Section>
            <ContactCTA
                Variant="Sub-footer background"
                Device={Device}
                {...WORK_WITH_US}
                image={abstract('011')}
            />
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Industries',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Industries overview template (new design): hero, industry tiles, cases in focus, the three systems, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <IndustriesPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <IndustriesPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
