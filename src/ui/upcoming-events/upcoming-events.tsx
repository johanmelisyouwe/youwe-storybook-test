import { CardReveal } from '../../shared/card-reveal'
import { ButtonLink } from '../button-link'
import { cx } from '../../shared/cx'
import reveal from '../../shared/card-reveal/card-reveal.module.css'
import styles from './upcoming-events.module.css'

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
        <a href={href} className={cx(reveal.root, styles.event, className)}>
            <span className={styles['event-date']} aria-hidden="true">
                <span className="yw-heading-2xl">{Day}</span>
                <span className={cx(styles['event-month'], 'yw-body-xs-bold')}>
                    {Month}
                </span>
            </span>
            <span className="yw-visually-hidden">{date}: </span>
            <span className={styles['event-text']}>
                <span className="yw-body-md-med">{Title}</span>
                <span className={reveal.tags}>
                    <span
                        data-type
                        className={cx(reveal.tag, 'yw-body-xs-reg')}
                    >
                        {Place}
                    </span>
                </span>
            </span>
            <CardReveal cta={cta} context={`${date} · ${Place}`} />
        </a>
    )
}

/** Fixed UI text (English defaults); pass `labels` to translate (NL, SV) */
export const UPCOMING_EVENTS_LABELS = {
    title: 'Upcoming events',
    all: 'All events',
}

export type UpcomingEventsProps = {
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    events: EventItem[]
    allHref?: string
    /** UI text, for translations: { ...UPCOMING_EVENTS_LABELS } */
    labels?: Partial<typeof UPCOMING_EVENTS_LABELS>
}

export function UpcomingEvents({
    Device = 'Desktop',
    events,
    allHref = '#',
    labels,
}: UpcomingEventsProps) {
    const L = { ...UPCOMING_EVENTS_LABELS, ...labels }
    return (
        <section
            data-mobile={Device === 'Mobile' || undefined}
            className={cx(styles.root)}
        >
            <h2 className={styles.heading}>
                <span className={cx(styles.eyebrow, 'yw-body-sm-bold')}>
                    Events
                </span>
                <span className="yw-heading-md">{L.title}</span>
            </h2>
            <ul className={styles.list}>
                {events.slice(0, 4).map((e) => (
                    <li key={e.Title}>
                        <EventCard {...e} />
                    </li>
                ))}
            </ul>
            <ButtonLink Size="md" label={L.all} href={allHref} />
        </section>
    )
}
