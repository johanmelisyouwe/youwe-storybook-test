import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './ask-youwe.module.css'

/*
  Ask Youwe voice input (code, not in Figma; added 20 November after Rob's feedback: "you should be able
  to talk to it, and see the waves so you know the sound comes in").
  - useVoiceInput: speech to text with the browser's speech recognition (Chrome, Edge, Safari), with
    live interim text; and the microphone level from the same audio for the wave. Resolves with the
    final text when the speaker stops (or the mic button is pressed again).
  - AskWave: bars that move with the microphone level (one analyser frame per animation frame, written
    straight to the bars, no React re-render). With reduced motion the bars stay still and fade with the
    level instead.
  The mic button is only shown where speech recognition exists (not in Firefox), after mount.
*/

type Recognition = {
    lang: string
    interimResults: boolean
    continuous: boolean
    start: () => void
    stop: () => void
    abort: () => void
    onresult:
        | ((e: {
              resultIndex: number
              results: ArrayLike<
                  ArrayLike<{ transcript: string }> & { isFinal: boolean }
              >
          }) => void)
        | null
    onerror: ((e: { error: string }) => void) | null
    onend: (() => void) | null
}

type RecognitionCtor = new () => Recognition

const getRecognition = (): RecognitionCtor | undefined => {
    if (typeof window === 'undefined') return undefined
    const w = window as unknown as {
        SpeechRecognition?: RecognitionCtor
        webkitSpeechRecognition?: RecognitionCtor
    }
    return w.SpeechRecognition ?? w.webkitSpeechRecognition
}

/** Speech recognition language from the page locale, e.g. 'nl' → 'nl-NL' */
const LANG: Record<string, string> = {
    en: 'en-GB',
    nl: 'nl-NL',
    sv: 'sv-SE',
}

export type VoiceState = 'idle' | 'listening' | 'denied' | 'error'

export function useVoiceInput({
    locale,
    onInterim,
    onFinal,
}: {
    /** Page locale ('en', 'nl', 'sv'); defaults to the document language */
    locale?: string
    /** Live text while speaking */
    onInterim: (text: string) => void
    /** The spoken question, once the speaker stops */
    onFinal: (text: string) => void
}) {
    const [supported, setSupported] = useState(false)
    const [state, setState] = useState<VoiceState>('idle')
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
    const rec = useRef<Recognition | null>(null)
    const stream = useRef<MediaStream | null>(null)
    const audio = useRef<AudioContext | null>(null)
    const text = useRef('')
    // Latest callbacks without restarting recognition
    const cb = useRef({ onInterim, onFinal })
    cb.current = { onInterim, onFinal }

    useEffect(() => setSupported(!!getRecognition()), [])

    const cleanup = useCallback(() => {
        stream.current?.getTracks().forEach((t) => t.stop())
        stream.current = null
        audio.current?.close().catch(() => {})
        audio.current = null
        setAnalyser(null)
    }, [])

    useEffect(
        () => () => {
            rec.current?.abort()
            cleanup()
        },
        [cleanup]
    )

    const stop = useCallback(() => rec.current?.stop(), [])

    const start = useCallback(async () => {
        const Ctor = getRecognition()
        if (!Ctor || rec.current) return
        text.current = ''
        // The level meter: its own microphone stream (speech recognition does not expose its audio)
        try {
            const s = await navigator.mediaDevices.getUserMedia({ audio: true })
            stream.current = s
            const ctx = new AudioContext()
            audio.current = ctx
            const node = ctx.createAnalyser()
            node.fftSize = 256
            node.smoothingTimeConstant = 0.6
            ctx.createMediaStreamSource(s).connect(node)
            setAnalyser(node)
        } catch {
            setState('denied')
            return
        }
        const r = new Ctor()
        r.lang =
            LANG[
                (locale ?? document.documentElement.lang ?? 'en').slice(0, 2)
            ] ?? 'en-GB'
        r.interimResults = true
        r.continuous = false
        r.onresult = (e) => {
            let interim = ''
            let final = ''
            for (let i = 0; i < e.results.length; i++) {
                const res = e.results[i]
                if (res.isFinal) final += res[0].transcript
                else interim += res[0].transcript
            }
            text.current = (final || interim).trim()
            cb.current.onInterim((final + interim).trim())
        }
        r.onerror = (e) =>
            setState(
                e.error === 'not-allowed' || e.error === 'service-not-allowed'
                    ? 'denied'
                    : e.error === 'no-speech' || e.error === 'aborted'
                      ? 'idle'
                      : 'error'
            )
        r.onend = () => {
            rec.current = null
            cleanup()
            setState((s) => (s === 'listening' ? 'idle' : s))
            if (text.current) cb.current.onFinal(text.current)
        }
        rec.current = r
        setState('listening')
        r.start()
    }, [locale, cleanup])

    const toggle = useCallback(() => {
        if (rec.current) stop()
        else void start()
    }, [start, stop])

    return { supported, state, analyser, start, stop, toggle }
}

const BARS = 24

/** Live wave of the microphone level. Without an analyser (stories) it shows a soft demo motion. */
export function AskWave({
    analyser,
    demo,
    label,
}: {
    analyser: AnalyserNode | null
    /** Story/preview: animate without a microphone */
    demo?: boolean
    /** Screen reader text, e.g. "Listening…" */
    label: string
}) {
    const ref = useRef<HTMLSpanElement>(null)
    useEffect(() => {
        const bars = ref.current
            ? (Array.from(ref.current.children) as HTMLElement[])
            : []
        if (!bars.length || (!analyser && !demo)) return
        const reduce = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        const data = analyser ? new Uint8Array(analyser.fftSize) : null
        let raf = 0
        const t0 = performance.now()
        const draw = (t: number) => {
            let level: number
            if (analyser && data) {
                analyser.getByteTimeDomainData(data)
                let sum = 0
                for (const v of data) sum += ((v - 128) / 128) ** 2
                // RMS on a square-root curve: quiet speech already moves the bars, loud speech fills them
                level = Math.min(
                    1,
                    Math.sqrt(Math.sqrt(sum / data.length)) * 2.2
                )
            } else {
                const s = (t - t0) / 1000
                level =
                    0.6 + 0.35 * Math.sin(s * 2.3) * Math.abs(Math.sin(s * 0.9))
            }
            bars.forEach((b, i) => {
                // A bell-shaped spread with a travelling ripple, so the bars read as a voice wave
                const mid = 1 - Math.abs(i - (BARS - 1) / 2) / (BARS / 2)
                const ripple = 0.7 + 0.3 * Math.sin(t / 140 + i * 0.9)
                const h = reduce
                    ? 0.5
                    : Math.min(
                          1,
                          Math.max(0.12, level * (0.55 + 0.6 * mid) * ripple)
                      )
                b.style.transform = `scaleY(${h.toFixed(3)})`
                b.style.opacity = reduce ? String(0.4 + 0.6 * level) : ''
            })
            raf = requestAnimationFrame(draw)
        }
        raf = requestAnimationFrame(draw)
        return () => cancelAnimationFrame(raf)
    }, [analyser, demo])
    return (
        <span className={styles['ask-wave']} role="status">
            <span
                className={styles['ask-wave-bars']}
                ref={ref}
                aria-hidden="true"
            >
                {Array.from({ length: BARS }, (_, i) => (
                    <i key={i} />
                ))}
            </span>
            <span className={styles['sr-only']}>{label}</span>
        </span>
    )
}
