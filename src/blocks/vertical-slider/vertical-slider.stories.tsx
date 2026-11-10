import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
    IndexItem,
    Slide,
    VerticalSlider,
    type SlideData,
    type VerticalSliderProps,
} from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Vertical slider — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26715-410
  Kicker, tagline, index labels and the five slide types are the Figma copy.
*/

const SERVICE: SlideData = {
    Type: 'Service',
    eyebrow: '01 · Digital Infrastructure',
    Title: 'Build it.',
    body: 'Commerce, PIM, portals and experience platforms, connected to your ERP and built to carry more customers, products and markets.',
    pills: [
        'B2B Enterprise Commerce',
        'D2C Commerce',
        'PIM/MDM',
        'Digital Experience (DXP)',
        'Customer & Partner Portals',
        'Cloud Architecture',
    ],
    button: { label: 'Explore Digital Infrastructure', href: '#' },
}
const QUOTE: SlideData = {
    Type: 'Quote',
    quote: '“We turned the vision into a platform. Now we’re adding new customers and suppliers.”',
    name: 'Frank Daamen',
    role: 'Digital Director Bunzl & Founder of BunzlOne',
    button: { label: 'Read the case', href: '#' },
}
const STAT: SlideData = {
    Type: 'Stat',
    eyebrow: 'BunzlOne · B2B Commerce',
    value: '+43%',
    statement:
        'more marketable catalog after moving product data to one PIM, live in 14 weeks.',
    button: { label: 'Read the case', href: '#' },
}
const CASE: SlideData = {
    Type: 'Case',
    eyebrow: 'Case · G-Star RAW',
    Title: 'How a Design System strengthened G-Star’s brand consistency',
    body: 'One shared library for every market and channel, so new campaigns ship without rebuilding the basics.',
    button: { label: 'Read the case', href: '#' },
}
const CONTENT: SlideData = {
    Type: 'Content',
    eyebrow: '02 · How we work',
    Title: 'Start small. Prove it. Then scale.',
    body: 'We begin with one process that hurts, put it live in weeks, and use the result to plan the next step.',
    list: [
        'A two-week discovery with your own data',
        'A working first release, not a slide deck',
        'A roadmap you can fund step by step',
    ],
}

const ITEMS: VerticalSliderProps['items'] = [
    { label: 'Digital Infrastructure', slide: SERVICE },
    { label: 'Operational Optimization & Intelligence', slide: STAT },
    { label: 'Foundation for Data & Integrations', slide: QUOTE },
]
const BASE = {
    Kicker: 'What we do',
    Tagline: 'Three kinds of work, built to fit together.',
    items: ITEMS,
}

type Args = Pick<VerticalSliderProps, 'Index' | 'Device' | 'Show progress'> & {
    Mode: Mode
}

const meta: Meta<Args> = {
    title: 'Content blocks/Vertical slider',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Full-viewport section that pins while you scroll and switches slide per scroll step (Pinned story). Index items are buttons; hover and focus also switch slides. Slide text rolls in per line (duration/zoom); case media opens with a circular wipe and settles from 1.15 to 1. Mobile: stacked, no pinning.',
            },
        },
    },
    argTypes: {
        Index: { control: 'inline-radio', options: ['Right', 'Left'] },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: {
        Index: 'Right',
        Device: 'Desktop',
        Mode: 'Dark',
        'Show progress': false,
    },
    render: ({ Mode, Device, ...args }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div style={{ maxWidth: Device === 'Mobile' ? 360 : 1440 }}>
                <VerticalSlider {...BASE} {...args} Device={Device} />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const IndexLeft: Story = { args: { Index: 'Left' } }
export const Mobile: Story = {
    args: { Device: 'Mobile' },
    globals: { viewport: { value: 'mobile' } },
}

/** Scroll the canvas: the section pins and the active item follows scroll. */
export const Pinned: Story = {
    args: { 'Show progress': true },
    render: ({ Mode, ...args }) => (
        <ModeFrame Mode={Mode} padding={0}>
            <div
                style={{ height: 200, display: 'grid', placeItems: 'center' }}
                className="yw-body-md-reg"
            >
                Scroll down
            </div>
            <VerticalSlider {...BASE} {...args} Device="Desktop" pin />
            <div style={{ height: 400 }} />
        </ModeFrame>
    ),
}

/** The five slide types and the index item states (Active, Rest, Hover). */
export const Slides: Story = {
    parameters: { layout: 'padded', controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode} padding={40}>
            <div
                style={{
                    display: 'grid',
                    gap: 'var(--spacing-4xl)',
                    maxWidth: 760,
                }}
            >
                {[SERVICE, QUOTE, STAT, CASE, CONTENT].map((s) => (
                    <Slide key={s.Type} {...s} />
                ))}
                <div>
                    <IndexItem label="Digital Infrastructure" active />
                    <IndexItem label="Digital Infrastructure" />
                    <IndexItem
                        label="Digital Infrastructure"
                        className="pseudo-hover"
                    />
                </div>
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Index × Mode × Device. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) =>
                (['Right', 'Left'] as const).map((ix) => (
                    <ModeFrame key={m + ix} Mode={m} padding={0}>
                        <div style={{ display: 'flex', alignItems: 'start' }}>
                            <div style={{ width: 1440 }}>
                                <VerticalSlider {...BASE} Index={ix} />
                            </div>
                            <div style={{ width: 360 }}>
                                <VerticalSlider
                                    {...BASE}
                                    items={ITEMS.slice(0, 1)}
                                    Index={ix}
                                    Device="Mobile"
                                />
                            </div>
                        </div>
                    </ModeFrame>
                ))
            )}
        </div>
    ),
}
