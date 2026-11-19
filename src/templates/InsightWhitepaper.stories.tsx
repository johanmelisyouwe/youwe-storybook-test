import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { HeroAside } from '../blocks/hero-aside'
import { TextMedia } from '../blocks/text-media'
import { Article } from '../blocks/article'
import { CardGrid } from '../blocks/card-grid'
import { ContactCTA } from '../blocks/contact-cta'
import { InsightCard } from '../ui/insight-card'
import { EventDetails } from '../ui/event-details'
import { FeatureCard } from '../ui/feature-card'
import { RegistrationForm } from '../ui/registration-form'
import { Button } from '../ui/button'
import {
    Page,
    Section,
    WORK_WITH_US,
    footer,
    header,
    type Device,
    useDevice,
} from './shared'
import { abstract } from '../media/media'
import { CTA } from './insight-blog.copy'
import {
    CHAPTERS,
    DETAILS,
    FAQ,
    FORM_LABELS,
    GET_INTRO,
    INSIDE,
    INTRO_BODY,
    INTRO_HEADING,
    MORE,
    NAV,
    PRIVACY,
    TAGS,
    TITLE,
    WHY,
} from './insight-whitepaper.copy'

/*
  Templates/Insight detail/Whitepaper — first version (19 November). Copy from Figma 27263:17032 (copy
  only); layout as the Event template: Title + image hero with the details panel (the whitepaper,
  published date, "Download the whitepaper" to the form) beside the title, sticky over the hero image
  until it rests beside the intro (Hero aside); the three chapter tiles (Feature Cards); then the Article
  block with the meta and "On this page" nav: what you will get, why download it, the download form
  (Registration form with phone and the Figma privacy text, no opt-in) and the questions. More
  whitepapers, sub-footer and footer close the page. Placeholder images.
*/

function InsightWhitepaperPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    const download = { label: 'Download the whitepaper', href: '#download' }
    return (
        <Page Device={story} ask="What is in the data foundation whitepaper?">
            {header(Device)}
            <HeroAside
                label="Whitepaper details"
                hero={
                    <Hero
                        Variant="Title + image"
                        Device={Device}
                        title={[TITLE]}
                        tags={TAGS}
                        label={{
                            Type: 'Breadcrumb',
                            crumbs: [
                                { label: 'Home', href: '#' },
                                { label: 'Insights', href: '#' },
                                { label: 'Whitepaper' },
                            ],
                        }}
                        image={abstract('011')}
                    />
                }
                aside={
                    <EventDetails
                        Device={Device}
                        items={DETAILS}
                        primary={download}
                    />
                }
            >
                <TextMedia
                    Device={Device}
                    Theme="Dark"
                    Split="8/4"
                    heading={INTRO_HEADING}
                    body={INTRO_BODY}
                    media={<div aria-hidden="true" />}
                />
            </HeroAside>
            <Section Mode="Dark" flush="top">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    label="Inside the whitepaper"
                    cells={CHAPTERS.map((Title, i) => (
                        <FeatureCard
                            key={Title}
                            Variant="Card"
                            Number={String(i + 1).padStart(2, '0')}
                            Title={Title}
                        />
                    ))}
                />
            </Section>
            <Section Mode="Dark" flush="top">
                <Article
                    Device={Device}
                    sections={[
                        {
                            id: 'what-you-get',
                            nav: NAV.get,
                            heading: 'What you will get',
                            body: (
                                <>
                                    <p>{GET_INTRO}</p>
                                    <h3>Inside you will find:</h3>
                                    <ul>
                                        {INSIDE.map((t) => (
                                            <li key={t}>{t}</li>
                                        ))}
                                    </ul>
                                </>
                            ),
                        },
                        {
                            id: 'why-download',
                            nav: NAV.why,
                            heading: 'Why download it?',
                            body: (
                                <ul>
                                    {WHY.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            ),
                            children: (
                                <div>
                                    <Button
                                        Variant="Primary"
                                        Size="M"
                                        {...download}
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 'download',
                            nav: NAV.download,
                            kicker: NAV.download,
                            heading: 'Download the whitepaper',
                            children: (
                                <RegistrationForm
                                    Device={Device}
                                    phone
                                    optIn={false}
                                    notice={
                                        <p>
                                            {PRIVACY}{' '}
                                            <a href="#">Privacy Policy</a>.
                                        </p>
                                    }
                                    labels={FORM_LABELS}
                                    onSubmit={() =>
                                        new Promise((r) => setTimeout(r, 800))
                                    }
                                />
                            ),
                        },
                        {
                            id: 'questions',
                            nav: NAV.questions,
                            kicker: NAV.questions,
                            heading: 'Questions you may have',
                            faq: FAQ,
                        },
                    ]}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{
                        Kicker: 'Keep reading',
                        Title: 'More whitepapers',
                    }}
                    cells={MORE.map(([Title, meta, img]) => (
                        <InsightCard
                            key={Title}
                            Device={Device}
                            Type="Whitepaper"
                            Title={Title}
                            Meta={meta}
                            image={abstract(img)}
                            {...{ 'Hover CTA': 'Read the whitepaper' }}
                            href="#"
                        />
                    ))}
                />
            </Section>
            <ContactCTA
                Variant="Sub-footer background"
                Device={Device}
                {...WORK_WITH_US}
                {...CTA}
                image={abstract('005')}
            />
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Insight detail/Whitepaper',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Whitepaper template (first version): header, Title + image hero with the sticky details panel (Hero aside), intro, chapter tiles, then the Article block (meta and "On this page" nav; what you will get, why download it, download form, questions), more whitepapers, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightWhitepaperPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightWhitepaperPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
