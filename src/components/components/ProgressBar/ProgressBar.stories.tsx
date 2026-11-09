import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProgressBar } from './ProgressBar';

/* Progress Bar — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-7241 (343 wide in Figma) */

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  parameters: { layout: 'centered' },
  argTypes: {
    Progress: { control: 'inline-radio', options: ['Start', '25%', '50%', '75%', 'End'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  args: { Progress: '50%', label: 'Progress' },
  render: (args) => <div style={{ width: 343 }}><ProgressBar {...args} /></div>,
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

/** Every Figma variant (Progress). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)', width: 343 }}>
      {(['Start', '25%', '50%', '75%', 'End'] as const).map((p) => <ProgressBar key={p} Progress={p} label={`Progress ${p}`} />)}
    </div>
  ),
};
