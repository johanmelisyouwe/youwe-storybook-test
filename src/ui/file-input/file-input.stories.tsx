import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FileInput, type FileInputProps } from './'

/* File Input — code component (not in Figma as a component), 19 November. The Contact form attachment. */

const meta: Meta<FileInputProps> = {
    title: 'Components/File Input',
    component: FileInput,
    parameters: { layout: 'padded' },
    args: {
        Label: 'Attachment (optional)',
        hint: 'PDF or DOCX, max 10 MB',
        accept: '.pdf,.docx',
    },
    render: (args) => (
        <div style={{ maxWidth: 608 }}>
            <FileInput {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<FileInputProps>

export const Default: Story = {}
export const Required: Story = { args: { Label: 'Attachment', Required: true } }
