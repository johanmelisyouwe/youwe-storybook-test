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

/** Whitepaper download: phone field, privacy notice instead of the opt-in, own button and confirmation text */
export const Download: Story = {
    args: {
        choice: undefined,
        question: undefined,
        phone: true,
        optIn: false,
        notice: (
            <p>
                Youwe needs the contact information you provide to us to contact
                you about our products and services. You may unsubscribe from
                these communications at any time. For information on how to
                unsubscribe, as well as our privacy practices and commitment to
                protecting your privacy, please review our{' '}
                <a href="#">Privacy Policy</a>.
            </p>
        ),
        labels: {
            submit: 'Download the whitepaper',
            successTitle: 'Thank you, {name}',
            successMessage:
                'The whitepaper arrives in your inbox straight away.',
        },
    },
}
