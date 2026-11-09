import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextColumn, type TextColumnProps } from './TextColumn';
import { TEXT_COLUMN } from '../TextColumn/longform.copy';

/* Content blocks/Text column — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-596 (Figma copy) */

type Args = Pick<TextColumnProps, 'Alignment' | 'Device'>;
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Text column',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Single reading column (632 wide): lead and body. Use for long-form case and article copy. Motion: block reveal.' } } },
  argTypes: {
    'Alignment': { control: 'inline-radio', options: ['Centered', 'Left'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { 'Alignment': 'Centered', Device: 'Desktop' },
  render: (args) => <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}><TextColumn {...TEXT_COLUMN} {...args} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Second: Story = { name: 'Left', args: { 'Alignment': 'Left' } };

/** Every Figma variant: Device × Alignment. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Centered', 'Left'] as const).map((v) => <div key={v} style={{ maxWidth: 1440 }}><TextColumn {...TEXT_COLUMN} {...{ 'Alignment': v }} /></div>)}
      <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>{(['Centered', 'Left'] as const).map((v) => <div key={v} style={{ width: 360 }}><TextColumn {...TEXT_COLUMN} {...{ 'Alignment': v }} /></div>)}</div>
    </div>
  ),
};
