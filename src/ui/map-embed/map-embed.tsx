import { cx } from '../../shared/cx'
import styles from './map-embed.module.css'

/*
  Map embed — code component (not in Figma; added 19 November for the Event template's venue). A Google
  Maps embed of one place (no API key: the public embed URL), with a route link underneath via the
  `children` slot. Theme Dark shows the map in dark colours to fit the site (a colour filter on the
  embed, since the keyless embed has no style options); Light shows Google's own colours.
  Privacy: the embed loads Google content and cookies when it comes into view (loading="lazy"). On the
  live site, render it only after consent for third-party content, or show the route link alone.
*/

export type MapEmbedProps = {
    /** Place or address to show, e.g. "SnowWorld Zoetermeer, Buytenparklaan 30, Zoetermeer" */
    query: string
    /** Accessible name of the map frame */
    title: string
    /** Map zoom, 1 (world) to 21 (building); default 15 */
    zoom?: number
    Theme?: 'Dark' | 'Light'
    /** Aspect ratio, default 16 / 9 */
    ratio?: string
    className?: string
}

/** A Google Maps directions link to the same place, for a "Plan your route" button */
export const routeUrl = (query: string) =>
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`

export function MapEmbed({
    query,
    title,
    zoom = 15,
    Theme = 'Dark',
    ratio = '16 / 9',
    className,
}: MapEmbedProps) {
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`
    return (
        <div
            data-dark={Theme === 'Dark' || undefined}
            className={cx(styles.root, className)}
            style={{ aspectRatio: ratio }}
        >
            <iframe
                className={styles.frame}
                src={src}
                title={title}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    )
}
