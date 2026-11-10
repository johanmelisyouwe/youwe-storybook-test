import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
    ActionList,
    ActionListItem,
    type ActionListItemProps,
} from './ActionListItem'

/*
  Action List Item — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18788-17600
  Figma only has default copy and no template uses this component yet,
  so the stories use stand-in copy from the Youwe industries (see SYNC-REPORT.md).
*/

type State = 'Rest' | 'Hover' | 'Pressed' | 'Focused'
const PSEUDO: Record<State, string> = {
    Rest: '',
    Hover: 'pseudo-hover',
    Pressed: 'pseudo-active',
    Focused: 'pseudo-focus-visible',
}
type Args = ActionListItemProps & { State: State }

const ROWS = [
    {
        label: 'Manufacturing',
        'Supporting Text': 'Cases from B2B manufacturers and distributors.',
        counter: '24',
    },
    {
        label: 'Retail',
        'Supporting Text': 'Cases from retail and consumer brands.',
        counter: '18',
    },
    {
        label: 'Wholesale',
        'Supporting Text': 'Cases from wholesale and trade.',
        counter: '12',
    },
]

const meta: Meta<Args> = {
    title: 'Components/Action list',
    component: ActionListItem,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Single row in an action list, for navigation or selectable actions. With a Checkbox, Toggle or Radio button element the whole row is the control label.',
            },
        },
    },
    argTypes: {
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover', 'Pressed', 'Focused'],
        },
        leading: {
            control: 'select',
            options: [undefined, 'Icon', 'Checkbox', 'Toggle', 'Radio button'],
        },
        trailing: {
            control: 'select',
            options: [undefined, 'Icon', 'Checkbox', 'Toggle', 'Radio button'],
        },
    },
    args: {
        State: 'Rest',
        ...ROWS[0],
        leading: 'Icon',
        trailing: 'Icon',
        'Show divider': true,
        href: '#',
    },
    render: ({ State, ...args }) => (
        <div style={{ width: 360 }}>
            <ActionList>
                <ActionListItem {...args} className={PSEUDO[State]} />
            </ActionList>
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}

/** A filter list: checkbox rows with result counters. */
export const CheckboxList: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ width: 360 }}>
            <ActionList label="Industry">
                {ROWS.map((r) => (
                    <ActionListItem
                        key={r.label}
                        {...r}
                        leading="Checkbox"
                        trailing={undefined}
                    />
                ))}
            </ActionList>
        </div>
    ),
}

/** Every Figma variant: State (4), plus each leading and trailing element. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 360px)',
                gap: 'var(--spacing-lg)',
            }}
        >
            <ActionList>
                {(['Rest', 'Hover', 'Pressed', 'Focused'] as State[]).map(
                    (s) => (
                        <ActionListItem
                            key={s}
                            {...ROWS[0]}
                            href="#"
                            className={PSEUDO[s]}
                        />
                    )
                )}
            </ActionList>
            <ActionList>
                {(['Checkbox', 'Toggle', 'Radio button'] as const).map((e) => (
                    <ActionListItem
                        key={e}
                        {...ROWS[1]}
                        leading={e}
                        trailing="Icon"
                        name="industry"
                    />
                ))}
                {(['Checkbox', 'Toggle', 'Radio button'] as const).map((e) => (
                    <ActionListItem
                        key={`t-${e}`}
                        {...ROWS[2]}
                        leading="Icon"
                        trailing={e}
                        counter={undefined}
                        name="industry-2"
                    />
                ))}
            </ActionList>
        </div>
    ),
}
