/*
  Copy for the Contact template, from Figma "Desktop 1440 — Contact" (27263:18403). Only the copy is
  used; the layout is our own (19 November). Left out: the prototype note under the form ("This
  prototype form does not send data…"). The "Who do you want to contact?" options, the panel labels
  (Call us, Response time, Offices) and the confirmation are not in Figma.
*/

export const TITLE = 'Let’s talk about your next step'

export const INTRO_HEADING =
    'Whether you’re ready to start a project or just have a few questions, we’re here to help.'
export const INTRO_BODY =
    'Call us directly or fill in the form — one of our experts will get back to you within one working day.'

export const PHONE = '+31 10 466 86 38'

export const PANEL = [
    { label: 'Call us', value: PHONE },
    { label: 'Response time', value: 'Within one working day' },
    {
        label: 'Offices',
        value: 'Rotterdam · Groningen · London · Leeds · Shrewsbury · Stockholm · Bandung · Kyiv',
    },
]

export const TOPICS = {
    label: 'Who do you want to contact?',
    placeholder: 'Who would you like to contact?',
    options: [
        'Start a new project',
        'Support for an existing project',
        'Partnerships',
        'Press and media',
        'Careers',
        'Something else',
    ].map((x) => ({ value: x, label: x })),
}

export const MESSAGE = {
    name: 'message',
    label: 'Message',
    placeholder: 'How can we help you?',
    multiline: true,
    required: true,
}

export const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Belgium',
    'Germany',
    'Other',
].map((x) => ({ value: x, label: x }))

export const FORM_LABELS = {
    optIn: 'Yes, I would like to learn more about Youwe’s services',
    submit: 'Send message',
    successTitle: 'Thank you, {name}',
    successMessage:
        'One of our experts will get back to you within one working day.',
}

export const OFFICES_INTRO = {
    Kicker: 'Our offices',
    Title: 'Eight offices, one team',
    Body: 'Live local time in every Youwe office. Call, visit, or send the form — we are close to your market.',
}

export const ASK = 'Where are your offices?'

export const WORK = {
    title: 'See what we build with clients',
    body: 'Selected work across retail, manufacturing, healthcare and more.',
    primary: { label: 'Explore our work', href: '#' },
    secondary: { label: 'Our services', href: '#' },
}
