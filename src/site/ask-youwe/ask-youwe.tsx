import { useEffect, useId, useRef, useState } from 'react'
import { Icon } from '../../shared/icons/icon'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import ring from '../../shared/focus-ring/focus-ring.module.css'
import styles from './ask-youwe.module.css'

/*
  Ask Youwe — Figma 27019:3067; Ask Youwe/Snippet — 26692:106; parts _Ask Youwe/Orb, Aura, Button, Chip, Label.
  The UI only: wiring to a real answer service is out of scope (onAsk callback).
*/

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
            className={cx(styles.askOrb, className)}
            aria-hidden="true"
        />
    )
}

/* _Ask Youwe/Aura — place inside an askGlass surface */
export function AskAura() {
    return <span className={styles.askAura} aria-hidden="true" />
}

/* _Ask Youwe/Button */
export type AskButtonProps = {
    Type?: 'Label' | 'Icon'
    Variant?: 'Primary' | 'Glass' | 'Disabled'
    Size?: 'M' | 'S'
    label: string
    icon?: 'arrow-forward' | 'close'
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
        className: cx(styles.askBtn, ring.root, className),
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
            <kbd data-key className={cx(styles.askChip, 'yw-body-xs-med')}>
                {label}
            </kbd>
        )
    if (Type === 'Context')
        return (
            <span data-context className={cx(styles.askChip)}>
                <span className={cx(styles.askChipMeta, 'yw-body-xs-reg')}>
                    {meta ?? 'This page'}
                </span>
                <span className="yw-body-xs-med">{label}</span>
            </span>
        )
    return (
        <button
            type="button"
            data-suggestion
            className={cx(styles.askChip, 'yw-body-sm-reg')}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

/* _Ask Youwe/Label */
export function AskLabel({ label = 'Ask Youwe' }: { label?: string }) {
    return (
        <span className={cx(styles.askLabel, 'yw-body-xs-med')}>
            <AskOrb />
            {label}
        </span>
    )
}

export type AskYouweProps = {
    /** Figma: State */
    State?: 'Default' | 'Contextual' | 'Active'
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
    onAsk?: (q: string) => void
    onClose?: () => void
    className?: string
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
    onAsk,
    onClose,
    className,
}: AskYouweProps) {
    const id = useId()
    const input = useRef<HTMLInputElement>(null)
    const [q, setQ] = useState('')

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
        if (q.trim()) onAsk?.(q.trim())
    }

    if (State === 'Active') {
        return (
            <section
                data-mobile={Device === 'Mobile' || undefined}
                className={cx(styles.askGlass, styles.askPanel, className)}
                aria-labelledby={`${id}-t`}
            >
                <AskAura />
                <div className={styles.askPanelHeader}>
                    <AskOrb />
                    <span id={`${id}-t`} className="yw-body-md-bold">
                        Ask Youwe
                    </span>
                    <AskButton
                        Type="Icon"
                        Size="S"
                        icon="close"
                        label="Close"
                        onClick={onClose}
                    />
                </div>
                {Question && (
                    <div className={styles.askPanelQuestion}>
                        <p
                            className={cx(
                                styles.askPanelBubble,
                                'yw-body-md-reg'
                            )}
                        >
                            {Question}
                        </p>
                    </div>
                )}
                <div className={styles.askPanelAnswer} aria-live="polite">
                    <p className="yw-body-md-reg">{Answer}</p>
                    {Source && (
                        <span
                            className={cx(
                                styles.askPanelSource,
                                'yw-body-xs-reg'
                            )}
                        >
                            {Source}
                        </span>
                    )}
                </div>
                {(followUp || cta) && (
                    <div className={styles.askPanelFollowups}>
                        {followUp && (
                            <AskChip
                                label={followUp}
                                onClick={() => onAsk?.(followUp)}
                            />
                        )}
                        {cta && (
                            <AskButton
                                Variant="Primary"
                                label={cta.label}
                                href={cta.href}
                            />
                        )}
                    </div>
                )}
                <form className={styles.askPanelComposer} onSubmit={submit}>
                    <input
                        className={cx(styles.askBarInput, 'yw-body-md-reg')}
                        placeholder="Ask a follow-up…"
                        aria-label="Ask a follow-up"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <AskButton
                        Type="Icon"
                        Variant={q ? 'Primary' : 'Disabled'}
                        label="Send"
                        onClick={() => q && onAsk?.(q)}
                    />
                </form>
            </section>
        )
    }

    return (
        <form
            role="search"
            data-contextual={
                (State === 'Contextual' && Device === 'Desktop') || undefined
            }
            className={cx(styles.askGlass, styles.askBar, className)}
            onSubmit={submit}
            onClick={() => input.current?.focus()}
        >
            <AskAura />
            <AskOrb />
            <input
                ref={input}
                className={cx(styles.askBarInput, 'yw-body-md-reg')}
                placeholder={Prompt}
                aria-label={Prompt}
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            {State === 'Contextual' && context && (
                <span className={styles.askBarContext}>
                    <AskChip label={context} onClick={() => onAsk?.(context)} />
                </span>
            )}
            {shortcut && Device === 'Desktop' && (
                <AskChip Type="Key" label="⌘K" />
            )}
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
    image?: string
    /** Case: Show second button */
    'Show second button'?: boolean
    href?: string
    onAsk?: (q: string) => void
    className?: string
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
    onAsk,
    className,
}: AskSnippetProps) {
    const base = {
        className: cx(styles.askGlass, styles.askSnippet, className),
        'data-flat': true,
        'data-type': Type.toLowerCase(),
        'data-mobile': Device === 'Mobile' || undefined,
    }
    if (Type === 'Case') {
        return (
            <article {...base}>
                <CardMedia
                    src={image}
                    className={styles.askSnippetImage}
                    placeholder={false}
                />
                <div className={styles.askSnippetContent}>
                    <AskLabel
                        label={`Ask Youwe · ${reason ?? 'Related case'}`}
                    />
                    <h3 className="yw-body-xl-med" style={{ margin: 0 }}>
                        {Title}
                    </h3>
                    {Meta && <span className="yw-body-sm-reg">{Meta}</span>}
                    <div className={styles.askSnippetActions}>
                        <AskButton
                            Variant="Primary"
                            label="Read the case"
                            href={href}
                        />
                        {second && (
                            <AskButton
                                label="Ask about it"
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
                <span className={styles.askSnippetText}>
                    <AskOrb />
                    <span className="yw-body-sm-reg">{Title}</span>
                </span>
                <AskButton label="Read" href={href} />
            </aside>
        )
    }
    return (
        <aside {...base}>
            <AskAura />
            <span className={styles.askSnippetText}>
                <AskLabel
                    label={reason ? `Ask Youwe · ${reason}` : 'Ask Youwe'}
                />
                <span className="yw-body-md-reg">{Title}</span>
            </span>
            <AskButton
                Type="Icon"
                Variant="Primary"
                label={`Ask: ${Title}`}
                onClick={() => onAsk?.(Title)}
            />
        </aside>
    )
}
