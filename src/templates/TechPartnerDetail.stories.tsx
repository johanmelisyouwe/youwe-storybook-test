import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { TextMedia } from '../blocks/text-media'
import { CardGrid } from '../blocks/card-grid'
import { AccordionList } from '../blocks/accordion-list'
import { ContactCTA } from '../blocks/contact-cta'
import { FeatureCard } from '../ui/feature-card'
import { ImageCard } from '../ui/image-card'
import { QuoteCard } from '../ui/quote-card'
import { CaseCard } from '../ui/case-card'
import {
    Page,
    Section,
    footer,
    header,
    logo,
    type Device,
    useDevice,
} from './shared'
import { abstract, caseImage, clientPhoto, productImage } from '../media/media'
import {
    AGENTS,
    CAPABILITIES,
    DEPLOYMENT,
    FAQ,
    GET_IN_TOUCH,
    GIVES,
    HERO,
    PROOF_QUOTE,
    SUB_FOOTER,
    WHAT,
} from './tech-partner-detail.copy'

/*
  Templates/Tech Partners detail — ACI Weave (20 November), from Figma "Tech Partners detail" (26906:10343,
  Templates page), with its blocks in order:
  Gradient hero (breadcrumb, two buttons) · Text + media 6/6 (product screenshot) · Card grid Feature + 4
  (capabilities 01–05, screenshot and tags) · Card grid 1 + Wide (06 and the approval loop image) ·
  Accordion list Split (FAQ) · Card grid 3 columns (what it gives you, with images) · Card grid 5 columns
  (use cases: ten agents) · Card grid 2 columns in Light mode (deployment) · Card grid Wide + 1 with the
  stacked "Get in touch" intro (proof: image + Kingspan quote card, G-Star and Wickey case cards) ·
  Contact CTA Form · footer.
  Images: product screenshots and the Wickey photo from the Figma frame; an abstract background in the
  hero instead of the stock photo.
*/

const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Belgium',
    'Germany',
    'Other',
].map((x) => ({ value: x, label: x }))

const num = (i: number) => String(i + 1).padStart(2, '0')

const capability = (i: number, image?: string) => (
    <FeatureCard
        key={CAPABILITIES[i].Title}
        Variant="Card"
        Number={num(i)}
        {...CAPABILITIES[i]}
        image={image}
    />
)

function TechPartnerDetailPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="What can ACI Weave agents do for us?">
            <Hero
                Device={Device}
                image={abstract('016')}
                title={[HERO.title]}
                body={HERO.body}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [
                        { label: 'Home', href: '#' },
                        { label: 'Tech Partners', href: '#' },
                        { label: 'ACI Weave' },
                    ],
                }}
                buttons={HERO.buttons}
                header={header(Device)}
            />
            <TextMedia
                Device={Device}
                Theme="Dark"
                Split="6/6"
                {...{ 'Media position': 'Right' as const }}
                heading={WHAT.heading}
                body={WHAT.body}
                image={productImage('aci-weave-marketplace')}
                alt="The ACI Weave agent marketplace"
            />
            <Section Mode="Dark" flush="bottom">
                <CardGrid
                    Layout="Feature + 4"
                    Device={Device}
                    label="Capabilities"
                    cells={[
                        capability(
                            0,
                            productImage('aci-weave-competitor-analysis')
                        ),
                        ...[1, 2, 3, 4].map((i) => capability(i)),
                    ]}
                />
            </Section>
            <Section Mode="Dark" flush="top">
                <CardGrid
                    Layout="1 + Wide"
                    Device={Device}
                    label="Governance"
                    cells={[
                        capability(5),
                        <ImageCard
                            key="loop"
                            image={productImage('aci-weave-approval-loop')}
                            Fit="Contain"
                            alt="Correct, propose rule, leader approves, apply: the approval loop"
                        />,
                    ]}
                />
            </Section>
            <Section Mode="Dark">
                <AccordionList
                    Layout="Split"
                    Device={Device}
                    kicker="FAQ"
                    heading="Frequently asked questions about ACI Weave"
                    {...{ 'Accordion title': 'Frequently asked questions' }}
                    items={FAQ}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Split',
                        Title: 'What ACI Weave gives you',
                    }}
                    cells={GIVES.map((g, i) => (
                        <FeatureCard
                            key={g.Title}
                            Variant="Card"
                            Number={num(i)}
                            {...g}
                            image={productImage(
                                (
                                    [
                                        'aci-weave-dashboard',
                                        'aci-weave-pricing',
                                        'wickey-playground',
                                    ] as const
                                )[i]
                            )}
                        />
                    ))}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="5 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Split',
                        Kicker: 'Use cases',
                        Title: 'What ACI Weave agents do',
                    }}
                    cells={AGENTS.map((a) => (
                        <FeatureCard key={a.Title} Variant="Card" {...a} />
                    ))}
                />
            </Section>
            <Section Mode="Light">
                <CardGrid
                    Layout="2 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Split',
                        Title: 'Deployment and data quality',
                    }}
                    cells={DEPLOYMENT.map((d) => (
                        <FeatureCard key={d.Title} Variant="Card" {...d} />
                    ))}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="Wide + 1"
                    Device={Device}
                    intro={{ Layout: 'Stacked', ...GET_IN_TOUCH }}
                    cells={[
                        <ImageCard
                            key="kingspan"
                            image={clientPhoto('Kingspan Insulated Panels')}
                            alt="Kingspan Insulated Panels"
                        />,
                        <QuoteCard
                            key="quote"
                            Mode="Light"
                            Quote={PROOF_QUOTE.Quote}
                            Name={PROOF_QUOTE.Name}
                            {...{ 'Show quote mark': false }}
                            buttons={[PROOF_QUOTE.button]}
                        />,
                        <CaseCard
                            key="g-star"
                            Size="Two thirds"
                            Device={Device}
                            Title="How a Design System strengthened G-Star’s brand consistency"
                            Client="G-Star RAW"
                            logo={logo('G-Star RAW')}
                            image={caseImage('g-star', 'wide')}
                            href="#"
                        />,
                        <CaseCard
                            key="wickey"
                            Size="One third"
                            Device={Device}
                            Title="Content workflows for Wickey"
                            Client="Wickey"
                            image={productImage('wickey-playground')}
                            href="#"
                        />,
                    ]}
                />
            </Section>
            <Section Mode="Dark">
                <ContactCTA
                    Variant="Form"
                    Device={Device}
                    {...SUB_FOOTER}
                    countries={COUNTRIES}
                />
            </Section>
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Tech Partners detail',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Tech Partners detail (ACI Weave): Gradient hero with breadcrumb, Text + media, capabilities (Feature + 4, 1 + Wide), FAQ, what it gives you, use cases (five columns), deployment (Light), proof with the Get in touch intro, contact form, footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <TechPartnerDetailPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <TechPartnerDetailPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
