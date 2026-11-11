import { AskSnippet, type AskSnippetProps } from '../../site/ask-youwe'
import block from '../../shared/block/block.module.css'
import { cx } from '../../shared/cx'
import { Button } from '../../ui/button'
import { VideoPlayer, type VideoPlayerProps } from '../../ui/video-player'
import styles from './aci-weave.module.css'

/*
  Content blocks/ACI Weave — built from the hand-built Home frames: desktop "Frame 6" (26598:4074),
  mobile "ACI Weave · video + nudge" (26924:10755). Not a Figma component yet (proposed for design review).
  Left: red-line kicker, heading/xl title, body/lg/reg body, Ask Youwe Nudge snippet, Primary M button.
  Right: video stack (Video Player 16:9, caption body/sm/reg tertiary, gap 16; items gap 40). The videos
  autoplay muted while in view (Autoplay "In view", the default); "Off" shows the play button instead.
  Desktop: two equal columns, gap 80, padding 80; the text column stays in view while the videos scroll.
  Mobile: stacked, gap 48, padding 80/12.
*/

export type WeaveVideo = { caption: string; poster?: string; src?: string }

export type AciWeaveProps = {
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    kicker?: string
    title: string
    body: string
    /** Ask Youwe/Snippet (Nudge) under the body */
    snippet?: Pick<AskSnippetProps, 'Title' | 'href' | 'onAsk'>
    button?: { label: string; href: string }
    videos: WeaveVideo[]
    /** Video Player autoplay: "In view" (default) plays each video muted while it's on screen */
    Autoplay?: VideoPlayerProps['Autoplay']
}

function Video({
    caption,
    poster,
    src,
    Autoplay,
}: WeaveVideo & { Autoplay: VideoPlayerProps['Autoplay'] }) {
    return (
        <figure className={styles.video}>
            <VideoPlayer
                src={src}
                poster={poster}
                title={caption}
                Autoplay={Autoplay}
            />
            <figcaption className={cx(styles.caption, 'yw-body-sm-reg')}>
                {caption}
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
                        {button && (
                            <div>
                                <Button
                                    Variant="Primary"
                                    Size="M"
                                    label={button.label}
                                    href={button.href}
                                />
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
