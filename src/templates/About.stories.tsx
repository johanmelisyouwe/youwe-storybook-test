import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero, HeroBar } from '../components/components/Hero/Hero';
import { CardGrid } from '../components/components/CardGrid/CardGrid';
import { SystemCard } from '../components/components/ServiceCard/ServiceCard';
import { StatsBlock } from '../components/components/StatsBlock/StatsBlock';
import { Offices, type OfficesProps } from '../components/components/Offices/Offices';
import { Leadership } from '../components/components/Leadership/Leadership';
import { Awards } from '../components/components/Awards/Awards';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import { CLIENT_LOGOS, Page, Section, WORK_WITH_US, footer, header, logo, type Device, useDevice } from './shared';
import { abstract, caseImage } from '../media/media';

/*
  Templates/About Us — Figma "Page / About Us": Desktop 26661:7478, Mobile 26815:1094. Copy, props and order
  from figma/templates.js. The "Trusted by industry leaders" group is three sections in Figma (Stats intro
  only, the client logo bar, Stats with three client stats). Sub-footer: the desktop copy on both devices.
*/

const SYSTEMS = [
  ['01', 'Systems that drive revenue', 'Commerce platforms and experiences that help you reach customers and grow revenue.', 'Proven at BunzlOne · 800+ categories active', 'Digital Infrastructure'],
  ['02', 'Systems that optimize', 'Complex workflows turned into intelligent, efficient systems: less manual work, less risk.', 'Proven at Kingspan Insulated Panels · AI order intake into SAP', 'Operational Optimization & Intelligence'],
  ['03', 'Systems that scale', 'Data architectures and integration layers that connect systems, improve data quality and enable analytics and AI.', 'Proven at Quooker · 17 markets supported', 'Foundation for Data & Integrations'],
];

const SYSTEM_PHOTO: Record<string, string> = { '01': caseImage('bunzl'), '02': caseImage('kingspan-1'), '03': caseImage('quooker-1') };

const OFFICES: OfficesProps['offices'] = [
  { City: 'Rotterdam', Country: 'The Netherlands', Timezone: 'GMT+1', timeZone: 'Europe/Amsterdam' },
  { City: 'Groningen', Country: 'The Netherlands', Timezone: 'GMT+1', timeZone: 'Europe/Amsterdam' },
  { City: 'London', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Leeds', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Shrewsbury', Country: 'United Kingdom', Timezone: 'GMT+0', timeZone: 'Europe/London' },
  { City: 'Stockholm', Country: 'Sweden', Timezone: 'GMT+1', timeZone: 'Europe/Stockholm' },
  { City: 'Bandung', Country: 'Indonesia', Timezone: 'GMT+7', timeZone: 'Asia/Jakarta' },
  { City: 'Kyiv', Country: 'Ukraine', Timezone: 'GMT+2', timeZone: 'Europe/Kyiv' },
];

const PEOPLE = [
  ['Rob Wiek', 'CEO'], ['Rogier Hosman', 'CMO'], ['Pieter Halenbeek', 'COO'], ['Steve Hulmes', 'Board of Directors'],
  ['Anneloes van der Wal', 'CHRO'], ['Erwin Idelenburg', 'CCO'], ['Jitze Bakker', 'CTO'], ['Tjitte Folkertsma', 'CGO'],
  ['Nathalie Seffinga', 'Operations manager NL'], ['Steve Hoyle', 'Operations manager UK'],
].map(([name, role]) => ({ name, role }));

const BADGES = [{ name: 'Northern Digital Award' }, { name: 'LRQA certificate' }, { name: 'Award-winning B2B implementation' }, { name: 'Great Place To Work' }];

function AboutPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  return (
    <Page Device={story}>
      <Hero
        Device={Device}
        image={abstract('015')}
        title={['Youwe, an international full service digital agency']}
        body="At Youwe, we build intelligent digital platforms that connect data, optimize processes, and integrate AI. We help businesses create digital ecosystems for sustainable growth."
        label={{ Type: 'Subtitle', Subtitle: 'About Us' }}
        buttons={[{ label: 'Careers', href: '#' }, { label: 'What we build', href: '#' }]}
        header={header(Device)}
      />
      <Section Mode="Light">
        <CardGrid
          Layout="3 columns"
          Device={Device}
          intro={{ Layout: 'Split', Kicker: 'What we build', Title: 'Three practices,\nevery industry.', Body: 'Everything we do comes down to three systems. Most clients run more than one.' }}
          cells={SYSTEMS.map(([Eyebrow, Title, Description, Caption, link]) => (
            <SystemCard key={Title} image={SYSTEM_PHOTO[Eyebrow]} Eyebrow={Eyebrow} Title={Title} Description={Description} Caption={Caption} link={link} {...{ 'Hover CTA': 'Explore the system', 'Hover context': link }} href="#" />
          ))}
        />
      </Section>
      <Section Mode="Dark">
        <StatsBlock
          Type="Plain"
          Device={Device}
          intro={{ kicker: 'Global thinking, local understanding', title: 'We’re a driven collective of over 250 specialists. Big enough to cover every digital discipline, yet close enough to truly understand the specifics of your business. Together, we create digital ecosystems that drive lasting growth.' }}
          stats={[{ Value: '250+', Label: 'Specialists across every digital discipline' }, { Value: '8', Label: 'Offices in the Netherlands, the UK, Sweden, Indonesia and Ukraine' }]}
        />
      </Section>
      <Section Mode="Dark">
        <Offices Device={Device} Kicker="Our offices" Title="Eight offices, one team" Body="Live local time in every Youwe office. Whatever the hour, someone on the team is at work." offices={OFFICES} />
      </Section>
      <Section Mode="Dark">
        <Leadership Device={Device} kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} />
      </Section>
      <Section Mode="Dark">
        <StatsBlock Type="Plain" Device={Device} intro={{ kicker: 'Trusted by industry leaders', title: 'Everything we do is focused on delivering exceptional results for our clients. We strongly believe in being part of the client team and playing a crucial role in their continuous evolution and digital improvement.' }} stats={[]} />
        <HeroBar Type="Logos" logos={CLIENT_LOGOS.map((n) => logo(n, 118))} />
        <StatsBlock
          Type="Client"
          Device={Device}
          stats={[
            { Value: '20,000', Label: 'Enriched products', logo: logo('Chadwicks'), href: '#' },
            { Value: '+480%', Label: 'eCommerce revenue', logo: logo('Elektrototaalmarkt'), href: '#' },
            { Value: '93%', Label: 'Average match score', logo: logo('Symson'), href: '#' },
          ]}
        />
        <Awards Device={Device} Title="Trusted by industry leaders" badges={BADGES} />
      </Section>
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('005')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/About Us',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'About Us page template: hero, the three systems, team stats, offices with live clocks, leadership, clients (logos and stats), awards, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <AboutPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <AboutPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
