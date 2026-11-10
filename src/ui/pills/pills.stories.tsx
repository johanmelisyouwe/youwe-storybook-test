import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Pills, type PillsProps } from './'
import { iconNames } from '../../shared/icons/icon'

/*
  Pills — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6285-1970
  Labels come from the Figma Filter bar (Work page). State is real CSS, previewed
  through storybook-addon-pseudo-states.
*/

type State = 'Rest' | 'Hover' | 'Pressed' | 'Focused' | 'Disabled'
type Args = PillsProps & { State: State }
const PSEUDO: Record<State, string> = {
    Rest: '',
    Hover: 'pseudo-hover',
    Pressed: 'pseudo-active',
    Focused: 'pseudo-focus-visible',
    Disabled: '',
}

const meta: Meta<Args> = {
    title: 'Components/Pill',
    component: Pills,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Small selectable tag used for filter chips or option toggles, with optional icon placement. Motion: hover/active change background and colour (duration/fast, ease/standard).',
            },
        },
    },
    argTypes: {
        Variant: { control: 'inline-radio', options: ['Primary', 'Neutral'] },
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled'],
        },
        Icon: {
            control: 'inline-radio',
            options: ['Leading', 'Trailing', 'Off'],
        },
        Size: { control: 'inline-radio', options: ['M', 'S'] },
        iconName: { control: 'select', options: iconNames },
        onClick: { action: 'click' },
    },
    args: {
        Variant: 'Primary',
        State: 'Rest',
        Icon: 'Off',
        Size: 'M',
        label: 'eCommerce',
    },
    render: ({ State, ...args }) => (
        <div style={{ display: 'inline-block', padding: 'var(--spacing-xs)' }}>
            <Pills
                {...args}
                className={PSEUDO[State]}
                disabled={State === 'Disabled' || args.disabled}
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Primary: Story = { args: { Variant: 'Primary' } }
export const Neutral: Story = { args: { Variant: 'Neutral' } }

/** As used in the Figma Filter bar: the selected pill is Primary, the rest Neutral. */
export const FilterRow: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            role="group"
            aria-label="Systems"
            style={{ display: 'flex', gap: 'var(--spacing-2xs)' }}
        >
            {[
                'All',
                'eCommerce',
                'Experience',
                'Artificial Intelligence',
                'Digital Marketing',
            ].map((l, i) => (
                <Pills
                    key={l}
                    label={l}
                    Variant={i === 0 ? 'Primary' : 'Neutral'}
                    pressed={i === 0}
                />
            ))}
        </div>
    ),
}

const states: State[] = ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled']

/** Every Figma variant: Variant × Icon × Size (rows) × State (columns). 60 combinations. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <table
            style={{ borderSpacing: 'var(--spacing-sm) var(--spacing-2xs)' }}
        >
            <thead>
                <tr>
                    <th />
                    {states.map((s) => (
                        <th
                            key={s}
                            className="yw-body-xs-med"
                            style={{
                                textAlign: 'left',
                                color: 'var(--color-shared-content-secondary)',
                            }}
                        >
                            {s}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {(['Primary', 'Neutral'] as const).flatMap((v) =>
                    (['Off', 'Leading', 'Trailing'] as const).flatMap((i) =>
                        (['M', 'S'] as const).map((z) => (
                            <tr key={`${v}-${i}-${z}`}>
                                <td
                                    className="yw-body-xs-reg"
                                    style={{
                                        color: 'var(--color-shared-content-secondary)',
                                        whiteSpace: 'nowrap',
                                    }}
                                >{`${v}, Icon=${i}, Size=${z}`}</td>
                                {states.map((s) => (
                                    <td
                                        key={s}
                                        style={{
                                            padding: 'var(--spacing-3xs)',
                                        }}
                                    >
                                        <Pills
                                            Variant={v}
                                            Icon={i}
                                            Size={z}
                                            label="eCommerce"
                                            className={PSEUDO[s]}
                                            disabled={s === 'Disabled'}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))
                    )
                )}
            </tbody>
        </table>
    ),
}
