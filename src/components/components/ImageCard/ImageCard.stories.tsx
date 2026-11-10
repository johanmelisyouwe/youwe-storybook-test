import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ImageCard } from './ImageCard'
import { ModeFrame, type Mode } from '../../shared/ModeFrame'

/* Image Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26904-35 (image placeholder as in Figma) */

type Args = { Mode: Mode; Caption?: string }
const meta: Meta<Args> = {
    title: 'Components/Image Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Image-only tile for card grids with an optional caption. When linked, the image zooms to 1.04 on hover (duration/zoom, ease/emphasized).',
            },
        },
    },
    argTypes: { Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
    args: { Mode: 'Dark', Caption: 'Higher Ground at SnowWorld Zoetermeer' },
    render: ({ Mode, Caption }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: 416 }}>
                <ImageCard Caption={Caption} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}

/** Every Figma variant (Mode), with and without caption. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        <div style={{ width: 416 }}>
                            <ImageCard />
                        </div>
                        <div style={{ width: 416 }}>
                            <ImageCard Caption="Higher Ground at SnowWorld Zoetermeer" />
                        </div>
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
