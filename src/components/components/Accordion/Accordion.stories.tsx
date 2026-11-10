import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Accordion, type AccordionProps } from './Accordion'

/*
  Accordion — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18830-12898
  Content: the ACI Weave FAQ from the Figma templates (the component default is placeholder text).
*/

type State = 'Rest' | 'Hover' | 'Focused'
type Args = AccordionProps & { State: State }
const PSEUDO: Record<State, string> = {
    Rest: '',
    Hover: 'pseudo-hover',
    Focused: 'pseudo-focus-visible',
}
const FAQ = [
    [
        'What is ACI Weave?',
        'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models.',
    ],
    [
        'What does ACI stand for?',
        'ACI stands for Artificial Corporate Intelligence. ACI Weave is the platform that orchestrates agents between your data layer, such as ERP, CRM, PIM, a data lake and file shares, and the places where work happens.',
    ],
    [
        'When does a person approve the work of an agent?',
        'At the steps you choose. For each workflow you decide which steps need approval from an employee. At Kingspan Insulated Panels, no order reaches SAP until a person has approved it.',
    ],
]

const meta: Meta<Args> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Collapsible section with a caret or plus/minus indicator. Motion: height (duration/slow, ease/emphasized), icon rotation (duration/base). Native details/summary.',
            },
        },
    },
    argTypes: {
        Style: { control: 'inline-radio', options: ['Caret', 'Plus-Minus'] },
        Expanded: { control: 'inline-radio', options: ['No', 'Yes'] },
        State: {
            control: 'inline-radio',
            options: ['Rest', 'Hover', 'Focused'],
        },
        children: { control: false },
    },
    args: { Style: 'Caret', Expanded: 'No', State: 'Rest', label: FAQ[0][0] },
    render: ({ State, ...args }) => (
        <div style={{ maxWidth: 600 }}>
            <Accordion
                key={`${args.Expanded}-${args.Style}`}
                {...args}
                summaryClassName={PSEUDO[State]}
            >
                <p>{FAQ[0][1]}</p>
            </Accordion>
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Caret: Story = { args: { Style: 'Caret' } }
export const PlusMinus: Story = { args: { Style: 'Plus-Minus' } }
export const FaqList: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ maxWidth: 600 }}>
            {FAQ.map(([q, a]) => (
                <Accordion key={q} label={q} name="faq">
                    <p>{a}</p>
                </Accordion>
            ))}
        </div>
    ),
}

/** Every Figma variant: Style × Expanded × State (12). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 600px))',
                gap: 'var(--spacing-xl)',
            }}
        >
            {(['Caret', 'Plus-Minus'] as const).map((st) => (
                <div
                    key={st}
                    style={{
                        display: 'grid',
                        gap: 'var(--spacing-lg)',
                        alignContent: 'start',
                    }}
                >
                    {(['No', 'Yes'] as const).flatMap((ex) =>
                        (['Rest', 'Hover', 'Focused'] as State[]).map((s) => (
                            <div key={ex + s}>
                                <p
                                    className="yw-body-xs-reg"
                                    style={{
                                        color: 'var(--color-shared-content-secondary)',
                                        marginBottom: 'var(--spacing-2xs)',
                                    }}
                                >{`Style=${st}, Expanded=${ex}, State=${s}`}</p>
                                <Accordion
                                    Style={st}
                                    Expanded={ex}
                                    label={FAQ[0][0]}
                                    summaryClassName={PSEUDO[s]}
                                >
                                    <p>{FAQ[0][1]}</p>
                                </Accordion>
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>
    ),
}
