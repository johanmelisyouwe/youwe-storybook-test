import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CaseIntro } from '../blocks/case-intro'
import { Media } from '../blocks/media'
import { SectionHeader } from '../blocks/section-header'
import { TextColumn } from '../blocks/text-column'
import { TextMedia } from '../blocks/text-media'
import { Testimonial } from '../blocks/testimonial'
import { StatsBlock } from '../blocks/stats-block'
import { CaseCarousel } from '../blocks/case-carousel'
import { ContactCTA } from '../blocks/contact-cta'
import {
    CASE_INTRO,
    TEXT_COLUMN,
    TWO_COLUMN,
} from '../blocks/text-column/longform.copy'
import type { CaseCardProps } from '../ui/case-card'
import {
    Page,
    Section,
    WORK_WITH_US,
    footer,
    header,
    logo,
    type Device,
    useDevice,
} from './shared'
import { QUOOKER_VIDEO, abstract, caseImage, clientPhoto } from '../media/media'

/*
  Templates/Work detail — Figma "Page / Work detail": Desktop 26829:20476, Mobile 26924:2198. Copy, props
  and order from figma/templates.js. The header is its own section (Header/Corporate); the hero is
  Title + image. Figma pairs the Quooker title with JC-Electronics body copy; the template shows Quooker
  throughout (decided 9 November), using the Quooker case copy from the Figma long-form components. The
  Testimonial keeps the stand-in quote from the Figma template (decided 9 November). Sub-footer: the
  desktop copy on both devices. Related work leaves out Quooker itself (this is the Quooker case). Each photo
  is used once on the page (the Figma stand-ins repeated one photo three times). The full-bleed media is the
  Quooker video on Vimeo (Media video, Autoplay "In view": muted, looped, plays while on screen).
*/

const c = (
    Title: string,
    Client: string,
    stat?: [string, string]
): CaseCardProps => ({
    Title,
    Client,
    logo: logo(Client),
    image: clientPhoto(Client),
    stat: stat && { value: stat[0], label: stat[1] },
    href: '#',
})
const RELATED: CaseCardProps[] = [
    c('From 60+ OpCos to one smart platform', 'BunzlOne', [
        '800+',
        'categories active',
    ]),
    c('Scaling product data with Pimcore & AI', 'Chadwicks Group', [
        '+43%',
        'marketable catalog uplift',
    ]),
    c('From inbox to SAP: AI order intake', 'Kingspan Insulated Panels'),
    c('Scaling smarter: a digital platform for global growth', 'Quooker', [
        '17',
        'markets supported',
    ]),
    c('AI matching for pricing intelligence', 'Symson', [
        '93%',
        'average match score',
    ]),
    c('Booking.com builds Partner Hub with Youwe', 'Booking.com', [
        '30',
        'languages',
    ]),
    c('A PIM system and SAP integration', 'Heidelberg', [
        '3',
        'SAP ERP systems integrated',
    ]),
    c('Adobe Commerce Headless implementation', 'PostNL', [
        '41%',
        'IT cost reduction',
    ]),
]

function WorkDetailPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="How did Quooker expand to 17 countries?">
            {header(Device)}
            <Hero
                Variant="Title + image"
                Device={Device}
                title={['Scaling smart: Quooker’s expansion to 17 countries']}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [
                        { label: 'Home', href: '#' },
                        { label: 'Work', href: '#' },
                        { label: 'Quooker' },
                    ],
                }}
                logo={logo('Quooker', 190)}
                image={caseImage('quooker-1', 'wide')}
            />
            <Section Mode="Dark">
                <CaseIntro
                    Device={Device}
                    {...{ 'Meta position': 'Left' as const }}
                    meta={CASE_INTRO.meta}
                    lead={CASE_INTRO.lead}
                    body={CASE_INTRO.body}
                />
                <Media
                    Layout="Contained"
                    Device={Device}
                    image={caseImage('fairphone', 'wide')}
                />
                <SectionHeader
                    Alignment="Centered"
                    Device={Device}
                    kicker={TWO_COLUMN.label}
                    heading={TWO_COLUMN.lead}
                    body={TWO_COLUMN.body.join('\n')}
                />
                <Media
                    Layout="Full bleed"
                    Device={Device}
                    image={caseImage('quooker-1', 'wide')}
                    video={QUOOKER_VIDEO}
                    alt="Quooker: late summer video"
                />
                <TextColumn
                    Alignment="Centered"
                    Device={Device}
                    lead={TEXT_COLUMN.lead}
                    body={TEXT_COLUMN.body}
                />
            </Section>
            <TextMedia
                Device={Device}
                Theme="Dark"
                Split="6/6"
                {...{ 'Media position': 'Right' as const }}
                image={abstract('009')}
                heading={'Global thinking,\nglobal understanding'}
                body="We’re a driven collective of over 270 specialists. Big enough to cover every digital discipline, yet close enough to truly understand the specifics of your business. Together, we create digital ecosystems that drive lasting growth."
            />
            <Section Mode="Dark">
                <Testimonial
                    Device={Device}
                    image={abstract('006')}
                    quotes={[
                        {
                            Quote: '“Quote from the client goes here, ideally one or two sentences about the result.”', // legacy-ok: the Figma template itself has this stand-in quote
                            Name: 'Client name', // legacy-ok: the Figma template itself has this stand-in quote
                            Role: 'Role, company', // legacy-ok: the Figma template itself has this stand-in quote
                            logo: logo('Quooker'),
                        },
                    ]}
                />{' '}
                {/* legacy-ok: the Figma template itself has this stand-in quote; reported in SYNC-REPORT.md */}
                <StatsBlock
                    Type="Plain"
                    Device={Device}
                    intro={{
                        kicker: 'The results',
                        title: 'From the Netherlands and Belgium to the Nordics, Germany, the UK, Hong Kong and the United Arab Emirates.',
                    }}
                    stats={[
                        { Value: '17', Label: 'Markets supported' },
                        { Value: '110,000+', Label: 'Units sold every year' },
                    ]}
                />
                <Media
                    Layout="Two-up"
                    Device={Device}
                    image={caseImage('quooker-1')}
                    image2={caseImage('g-star')}
                />
                <CaseCarousel
                    Layout="Scroll"
                    Device={Device}
                    Kicker="Proven in practice"
                    Title="Related work"
                    button={{ label: 'All cases', href: '#' }}
                    cases={RELATED.filter((r) => r.Client !== 'Quooker')}
                />
            </Section>
            <ContactCTA
                Variant="Sub-footer background"
                Device={Device}
                {...WORK_WITH_US}
                image={abstract('005')}
            />
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Work detail',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Case page template: header, Title + image hero with breadcrumb, case intro, media, section header, text column, text + media, testimonial, results, two-up media, related work, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <WorkDetailPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <WorkDetailPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
