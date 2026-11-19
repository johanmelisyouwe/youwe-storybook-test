/*
  Copy for the Event insight template, from Figma "Desktop 1440 — Insight Event detail (R6)" (27263:17242).
  Only the copy is used from that frame. The registration form is not in Figma: its field labels are
  standard form labels (Registration form defaults); the slope choice and the dietary question come
  from the timetable ("for anyone not skiing", "seated dinner").
*/

export const TITLE = 'Higher Ground: what’s next for product data'

export const INTRO_HEADING =
    'Youwe and Pimcore host the event for the people who decide how product data is organized, governed and published: in digital, commerce, product marketing and supply chain.'
export const INTRO_BODY =
    'Pimcore opens with what is next for product data. Then the meeting room gives way to the slopes, and the day closes with PIM specialists from both teams over dinner.'

export const DETAILS = [
    { label: 'Date', value: 'December 3, 2026' },
    { label: 'Time', value: '2:00 PM to 9:00 PM (CET)' },
    {
        label: 'Venue',
        value: 'SnowWorld Zoetermeer\nBuytenparklaan 30\n2717 AX Zoetermeer\nNetherlands',
    },
]

export const META = [
    { label: 'Type', value: 'Event' },
    { label: 'Topic', value: 'Product Information Management' },
]

export const NAV = {
    why: 'Why attend',
    agenda: 'Agenda',
    timetable: 'Timetable',
    takeaways: 'What you will take away',
    venue: 'Venue',
    register: 'Register',
}

export const WHY: [string | null, string][] = [
    [
        'See where your own product data stands.',
        'The Higher Ground guide grades your setup across twelve questions, from spreadsheets and supplier PDFs through to automated enrichment and syndication.',
    ],
    [
        null,
        'Hear what Pimcore is building next for product data, and what it means for the plans you are setting for 2027.',
    ],
    [
        null,
        'Test your data decisions against peers who carry the same catalog complexity, with Youwe and Pimcore specialists in the room.',
    ],
]

export const AGENDA = [
    'Keynote from Pimcore on what is next for product data.',
    'Time on the slopes in ability-grouped sets with a ski instructor.',
    'Après with PIM specialists from Youwe and Pimcore.',
]

export const TIMETABLE = [
    { time: '2:00 PM – 3:00 PM', title: 'Arrival, coffee and pastries' },
    {
        time: '3:00 PM – 4:00 PM',
        title: 'Keynote: what is next for product data, with Pimcore',
    },
    {
        time: '4:00 PM – 6:00 PM',
        title: 'A festive block on the snow in ability-grouped sets with a ski instructor, plus drinks and discussion off the slope for anyone not skiing',
    },
    {
        time: '6:00 PM – 7:00 PM',
        title: 'Networking: Youwe keynote, a customer story, and the Higher Ground assessment run live with a Pimcore demo',
    },
    {
        time: '7:00 PM – 9:00 PM',
        title: 'Seated dinner into après with PIM specialists from Youwe and Pimcore',
    },
]

export const TAKEAWAYS = [
    'A clear view of what is next for product data and what it means for your 2027 roadmap.',
    'Your piste score from the Higher Ground guide, and what it says about your data foundation.',
    'Direct access to the Youwe and Pimcore specialists who work on product data every day.',
]

export const VENUE = {
    name: 'SnowWorld Zoetermeer',
    address: 'Buytenparklaan 30, 2717 AX Zoetermeer, Netherlands',
}

export const CHOICE = {
    name: 'slopes',
    label: 'Will you join on the snow?',
    options: [
        'Yes, I will join on the slopes',
        'No, I will join the drinks and discussion off the slope',
    ],
}

export const QUESTION = {
    name: 'dietary',
    label: 'Dietary requirements',
    placeholder: 'For the seated dinner',
}

export const MORE: [string, string, string][] = [
    [
        'PIM Clinic | Product Data Advice | 28 October',
        'Event · 28 Oct · October 28, 2026 · Online session',
        '003',
    ],
    ['Conquer Peak Seasons with Confidence', 'Event · E-Commerce', '004'],
    ['Turn AI into ROI: Steps to Elevate Your eCommerce Game', 'Event', '008'],
]
