import { useEffect, useRef, useState } from 'react'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './video-player.module.css'

/*
  Video Player — not a Figma component. Used on its own (ACI Weave) and inside Content blocks/Media, where it
  takes the place of an image (Media video / video2) (Figma has a "Video" placeholder frame in the ACI Weave block on Home,
  26598:4074): a 16:9 poster with the red play button, playing a native <video>.
  Autoplay "Off": the poster and play button; play starts the video with the browser's own controls.
  Autoplay "In view": plays muted and looped while at least half of it is on screen, pauses when it leaves.
  A small pause button stays on the video (WCAG 2.2.2: moving content can be paused); once someone pauses,
  it doesn't start again by itself. With reduced motion it never autoplays and behaves like "Off".
*/

export type VideoPlayerProps = {
    /** Video file. Without it only the poster and a decorative play button are shown. */
    src?: string
    poster?: string
    /** Accessible name, e.g. the caption: "Demo: ACI Weave in action" */
    title: string
    /** Off: plays on click. In view: plays muted and looped while visible. */
    Autoplay?: 'Off' | 'In view'
    /** WebVTT captions file */
    captions?: string
    /** Frame ratio, default 16 / 9 (the Media block passes its own, e.g. 632 / 736 for Two-up) */
    ratio?: string
    className?: string
}

const PlayGlyph = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
        <path d="M6 3.5v13l11-6.5z" fill="currentColor" />
    </svg>
)
const PauseGlyph = () => (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M5 3h3.5v14H5zM11.5 3H15v14h-3.5z" fill="currentColor" />
    </svg>
)

const reducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function VideoPlayer({
    src,
    poster,
    title,
    Autoplay = 'Off',
    captions,
    ratio = '16 / 9',
    className,
}: VideoPlayerProps) {
    const ref = useRef<HTMLVideoElement>(null)
    const [auto, setAuto] = useState(
        () => Autoplay === 'In view' && !reducedMotion()
    )
    const [started, setStarted] = useState(false)
    const [playing, setPlaying] = useState(false)
    // Paused by the viewer: in-view autoplay stops resuming the video
    const held = useRef(false)

    useEffect(() => {
        setAuto(Autoplay === 'In view' && !reducedMotion())
    }, [Autoplay])

    useEffect(() => {
        const v = ref.current
        if (!auto || !v || typeof IntersectionObserver === 'undefined') return
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting && !held.current) v.play().catch(() => {})
                else if (!e.isIntersecting) v.pause()
            },
            { threshold: 0.5 }
        )
        io.observe(v)
        return () => io.disconnect()
    }, [auto])

    if (!src) {
        return (
            <span
                className={cx(styles.root, className)}
                style={{ aspectRatio: ratio }}
            >
                <CardMedia src={poster} ratio={ratio} />
                <span className={styles.play} aria-hidden="true">
                    <PlayGlyph />
                </span>
            </span>
        )
    }

    const start = () => {
        setStarted(true)
        ref.current?.play().catch(() => {})
    }
    const toggle = () => {
        const v = ref.current
        if (!v) return
        if (v.paused) {
            held.current = false
            v.play().catch(() => {})
        } else {
            held.current = true
            v.pause()
        }
    }

    return (
        <span
            className={cx(styles.root, className)}
            style={{ aspectRatio: ratio }}
            data-autoplay={auto || undefined}
        >
            <video
                ref={ref}
                src={src}
                poster={poster}
                aria-label={title}
                playsInline
                muted={auto}
                loop={auto}
                controls={!auto && started}
                preload={auto ? 'metadata' : 'none'}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
            >
                {captions && (
                    <track
                        kind="captions"
                        src={captions}
                        srcLang="en"
                        label="English"
                    />
                )}
            </video>
            {auto ? (
                <button
                    type="button"
                    className={cx(styles.toggle, ring.root)}
                    aria-label={`${playing ? 'Pause' : 'Play'} video: ${title}`}
                    onClick={toggle}
                >
                    {playing ? <PauseGlyph /> : <PlayGlyph size={16} />}
                </button>
            ) : (
                !started && (
                    <button
                        type="button"
                        className={cx(styles.play, ring.root)}
                        aria-label={`Play video: ${title}`}
                        onClick={start}
                    >
                        <PlayGlyph />
                    </button>
                )
            )}
        </span>
    )
}
