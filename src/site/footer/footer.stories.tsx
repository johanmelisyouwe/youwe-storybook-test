import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer, FooterLink, type FooterColumn, type FooterProps } from './'

/* Footer/Corporate — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=25022-751 (Figma copy) */

const l = (labels: string[]) => labels.map((label) => ({ label, href: '#' }))
const SERVICES: FooterColumn[] = [
    {
        heading: 'Digital Infrastructure',
        links: l([
            'B2B Enterprise Commerce',
            'D2C Commerce',
            'PIM/MDM',
            'Digital Experience (DXP)',
            'Customer & Partner Portals',
            'Cloud Architecture',
        ]),
    },
    {
        heading: 'Operational Optimization & Intelligence',
        links: l([
            'Pricing Intelligence',
            'Agentic AI',
            'AI Process Intelligence',
            'Contract & Supply Chain',
            'Product Lifecycle Management (PLM)',
            'Sustainability & ESG',
        ]),
    },
    {
        heading: 'Foundation for Data & Integrations',
        links: l([
            'Enterprise Data Architecture',
            'Data Compliance & Security',
            'Data Engineering & API',
            'AI & Analytics',
            'ACI Weave',
        ]),
    },
]
const SITEMAP = [
    {
        heading: 'Youwe',
        links: l(['Work', 'Services', 'Industries', 'About us', 'Contact']),
    },
    ...SERVICES,
]
const NEWS = [
    {
        heading: 'Youwe',
        links: l([
            'Home',
            'Services',
            'Work',
            'Industries',
            'Tech Partners',
            'Insights',
            'About Us',
        ]),
    },
    ...SERVICES,
]
const NEWSLETTER = {
    text: 'Tell us what you want to achieve and we will think along with you.',
    cta: { label: 'Contact us', href: '#' },
}

type Args = Pick<FooterProps, 'Variant' | 'Device'>
const props = (v: Args['Variant']) =>
    v === 'Newsletter'
        ? { columns: NEWS, newsletter: NEWSLETTER }
        : { columns: SITEMAP }

const meta: Meta<Args> = {
    title: 'Components/Footer/Corporate',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Corporate site footer. Sitemap: brand column plus three service columns. Newsletter: text and button first, plus a language selector. Static; links change colour on hover (duration/fast).',
            },
        },
    },
    argTypes: {
        Variant: {
            control: 'inline-radio',
            options: ['Sitemap', 'Newsletter'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Variant: 'Sitemap', Device: 'Desktop' },
    render: ({ Variant, Device }) => (
        <div style={{ maxWidth: Device === 'Mobile' ? 360 : 1440 }}>
            <Footer Variant={Variant} Device={Device} {...props(Variant)} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Newsletter: Story = { args: { Variant: 'Newsletter' } }
export const Mobile: Story = {
    args: { Device: 'Mobile' },
    globals: { viewport: { value: 'mobile' } },
}

/** _Footer link: Size M and S. */
export const Links: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <FooterLink label="Work" href="#" />
            <FooterLink Size="S" label="Work" href="#" />
        </div>
    ),
}

/** Every Figma variant: Variant × Device. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            {(['Sitemap', 'Newsletter'] as const).map((v) => (
                <div key={v} style={{ maxWidth: 1440 }}>
                    <Footer Variant={v} {...props(v)} />
                </div>
            ))}
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'start',
                }}
            >
                {(['Sitemap', 'Newsletter'] as const).map((v) => (
                    <div key={v} style={{ width: 360 }}>
                        <Footer Variant={v} Device="Mobile" {...props(v)} />
                    </div>
                ))}
            </div>
        </div>
    ),
}
