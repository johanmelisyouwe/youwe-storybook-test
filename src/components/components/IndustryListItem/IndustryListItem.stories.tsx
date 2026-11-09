import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IndustryList, IndustryListItem, type Industry } from './IndustryListItem';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Industry List Item — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=25019-679
  The 14 industries from the Figma Industries page. Figma only has a subtitle for Retail; the preview
  shows the Figma placeholder image with a customer name.
*/

type Args = { Device: 'Desktop' | 'Mobile'; Expanded: 'No' | 'Yes'; Mode: Mode };
const TITLES = ['Retail & Consumer Goods', 'Wholesale', 'Fashion & Lifestyle', 'Manufacturing', 'Financial Services', 'Food & Agriculture', 'Healthcare & Pharma', 'Industrial Supplies & Components', 'Construction & Building Materials', 'Home & Living', 'Automotive & Cycling', 'Education & Training', 'IT & Technology Services', 'Travel and Hospitality'];
const ITEMS: Industry[] = TITLES.map((t, i) => ({
  Number: String(i + 1).padStart(2, '0'),
  Title: t,
  Subtitle: i === 0 ? 'eCommerce Infrastructures for Modern Retail' : undefined,
  preview: i === 0 ? { customer: 'G-Star RAW' } : undefined,
  href: '#',
}));
const W = { Desktop: 1280, Mobile: 336 };

const meta: Meta<Args> = {
  title: 'Components/Industry List Item',
  parameters: { layout: 'padded', docs: { description: { component: 'Numbered list row for industries. Collapsed: dimmed title. Expanded (hover/focus): white title, subtitle and, on desktop, a floating preview image. In `IndustryList` the first item is active and the active row follows hover and focus.' } } },
  argTypes: {
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    Expanded: { control: 'inline-radio', options: ['No', 'Yes'] },
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
  },
  args: { Device: 'Desktop', Expanded: 'Yes', Mode: 'Dark' },
  render: ({ Device, Expanded, Mode }) => (
    <ModeFrame Mode={Mode}>
      <div style={{ maxWidth: W[Device], paddingTop: 120 }}><ul className="yw-industry-list"><IndustryListItem {...ITEMS[0]} Device={Device} Expanded={Expanded} /></ul></div>
    </ModeFrame>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** The full list: hover or tab through the rows. */
export const List: Story = {
  parameters: { controls: { include: ['Device', 'Mode'] } },
  render: ({ Device, Mode }) => (
    <ModeFrame Mode={Mode}>
      <div style={{ maxWidth: W[Device], paddingTop: 120 }}><IndustryList items={ITEMS.slice(0, 6)} Device={Device} /></div>
    </ModeFrame>
  ),
};

/** Every Figma variant: Device × Expanded × Mode. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m}>
          <div style={{ display: 'grid', gap: 'var(--spacing-xl)', paddingTop: 120 }}>
            {(['No', 'Yes'] as const).map((e) => <div key={e} style={{ maxWidth: 1280 }}><ul className="yw-industry-list"><IndustryListItem {...ITEMS[0]} Expanded={e} /></ul></div>)}
            <div style={{ width: 336 }}>
              <ul className="yw-industry-list yw-industry-list--mobile">
                {(['No', 'Yes'] as const).map((e) => <IndustryListItem key={e} {...ITEMS[0]} Device="Mobile" Expanded={e} />)}
              </ul>
            </div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
