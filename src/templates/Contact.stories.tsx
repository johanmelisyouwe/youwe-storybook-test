import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { HeroAside } from '../blocks/hero-aside'
import { Article } from '../blocks/article'
import { Offices } from '../blocks/offices'
import { OFFICES } from '../blocks/offices/offices.copy'
import { ContactCTA } from '../blocks/contact-cta'
import { EventDetails } from '../ui/event-details'
import { RegistrationForm } from '../ui/registration-form'
import { AskSnippet } from '../site/ask-youwe'
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
import {
    ASK,
    COUNTRIES,
    FORM_LABELS,
    INTRO_BODY,
    INTRO_HEADING,
    MESSAGE,
    OFFICES_INTRO,
    PANEL,
    PHONE,
    TITLE,
    TOPICS,
    WORK,
} from './contact.copy'

/*
  Templates/Contact — second version (19 November): our own layout from existing components, with the
  copy of Figma "Desktop 1440 — Contact" (27263:18403). Same logic as the Event page:
  - Hero aside: a title-only hero (breadcrumb, Contact tag, title) with a contact panel beside it (Event
    details: call us, response time, offices; "Call us" button) and the Ask Youwe question under it.
    The panel stays in view while you fill in the form, and rests at its end.
  - The intro and the form in the reading column (Article without nav): the Registration form on its
    panel, with the Figma fields (name, business email, phone, country, who to contact, message,
    attachment, opt-in) and a confirmation.
  - Offices with live local time; the work CTA as the usual Sub-footer background; footer.
*/

function ContactPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask={ASK}>
            {header(Device)}
            <HeroAside
                label="Contact details"
                hero={
                    <Hero
                        Variant="Title + image"
                        Device={Device}
                        title={[TITLE]}
                        tags={['Contact']}
                        label={{
                            Type: 'Breadcrumb',
                            crumbs: [
                                { label: 'Home', href: '#' },
                                { label: 'Contact' },
                            ],
                        }}
                    />
                }
                aside={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)',
                        }}
                    >
                        <EventDetails
                            Device={Device}
                            items={PANEL}
                            primary={{
                                label: 'Call us',
                                href: `tel:${PHONE.replace(/[^+\d]/g, '')}`,
                            }}
                        />
                        <AskSnippet
                            Type="Question"
                            Device={Device}
                            Title={ASK}
                        />
                    </div>
                }
            >
                <Section Mode="Dark">
                    <Article
                        Device={Device}
                        nav={false}
                        lead={INTRO_HEADING}
                        intro={[INTRO_BODY]}
                        sections={[
                            {
                                id: 'form',
                                heading: 'Send us a message',
                                children: (
                                    <RegistrationForm
                                        Device={Device}
                                        company={false}
                                        jobTitle={false}
                                        phone
                                        countries={COUNTRIES}
                                        topics={TOPICS}
                                        question={MESSAGE}
                                        attachment
                                        labels={FORM_LABELS}
                                        onSubmit={() =>
                                            new Promise((r) =>
                                                setTimeout(r, 800)
                                            )
                                        }
                                    />
                                ),
                            },
                        ]}
                    />
                </Section>
            </HeroAside>
            <Section Mode="Dark">
                <Offices Device={Device} {...OFFICES_INTRO} offices={OFFICES} />
            </Section>
            <ContactCTA
                Variant="Sub-footer background"
                Device={Device}
                {...WORK}
                offices={WORK_WITH_US.offices}
                image={abstract('009')}
            />
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Contact',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Contact page: title-only hero with a sticky contact panel (call us, response time, offices, Ask Youwe) beside the title and the form; intro and the contact form (Registration form) in the reading column; offices with live local time; work sub-footer; footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <ContactPage Device="Desktop" /> }
export const Mobile: Story = {
    render: () => <ContactPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
