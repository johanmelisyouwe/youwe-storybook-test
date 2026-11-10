import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { QuoteCard } from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Quote Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26895-260
  Quote and attribution from the Figma Vertical slider (Quote slide).
*/

type Args = { Device: 'Desktop' | 'Mobile'; Mode: Mode }
const W = { Desktop: 416, Mobile: 336 }
const QUOTE = {
    Quote: '“We turned the vision into a platform. Now we’re adding new customers and suppliers.”',
    Name: 'Frank Daamen',
    Role: 'Digital Director Bunzl & Founder of BunzlOne',
}

const meta: Meta<Args> = {
    title: 'Components/Quote Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Small client quote for card grids. Stretches to fill its grid cell; the attribution stays at the bottom.',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { Device: 'Desktop', Mode: 'Dark' },
    render: ({ Device, Mode }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W[Device] }}>
                <QuoteCard {...QUOTE} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const WithButton: Story = {
    render: ({ Device, Mode }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W[Device] }}>
                <QuoteCard
                    {...QUOTE}
                    buttons={[{ label: 'Read the case', href: '#' }]}
                />
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Mode × Device. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Desktop', 'Mobile'] as const).map((d) => (
                            <div key={d} style={{ width: W[d] }}>
                                <QuoteCard {...QUOTE} />
                            </div>
                        ))}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
