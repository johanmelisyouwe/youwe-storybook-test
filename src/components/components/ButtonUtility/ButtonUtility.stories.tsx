import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ButtonUtility, type ButtonUtilityProps } from './ButtonUtility'

/* Button/Utility — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6464-5164 */

type State = 'Rest' | 'Hover' | 'Focused'
type Args = ButtonUtilityProps & { State: State }
const PSEUDO: Record<State, string> = {
    Rest: '',
    Hover: 'pseudo-hover',
    Focused: 'pseudo-focus-visible',
}

const meta: Meta<Args> = {
    title: 'Components/Buttons/Utility',
    component: ButtonUtility,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Compact secondary button for utility or contextual actions (close), where space is constrained.',
            },
        },
    },
    argTypes: {
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover', 'Focused'],
        },
        Size: { control: 'inline-radio', options: ['M', 'S'] },
        onClick: { action: 'click' },
    },
    args: { State: 'Rest', Size: 'M', label: 'Close' },
    render: ({ State, ...args }) => (
        <ButtonUtility {...args} className={PSEUDO[State]} />
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const M: Story = { args: { Size: 'M' } }
export const S: Story = { args: { Size: 'S' } }

/** Every Figma variant: Size × State. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                gap: 'var(--spacing-lg)',
                alignItems: 'center',
            }}
        >
            {(['M', 'S'] as const).flatMap((z) =>
                (['Rest', 'Hover', 'Focused'] as State[]).map((s) => (
                    <ButtonUtility
                        key={z + s}
                        Size={z}
                        label="Close"
                        className={PSEUDO[s]}
                    />
                ))
            )}
        </div>
    ),
}
