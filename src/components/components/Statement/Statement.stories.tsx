import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Statement, type StatementProps } from './Statement';

/* Content blocks/Statement — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26543-21679 (Figma copy) */

const TEXT = 'Customers can access product info, locate stores, and order accessories to keep their Quooker products running smoothly.';
type Args = Pick<StatementProps, 'Device'>;
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Statement',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'One large statement (heading/xl). Optional giant decorative rows drift ±9% in opposite directions on scroll (aria-hidden).' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] } },
  args: { Device: 'Desktop' },
  render: ({ Device = 'Desktop' }) => <div style={{ maxWidth: W[Device] }}><Statement text={TEXT} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const WithDriftingRows: Story = { render: () => <div style={{ maxWidth: 1440 }}><Statement text={TEXT} rows={['Quooker', 'B2B2C']} /></div> };

/** Every Figma variant (Device). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
      <div style={{ width: 1440 }}><Statement text={TEXT} /></div>
      <div style={{ width: 360 }}><Statement text={TEXT} /></div>
    </div>
  ),
};
