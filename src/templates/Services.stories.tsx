import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { ServicesSplit, type ServicesSplitProps } from '../components/components/ServicesSplit/ServicesSplit';
import { AskSnippet } from '../components/components/AskYouwe/AskYouwe';
import { CaseCarousel } from '../components/components/CaseCarousel/CaseCarousel';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import type { CaseCardProps } from '../components/components/CaseCard/CaseCard';
import { OFFICES, Page, Section, footer, header, logo, type Device, useDevice } from './shared';
import { abstract, caseImage, clientPhoto } from '../media/media';

/*
  Templates/Services — Figma "Page / Services": Desktop 26586:8230, Mobile 26809:28. Copy, props and order
  from figma/templates.js. The mobile practices use longer copy and a second Ask Youwe snippet in Figma.
*/

const STATS = [
  { value: '17', label: 'markets supported', client: 'Quooker' },
  { value: '−86%', label: 'response time', client: 'De Heus Animal Nutrition' },
  { value: '93%', label: 'average match score', client: 'Symson' },
  { value: '41%', label: 'IT cost reduction', client: 'PostNL' },
  { value: '43%', label: 'marketable catalog uplift', client: 'Chadwicks' },
];

const services = (items: [string, string][]): ServicesSplitProps['services'] =>
  items.map(([Title, Description], i) => ({ Eyebrow: String(i + 1).padStart(2, '0'), Title, Description, 'Hover CTA': 'Explore the service', href: '#' }));
const snippet = <AskSnippet Type="Case" Title="Scaling smart: Quooker’s expansion to 17 countries" Meta="Case · Quooker" image={caseImage('quooker-1')} />;
const snippets = <>{snippet}<AskSnippet Type="Question" Title="How did Kingspan connect its systems with AI agents?" /></>;
type Practice = Omit<ServicesSplitProps, 'Device'> & { Mode: 'Dark' | 'Light' };
const PRACTICES: Practice[] = [
  {
    Mode: 'Dark', kicker: 'Practice 01', title: 'Digital Infrastructure',
    body: 'We build digital platforms that directly support revenue growth and strengthen market position.', snippets: snippet,
    services: services([
      ['B2B Enterprise Commerce', 'Accounts, contract pricing, quotes and portals.'],
      ['D2C Commerce', 'Sell direct to consumers, alongside dealers and retail.'],
      ['PIM/MDM', 'One source of truth for product, customer and supplier data.'],
      ['Digital Experience (DXP)', 'Personalized experiences across every touchpoint.'],
      ['Customer & Partner Portals', 'Self-service, dealer portals and knowledge bases.'],
      ['Cloud Architecture', 'Scalable cloud for applications and ML workloads.'],
    ]),
  },
  {
    Mode: 'Light', kicker: 'Practice 02', title: 'Operational Optimization & Intelligence',
    body: 'We help businesses improve how they operate, from faster processes to stronger profitability.', snippets: snippet,
    services: services([
      ['Pricing Intelligence', 'AI-driven pricing and margin excellence.'],
      ['Agentic AI', 'AI agents that run complex workflows end to end.'],
      ['AI Process Intelligence', 'Process mining and automation with measurable impact.'],
      ['Contract & Supply Chain', 'Contract analysis, obligations and supplier risk.'],
      ['Product Lifecycle Management (PLM)', 'From concept to retirement, with compliance built in.'],
      ['Sustainability & ESG', 'Compliance data and workflows for ESG reporting.'],
    ]),
  },
  {
    Mode: 'Dark', kicker: 'Practice 03', title: 'Foundation for Data & Integrations',
    body: 'We help businesses build strong data and integration foundations that enable growth at scale.', snippets: snippet,
    services: services([
      ['Enterprise Data Architecture', 'The data foundation for AI and analytics at scale.'],
      ['Data Compliance & Security', 'Governance, access control and GDPR-aligned handling.'],
      ['Data Engineering & API', 'Pipelines, APIs and the integration layer.'],
      ['AI & Analytics', 'Predictive models and AI-powered decisions.'],
      ['ACI Weave', 'Our own platform for governed AI agents on your systems.'],
    ]),
  },
];

/* Mobile template copy (Figma 26809:28) */
const MOBILE: Practice[] = [
  {
    ...PRACTICES[0], snippets,
    body: 'We build digital platforms that directly support revenue growth and strengthen market position. From advanced commerce systems to AI-powered infrastructure, we create the backbone modern businesses need to operate, scale, and compete in markets that keep moving faster.',
    services: services([
      ['B2B Enterprise Commerce', 'B2B webshops and procurement portals with customer-specific pricing, quote-to-order and 24/7 self-service ordering.'],
      ['D2C Commerce', 'B2B2C and B2C commerce for brands and manufacturers that sell to consumers directly, on their own or alongside dealers and retailers.'],
      ['PIM/MDM', 'One source of truth for your product and master data, from PIM to customer and supplier records.'],
      ['Digital Experience (DXP)', 'Digital experience platforms that combine content management, personalization and marketing automation.'],
      ['Customer & Partner Portals', 'Self-service portals that bring information together for your customers and partners.'],
      ['Cloud Architecture', 'Scalable cloud architectures for your applications and machine learning workloads, from development to production.'],
    ]),
  },
  {
    ...PRACTICES[1], snippets,
    body: 'We help businesses improve how they operate, from faster processes to stronger profitability. By automating the right steps, we reduce bottlenecks and help companies respond faster to market changes.',
    services: services([
      ['Pricing Intelligence', 'Pricing systems that combine real-time market data, customer behavior and AI to support your pricing decisions.'],
      ['Agentic AI', 'AI agents that understand context and take work off your hands in your own processes.'],
      ['AI Process Intelligence', 'Process mining, intelligent automation and AI that show how your processes actually run.'],
      ['Contract & Supply Chain', 'AI for contract analysis and obligations, with visibility into supplier risk and regulatory requirements.'],
      ['Product Lifecycle Management (PLM)', 'PLM that connects engineering, manufacturing and supply chain, from concept to retirement.'],
      ['Sustainability & ESG', 'Platforms for CSRD reporting, carbon tracking and ESG performance management.'],
    ]),
  },
  {
    ...PRACTICES[2], snippets,
    body: 'We help businesses build strong data and integration foundations that enable growth at scale. By removing silos and reducing dependence on legacy infrastructure, we help organisations operate more efficiently and adapt more easily.',
    services: services([
      ['Enterprise Data Architecture', 'Cloud data warehouses, data lakes and data mesh architectures that are scalable and governed.'],
      ['Data Engineering & API', 'Data pipelines, data cleansing and enrichment, and the APIs that connect your systems.'],
      ['ACI Weave', 'Youwe\'s own AI platform for governed AI workflows, connected to your systems.'],
      ['Data Compliance & Security', 'Data governance, access control and audit logging, with data handling aligned with the GDPR.'],
      ['AI & Analytics', 'Analytics platforms and predictive models that turn your data into decisions.'],
    ]),
  },
];

const CASES: CaseCardProps[] = [
  ['Schneider Electric: a Magento store for direct sales to consumers', 'Schneider Electric'],
  ['Crafting a Scalable Design System for an Iconic Brand', 'G-Star'],
  ['Seamless replatforming for Fairphone commerce platform', 'Fairphone'],
].map(([Title, Client]) => ({ Title, Client: Client === 'G-Star' ? 'G-Star RAW' : Client, logo: logo(Client), image: clientPhoto(Client), href: '#' }));

function ServicesPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  const mobile = Device === 'Mobile';
  return (
    <Page Device={story}>
      <Hero
        Device={Device}
        image={abstract('003')}
        title={['Platforms, processes', 'and data, connected.']}
        body="Digital transformation is about reshaping how platforms, processes, data and people work together. We design connected digital ecosystems and help teams adopt new ways of working, so change leads to lasting performance."
        label={{ Type: 'Subtitle', Subtitle: 'Services' }}
        buttons={mobile ? [{ label: 'See our work', href: '#' }, { label: 'Explore our practices', href: '#' }] : [{ label: 'Explore our practices', href: '#' }]}
        bar={{ Type: 'Stats', stats: STATS }}
        header={header(Device)}
      />
      {(mobile ? MOBILE : PRACTICES).map(({ Mode, ...p }) => <Section key={p.title} Mode={Mode}><ServicesSplit Device={Device} {...p} /></Section>)}
      <Section Mode="Dark">
        <CaseCarousel Layout="Full width 3" Device={Device} Kicker="Selected work" Title="Commerce, portals and AI in production" button={{ label: 'All cases', href: '#' }} cases={CASES} />
      </Section>
      <ContactCTA
        Variant="Sub-footer background"
        Device={Device}
        title="Where does growth get stuck?"
        body="Tell us what you want to achieve and we will think along with you."
        primary={{ label: 'Contact us', href: '#' }}
        secondary={{ label: 'Submit an RFP', href: '#' }}
        offices={OFFICES}
        image={abstract('005')}
      />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Services',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Services page template: hero with client stats, the three practices (Services split, alternating dark/light), selected cases, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <ServicesPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <ServicesPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
