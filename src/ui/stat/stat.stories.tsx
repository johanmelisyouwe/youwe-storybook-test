import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Stat, StatRow, type StatProps } from './'
import { ClientLogo } from '../../shared/logos/client-logo'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Stat — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26795-73
  Values and labels from the Figma Stats content block.
*/

type Args = Pick<StatProps, 'Type' | 'Size'> & {
    Mode: Mode
    State: 'Rest' | 'Hover'
}
const W = { L: 320, M: 336 }
const ABOUT = [
    { Value: '25', Label: 'Years building digital commerce' },
    { Value: '900+', Label: 'Projects delivered since 2000' },
    { Value: '250+', Label: 'Specialists across every digital discipline' },
    {
        Value: '8',
        Label: 'Offices in the Netherlands, the UK, Sweden, Indonesia and Ukraine',
    },
]
const CLIENT = {
    Value: '+43%',
    Label: 'Marketable catalog uplift',
    logo: <ClientLogo name="G-Star" width={80} />,
    href: '#',
    context: 'G-Star',
}

const meta: Meta<Args> = {
    title: 'Components/Stat',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Single stat. Type=Client adds a client logo and round arrow link. Rows use a -1px gap so borders overlap. Motion: count up on scroll (1.6s ease-out, once) with `countUp`.',
            },
        },
    },
    argTypes: {
        Type: { control: 'inline-radio', options: ['Client', 'Plain'] },
        Size: { control: 'inline-radio', options: ['L', 'M'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover'],
            description: 'Type=Client only',
        },
    },
    args: { Type: 'Plain', Size: 'L', Mode: 'Dark', State: 'Rest' },
    render: ({ Type, Size = 'L', Mode, State }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W[Size] }}>
                {Type === 'Client' ? (
                    <Stat
                        Type="Client"
                        Size={Size}
                        {...CLIENT}
                        className={
                            State === 'Hover' ? 'pseudo-hover' : undefined
                        }
                    />
                ) : (
                    <Stat Size={Size} {...ABOUT[1]} />
                )}
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Client: Story = { args: { Type: 'Client' } }

/** A row of four (About Us), counting up when scrolled into view. */
export const Row: Story = {
    parameters: { layout: 'padded', controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode}>
            <StatRow>
                {ABOUT.map((s) => (
                    <Stat key={s.Value} {...s} countUp />
                ))}
            </StatRow>
        </ModeFrame>
    ),
}

/** Every Figma variant: Type × Size × Mode. */
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
                        {(['Client', 'Plain'] as const).flatMap((t) =>
                            (['L', 'M'] as const).map((z) => (
                                <div key={t + z} style={{ width: W[z] }}>
                                    {t === 'Client' ? (
                                        <Stat
                                            Type="Client"
                                            Size={z}
                                            {...CLIENT}
                                        />
                                    ) : (
                                        <Stat Size={z} {...ABOUT[0]} />
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}

/** Client stat: State=Rest and State=Hover (whole card is the link). */
export const Hover: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ width: 640 }}>
            <StatRow>
                <Stat Type="Client" {...CLIENT} />
                <Stat Type="Client" {...CLIENT} className="pseudo-hover" />
            </StatRow>
        </div>
    ),
}
