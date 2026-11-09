import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Breadcrumbs, type BreadcrumbsProps } from './Breadcrumbs';

/*
  Breadcrumbs/Desktop — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18846-21440
  Breadcrumbs/Mobile — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18703-12478
  Path from the Figma Hero (case page): Home / Work / JC-Electronics.
*/

const ITEMS = [{ label: 'Home', href: '#' }, { label: 'Work', href: '#' }, { label: 'JC-Electronics' }];
type State = 'Rest' | 'Focused';
type Args = BreadcrumbsProps & { State: State };

const meta: Meta<Args> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'padded' },
  argTypes: {
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    State: { control: 'inline-radio', options: ['Rest', 'Focused'], description: '_breadcrumb-link State (Active = the current page)' },
    items: { control: 'object' },
  },
  args: { Device: 'Desktop', State: 'Rest', items: ITEMS, 'Filter button': true },
  render: ({ State, ...args }) => (
    <div style={{ maxWidth: args.Device === 'Mobile' ? 343 : undefined }}>
      <Breadcrumbs {...args} linkClassName={State === 'Focused' ? 'pseudo-focus-visible' : undefined} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Mobile: Story = { args: { Device: 'Mobile' }, globals: { viewport: { value: 'mobile' } } };

/** Every Figma variant: Desktop (link states Rest / Active / Focused) and Mobile (Filter button on / off). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      <Breadcrumbs items={ITEMS} />
      <Breadcrumbs items={ITEMS} linkClassName="pseudo-focus-visible" />
      <div style={{ width: 343, display: 'grid', gap: 'var(--spacing-sm)' }}>
        <Breadcrumbs Device="Mobile" items={ITEMS} />
        <Breadcrumbs Device="Mobile" items={ITEMS} {...{ 'Filter button': false }} />
      </div>
    </div>
  ),
};
