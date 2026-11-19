import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CardGrid } from '../blocks/card-grid'
import { FeatureCard } from '../ui/feature-card'
import { Page, Section, footer, header, type Device, useDevice } from './shared'
import { abstract } from '../media/media'
import { ASK, HERO, PAGES, PAGES_INTRO } from './not-found.copy'

/*
  Templates/404 — first version (19 November). Not in Figma: built from existing components. The
  Gradient hero (as on Home, with the moving WebGL background) says the page is gone and offers "Back to
  home" and "Contact us"; the Ask Youwe dock asks "What are you looking for?". Below, four popular pages
  as clickable Feature Cards (arrow and the card hover). Footer. No sub-footer CTA: the hero already
  has the contact button.
*/

function NotFoundPage({ Device: story }: { Device: Device }) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask={ASK}>
            <Hero
                Device={Device}
                image={abstract('016')}
                Background="WebGL"
                title={HERO.title}
                body={HERO.body}
                label={{ Type: 'Subtitle', Subtitle: HERO.label }}
                buttons={HERO.buttons}
                header={header(Device)}
            />
            <Section Mode="Dark">
                <CardGrid
                    Layout={Device === 'Mobile' ? '2 columns' : '4 columns'}
                    Device={Device}
                    intro={PAGES_INTRO}
                    cells={PAGES.map((p) => (
                        <FeatureCard
                            key={p.Title}
                            Variant="Card"
                            Title={p.Title}
                            Description={p.Description}
                            href="#"
                            {...{ 'Show arrow': true, 'Hover CTA': p.cta }}
                        />
                    ))}
                />
            </Section>
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/404',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    '404 page (not in Figma): Gradient hero with "Page not found", Back to home and Contact us, the Ask Youwe dock ("What are you looking for?"), four popular pages as clickable Feature Cards, footer.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = {
    render: () => <NotFoundPage Device="Desktop" />,
}
export const Mobile: Story = {
    render: () => <NotFoundPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
