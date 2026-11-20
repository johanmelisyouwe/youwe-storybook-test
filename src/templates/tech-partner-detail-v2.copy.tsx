/*
  Copy for Tech Partners detail v2 (Pimcore), from Figma file "Youwe website 2026 – Homepage A (Flow)",
  page "Tech partner detail - dark", frame "Desktop 1440 — Partner detail Pimcore (R6)" (127:2). Only
  the copy is used; the page is built from existing components (20 November). Not used: the
  "data in / channels out" diagram (no component; the five steps carry the same story) and the blog
  teaser next to the partner facts.
*/

export const HERO = {
    title: ['One data spine', 'for every channel.'],
    body: 'Data comes in from your ERP, suppliers and files. Pimcore makes it right once, then feeds every channel, portal and AI agent.',
    buttons: [
        { label: 'Talk to an expert', href: '#' },
        { label: 'See how it works', href: '#how-it-works' },
    ],
    stats: [
        { value: '27', label: 'Published Pimcore cases', client: '' },
        { value: '25', label: 'Clients', client: '' },
        { value: '9', label: 'Industries', client: '' },
        { value: 'Founding', label: 'Partnership', client: '' },
    ],
}

export const FITS = {
    kicker: 'Where Pimcore fits',
    title: 'Part of a system, not a silo.',
    body: 'We build systems that scale and systems that optimize. This is the part Pimcore plays.',
    services: [
        {
            Eyebrow: 'Systems that scale',
            Title: 'Digital Infrastructure',
            Description: 'PIM/MDM, DXP and portals that feed every channel.',
        },
        {
            Eyebrow: 'Systems that scale',
            Title: 'Foundation for Data & Integrations',
            Description:
                'One governed source for product, master and asset data, tied to your ERP.',
        },
        {
            Eyebrow: 'Systems that optimize',
            Title: 'Operational Optimization & Intelligence',
            Description: 'AI enrichment with ACI Weave, as at Chadwicks Group.',
        },
    ],
}

export const STEPS = {
    kicker: 'How it works',
    title: 'Five steps, one platform.',
    intro: 'How data moves through Pimcore, with a client at every step.',
    tabs: [
        {
            label: 'Connect the ERP',
            kind: '01 · MDM',
            body: 'Master data flows in from SAP and other ERPs, governed in one place.',
            flow: 'ERP · SAP → Webshops',
            case: {
                Client: 'Heidelberg',
                Title: 'Proven at Heidelberg',
                stat: { value: '3', label: 'SAP ERP systems integrated' },
                image: 'heidelberg',
            },
        },
        {
            label: 'Enrich with AI',
            kind: '02 · PIM + AI',
            body: 'AI agents fill and check product content at catalog scale.',
            flow: 'Supplier data → Marketplaces',
            case: {
                Client: 'Chadwicks Group',
                Title: 'Proven at Chadwicks Group',
                stat: { value: '20,000', label: 'products enriched' },
                image: 'chadwicks',
            },
        },
        {
            label: 'Manage every asset',
            kind: '03 · DAM',
            body: 'Brand assets, converted per channel and shared through a portal.',
            flow: 'Images & files → Print catalogs',
            case: {
                Client: 'FroQ',
                Title: 'Pimcore DAM and an asset portal for packaging',
            },
        },
        {
            label: 'Open a self-service portal',
            kind: '04 · Portal',
            body: 'Customers find documents and orders themselves, on top of SAP S/4HANA.',
            flow: 'Spreadsheets → Portals',
            case: {
                Client: 'Vivisol',
                Title: 'A self-service portal for home care, on SAP S/4HANA',
            },
        },
        {
            label: 'Publish everywhere',
            kind: '05 · DXP',
            body: 'One source feeds headless commerce, sites and marketplaces.',
            flow: 'Webshops · Marketplaces · AI agents',
            case: {
                Client: 'CMSNL',
                Title: 'Pimcore behind a headless commercetools platform',
            },
        },
    ],
}

export const INDUSTRIES = {
    kicker: 'Pimcore by industry',
    heading: 'Where our Pimcore platforms run.',
    body: 'Published Pimcore cases per industry, with the clients behind them. Counted from the published cases on youweagency.com that name Pimcore.',
    items: [
        ['7', 'Manufacturing', 'CDVI, Desch Plantpak, Heidelberg, ICMM…'],
        [
            '4',
            'Construction & Building Materials',
            'Chadwicks Group, Kooyman, Vrijbuiter, Worktoolcenter',
        ],
        [
            '4',
            'Food & Agriculture',
            'Avebe, Bejo Zaden, Gallagher, Hansen Dranken',
        ],
        [
            '3',
            'Retail & Consumer Goods',
            'Keesing Media Group (KMG), Motorcycle Storehouse, iBood',
        ],
        ['3', 'Home & Living', 'GAIA Design, Kakelspecialisten, Quooker'],
        ['2', 'Healthcare & Pharma', 'UMCG, Vivisol'],
        ['1', 'Automotive & Cycling', 'Consolidated Motor Spares B.V. (CMSNL)'],
        ['1', 'Education & Training', '360training'],
        ['1', 'Wholesale', 'FroQ'],
    ],
}

export const ASK = {
    heading: 'Questions about Pimcore?',
    body: 'Answers come from our published pages and cases, with sources. No guessing.',
    questions: [
        'Which clients use Pimcore?',
        'Have you done Pimcore for construction companies?',
    ],
}

export const PARTNER = {
    kicker: 'Strategic Partner · Youwe x Pimcore',
    heading: 'Strategic Partner, from day one.',
    facts: [
        'Strategic Partner: Youwe’s Pimcore partner level',
        'Founding partner: at Pimcore Inspire 2026, Salzburg',
        'Certified specialists: Pimcore-certified on the team',
    ],
    faq: [
        {
            label: 'Why choose Pimcore over other platforms?',
            content:
                'Pimcore brings product, customer and digital data together in one flexible platform. You save time, reduce integration headaches and gain full control of your data.',
        },
        {
            label: 'How does Youwe add value as a Pimcore partner?',
            content:
                'As a Pimcore Strategic Partner, Youwe combines deep technical expertise with real-world business insight, for B2B and B2C brands.',
        },
        {
            label: 'Can Pimcore integrate with my existing systems?',
            content:
                'Yes. Pimcore’s open, API-first architecture connects with your ERP, CRM, BI or ecommerce tools, without replacing your current systems.',
        },
    ],
}

export const CTA = {
    title: 'Talk to a Pimcore expert',
    body: 'Tell us where your product data gets stuck. We will come back with an honest view.',
    primary: { label: 'Talk to an expert', href: '#' },
    secondary: { label: 'All tech partners', href: '#' },
}
