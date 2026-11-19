import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RegistrationForm, type RegistrationFormProps } from './'

/*
  Registration form — code component (not in Figma), 19 November. Event sign-up built from the form
  components. Submit in the Default story to see the sending and confirmation states; the Error story
  fails on submit.
*/

const meta: Meta<RegistrationFormProps> = {
    title: 'Components/Registration form',
    component: RegistrationForm,
    parameters: { layout: 'padded' },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        defaultState: {
            control: 'inline-radio',
            options: ['Form', 'Registered'],
        },
    },
    args: {
        Device: 'Desktop',
        defaultState: 'Form',
        choice: {
            name: 'slopes',
            label: 'Will you join on the snow?',
            options: [
                'Yes, I will join on the slopes',
                'No, I will join the drinks and discussion off the slope',
            ],
        },
        question: {
            name: 'dietary',
            label: 'Dietary requirements',
            placeholder: 'For the seated dinner',
        },
        onSubmit: () => new Promise((r) => setTimeout(r, 800)),
    },
    render: (args) => (
        <div style={{ maxWidth: args.Device === 'Mobile' ? 343 : 740 }}>
            <RegistrationForm key={args.defaultState} {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<RegistrationFormProps>

export const Default: Story = {}
export const Registered: Story = { args: { defaultState: 'Registered' } }
export const Failed: Story = {
    name: 'Error',
    args: {
        onSubmit: () =>
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('503')), 600)
            ),
    },
}
export const Mobile: Story = { args: { Device: 'Mobile' } }
