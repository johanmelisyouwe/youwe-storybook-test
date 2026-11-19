import type { ReactNode } from 'react'
import { Hero } from '../blocks/hero'
import { Page, Section, footer, header, type Device, useDevice } from './shared'

/*
  Shared frame of the legal templates (Cookies, Privacy Policy, Terms & Conditions; 19 November): header,
  a title-only hero (Title + image without image: breadcrumb, a "Legal" tag, the title), the page body
  (an Article block) in a dark section, footer. No sub-footer CTA, as in Figma.
*/

export function LegalPage({
    Device: story,
    title,
    ask,
    children,
}: {
    Device: Device
    title: string
    ask: string
    children: (Device: Device) => ReactNode
}) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask={ask}>
            {header(Device)}
            <Hero
                Variant="Title + image"
                Device={Device}
                title={[title]}
                tags={['Legal']}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [{ label: 'Home', href: '#' }, { label: title }],
                }}
            />
            <Section Mode="Dark">{children(Device)}</Section>
            {footer(Device)}
        </Page>
    )
}

export const legalMeta = (component: string) => ({
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: { description: { component } },
    },
})
