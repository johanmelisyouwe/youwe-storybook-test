import type { ImageInput } from '../../shared/asset'
import { CardArrow, CardReveal } from '../../shared/card-reveal'
import cardReveal from '../../shared/card-reveal/card-reveal.module.css'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { Pills } from '../pills'
import { Button } from '../button'
import { ButtonLink } from '../button-link'
import { cx } from '../../shared/cx'
import { askYouwe } from '../../shared/ask'
import styles from './feature-card.module.css'

/*
  Feature Card — Figma 26533:129 (page "Cards"). Static card; tags, button and link are separate links where used.
  Clickable (code, 17 November): with `href` the whole card is one link, and with `ask` (and no href) the whole
  card is a button that opens Ask Youwe. Both get the shared card hover (red reveal with `Hover CTA`, text lifts,
  also on keyboard focus), like the Service and Case Cards. The link label then shows as text, not a second link.
*/

export type FeatureCardProps = {
    /** Figma: Variant */
    Variant?: 'Card' | 'Plain' | 'AI'
    /** Figma: Number (Show number) — e.g. "01" */
    Number?: string
    Title: string
    /** Optional (e.g. Whitepaper chapter tiles: a title only) */
    Description?: string
    /** Figma: Show image */
    image?: ImageInput | true
    /** Figma: Show tags (up to 3) */
    tags?: string[]
    /** Figma: Show arrow */
    'Show arrow'?: boolean
    /** Figma: Show button — button label */
    button?: { label: string; href?: string }
    /** Figma: Show link — link label */
    link?: { label: string; href?: string }
    /** AI variant: the link opens Ask Youwe with this question (instead of going to href) */
    ask?: string
    /** The whole card links here (card hover: red reveal) */
    href?: string
    /** Card hover CTA (default: the link label, else "Read more"; "Ask Youwe" for ask cards) */
    'Hover CTA'?: string
    /** Scroll reveal (Figma motion); off in Storybook grids by default */
    reveal?: boolean
    className?: string
}

export function FeatureCard({
    Variant = 'Card',
    Number,
    Title,
    Description,
    image,
    tags,
    'Show arrow': arrow = false,
    button,
    link,
    ask,
    href,
    'Hover CTA': hoverCta,
    reveal = false,
    className,
}: FeatureCardProps) {
    // Whole card interactive: a link (href) or an Ask Youwe button (ask without href, and no separate button)
    const whole = href ? 'link' : ask && !button ? 'ask' : null
    const cta =
        hoverCta ??
        (whole === 'ask'
            ? (link?.label ?? 'Ask Youwe')
            : (link?.label ?? 'Read more'))
    const Root = whole === 'link' ? 'a' : whole === 'ask' ? 'button' : 'article'
    const rootProps =
        whole === 'link'
            ? { href }
            : whole === 'ask'
              ? {
                    type: 'button' as const,
                    onClick: () => askYouwe(ask ?? Title),
                }
              : {}
    return (
        <Root
            {...rootProps}
            data-variant={Variant.toLowerCase()}
            data-reveal={whole ? 'lift' : undefined}
            data-scroll={reveal || undefined}
            data-whole={whole ?? undefined}
            className={cx(styles.root, whole && cardReveal.root, className)}
        >
            {Variant === 'AI' && (
                <span className={styles.aura} aria-hidden="true" />
            )}
            {image && (
                <CardMedia
                    className={styles.image}
                    src={image === true ? undefined : image}
                    ratio="16 / 9"
                    style={{ borderRadius: 0 }}
                />
            )}
            <div className={cx(styles.content, whole && cardReveal.lift)}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        {Number && (
                            <span
                                className={cx(styles.number, 'yw-body-sm-bold')}
                            >
                                {Number}
                            </span>
                        )}
                        <h3 className="yw-body-xl-med" style={{ margin: 0 }}>
                            {Title}
                        </h3>
                    </div>
                    {arrow && <CardArrow />}
                </div>
                {Description && (
                    <p
                        className={cx(styles.desc, 'yw-body-md-reg')}
                        style={{ margin: 0 }}
                    >
                        {Description}
                    </p>
                )}
                {tags && tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.slice(0, 3).map((t) => (
                            <Pills
                                key={t}
                                Variant="Neutral"
                                Size="S"
                                label={t}
                            />
                        ))}
                    </div>
                )}
                {button && !whole && (
                    <div className={styles.bottom}>
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={button.label}
                            href={button.href}
                        />
                    </div>
                )}
                {link && whole ? (
                    // The whole card is the link/button: the label is text
                    <span className={cx(styles.linklabel, 'yw-body-md-med')}>
                        {link.label}
                    </span>
                ) : (
                    link &&
                    (ask ? (
                        // Opens Ask Youwe on this page, so it's a button, not a link
                        <ButtonLink
                            Size="md"
                            label={link.label}
                            onClick={() => askYouwe(ask)}
                        />
                    ) : (
                        <ButtonLink
                            Size="md"
                            label={link.label}
                            href={link.href ?? '#'}
                        />
                    ))
                )}
            </div>
            {whole && <CardReveal cta={cta} context={Title} />}
        </Root>
    )
}
