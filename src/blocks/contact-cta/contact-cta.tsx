import { TextInput } from '../../ui/text-input'
import { Dropdown } from '../../ui/dropdown'
import { TextArea } from '../../ui/text-area'
import { CheckboxLabel } from '../../ui/checkbox'
import { Button } from '../../ui/button'
import { CardMedia } from '../../shared/card-reveal/card-media'
import { cx } from '../../shared/cx'
import block from '../../shared/block/block.module.css'
import styles from './contact-cta.module.css'

/* Content blocks/Contact CTA — Figma 26535:451. */

export type ContactCTAVariant =
    | 'Form'
    | 'Sub-footer split'
    | 'Sub-footer background'
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
    image?: string
    onSubmit?: (data: FormData) => void
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
}: ContactCTAProps) {
    if (Variant === 'Form') {
        return (
            <section
                data-layout="form"
                className={cx(block.root, styles.root)}
                aria-label={title}
            >
                <div className={cx(block.inner, styles.inner)}>
                    <div className={cx(styles.text, block.reveal)}>
                        <h2
                            className={
                                Device === 'Mobile'
                                    ? 'yw-heading-lg'
                                    : 'yw-heading-xl'
                            }
                        >
                            {title}
                        </h2>
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
                        <TextArea
                            Label="Message"
                            Required
                            name="message"
                            placeholderText="How can we help you?"
                        />
                        <CheckboxLabel
                            Size="S"
                            name="optIn"
                            label="Yes, I would like to learn more about Youwe’s services"
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
