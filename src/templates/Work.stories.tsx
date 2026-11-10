import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { SectionIntro } from '../components/components/SectionHeader/SectionHeader';
import { FilterBar, type FilterBarProps } from '../components/components/FilterBar/FilterBar';
import { CardGrid } from '../components/components/CardGrid/CardGrid';
import { CaseCard } from '../components/components/CaseCard/CaseCard';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import '../components/shared/block.css';
import { Page, Section, WORK_WITH_US, footer, header, logo, type Device, useDevice } from './shared';
import { abstract, clientPhoto } from '../media/media';

/*
  Templates/Work — Figma "Page / Work": Desktop 26588:9829, Mobile 26809:1150. Copy, props and order from
  figma/templates.js. "Frame 4" / "Our work" is a wrapper around Section intro (Split) + Filter bar.
  Filter option lists are not in Figma; the dropdowns show "All" with example options.
  Sub-footer: the desktop copy on both devices.
*/

const SYSTEMS = ['eCommerce', 'Experience', 'Artificial Intelligence', 'Digital Marketing'];
const o = (...l: string[]) => l.map((x) => ({ value: x, label: x }));
const FIELDS: FilterBarProps['fields'] = [
  { label: 'Industries', options: o('Construction', 'Fashion & Lifestyle', 'Home & Living', 'Manufacturing', 'Travel', 'Wholesale') },
  { label: 'Offering', options: o('B2B Commerce', 'D2C Commerce', 'PIM/MDM', 'DXP', 'Customer & Partner Portals', 'AI agents') },
  { label: 'Themes', options: o('Replatforming', 'Internationalisation', 'Automation') },
  { label: 'Platforms', options: o('Adobe Commerce', 'Magento', 'Pimcore', 'Hyvä') },
  { label: 'Technologies', options: o('Alumio', 'ACI Weave', 'Symson') },
];

const CASES: [string, string, string[]][] = [
  ['Crafting a Scalable Design System for an Iconic Brand', 'G-Star RAW', ['DXP', 'Fashion & Lifestyle']],
  ['Seamless replatforming for Fairphone commerce platform', 'Fairphone', ['Magento', 'Adobe Commerce']],
  ['Schneider Electric: a Magento store for direct sales to consumers', 'Schneider Electric', ['Magento', 'Adobe Commerce']],
  ['From 60+ OpCos to one smart platform', 'BunzlOne', ['B2B Commerce', 'Wholesale']],
  ['Scaling product data with Pimcore & AI', 'Chadwicks Group', ['PIM/MDM', 'Construction']],
  ['From inbox to SAP: AI order intake', 'Kingspan Insulated Panels', ['AI agents', 'Construction']],
  ['Scaling smarter: a digital platform for global growth', 'Quooker', ['D2C Commerce', 'Home & Living']],
  ['Booking.com builds Partner Hub with Youwe', 'Booking.com', ['Customer & Partner Portals', 'Travel']],
  ['A PIM system and SAP integration', 'Heidelberg', ['PIM/MDM', 'Manufacturing']],
];

function WorkPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  return (
    <Page Device={story} ask="Which results did you get for clients?">
      <Hero
        Device={Device}
        image={abstract('001')}
        title={['Work that scales,', 'optimizes and drives revenue.']}
        body="We build the commerce and product data platforms, the AI workflows and the integrations behind them. For companies with a large catalog, many processes and data that has to be right."
        label={{ Type: 'Subtitle', Subtitle: 'Work' }}
        header={header(Device)}
      />
      <Section Mode="Dark">
        <section className="yw-block" aria-label="Our work">
          <div className="yw-block__inner" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--spacing-3xl)', paddingBottom: 0 }}>
            <SectionIntro Layout="Split" Kicker="Our work" Title={'Pick a system.\nSee it running.'} Body="Cases are tagged by system, industry and tech partner. Combine filters to narrow the results." />
            <FilterBar Device={Device} systems={SYSTEMS} system={Device === 'Desktop' ? 'eCommerce' : null} fields={FIELDS} count={9} />
          </div>
        </section>
        <CardGrid
          Layout="3 columns"
          Device={Device}
          label="Cases"
          cells={CASES.map(([Title, Client, tags]) => <CaseCard key={Title} Device={Device} Title={Title} Client={Client} logo={logo(Client === 'G-Star RAW' ? 'G-Star' : Client)} tags={tags} image={clientPhoto(Client)} href="#" />)}
        />
      </Section>
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('016')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Work',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Work overview template: hero, intro with the filter bar, a three-column grid of case cards, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <WorkPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <WorkPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
