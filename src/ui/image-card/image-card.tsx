import type { ImageInput } from '../../shared/asset'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import styles from './image-card.module.css'
import ring from '../../shared/focus-ring/focus-ring.module.css'

/* Image Card — Figma 26904:35 (page "Cards"). */

export type ImageCardProps = {
    image?: ImageInput
    alt?: string
    /** Figma: Caption (Show caption) */
    Caption?: string
    /** Aspect ratio of the image when the card does not fill a grid cell (Figma: 416 × 300) */
    ratio?: string
    href?: string
    /** Contain: show the whole image (a diagram or screenshot) on the image's own dark background
        instead of cropping it to the cell (code option, 20 November; ACI Weave approval loop) */
    Fit?: 'Cover' | 'Contain'
    className?: string
}

export function ImageCard({
    image,
    alt = '',
    Caption,
    ratio = '416 / 300',
    href,
    Fit = 'Cover',
    className,
}: ImageCardProps) {
    const inner = (
        <>
            <CardMedia
                className={cx(
                    styles.media,
                    Fit === 'Contain' && styles.contain
                )}
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
