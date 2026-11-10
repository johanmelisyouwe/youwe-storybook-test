import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { BuildYourStack } from '../components/components/BuildYourStack/BuildYourStack';
import { BUILD_YOUR_STACK } from '../components/components/BuildYourStack/buildYourStack.copy';
import { SectionIntro } from '../components/components/SectionHeader/SectionHeader';
import { TechPartnersSplit, type TechPartnersSplitProps } from '../components/components/TechPartnersSplit/TechPartnersSplit';
import type { TechnologyCardProps } from '../components/components/TechnologyCard/TechnologyCard';
import { AskSnippet } from '../components/components/AskYouwe/AskYouwe';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import '../components/shared/block.css';
import { CLIENT_LOGOS, Page, Section, WORK_WITH_US, footer, header, logo, type Device, useDevice } from './shared';
import { abstract, logoFor } from '../media/media';

/*
  Templates/Tech Partners — Figma "Page / Tech Partners": Desktop 26661:7114, Mobile 26816:2055. Copy,
  props and order from figma/templates.js. "Systems that optimize" and "Systems that drive revenue" are
  hand-built frames in Figma with the same structure as Tech partners split; they are built with that
  component (as decided for hand-built frames that match an existing component). The hero body is
  stand-in copy in Figma ("Intro text missing…"). Sub-footer: the desktop copy on both devices.
*/

type Card = [name: string, level?: string, description?: string, button?: boolean];
const cards = (list: Card[]): TechnologyCardProps[] => list.map(([Name, Level, Description, b]) => ({ Name, Level, Description, 'Show button': b, logo: logoFor(Name) ? logo(Name, 100) : undefined, 'Hover CTA': 'Go to partner page', 'Hover context': `${Name} at Youwe`, href: '#' }));

const SPLITS: (Omit<TechPartnersSplitProps, 'Device'> & { key: string })[] = [
  {
    key: 'scale',
    kicker: 'Foundation for Data & Integrations',
    title: 'Systems that scale',
    body: 'Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.',
    link: { label: 'Foundation for Data & Integrations services', href: '#' },
    snippets: <AskSnippet Type="Nudge" Title="Magento on a customized ERP? See how JC-Electronics connected it through Alumio." />,
    groups: [
      { label: 'Integration', partners: cards([['Alumio', undefined, 'iPaaS that connects ERP, PIM and commerce.']]) },
      { label: 'Data platforms', partners: cards([['Databricks', undefined, 'Governed data engineering, analytics and AI.'], ['Microsoft Fabric', undefined, 'A governed Microsoft data foundation.']]) },
      { label: 'Cloud', partners: cards([['AWS', undefined, 'Integrations, data flows and AI workloads.'], ['Google Cloud', undefined, 'Data, analytics and AI, including BigQuery.']]) },
    ],
  },
  {
    key: 'optimize',
    kicker: 'Operational Optimization & Intelligence',
    title: 'Systems that optimize',
    body: 'Complex workflows turned into intelligent, efficient systems: less manual work, less risk.',
    link: { label: 'Operational Optimization & Intelligence services', href: '#' },
    snippets: <AskSnippet Type="Question" Title="How do AI agents work with the systems we already have?" />,
    groups: [
      { label: 'AI & agents', partners: cards([['ACI Weave', 'Youwe platform', 'Our AI platform for governed agents.'], ['OpenAI', undefined, 'OpenAI models inside ACI Weave workflows.', true]]) },
      { label: 'Automation', partners: cards([['n8n', undefined, 'Visual workflows for apps, data and AI.', true]]) },
      { label: 'Pricing', partners: cards([['Symson', undefined, 'AI-driven pricing for better margins.', true]]) },
    ],
  },
  {
    key: 'revenue',
    kicker: 'Digital Infrastructure',
    title: 'Systems that drive revenue',
    body: 'Commerce platforms and experiences that help you reach customers and grow revenue.',
    link: { label: 'Digital Infrastructure services', href: '#' },
    snippets: <AskSnippet Type="Question" Title="Which commerce platform fits a B2B business like ours?" />,
    groups: [
      { label: 'Commerce', partners: cards([['Adobe'], ['Commercetools'], ['Hyvä Magento themes', 'Gold Partner'], ['Shopify Plus', 'Certified Partner'], ['Spryker', undefined, undefined, true]]) },
      { label: 'Product data & content', partners: cards([['Pimcore', 'Strategic Partner'], ['Drupal', 'Certified Partner'], ['Contentful']]) },
      { label: 'Marketing & CRM', partners: cards([['HubSpot Customer Platform'], ['DotDigital'], ['Salesforce'], ['Klaviyo', 'Certified Partner', undefined, true]]) },
      { label: 'Search & feeds', partners: cards([['Algolia', undefined, undefined, true], ['Tweakwise', undefined, undefined, true], ['Klevu', undefined, undefined, true], ['Channable']]) },
      { label: 'Payments & shipping', partners: cards([['Adyen'], ['Buckaroo'], ['Mollie', undefined, undefined, true], ['Sendcloud', 'Premium Partner', undefined, true]]) },
      { label: 'Hosting', partners: cards([['Hypernode', 'Platinum Partner', undefined, true]]) },
    ],
  },
];

function TechPartnersPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  return (
    <Page Device={story}>
      <Hero
        Device={Device}
        image={abstract('007')}
        title={['Systems that scale', 'and optimize.']}
        body="Intro text missing, lorem ipsum dolor sit amet. For consistency we should put something relevant for industry section here." /* legacy-ok: stand-in copy in the Figma template, reported */
        label={{ Type: 'Subtitle', Subtitle: 'Tech Partners' }}
        buttons={[{ label: 'Build your stack', href: '#' }, { label: 'All partners', href: '#' }]}
        bar={{ Type: 'Logos', logos: CLIENT_LOGOS.map((n) => logo(n, 118)) }}
        header={header(Device)}
      />
      <Section Mode="Dark">
        <BuildYourStack Device={Device} {...BUILD_YOUR_STACK} />
      </Section>
      <Section Mode="Light">
        <section className="yw-block" aria-label="All partners">
          <div className="yw-block__inner" style={{ paddingBottom: 0 }}>
            <SectionIntro Layout="Split" Kicker="All partners" Title={'Three systems,\nthirty partners.'} Body="Grouped by our proposition. Levels as stated on youweagency.com." />
          </div>
        </section>
        {SPLITS.map(({ key, ...s }) => <TechPartnersSplit key={key} Device={Device} {...s} />)}
      </Section>
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('004')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Tech Partners',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Tech Partners template: hero, Build your stack, all partners grouped by the three systems (Tech partners split), sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <TechPartnersPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <TechPartnersPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
