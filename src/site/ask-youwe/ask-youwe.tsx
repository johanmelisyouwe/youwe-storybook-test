import { fmt } from '../../shared/labels'
import type { ImageInput } from '../../shared/asset'
import { useEffect, useId, useRef, useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import { askYouwe, useAskYouwe } from '../../shared/ask'
import { Prose, type RichText } from '../../shared/prose'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './ask-youwe.module.css'
import { AskWave, useVoiceInput } from './voice'

/*
  Ask Youwe — Figma 27019:3067; Ask Youwe/Snippet — 26692:106; parts _Ask Youwe/Orb, Aura, Button, Chip, Label.
  Answer service: the site passes AskDock an async `onAsk(question, locale, { signal })` that calls its own
  server-side API route (no key in the browser) and resolves with an AskAnswer. The dock shows loading, the
  answer (text + source links + optional follow-ups / CTA), an error with Try again, or the fallback text when
  no service is connected (no onAsk, or onAsk rejects with AskUnavailableError). A newer question aborts the
  previous request. Focus: opening moves focus into the panel; closing returns it to where it came from.
*/

/** A source link under an answer */
export type AskSource = { title: string; url: string }

/** What the site's answer service resolves with */
export type AskAnswer = {
    /** Plain text (blank lines = paragraphs) or rendered rich text */
    text: RichText
    sources?: AskSource[]
    /** Suggested next questions (chips) */
    followUps?: string[]
    /** A button under the answer, e.g. Book a call */
    cta?: { label: string; href: string }
}

/** The site's answer service: call your own API route here. Reject with AskUnavailableError for the fallback. */
export type AskHandler = (
    question: string,
    locale: string,
    options: { signal: AbortSignal }
) => Promise<AskAnswer>

/** Throw from onAsk when the service isn't available yet: the panel shows the fallback text, not an error */
export class AskUnavailableError extends Error {
    constructor(message = 'Ask Youwe is not available') {
        super(message)
        this.name = 'AskUnavailableError'
    }
}

/** Answer text: a string with blank lines becomes paragraphs; anything else renders as rich text */
const answerText = (t: RichText): RichText =>
    typeof t === 'string'
        ? t
              .split(/\n\s*\n/)
              .map((x) => x.trim())
              .filter(Boolean)
        : t

/* _Ask Youwe/Orb */
export function AskOrb({
    Size = 'S',
    className,
}: {
    Size?: 'S' | 'M' | 'L'
    className?: string
}) {
    return (
        <span
            data-size={Size !== 'S' ? Size.toLowerCase() : undefined}
            className={cx(styles['ask-orb'], className)}
            aria-hidden="true"
        />
    )
}

/* _Ask Youwe/Aura — place inside an askGlass surface */
export function AskAura() {
    return <span className={styles['ask-aura']} aria-hidden="true" />
}

/* _Ask Youwe/Button */
export type AskButtonProps = {
    Type?: 'Label' | 'Icon'
    Variant?: 'Primary' | 'Glass' | 'Disabled'
    Size?: 'M' | 'S'
    label: string
    icon?: 'arrow-forward' | 'close' | 'mic'
    href?: string
    onClick?: () => void
    className?: string
}

export function AskButton({
    Type = 'Label',
    Variant = 'Glass',
    Size = 'M',
    label,
    icon = 'arrow-forward',
    href,
    onClick,
    className,
}: AskButtonProps) {
    const attrs = {
        className: cx(styles['ask-btn'], ring.root, className),
        'data-variant': Variant.toLowerCase(),
        'data-icon': Type === 'Icon' || undefined,
        'data-s': Size === 'S' || undefined,
    }
    const inner =
        Type === 'Icon' ? (
            <Icon name={icon} size={16} />
        ) : (
            <>
                <span className="yw-body-sm-med">{label}</span>
                <Icon name={icon} size={16} />
            </>
        )
    if (href && Variant !== 'Disabled')
        return (
            <a
                href={href}
                {...attrs}
                aria-label={Type === 'Icon' ? label : undefined}
            >
                {inner}
            </a>
        )
    return (
        <button
            type="button"
            {...attrs}
            onClick={onClick}
            disabled={Variant === 'Disabled'}
            aria-label={Type === 'Icon' ? label : undefined}
        >
            {inner}
        </button>
    )
}

/* _Ask Youwe/Chip */
export function AskChip({
    Type = 'Suggestion',
    label,
    meta,
    onClick,
}: {
    Type?: 'Suggestion' | 'Context' | 'Key'
    label: string
    meta?: string
    onClick?: () => void
}) {
    if (Type === 'Key')
        return (
            <kbd data-key className={cx(styles['ask-chip'], 'yw-body-xs-med')}>
                {label}
            </kbd>
        )
    if (Type === 'Context')
        return (
            <span data-context className={cx(styles['ask-chip'])}>
                <span className={cx(styles['ask-chip-meta'], 'yw-body-xs-reg')}>
                    {meta ?? 'This page'}
                </span>
                <span className="yw-body-xs-med">{label}</span>
            </span>
        )
    return (
        <button
            type="button"
            data-suggestion
            className={cx(styles['ask-chip'], 'yw-body-sm-reg')}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

/* _Ask Youwe/Label */
export function AskLabel({ label = 'Ask Youwe' }: { label?: string }) {
    return (
        <span className={cx(styles['ask-label'], 'yw-body-xs-med')}>
            <AskOrb />
            {label}
        </span>
    )
}

/** Fixed UI text (English defaults); pass `labels` to AskYouwe / AskSnippet to translate (NL, SV) */
export const ASK_YOUWE_LABELS = {
    name: 'Ask Youwe',
    close: 'Close',
    followUp: 'Ask a follow-up',
    followUpPlaceholder: 'Ask a follow-up…',
    send: 'Send',
    reasonDefault: 'Related case',
    readCase: 'Read the case',
    askAbout: 'Ask about it',
    read: 'Read',
    askTitle: 'Ask: {title}',
    panelTitle: 'Ask Youwe',
    loading: 'Looking for an answer…',
    error: 'Something went wrong. Please try again.',
    retry: 'Try again',
    sources: 'Sources',
    unavailable:
        'Ask Youwe can’t answer questions yet. Please contact us and we’ll help you right away.',
    voice: 'Ask with your voice',
    voiceStop: 'Stop listening',
    listening: 'Listening…',
    voiceDenied: 'Allow microphone access to ask with your voice',
    voiceError: 'Couldn’t hear that. Try again',
}

export type AskYouweProps = {
    /** Figma: State. Docked is the sticky bar (AskDock): Contextual on frosted glass. */
    State?: 'Default' | 'Contextual' | 'Docked' | 'Active'
    /** Figma: Device */
    Device?: 'Desktop' | 'Mobile'
    /** Figma: Prompt */
    Prompt?: string
    /** Figma: Show shortcut (⌘K focuses the bar) */
    'Show shortcut'?: boolean
    /** Contextual: the page-specific question chip */
    context?: string
    /** Active: Figma Question / Answer / Source */
    Question?: string
    Answer?: string
    Source?: string
    followUp?: string
    cta?: { label: string; href: string }
    /** Active: where the answer is (answered shows Answer / sources) */
    status?: 'answered' | 'loading' | 'error' | 'unavailable'
    /** Active: source links under the answer */
    sources?: AskSource[]
    /** Active: suggested next questions (chips); `followUp` is the single Figma chip */
    followUps?: string[]
    /** Active: rich answer (overrides Answer) */
    answerText?: RichText
    /** Active, unavailable: the fallback text (default labels.unavailable) */
    fallback?: RichText
    /** Active, error: Try again */
    onRetry?: () => void
    onAsk?: (q: string) => void
    onClose?: () => void
    /** Voice input: a mic button where the browser supports speech recognition (default true) */
    Voice?: boolean
    /** Speech recognition language from the page locale ('en', 'nl', 'sv'); default the document language */
    locale?: string
    /** Story/preview: show the listening state with a demo wave (no microphone) */
    voiceDemo?: boolean
    className?: string
    /** UI text, for translations: { ...ASK_YOUWE_LABELS } */
    labels?: Partial<typeof ASK_YOUWE_LABELS>
}

export function AskYouwe({
    State = 'Default',
    Device = 'Desktop',
    Prompt = 'Ask or search Youwe',
    'Show shortcut': shortcut = true,
    context,
    Question,
    Answer,
    Source,
    followUp,
    cta,
    status = 'answered',
    sources,
    followUps,
    answerText: rich,
    fallback,
    onRetry,
    onAsk,
    onClose,
    Voice = true,
    locale,
    voiceDemo,
    className,
    labels,
}: AskYouweProps) {
    const L = { ...ASK_YOUWE_LABELS, ...labels }
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [q, setQ] = useState('')
    const voice = useVoiceInput({
        locale,
        onInterim: setQ,
        onFinal: (text) => {
            setQ('')
            onAsk?.(text)
        },
    })
    const listening = voice.state === 'listening' || !!voiceDemo
    const showMic = Voice && (voice.supported || !!voiceDemo)
    const micButton = showMic && (
        <AskButton
            Type="Icon"
            Variant={listening ? 'Primary' : 'Glass'}
            icon="mic"
            label={listening ? L.voiceStop : L.voice}
            onClick={voice.toggle}
            className={listening ? styles['ask-mic-live'] : undefined}
        />
    )
    const wave = listening && (
        <AskWave
            analyser={voice.analyser}
            demo={!!voiceDemo}
            label={L.listening}
        />
    )
    const placeholder = (base: string) =>
        listening
            ? L.listening
            : voice.state === 'denied'
              ? L.voiceDenied
              : voice.state === 'error'
                ? L.voiceError
                : base

    useEffect(() => {
        if (!shortcut || State === 'Active') return
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                input.current?.focus()
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [shortcut, State])

    useEffect(() => {
        if (State !== 'Active' || !onClose) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [State, onClose])

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (q.trim()) {
            onAsk?.(q.trim())
            setQ('')
        }
    }
    const chips = [...(followUps ?? []), ...(followUp ? [followUp] : [])]

    if (State === 'Active') {
        return (
            <section
                data-mobile={Device === 'Mobile' || undefined}
                className={cx(
                    styles['ask-glass'],
                    styles['ask-panel'],
                    className
                )}
                aria-labelledby={`${id}-t`}
            >
                <AskAura />
                <div className={styles['ask-panel-header']}>
                    <AskOrb />
                    <span id={`${id}-t`} className="yw-body-md-bold">
                        {L.panelTitle}
                    </span>
                    <AskButton
                        Type="Icon"
                        Size="S"
                        icon="close"
                        label={L.close}
                        onClick={onClose}
                    />
                </div>
                {Question && (
                    <div className={styles['ask-panel-question']}>
                        <p
                            className={cx(
                                styles['ask-panel-bubble'],
                                'yw-body-md-reg'
                            )}
                        >
                            {Question}
                        </p>
                    </div>
                )}
                <div
                    className={styles['ask-panel-answer']}
                    aria-live="polite"
                    aria-busy={status === 'loading' || undefined}
                    data-status={status}
                >
                    {status === 'loading' ? (
                        <p
                            className={cx(
                                styles['ask-panel-loading'],
                                'yw-body-md-reg'
                            )}
                        >
                            <span
                                className={styles['ask-panel-dots']}
                                aria-hidden="true"
                            >
                                <i />
                                <i />
                                <i />
                            </span>
                            {L.loading}
                        </p>
                    ) : status === 'error' ? (
                        <div role="alert" className={styles['ask-panel-error']}>
                            <p className="yw-body-md-reg">{L.error}</p>
                            {onRetry && (
                                <AskButton label={L.retry} onClick={onRetry} />
                            )}
                        </div>
                    ) : status === 'unavailable' ? (
                        <Prose className="yw-body-md-reg">
                            {fallback ?? L.unavailable}
                        </Prose>
                    ) : (
                        <>
                            <Prose className="yw-body-md-reg">
                                {answerText(rich ?? Answer ?? '')}
                            </Prose>
                            {sources?.length ? (
                                <nav
                                    aria-label={L.sources}
                                    className={styles['ask-panel-sources']}
                                >
                                    <span
                                        className={cx(
                                            styles['ask-panel-source'],
                                            'yw-body-xs-med'
                                        )}
                                    >
                                        {L.sources}
                                    </span>
                                    <ul>
                                        {sources.map((src) => (
                                            <li key={src.url}>
                                                <a
                                                    href={src.url}
                                                    className={cx(
                                                        ring.root,
                                                        'yw-body-sm-reg'
                                                    )}
                                                >
                                                    {src.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            ) : (
                                Source && (
                                    <span
                                        className={cx(
                                            styles['ask-panel-source'],
                                            'yw-body-xs-reg'
                                        )}
                                    >
                                        {Source}
                                    </span>
                                )
                            )}
                        </>
                    )}
                </div>
                {status === 'answered' && (chips.length > 0 || cta) && (
                    <div className={styles['ask-panel-followups']}>
                        {chips.map((c) => (
                            <AskChip
                                key={c}
                                label={c}
                                onClick={() => onAsk?.(c)}
                            />
                        ))}
                        {cta && (
                            <AskButton
                                Variant="Primary"
                                label={cta.label}
                                href={cta.href}
                            />
                        )}
                    </div>
                )}
                <form
                    className={styles['ask-panel-composer']}
                    onSubmit={submit}
                >
                    <input
                        className={cx(
                            styles['ask-bar-input'],
                            'yw-body-md-reg'
                        )}
                        placeholder={placeholder(L.followUpPlaceholder)}
                        aria-label={L.followUp}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    {wave}
                    {micButton}
                    <AskButton
                        Type="Icon"
                        Variant={q ? 'Primary' : 'Disabled'}
                        label={L.send}
                        onClick={() => {
                            if (!q.trim()) return
                            onAsk?.(q.trim())
                            setQ('')
                        }}
                    />
                </form>
            </section>
        )
    }

    return (
        <form
            role="search"
            data-contextual={
                (State !== 'Default' && Device === 'Desktop') || undefined
            }
            data-docked={State === 'Docked' || undefined}
            className={cx(styles['ask-glass'], styles['ask-bar'], className)}
            onSubmit={submit}
            onClick={() => input.current?.focus()}
        >
            <AskAura />
            <AskOrb />
            <input
                ref={input}
                className={cx(styles['ask-bar-input'], 'yw-body-md-reg')}
                placeholder={placeholder(Prompt)}
                aria-label={Prompt}
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            {listening ? (
                wave
            ) : (
                <>
                    {State !== 'Default' && context && (
                        <span className={styles['ask-bar-context']}>
                            <AskChip
                                label={context}
                                onClick={() => onAsk?.(context)}
                            />
                        </span>
                    )}
                    {shortcut && Device === 'Desktop' && (
                        <AskChip Type="Key" label="⌘K" />
                    )}
                </>
            )}
            {micButton}
        </form>
    )
}

export type AskSnippetProps = {
    /** Figma: Type */
    Type?: 'Question' | 'Nudge' | 'Case'
    Device?: 'Desktop' | 'Mobile'
    /** Question / Nudge text, or the Case Title */
    Title: string
    /** Case: Meta (Show meta) */
    Meta?: string
    /** Eyebrow reason, e.g. "Related case" */
    reason?: string
    image?: ImageInput
    /** Case: Show second button */
    'Show second button'?: boolean
    href?: string
    /** "Ask about it" / Ask: default askYouwe(), so the page's AskDock answers it through its onAsk */
    onAsk?: (q: string) => void
    className?: string
    /** UI text, for translations: { ...ASK_YOUWE_LABELS } */
    labels?: Partial<typeof ASK_YOUWE_LABELS>
}

export function AskSnippet({
    Type = 'Question',
    Device = 'Desktop',
    Title,
    Meta,
    reason,
    image,
    'Show second button': second = true,
    href = '#',
    onAsk = askYouwe,
    className,
    labels,
}: AskSnippetProps) {
    const L = { ...ASK_YOUWE_LABELS, ...labels }
    const base = {
        className: cx(styles['ask-glass'], styles['ask-snippet'], className),
        'data-flat': true,
        'data-type': Type.toLowerCase(),
        'data-mobile': Device === 'Mobile' || undefined,
    }
    if (Type === 'Case') {
        return (
            <article {...base}>
                <CardMedia
                    src={image}
                    className={styles['ask-snippet-image']}
                    placeholder={false}
                />
                {/* Over the photo's dark scrim: dark tokens in both modes, so the outline button stays visible */}
                <div
                    className={styles['ask-snippet-content']}
                    data-theme="dark"
                >
                    <AskLabel
                        label={`${L.name} · ${reason ?? L.reasonDefault}`}
                    />
                    <h3 className="yw-body-xl-med" style={{ margin: 0 }}>
                        {Title}
                    </h3>
                    {Meta && <span className="yw-body-sm-reg">{Meta}</span>}
                    <div className={styles['ask-snippet-actions']}>
                        <AskButton
                            Variant="Primary"
                            label={L.readCase}
                            href={href}
                        />
                        {second && (
                            <AskButton
                                label={L.askAbout}
                                onClick={() => onAsk?.(Title)}
                            />
                        )}
                    </div>
                </div>
            </article>
        )
    }
    if (Type === 'Nudge') {
        return (
            <aside {...base}>
                <AskAura />
                <span className={styles['ask-snippet-text']}>
                    <AskOrb />
                    <span className="yw-body-sm-reg">{Title}</span>
                </span>
                <AskButton label={L.read} href={href} />
            </aside>
        )
    }
    return (
        <aside {...base}>
            <AskAura />
            <span className={styles['ask-snippet-text']}>
                <AskLabel label={reason ? `${L.name} · ${reason}` : L.name} />
                <span className="yw-body-md-reg">{Title}</span>
            </span>
            <AskButton
                Type="Icon"
                Variant="Primary"
                label={fmt(L.askTitle, { title: Title })}
                onClick={() => onAsk?.(Title)}
            />
        </aside>
    )
}

/* Docked bar: the site's sticky Ask Youwe bar (Figma: State=Docked is the bar; its placement is code) */
export type AskDockProps = {
    Device?: 'Desktop' | 'Mobile'
    /** Page-specific question shown as the Contextual chip (desktop; on mobile the bar stays Default, there is no room) */
    context?: string
    /**
     * The answer service: (question, locale, { signal }) => Promise<AskAnswer>. Call your own server-side API
     * route here (no key in the browser). Leave it out, or reject with AskUnavailableError, for the fallback.
     */
    onAsk?: AskHandler
    /** Passed to onAsk, e.g. the Contentful locale: en, en-GB, nl, sv */
    locale?: string
    /** Shown when no answer service is connected (default labels.unavailable) */
    fallback?: RichText
    /** Storybook only: a static answer when there is no onAsk and no fallback */
    answer?: Partial<AskYouweProps>
    /** Scroll distance before the bar slides in (px) */
    after?: number
    /** UI text and the bar prompt, for translations */
    labels?: Partial<typeof ASK_YOUWE_LABELS>
    Prompt?: string
}

type DockState =
    | { status: 'loading' }
    | { status: 'answered'; answer: AskAnswer }
    | { status: 'error' }
    | { status: 'unavailable' }
    | { status: 'static' }

/**
 * Fixed to the bottom of the viewport, centred on the page column. Slides in after the hero, steps aside
 * while the footer is on screen or a pinned full-screen section fills the view (e.g. Vertical slider, Behaviour
 * Scroll), and opens the answer panel above itself; Esc or close returns to the bar. A question asked
 * elsewhere on the page (askYouwe(), e.g. an AI Feature Card's link or an Ask snippet) opens the panel with
 * that question. Questions go to onAsk; the newest question wins (the previous request is aborted).
 * Focus: opening moves it to the panel's follow-up field; closing returns it to where it was before.
 */
export function AskDock({
    Device = 'Desktop',
    context,
    onAsk,
    locale = 'en',
    fallback,
    answer,
    after = 480,
    labels,
    Prompt,
}: AskDockProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [shown, setShown] = useState(false)
    const [q, setQ] = useState<string | null>(null)
    const [state, setState] = useState<DockState>({ status: 'static' })
    const controller = useRef<AbortController | null>(null)
    // Where focus was before the panel opened (the bar, a snippet's button…): it goes back there on close
    const opener = useRef<HTMLElement | null>(null)
    const restore = useRef(false)

    const ask = (question: string) => {
        if (q === null) {
            const active = document.activeElement
            opener.current =
                active instanceof HTMLElement && active !== document.body
                    ? active
                    : null
        }
        setQ(question)
        controller.current?.abort()
        if (!onAsk) {
            setState(
                fallback !== undefined || !answer
                    ? { status: 'unavailable' }
                    : { status: 'static' }
            )
            return
        }
        const c = new AbortController()
        controller.current = c
        setState({ status: 'loading' })
        onAsk(question, locale, { signal: c.signal }).then(
            (res) => {
                if (!c.signal.aborted)
                    setState({ status: 'answered', answer: res })
            },
            (err: unknown) => {
                if (c.signal.aborted) return
                setState(
                    err instanceof AskUnavailableError
                        ? { status: 'unavailable' }
                        : { status: 'error' }
                )
            }
        )
    }
    const close = () => {
        controller.current?.abort()
        restore.current = true
        setQ(null)
    }
    useEffect(() => () => controller.current?.abort(), [])

    useAskYouwe((question) => ask(question))
    // Opened: move focus into the panel (the bar it came from is replaced by the panel)
    const open = q !== null
    useEffect(() => {
        if (!open) return
        ref.current
            ?.querySelector<HTMLElement>('section input')
            ?.focus({ preventScroll: true })
    }, [open])
    // Closed: back to the opener if it is still on the page, else the bar's field
    useEffect(() => {
        if (open || !restore.current) return
        restore.current = false
        const back = opener.current
        if (back && back.isConnected && !ref.current?.contains(back))
            back.focus({ preventScroll: true })
        else
            ref.current
                ?.querySelector<HTMLElement>('input')
                ?.focus({ preventScroll: true })
    }, [open])
    useEffect(() => {
        const root = ref.current?.closest('[data-page]') ?? document
        const footer = root.querySelector('footer')
        let footerInView = false
        // A pinned section that fills the viewport (its frame is stuck) gets the full screen: the bar steps aside
        const pinnedInView = () =>
            [...root.querySelectorAll('section[data-pinned]')].some((sec) => {
                const r = sec.getBoundingClientRect()
                return r.top <= 0 && r.bottom >= window.innerHeight
            })
        const update = () =>
            setShown(window.scrollY > after && !footerInView && !pinnedInView())
        const io =
            footer && typeof IntersectionObserver !== 'undefined'
                ? new IntersectionObserver(([e]) => {
                      footerInView = e.isIntersecting
                      update()
                  })
                : null
        if (io && footer) io.observe(footer)
        window.addEventListener('scroll', update, { passive: true })
        update()
        return () => {
            window.removeEventListener('scroll', update)
            io?.disconnect()
        }
    }, [after])

    const panel: Partial<AskYouweProps> =
        state.status === 'static'
            ? { ...answer }
            : state.status === 'answered'
              ? {
                    status: 'answered',
                    answerText: state.answer.text,
                    sources: state.answer.sources,
                    followUps: state.answer.followUps,
                    cta: state.answer.cta,
                }
              : { status: state.status }
    return (
        <div
            ref={ref}
            data-shown={shown || open || undefined}
            data-open={open || undefined}
            data-mobile={Device === 'Mobile' || undefined}
            className={styles.dock}
        >
            {open ? (
                <AskYouwe
                    labels={labels}
                    {...(Prompt ? { Prompt } : {})}
                    key="panel"
                    State="Active"
                    Device={Device}
                    locale={locale}
                    {...panel}
                    fallback={fallback}
                    Question={q}
                    onRetry={() => ask(q)}
                    onClose={close}
                    onAsk={ask}
                />
            ) : (
                <AskYouwe
                    labels={labels}
                    {...(Prompt ? { Prompt } : {})}
                    key="bar"
                    State="Docked"
                    Device={Device}
                    locale={locale}
                    context={context}
                    onAsk={ask}
                />
            )}
        </div>
    )
}
