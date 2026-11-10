import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
    Header,
    MegaMenu,
    NavLink,
    UtilityLink,
    type HeaderProps,
    type MegaMenuProps,
} from './'

/*
  Header/Corporate — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24999-631
  _Nav link 24998:575, _Utility link 24998:583, _Mega menu 26977:1552.
  Navigation, mega menu columns and the ACI Weave feature are the Figma copy.
*/

const MEGA: MegaMenuProps = {
    columns: [
        {
            heading: 'Digital Infrastructure',
            links: [
                'B2B Enterprise Commerce',
                'D2C Commerce',
                'PIM/MDM',
                'Digital Experience (DXP)',
                'Customer & Partner Portals',
                'Cloud Architecture',
            ].map((l) => ({ label: l, href: '#' })),
        },
        {
            heading: 'Operational Optimization & Intelligence',
            links: [
                'Pricing Intelligence',
                'Agentic AI',
                'AI Process Intelligence',
                'Contract & Supply Chain',
                'Product Lifecycle Management (PLM)',
                'Sustainability & ESG',
            ].map((l) => ({ label: l, href: '#' })),
        },
        {
            heading: 'Foundation for Data & Integrations',
            links: [
                'Enterprise Data Architecture',
                'Data Compliance & Security',
                'Data Engineering & API',
                'AI & Analytics',
                'ACI Weave',
            ].map((l) => ({ label: l, href: '#' })),
        },
    ],
}
const NAV: HeaderProps['nav'] = [
    { label: 'Services', href: '#', mega: MEGA },
    { label: 'Work', href: '#' },
    { label: 'Industries', href: '#' },
    { label: 'Tech Partners', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'About Us', href: '#' },
]

type Args = Pick<HeaderProps, 'Device' | 'Expanded'>

const meta: Meta<Args> = {
    title: 'Components/Header/Corporate',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Corporate site navigation, transparent over the hero. The Services mega menu opens on hover (closes 300ms after leaving), with Enter/ArrowDown, and closes with Esc. Mobile: full-screen menu sheet, page scroll locked. With `fixed`: glass once scrolled, hides on scroll down and returns on scroll up (duration/slow, ease/emphasized).',
            },
        },
    },
    argTypes: {
        Device: {
            control: 'inline-radio',
            options: ['Desktop', 'Mobile', 'Auto'],
            description:
                'Auto: both render, the screen width picks (hamburger below 1024px)',
        },
        Expanded: { control: 'inline-radio', options: ['No', 'Yes'] },
    },
    args: { Device: 'Desktop', Expanded: 'No' },
    render: (args) => (
        <div
            style={{
                maxWidth: args.Device === 'Mobile' ? 360 : undefined,
                minHeight:
                    args.Expanded === 'Yes'
                        ? args.Device === 'Mobile'
                            ? 780
                            : 460
                        : 140,
            }}
        >
            <Header
                key={`${args.Device}${args.Expanded}`}
                {...args}
                nav={NAV}
                current="Services"
                inline
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const MegaMenuOpen: Story = { args: { Expanded: 'Yes' } }
export const Mobile: Story = {
    args: { Device: 'Mobile' },
    globals: { viewport: { value: 'mobile' } },
}
export const MobileMenu: Story = {
    args: { Device: 'Mobile', Expanded: 'Yes' },
    globals: { viewport: { value: 'mobile' } },
}

/** _Nav link (M / L × Rest / Active / Hover), _Utility link and the Ask Youwe mega menu feature. */
export const Parts: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    alignItems: 'center',
                }}
            >
                <NavLink label="Work" href="#" />
                <NavLink label="Work" href="#" active />
                <NavLink label="Work" href="#" className="pseudo-hover" />
                <NavLink Size="L" label="Work" href="#" />
                <NavLink Size="L" label="Work" href="#" active />
                <NavLink
                    Size="L"
                    label="Work"
                    href="#"
                    className="pseudo-hover"
                />
                <UtilityLink label="Careers" href="#" />
            </div>
            <div style={{ position: 'relative', maxWidth: 1440 }}>
                <MegaMenu {...MEGA} Feature="Ask Youwe" inline />
            </div>
        </div>
    ),
}

/** Every Figma variant: Device × Expanded. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-2xl)' }}>
            {(['No', 'Yes'] as const).map((e) => (
                <div key={e} style={{ maxWidth: 1440 }}>
                    <Header Expanded={e} nav={NAV} current="Services" inline />
                </div>
            ))}
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-2xl)',
                    alignItems: 'start',
                }}
            >
                {(['No', 'Yes'] as const).map((e) => (
                    <div
                        key={e}
                        style={{
                            width: 360,
                            outline: '1px dashed var(--color-shared-border-2)',
                        }}
                    >
                        <Header
                            Device="Mobile"
                            Expanded={e}
                            nav={NAV}
                            current="Services"
                            inline
                        />
                    </div>
                ))}
            </div>
        </div>
    ),
}

/** Device=Auto, as the templates use it: resize the canvas below 1024px to get the hamburger. */
export const Responsive: Story = { args: { Device: 'Auto' } }
