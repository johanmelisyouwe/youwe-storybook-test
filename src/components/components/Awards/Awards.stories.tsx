import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Awards, type AwardsProps } from './Awards';

/* Content blocks/Awards — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27096-9988 (badge artwork not exported yet: placeholders) */

const BADGES = [{ name: 'Northern Digital Award' }, { name: 'LRQA certificate' }, { name: 'Award-winning B2B implementation' }, { name: 'Great Place To Work' }];
type Args = Pick<AwardsProps, 'Device'>;
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Awards',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Awards and certificates row, after the client Stats on About Us.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] } },
  args: { Device: 'Desktop' },
  render: ({ Device = 'Desktop' }) => <div style={{ maxWidth: W[Device] }}><Awards badges={BADGES} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** Every Figma variant (Device). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
      <div style={{ width: 1440, flexShrink: 0 }}><Awards badges={BADGES} /></div>
      <div style={{ width: 360, flexShrink: 0 }}><Awards badges={BADGES} /></div>
    </div>
  ),
};
