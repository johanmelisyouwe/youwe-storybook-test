import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from '../text-media/text-media.module.css'

/* Content blocks/Media — Figma 24988:606. Styles in TextMedia.css (shared media rules). */

export type MediaProps = {
    /** Figma: Layout */
    Layout?: 'Contained' | 'Full bleed' | 'Two-up staggered' | 'Two-up'
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Image / Image 2 */
    image?: string
    image2?: string
    alt?: string
    alt2?: string
}

export function Media({
    Layout = 'Contained',
    image,
    image2,
    alt,
    alt2,
}: MediaProps) {
    const two = Layout === 'Two-up' || Layout === 'Two-up staggered'
    return (
        <section
            data-full={Layout === 'Full bleed' || undefined}
            data-staggered={Layout === 'Two-up staggered' || undefined}
            className={cx(block.root, styles.media)}
        >
            <div
                className={cx(block.inner, styles.inner)}
                style={
                    Layout === 'Contained' || two
                        ? { paddingBlock: 'var(--spacing-4xl)' }
                        : undefined
                }
            >
                {two ? (
                    <div className={styles.mediaTwo}>
                        <CardMedia
                            src={image}
                            alt={alt}
                            ratio="632 / 736"
                            className={styles.clipReveal}
                        />
                        <CardMedia
                            src={image2}
                            alt={alt2}
                            ratio="632 / 736"
                            className={styles.clipReveal}
                        />
                    </div>
                ) : (
                    <CardMedia
                        src={image}
                        alt={alt}
                        ratio={
                            Layout === 'Full bleed' ? '16 / 9' : '1280 / 666'
                        }
                        className={styles.clipReveal}
                    />
                )}
            </div>
        </section>
    )
}
