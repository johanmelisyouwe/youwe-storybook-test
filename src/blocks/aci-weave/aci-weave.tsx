import { AskSnippet, type AskSnippetProps } from '../../site/ask-youwe'
import block from '../../shared/block/block.module.css'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import { Button } from '../../ui/button'
import { VideoPlayer, type VideoPlayerProps } from '../../ui/video-player'
import styles from './aci-weave.module.css'

/*
  Content blocks/ACI Weave — Figma component set 27239:117 (Device: Desktop 27192:120, Mobile 27192:147),
  made from the hand-built Home frames; its videos are Video Player instances (Autoplay In view).
  Left: red-line kicker, heading/xl title, body/lg/reg body, Ask Youwe Nudge snippet, Primary M button.
  Right: video stack (Video Player 16:9, caption body/sm/reg tertiary, gap 16; items gap 40). The videos
  autoplay muted while in view (Autoplay "In view", the default); "Off" shows the play button instead.
  Desktop: two equal columns, gap 80, padding 80; the text column stays in view while the videos scroll.
  Mobile: stacked, gap 48, padding 80/12.
  As on the v2 site: each item is a panel (surface/base-2, card radius) with the media on top and a caption bar
  (caption left, tag right); an item without a video file is a still screenshot. Two buttons: Primary + Solid.
*/

export type WeaveVideo = {
    caption: string
    /** Right side of the caption bar, e.g. Demo */
    tag?: string
    poster?: string
    /** Video file or Vimeo URL; without it the panel shows the poster as a still screenshot */
    src?: string
    /** Still screenshot: alt text */
    alt?: string
}

export type AciWeaveProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    title: string
    body: string
    /** Ask Youwe/Snippet (Nudge) under the body */
    snippet?: Pick<AskSnippetProps, 'Title' | 'href' | 'onAsk'>
    button?: { label: string; href: string }
    /** Second button (Solid), next to the first */
    button2?: { label: string; href: string }
    videos: WeaveVideo[]
    /** Video Player autoplay: "In view" (default) plays each video muted while it's on screen */
    Autoplay?: VideoPlayerProps['Autoplay']
}

function Video({
    caption,
    tag,
    poster,
    src,
    alt,
    Autoplay,
}: WeaveVideo & { Autoplay: VideoPlayerProps['Autoplay'] }) {
    return (
        <figure className={styles.video}>
            {src ? (
                <VideoPlayer
                    src={src}
                    poster={poster}
                    title={caption}
                    Autoplay={Autoplay}
                />
            ) : (
                <CardMedia src={poster} alt={alt} ratio="16 / 9" />
            )}
            <figcaption className={cx(styles.caption, 'yw-body-sm-reg')}>
                <span>{caption}</span>
                {tag && <span className={styles.tag}>{tag}</span>}
            </figcaption>
        </figure>
    )
}

export function AciWeave({
    Device = 'Desktop',
    kicker = 'ACI Weave',
    title,
    body,
    snippet,
    button,
    button2,
    videos,
    Autoplay = 'In view',
}: AciWeaveProps) {
    return (
        <section className={cx(block.root, styles.root)}>
            <div className={cx(block.inner, styles.inner)}>
                <div className={styles.grid}>
                    <div data-rise className={styles.content}>
                        <div className={styles.text}>
                            <span
                                className={cx(block.kicker, 'yw-body-sm-bold')}
                            >
                                {kicker}
                            </span>
                            <h2 className="yw-heading-xl">{title}</h2>
                            <p className={cx(styles.body, 'yw-body-lg-reg')}>
                                {body}
                            </p>
                            {snippet && (
                                <AskSnippet
                                    Type="Nudge"
                                    Device={Device}
                                    {...snippet}
                                />
                            )}
                        </div>
                        {(button || button2) && (
                            <div className={styles.actions}>
                                {button && (
                                    <Button
                                        Variant="Primary"
                                        Size="M"
                                        label={button.label}
                                        href={button.href}
                                    />
                                )}
                                {button2 && (
                                    <Button
                                        Variant="Solid"
                                        Size="M"
                                        label={button2.label}
                                        href={button2.href}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    <div data-stagger className={styles.videos}>
                        {videos.map((v) => (
                            <Video key={v.caption} {...v} Autoplay={Autoplay} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
