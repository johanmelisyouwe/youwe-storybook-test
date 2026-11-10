import type { ReactNode } from 'react'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './text-media.module.css'

/* Content blocks/Text + media — Figma 24985:702. */

export type TextMediaProps = {
    /** Figma: Device (layout follows the block width; tablet and mobile stack) */
    Device?: 'Desktop' | 'Tablet' | 'Mobile'
    /** Figma: Media position */
    'Media position'?: 'Right' | 'Left'
    /** Figma: Split */
    Split?: '6/6' | '4/8' | '8/4'
    /** Figma: Theme */
    Theme?: 'Dark' | 'Deep blue' | 'Light'
    heading: string
    body: string
    image?: string
    alt?: string
    /** Other media in place of the image, e.g. a Case Card (Industries detail template) */
    media?: ReactNode
}

export function TextMedia({
    'Media position': pos = 'Right',
    Split = '6/6',
    Theme = 'Dark',
    heading,
    body,
    image,
    alt,
    media,
}: TextMediaProps) {
    return (
        <section
            data-split={Split !== '6/6' ? Split.replace('/', '-') : undefined}
            data-left={pos === 'Left' || undefined}
            data-deep-blue={Theme === 'Deep blue' || undefined}
            className={cx(block.root, styles.root)}
            data-theme={Theme === 'Light' ? 'light' : undefined}
        >
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles.grid}>
                    <div className={cx(styles.text, block.reveal)}>
                        <h2
                            className="yw-heading-xl"
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {heading}
                        </h2>
                        <p className={cx(styles.body, 'yw-body-md-reg')}>
                            {body}
                        </p>
                    </div>
                    {media ?? (
                        <CardMedia
                            src={image}
                            alt={alt}
                            ratio="608 / 474"
                            className={styles.clipReveal}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
