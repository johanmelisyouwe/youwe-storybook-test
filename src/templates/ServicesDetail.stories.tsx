import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ReactNode } from 'react';
import { Hero } from '../components/components/Hero/Hero';
import { FeatureList } from '../components/components/FeatureList/FeatureList';
import { CardGrid, type CardGridProps } from '../components/components/CardGrid/CardGrid';
import { FeatureCard, type FeatureCardProps } from '../components/components/FeatureCard/FeatureCard';
import { CaseCard } from '../components/components/CaseCard/CaseCard';
import { QuoteCard } from '../components/components/QuoteCard/QuoteCard';
import { Stat } from '../components/components/Stat/Stat';
import { StatsBlock } from '../components/components/StatsBlock/StatsBlock';
import { ServiceCard } from '../components/components/ServiceCard/ServiceCard';
import { TechnologyLogos } from '../components/components/TechnologyLogos/TechnologyLogos';
import { AskSnippet } from '../components/components/AskYouwe/AskYouwe';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import type { Mode } from '../components/shared/ModeFrame';
import { Page, Section, WORK_WITH_US, footer, header, logo, type Device } from './shared';

/*
  Templates/Services detail (B2B Enterprise Commerce) — Figma "Page / Services detail": Desktop 26875:18627,
  Mobile 26920:28. Copy, props and order from figma/templates.js. The Figma mobile frame is a longer,
  different composition (more sections: building-block case, How we work, a second proof, FAQ); each
  device follows its own frame. Sub-footer: the desktop copy on both devices.
*/

const HERO_STATS = [
  { value: '75%', label: 'Increase in online orders', client: 'Unipart Autoparts' },
  { value: '800+', label: 'Categories active', client: 'BunzlOne' },
  { value: '16%', label: 'Conversion rate improvement', client: 'Elektrototaalmarkt' },
  { value: '+43%', label: 'Marketable catalog uplift', client: 'Chadwicks Group' },
];

const BENEFITS: [string, string][] = [
  ['Time for account management', 'Buyers order on their own; sales gets time for advice.'],
  ['Operational efficiency', 'Less manual order handling and customer service load.'],
  ['Scale without limits', 'Add customers, ranges, markets and channels.'],
  ['Faster time to market', 'Proven patterns for ERP, PIM and pricing.'],
];
const BLOCKS: [string, string, string[]?][] = [
  ['B2B webshops & procurement portals', 'One curated front door where professional buyers find and order.', ['Proven at BunzlOne', '800+ categories active']],
  ['Dealer & distributor portals', 'Role-based pricing, stock and technical drawings for dealers.', ['Proven at PePe Parts']],
  ['Trade accounts & buyer roles', 'Account hierarchies, buyer roles and trade-only login.', ['Proven at Glenway']],
  ['Contract & customer pricing', 'Customer groups and shared catalogs with their own prices.', ['Proven at JC-Electronics']],
  ['Bulk orders & quick reorders', 'Bulk order forms, order history and buying on account.', ['Proven at Elektrototaalmarkt', '16% conversion rate improvement']],
  ['ERP integration', 'Prices, stock and orders stay in line with your ERP.', ['Proven at Unipart Autoparts', '75% increase in online orders']],
  ['PIM & product data', 'Rich, consistent product data for every channel.', ['Proven at Chadwicks Group', '+43% marketable catalog uplift']],
  ['Multi-store, multi-market', 'Own catalog and conditions per market, on one platform.', ['Proven at Schneider Electric']],
];
const CHALLENGES: [string, string, string][] = [
  ['A legacy platform that limits growth', 'Adding customers, assortments and markets takes months.', 'We move B2B commerce to a composable architecture your team can change.'],
  ['Complex pricing and ordering', 'Manual order handling and inconsistent prices erode margin.', 'Self-service portals with customer pricing, contracts and 24/7 ordering.'],
  ['Commerce, ERP and PIM that do not match', 'Each system holds its own prices, stock and customers.', 'We connect commerce to ERP and PIM so the data stays in line.'],
  ['Buyers who still phone and email', 'A portal harder than a phone call does not get used.', 'Journeys built around reorders, order lists, approvals and invoices.'],
  ['New markets, new rules', 'Each market needs its own language, payments and range.', 'Multi-store B2B: one platform, a catalog and conditions per market.'],
];
const STATS = [
  { Value: '50%', Label: 'Fewer phone calls', logo: logo('Chadwicks'), href: '#' },
  { Value: '73%', Label: 'Efficiency improvement', logo: logo('Elektrototaalmarkt'), href: '#' },
  { Value: '3,360', Label: 'Man-hours saved', logo: logo('Chadwicks'), href: '#' },
  { Value: '8', Label: 'Months to a live MVP', logo: logo('BunzlOne'), href: '#' },
];
const MORE_CASES: [string, string][] = [
  ['A dealer portal with personalized pricing and technical drawings', 'PePe Parts'],
  ['One Adobe Commerce instance for the webshops of several countries', 'Schneider Electric'],
  ['A trade store where trade customers order from the full range', 'Glenway'],
  ['Online sales for a distributor network, connected to a custom ERP', 'JC-Electronics'],
];
const RELATED: [string, string, string][] = [
  ['01 · Infrastructure', 'PIM/MDM', 'One source of truth for product, customer and supplier data.'],
  ['01 · Infrastructure', 'Customer & Partner Portals', 'Self-service, dealer portals and knowledge bases.'],
  ['01 · Infrastructure', 'D2C Commerce', 'Sell direct to consumers, alongside dealers and retail.'],
  ['02 · Optimization', 'Pricing Intelligence', 'AI-driven pricing and margin excellence.'],
  ['03 · Data & Integrations', 'Data Engineering & API', 'Pipelines, APIs and the integration layer.'],
  ['03 · Data & Integrations', 'ACI Weave', 'Our own platform for governed AI agents on your systems.'],
];
const STEPS: [string, string, string][] = [
  ['Discover', 'Business goals, buyer journeys and integration dependencies first.', 'Workshops'],
  ['Design', 'Account model, pricing logic and who owns which data: ERP, PIM or commerce.', 'Blueprint'],
  ['Build & integrate', 'Core integrations and high-value journeys first, through stable APIs.', 'BunzlOne: live MVP in 8 months'],
  ['Launch without disruption', 'Accounts, contract prices, order history, SEO and redirects move with care.', 'Elektrototaalmarkt: rebuild planned around daily orders'],
  ['Grow', 'Measure self-service adoption, online share, reorders and quote turnaround.', 'Continuous improvement'],
];
const FAQ: [string, string][] = [
  ['What problems does B2B enterprise commerce solve?', 'It replaces manual ordering, scattered price lists and disconnected systems with account-specific pricing, complex catalogs, approvals and self-service purchasing, so buyers order quickly and your teams spend less time on routine orders.'],
  ['Can dealers, distributors and direct buyers use one platform?', 'Yes. Account hierarchies, roles and customer-specific catalogs let one platform serve each group with its own prices and range. Separate portals still make sense when buying processes differ strongly.'],
  ['How does B2B commerce integrate with ERP, PIM and CRM?', 'ERP usually stays the source for pricing, stock, customers and finance; PIM enriches product content. CRM, payment and search connect through stable APIs, with clear ownership of each data domain.'],
  ['How do quote-to-order flows work?', 'A buyer requests a quote, sales adjusts prices or conditions, and the approved quote becomes an order without retyping. Quotes and orders use the same pricing logic, so they match.'],
  ['What should we consider when replatforming?', 'Business priorities, integration dependencies and the risk to daily ordering. Plan accounts, contract prices, order history, product data, SEO and redirects, and migrate in phases: core integrations and high-value journeys first.'],
  ['How do we measure ROI?', 'Self-service adoption, order processing cost, share of online orders, reorder rate, quote turnaround and time to onboard customers or markets, tied to clear commercial goals.'],
];
const TECH = ['Adobe', 'Hyvä', 'Commercetools', 'Shopify', 'Pimcore', 'Alumio', 'Symson', 'Storyblok'].map((name) => ({ name }));

const fc = (p: FeatureCardProps) => <FeatureCard key={p.Title} {...p} />;
type Flush = 'top' | 'bottom' | 'both';
const grid = (Mode: Mode, props: Omit<CardGridProps, 'cells'> & { cells: ReactNode[] }, flush?: Flush) => <Section Mode={Mode} flush={flush}><CardGrid {...props} /></Section>;
const num = (i: number) => String(i + 1).padStart(2, '0');

const UNIPART = (Device: Device, Size: 'Two thirds' | 'One third') => (
  <CaseCard key="unipart" Size={Size} Device={Device} Title="A Magento platform for motorists and partner garages, linked to SAP" Client="Unipart Autoparts" logo={logo('Unipart Autoparts')} stat={{ value: '75%', label: 'Increase in online orders' }} tags={['Automotive', 'Magento · SAP']} href="#" />
);
const UNIPART_QUOTE = <QuoteCard key="quote" Quote="“Garage owners can easily search parts, have a look at the available stock and spread out their ordering throughout the day.”" Name="James Billington" Role="eCommerce Consultant, Unipart Autoparts" />;

function Shared({ Device }: { Device: Device }) {
  return (
    <>
      {grid('Dark', { Layout: '4 columns', Device, cells: MORE_CASES.map(([Title, Client]) => <CaseCard key={Title} Size="One quarter" Device={Device} Title={Title} Client={Client} logo={logo(Client)} href="#" />) }, 'top')}
      <Section Mode="Light">
        <TechnologyLogos Layout="Grid 4" Device={Device} Title="Platforms we build B2B on." logos={TECH} />
      </Section>
      {grid('Dark', {
        Layout: '3 columns', Device,
        intro: { Layout: 'Split', Kicker: 'Related services', Title: 'Works best together with.', Body: 'Each tile opens its practice in the services overview.' },
        cells: RELATED.map(([Eyebrow, Title, Description]) => <ServiceCard key={Title} Eyebrow={Eyebrow} Title={Title} Description={Description} {...{ 'Hover CTA': 'Explore the service' }} href="#" />),
      })}
    </>
  );
}

function DesktopBody() {
  const Device = 'Desktop' as const;
  return (
    <>
      <Section Mode="Dark">
        <FeatureList Layout="Split" Device={Device} kicker="Why B2B commerce" heading="Buyers order on their terms. Your team sells." body="Professional buyers want their own catalog, prices and approvals, any time of day." items={BENEFITS.map(([Title, Description], i) => ({ Number: num(i), Title, Description }))} />
      </Section>
      {grid('Light', {
        Layout: 'Feature + 4', Device,
        intro: { Layout: 'Split', Kicker: 'What we build', Title: 'B2B commerce building blocks', Body: 'Open a tile for the detail and the client it runs for.' },
        cells: BLOCKS.slice(0, 5).map(([Title, Description], i) => fc({ Variant: 'Card', Title, Description, 'Show arrow': true, image: i === 0 || undefined, link: i === 2 ? { label: 'View case study', href: '#' } : undefined })),
      }, 'bottom')}
      {grid('Light', { Layout: '3 columns', Device, cells: BLOCKS.slice(5).map(([Title, Description]) => fc({ Variant: 'Card', Title, Description, 'Show arrow': true })) }, 'top')}
      {grid('Dark', {
        Layout: '3 columns', Device,
        intro: { Layout: 'Split', Kicker: 'Challenges we solve', Title: 'Where B2B ordering gets stuck.', Body: 'Open a tile to see the fix.' },
        cells: [...CHALLENGES.map(([Title, Description], i) => fc({ Variant: 'AI', Number: num(i), Title, Description, link: { label: 'Learn more', href: '#' } }))],
      })}
      {grid('Dark', {
        Layout: 'Wide + 1', Device,
        intro: { Layout: 'Split', Kicker: 'Proof', Title: 'Published results, client by client.', Body: 'Real clients, real numbers from their published cases.' },
        cells: [UNIPART(Device, 'Two thirds'), UNIPART_QUOTE],
      }, 'bottom')}
      <Section Mode="Dark" flush="both"><StatsBlock Type="Client" Device={Device} stats={STATS} /></Section>
      <Shared Device={Device} />
    </>
  );
}

function MobileBody() {
  const Device = 'Mobile' as const;
  const block = ([Title, Description, tags]: [string, string, string[]?], i: number) => fc({ Variant: 'Card', Number: num(i), Title, Description, tags, image: i === 0 || undefined });
  return (
    <>
      {grid('Light', {
        Layout: 'Feature + 4', Device,
        intro: { Layout: 'Split', Kicker: 'Why B2B commerce', Title: 'Buyers order on their terms. Your team sells.', Body: 'Professional buyers want their own catalog, prices and approvals, any time of day.' },
        cells: [
          fc({ Variant: 'Card', Title: 'The proposition', Description: 'We build the platform that gives buyers self-service, connected to the ERP and PIM you already run.', image: true }),
          ...BENEFITS.map(([Title, Description], i) => fc({ Variant: 'Card', Number: num(i), Title, Description })),
        ],
      })}
      {grid('Dark', {
        Layout: 'Feature + 4', Device,
        intro: { Layout: 'Split', Kicker: 'What we build', Title: 'Eight building blocks, one platform.', Body: 'Open a tile for the detail and the client it runs for.' },
        cells: BLOCKS.slice(0, 5).map(block),
      }, 'bottom')}
      {grid('Dark', { Layout: '3 columns', Device, cells: BLOCKS.slice(5).map((b, i) => block(b, i + 5)) }, 'both')}
      {grid('Dark', {
        Layout: 'Wide + 1', Device,
        cells: [
          <CaseCard key="etm" Device={Device} Title="A B2B and B2C webshop rebuilt without disrupting daily orders" Client="Elektrototaalmarkt" logo={logo('Elektrototaalmarkt')} stat={{ value: '73%', label: 'Efficiency improvement' }} tags={['Construction · electrical supplies', 'Magento 2']} href="#" />,
          <AskSnippet key="ask" Type="Question" Title="Do you build dealer portals?" />,
        ],
      }, 'top')}
      {grid('Light', {
        Layout: '3 columns', Device,
        intro: { Layout: 'Split', Kicker: 'Challenges we solve', Title: 'Where B2B ordering gets stuck.', Body: 'Open a tile to see the fix.' },
        cells: CHALLENGES.slice(0, 3).map(([Title, Description, fix], i) => fc({ Variant: 'Card', Number: `${num(i)} · The problem`, Title, Description: `${Description}\n\nHow we fix it: ${fix}` })),
      }, 'bottom')}
      {grid('Light', { Layout: '2 columns', Device, cells: CHALLENGES.slice(3).map(([Title, Description, fix], i) => fc({ Variant: 'Card', Number: `${num(i + 3)} · The problem`, Title, Description: `${Description}\n\nHow we fix it: ${fix}` })) }, 'top')}
      {grid('Dark', {
        Layout: '5 columns', Device,
        intro: { Layout: 'Split', Kicker: 'How we work', Title: 'Phased, so trading never stops.', Body: 'Core integrations and high-value journeys first, then grow.' },
        cells: STEPS.map(([Title, Description, tag], i) => fc({ Variant: 'Card', Number: String(i + 1), Title, Description, tags: [tag] })),
      })}
      {grid('Dark', {
        Layout: 'Wide + 1', Device,
        intro: { Layout: 'Split', Kicker: 'Proof', Title: 'Published results, client by client.', Body: 'Real clients, real numbers from their published cases.' },
        cells: [UNIPART(Device, 'Two thirds'), UNIPART_QUOTE],
      }, 'bottom')}
      {grid('Dark', { Layout: '4 columns', Device, cells: STATS.map((s, i) => <Stat key={s.Label} Type="Client" {...s} Label={i === 0 ? 'Fewer phone calls · Unipart Autoparts' : s.Label} />) }, 'both')}
      {grid('Dark', {
        Layout: 'Wide + 1', Device,
        cells: [
          <CaseCard key="chadwicks" Device={Device} Title="Product data enriched with Pimcore and AI for 50+ branches" Client="Chadwicks Group" logo={logo('Chadwicks Group')} stat={{ value: '+43%', label: 'Marketable catalog uplift' }} tags={['Construction · builders merchant', 'Pimcore · ACI Weave']} href="#" />,
          <QuoteCard key="quote2" Quote="“You don't build a new platform on your own. For that, you need partners who understand what you are building and why.”" Name="Frank Daamen" Role="Digital Director, BunzlOne" />,
        ],
      }, 'both')}
      <Shared Device={Device} />
      {grid('Light', {
        Layout: '3 columns', Device,
        intro: { Layout: 'Split', Kicker: 'FAQ', Title: 'Frequently asked questions.' },
        cells: [...FAQ.map(([Title, Description]) => fc({ Variant: 'Card', Title, Description })), <AskSnippet key="ask" Type="Question" Title="Can you integrate with our custom ERP?" />],
      })}
    </>
  );
}

function ServicesDetailPage({ Device }: { Device: Device }) {
  return (
    <Page Device={Device}>
      <Hero
        Device={Device}
        title={['B2B commerce, built', 'for how buyers order.']}
        body="B2B commerce for manufacturers, wholesalers and distributors: accounts, contract pricing, quotes, reorders, dealer portals and ERP and PIM integration."
        label={{ Type: 'Breadcrumb', crumbs: [{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'B2B Enterprise Commerce' }] }}
        buttons={[{ label: 'Get in touch', href: '#' }, { label: 'What we build', href: '#' }]}
        bar={{ Type: 'Stats', stats: HERO_STATS }}
        header={header(Device)}
      />
      {Device === 'Desktop' ? <DesktopBody /> : <MobileBody />}
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Services detail',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Service page template (B2B Enterprise Commerce): hero with breadcrumb and client stats, why, building blocks, challenges, proof, stats, more cases, platforms, related services, sub-footer and footer. Mobile adds How we work, a second proof and FAQ, as in Figma.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <ServicesDetailPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <ServicesDetailPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
