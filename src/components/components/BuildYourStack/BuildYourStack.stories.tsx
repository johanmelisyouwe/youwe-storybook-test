import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BuildYourStack, type BuildYourStackProps, type StackGoal } from './BuildYourStack';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Content blocks/Build your stack — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26851-1491
  Figma has the content for one goal ("Sell B2B online"); the other four goals only have their tab label,
  so their panels only show the label until design adds them (see SYNC-REPORT.md).
*/

const SELL: StackGoal = {
  label: 'Sell B2B online',
  system: '05  Drive revenue',
  intro: 'Adobe Commerce runs the shop on a Hyvä storefront. Pimcore holds the product data and Alumio connects it all to your ERP.',
  partners: [
    { Name: 'Alumio', Level: 'Integration', Description: 'iPaaS that connects ERP, PIM and commerce.', href: '#' },
    { Name: 'Adobe', Level: 'Commerce', Description: 'Adobe Commerce as the B2B platform.', href: '#' },
    { Name: 'Hyvä', Level: 'Gold Partner', Description: 'Fast Magento storefront.', href: '#' },
    { Name: 'Pimcore', Level: 'Strategic Partner', Description: 'One source for product data.', href: '#' },
  ],
  case: { Title: 'Accelerating Growth with a Digital Pioneer in Sports Supplements', Client: 'XXL Nutrition', tags: ['Magento', 'Adobe Commerce'], href: '#' },
};
const GOALS: StackGoal[] = [{ label: 'Connect your systems' }, { label: 'Build a data foundation' }, { label: 'Put AI agents to work' }, { label: 'Sharpen your pricing' }, SELL];
const COPY: Omit<BuildYourStackProps, 'Device'> = { kicker: 'Build your stack', title: 'Start with what you need.', body: 'Pick a goal. See the partners we usually combine for it, and a client who runs that stack today.', goals: GOALS, selected: 4 };
type Args = Pick<BuildYourStackProps, 'Device'> & { Mode: Mode };
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Build your stack',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Intro, goal tabs, goal intro, four vertical Technology Cards and a full-width Case Card. Mobile: tabs scroll sideways, cards stack. Motion: block reveal staggered.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark' },
  render: ({ Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><BuildYourStack {...COPY} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** Every Figma variant: Mode × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m} padding={0}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            <div style={{ width: 1440, flexShrink: 0 }}><BuildYourStack {...COPY} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><BuildYourStack {...COPY} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
