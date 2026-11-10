import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ServiceCard, SystemCard } from './ServiceCard'
import { ModeFrame, type Mode } from '../../shared/ModeFrame'

/*
  Service Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26763-51
  System Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26751-66
  Copy from the Figma "Services split" content block and the "Card hover" example.
*/

type State = 'Rest' | 'Hover'
type Args = { Mode: Mode; State: State }
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover' }

const SERVICES = [
    {
        Eyebrow: '01',
        Title: 'B2B Enterprise Commerce',
        Description:
            'B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering.',
    },
    {
        Eyebrow: '02',
        Title: 'D2C Commerce',
        Description:
            'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly, on their own or alongside dealers and retailers.',
    },
    {
        Eyebrow: '03',
        Title: 'PIM/MDM',
        Description:
            'One source of truth for your product and master data, from PIM to customer and supplier records.',
    },
]
const SYSTEM = {
    Eyebrow: '01',
    Title: 'Systems that Scale',
    Description:
        'Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.',
    Caption: 'Proven at Quooker · 17 markets supported',
    link: 'Foundation for Data & Integrations',
}

const meta: Meta<Args> = {
    title: 'Components/Service Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Text-led card for services (Service Card) and the three systems (System Card). The whole card is one link. Hover/focus: red reveal, card text slides up and fades, the arrow stays straight (duration/card, ease/card).',
            },
        },
    },
    argTypes: {
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
        State: { control: 'inline-radio', options: ['Rest', 'Hover'] },
    },
    args: { Mode: 'Dark', State: 'Rest' },
    render: ({ Mode, State }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: 416 }}>
                <ServiceCard
                    {...SERVICES[0]}
                    {...{ 'Hover CTA': 'Explore the service' }}
                    href="#"
                    className={PSEUDO[State]}
                />
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}

export const System: Story = {
    render: ({ Mode, State }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: 416 }}>
                <SystemCard
                    {...SYSTEM}
                    {...{ 'Hover CTA': 'Explore the system' }}
                    href="#"
                    className={PSEUDO[State]}
                />
            </div>
        </ModeFrame>
    ),
}

/** Three service cards as in the Services split block (4 columns each on desktop). */
export const ServiceGrid: Story = {
    parameters: { layout: 'padded', controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 416px))',
                    gap: 'var(--spacing-sm)',
                }}
            >
                {SERVICES.map((s) => (
                    <ServiceCard
                        key={s.Title}
                        {...s}
                        {...{ 'Hover CTA': 'Explore the service' }}
                        href="#"
                    />
                ))}
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Mode × State, for Service Card and System Card. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 416px)',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Rest', 'Hover'] as State[]).map((s) => (
                            <ServiceCard
                                key={s}
                                {...SERVICES[0]}
                                {...{ 'Hover CTA': 'Explore the service' }}
                                href="#"
                                className={PSEUDO[s]}
                            />
                        ))}
                        {(['Rest', 'Hover'] as State[]).map((s) => (
                            <SystemCard
                                key={`sys-${s}`}
                                {...SYSTEM}
                                {...{ 'Hover CTA': 'Explore the system' }}
                                href="#"
                                className={PSEUDO[s]}
                            />
                        ))}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
