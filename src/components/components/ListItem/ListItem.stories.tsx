import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { List, ListItem, type ListItemProps } from './ListItem';

/*
  List Item — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26533-21001
  Copy from the Figma templates: the event page list (Check) and the Accordion list content block (Bullet).
*/

const EVENT = [
  'Your piste score from the Higher Ground guide, and what it says about your data foundation.',
  'Direct access to the Youwe and Pimcore specialists who work on product data every day.',
  'A clear view of what is next for product data and what it means for your 2027 roadmap.',
];
const PAINS = ['Fragmented customer data across siloed systems', 'Manual processes that don’t scale', 'Bottlenecks that delay time to market', 'Poor visibility into customer journeys', 'Inability to personalize at scale'];

type Args = ListItemProps & { Device: 'Desktop' | 'Mobile' };
const WIDTH = { Desktop: 632, Mobile: 336 };

const meta: Meta<Args> = {
  title: 'Components/List Item',
  component: ListItem,
  parameters: { layout: 'padded', docs: { description: { component: 'One line in a bulleted or checked list. Stack items in `List` (gap 2xs). Device only changes the width; the text style is responsive.' } } },
  argTypes: {
    Icon: { control: 'inline-radio', options: ['Bullet', 'Check'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Icon: 'Bullet', Device: 'Desktop', label: PAINS[0] },
  render: ({ Device, ...args }) => <div style={{ width: WIDTH[Device] }}><List><ListItem {...args} /></List></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const CheckList: Story = {
  args: { Icon: 'Check' },
  render: ({ Device, Icon }) => <div style={{ width: WIDTH[Device] }}><List>{EVENT.map((t) => <ListItem key={t} Icon={Icon} label={t} />)}</List></div>,
};

/** Every Figma variant: Device × Icon. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
      {(['Desktop', 'Mobile'] as const).map((d) => (
        <div key={d} style={{ display: 'flex', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
          <div style={{ width: WIDTH[d] }}><List>{PAINS.slice(0, 3).map((t) => <ListItem key={t} Icon="Bullet" label={t} />)}</List></div>
          <div style={{ width: WIDTH[d] }}><List>{EVENT.map((t) => <ListItem key={t} Icon="Check" label={t} />)}</List></div>
        </div>
      ))}
    </div>
  ),
};
