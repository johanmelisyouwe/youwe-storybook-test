import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ReactNode } from 'react';
import { Hero } from '../components/components/Hero/Hero';
import { FeatureList } from '../components/components/FeatureList/FeatureList';
import { CardGrid, type CardGridProps } from '../components/components/CardGrid/CardGrid';
import { FeatureCard, type FeatureCardProps } from '../components/components/FeatureCard/FeatureCard';
import { CaseCard } from '../components/components/CaseCard/CaseCard';
import { QuoteCard } from '../components/components/QuoteCard/QuoteCard';
import { StatsBlock } from '../components/components/StatsBlock/StatsBlock';
import { ServiceCard } from '../components/components/ServiceCard/ServiceCard';
import { TechnologyLogos } from '../components/components/TechnologyLogos/TechnologyLogos';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import type { Mode } from '../components/shared/ModeFrame';
import { Page, Section, WORK_WITH_US, footer, header, logo, type Device, useDevice } from './shared';
import { abstract, caseImage, clientPhoto } from '../media/media';

/*
  Templates/Services detail (B2B Enterprise Commerce) — Figma "Page / Services detail": Desktop 26875:18627,
  Mobile 26920:28. Copy, props and order from figma/templates.js. Desktop is leading (decided 9 November):
  mobile shows the desktop composition in the mobile variants; the Figma mobile frame has extra sections
  (How we work, a second proof, FAQ) that are not used. Sub-footer: the desktop copy on both devices.
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
  { Value: '50%', Label: 'Fewer phone calls', logo: logo('Chadwicks', 80), href: '#' },
  { Value: '73%', Label: 'Efficiency improvement', logo: logo('Elektrototaalmarkt', 80), href: '#' },
  { Value: '3,360', Label: 'Man-hours saved', logo: logo('Chadwicks', 80), href: '#' },
  { Value: '8', Label: 'Months to a live MVP', logo: logo('BunzlOne', 80), href: '#' },
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
const TECH = ['Adobe', 'Hyvä', 'Commercetools', 'Shopify', 'Pimcore', 'Alumio', 'Symson', 'Storyblok'].map((name) => ({ name, logo: logo(name, 118) }));

const fc = (p: FeatureCardProps) => <FeatureCard key={p.Title} {...p} />;
type Flush = 'top' | 'bottom' | 'both';
const grid = (Mode: Mode, props: Omit<CardGridProps, 'cells'> & { cells: ReactNode[] }, flush?: Flush) => <Section Mode={Mode} flush={flush}><CardGrid {...props} /></Section>;
const num = (i: number) => String(i + 1).padStart(2, '0');

const UNIPART = (Device: Device, Size: 'Two thirds' | 'One third') => (
  <CaseCard key="unipart" Size={Size} Device={Device} Title="A Magento platform for motorists and partner garages, linked to SAP" Client="Unipart Autoparts" logo={logo('Unipart Autoparts')} stat={{ value: '75%', label: 'Increase in online orders' }} tags={['Automotive', 'Magento · SAP']} image={caseImage('unipart', Size === 'Two thirds' ? 'wide' : 'portrait')} href="#" />
);
const UNIPART_QUOTE = <QuoteCard key="quote" Quote="“Garage owners can easily search parts, have a look at the available stock and spread out their ordering throughout the day.”" Name="James Billington" Role="eCommerce Consultant, Unipart Autoparts" />;

function Shared({ Device }: { Device: Device }) {
  return (
    <>
      {grid('Dark', { Layout: '4 columns', Device, cells: MORE_CASES.map(([Title, Client]) => <CaseCard key={Title} Size="One quarter" Device={Device} Title={Title} Client={Client} logo={logo(Client)} image={clientPhoto(Client)} href="#" />) }, 'top')}
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

function Body({ Device }: { Device: Device }) {
  return (
    <>
      <Section Mode="Dark">
        <FeatureList Layout="Split" Device={Device} kicker="Why B2B commerce" heading="Buyers order on their terms. Your team sells." body="Professional buyers want their own catalog, prices and approvals, any time of day." items={BENEFITS.map(([Title, Description], i) => ({ Number: num(i), Title, Description }))} />
      </Section>
      {grid('Light', {
        Layout: 'Feature + 4', Device,
        intro: { Layout: 'Split', Kicker: 'What we build', Title: 'B2B commerce building blocks', Body: 'Open a tile for the detail and the client it runs for.' },
        cells: BLOCKS.slice(0, 5).map(([Title, Description], i) => fc({ Variant: 'Card', Title, Description, 'Show arrow': true, image: i === 0 ? caseImage('bunzl') : undefined, link: i === 2 ? { label: 'View case study', href: '#' } : undefined })),
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

function ServicesDetailPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  return (
    <Page Device={story}>
      <Hero
        Device={Device}
        image={abstract('008')}
        title={['B2B commerce, built', 'for how buyers order.']}
        body="B2B commerce for manufacturers, wholesalers and distributors: accounts, contract pricing, quotes, reorders, dealer portals and ERP and PIM integration."
        label={{ Type: 'Breadcrumb', crumbs: [{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'B2B Enterprise Commerce' }] }}
        buttons={[{ label: 'Get in touch', href: '#' }, { label: 'What we build', href: '#' }]}
        bar={{ Type: 'Stats', stats: HERO_STATS }}
        header={header(Device)}
      />
      <Body Device={Device} />
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('005')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Services detail',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Service page template (B2B Enterprise Commerce): hero with breadcrumb and client stats, why, building blocks, challenges, proof, stats, more cases, platforms, related services, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <ServicesDetailPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <ServicesDetailPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
