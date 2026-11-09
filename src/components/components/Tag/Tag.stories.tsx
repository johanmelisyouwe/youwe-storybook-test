import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tag } from './Tag';
import { iconNames } from '../../icons/Icon';

/*
  Tag — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-7265
  Labels are the Figma component defaults ("Very popular", "Only 3 left").
  These read as shop placeholders; flagged in SYNC-REPORT.md as an open question.
  The Neutral tag is translucent (surface/tint-1 + background blur), so stories show it on the same surface the Figma component set uses.
*/

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Non-interactive status label (Info, Neutral) in two sizes, with an optional icon.' } },
  },
  argTypes: {
    Variant: { control: 'inline-radio', options: ['Info', 'Neutral'] },
    Size: { control: 'inline-radio', options: ['S', 'M'] },
    'Show icon': { control: 'boolean' },
    iconName: { control: 'select', options: iconNames },
  },
  args: { Variant: 'Info', Size: 'S', 'Show icon': true, label: 'Very popular' },
};
export default meta;
type Story = StoryObj<typeof Tag>;

const Backdrop = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--component-radius-card)',
      background: 'var(--color-shared-surface-base-3)', // the backdrop Figma shows the Tag set on
      display: 'flex',
      gap: 'var(--spacing-sm)',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {};
export const Info: Story = { args: { Variant: 'Info', label: 'Very popular' } };
export const Neutral: Story = {
  args: { Variant: 'Neutral', label: 'Only 3 left' },
  decorators: [(S) => <Backdrop><S /></Backdrop>],
};

/** Every Figma variant: Variant × Size, with and without icon. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Backdrop>
      {(['Info', 'Neutral'] as const).flatMap((v) =>
        (['S', 'M'] as const).map((z) => (
          <div key={`${v}${z}`} style={{ display: 'grid', gap: 'var(--spacing-2xs)', justifyItems: 'start' }}>
            <Tag Variant={v} Size={z} label={v === 'Info' ? 'Very popular' : 'Only 3 left'} />
            <Tag Variant={v} Size={z} label={v === 'Info' ? 'Very popular' : 'Only 3 left'} {...{ 'Show icon': false }} />
          </div>
        )),
      )}
    </Backdrop>
  ),
};
