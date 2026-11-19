import { cx } from '../../shared/cx'
import styles from './timetable.module.css'

/*
  Timetable — code component (not in Figma; added 19 November for the Event detail template). The
  programme of an event: one row per slot, the time on the left and what happens on the right.
*/

export type TimetableProps = {
    items: { time: string; title: string }[]
    className?: string
}

export function Timetable({ items, className }: TimetableProps) {
    return (
        <ol className={cx(styles.root, className)}>
            {items.map((it) => (
                <li key={it.time} className={styles.row}>
                    <span className={cx(styles.time, 'yw-body-sm-bold')}>
                        {it.time}
                    </span>
                    <span className={cx(styles.title, 'yw-body-lg-reg')}>
                        {it.title}
                    </span>
                </li>
            ))}
        </ol>
    )
}
