import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CaseIntro } from '../blocks/case-intro'
import { StatsBlock } from '../blocks/stats-block'
import { Media } from '../blocks/media'
import { Article } from '../blocks/article'
import { CardGrid } from '../blocks/card-grid'
import { InsightCard } from '../ui/insight-card'
import { CaseCard } from '../ui/case-card'
import { ContactCTA } from '../blocks/contact-cta'
import { Prose } from '../shared/prose'
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
import { abstract, clientPhoto } from '../media/media'
import {
    BRIEF,
    CLOSING,
    CTA,
    EXAMPLE,
    FAQ,
    GOVERNMENT,
    GOVERNMENT_INTRO,
    GOVERNMENT_QUOTE,
    HELPS,
    HELPS_INTRO,
    INTRO,
    KEY_FACTS,
    KEY_FIGURES,
    MEANS,
    META,
    MORE,
    NAV,
    SOURCE_NOTE,
    SOURCES,
    STEPS,
    TITLE,
    WHY,
    leadIns,
} from './insight-blog.copy'

/*
  Templates/Insight detail/Blog v2 — the Blog template with an "On this page" anchor nav (decided
  19 November). The top is the same as v1 (hero, intro with meta, key figures, image). From there the
  article runs in the Article block: a sticky Anchor nav on the left, the sections in one reading column
  on the right, with the steps, the Kingspan example and the FAQ inside their sections, so every nav item
  points into the same column. Copy from Figma 27263:16555 (copy only), our own styling.
*/

function InsightBlogV2Page({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page
            Device={story}
            ask="What does the Wennink report mean for my AI plans?"
        >
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
                        { label: 'Blog' },
                    ],
                }}
                image={abstract('016')}
            />
            <Section Mode="Dark">
                <CaseIntro
                    Device={Device}
                    {...{ 'Meta position': 'Left' as const }}
                    meta={META}
                    lead={INTRO}
                />
                <StatsBlock Type="Plain" Device={Device} stats={KEY_FIGURES} />
                <Media
                    Layout="Contained"
                    Device={Device}
                    image={abstract('011')}
                />
                <Article
                    Device={Device}
                    sections={[
                        {
                            id: 'in-brief',
                            nav: NAV.brief,
                            heading: 'The Wennink report in brief',
                            body: (
                                <>
                                    <p>{BRIEF}</p>
                                    <h3>The key facts</h3>
                                    {leadIns(KEY_FACTS)}
                                </>
                            ),
                        },
                        {
                            id: 'government',
                            nav: NAV.government,
                            heading:
                                'What the Dutch government is doing with it',
                            body: (
                                <>
                                    <p>{GOVERNMENT_INTRO}</p>
                                    {leadIns(GOVERNMENT)}
                                    <blockquote>
                                        <p>{GOVERNMENT_QUOTE}</p>
                                    </blockquote>
                                </>
                            ),
                        },
                        {
                            id: 'why-ai',
                            nav: NAV.why,
                            heading: 'Why digitalization and AI are so central',
                            body: WHY,
                        },
                        {
                            id: 'what-it-means',
                            nav: NAV.means,
                            heading: 'What this means for your organization',
                            body: MEANS,
                        },
                        {
                            id: 'six-steps',
                            nav: NAV.steps,
                            kicker: NAV.steps,
                            heading:
                                'How to make your AI plans investment-ready',
                            steps: STEPS.map(([Title, Description]) => ({
                                Title,
                                Description,
                            })),
                        },
                        {
                            id: 'how-youwe-helps',
                            nav: NAV.helps,
                            heading: 'How Youwe helps',
                            body: (
                                <>
                                    <p>{HELPS_INTRO}</p>
                                    {leadIns(HELPS)}
                                    <h3>An example from practice</h3>
                                    <p>{EXAMPLE}</p>
                                </>
                            ),
                            children: (
                                <>
                                    <CaseCard
                                        Size="Full"
                                        Device={Device}
                                        Title="From inbox to SAP: AI order intake"
                                        Client="Kingspan Insulated Panels"
                                        logo={logo('Kingspan Insulated Panels')}
                                        image={clientPhoto(
                                            'Kingspan Insulated Panels'
                                        )}
                                        {...{ 'Hover CTA': 'Read the case' }}
                                        href="#"
                                    />
                                    <Prose className="yw-body-lg-reg">
                                        <p>
                                            {CLOSING}{' '}
                                            <a href="#">Contact Youwe</a>
                                        </p>
                                    </Prose>
                                </>
                            ),
                        },
                        {
                            id: 'faq',
                            nav: NAV.faq,
                            kicker: NAV.faq,
                            heading:
                                'Frequently asked questions about the Wennink report',
                            faq: FAQ,
                        },
                        {
                            id: 'sources',
                            nav: NAV.sources,
                            heading: 'Sources',
                            body: (
                                <>
                                    <ol>
                                        {SOURCES.map((s) => (
                                            <li key={s}>
                                                <a href="#">{s}</a>
                                            </li>
                                        ))}
                                    </ol>
                                    <p>
                                        <em>{SOURCE_NOTE}</em>
                                    </p>
                                </>
                            ),
                        },
                    ]}
                />
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{ Kicker: 'Keep reading', Title: 'More blogs' }}
                    cells={MORE.map(([Title, topic, img]) => (
                        <InsightCard
                            key={Title}
                            Device={Device}
                            Type="Blog"
                            Title={Title}
                            Meta={`Blog · ${topic}`}
                            image={abstract(img)}
                            {...{ 'Hover CTA': 'Read the blog' }}
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
    title: 'Templates/Insight detail/Blog v2',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Blog template with an "On this page" anchor nav: header, Title + image hero, intro with meta, key figures, image, then the Article block (sticky anchor nav + one reading column with all sections, steps, example and FAQ), more blogs, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightBlogV2Page Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightBlogV2Page Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
