import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ServicesSplit, type ServicesSplitProps } from './ServicesSplit';
import { AskSnippet } from '../AskYouwe/AskYouwe';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/* Content blocks/Services split — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26849-946 (Figma copy) */

const COPY: Omit<ServicesSplitProps, 'Device'> = {
  kicker: 'Practice 01',
  title: 'Digital Infrastructure',
  body: 'We build digital platforms that directly support revenue growth and strengthen market position. From advanced commerce systems to AI-powered infrastructure, we create the backbone modern businesses need to operate, scale, and compete in markets that keep moving faster.',
  snippets: (
    <>
      <AskSnippet Type="Case" Title="Scaling smart: Quooker’s expansion to 17 countries" Meta="Case · Quooker" />
      <AskSnippet Type="Question" Title="How did Kingspan connect its systems with AI agents?" />
    </>
  ),
  services: [
    ['01', 'B2B Enterprise Commerce', 'B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering.'],
    ['02', 'D2C Commerce', 'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly, on their own or alongside dealers and retailers.'],
    ['03', 'PIM/MDM', 'One source of truth for your product and master data, from PIM to customer and supplier records.'],
    ['04', 'Digital Experience (DXP)', 'Digital experience platforms that combine content management, personalization and marketing automation.'],
    ['05', 'Customer & Partner Portals', 'Self-service portals that bring information together for your customers and partners.'],
    ['06', 'Cloud Architecture', 'Scalable cloud architectures for your applications and machine learning workloads, from development to production.'],
  ].map(([e, t, d]) => ({ Eyebrow: e, Title: t, Description: d, 'Hover CTA': 'Explore the service', href: '#' })),
};
type Args = Pick<ServicesSplitProps, 'Device'> & { Mode: Mode };
const W = { Desktop: '100%', Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Services split',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Proposition intro with Ask Youwe snippets on the left, Service Cards in two staggered columns on the right. Mobile: one column. Motion: block reveal staggered.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark' },
  render: ({ Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><ServicesSplit {...COPY} /></div></ModeFrame>,
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
            <div style={{ width: 1440, flexShrink: 0 }}><ServicesSplit {...COPY} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><ServicesSplit {...COPY} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
