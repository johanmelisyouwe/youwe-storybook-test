import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactCTA } from '../blocks/contact-cta'
import { Offices } from '../blocks/offices'
import { OFFICES } from '../blocks/offices/offices.copy'
import { AskSnippet } from '../site/ask-youwe'
import block from '../shared/block/block.module.css'
import { Page, Section, footer, header, type Device, useDevice } from './shared'
import { caseImage } from '../media/media'
import {
    ASK,
    COUNTRIES,
    HERO,
    OFFICES_INTRO,
    TOPICS,
    WORK,
} from './contact.copy'

/*
  Templates/Contact — first version (19 November). Copy from Figma "Desktop 1440 — Contact" (27263:18403),
  copy only. The page opens with the Contact CTA form as the hero (breadcrumb, "Contact" kicker, title,
  body, phone; the form with the Figma fields: name, business email, phone, country, who to contact,
  message, an optional attachment and the opt-in). Then the offices with live local time and an Ask
  Youwe question ("Where are your offices?"), and the work CTA in light mode (Contact CTA Sub-footer
  split with a case image). Footer.
*/

function ContactPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask={ASK}>
            {header(Device)}
            <ContactCTA
                Variant="Form"
                Device={Device}
                crumbs={[{ label: 'Home', href: '#' }, { label: 'Contact' }]}
                {...HERO}
                countries={COUNTRIES}
                topics={TOPICS}
                attachment
                submit="Send message"
            />
            <Section Mode="Dark">
                <Offices Device={Device} {...OFFICES_INTRO} offices={OFFICES} />
                <div className={block.root}>
                    <div className={block.inner} style={{ paddingTop: 0 }}>
                        <AskSnippet
                            Type="Question"
                            Device={Device}
                            Title={ASK}
                        />
                    </div>
                </div>
            </Section>
            <Section Mode="Light">
                <ContactCTA
                    Variant="Sub-footer split"
                    Device={Device}
                    {...WORK}
                    image={caseImage('quooker-1')}
                />
            </Section>
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
                    'Contact page (first version): header, the contact form as hero (breadcrumb, kicker, title, body, phone; form with who to contact and an attachment), offices with live local time and an Ask Youwe question, a light work CTA, footer.',
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
