import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import { VideoPlayer, type VideoPlayerProps } from '../../ui/video-player'
import styles from '../text-media/text-media.module.css'

/*
  Content blocks/Media — Figma 24988:606. Styles in TextMedia.css (shared media rules).
  Video (not in Figma): give `video` (and `video2` for Two-up) to show a Video Player in the image's place,
  with the image as its poster. Autoplay defaults to "In view" (muted, looped, pause button); "Off" shows the
  play button. Same frame, ratio and clip reveal as the image.
*/

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
    /** Video in place of Image (Image becomes the poster); not a Figma property */
    video?: string
    video2?: string
    /** Video Player autoplay for video / video2 */
    Autoplay?: VideoPlayerProps['Autoplay']
}

export function Media({
    Layout = 'Contained',
    image,
    image2,
    alt,
    alt2,
    video,
    video2,
    Autoplay = 'In view',
}: MediaProps) {
    const two = Layout === 'Two-up' || Layout === 'Two-up staggered'
    // One frame: the Video Player when there's a video, otherwise the image
    const frame = (
        src: string | undefined,
        vid: string | undefined,
        label: string | undefined,
        ratio: string
    ) =>
        vid ? (
            <VideoPlayer
                src={vid}
                poster={src}
                title={label || 'Video'}
                Autoplay={Autoplay}
                ratio={ratio}
                className={styles['clip-reveal']}
            />
        ) : (
            <CardMedia
                src={src}
                alt={label}
                ratio={ratio}
                className={styles['clip-reveal']}
            />
        )
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
                    <div className={styles['media-two']}>
                        {frame(image, video, alt, '632 / 736')}
                        {frame(image2, video2, alt2, '632 / 736')}
                    </div>
                ) : (
                    frame(
                        image,
                        video,
                        alt,
                        Layout === 'Full bleed' ? '16 / 9' : '1280 / 666'
                    )
                )}
            </div>
        </section>
    )
}
