import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from '../components/components/Hero/Hero';
import { CaseIntro } from '../components/components/CaseIntro/CaseIntro';
import { Media } from '../components/components/Media/Media';
import { SectionHeader } from '../components/components/SectionHeader/SectionHeader';
import { TextColumn } from '../components/components/TextColumn/TextColumn';
import { TextMedia } from '../components/components/TextMedia/TextMedia';
import { Testimonial } from '../components/components/Testimonial/Testimonial';
import { StatsBlock } from '../components/components/StatsBlock/StatsBlock';
import { CaseCarousel } from '../components/components/CaseCarousel/CaseCarousel';
import { ContactCTA } from '../components/components/ContactCTA/ContactCTA';
import type { CaseCardProps } from '../components/components/CaseCard/CaseCard';
import { Page, Section, WORK_WITH_US, footer, header, logo, type Device } from './shared';

/*
  Templates/Work detail — Figma "Page / Work detail": Desktop 26829:20476, Mobile 26924:2198. Copy, props
  and order from figma/templates.js. The header is its own section (Header/Corporate); the hero is
  Title + image. Note: Figma pairs the Quooker title with the JC-Electronics case copy, and the
  Testimonial in the Figma template still has stand-in quote copy (reported). Sub-footer: the
  desktop copy on both devices.
*/

const META = [
  { label: 'Platforms', value: 'Full Hyvä Suite: Hyvä Theme, Hyvä Enterprise, Hyvä Checkout.\nAdobe Commerce: Adobe Commerce for B2B\nModule by JCE: Exact Order Synchronisation to Magento' },
  { label: 'Role', value: 'Strategy, UX Research & Design, Implementation in collaboration with development at JC-Electronics' },
  { label: 'Solution', value: 'Youwe\'s solution involved creating a personalized dashboard within the My Account portal, leveraging Hyvä, to enhance B2B user engagement by centralizing user needs. Additionally, improvements were made to the Product Detail Page (PDP) and checkout process to further boost user engagement.' },
];
const LEAD = 'JC-Electronics are a world player in the industrial electronics industry. Discover how they improved their online sales channel by being the first webshop ever implementing the entire Hyvä Suite. From accelerated page loading times to enhanced user experiences, learn how this partnership with Youwe propelled JC-Electronics into a new era of digital commerce.';
const BODY = [
  'JC-Electronics boasts a robust history in supplying intricate electronic devices to factories worldwide. Previously, Youwe have helped JC-Electronics with establishing an online sales channel alongside its existing distributor model ( read all about it here). They embraced a Magento Commerce Cloud shop, enabling direct international sales to end-users.',
  'This move ushered in a new revenue stream, significantly increasing online sales and affording the back-office and sales departments more time for client service and relationship maintenance, as orders transitioned from phone-based to online platforms.',
  'While some clients continued traditional ordering methods, the focus shifted towards enhancing traction on the my-account portal to bolster online orders, reducing the need for manual order processing by account managers.',
  'Recognizing the significance of digitalization in enhancing service delivery, JC-Electronics embarked on improving the my-account portal, followed by enhancements to the checkout and Product Detail Page (PDP). After immersive design workshop sessions, implementing the complete Hyvä suite turned out to be the optimal solution for streamlining the sales flow.',
];
const HYVA = 'Hyvä simplifies complexity by significantly reducing the required code. While a standard Magento theme loads over 1.5 megabytes, Hyvä loads only 0.2 megabytes. This reduction in the amount of shipped code to the user, enhances overall performance by minimizing user load times.\nThe implementation of Hyvä was executed gradually, offering a smoother development process compared to the previous Luma theme. Its fallback system facilitated phased implementation. The frontend transition prioritized the creation of an immersive, personalized dashboard within the my-account portal, serving as a centralized hub for user needs.';

const c = (Title: string, Client: string, stat?: [string, string]): CaseCardProps => ({ Title, Client, logo: logo(Client), stat: stat && { value: stat[0], label: stat[1] }, href: '#' });
const RELATED: CaseCardProps[] = [
  c('From 60+ OpCos to one smart platform', 'BunzlOne', ['800+', 'categories active']),
  c('Scaling product data with Pimcore & AI', 'Chadwicks Group', ['+43%', 'marketable catalog uplift']),
  c('From inbox to SAP: AI order intake', 'Kingspan Insulated Panels'),
  c('Scaling smarter: a digital platform for global growth', 'Quooker', ['17', 'markets supported']),
  c('AI matching for pricing intelligence', 'Symson', ['93%', 'average match score']),
  c('Booking.com builds Partner Hub with Youwe', 'Booking.com', ['30', 'languages']),
  c('A PIM system and SAP integration', 'Heidelberg', ['3', 'SAP ERP systems integrated']),
  c('Adobe Commerce Headless implementation', 'PostNL', ['41%', 'IT cost reduction']),
];

function WorkDetailPage({ Device }: { Device: Device }) {
  return (
    <Page Device={Device}>
      {header(Device)}
      <Hero
        Variant="Title + image"
        Device={Device}
        title={['Scaling Smart: Quooker’s Expansion to 17 Countries']}
        label={{ Type: 'Breadcrumb', crumbs: [{ label: 'Home', href: '#' }, { label: 'Work', href: '#' }, { label: 'Quooker' }] }}
        logo={logo('Quooker')}
      />
      <Section Mode="Dark">
        <CaseIntro Device={Device} {...{ 'Meta position': 'Left' as const }} meta={META} lead={LEAD} body={BODY} />
        <Media Layout="Contained" Device={Device} />
        <SectionHeader Alignment="Centered" Device={Device} heading="Implementing Hyvä for the my-account portal" body={HYVA} />
        <Media Layout="Full bleed" Device={Device} />
        <TextColumn
          Alignment="Centered"
          Device={Device}
          lead="To enhance the sales channel, it was essential to improve the usability of the my-account portal. As a result, we conducted a series of design workshop sessions centered on optimizing the User Experience of the portal."
          body={['These sessions yielded numerous enhancements aimed at transforming the my-account section into a more personalized and user-friendly portal. The proposed redesign emphasized improved navigation, simplified access to primary tasks, streamlined order processes, loyalty incentives, support requests, and more.']}
        />
      </Section>
      <TextMedia
        Device={Device}
        Theme="Dark"
        Split="6/6"
        {...{ 'Media position': 'Right' as const }}
        heading={'Global thinking,\nglobal understanding'}
        body="We’re a driven collective of over 270 specialists. Big enough to cover every digital discipline, yet close enough to truly understand the specifics of your business. Together, we create digital ecosystems that drive lasting growth."
      />
      <Section Mode="Dark">
        <Testimonial Device={Device} image quotes={[{ Quote: '“Quote from the client goes here, ideally one or two sentences about the result.”', Name: 'Client name', Role: 'Role, company', logo: logo('Quooker') }]} /> {/* legacy-ok: the Figma template itself has this stand-in quote; reported in SYNC-REPORT.md */}
        <StatsBlock
          Type="Plain"
          Device={Device}
          intro={{ kicker: 'The results', title: 'Choosing Hyvä, renowned for its strong performance on core web vitals and developer-friendly nature, was a natural fit to implement these changes effectively.' }}
          stats={[{ Value: '4.5x', Label: 'Faster PDP Loading Time' }, { Value: '5.7x', Label: 'Faster Checkout Full Page Load' }]}
        />
        <Media Layout="Two-up" Device={Device} />
        <CaseCarousel Layout="Scroll" Device={Device} Kicker="Proven in practice" Title="Related work" button={{ label: 'All cases', href: '#' }} cases={RELATED} />
      </Section>
      <ContactCTA Variant="Sub-footer background" Device={Device} {...WORK_WITH_US} />
      {footer(Device)}
    </Page>
  );
}

const meta: Meta = {
  title: 'Templates/Work detail',
  parameters: { layout: 'fullscreen', controls: { disable: true }, docs: { description: { component: 'Case page template: header, Title + image hero with breadcrumb, case intro, media, section header, text column, text + media, testimonial, results, two-up media, related work, sub-footer and footer.' } } },
};
export default meta;
type Story = StoryObj;

export const Desktop: Story = { render: () => <WorkDetailPage Device="Desktop" /> };
export const Mobile: Story = { render: () => <WorkDetailPage Device="Mobile" />, globals: { viewport: { value: 'mobile' } } };
