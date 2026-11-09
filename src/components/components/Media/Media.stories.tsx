import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Media, type MediaProps } from './Media';

/* Content blocks/Media — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-606 (image placeholders; images not imported yet) */

type Args = Pick<MediaProps, 'Layout' | 'Device'>;
const W = { Desktop: 1440, Mobile: 360 };
const meta: Meta<Args> = {
  title: 'Content blocks/Media',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Image or video: Contained, Full bleed, Two-up or Two-up staggered. Motion: media clip reveal on scroll (inset 18%/8% → 0, scale 0.96 → 1).' } } },
  argTypes: {
    Layout: { control: 'inline-radio', options: ['Contained', 'Full bleed', 'Two-up staggered', 'Two-up'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Layout: 'Contained', Device: 'Desktop' },
  render: (args) => <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}><Media {...args} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const TwoUpStaggered: Story = { args: { Layout: 'Two-up staggered' } };

/** Every Figma variant: Device × Layout. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Contained', 'Full bleed', 'Two-up staggered', 'Two-up'] as const).map((l) => (
        <div key={l} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
          <div style={{ width: 1440 }}><Media Layout={l} /></div>
          <div style={{ width: 360 }}><Media Layout={l} /></div>
        </div>
      ))}
    </div>
  ),
};
