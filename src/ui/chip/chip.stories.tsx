import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Chip } from './'

/* Chip — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24519-4237 (labels are the Figma defaults) */

const meta: Meta<typeof Chip> = {
    title: 'Components/Chips',
    component: Chip,
    parameters: { layout: 'centered' },
    argTypes: {
        Variant: {
            control: 'inline-radio',
            options: ['Positive', 'Caution', 'Negative', 'Info'],
        },
        Size: { control: 'inline-radio', options: ['M', 'S'] },
    },
    args: { Variant: 'Positive', Size: 'M', label: 'Positive' },
}
export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}
export const Positive: Story = {
    args: { Variant: 'Positive', label: 'Positive' },
}
export const Caution: Story = { args: { Variant: 'Caution', label: 'Caution' } }
export const Negative: Story = {
    args: { Variant: 'Negative', label: 'Negative' },
}
export const Info: Story = { args: { Variant: 'Info', label: 'Info' } }

/** Every Figma variant: Variant × Size. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: 'var(--spacing-sm)',
                alignItems: 'center',
            }}
        >
            {(['M', 'S'] as const).flatMap((z) =>
                (['Positive', 'Caution', 'Negative', 'Info'] as const).map(
                    (v) => <Chip key={v + z} Variant={v} Size={z} label={v} />
                )
            )}
        </div>
    ),
}
