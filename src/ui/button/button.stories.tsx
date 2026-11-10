import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, type ButtonProps } from './'
import { iconNames } from '../../shared/icons/icon'

/*
  Button/Basic — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-4476
  State is real CSS (:hover, :active, :focus-visible, :disabled). The State control
  previews it through storybook-addon-pseudo-states (class on the element itself); Disabled sets the disabled attribute.
  The label comes from the Figma templates ("Get in touch"); Figma's component default is "Default".
*/

type State = 'Rest' | 'Hover' | 'Pressed' | 'Focused' | 'Disabled'
type Args = ButtonProps & { State: State }

const PSEUDO: Record<State, string> = {
    Rest: '',
    Hover: 'pseudo-hover',
    Pressed: 'pseudo-active',
    Focused: 'pseudo-focus-visible',
    Disabled: '',
}

const render = ({ State, ...args }: Args) => (
    <div style={{ display: 'inline-block', padding: 'var(--spacing-xs)' }}>
        <Button
            {...args}
            className={PSEUDO[State]}
            disabled={State === 'Disabled' || args.disabled}
        />
    </div>
)

const meta: Meta<Args> = {
    title: 'Components/Buttons/Basic',
    component: Button,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-4476',
        },
        docs: {
            description: {
                component:
                    'Primary button with three visual variants, four sizes and optional leading, trailing or icon-only configuration. Motion: hover changes background and colour (duration/fast, ease/standard); the trailing icon nudges forward (duration/base, ease/emphasized). No scaling. Focus ring: shared/border/system/focus.',
            },
        },
    },
    argTypes: {
        Variant: {
            control: 'inline-radio',
            options: ['Primary', 'Outline', 'Solid'],
        },
        Icon: {
            control: 'inline-radio',
            options: ['Off', 'Leading', 'Trailing', 'Only'],
        },
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled'],
        },
        Size: { control: 'inline-radio', options: ['XS', 'S', 'M', 'L'] },
        iconName: { control: 'select', options: iconNames },
        icon: { control: false },
        onClick: { action: 'click' },
    },
    args: {
        Variant: 'Primary',
        Icon: 'Off',
        State: 'Rest',
        Size: 'L',
        label: 'Get in touch',
        iconName: 'shopping-basket',
    },
    render,
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Primary: Story = { args: { Variant: 'Primary' } }
export const Outline: Story = { args: { Variant: 'Outline' } }
export const Solid: Story = { args: { Variant: 'Solid' } }

const variants = ['Primary', 'Outline', 'Solid'] as const
const icons = ['Off', 'Leading', 'Trailing', 'Only'] as const
const sizes = ['L', 'M', 'S', 'XS'] as const
const states: State[] = ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled']

/** Every Figma variant: Variant × Icon × Size (rows) × State (columns). 240 combinations, all exist in Figma. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            {variants.map((v) => (
                <section key={v}>
                    <h3
                        className="yw-heading-sm"
                        style={{ marginBottom: 'var(--spacing-sm)' }}
                    >
                        {v}
                    </h3>
                    <table
                        style={{
                            borderSpacing:
                                'var(--spacing-sm) var(--spacing-2xs)',
                        }}
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
                            {icons.flatMap((i) =>
                                sizes.map((z) => (
                                    <tr key={`${i}-${z}`}>
                                        <td
                                            className="yw-body-xs-reg"
                                            style={{
                                                color: 'var(--color-shared-content-secondary)',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >{`Icon=${i}, Size=${z}`}</td>
                                        {states.map((s) => (
                                            <td
                                                key={s}
                                                style={{
                                                    padding:
                                                        'var(--spacing-3xs)',
                                                }}
                                            >
                                                <Button
                                                    Variant={v}
                                                    Icon={i}
                                                    Size={z}
                                                    label="Get in touch"
                                                    className={PSEUDO[s]}
                                                    disabled={s === 'Disabled'}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </section>
            ))}
        </div>
    ),
}
