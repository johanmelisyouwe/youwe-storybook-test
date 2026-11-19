import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CaseIntro } from '../blocks/case-intro'
import { StatsBlock } from '../blocks/stats-block'
import { Media } from '../blocks/media'
import { TwoColumnText } from '../blocks/two-column-text'
import { FeatureList } from '../blocks/feature-list'
import { TextMedia } from '../blocks/text-media'
import { TextColumn } from '../blocks/text-column'
import { AccordionList } from '../blocks/accordion-list'
import { CardGrid } from '../blocks/card-grid'
import { InsightCard } from '../ui/insight-card'
import { ContactCTA } from '../blocks/contact-cta'
import {
    Page,
    Section,
    WORK_WITH_US,
    footer,
    header,
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
    SOURCE_NOTE,
    SOURCES,
    STEPS,
    TITLE,
    WHY,
    leadIns,
} from './insight-blog.copy'

/*
  Templates/Insight detail/Blog — the long-form insight page. Copy from Figma "Desktop 1440 — Insight Blog
  detail (R6)" (27263:16555); only the copy is taken from that frame (decided 19 November). Layout and blocks
  follow the case page (Work detail) so insights read as editorial, long-form pages: Title + image hero with
  breadcrumb, Case intro (meta + lead + rich text), key figures, then the article as Two-column text sections
  with rich text (lists, bold lead-ins, a pull quote), numbered steps, an example, FAQ, sources and related
  insights. Images are Storybook placeholders (abstract and case photos), not the Figma stand-ins.
*/

function InsightBlogPage({ Device: story }: { Device: Device }) {
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
                    body={
                        <>
                            <h3>The Wennink report in brief</h3>
                            <p>{BRIEF}</p>
                            <h4>The key facts</h4>
                            {leadIns(KEY_FACTS)}
                        </>
                    }
                />
                <StatsBlock Type="Plain" Device={Device} stats={KEY_FIGURES} />
                <Media
                    Layout="Contained"
                    Device={Device}
                    image={abstract('011')}
                />
                <TwoColumnText
                    Split="4/8"
                    Device={Device}
                    label="What the government does"
                    lead="What the Dutch government is doing with it"
                    body={
                        <>
                            <p>{GOVERNMENT_INTRO}</p>
                            {leadIns(GOVERNMENT)}
                            <blockquote>
                                <p>{GOVERNMENT_QUOTE}</p>
                            </blockquote>
                        </>
                    }
                />
                <TwoColumnText
                    Split="4/8"
                    Device={Device}
                    label="Why AI is central"
                    lead="Why digitalization and AI are so central"
                    body={WHY}
                />
                <Media
                    Layout="Full bleed"
                    Device={Device}
                    image={abstract('007')}
                />
                <TwoColumnText
                    Split="4/8"
                    Device={Device}
                    label="What it means for you"
                    lead="What this means for your organization"
                    body={MEANS}
                />
                <FeatureList
                    Layout="Split"
                    Device={Device}
                    kicker="Investment-ready in 6 steps"
                    heading="How to make your AI plans investment-ready"
                    items={STEPS.map(([Title, Description], i) => ({
                        Number: String(i + 1).padStart(2, '0'),
                        Title,
                        Description,
                    }))}
                />
                <TwoColumnText
                    Split="4/8"
                    Device={Device}
                    lead="How Youwe helps"
                    body={
                        <>
                            <p>{HELPS_INTRO}</p>
                            {leadIns(HELPS)}
                        </>
                    }
                />
            </Section>
            <TextMedia
                Device={Device}
                Theme="Dark"
                Split="6/6"
                {...{ 'Media position': 'Right' as const }}
                image={clientPhoto('Kingspan Insulated Panels')}
                heading="An example from practice"
                body={
                    <>
                        <p>{EXAMPLE}</p>
                        <p>
                            <a href="#">Read the case</a>
                        </p>
                    </>
                }
            />
            <Section Mode="Dark">
                <TextColumn
                    Alignment="Centered"
                    Device={Device}
                    lead={CLOSING}
                    body={
                        <p>
                            <a href="#">Contact Youwe</a>
                        </p>
                    }
                />
                <AccordionList
                    Layout="Split"
                    Device={Device}
                    kicker="FAQ"
                    heading="Frequently asked questions about the Wennink report"
                    {...{ 'Accordion title': '' }}
                    items={FAQ}
                />
                <TwoColumnText
                    Split="4/8"
                    Device={Device}
                    lead="Sources"
                    body={
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
                    }
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
    title: 'Templates/Insight detail/Blog',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Long-form insight (blog) template, modelled on the case page: header, Title + image hero with breadcrumb, intro with meta, key figures, article sections as two-column rich text, numbered steps, an example, FAQ, sources, more blogs, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightBlogPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightBlogPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
