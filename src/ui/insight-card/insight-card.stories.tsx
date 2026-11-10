import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { InsightCard, type InsightCardProps } from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Insight Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26733-125
  Titles, meta and types from the Figma Insights page (desktop). Images show the Figma placeholder.
*/

type State = 'Rest' | 'Hover'
type Args = Pick<InsightCardProps, 'Variant' | 'Device'> & {
    Mode: Mode
    State: State
}
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover' }
const ITEMS: Omit<InsightCardProps, 'href'>[] = [
    {
        Type: 'Whitepaper',
        Title: 'What has to be in place before a PIM pays off',
        Meta: 'Whitepaper · 6 min read',
    },
    {
        Type: 'Event',
        Title: 'Higher Ground: what’s next for product data',
        Meta: 'December 3, 2026 · SnowWorld Zoetermeer',
    },
    {
        Type: 'Blog',
        Title: 'The Wennink report: what it means for your AI and digital plans',
    },
]
const W = (v: InsightCardProps['Variant'], d: InsightCardProps['Device']) =>
    d === 'Mobile' ? 336 : v === 'Featured' ? 1280 : 416

const meta: Meta<Args> = {
    title: 'Components/Insight Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Card for an insight (blog, whitepaper, event, video, news). Featured = the large "Latest" card. Whole card is one link; hover/focus plays the red reveal.',
            },
        },
    },
    argTypes: {
        Variant: { control: 'inline-radio', options: ['Default', 'Featured'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
        State: { control: 'inline-radio', options: ['Rest', 'Hover'] },
    },
    args: {
        Variant: 'Default',
        Device: 'Desktop',
        Mode: 'Dark',
        State: 'Rest',
    },
    render: ({ Variant, Device, Mode, State }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W(Variant, Device) }}>
                <InsightCard
                    {...ITEMS[0]}
                    Variant={Variant}
                    Device={Device}
                    href="#"
                    className={PSEUDO[State]}
                />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Featured: Story = {
    args: { Variant: 'Featured' },
    parameters: { layout: 'padded' },
}

/** Every Figma variant: Variant × Device × Mode × State. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Rest', 'Hover'] as State[]).flatMap((s) => [
                            <div key={`d${s}`} style={{ width: 416 }}>
                                <InsightCard
                                    {...ITEMS[0]}
                                    href="#"
                                    className={PSEUDO[s]}
                                />
                            </div>,
                            <div key={`m${s}`} style={{ width: 336 }}>
                                <InsightCard
                                    {...ITEMS[1]}
                                    Device="Mobile"
                                    href="#"
                                    className={PSEUDO[s]}
                                />
                            </div>,
                            <div key={`fm${s}`} style={{ width: 336 }}>
                                <InsightCard
                                    {...ITEMS[2]}
                                    Variant="Featured"
                                    Device="Mobile"
                                    href="#"
                                    className={PSEUDO[s]}
                                />
                            </div>,
                            <div key={`f${s}`} style={{ width: 1280 }}>
                                <InsightCard
                                    {...ITEMS[0]}
                                    Variant="Featured"
                                    href="#"
                                    className={PSEUDO[s]}
                                />
                            </div>,
                        ])}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
