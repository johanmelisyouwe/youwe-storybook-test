import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CaseIntro, type CaseIntroProps } from './CaseIntro'
import { CASE_INTRO } from '../TextColumn/longform.copy'

/* Content blocks/Case intro — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-571 (Figma copy) */

type Args = Pick<CaseIntroProps, 'Meta position' | 'Device'>
const W = { Desktop: '100%', Mobile: 360 }

const meta: Meta<Args> = {
    title: 'Content blocks/Case intro',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Case page opener: meta list (Platforms, Role, Solution) beside a lead and body. Motion: block reveal.',
            },
        },
    },
    argTypes: {
        'Meta position': {
            control: 'inline-radio',
            options: ['Left', 'Right'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: { 'Meta position': 'Left', Device: 'Desktop' },
    render: (args) => (
        <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}>
            <CaseIntro {...CASE_INTRO} {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Second: Story = {
    name: 'Right',
    args: { 'Meta position': 'Right' },
}

/** Every Figma variant: Device × Meta position. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Left', 'Right'] as const).map((v) => (
                <div key={v} style={{ maxWidth: 1440 }}>
                    <CaseIntro {...CASE_INTRO} {...{ 'Meta position': v }} />
                </div>
            ))}
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'start',
                }}
            >
                {(['Left', 'Right'] as const).map((v) => (
                    <div key={v} style={{ width: 360 }}>
                        <CaseIntro
                            {...CASE_INTRO}
                            {...{ 'Meta position': v }}
                        />
                    </div>
                ))}
            </div>
        </div>
    ),
}
