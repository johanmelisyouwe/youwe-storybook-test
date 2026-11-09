import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AccordionList, type AccordionListProps } from './AccordionList';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Content blocks/Accordion list — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26534-21312
  Header, bullets and CTA are the Figma copy; the accordions use the ACI Weave FAQ from the Figma templates
  (the Figma accordions have default copy).
*/

const FAQ = [
  ['What is ACI Weave?', 'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models.'],
  ['What does ACI stand for?', 'ACI stands for Artificial Corporate Intelligence. ACI Weave is the platform that orchestrates agents between your data layer, such as ERP, CRM, PIM, a data lake and file shares, and the places where work happens.'],
  ['When does a person approve the work of an agent?', 'At the steps you choose. For each workflow you decide which steps need approval from an employee. At Kingspan Insulated Panels, no order reaches SAP until a person has approved it.'],
];
const COPY: Omit<AccordionListProps, 'Layout' | 'Device'> = {
  kicker: 'Industries we serve',
  heading: 'Selected case studies',
  body: 'Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments.',
  bullets: ['Fragmented customer data across siloed systems', 'Inability to personalize at scale', 'Bottlenecks that delay time to market', 'Poor visibility into customer journeys', 'Manual processes that don’t scale'],
  items: FAQ.map(([label, content]) => ({ label, content: <p style={{ margin: 0 }}>{content}</p> })),
  cta: { title: 'More questions?', body: 'Get in touch and we’ll connect you to one of our experts.', button: { label: 'Get in touch', href: '#' } },
};
type Args = Pick<AccordionListProps, 'Layout' | 'Device'> & { Mode: Mode };
const W = { Desktop: 1440, Mobile: 390 };

const meta: Meta<Args> = {
  title: 'Content blocks/Accordion list',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Section header plus Plus-Minus accordions for FAQs and "Problems we solve". Split puts the header (and optional bullets and CTA) on the left. Motion: items expand like the Accordion; block reveal staggered.' } } },
  argTypes: {
    Layout: { control: 'inline-radio', options: ['Stacked', 'Split', 'Split list'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
  },
  args: { Layout: 'Stacked', Device: 'Desktop', Mode: 'Dark' },
  render: ({ Layout, Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><AccordionList Layout={Layout} {...COPY} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Split: Story = { args: { Layout: 'Split' } };
export const SplitList: Story = { args: { Layout: 'Split list' } };

/** Every Figma variant: Layout × Device × Mode. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m} padding={0}>
          {(['Stacked', 'Split', 'Split list'] as const).map((l) => (
            <div key={l} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
              <div style={{ width: 1440, flexShrink: 0 }}><AccordionList Layout={l} {...COPY} /></div>
              <div style={{ width: 390, flexShrink: 0 }}><AccordionList Layout={l} {...COPY} /></div>
            </div>
          ))}
        </ModeFrame>
      ))}
    </div>
  ),
};
