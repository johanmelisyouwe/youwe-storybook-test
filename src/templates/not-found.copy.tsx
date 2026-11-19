/*
  Copy for the 404 template (19 November). There is no 404 page in Figma: the hero texts are new (to
  confirm); the page cards reuse the hero lines of the Services, Work, Industries and Insights templates.
*/

export const HERO = {
    label: '404',
    title: ['Page not found.', 'Let’s get you back on track.'],
    body: 'The page you are looking for has moved or no longer exists. Try one of the pages below, or ask Youwe what you are looking for.',
    buttons: [
        { label: 'Back to home', href: '/' },
        { label: 'Contact us', href: '#' },
    ],
}

export const ASK = 'What are you looking for?'

export const PAGES_INTRO = {
    Kicker: 'Popular pages',
    Title: 'Where would you like to go?',
}

export const PAGES = [
    {
        Title: 'Services',
        Description: 'Platforms, processes and data, connected.',
        cta: 'Explore our services',
    },
    {
        Title: 'Work',
        Description: 'Work that scales, optimizes and drives revenue.',
        cta: 'See our work',
    },
    {
        Title: 'Industries',
        Description: 'Twelve industries. One connected way of working.',
        cta: 'Find your industry',
    },
    {
        Title: 'Insights',
        Description:
            'Blogs, whitepapers, events, videos, news and landing pages from Youwe.',
        cta: 'Browse all insights',
    },
]
