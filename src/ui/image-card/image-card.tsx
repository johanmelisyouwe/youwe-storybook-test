import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import styles from './image-card.module.css'
import ring from '../../shared/focus-ring/focus-ring.module.css'

/* Image Card — Figma 26904:35 (page "Cards"). */

export type ImageCardProps = {
    image?: string
    alt?: string
    /** Figma: Caption (Show caption) */
    Caption?: string
    /** Aspect ratio of the image when the card does not fill a grid cell (Figma: 416 × 300) */
    ratio?: string
    href?: string
    className?: string
}

export function ImageCard({
    image,
    alt = '',
    Caption,
    ratio = '416 / 300',
    href,
    className,
}: ImageCardProps) {
    const inner = (
        <>
            <CardMedia
                className={styles.media}
                src={image}
                alt={alt}
                ratio={ratio}
            />
            {Caption && (
                <span className={cx(styles.caption, 'yw-body-sm-reg')}>
                    {Caption}
                </span>
            )}
        </>
    )
    const cls = cx(styles.root, className)
    return href ? (
        <a href={href} className={cx(cls, ring.root)}>
            {inner}
        </a>
    ) : (
        <figure className={cls}>{inner}</figure>
    )
}
