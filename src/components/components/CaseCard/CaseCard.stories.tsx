import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CaseCard, CaseStat, type CaseCardSize, type CaseStatProps } from './CaseCard';
import { ClientLogo } from '../../logos/ClientLogo';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Case Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24984-520
  _Case Card/Stat — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26708-88
  Titles, clients and stats from the Figma Case carousel and "Case Card — stat options".
  Case photos are not in the repo yet (see SYNC-REPORT.md), so the image shows the Figma placeholder.
*/

type State = 'Rest' | 'Hover';
type Args = { Size: CaseCardSize; Device: 'Desktop' | 'Mobile'; Mode: Mode; State: State };
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover' };
const W: Record<CaseCardSize, number> = { 'One third': 416, 'Two thirds': 848, Full: 1280, 'One quarter': 308 };

const GSTAR = {
  Title: 'How a Design System strengthened G-Star’s brand consistency',
  Client: 'G-Star RAW',
  logo: <ClientLogo name="G-Star" />,
  stat: { Type: 'Single', value: '+43%', label: 'marketable catalog uplift' } as CaseStatProps,
  tags: ['Design System', 'Commerce'],
  'Hover context': 'How G-Star kept its brand consistent',
};
const STATS: CaseStatProps[] = [
  { Type: 'Single', value: '+43%', label: 'marketable catalog uplift' },
  { Type: 'Trend', value: '28%', label: 'more qualified leads' },
  { Type: 'Before-after', before: '12 days', value: '3 days', label: 'order processing time' },
  { Type: 'Stacked', value: '€2.4M', label: 'added annual revenue in year one' },
  { Type: 'Pair', value: '17', label: 'countries live', value2: '3×', label2: 'faster launches' },
];

const meta: Meta<Args> = {
  title: 'Components/Case Card',
  parameters: { layout: 'centered', docs: { description: { component: 'Case study card. The whole card is one link. Hover/focus: the red panel wipes up from the bottom and its text slides in 40px from the right (duration/card, ease/card).' } } },
  argTypes: {
    Size: { control: 'inline-radio', options: ['One third', 'Two thirds', 'Full', 'One quarter'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    State: { control: 'inline-radio', options: ['Rest', 'Hover'] },
  },
  args: { Size: 'One third', Device: 'Desktop', Mode: 'Dark', State: 'Rest' },
  render: ({ Size, Device, Mode, State }) => (
    <ModeFrame Mode={Mode}>
      <div style={{ width: Device === 'Mobile' ? 336 : W[Size] }}>
        <CaseCard {...GSTAR} Size={Size} Device={Device} href="#" className={PSEUDO[State]} />
      </div>
    </ModeFrame>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Hover: Story = { args: { State: 'Hover' } };

/** _Case Card/Stat: every Type × Size. */
export const StatOptions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 'var(--spacing-sm)', justifyItems: 'start' }}>
      {STATS.flatMap((s) => (['L', 'M'] as const).map((z) => <CaseStat key={s.Type + z} {...s} Size={z} />))}
    </div>
  ),
};

/** Every Figma variant: Size × Device × Mode × State. */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            {(['Rest', 'Hover'] as State[]).flatMap((s) => [
              ...(['One quarter', 'One third', 'Two thirds', 'Full'] as CaseCardSize[]).map((z) => (
                <div key={z + s} style={{ width: W[z] }}><CaseCard {...GSTAR} Size={z} href="#" className={PSEUDO[s]} /></div>
              )),
              <div key={`m${s}`} style={{ width: 336 }}><CaseCard {...GSTAR} Device="Mobile" href="#" className={PSEUDO[s]} /></div>,
            ])}
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
