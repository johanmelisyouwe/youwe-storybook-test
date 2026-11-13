import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
    AskButton,
    AskChip,
    AskLabel,
    AskOrb,
    AskSnippet,
    AskYouwe,
    type AskYouweProps,
} from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Ask Youwe — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27019-3067
  Ask Youwe/Snippet — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26692-106
  Questions, answer, source and snippets are the Figma copy. The answer is static (no AI service connected).
*/

const ACTIVE: Partial<AskYouweProps> = {
    Question: 'Which service fits my problem?',
    Answer: 'It depends on where it hurts. Disconnected platforms point to Digital Infrastructure, slow manual processes to Operational Optimization, and unreliable product or customer data to Data and Integration.',
    Source: 'Based on Services › Digital Infrastructure',
    followUp: 'Which results did you get for clients?',
    cta: { label: 'Contact an expert', href: '#' },
}
const CONTEXT = 'What does "Build it" include?'
type State = NonNullable<AskYouweProps['State']>
type Args = { State: State; Device: 'Desktop' | 'Mobile'; Mode: Mode }
const W = { Desktop: 716, Mobile: 358 }

const meta: Meta<Args> = {
    title: 'Components/Ask Youwe',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Ask Youwe: Default (bar with breathing aura, ⌘K focuses it), Contextual (bar widens, page question chip fades in), Active (answer panel opens from the bar with a clip reveal; Esc closes). Snippets are in-page entry points.',
            },
        },
    },
    argTypes: {
        State: {
            control: 'inline-radio',
            options: ['Default', 'Contextual', 'Docked', 'Active'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { State: 'Default', Device: 'Desktop', Mode: 'Dark' },
    render: ({ State, Device, Mode }) => (
        <ModeFrame Mode={Mode} padding={48}>
            <div style={{ width: W[Device] }}>
                <AskYouwe
                    key={State}
                    State={State}
                    Device={Device}
                    context={CONTEXT}
                    {...ACTIVE}
                />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Contextual: Story = { args: { State: 'Contextual' } }
/** The sticky bar's look (AskDock): Contextual on frosted glass. */
export const Docked: Story = { args: { State: 'Docked' } }
export const Active: Story = { args: { State: 'Active' } }

/** Click the bar's suggestion, type and press Enter to open the panel; Esc or close goes back to the bar. */
export const Interactive: Story = {
    parameters: { controls: { include: ['Mode'] } },
    render: ({ Mode }) => {
        const [q, setQ] = useState<string | null>(null)
        return (
            <ModeFrame Mode={Mode} padding={48}>
                <div style={{ width: 716, minHeight: 480 }}>
                    {q ? (
                        <AskYouwe
                            State="Active"
                            {...ACTIVE}
                            Question={q}
                            onClose={() => setQ(null)}
                            onAsk={setQ}
                        />
                    ) : (
                        <AskYouwe
                            State="Contextual"
                            context={CONTEXT}
                            onAsk={setQ}
                        />
                    )}
                </div>
            </ModeFrame>
        )
    },
}

const SNIPPET_TITLE = {
    Question: 'How did Kingspan connect its systems with AI agents?',
    Nudge: 'Scaling to new countries? See how Quooker expanded to 17.',
    Case: 'Scaling smart: Quooker’s expansion to 17 countries',
} as const

/** Ask Youwe/Snippet with its Figma Type axis as a control. */
export const Snippet: StoryObj<{
    Type: keyof typeof SNIPPET_TITLE
    Device: 'Desktop' | 'Mobile'
    Mode: Mode
}> = {
    argTypes: {
        Type: {
            control: 'inline-radio',
            options: ['Question', 'Nudge', 'Case'],
        },
    },
    args: { Type: 'Question' },
    render: ({ Type, Device, Mode }) => (
        <ModeFrame Mode={Mode} padding={48}>
            <div style={{ width: Device === 'Mobile' ? 358 : 600 }}>
                <AskSnippet
                    Device={Device}
                    Type={Type}
                    Title={SNIPPET_TITLE[Type]}
                    Meta="Case · Quooker"
                />
            </div>
        </ModeFrame>
    ),
}

/** Ask Youwe/Snippet: Question, Nudge and Case (Figma copy). */
export const Snippets: Story = {
    parameters: { controls: { include: ['Device', 'Mode'] } },
    render: ({ Device, Mode }) => (
        <ModeFrame Mode={Mode} padding={48}>
            <div
                style={{
                    display: 'grid',
                    gap: 'var(--spacing-lg)',
                    width: Device === 'Mobile' ? 358 : 600,
                }}
            >
                <AskSnippet
                    Device={Device}
                    Type="Question"
                    Title="How did Kingspan connect its systems with AI agents?"
                />
                <AskSnippet
                    Device={Device}
                    Type="Nudge"
                    Title="Scaling to new countries? See how Quooker expanded to 17."
                />
                <AskSnippet
                    Device={Device}
                    Type="Case"
                    Title="Scaling smart: Quooker’s expansion to 17 countries"
                    Meta="Case · Quooker"
                />
            </div>
        </ModeFrame>
    ),
}

/** The internal parts: Orb (S/M/L), Button (Label/Icon × Primary/Glass/Disabled), Chip (Suggestion/Context/Key), Label. */
export const Parts: Story = {
    parameters: { controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode} padding={32}>
            <div
                style={{
                    display: 'grid',
                    gap: 'var(--spacing-md)',
                    justifyItems: 'start',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-sm)',
                        alignItems: 'center',
                    }}
                >
                    <AskOrb Size="S" />
                    <AskOrb Size="M" />
                    <AskOrb Size="L" />
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-2xs)',
                        alignItems: 'center',
                    }}
                >
                    <AskButton Variant="Primary" label="Contact us" />
                    <AskButton label="Contact us" />
                    <AskButton
                        Type="Icon"
                        Variant="Glass"
                        icon="close"
                        label="Close"
                    />
                    <AskButton Type="Icon" Variant="Primary" label="Ask" />
                    <AskButton Type="Icon" Variant="Disabled" label="Send" />
                    <AskButton
                        Type="Icon"
                        Size="S"
                        icon="close"
                        label="Close"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-2xs)',
                        alignItems: 'center',
                    }}
                >
                    <AskChip label="Which service fits my problem?" />
                    <AskChip
                        Type="Context"
                        label="Platforms, processes and data, connected."
                    />
                    <AskChip Type="Key" label="⌘K" />
                </div>
                <AskLabel label="Ask Youwe · Up next for you" />
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Ask Youwe State × Device × Mode, and Snippet Type × Device × Mode. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m} padding={48}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-xl)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Desktop', 'Mobile'] as const).flatMap((d) =>
                            (
                                [
                                    'Default',
                                    'Contextual',
                                    'Docked',
                                    'Active',
                                ] as State[]
                            ).map((s) => (
                                <div key={d + s} style={{ width: W[d] }}>
                                    <AskYouwe
                                        State={s}
                                        Device={d}
                                        context={CONTEXT}
                                        {...ACTIVE}
                                    />
                                </div>
                            ))
                        )}
                        {(['Desktop', 'Mobile'] as const).flatMap((d) =>
                            (['Question', 'Nudge', 'Case'] as const).map(
                                (t) => (
                                    <div
                                        key={d + t}
                                        style={{
                                            width: d === 'Mobile' ? 358 : 600,
                                        }}
                                    >
                                        <AskSnippet
                                            Device={d}
                                            Type={t}
                                            Title={
                                                t === 'Question'
                                                    ? 'How did Kingspan connect its systems with AI agents?'
                                                    : t === 'Nudge'
                                                      ? 'Scaling to new countries? See how Quooker expanded to 17.'
                                                      : 'Scaling smart: Quooker’s expansion to 17 countries'
                                            }
                                            Meta="Case · Quooker"
                                        />
                                    </div>
                                )
                            )
                        )}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
