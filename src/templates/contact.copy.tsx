/*
  Copy for the Contact template, from Figma "Desktop 1440 — Contact" (27263:18403). Only the copy is
  used. Left out: the prototype note under the form ("This prototype form does not send data…").
  The "Who do you want to contact?" options are not in Figma (see TOPICS).
*/

export const HERO = {
    kicker: 'Contact',
    title: 'Let’s talk about your next step',
    body: 'Whether you’re ready to start a project or just have a few questions, we’re here to help. Call us directly or fill in the form — one of our experts will get back to you within one working day.',
    phone: '+31 10 466 86 38',
}

/** Not in Figma (only the label and placeholder are): a first set of options to confirm */
export const TOPICS = [
    'Start a new project',
    'Support for an existing project',
    'Partnerships',
    'Press and media',
    'Careers',
    'Something else',
].map((x) => ({ value: x, label: x }))

export const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Belgium',
    'Germany',
    'Other',
].map((x) => ({ value: x, label: x }))

export const OFFICES_INTRO = {
    Kicker: 'Our offices',
    Title: 'Eight offices, one team',
    Body: 'Live local time in every Youwe office. Call, visit, or send the form — we are close to your market.',
}

export const ASK = 'Where are your offices?'

export const WORK = {
    kicker: 'Work',
    title: 'See what we build with clients',
    body: 'Selected work across retail, manufacturing, healthcare and more.',
    primary: { label: 'Explore our work', href: '#' },
    secondary: { label: 'Our services', href: '#' },
}
