import { TextInput } from '../TextInput/TextInput'
import { Dropdown } from '../Dropdown/Dropdown'
import { TextArea } from '../TextArea/TextArea'
import { CheckboxLabel } from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { CardMedia } from '../../shared/CardMedia'
import '../../shared/block.css'
import './ContactCTA.css'

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
                className="yw-block yw-contact yw-contact--form"
                aria-label={title}
            >
                <div className="yw-block__inner">
                    <div className="yw-contact__text yw-block-reveal">
                        <h2
                            className={
                                Device === 'Mobile'
                                    ? 'yw-heading-lg'
                                    : 'yw-heading-xl'
                            }
                        >
                            {title}
                        </h2>
                        <div className="yw-contact__body">
                            <p className="yw-body-md-reg">{body}</p>
                            {phone && (
                                <a
                                    className="yw-contact__phone yw-body-2xl-med"
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                >
                                    {phone}
                                </a>
                            )}
                        </div>
                    </div>
                    <form
                        className="yw-contact__form yw-block-reveal"
                        onSubmit={(e) => {
                            e.preventDefault()
                            onSubmit?.(new FormData(e.currentTarget))
                        }}
                    >
                        <div className="yw-contact__row">
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
                        <div className="yw-contact__row">
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
                            className="yw-btn-auto"
                        />
                    </form>
                </div>
            </section>
        )
    }

    const content = (
        <div className="yw-contact__content yw-block-reveal">
            <h2
                className={
                    Device === 'Mobile' ? 'yw-heading-xl' : 'yw-heading-3xl'
                }
            >
                {title}
            </h2>
            <p className="yw-body-lg-reg">{body}</p>
            {(primary || secondary) && (
                <div className="yw-contact__actions">
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
                <p className="yw-contact__offices yw-body-sm-reg">
                    {offices.join('  ·  ')}
                </p>
            )}
        </div>
    )

    if (Variant === 'Sub-footer split') {
        return (
            <section
                className="yw-block yw-contact yw-contact--split"
                aria-label={title}
            >
                <div className="yw-contact__split">
                    <div className="yw-block__inner">{content}</div>
                    <CardMedia
                        src={image}
                        className="yw-contact__image yw-contact__clip"
                    />
                </div>
            </section>
        )
    }

    return (
        <section
            className="yw-block yw-contact yw-contact--background"
            aria-label={title}
        >
            <CardMedia src={image} className="yw-contact__bg" />
            <div className="yw-block__inner">{content}</div>
        </section>
    )
}
