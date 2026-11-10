import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Statement, type StatementProps } from './'

/* Content blocks/Statement — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26543-21679 (Figma copy) */

const TEXT =
    'Customers can access product info, locate stores, and order accessories to keep their Quooker products running smoothly.'
type Args = Pick<StatementProps, 'Device'>
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Statement',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'One large statement (heading/xl). Optional giant decorative rows (image-filled and outlined, as on the v2 site) drift ±9% in opposite directions on scroll (aria-hidden).',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { Device: 'Desktop' },
    render: ({ Device = 'Desktop' }) => (
        <div style={{ maxWidth: W[Device] }}>
            <Statement text={TEXT} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
/** Giant rows as on the v2 site (partners section): image-filled + outlined, drifting ±9% in opposite directions on scroll. Scroll the canvas. The image fill is not imported yet, so the image row uses the Ask Youwe glow colours. */
export const WithGiantRows: Story = {
    render: () => (
        <div style={{ maxWidth: 1440 }}>
            <div style={{ height: '60vh' }} />
            <Statement
                text={TEXT}
                rows={[
                    { text: 'We pick the platform' },
                    { text: 'that fits your business.' },
                ]}
            />
            <div style={{ height: '80vh' }} />
        </div>
    ),
}

/** Every Figma variant (Device). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: 'var(--spacing-lg)',
                alignItems: 'start',
            }}
        >
            <div style={{ width: 1440 }}>
                <Statement text={TEXT} />
            </div>
            <div style={{ width: 360 }}>
                <Statement text={TEXT} />
            </div>
        </div>
    ),
}
