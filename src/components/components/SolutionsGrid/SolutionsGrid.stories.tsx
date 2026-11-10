import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SolutionsGrid } from './SolutionsGrid'

/* Content blocks/Solutions grid — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24984-21277 (Figma copy; image placeholders) */

const ITEMS = [
    {
        title: 'Cloud-Native AI Infrastructure',
        body: 'Scalable cloud architecture for AI workloads.',
    },
    {
        title: 'MLOps and Model Lifecycle Management',
        body: 'End-to-end ML pipeline management.',
    },
    {
        title: 'GPU-Accelerated Compute Infrastructure',
        body: 'High-performance computing for model training.',
    },
    {
        title: 'Real-time AI Inference at Scale',
        body: 'Low-latency inference for production workloads.',
    },
    {
        title: 'AI Model Monitoring and Observability',
        body: 'Monitoring of model performance and drift.',
    },
    {
        title: 'Hybrid and Multi-cloud AI Infrastructure',
        body: 'Flexible deployment across clouds and on-premise.',
    },
]

const meta: Meta<typeof SolutionsGrid> = {
    title: 'Content blocks/Solutions grid',
    component: SolutionsGrid,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Three-column grid of image cards with a title and one-line description. Motion: block reveal staggered.',
            },
        },
    },
    args: { title: 'Solutions', items: ITEMS },
    render: (args) => (
        <div style={{ maxWidth: 1440 }}>
            <SolutionsGrid {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<typeof SolutionsGrid>

export const Default: Story = {}

/** The Figma component has one variant; desktop and a narrow frame. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: 'var(--spacing-lg)',
                alignItems: 'start',
            }}
        >
            <div style={{ width: 1440, flexShrink: 0 }}>
                <SolutionsGrid items={ITEMS} />
            </div>
            <div style={{ width: 390, flexShrink: 0 }}>
                <SolutionsGrid items={ITEMS.slice(0, 3)} />
            </div>
        </div>
    ),
}
