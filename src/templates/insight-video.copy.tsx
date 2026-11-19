/*
  Copy for the Video insight template, from Figma "Desktop 1440 — Insight Video detail (R6)" (27263:17425).
  Only the copy is used from that frame (the download form, its question, opt-in and privacy text are
  Figma copy too). The video itself is a placeholder (the Quooker Vimeo film).
*/

export const TITLE =
    'PWA Masterclass: What are they and why are they the future?'

export const INTRO_HEADING = 'Are you wondering what Progressive Web Apps are?'
export const INTRO_BODY =
    'Our expert will not only explain what a PWA is, but he will also show successful customer cases and tell you more about the implementation of Progressive Web Apps. Watch the webinar now.'

export const DETAILS = [
    { label: 'Video', value: 'On-demand webinar' },
    { label: 'Published', value: 'August 20, 2024' },
    { label: 'Expert', value: 'Elze Kool' },
]

export const META = [
    { label: 'Type', value: 'Video' },
    { label: 'Topics', value: 'Headless & Composable\nE-Commerce' },
]

export const NAV = {
    about: 'About the webinar',
    topics: 'Topics',
    download: 'Download',
}

export const ABOUT =
    'Youwe’s PWA expert Elze Kool will dive into the topic Progressive Web Apps and will give you a masterclass so you will learn what a PWA is, what the difference is between a web app and a native app, if you need an e-commerce website or a PWA, but he will also share his insights on the benefits of Progressive Web Apps, the costs, and show you some PWA examples.'

export const TOPICS = [
    'What does PWA actually stand for?',
    'What are the benefits?',
    'What will it cost me?',
    'Customer cases',
    'Frequently asked questions and answers',
]

export const QUESTION = {
    name: 'question',
    label: 'Do you have any questions about PWA? Ask them here and we will contact you.',
    placeholder: 'Ask your question',
    multiline: true,
}

export const OPT_IN = 'Yes, I would like to receive more information about PWA'

export const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Belgium',
    'Germany',
    'Other',
].map((x) => ({ value: x, label: x }))

export const FORM_LABELS = {
    email: 'Business e-mail',
    submit: 'Download webinar',
    successTitle: 'Thank you, {name}',
    successMessage: 'We will send the webinar to {email}.',
}

export const MORE: [string, string, string][] = [
    [
        'The process behind compelling User Experiences',
        'Video · On-demand webinar',
        '004',
    ],
    [
        'Watch the webinar: Launch your online shop in three weeks',
        'Video · On-demand webinar',
        '007',
    ],
    [
        'Watch the webinar from Drupal 7 to Drupal anything',
        'Video · On-demand webinar',
        '015',
    ],
]
