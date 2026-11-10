import type { ReactNode } from 'react'
import { CardMedia } from '../../shared/CardMedia'
import '../../shared/block.css'
import './TextMedia.css'

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
    const cls = [
        'yw-block',
        'yw-text-media',
        Split !== '6/6' && `yw-text-media--${Split.replace('/', '-')}`,
        pos === 'Left' && 'yw-text-media--left',
        Theme === 'Deep blue' && 'yw-text-media--deep-blue',
    ]
        .filter(Boolean)
        .join(' ')
    return (
        <section
            className={cls}
            data-theme={Theme === 'Light' ? 'light' : undefined}
        >
            <div className="yw-block__inner">
                <div className="yw-text-media__grid">
                    <div className="yw-text-media__text yw-block-reveal">
                        <h2
                            className="yw-heading-xl"
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {heading}
                        </h2>
                        <p className="yw-text-media__body yw-body-md-reg">
                            {body}
                        </p>
                    </div>
                    {media ?? (
                        <CardMedia
                            src={image}
                            alt={alt}
                            ratio="608 / 474"
                            className="yw-clip-reveal"
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
