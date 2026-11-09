import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Offices, type OfficesProps } from './Offices';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/* Content blocks/Offices — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26799-617 (Figma copy; live clocks) */

const OFFICES: OfficesProps['offices'] = [
  { City: 'Rotterdam', Country: 'The Netherlands', Timezone: 'GMT+1', timeZone: 'Europe/Amsterdam' },
  { City: 'Groningen', Country: 'The Netherlands', Timezone: 'GMT+1', timeZone: 'Europe/Amsterdam' },
  { City: 'London', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Leeds', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Shrewsbury', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Stockholm', Country: 'Sweden', Timezone: 'GMT+1', timeZone: 'Europe/Stockholm' },
  { City: 'Bandung', Country: 'Indonesia', Timezone: 'GMT+7', timeZone: 'Asia/Jakarta' },
  { City: 'Kyiv', Country: 'Ukraine', Timezone: 'GMT+2', timeZone: 'Europe/Kyiv' },
];
const HEAD = { Kicker: 'Our offices', Title: 'Eight offices, one team', Body: 'Live local time in every Youwe office. Whatever the hour, someone on the team is at work.' };
type Args = Pick<OfficesProps, 'Device'> & { Mode: Mode; 'Show header': boolean };
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Offices',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Header and the list of offices with a live local clock. Motion: block reveal; clock digits flip on change.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark', 'Show header': true },
  render: ({ Device = 'Desktop', Mode, 'Show header': sh }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><Offices Device={Device} {...(sh ? HEAD : {})} offices={OFFICES} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** Every Figma variant: Mode × Device (clocks fixed at 11:12 as in Figma). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m} padding={0}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            <div style={{ width: 1440, flexShrink: 0 }}><Offices {...HEAD} offices={OFFICES.map((o) => ({ ...o, time: '11:12' }))} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><Offices Device="Mobile" {...HEAD} offices={OFFICES.map((o) => ({ ...o, time: '11:12' }))} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
