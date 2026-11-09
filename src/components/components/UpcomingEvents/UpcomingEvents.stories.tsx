import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { EventCard, UpcomingEvents, type EventItem } from './UpcomingEvents';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/* Upcoming events — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26740-42 (events from Figma) */

const EVENTS: EventItem[] = [
  { Day: '28', Month: 'OCT', Title: 'PIM Clinic | Product Data Advice | 28 October', Place: 'Online session', date: '28 October', href: '#' },
  { Day: '13', Month: 'NOV', Title: 'aiGrunn & Youwe Business Track', Place: 'Forum Groningen', date: '13 November', href: '#' },
  { Day: '3', Month: 'DEC', Title: 'Higher Ground | Product data event, 3 December', Place: 'SnowWorld Zoetermeer', date: '3 December', href: '#' },
  { Day: '21', Month: 'JAN', Title: 'Higher Ground online: what’s next for product data', Place: 'Online', date: '21 January', href: '#' },
];

type Args = { Mode: Mode; Device: 'Desktop' | 'Mobile'; events: number };
const meta: Meta<Args> = {
  title: 'Components/Upcoming events',
  parameters: { layout: 'padded', docs: { description: { component: 'Up to four event cards with a link to all events; sits under the featured Insight Card. Each card is one link; hover/focus plays the red reveal.' } } },
  argTypes: {
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    events: { control: { type: 'range', min: 2, max: 4 }, description: 'Figma: Show event 3 / Show event 4' },
  },
  args: { Mode: 'Dark', Device: 'Desktop', events: 4 },
  render: ({ Mode, Device, events }) => (
    <ModeFrame Mode={Mode}><div style={{ maxWidth: Device === 'Mobile' ? 336 : 1280 }}><UpcomingEvents Device={Device} events={EVENTS.slice(0, events)} /></div></ModeFrame>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Mobile: Story = { args: { Device: 'Mobile' } };

/** _Upcoming events/Row: State Rest and Hover. */
export const EventStates: Story = {
  parameters: { controls: { include: ['Mode'] } },
  render: ({ Mode }) => (
    <ModeFrame Mode={Mode}>
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
        {(['Rest', 'Hover'] as const).map((s) => <div key={s} style={{ width: 360 }}><EventCard {...EVENTS[0]} className={s === 'Hover' ? 'pseudo-hover' : undefined} /></div>)}
      </div>
    </ModeFrame>
  ),
};

/** Every Figma variant: Mode × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m}>
          <div style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
            <div style={{ width: 1280 }}><UpcomingEvents events={EVENTS} /></div>
            <div style={{ width: 336 }}><UpcomingEvents Device="Mobile" events={EVENTS} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
