import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../cx'
import { Icon } from '../icons/icon'
import styles from './card-reveal.module.css'
import { assetAlt, assetSrc, type ImageInput } from '../asset'

/*
  Card image frame. Without `src` it shows the Figma placeholder (surface/base-3 + image icon),
  unless `placeholder` is false (background media in Hero, Testimonial, Vertical slider, Ask Youwe, Contact CTA).
  `data-clip` opts the frame into the template page clip reveal (shared/motion); background media stays out.
*/
export function CardMedia({
    src,
    alt = '',
    ratio,
    placeholder = true,
    clip = placeholder,
    className,
    style,
    children,
}: {
    /** A URL or a CMS asset ({ src, alt }); an asset's alt wins over `alt` */
    src?: ImageInput
    alt?: string
    ratio?: string
    placeholder?: boolean
    clip?: boolean
    className?: string
    style?: CSSProperties
    children?: ReactNode
}) {
    return (
        <span
            data-clip={clip || undefined}
            className={cx(styles.media, className)}
            style={{ display: 'block', aspectRatio: ratio, ...style }}
        >
            {assetSrc(src) ? (
                <img
                    src={assetSrc(src)}
                    alt={assetAlt(src, alt)}
                    loading="lazy"
                />
            ) : (
                placeholder && (
                    <span className={styles.placeholder} aria-hidden="true">
                        <Icon name="image" size={24} />
                    </span>
                )
            )}
            {children}
        </span>
    )
}
