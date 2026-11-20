import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { ServicesSplit } from '../blocks/services-split'
import { ContentTabs } from '../blocks/content-tabs'
import { FeatureList } from '../blocks/feature-list'
import { TextMedia } from '../blocks/text-media'
import { AccordionList } from '../blocks/accordion-list'
import { ContactCTA } from '../blocks/contact-cta'
import { AskSnippet } from '../site/ask-youwe'
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
import { abstract, caseImage } from '../media/media'
import {
    ASK,
    CTA,
    FITS,
    HERO,
    INDUSTRIES,
    PARTNER,
    STEPS,
} from './tech-partner-detail-v2.copy'

/*
  Templates/Tech Partners detail v2 — Pimcore (20 November). Copy from Figma "Partner detail Pimcore
  (R6)" (file Homepage A (Flow), 127:2); built only from existing blocks:
  - Gradient hero (breadcrumb, two buttons) with the Stats bar: 27 cases, 25 clients, 9 industries,
    Founding partnership.
  - Services split: "Where Pimcore fits", the three services it plays a part in (Service Cards).
  - Content tabs: "Five steps, one platform", one tab per step, each with its client case (Case Card,
    with the stat where the Figma has one).
  - Feature list Split (Light): Pimcore by industry, the case count per industry and the clients.
  - Text + media: "Questions about Pimcore?" with two Ask Youwe questions.
  - Accordion list "Split list": Strategic Partner, the three partner facts and the FAQ.
  - Contact CTA Sub-footer background, footer.
  Images: Heidelberg and Chadwicks case photos; abstract placeholders for FroQ, Vivisol and CMSNL.
*/

const PHOTOS: Record<string, string> = {
    heidelberg: caseImage('heidelberg'),
    chadwicks: caseImage('chadwicks'),
}
const PLACEHOLDER = ['004', '008', '011']

function TechPartnerDetailV2Page({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="Which clients use Pimcore?">
            <Hero
                Device={Device}
                image={abstract('007')}
                title={HERO.title}
                body={HERO.body}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [
                        { label: 'Home', href: '#' },
                        { label: 'Tech Partners', href: '#' },
                        { label: 'Pimcore' },
                    ],
                }}
                buttons={HERO.buttons}
                bar={{ Type: 'Stats', stats: HERO.stats }}
                header={header(Device)}
            />
            <Section Mode="Dark">
                <ServicesSplit
                    Device={Device}
                    kicker={FITS.kicker}
                    title={FITS.title}
                    body={FITS.body}
                    services={FITS.services.map((s) => ({
                        ...s,
                        'Hover CTA': 'Explore the service',
                        href: '#',
                    }))}
                />
            </Section>
            <Section Mode="Dark">
                <div id="how-it-works">
                    <ContentTabs
                        Device={Device}
                        kicker={STEPS.kicker}
                        title={STEPS.title}
                        intro={STEPS.intro}
                        tabs={STEPS.tabs.map((t, i) => ({
                            label: t.label,
                            body: (
                                <>
                                    <p>
                                        <strong>{t.kind}</strong>
                                    </p>
                                    <p>{t.body}</p>
                                    <p>{t.flow}</p>
                                </>
                            ),
                            case: {
                                Device,
                                Title: t.case.Title,
                                Client: t.case.Client,
                                logo: logo(t.case.Client),
                                stat:
                                    'stat' in t.case ? t.case.stat : undefined,
                                image:
                                    'image' in t.case && t.case.image
                                        ? PHOTOS[t.case.image]
                                        : abstract(PLACEHOLDER[i % 3]),
                                'Hover CTA': 'Read the case',
                                href: '#',
                            },
                        }))}
                    />
                </div>
            </Section>
            <Section Mode="Light">
                <FeatureList
                    Layout="Split"
                    Device={Device}
                    kicker={INDUSTRIES.kicker}
                    heading={INDUSTRIES.heading}
                    body={INDUSTRIES.body}
                    items={INDUSTRIES.items.map(([n, Title, Description]) => ({
                        Number: `${n} ${n === '1' ? 'case' : 'cases'}`,
                        Title,
                        Description,
                    }))}
                />
            </Section>
            <TextMedia
                Device={Device}
                Theme="Dark"
                Split="6/6"
                heading={ASK.heading}
                body={ASK.body}
                media={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)',
                        }}
                    >
                        {ASK.questions.map((q) => (
                            <AskSnippet
                                key={q}
                                Type="Question"
                                Device={Device}
                                Title={q}
                            />
                        ))}
                    </div>
                }
            />
            <Section Mode="Dark">
                <AccordionList
                    Layout="Split list"
                    Device={Device}
                    kicker={PARTNER.kicker}
                    heading={PARTNER.heading}
                    bullets={PARTNER.facts}
                    items={PARTNER.faq}
                />
            </Section>
            <ContactCTA
                Variant="Sub-footer background"
                Device={Device}
                {...CTA}
                offices={WORK_WITH_US.offices}
                image={abstract('005')}
            />
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Tech Partners detail v2',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Tech Partners detail v2 (Pimcore), built from existing blocks: Gradient hero with stats, Services split, Content tabs (five steps with cases), Feature list (by industry, Light), Ask Youwe questions, Accordion list (partner facts and FAQ), sub-footer, footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <TechPartnerDetailV2Page Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <TechPartnerDetailV2Page Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
