import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { Article } from '../blocks/article'
import { CardGrid } from '../blocks/card-grid'
import { ContactCTA } from '../blocks/contact-cta'
import { InsightCard } from '../ui/insight-card'
import { QuoteCard } from '../ui/quote-card'
import { Button } from '../ui/button'
import { Prose } from '../shared/prose'
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
    BODY,
    CLOSING,
    GUIDE,
    INTRO,
    META,
    MORE,
    MORE_INFO,
    NAV,
    QUOTES,
    TITLE,
} from './insight-news.copy'

/*
  Templates/Insight detail/News — first version (19 November). Copy from Figma 27263:16916 (copy only).
  A short news page, so no panel beside the hero: Title + image hero, then the Article block straight
  away with the meta (published, type, topic) and "On this page" nav on the left, and the lead (the
  intro) opening the reading column. Sections: the announcement (paragraphs, the two quotes as Quote
  Cards, closing lines with the link) and the eCommerce comparison guide (whitepaper teaser with
  "Download now" and "Contact us"). More news, sub-footer and footer close the page.
*/

function InsightNewsPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="What does the Shopify Plus partnership mean?">
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
                        { label: 'News' },
                    ],
                }}
                image={abstract('016')}
            />
            <Section Mode="Dark">
                <Article
                    Device={Device}
                    meta={META}
                    lead={INTRO}
                    sections={[
                        {
                            id: 'announcement',
                            nav: NAV.announcement,
                            heading: NAV.announcement,
                            body: BODY,
                            children: (
                                <>
                                    {QUOTES.map((q) => (
                                        <QuoteCard
                                            key={q.Name}
                                            Mode="Dark"
                                            {...q}
                                        />
                                    ))}
                                    <Prose className="yw-body-lg-reg">
                                        <p>{CLOSING}</p>
                                        <p>
                                            {MORE_INFO.text}{' '}
                                            <a href={MORE_INFO.href}>
                                                {MORE_INFO.link}
                                            </a>
                                            .
                                        </p>
                                    </Prose>
                                </>
                            ),
                        },
                        {
                            id: 'comparison-guide',
                            nav: NAV.guide,
                            kicker: GUIDE.kicker,
                            heading: GUIDE.heading,
                            body: [GUIDE.body],
                            children: (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 'var(--spacing-xs)',
                                    }}
                                >
                                    <Button
                                        Variant="Primary"
                                        Size="M"
                                        label="Download now"
                                        href="#"
                                    />
                                    <Button
                                        Variant="Outline"
                                        Size="M"
                                        label="Contact us"
                                        href="#"
                                    />
                                </div>
                            ),
                        },
                    ]}
                />
            </Section>
            <Section Mode="Dark">
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{ Kicker: 'Keep reading', Title: 'More news' }}
                    cells={MORE.map(([Title, meta, img]) => (
                        <InsightCard
                            key={Title}
                            Device={Device}
                            Type="News"
                            Title={Title}
                            Meta={meta}
                            image={abstract(img)}
                            {...{ 'Hover CTA': 'Read the news' }}
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
    title: 'Templates/Insight detail/News',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'News template (first version): header, Title + image hero, then the Article block (meta, "On this page" nav, lead; the announcement with quotes, the comparison guide teaser), more news, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightNewsPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightNewsPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
