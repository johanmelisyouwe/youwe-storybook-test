import { useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './industry-list-item.module.css'

/*
  Industry List Item — Figma 25019:679 (page "Industries").
  Interaction (Figma): the first item is active; the active item follows hover and focus.
*/

export type Industry = {
    Number: string
    Title: string
    Subtitle?: string
    /** Preview image (desktop) and the customer shown on it (Figma: Show preview image) */
    preview?: { image?: string; customer: string }
    href: string
}

export type IndustryListItemProps = Industry & {
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Expanded */
    Expanded?: 'No' | 'Yes'
    onActivate?: () => void
    className?: string
}

export function IndustryListItem({
    Number,
    Title,
    Subtitle,
    preview,
    href,
    Device = 'Desktop',
    Expanded = 'No',
    onActivate,
    className,
}: IndustryListItemProps) {
    const desktop = Device === 'Desktop'
    return (
        <li>
            <a
                href={href}
                data-device={Device.toLowerCase()}
                data-expanded={Expanded === 'Yes' || undefined}
                className={cx(styles.root, ring.root, className)}
                onMouseEnter={onActivate}
                onFocus={onActivate}
            >
                <span className={styles.content}>
                    <span
                        className={[
                            styles.number,
                            desktop ? 'yw-body-xl-reg' : 'yw-body-lg-reg',
                        ].join(' ')}
                    >
                        {Number}
                    </span>
                    <span className={styles.text}>
                        <span className="yw-heading-lg">{Title}</span>
                        {Subtitle && (
                            <span className={cx(styles.sub, 'yw-body-md-reg')}>
                                <span>{Subtitle}</span>
                            </span>
                        )}
                    </span>
                </span>
                <span className={styles.chevron} aria-hidden="true">
                    <Icon name="chevron-right" size={24} />
                </span>
                {desktop && preview && (
                    <CardMedia src={preview.image} className={styles.preview}>
                        <span className={cx(styles.customer, 'yw-body-sm-reg')}>
                            {preview.customer}
                        </span>
                    </CardMedia>
                )}
            </a>
        </li>
    )
}

/** List of industries; the first is active and the active row follows hover and focus. */
export function IndustryList({
    items,
    Device = 'Desktop',
}: {
    items: Industry[]
    Device?: 'Desktop' | 'Mobile'
}) {
    const [active, setActive] = useState(0)
    return (
        <ul
            data-mobile={Device === 'Mobile' || undefined}
            className={cx(styles['industry-list'])}
        >
            {items.map((it, i) => (
                <IndustryListItem
                    key={it.Number}
                    {...it}
                    Device={Device}
                    Expanded={i === active ? 'Yes' : 'No'}
                    onActivate={() => setActive(i)}
                />
            ))}
        </ul>
    )
}
