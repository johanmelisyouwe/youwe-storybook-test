import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Clock, Location, LocationList, type LocationProps } from './'
import { ModeFrame, type Mode } from '../../shared/mode-frame'

/*
  Location — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26797-116
  Clock — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26797-51
  Offices from the Figma Offices content block. The clocks are live; AllVariants fixes them at 11:12.
*/

type Args = { Device: 'Desktop' | 'Mobile'; Mode: Mode }
const W = { Desktop: 1280, Mobile: 336 }
const OFFICES: Omit<LocationProps, 'Device'>[] = [
    {
        City: 'Rotterdam',
        Country: 'The Netherlands',
        Timezone: 'GMT+1',
        timeZone: 'Europe/Amsterdam',
    },
    {
        City: 'Groningen',
        Country: 'The Netherlands',
        Timezone: 'GMT+1',
        timeZone: 'Europe/Amsterdam',
    },
    {
        City: 'London',
        Country: 'United Kingdom',
        Timezone: 'GMT+0',
        timeZone: 'Europe/London',
    },
    {
        City: 'Leeds',
        Country: 'United Kingdom',
        Timezone: 'GMT+0',
        timeZone: 'Europe/London',
    },
    {
        City: 'Shrewsbury',
        Country: 'United Kingdom',
        Timezone: 'GMT+0',
        timeZone: 'Europe/London',
    },
    {
        City: 'Stockholm',
        Country: 'Sweden',
        Timezone: 'GMT+1',
        timeZone: 'Europe/Stockholm',
    },
    {
        City: 'Bandung',
        Country: 'Indonesia',
        Timezone: 'GMT+7',
        timeZone: 'Asia/Jakarta',
    },
    {
        City: 'Kyiv',
        Country: 'Ukraine',
        Timezone: 'GMT+2',
        timeZone: 'Europe/Kyiv',
    },
]

const meta: Meta<Args> = {
    title: 'Components/Location',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Office row with city, country, timezone and a live Clock. Stack rows in `LocationList`. Motion: clock digits flip on change (520ms, ease/emphasized).',
            },
        },
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    },
    args: { Device: 'Desktop', Mode: 'Dark' },
    render: ({ Device, Mode }) => (
        <ModeFrame Mode={Mode}>
            <div style={{ maxWidth: W[Device] }}>
                <LocationList>
                    {OFFICES.map((o) => (
                        <Location key={o.City} {...o} Device={Device} />
                    ))}
                </LocationList>
            </div>
        </ModeFrame>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const ClockOnly: Story = {
    parameters: { layout: 'centered', controls: { include: ['Mode'] } },
    render: ({ Mode }) => (
        <ModeFrame Mode={Mode}>
            <Clock timeZone="Europe/Amsterdam" label="Rotterdam" />
        </ModeFrame>
    ),
}

/** Every Figma variant: Location Mode × Device, and Clock Mode (fixed at 11:12 as in Figma). */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(['Dark', 'Light'] as Mode[]).map((m) => (
                <ModeFrame key={m} Mode={m}>
                    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                        <div style={{ maxWidth: 1280 }}>
                            <LocationList>
                                <Location {...OFFICES[0]} time="11:12" />
                            </LocationList>
                        </div>
                        <div style={{ width: 336 }}>
                            <LocationList>
                                <Location
                                    {...OFFICES[0]}
                                    Device="Mobile"
                                    time="11:12"
                                />
                            </LocationList>
                        </div>
                        <Clock timeZone="Europe/Amsterdam" time="11:12" />
                    </div>
                </ModeFrame>
            ))}
        </div>
    ),
}
