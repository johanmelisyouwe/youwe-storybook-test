import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TechPartnersSplit, type TechPartnersSplitProps } from './TechPartnersSplit';
import { AskSnippet } from '../AskYouwe/AskYouwe';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/* Content blocks/Tech partners split — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26851-911 (Figma copy; partner logos shown as names) */

const COPY: Omit<TechPartnersSplitProps, 'Device'> = {
  kicker: 'Foundation for Data & Integrations',
  title: 'Systems that scale',
  body: 'Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.',
  link: { label: 'Foundation for Data & Integrations services', href: '#' },
  snippets: (
    <>
      <AskSnippet Type="Nudge" Title="Magento on a customized ERP? See how JC-Electronics connected it through Alumio." />
      <AskSnippet Type="Question" Title="Which partners do you use for data and integrations?" />
    </>
  ),
  groups: [
    { label: 'Integration', partners: [{ Name: 'Alumio', Description: 'iPaaS that connects ERP, PIM and commerce.', href: '#' }] },
    { label: 'Data platforms', partners: [{ Name: 'Databricks', Description: 'Governed data engineering, analytics and AI.', href: '#' }, { Name: 'Microsoft Fabric', Description: 'A governed Microsoft data foundation.', href: '#' }] },
    { label: 'Cloud', partners: [{ Name: 'AWS', Description: 'Integrations, data flows and AI workloads.', href: '#' }, { Name: 'Google Cloud', Description: 'Data, analytics and AI, including BigQuery.', href: '#' }] },
  ],
};
type Args = Pick<TechPartnersSplitProps, 'Device'> & { Mode: Mode };
const W = { Desktop: 1440, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Tech partners split',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Proposition intro (with link) and Ask Youwe snippets on the left, grouped Technology Cards on the right. Mobile: one column. Motion: block reveal staggered.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark' },
  render: ({ Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><TechPartnersSplit {...COPY} /></div></ModeFrame>,
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
            <div style={{ width: 1440, flexShrink: 0 }}><TechPartnersSplit {...COPY} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><TechPartnersSplit {...COPY} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
