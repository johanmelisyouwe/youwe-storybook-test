import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AciWeave } from './AciWeave';
import { ACI_WEAVE } from './aciWeave.copy';

/*
  Content blocks/ACI Weave — from the hand-built Home frames (desktop 26598:4074, mobile 26924:10755).
  https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26598-4074
  Not a Figma component yet. Video frames show an abstract poster until real videos (src) are supplied.
*/

type Args = { Device: 'Desktop' | 'Mobile' };
const W = { Desktop: '100%', Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/ACI Weave',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'ACI Weave section (Home): kicker, title, body, Ask Youwe nudge and button next to a stack of demo videos. On desktop the text stays in view while the videos scroll; mobile stacks. Videos play inline when a src is given.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] } },
  args: { Device: 'Desktop' },
  render: ({ Device }) => <div style={{ width: W[Device], margin: '0 auto' }}><AciWeave Device={Device} {...ACI_WEAVE} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Desktop: Story = {};
export const Mobile: Story = { args: { Device: 'Mobile' } };
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
      <AciWeave Device="Desktop" {...ACI_WEAVE} />
      <div style={{ width: 360, margin: '0 auto' }}><AciWeave Device="Mobile" {...ACI_WEAVE} /></div>
    </div>
  ),
};
