import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { TextMedia } from '../blocks/text-media'
import { Article } from '../blocks/article'
import { CardGrid } from '../blocks/card-grid'
import { ContactCTA } from '../blocks/contact-cta'
import { InsightCard } from '../ui/insight-card'
import { EventDetails } from '../ui/event-details'
import { RegistrationForm } from '../ui/registration-form'
import {
    Page,
    Section,
    WORK_WITH_US,
    footer,
    header,
    type Device,
    useDevice,
} from './shared'
import { QUOOKER_VIDEO, abstract } from '../media/media'
import { CTA } from './insight-blog.copy'
import { PRIVACY } from './insight-whitepaper.copy'
import {
    ABOUT,
    COUNTRIES,
    DETAILS,
    FORM_LABELS,
    INTRO_BODY,
    INTRO_HEADING,
    META,
    MORE,
    NAV,
    OPT_IN,
    QUESTION,
    TITLE,
    TOPICS,
} from './insight-video.copy'

/*
  Templates/Insight detail/Video — first version (19 November). Copy from Figma 27263:17425 (copy only).
  The hero's wide image is the video (Hero video: poster + play button, plays with sound in the Vimeo
  player; placeholder film). No Hero aside here: a sticky panel would cover the video while it plays,
  so the details panel (on-demand webinar, date, expert, "Download webinar") sits beside the intro, as
  in Blog v2. Then the Article block: about the webinar, the topics (numbered) and the download form
  (Registration form as in Figma: no company or job title; phone, country, a question, the PWA opt-in
  and the privacy text). More videos, sub-footer and footer close the page.
*/

function InsightVideoPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    const download = { label: 'Download webinar', href: '#download' }
    return (
        <Page Device={story} ask="What is a Progressive Web App?">
            {header(Device)}
            <Hero
                Variant="Title + image"
                Device={Device}
                title={[TITLE]}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [
                        { label: 'Home', href: '#' },
                        { label: 'Insights', href: '#' },
                        { label: 'Video' },
                    ],
                }}
                image={abstract('009')}
                video={QUOOKER_VIDEO}
                videoTitle={`Webinar: ${TITLE}`}
            />
            <TextMedia
                Device={Device}
                Theme="Dark"
                Split="8/4"
                heading={INTRO_HEADING}
                body={INTRO_BODY}
                media={
                    <EventDetails
                        Device={Device}
                        items={DETAILS}
                        primary={download}
                    />
                }
            />
            <Section Mode="Dark" flush="top">
                <Article
                    Device={Device}
                    meta={META}
                    sections={[
                        {
                            id: 'about',
                            nav: NAV.about,
                            heading: 'About the webinar',
                            body: [ABOUT],
                        },
                        {
                            id: 'topics',
                            nav: NAV.topics,
                            heading:
                                'In the webinar the following topics will be discussed',
                            steps: TOPICS.map((Title) => ({ Title })),
                        },
                        {
                            id: 'download',
                            nav: NAV.download,
                            kicker: NAV.download,
                            heading: 'On-demand webinar',
                            body: ['Fill in the form to download the webinar.'],
                            children: (
                                <RegistrationForm
                                    Device={Device}
                                    company={false}
                                    jobTitle={false}
                                    phone
                                    countries={COUNTRIES}
                                    question={QUESTION}
                                    optInLabel={OPT_IN}
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
                    ]}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{ Kicker: 'Videos', Title: 'More videos' }}
                    cells={MORE.map(([Title, meta, img]) => (
                        <InsightCard
                            key={Title}
                            Device={Device}
                            Type="Video"
                            Title={Title}
                            Meta={meta}
                            image={abstract(img)}
                            {...{ 'Hover CTA': 'Watch the video' }}
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
    title: 'Templates/Insight detail/Video',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Video template (first version): header, Title + image hero with the video in place of the image, intro beside the details panel, then the Article block (meta and "On this page" nav; about, topics, download form), more videos, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightVideoPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightVideoPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
