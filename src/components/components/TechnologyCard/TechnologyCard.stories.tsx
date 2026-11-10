import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TechnologyCard, type TechnologyCardProps } from './TechnologyCard'
import { ModeFrame, type Mode } from '../../shared/ModeFrame'

/*
  Technology Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26721-87
  Partners and descriptions from the Figma "Technology Card — All partners" overview.
  Partner logos are not exported yet; the tile shows the name as a wordmark, like the Figma logo placeholder.
*/

type State = 'Rest' | 'Hover'
type Args = Pick<TechnologyCardProps, 'Layout'> & { Mode: Mode; State: State }
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover' }
const PARTNERS: Omit<TechnologyCardProps, 'href'>[] = [
    {
        Name: 'Databricks',
        Description: 'Governed data engineering, analytics and AI.',
    },
    {
        Name: 'Microsoft Fabric',
        Description: 'A governed Microsoft data foundation.',
    },
    { Name: 'Pimcore', Level: 'Strategic Partner' },
    { Name: 'Shopify Plus', Level: 'Certified Partner' },
]
const W = { Horizontal: 448, Vertical: 292 }

const meta: Meta<Args> = {
    title: 'Components/Technology Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Technology partner card. Horizontal for 2-column lists, Vertical for grids. The logo tile stays white in both modes. Hover/focus: red reveal (duration/card, ease/card).',
            },
        },
    },
    argTypes: {
        Layout: {
            control: 'inline-radio',
            options: ['Horizontal', 'Vertical'],
        },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
        State: { control: 'inline-radio', options: ['Rest', 'Hover'] },
    },
    args: { Layout: 'Horizontal', Mode: 'Dark', State: 'Rest' },
    render: ({ Layout = 'Horizontal', Mode, State }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ width: W[Layout] }}>
                <TechnologyCard
                    {...PARTNERS[0]}
                    Layout={Layout}
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
export const Vertical: Story = { args: { Layout: 'Vertical' } }

/** Partners overview: Horizontal cards in two columns. */
export const PartnerList: Story = {
    parameters: { layout: 'padded', controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 448px)',
                    gap: 'var(--spacing-sm)',
                }}
            >
                {PARTNERS.map((p) => (
                    <TechnologyCard key={p.Name} {...p} href="#" />
                ))}
            </div>
        </ModeFrame>
    ),
}

/** Every Figma variant: Layout × Mode × State. */
export const AllVariants: Story = {
    parameters: { layout: 'padded', controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-lg)',
                            alignItems: 'start',
                        }}
                    >
                        {(['Horizontal', 'Vertical'] as const).flatMap((l) =>
                            (['Rest', 'Hover'] as State[]).map((s) => (
                                <div key={l + s} style={{ width: W[l] }}>
                                    <TechnologyCard
                                        {...PARTNERS[0]}
                                        Layout={l}
                                        href="#"
                                        className={PSEUDO[s]}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
