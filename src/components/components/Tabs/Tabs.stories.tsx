import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Tab, TabGroup, type TabProps } from './Tabs'

/*
  Tab — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=15713-6093
  Tab group — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=15715-6340
  Figma's tab labels are "Label"; the stories use the three practice names from the Figma templates.
  The trailing action opens the _Dropdown/Options menu; the stories use it for overflow tabs
  (industries from the Figma Industries page).
*/
const MORE = ['Manufacturing', 'Wholesale', 'Retail & Consumer Goods'].map(
    (v) => ({ value: v, label: v })
)

type State = 'Active' | 'Rest' | 'Hover' | 'Focused' | 'Disabled'
type Args = TabProps & { State: State }
const PSEUDO: Record<State, string> = {
    Active: '',
    Rest: '',
    Hover: 'pseudo-hover',
    Focused: 'pseudo-focus-visible',
    Disabled: '',
}
const TABS = [
    'Digital Infrastructure',
    'Operational Optimization & Intelligence',
    'Foundation for Data & Integrations',
]

const meta: Meta<Args> = {
    title: 'Components/Tabs',
    component: Tab,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Tabs switch between views or sections. Motion: hover colour (duration/fast); the selected ink slides between tabs (duration/slow, ease/emphasized). Interaction: WAI-ARIA tabs, roving tabindex, Arrow/Home/End.',
            },
        },
    },
    argTypes: {
        State: {
            control: 'inline-radio',
            options: ['Active', 'Rest', 'Hover', 'Focused', 'Disabled'],
        },
    },
    args: { State: 'Rest', label: 'Digital Infrastructure' },
    render: ({ State, label }) => (
        <div role="tablist" aria-label="Example">
            <Tab
                label={label}
                selected={State === 'Active'}
                tabIndex={0}
                className={PSEUDO[State]}
                disabled={State === 'Disabled'}
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Active: Story = { args: { State: 'Active' } }

/** Tab group (Figma State=Rest) with sliding ink, keyboard support and the trailing action. */
export const Group: StoryObj<typeof TabGroup> = {
    parameters: { controls: { disable: true } },
    render: () => (
        <TabGroup
            label="Practices"
            tabs={TABS}
            trailingOptions={MORE}
            panels={[
                <p
                    key="1"
                    className="yw-body-md-reg"
                    style={{ padding: 'var(--spacing-lg) 0' }}
                >
                    Commerce, PIM, portals and experience platforms, connected
                    to your ERP.
                </p>,
                <p
                    key="2"
                    className="yw-body-md-reg"
                    style={{ padding: 'var(--spacing-lg) 0' }}
                >
                    Complex workflows turned into intelligent, efficient
                    systems: less manual work, less risk.
                </p>,
                <p
                    key="3"
                    className="yw-body-md-reg"
                    style={{ padding: 'var(--spacing-lg) 0' }}
                >
                    Data architectures and integration layers that connect
                    systems, improve data quality and enable analytics and AI.
                </p>,
            ]}
        />
    ),
}

/** Every Figma variant: Tab (State, 5) and Tab group (State=Rest, with and without trailing action). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            <div
                role="tablist"
                aria-label="Tab states"
                style={{ display: 'flex', gap: 'var(--spacing-sm)' }}
            >
                {(
                    [
                        'Rest',
                        'Hover',
                        'Active',
                        'Focused',
                        'Disabled',
                    ] as State[]
                ).map((s) => (
                    <Tab
                        key={s}
                        label="Digital Infrastructure"
                        selected={s === 'Active'}
                        tabIndex={0}
                        className={PSEUDO[s]}
                        disabled={s === 'Disabled'}
                    />
                ))}
            </div>
            <div style={{ minHeight: 200 }}>
                <TabGroup
                    label="Practices"
                    tabs={TABS}
                    trailingOptions={MORE}
                    defaultMenuOpen
                />
            </div>
            <TabGroup
                label="Practices without action"
                tabs={TABS}
                {...{ 'Trailing action': false }}
            />
        </div>
    ),
}
