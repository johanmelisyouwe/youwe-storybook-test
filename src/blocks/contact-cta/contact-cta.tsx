import type { ImageInput } from '../../shared/asset'
import { TextInput } from '../../ui/text-input'
import { Dropdown } from '../../ui/dropdown'
import { TextArea } from '../../ui/text-area'
import { CheckboxLabel } from '../../ui/checkbox'
import { Button } from '../../ui/button'
import { FileInput } from '../../ui/file-input'
import { Breadcrumbs, type Crumb } from '../../ui/breadcrumbs'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './contact-cta.module.css'

/* Content blocks/Contact CTA — Figma 26535:451. */

export type ContactCTAVariant =
    | 'Form'
    | 'Sub-footer split'
    | 'Sub-footer background'
/** Fixed UI text (English defaults); pass `labels` to translate (NL, SV) */
export const CONTACT_CTA_LABELS = {
    consent: 'Yes, I would like to learn more about Youwe’s services',
    topic: 'Who do you want to contact?',
    topicPlaceholder: 'Who would you like to contact?',
    attachment: 'Attachment (optional)',
    attachmentHint: 'PDF or DOCX, max 10 MB',
}

export type ContactCTAProps = {
    /** Figma: Variant */
    Variant?: ContactCTAVariant
    /** Figma: Device (layout follows the block width) */
    Device?: 'Desktop' | 'Mobile'
    title: string
    body: string
    /** Form: phone number shown under the body */
    phone?: string
    /** Sub-footer: primary and secondary buttons */
    primary?: { label: string; href?: string }
    secondary?: { label: string; href?: string }
    /** Sub-footer: office line */
    offices?: string[]
    /** Form: submit button label */
    submit?: string
    /** Form: country options */
    countries?: { value: string; label: string }[]
    /** Sub-footer image (placeholder when absent) */
    image?: ImageInput
    onSubmit?: (data: FormData) => void
    /** Form as the page hero (Contact page, 19 November): breadcrumb above, heading/3xl title, top
        padding below the fixed header */
    crumbs?: Crumb[]
    /** Red-line kicker above the title, e.g. "Contact" (Form, Sub-footer) */
    kicker?: string
    /** Form: "Who do you want to contact?" options (a required dropdown after Country) */
    topics?: { value: string; label: string }[]
    /** Form: an optional attachment field (PDF or DOCX) after the message */
    attachment?: boolean
    /** UI text, for translations: { ...CONTACT_CTA_LABELS } */
    labels?: Partial<typeof CONTACT_CTA_LABELS>
}

export function ContactCTA({
    Variant = 'Form',
    Device = 'Desktop',
    title,
    body,
    phone,
    primary,
    secondary,
    offices,
    countries = [],
    submit = 'Send message',
    image,
    onSubmit,
    crumbs,
    kicker,
    topics,
    attachment,
    labels,
}: ContactCTAProps) {
    const L = { ...CONTACT_CTA_LABELS, ...labels }
    if (Variant === 'Form') {
        return (
            <section
                data-layout="form"
                data-hero={crumbs ? true : undefined}
                className={cx(block.root, styles.root)}
                aria-label={title}
            >
                <div className={cx(block.inner, styles.inner)}>
                    {crumbs && (
                        <div className={styles.crumbs}>
                            <Breadcrumbs
                                items={crumbs}
                                Device={Device}
                                {...{ 'Filter button': false }}
                            />
                        </div>
                    )}
                    <div className={cx(styles.text, block.reveal)}>
                        {kicker && (
                            <span
                                className={cx(block.kicker, 'yw-body-sm-bold')}
                            >
                                {kicker}
                            </span>
                        )}
                        {(() => {
                            const H = crumbs ? 'h1' : 'h2'
                            return (
                                <H
                                    className={
                                        crumbs
                                            ? 'yw-heading-3xl'
                                            : Device === 'Mobile'
                                              ? 'yw-heading-lg'
                                              : 'yw-heading-xl'
                                    }
                                >
                                    {title}
                                </H>
                            )
                        })()}
                        <div className={styles.body}>
                            <p className="yw-body-md-reg">{body}</p>
                            {phone && (
                                <a
                                    className={cx(
                                        styles.phone,
                                        'yw-body-2xl-med'
                                    )}
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                >
                                    {phone}
                                </a>
                            )}
                        </div>
                    </div>
                    <form
                        className={cx(styles.form, block.reveal)}
                        onSubmit={(e) => {
                            e.preventDefault()
                            onSubmit?.(new FormData(e.currentTarget))
                        }}
                    >
                        <div className={styles.row}>
                            <TextInput
                                Label="First name"
                                Required
                                name="firstName"
                                autoComplete="given-name"
                                placeholderText="First name"
                            />
                            <TextInput
                                Label="Last name"
                                Required
                                name="lastName"
                                autoComplete="family-name"
                                placeholderText="Last name"
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                Label="Business email"
                                Required
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholderText="name@company.com"
                            />
                            <TextInput
                                Label="Phone number"
                                Required
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholderText="Phone number"
                            />
                        </div>
                        <Dropdown
                            Label="Country"
                            Required
                            name="country"
                            placeholderText="Select your country"
                            options={countries}
                        />
                        {topics && (
                            <Dropdown
                                Label={L.topic}
                                Required
                                name="topic"
                                placeholderText={L.topicPlaceholder}
                                options={topics}
                            />
                        )}
                        <TextArea
                            Label="Message"
                            Required
                            name="message"
                            placeholderText="How can we help you?"
                        />
                        {attachment && (
                            <FileInput
                                Label={L.attachment}
                                hint={L.attachmentHint}
                                name="attachment"
                                accept=".pdf,.docx"
                            />
                        )}
                        <CheckboxLabel
                            Size="S"
                            name="optIn"
                            label={L.consent}
                        />
                        <Button
                            Variant="Primary"
                            Size="M"
                            type="submit"
                            label={submit}
                            className={styles['btn-auto']}
                        />
                    </form>
                </div>
            </section>
        )
    }

    const content = (
        <div className={cx(styles.content, block.reveal)}>
            {kicker && (
                <span className={cx(block.kicker, 'yw-body-sm-bold')}>
                    {kicker}
                </span>
            )}
            <h2
                className={
                    Device === 'Mobile' ? 'yw-heading-xl' : 'yw-heading-3xl'
                }
            >
                {title}
            </h2>
            <p className="yw-body-lg-reg">{body}</p>
            {(primary || secondary) && (
                <div className={styles.actions}>
                    {primary && (
                        <Button
                            Variant="Primary"
                            Size="M"
                            label={primary.label}
                            href={primary.href}
                        />
                    )}
                    {secondary && (
                        <Button
                            Variant="Solid"
                            Size="M"
                            label={secondary.label}
                            href={secondary.href}
                        />
                    )}
                </div>
            )}
            {offices && (
                <p className={cx(styles.offices, 'yw-body-sm-reg')}>
                    {offices.join('  ·  ')}
                </p>
            )}
        </div>
    )

    if (Variant === 'Sub-footer split') {
        return (
            <section
                data-layout="split"
                className={cx(block.root, styles.root)}
                aria-label={title}
            >
                <div className={styles.split}>
                    <div className={cx(block.inner, styles.inner)}>
                        {content}
                    </div>
                    <CardMedia
                        src={image}
                        className={cx(styles.image, styles.clip)}
                    />
                </div>
            </section>
        )
    }

    return (
        <section
            data-layout="background"
            className={cx(block.root, styles.root)}
            aria-label={title}
        >
            <CardMedia src={image} className={styles.bg} placeholder={false} />
            <div className={cx(block.inner, styles.inner)}>{content}</div>
        </section>
    )
}
