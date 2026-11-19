import { Button } from '../button'
import { cx } from '../../shared/cx'
import styles from './event-details.module.css'

/*
  Event details — code component (not in Figma; added 19 November for the Event detail template). The
  practical facts of an event in one panel: date, time, venue (or any label/value rows), with the
  register and route buttons underneath. The first row is the headline (body/2xl/med), so the date
  reads first.
*/

export type EventDetailsProps = {
    Device?: 'Desktop' | 'Mobile'
    /** Rows, e.g. Date / Time / Venue. Values may have line breaks (an address). */
    items: { label: string; value: string }[]
    /** Primary button, e.g. "Register now" linking to the form (#register) */
    primary?: { label: string; href: string }
    /** Second button, e.g. "Plan your route" */
    secondary?: { label: string; href: string }
    className?: string
}

export function EventDetails({
    Device = 'Desktop',
    items,
    primary,
    secondary,
    className,
}: EventDetailsProps) {
    return (
        <div className={cx(styles.root, className)}>
            <dl className={styles.list}>
                {items.map((it, i) => (
                    <div key={it.label} className={styles.item}>
                        <dt className={cx(styles.label, 'yw-body-xs-bold')}>
                            {it.label}
                        </dt>
                        <dd
                            className={
                                i === 0
                                    ? Device === 'Mobile'
                                        ? 'yw-body-xl-med'
                                        : 'yw-body-2xl-med'
                                    : 'yw-body-md-reg'
                            }
                        >
                            {it.value}
                        </dd>
                    </div>
                ))}
            </dl>
            {(primary || secondary) && (
                <div className={styles.buttons}>
                    {primary && (
                        <Button
                            Variant="Primary"
                            Size="M"
                            label={primary.label}
                            href={primary.href}
                        />
                    )}
                    {secondary && (
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={secondary.label}
                            href={secondary.href}
                        />
                    )}
                </div>
            )}
        </div>
    )
}
