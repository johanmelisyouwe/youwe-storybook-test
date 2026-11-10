import { useRef, useState } from 'react'
import { AskSnippet, type AskSnippetProps } from '../../site/ask-youwe'
import block from '../../shared/block/block.module.css'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import { Button } from '../../ui/button'
import styles from './aci-weave.module.css'

/*
  Content blocks/ACI Weave — built from the hand-built Home frames: desktop "Frame 6" (26598:4074),
  mobile "ACI Weave · video + nudge" (26924:10755). Not a Figma component yet (proposed for design review).
  Left: red-line kicker, heading/xl title, body/lg/reg body, Ask Youwe Nudge snippet, Primary M button.
  Right: video stack (16:9 frames on surface/base-2, caption body/sm/reg tertiary, gap 16; items gap 40).
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
}

const PlayGlyph = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M6 3.5v13l11-6.5z" fill="currentColor" />
    </svg>
)

function Video({ caption, poster, src }: WeaveVideo) {
    const ref = useRef<HTMLVideoElement>(null)
    const [playing, setPlaying] = useState(false)
    return (
        <figure className={styles.video}>
            <span className={styles.frame}>
                {src ? (
                    <video
                        ref={ref}
                        src={src}
                        poster={poster}
                        controls={playing}
                        playsInline
                        preload="none"
                        onPause={() => setPlaying(false)}
                        onPlay={() => setPlaying(true)}
                    />
                ) : (
                    <CardMedia src={poster} ratio="16 / 9" />
                )}
                {!playing &&
                    (src ? (
                        <button
                            type="button"
                            className={cx(styles.play, ring.root)}
                            aria-label={`Play video: ${caption}`}
                            onClick={() => ref.current?.play()}
                        >
                            <PlayGlyph />
                        </button>
                    ) : (
                        <span className={styles.play} aria-hidden="true">
                            <PlayGlyph />
                        </span>
                    ))}
            </span>
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
                            <Video key={v.caption} {...v} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
