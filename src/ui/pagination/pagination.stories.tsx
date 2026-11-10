import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Pagination, type PaginationProps } from './'

/*
  Pagination — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-7106
  _Pagination buttons (7496:8631) are rendered inside it; the States story shows Rest, Hover, Focused,
  Active and Disabled. View amount uses the compact dropdown (Figma Dropdown/Compact, M).
*/

type Args = Pick<PaginationProps, 'Variant' | 'Device' | 'page' | 'total'>

function Live(args: Args) {
    const [page, setPage] = useState(args.page ?? 1)
    const [per, setPer] = useState(12)
    return (
        <Pagination
            {...args}
            page={page}
            onPageChange={setPage}
            perPage={per}
            onPerPageChange={setPer}
        />
    )
}

const meta: Meta<Args> = {
    title: 'Components/Pagination',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Page navigation (Prev, numbered pages with an ellipsis, Next; mobile adds First/Last and shows only the current page) and the "View max. … per page" amount selector. Buttons change background on hover (duration/fast).',
            },
        },
    },
    argTypes: {
        Variant: {
            control: 'inline-radio',
            options: ['View amount', 'Pagination'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        page: { control: { type: 'number', min: 1 } },
        total: { control: { type: 'number', min: 1 } },
    },
    args: { Variant: 'Pagination', Device: 'Desktop', page: 1, total: 12 },
    render: (args) => (
        <Live
            key={`${args.Variant}-${args.Device}-${args.page}-${args.total}`}
            {...args}
        />
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const MiddlePage: Story = { args: { page: 6 } }
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const ViewAmount: Story = { args: { Variant: 'View amount' } }

/** _Pagination buttons: State (Rest, Hover, Focused, Active, Disabled). */
export const States: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(
                [
                    ['Rest', ''],
                    ['Hover', 'pseudo-hover'],
                    ['Focused', 'pseudo-focus-visible'],
                ] as const
            ).map(([label, cls]) => (
                <div key={label}>
                    <p
                        className="yw-body-xs-reg"
                        style={{
                            color: 'var(--color-shared-content-secondary)',
                            marginBottom: 'var(--spacing-2xs)',
                        }}
                    >{`State=${label} (Active = current page, Disabled = Prev/First on page 1)`}</p>
                    <div
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-xl)',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Pagination
                            page={1}
                            total={12}
                            buttonClassName={cls || undefined}
                        />
                        <Pagination
                            Device="Mobile"
                            page={1}
                            total={12}
                            buttonClassName={cls || undefined}
                        />
                    </div>
                </div>
            ))}
        </div>
    ),
}

/** Every Figma variant: View amount (Desktop), Pagination × Desktop / Mobile (3). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3xl)',
                flexWrap: 'wrap',
            }}
        >
            {(['View amount', 'Pagination'] as const).flatMap((v) =>
                (['Desktop', 'Mobile'] as const)
                    .filter((d) => v === 'Pagination' || d === 'Desktop')
                    .map((d) => (
                        <div key={v + d}>
                            <p
                                className="yw-body-xs-reg"
                                style={{
                                    color: 'var(--color-shared-content-secondary)',
                                    marginBottom: 'var(--spacing-2xs)',
                                }}
                            >{`Variant=${v}, Device=${d}`}</p>
                            <Pagination
                                Variant={v}
                                Device={d}
                                page={1}
                                total={12}
                            />
                        </div>
                    ))
            )}
        </div>
    ),
}
