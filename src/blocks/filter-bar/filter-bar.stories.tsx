import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FilterBar, type FilterBarProps } from './'
import { ModeFrame } from '../../shared/mode-frame'

/* Content blocks/Filter bar — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27090-1370 (Figma copy; option lists are examples) */

const SYSTEMS = [
    'eCommerce',
    'Experience',
    'Artificial Intelligence',
    'Digital Marketing',
]
const o = (...l: string[]) => l.map((x) => ({ value: x, label: x }))
const FIELDS: FilterBarProps['fields'] = [
    {
        label: 'Industries',
        options: o('Manufacturing', 'Wholesale', 'Retail', 'Food & beverage'),
    },
    {
        label: 'Offering',
        options: o('Strategy', 'Design', 'Development', 'Growth'),
    },
    { label: 'Themes', options: o('B2B', 'Composable', 'Personalisation') },
    {
        label: 'Platforms',
        options: o('Adobe Commerce', 'Hyvä', 'Shopware', 'Pimcore'),
    },
    { label: 'Technologies', options: o('Alumio', 'Algolia', 'Akeneo') },
]
type Args = Pick<FilterBarProps, 'Device' | 'State'>
const W = { Desktop: 1280, Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Filter bar',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Overview filters: system tiles and five dropdowns on desktop; system pills, a Filters button and a bottom sheet on mobile. Motion: the sheet slides up (duration/slow, ease/emphasized).',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        State: {
            control: 'inline-radio',
            options: ['Default', 'Open'],
            description: 'Open is Mobile only (the bottom sheet)',
        },
    },
    args: { Device: 'Desktop', State: 'Default' },
    render: ({ Device = 'Desktop', State }) => (
        <ModeFrame Mode="Dark" padding={Device === 'Desktop' ? 80 : 12}>
            <div style={{ maxWidth: W[Device] }}>
                <FilterBar
                    key={`${Device}-${State}`}
                    Device={Device}
                    State={State}
                    systems={SYSTEMS}
                    fields={FIELDS}
                    count={9}
                    inline
                />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const MobileOpen: Story = { args: { Device: 'Mobile', State: 'Open' } }

/** Every Figma variant: Desktop Default, Mobile Default, Mobile Open (3). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <ModeFrame Mode="Dark" padding={24}>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-2xl)',
                    alignItems: 'start',
                }}
            >
                <div style={{ width: 1280, flexShrink: 0 }}>
                    <FilterBar
                        systems={SYSTEMS}
                        system="eCommerce"
                        fields={FIELDS}
                        count={9}
                    />
                </div>
                <div style={{ width: 360, flexShrink: 0 }}>
                    <FilterBar
                        Device="Mobile"
                        systems={SYSTEMS}
                        fields={FIELDS}
                        count={9}
                    />
                </div>
                <div style={{ width: 360, flexShrink: 0 }}>
                    <FilterBar
                        Device="Mobile"
                        State="Open"
                        systems={SYSTEMS}
                        fields={FIELDS}
                        count={9}
                        inline
                    />
                </div>
            </div>
        </ModeFrame>
    ),
}
