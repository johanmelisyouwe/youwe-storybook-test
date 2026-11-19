import { Hero } from '../blocks/hero'
import { CardGrid } from '../blocks/card-grid'
import { FeatureCard } from '../ui/feature-card'
import { Page, Section, footer, header, type Device, useDevice } from './shared'
import { abstract } from '../media/media'
import { ASK, ERROR, HERO, PAGES, PAGES_INTRO } from './not-found.copy'

/*
  The 404 and Error pages (19 November; not in Figma), used by Templates/404 and Templates/Error.
  Framework-neutral: the site shows the 404 page for unknown URLs, and the Error page from its error
  boundary (whatever the framework calls it), passing `reset` (retry the part that failed) and, if
  there is one, a `digest` (a reference to the server log entry).
  - Gradient hero (as on Home, moving WebGL background) with the message and two buttons.
  - Popular pages: four clickable Feature Cards (arrow and card hover).
  - Footer; no sub-footer CTA (the hero has the buttons).
*/

function PopularPages({ Device }: { Device: Device }) {
    return (
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
    )
}

export function NotFoundPage({ Device: story }: { Device: Device }) {
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
            <PopularPages Device={Device} />
            {footer(Device)}
        </Page>
    )
}

export function ErrorPage({
    Device: story,
    reset,
    digest,
}: {
    Device: Device
    /** Retry: the error boundary's reset (re-renders the part that failed); default reloads the page */
    reset?: () => void
    /** Optional error reference (e.g. a server log id), shown so support can find it */
    digest?: string
}) {
    const Device = useDevice(story)
    return (
        <Page Device={story} ask={ASK}>
            <Hero
                Device={Device}
                image={abstract('009')}
                Background="WebGL"
                title={ERROR.title}
                body={
                    digest
                        ? `${ERROR.body} ${ERROR.reference}: ${digest}`
                        : ERROR.body
                }
                label={{ Type: 'Subtitle', Subtitle: ERROR.label }}
                buttons={[
                    {
                        label: ERROR.retry,
                        onClick: reset ?? (() => window.location.reload()),
                    },
                    ERROR.home,
                ]}
                header={header(Device)}
            />
            <PopularPages Device={Device} />
            {footer(Device)}
        </Page>
    )
}
