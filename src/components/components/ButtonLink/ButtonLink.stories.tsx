import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ButtonLink } from './ButtonLink'

/*
  Button/Link — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=20540-33000
  Label "Explore the system" as used on System Cards in the Figma templates (component default: "Label").
*/

const meta: Meta<typeof ButtonLink> = {
    title: 'Components/Buttons/Link',
    component: ButtonLink,
    parameters: { layout: 'centered' },
    argTypes: {
        Size: { control: 'inline-radio', options: ['lg', 'md', 'sm'] },
        onClick: { action: 'click' },
    },
    args: { Size: 'md', label: 'Explore the system', href: '#' },
}
export default meta
type Story = StoryObj<typeof ButtonLink>

export const Default: Story = {}
export const Lg: Story = { args: { Size: 'lg' } }
export const Md: Story = { args: { Size: 'md' } }
export const Sm: Story = { args: { Size: 'sm' } }

/** Every Figma variant (Size). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gap: 'var(--spacing-lg)',
                justifyItems: 'start',
            }}
        >
            {(['lg', 'md', 'sm'] as const).map((z) => (
                <ButtonLink
                    key={z}
                    Size={z}
                    label="Explore the system"
                    href="#"
                />
            ))}
        </div>
    ),
}
