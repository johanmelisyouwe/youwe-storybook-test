import { useEffect, useId, useRef, useState } from 'react'
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
  Vimeo: a player.vimeo.com URL as src plays in Vimeo's player (see VimeoPlayer below): background mode for
  "In view" (muted, looped, no controls; play/pause through Vimeo's postMessage API), the normal Vimeo player
  with sound and controls after a click for "Off". The poster shows until the video really plays, then the
  video fades in, so there's no black flash or jump.
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

    if (src && VIMEO.test(src))
        return (
            <VimeoPlayer
                src={src}
                poster={poster}
                title={title}
                auto={auto}
                ratio={ratio}
                className={className}
            />
        )

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

const VIMEO = /^https:\/\/player\.vimeo\.com\/video\/\d+/
const VIMEO_ORIGIN = 'https://player.vimeo.com'

/* Vimeo embed, driven through Vimeo's postMessage player API (no extra script). */
function VimeoPlayer({
    src,
    poster,
    title,
    auto,
    ratio,
    className,
}: {
    src: string
    poster?: string
    title: string
    auto: boolean
    ratio: string
    className?: string
}) {
    const ref = useRef<HTMLIFrameElement>(null)
    const playerId = useId().replace(/[^a-zA-Z0-9]/g, '')
    const [started, setStarted] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [shown, setShown] = useState(false)
    const ready = useRef(false)
    const inView = useRef(false)
    const held = useRef(false)

    const url = new URL(src)
    url.searchParams.set('player_id', playerId)
    url.searchParams.set('dnt', '1')
    if (auto) {
        // Background mode: muted, looped, no controls; we start and stop it
        url.searchParams.set('background', '1')
        url.searchParams.set('autoplay', '0')
    } else {
        url.searchParams.delete('background')
        url.searchParams.set('autoplay', '1')
    }

    const send = (method: string, value?: string) =>
        ref.current?.contentWindow?.postMessage(
            JSON.stringify(value ? { method, value } : { method }),
            VIMEO_ORIGIN
        )

    const live = auto || started
    useEffect(() => {
        if (!live) return
        const onMessage = (e: MessageEvent) => {
            if (e.origin !== VIMEO_ORIGIN) return
            let d: { event?: string; player_id?: string }
            try {
                d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
            } catch {
                return
            }
            if (d.player_id && d.player_id !== playerId) return
            if (d.event === 'ready') {
                ready.current = true
                // Vimeo's postMessage API reports progress as "playProgress" (timeupdate is the player.js name)
                for (const ev of [
                    'play',
                    'pause',
                    'playProgress',
                    'timeupdate',
                ])
                    send('addEventListener', ev)
                if (auto && inView.current && !held.current) send('play')
            }
            if (d.event === 'play') setPlaying(true)
            if (d.event === 'pause') setPlaying(false)
            // Fade the video in once frames are actually moving (no black flash)
            if (d.event === 'playProgress' || d.event === 'timeupdate')
                setShown(true)
        }
        window.addEventListener('message', onMessage)
        return () => window.removeEventListener('message', onMessage)
    }, [live, auto, playerId])

    useEffect(() => {
        const el = ref.current
        if (!auto || !el || typeof IntersectionObserver === 'undefined') return
        const io = new IntersectionObserver(
            ([e]) => {
                inView.current = e.isIntersecting
                if (!ready.current) return
                if (e.isIntersecting && !held.current) send('play')
                else if (!e.isIntersecting) send('pause')
            },
            { threshold: 0.5 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [auto])

    const toggle = () => {
        if (playing) {
            held.current = true
            send('pause')
        } else {
            held.current = false
            send('play')
        }
    }

    return (
        <span
            className={cx(styles.root, className)}
            style={{ aspectRatio: ratio }}
            data-autoplay={auto || undefined}
        >
            <CardMedia src={poster} ratio={ratio} placeholder={false} />
            {live && (
                <iframe
                    ref={ref}
                    src={url.toString()}
                    title={title}
                    className={styles.embed}
                    data-shown={shown || !auto || undefined}
                    allow="autoplay; fullscreen; picture-in-picture"
                    tabIndex={auto ? -1 : undefined}
                />
            )}
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
                        onClick={() => setStarted(true)}
                    >
                        <PlayGlyph />
                    </button>
                )
            )}
        </span>
    )
}
