import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconTooltip, Tooltip, type IconTooltipProps } from './Tooltip'

/*
  Tooltip — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=14683-4523
  Icon tooltip — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-7455
  M tooltip copy from the Figma Testimonial / ACI Weave content; S uses the Figma default value "9,999".
*/

type State = 'Rest' | 'Active' | 'Focused'
type Args = IconTooltipProps & { State: State }
const TEXT =
    'Agents only use data sources that you have approved. Youwe is ISO 27001 certified.'

const meta: Meta<Args> = {
    title: 'Components/Tooltip',
    component: IconTooltip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Contextual information on hover or keyboard focus. Motion: opacity + small rise (duration/fast, ease/standard).',
            },
        },
    },
    argTypes: {
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Active', 'Focused'],
        },
        Size: { control: 'inline-radio', options: ['M', 'S'] },
    },
    args: { State: 'Rest', Size: 'M', text: TEXT },
    render: ({ State, ...args }) => (
        <div style={{ paddingTop: 160 }}>
            <IconTooltip
                {...args}
                className={State === 'Active' ? 'pseudo-hover' : ''}
                triggerClassName={
                    State === 'Focused' ? 'pseudo-focus-visible' : ''
                }
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Active: Story = { args: { State: 'Active' } }

/** Every Figma variant: Tooltip (Size M / S) and Icon tooltip (State × Size). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-2xl)' }}>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'end',
                }}
            >
                <Tooltip Size="M" text={TEXT} />
                <Tooltip Size="S" text="9,999" />
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 240px)',
                    rowGap: 160,
                    paddingTop: 140,
                }}
            >
                {(['M', 'S'] as const).flatMap((z) =>
                    (['Rest', 'Active', 'Focused'] as State[]).map((s) => (
                        <div
                            key={z + s}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <IconTooltip
                                Size={z}
                                text={TEXT}
                                className={s === 'Active' ? 'pseudo-hover' : ''}
                                triggerClassName={
                                    s === 'Focused'
                                        ? 'pseudo-focus-visible'
                                        : ''
                                }
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    ),
}
