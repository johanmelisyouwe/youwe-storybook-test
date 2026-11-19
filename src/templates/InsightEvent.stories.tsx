import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { TextMedia } from '../blocks/text-media'
import { HeroAside } from '../blocks/hero-aside'
import { Article } from '../blocks/article'
import { CardGrid } from '../blocks/card-grid'
import { ContactCTA } from '../blocks/contact-cta'
import { InsightCard } from '../ui/insight-card'
import { EventDetails } from '../ui/event-details'
import { Timetable } from '../ui/timetable'
import { RegistrationForm } from '../ui/registration-form'
import { Button } from '../ui/button'
import { MapEmbed, routeUrl } from '../ui/map-embed'
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
    AGENDA,
    CHOICE,
    DETAILS,
    INTRO_BODY,
    INTRO_HEADING,
    MORE,
    NAV,
    QUESTION,
    TAKEAWAYS,
    TIMETABLE,
    TAGS,
    TITLE,
    VENUE,
    WHY,
} from './insight-event.copy'

/*
  Templates/Insight detail/Event — first version (19 November). Copy from Figma 27263:17242 (copy only);
  layout follows Blog v2: Title + image hero with the Event details panel (date, time, venue, "Register
  now" to the form and "Plan your route") beside the title, sticky over the hero image until it rests
  beside the intro (Hero aside, decided 19 November); then the Article block
  with the meta and the "On this page" nav on the left and the sections on the right: why attend,
  agenda, timetable (Timetable), takeaways, venue (Google Maps embed in dark colours, Map embed), and the Registration form (not in Figma: it only has
  "Register now" buttons). More events, sub-footer and footer close the page. Placeholder images.
*/

const PLACE = `${VENUE.name}, ${VENUE.address}`
const ROUTE = routeUrl(PLACE)

function InsightEventPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask="What happens at Higher Ground?">
            {header(Device)}
            <HeroAside
                label="Event details"
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
                                { label: 'Event' },
                            ],
                        }}
                        image={abstract('001')}
                    />
                }
                aside={
                    <EventDetails
                        Device={Device}
                        items={DETAILS}
                        primary={{ label: 'Register now', href: '#register' }}
                        secondary={{ label: 'Plan your route', href: ROUTE }}
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
                <Article
                    Device={Device}
                    sections={[
                        {
                            id: 'why-attend',
                            nav: NAV.why,
                            heading: 'Why attend',
                            body: (
                                <ul>
                                    {WHY.map(([lead, text]) => (
                                        <li key={text}>
                                            {lead && <strong>{lead}</strong>}{' '}
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            ),
                        },
                        {
                            id: 'agenda',
                            nav: NAV.agenda,
                            heading: 'Agenda',
                            body: (
                                <ul>
                                    {AGENDA.map((a) => (
                                        <li key={a}>{a}</li>
                                    ))}
                                </ul>
                            ),
                        },
                        {
                            id: 'timetable',
                            nav: NAV.timetable,
                            heading: 'Timetable',
                            children: <Timetable items={TIMETABLE} />,
                        },
                        {
                            id: 'take-away',
                            nav: NAV.takeaways,
                            heading: 'What you will take away',
                            body: (
                                <ul>
                                    {TAKEAWAYS.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            ),
                        },
                        {
                            id: 'venue',
                            nav: NAV.venue,
                            heading: 'Venue',
                            body: (
                                <p>
                                    <strong>{VENUE.name}</strong>
                                    <br />
                                    {VENUE.address}
                                </p>
                            ),
                            children: (
                                <>
                                    <MapEmbed
                                        query={PLACE}
                                        title={`Map: ${VENUE.name}`}
                                        ratio="740 / 420"
                                    />
                                    <div>
                                        <Button
                                            Variant="Primary"
                                            Size="M"
                                            label="Plan your route"
                                            href={ROUTE}
                                        />
                                    </div>
                                </>
                            ),
                        },
                        {
                            id: 'register',
                            nav: NAV.register,
                            kicker: NAV.register,
                            heading: 'Register your interest',
                            children: (
                                <RegistrationForm
                                    Device={Device}
                                    choice={CHOICE}
                                    question={QUESTION}
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
                    intro={{ Kicker: 'Events', Title: 'More events' }}
                    cells={MORE.map(([Title, meta, img]) => (
                        <InsightCard
                            key={Title}
                            Device={Device}
                            Type="Event"
                            Title={Title}
                            Meta={meta}
                            image={abstract(img)}
                            {...{ 'Hover CTA': 'View the event' }}
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
    title: 'Templates/Insight detail/Event',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Event template (first version): header, Title + image hero with breadcrumb, intro beside the Event details panel, then the Article block (meta and "On this page" nav; why attend, agenda, timetable, takeaways, venue, registration form), more events, sub-footer and footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <InsightEventPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <InsightEventPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
