import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { CardGrid } from '../components/components/CardGrid/CardGrid';
import { InsightCard } from '../components/components/InsightCard/InsightCard';
import { UpcomingEvents, type EventItem } from '../components/components/UpcomingEvents/UpcomingEvents';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import { CLIENT_LOGOS, NotAComponent, Page, logo, Section, WORK_WITH_US, footer, header, type Device, useDevice } from './shared';
import { abstract } from '../media/media';

/*
  Templates/Insights — Figma "Page / Insights": Desktop 26661:7306, Mobile 26816:3024. Copy, props and
  order from figma/templates.js. Desktop: everything between hero and sub-footer is one hand-built frame
  ("Insights · content"). Mobile: "Latest" is a Card grid (Wide + 1); "All insights" is hand-built.
  Both hand-built parts are placeholders. The hero shows the logo bar on mobile only, as in Figma. Sub-footer: the desktop copy on both devices.
*/

const EVENTS: EventItem[] = [
  { Day: '28', Month: 'OCT', Title: 'PIM Clinic | Product Data Advice | 28 October', Place: 'Online session', date: '28 October', href: '#' },
  { Day: '13', Month: 'NOV', Title: 'aiGrunn & Youwe Business Track', Place: 'Forum Groningen', date: '13 November', href: '#' },
  { Day: '3', Month: 'DEC', Title: 'Higher Ground | Product data event, 3 December', Place: 'SnowWorld Zoetermeer', date: '3 December', href: '#' },
  { Day: '21', Month: 'JAN', Title: 'Higher Ground online: what’s next for product data', Place: 'Online', date: '21 January', href: '#' },
];
const USES = ['Insight Card', 'Upcoming events', 'Button/Basic', 'Section header'];

function InsightsPage({ Device: story }: { Device: Device }) {
  const Device = useDevice(story);
  const mobile = Device === 'Mobile';
  return (
    <Page Device={story}>
      <Hero
        Device={Device}
        image={abstract('005')}
        title={['Stay ahead.', 'Go beyond.']}
        body="Blogs, whitepapers, events, videos, news and landing pages from Youwe."
        label={{ Type: 'Subtitle', Subtitle: 'Insights' }}
        buttons={[{ label: 'Browse all insights', href: '#' }, { label: 'Upcoming events', href: '#' }]}
        bar={mobile ? { Type: 'Logos', logos: CLIENT_LOGOS.map((n) => logo(n, 118)) } : undefined}
        header={header(Device)}
      />
      {mobile ? (
        <>
          <Section Mode="Dark">
            <CardGrid
              Layout="Wide + 1"
              Device={Device}
              intro={{ Layout: 'Split', Kicker: 'Latest', Title: 'New this month' }}
              cells={[
                <InsightCard key="featured" Variant="Featured" Device={Device} Type="Event" Title="Higher Ground online: what’s next for product data" Meta="January 21, 2027 · Online" {...{ 'Hover CTA': 'Read the whitepaper', 'Hover context': '6 min read' }} href="#" />,
                <UpcomingEvents key="events" Device={Device} events={EVENTS} />,
              ]}
            />
          </Section>
          <NotAComponent name="All insights (type filters + insight grid + Show more)" height={7116} uses={USES} />
        </>
      ) : (
        <NotAComponent name="Insights · content (Latest + All insights)" height={4630} uses={USES} />
      )}
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} image={abstract('009')} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Insights',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Insights overview template: hero, latest insight with upcoming events, all insights with type filters (not a component yet), sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <InsightsPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <InsightsPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
