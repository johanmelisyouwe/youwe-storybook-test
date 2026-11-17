import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { abstract, caseImage } from '../../media/media'
import { ModeFrame } from '../../shared/mode-frame'
import { ServicesMosaic, type ServicesMosaicProps } from './services-mosaic'

const services: ServicesMosaicProps['services'] = [
    [
        'B2B Enterprise Commerce',
        'B2B webshops and procurement portals with customer-specific pricing and 24/7 self-service ordering.',
    ],
    [
        'D2C Commerce',
        'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly.',
    ],
    ['PIM/MDM', 'One source of truth for your product and master data.'],
    [
        'Digital Experience (DXP)',
        'Digital experience platforms that combine content, personalization and marketing automation.',
    ],
    [
        'Customer & Partner Portals',
        'Self-service portals that bring information together for your customers and partners.',
    ],
    [
        'Cloud Architecture',
        'Scalable cloud architectures for your applications and machine learning workloads.',
    ],
].map(([Title, Description], i) => ({
    Eyebrow: String(i + 1).padStart(2, '0'),
    Title,
    Description,
    'Hover CTA': 'Explore the service',
    href: '#',
}))

const meta = {
    title: 'Content blocks/Services mosaic',
    component: ServicesMosaic,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Services mosaic (code block, v2 services overview; alternative to Services split): head, a lead image tile with a text card, the Service Cards, a case tile with a stat and an Ask Youwe tile. Service, case and Ask tiles all have the card hover (red reveal, also on keyboard focus). `Lead` Left / Right mirrors the top; cards follow the section Mode.',
            },
        },
    },
    args: {
        Device: 'Desktop',
        Lead: 'Left',
        kicker: 'Practice 01',
        title: 'Digital Infrastructure',
        tagline: 'Commerce, product data and portals that carry revenue.',
        lead: {
            image: abstract('016'),
            eyebrow: '01 · Infrastructure · 6 services',
            body: 'We build digital platforms that directly support revenue growth and strengthen market position.',
        },
        services,
        case: {
            image: { src: caseImage('bunzl', 'wide'), alt: 'The BunzlOne app' },
            value: '800+',
            label: 'Categories active',
            client: 'BunzlOne',
            href: '#',
        },
        ask: {
            label: 'Ask Youwe about Infrastructure',
            question: 'Which commerce platforms do you build on?',
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Lead: { control: 'inline-radio', options: ['Left', 'Right'] },
    },
    render: (args) => (
        <ModeFrame Mode="Dark" padding={0}>
            <div style={{ maxWidth: args.Device === 'Mobile' ? 390 : 1440 }}>
                <ServicesMosaic {...args} />
            </div>
        </ModeFrame>
    ),
} satisfies Meta<typeof ServicesMosaic>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
/** Light Mode: light cards on the light surface; lead on the right */
export const LightLeadRight: Story = {
    name: 'Light, lead right',
    args: { Lead: 'Right' },
    render: (args) => (
        <ModeFrame Mode="Light" padding={0}>
            <div style={{ maxWidth: 1440 }}>
                <ServicesMosaic {...args} />
            </div>
        </ModeFrame>
    ),
}
export const Mobile: Story = { args: { Device: 'Mobile' } }
