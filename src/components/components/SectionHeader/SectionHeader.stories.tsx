import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeader, type SectionHeaderProps } from './SectionHeader';

/* Content blocks/Section header — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24985-699 (Figma copy) */

const COPY = {
  kicker: 'Industries we serve',
  heading: 'Selected case studies',
  body: 'Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices.',
};
type Args = Pick<SectionHeaderProps, 'Alignment' | 'Device'> & { Kicker: boolean };
const W = { Desktop: '100%', Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Section header',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Opens a section: optional kicker, heading/xl and an intro (max 524 wide). Motion: title words rise from 105% in a mask on scroll.' } } },
  argTypes: {
    Alignment: { control: 'inline-radio', options: ['Left', 'Centered'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Alignment: 'Left', Device: 'Desktop', Kicker: true },
  render: ({ Alignment, Device = 'Desktop', Kicker }) => <div style={{ maxWidth: W[Device] }}><SectionHeader {...COPY} kicker={Kicker ? COPY.kicker : undefined} Alignment={Alignment} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Centered: Story = { args: { Alignment: 'Centered' } };

/** Every Figma variant: Device × Alignment. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Left', 'Centered'] as const).map((a) => <div key={a} style={{ maxWidth: 1440 }}><SectionHeader {...COPY} Alignment={a} /></div>)}
      <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>{(['Left', 'Centered'] as const).map((a) => <div key={a} style={{ width: 360 }}><SectionHeader {...COPY} Alignment={a} /></div>)}</div>
    </div>
  ),
};
