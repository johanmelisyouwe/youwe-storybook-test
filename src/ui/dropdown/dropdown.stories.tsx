import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Dropdown, type DropdownProps } from './'
import { FIELD_STATES, fieldState, type FieldState } from '../field/field-story'

/*
  Dropdown/Static Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18505-20713
  Dropdown/Floating Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18505-21072
  Content from the Figma contact form: "Country", placeholder "Select your country"; the options are
  the countries of the Youwe offices (Figma Offices block). Error copy is a stand-in (SYNC-REPORT.md).
  Dropdown/Quantity is a web-shop component and is not built (see SYNC-REPORT.md).
*/

type Args = DropdownProps & { State: FieldState }
const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Indonesia',
    'Ukraine',
].map((c) => ({ value: c, label: c }))
const ERROR_COPY = 'Select your country.'

const meta: Meta<Args> = {
    title: 'Components/Input/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Select input with a static or floating label and the Figma options panel. Keyboard: Enter/Space/Arrow opens, Arrow keys move, Enter selects, Escape closes.',
            },
        },
    },
    argTypes: {
        Labels: { control: 'inline-radio', options: ['Static', 'Floating'] },
        State: { control: 'select', options: FIELD_STATES },
        options: { control: false },
        status: { control: false },
        controlClassName: { control: false },
    },
    args: {
        Labels: 'Static',
        State: 'Rest',
        Label: 'Country',
        Required: true,
        Placeholder: true,
        placeholderText: 'Select your country',
        Hint: false,
        'Hint text': ERROR_COPY,
        options: COUNTRIES,
    },
    render: ({ State, ...args }) => {
        const s = fieldState(State)
        return (
            <div style={{ width: 240, minHeight: 320 }}>
                <Dropdown
                    key={State + args.Labels}
                    {...args}
                    defaultValue={s.filled ? 'The Netherlands' : undefined}
                    defaultOpen={State === 'Active'}
                    status={s.status}
                    disabled={s.disabled}
                    controlClassName={s.controlClassName}
                    Hint={State === 'Error' || args.Hint}
                />
            </div>
        )
    },
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Static: Story = { args: { Labels: 'Static' } }
export const Floating: Story = {
    args: { Labels: 'Floating', Placeholder: false },
}
export const Open: Story = { args: { State: 'Active' } }

/** Every Figma variant: Static Labels (State, 9) and Floating Labels (State × Placeholder 'No' / 'Yes', 13). Active = open. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => {
        const sets: ['Static' | 'Floating', boolean, readonly FieldState[]][] =
            [
                ['Static', true, FIELD_STATES.filter((s) => s !== 'Active')],
                ['Floating', false, FIELD_STATES.filter((s) => s !== 'Active')],
                ['Floating', true, ['Rest', 'Hover', 'Focused']],
            ]
        return (
            <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
                {sets.map(([labels, ph, states]) => (
                    <div
                        key={labels + ph}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 240px)',
                            gap: 'var(--spacing-lg)',
                        }}
                    >
                        {states.map((st) => {
                            const s = fieldState(st)
                            return (
                                <div key={st}>
                                    <p
                                        className="yw-body-xs-reg"
                                        style={{
                                            color: 'var(--color-shared-content-secondary)',
                                            marginBottom: 'var(--spacing-2xs)',
                                        }}
                                    >{`${labels}: ${st}${labels === 'Floating' ? `, Placeholder=${ph ? 'Yes' : 'No'}` : ''}`}</p>
                                    <Dropdown
                                        Labels={labels}
                                        Label="Country"
                                        Required
                                        Placeholder={ph}
                                        placeholderText="Select your country"
                                        options={COUNTRIES}
                                        Hint={st === 'Error'}
                                        {...{ 'Hint text': ERROR_COPY }}
                                        defaultValue={
                                            s.filled
                                                ? 'The Netherlands'
                                                : undefined
                                        }
                                        status={s.status}
                                        disabled={s.disabled}
                                        controlClassName={s.controlClassName}
                                    />
                                </div>
                            )
                        })}
                    </div>
                ))}
                <div style={{ minHeight: 320 }}>
                    <p
                        className="yw-body-xs-reg"
                        style={{
                            color: 'var(--color-shared-content-secondary)',
                            marginBottom: 'var(--spacing-2xs)',
                        }}
                    >
                        Static: Active (open)
                    </p>
                    <div style={{ width: 240 }}>
                        <Dropdown
                            Label="Country"
                            Required
                            placeholderText="Select your country"
                            options={COUNTRIES}
                            defaultOpen
                            controlClassName="pseudo-focus-within"
                        />
                    </div>
                </div>
            </div>
        )
    },
}
