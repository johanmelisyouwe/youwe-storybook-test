import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { VerticalSlider, type SlideData, type VerticalSliderProps } from '../components/components/VerticalSlider/VerticalSlider';
import { StatsBlock } from '../components/components/StatsBlock/StatsBlock';
import { CaseCarousel } from '../components/components/CaseCarousel/CaseCarousel';
import { TechnologyLogos } from '../components/components/TechnologyLogos/TechnologyLogos';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import type { CaseCardProps } from '../components/components/CaseCard/CaseCard';
import { CLIENT_LOGOS, NotAComponent, Page, Section, WORK_WITH_US, footer, header, logo, type Device } from './shared';
import { abstract, clientPhoto } from '../media/media';

/*
  Templates/Home — Figma "Page / Home": Desktop 26584:5280, Mobile 26805:3646. Copy, props and order from
  figma/templates.js. Images are placeholders (not imported yet).
  Vertical slider "What we do": Figma only fills chapter 1; chapters 2 and 3 use the copy from the v2 site
  screenshots (titles, bodies, pills), with the Figma index labels. "In their words": Figma has one quote; the
  other chapters show "Quote to follow" until the copy is supplied.
  Sub-footer and footer: the desktop copy is the correct one (decided 9 November) and is used on mobile too.
*/

const HERO_LOGOS = CLIENT_LOGOS.map((n) => logo(n, 118));

const practice = (n: string, name: string, Title: string, body: string, pills: string[]): SlideData => ({
  Type: 'Service', eyebrow: `${n} · ${name}`, Title, body, pills, button: { label: `Explore ${name}`, href: '#' },
});
const WHAT_WE_DO: VerticalSliderProps['items'] = [
  {
    label: 'Digital Infrastructure',
    slide: {
      Type: 'Service', eyebrow: '01 · Digital Infrastructure', Title: 'Build it.',
      body: 'Commerce, PIM, portals and experience platforms, connected to your ERP and built to carry more customers, products and markets.',
      pills: ['B2B Enterprise Commerce', 'D2C Commerce', 'PIM/MDM', 'Digital Experience (DXP)', 'Customer & Partner Portals', 'Cloud Architecture'],
      button: { label: 'Explore Digital Infrastructure', href: '#' },
    },
  },
  {
    label: 'Operational Optimization & Intelligence',
    slide: practice('02', 'Operational Optimization & Intelligence', 'Keep it running.',
      'AI agents, process mining and pricing tools that take repeat work off your teams. We automate the steps worth automating, and people approve the ones that matter.',
      ['Pricing Intelligence', 'Agentic AI', 'AI Process Intelligence', 'Contract & Supply Chain', 'Product Lifecycle Management (PLM)', 'Sustainability & ESG']),
  },
  {
    label: 'Foundation for Data & Integrations',
    slide: practice('03', 'Foundation for Data & Integrations', 'Connect it.',
      'Data architecture, APIs and governance, so your platforms, processes and AI all work from the same data.',
      ['Enterprise Data Architecture', 'Data Compliance & Security', 'Data Engineering & API', 'AI & Analytics']),
  },
];
const quote = (client: string): SlideData => ({ Type: 'Quote', quote: '“Quote to follow.”', name: client, button: { label: 'Read the case', href: '#' } });
const IN_THEIR_WORDS: VerticalSliderProps['items'] = [
  { label: 'BunzlOne', slide: { Type: 'Quote', quote: '“We turned the vision into a platform. Now we’re adding new customers and suppliers.”', name: 'Frank Daamen', role: 'Digital Director Bunzl & Founder of BunzlOne', button: { label: 'Read the case', href: '#' } } },
  { label: 'Chadwicks Group', slide: quote('Chadwicks Group') },
  { label: 'Thomas Telford', slide: quote('Thomas Telford') },
  { label: 'Symson', slide: quote('Symson') },
];

const STATS = [
  { Value: '+12.7%', Label: 'More checkout starts in the first UK post-launch comparison', logo: logo('Quooker'), href: '#' },
  { Value: '+43%', Label: 'Marketable catalog uplift', logo: logo('Chadwicks'), href: '#' },
  { Value: '800+', Label: 'Categories active', logo: logo('BunzlOne'), href: '#' },
  { Value: '+93%', Label: 'Average match score', logo: logo('Symson'), href: '#' },
];

const c = (Title: string, Client: string, stat?: [string, string]): CaseCardProps => ({ Title, Client, logo: logo(Client), image: clientPhoto(Client), stat: stat && { value: stat[0], label: stat[1] }, href: '#' });
const CASES: CaseCardProps[] = [
  c('From 60+ OpCos to one smart platform', 'BunzlOne', ['800+', 'categories active']),
  c('Scaling product data with Pimcore & AI', 'Chadwicks Group', ['+43%', 'marketable catalog uplift']),
  c('From inbox to SAP: AI order intake', 'Kingspan Insulated Panels'),
  c('Scaling smarter: a digital platform for global growth', 'Quooker', ['17', 'markets supported']),
  c('AI matching for pricing intelligence', 'Symson', ['93%', 'average match score']),
  c('Booking.com builds Partner Hub with Youwe', 'Booking.com', ['30', 'languages']),
  c('A PIM system and SAP integration', 'Heidelberg', ['3', 'SAP ERP systems integrated']),
  c('Adobe Commerce Headless implementation', 'PostNL', ['41%', 'IT cost reduction']),
];

const TECH = ['Pimcore', 'Adobe', 'Commercetools', 'HubSpot', 'Shopify', 'Hyvä', 'Alumio', 'Storyblok', 'Drupal', 'Symson', 'AWS', 'ACI Weave'].map((name) => ({ name, logo: logo(name, 110) }));


function HomePage({ Device }: { Device: Device }) {
  const mobile = Device === 'Mobile';
  return (
    <Page Device={Device}>
      <Hero
        Device={Device}
        image={abstract('016')}
        title={['Complex products.', 'Clear platforms.']}
        body="Digital transformation is about reshaping how platforms, processes, data and people work together. We design connected digital ecosystems and help teams adopt new ways of working, so change leads to lasting performance."
        label={{ Type: 'Subtitle', Subtitle: 'Business improvement agency' }}
        buttons={[{ label: 'See our work', href: '#' }, { label: 'What we do', href: '#' }]}
        bar={{ Type: 'Logos', logos: HERO_LOGOS }}
        header={header(Device)}
      />
      <Section Mode="Dark">
        <VerticalSlider Device={Device} Index="Right" Kicker="What we do" Tagline="Three kinds of work, built to fit together." items={WHAT_WE_DO} backgroundImage={mobile ? undefined : abstract('001')} {...{ 'Show progress': !mobile }} />
      </Section>
      <Section Mode="Light">
        <StatsBlock Type="Client" Device={Device} intro={{ kicker: 'What changed for our clients', title: 'Most of our clients have a large catalog, more than one market and an ERP that is staying put. We work with that.' }} stats={STATS} />
      </Section>
      <Section Mode="Dark">
        <CaseCarousel Layout="Scroll" Device={Device} Kicker="Selected work" Title="Commerce, portals and AI in production" button={{ label: 'All cases', href: '#' }} cases={CASES} />
      </Section>
      <Section Mode="Light">
        <VerticalSlider Device={Device} Index="Left" Kicker="In their words" Tagline={mobile ? undefined : 'What our clients say about working with us.'} items={mobile ? IN_THEIR_WORDS.slice(0, 3) : IN_THEIR_WORDS} />
      </Section>
      {mobile
        ? <NotAComponent name="ACI Weave · video + nudge" height={1637} uses={['Ask Youwe/Snippet', 'Button/Basic']} />
        : <NotAComponent name="Frame 6 (ACI Weave · videos + snippet)" height={1356} uses={['Ask Youwe/Snippet', 'Button/Basic']} />}
      <Section Mode="Light">
        <TechnologyLogos Layout="Default" Device={Device} Title="The technology we build on" Body="We pick the platform that fits your business, then connect it to the rest of your landscape." rows={['We pick the platforms', 'that fit your business']} logos={TECH} button={{ label: 'All tech partners', href: '#' }} />
      </Section>
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('008')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Home',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Home page template: hero with client logos, What we do slider, client stats, case reel, client quotes, ACI Weave section (not a component yet), technology logos, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <HomePage Device="Desktop" /> };
export const Mobile: Story = { render: () => <HomePage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
