import { type ReactNode, useEffect, useRef, useState } from 'react'
import { TextInput } from '../text-input'
import { RadioLabel } from '../radio'
import { TextArea } from '../text-area'
import { Dropdown } from '../dropdown'
import { CheckboxLabel } from '../checkbox'
import { Button } from '../button'
import { Toaster } from '../toaster'
import { Icon } from '../../shared/icons/icon'
import { cx } from '../../shared/cx'
import { fmt } from '../../shared/labels'
import styles from './registration-form.module.css'

/*
  Registration form — code component (not in Figma; the Figma event page only has "Register now"
  buttons; added 19 November). Sign-up for an event, built from the form components (Text Input,
  Radio, Checkbox, Button), laid out like the Contact CTA form.
  Fields: first and last name, business email, company (required; can be hidden), job title (can be
  hidden), optional phone and country, an
  optional choice (e.g. on or off the slopes), an optional free-text field (e.g. dietary requirements),
  an opt-in (can be hidden) and an optional notice (e.g. privacy text). Used for event sign-up and the
  whitepaper and webinar downloads (19 November). Submit: `onSubmit(FormData)`; while it runs the button shows the sending label; when it
  resolves the form is replaced by a confirmation; when it throws, an error Toaster shows above the
  button and the entries stay.
*/

export const REGISTRATION_FORM_LABELS = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Business email',
    emailPlaceholder: 'name@company.com',
    company: 'Company',
    jobTitle: 'Job title',
    phone: 'Phone number',
    country: 'Country',
    countryPlaceholder: 'Select your country',
    optIn: 'Keep me informed about future Youwe events',
    submit: 'Register now',
    sending: 'Sending…',
    /** {name} = first name */
    successTitle: 'You are registered',
    successMessage:
        'Thank you, {name}. We will send the confirmation and practical details to {email}.',
    errorTitle: 'Something went wrong',
    errorMessage: 'Your registration was not sent. Please try again.',
}

export type RegistrationFormProps = {
    Device?: 'Desktop' | 'Mobile'
    /** One choice the attendee must make, e.g. joining on or off the slopes */
    choice?: { name: string; label: string; options: string[] }
    /** Show the company field (required; default true) */
    company?: boolean
    /** Show the job title field (default true) */
    jobTitle?: boolean
    /** Show the optional phone number field (Whitepaper download) */
    phone?: boolean
    /** Country dropdown options (Video download); leave out for no country field */
    countries?: { value: string; label: string }[]
    /** Show the opt-in checkbox (default true) */
    optIn?: boolean
    /** Opt-in text for this form (else labels.optIn) */
    optInLabel?: string
    /** Text under the fields, e.g. the privacy notice with a Privacy Policy link */
    notice?: ReactNode
    /** One optional free-text question, e.g. dietary requirements; `multiline` gives a text area */
    question?: {
        name: string
        label: string
        placeholder?: string
        multiline?: boolean
    }
    /** Called with the form data; resolve on success, throw on failure */
    onSubmit?: (data: FormData) => Promise<void> | void
    /** Story/preview: start in the confirmation state */
    defaultState?: 'Form' | 'Registered'
    className?: string
    /** UI text, for translations: { ...REGISTRATION_FORM_LABELS } */
    labels?: Partial<typeof REGISTRATION_FORM_LABELS>
}

export function RegistrationForm({
    Device = 'Desktop',
    choice,
    question,
    company = true,
    jobTitle = true,
    phone,
    countries,
    optIn = true,
    optInLabel,
    notice,
    onSubmit,
    defaultState = 'Form',
    className,
    labels: l,
}: RegistrationFormProps) {
    const L = { ...REGISTRATION_FORM_LABELS, ...l }
    const [state, setState] = useState<'idle' | 'sending' | 'error' | 'done'>(
        defaultState === 'Registered' ? 'done' : 'idle'
    )
    const [who, setWho] = useState({ name: '', email: '' })
    const [picked, setPicked] = useState<string>()
    // After a successful submit the form is replaced by the shorter confirmation: move focus (and the
    // view) to it, so screen readers announce it and the page does not jump past it.
    const doneRef = useRef<HTMLDivElement>(null)
    const submitted = useRef(false)
    useEffect(() => {
        if (state === 'done' && submitted.current) {
            doneRef.current?.focus({ preventScroll: true })
            doneRef.current?.scrollIntoView({ block: 'center' })
        }
    }, [state])

    if (state === 'done') {
        return (
            <div
                ref={doneRef}
                role="status"
                tabIndex={-1}
                className={cx(styles.root, styles.success, className)}
            >
                <span className={styles.check} aria-hidden="true">
                    <Icon name="check" size={24} />
                </span>
                <div className={styles['success-text']}>
                    <p
                        className={
                            Device === 'Mobile'
                                ? 'yw-heading-md'
                                : 'yw-heading-lg'
                        }
                    >
                        {fmt(L.successTitle, { name: who.name || '…' })}
                    </p>
                    <p className="yw-body-md-reg">
                        {fmt(L.successMessage, {
                            name: who.name || '…',
                            email: who.email || '…',
                        })}
                    </p>
                </div>
            </div>
        )
    }

    const email = (
        <TextInput
            Label={L.email}
            Required
            name="email"
            type="email"
            autoComplete="email"
            placeholderText={L.emailPlaceholder}
        />
    )

    return (
        <form
            className={cx(styles.root, styles.form, className)}
            onSubmit={async (e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                setWho({
                    name: String(data.get('firstName') ?? ''),
                    email: String(data.get('email') ?? ''),
                })
                setState('sending')
                submitted.current = true
                try {
                    await onSubmit?.(data)
                    setState('done')
                } catch {
                    setState('error')
                }
            }}
        >
            <div className={styles.row}>
                <TextInput
                    Label={L.firstName}
                    Required
                    name="firstName"
                    autoComplete="given-name"
                    placeholderText={L.firstName}
                />
                <TextInput
                    Label={L.lastName}
                    Required
                    name="lastName"
                    autoComplete="family-name"
                    placeholderText={L.lastName}
                />
            </div>
            {company ? (
                <div className={styles.row}>
                    {email}
                    <TextInput
                        Label={L.company}
                        Required
                        name="company"
                        autoComplete="organization"
                        placeholderText={L.company}
                    />
                </div>
            ) : (
                email
            )}
            {jobTitle && (
                <TextInput
                    Label={L.jobTitle}
                    name="jobTitle"
                    autoComplete="organization-title"
                    placeholderText={L.jobTitle}
                />
            )}
            {(phone || countries) && (
                <div className={phone && countries ? styles.row : undefined}>
                    {phone && (
                        <TextInput
                            Label={L.phone}
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholderText={L.phone}
                        />
                    )}
                    {countries && (
                        <Dropdown
                            Label={L.country}
                            name="country"
                            placeholderText={L.countryPlaceholder}
                            options={countries}
                        />
                    )}
                </div>
            )}
            {choice && (
                <fieldset className={styles.choice}>
                    <legend className={cx(styles.legend, 'yw-body-sm-med')}>
                        {choice.label}
                        <span className={styles.required} aria-hidden="true">
                            {' '}
                            *
                        </span>
                    </legend>
                    {choice.options.map((o) => (
                        <RadioLabel
                            key={o}
                            name={choice.name}
                            value={o}
                            label={o}
                            checked={picked === o}
                            onChange={(v) => setPicked(v)}
                            required
                        />
                    ))}
                </fieldset>
            )}
            {question &&
                (question.multiline ? (
                    <TextArea
                        Label={question.label}
                        name={question.name}
                        placeholderText={question.placeholder ?? question.label}
                    />
                ) : (
                    <TextInput
                        Label={question.label}
                        name={question.name}
                        placeholderText={question.placeholder ?? question.label}
                    />
                ))}
            {optIn && (
                <CheckboxLabel
                    Size="S"
                    name="optIn"
                    label={optInLabel ?? L.optIn}
                />
            )}
            {notice && (
                <div className={cx(styles.notice, 'yw-body-xs-reg')}>
                    {notice}
                </div>
            )}
            {state === 'error' && (
                <Toaster
                    Variant="Error"
                    Shadow="No"
                    title={L.errorTitle}
                    message={L.errorMessage}
                    onClose={() => setState('idle')}
                />
            )}
            <Button
                Variant="Primary"
                Size="M"
                type="submit"
                label={state === 'sending' ? L.sending : L.submit}
                disabled={state === 'sending'}
                className={styles.submit}
            />
        </form>
    )
}
