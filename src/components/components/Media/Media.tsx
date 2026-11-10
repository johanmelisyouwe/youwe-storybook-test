import { CardMedia } from '../../shared/CardMedia'
import '../../shared/block.css'
import '../TextMedia/TextMedia.css'

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
    const cls = [
        'yw-block',
        'yw-media',
        Layout === 'Full bleed' && 'yw-media--full',
        Layout === 'Two-up staggered' && 'yw-media--staggered',
    ]
        .filter(Boolean)
        .join(' ')
    return (
        <section className={cls}>
            <div
                className="yw-block__inner"
                style={
                    Layout === 'Contained' || two
                        ? { paddingBlock: 'var(--spacing-4xl)' }
                        : undefined
                }
            >
                {two ? (
                    <div className="yw-media__two">
                        <CardMedia
                            src={image}
                            alt={alt}
                            ratio="632 / 736"
                            className="yw-clip-reveal"
                        />
                        <CardMedia
                            src={image2}
                            alt={alt2}
                            ratio="632 / 736"
                            className="yw-clip-reveal"
                        />
                    </div>
                ) : (
                    <CardMedia
                        src={image}
                        alt={alt}
                        ratio={
                            Layout === 'Full bleed' ? '16 / 9' : '1280 / 666'
                        }
                        className="yw-clip-reveal"
                    />
                )}
            </div>
        </section>
    )
}
