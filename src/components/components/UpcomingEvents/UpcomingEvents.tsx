import { CardReveal } from '../../shared/CardReveal'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import './UpcomingEvents.css'

/* Upcoming events — Figma 26740:42; _Upcoming events/Row — 26887:988 (page "Insights"). */

export type EventItem = {
    Day: string
    Month: string
    Title: string
    Place: string
    /** Full date for screen readers and the hover context, e.g. "28 October" */
    date: string
    href: string
    'Hover CTA'?: string
}

/* _Upcoming events/Row — whole card is one link; hover plays the red reveal */
export function EventCard({
    Day,
    Month,
    Title,
    Place,
    date,
    href,
    'Hover CTA': cta = 'View the event',
    className,
}: EventItem & { className?: string }) {
    return (
        <a
            href={href}
            className={['yw-reveal', 'yw-event', className]
                .filter(Boolean)
                .join(' ')}
        >
            <span className="yw-event__date" aria-hidden="true">
                <span className="yw-heading-2xl">{Day}</span>
                <span className="yw-event__month yw-body-xs-bold">{Month}</span>
            </span>
            <span className="yw-visually-hidden">{date}: </span>
            <span className="yw-event__text">
                <span className="yw-body-md-med">{Title}</span>
                <span className="yw-card-tags">
                    <span className="yw-card-tag yw-card-tag--type yw-body-xs-reg">
                        {Place}
                    </span>
                </span>
            </span>
            <CardReveal cta={cta} context={`${date} · ${Place}`} />
        </a>
    )
}

export type UpcomingEventsProps = {
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    events: EventItem[]
    allHref?: string
}

export function UpcomingEvents({
    Device = 'Desktop',
    events,
    allHref = '#',
}: UpcomingEventsProps) {
    return (
        <section
            className={['yw-events', Device === 'Mobile' && 'yw-events--mobile']
                .filter(Boolean)
                .join(' ')}
        >
            <h2 className="yw-events__heading">
                <span className="yw-events__eyebrow yw-body-sm-bold">
                    Events
                </span>
                <span className="yw-heading-md">Upcoming events</span>
            </h2>
            <ul className="yw-events__list">
                {events.slice(0, 4).map((e) => (
                    <li key={e.Title}>
                        <EventCard {...e} />
                    </li>
                ))}
            </ul>
            <ButtonLink Size="md" label="All events" href={allHref} />
        </section>
    )
}
