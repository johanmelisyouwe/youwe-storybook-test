import type { ReactNode } from 'react'

/*
  Copy for the legal pages, from Figma "Cookies — Youwe (R6)" (27263:18529), "Privacy Policy — Youwe (R6)"
  (27263:18605) and "Terms & Conditions — Youwe (R6)" (27263:18713). Only the copy is used.
  Left out (design notes, not page copy): the Cookies notes ("design-complete preferences view…",
  "Source framing…", "Design mock only — toggles do not persist consent"), the Privacy "Live page note" and
  "Last structured for Site A R6 design…". The Privacy "[To confirm]" items stay visible as To confirm
  notes, so legal can fill them in before launch.
*/

export type LegalSection = {
    id: string
    nav: string
    heading: string
    body: ReactNode
}

/* ---- Cookies ---- */

export const COOKIES = {
    title: 'Cookies',
    intro: 'Youwe uses cookies to give you the best online experience on our website.',
    heading: 'Cookie preferences',
    body: 'Choose which cookies Youwe may use. Necessary cookies keep the site working and cannot be switched off.',
    categories: [
        {
            id: 'necessary',
            title: 'Necessary',
            description:
                'Required for security, load balancing, consent storage and basic site function. Always on.',
            locked: true,
        },
        {
            id: 'preferences',
            title: 'Preferences',
            description:
                'Remember choices such as language or region so you do not have to set them again.',
        },
        {
            id: 'analytics',
            title: 'Analytics',
            description:
                'Help us understand how the site is used so we can improve content and performance. Aggregated where possible.',
        },
        {
            id: 'marketing',
            title: 'Marketing',
            description:
                'Used to measure campaigns and, where applicable, show more relevant messages on this or other sites.',
        },
    ],
}

/* ---- Privacy Policy ---- */

/** A gap that needs legal sign-off before launch (Figma "[To confirm]") */
export const ToConfirm = ({ children }: { children: ReactNode }) => (
    <blockquote>
        <p>
            <strong>To confirm:</strong> {children}
        </p>
    </blockquote>
)

export const PRIVACY_TITLE = 'Privacy Policy'
export const PRIVACY_INTRO =
    'How Youwe handles personal data when you use our websites, contact us, or work with us.'

export const PRIVACY: LegalSection[] = [
    {
        id: 'controller',
        nav: 'Controller',
        heading: '1. Controller',
        body: (
            <>
                <p>
                    Youwe B.V. and related Youwe entities registered with the
                    Chamber of Commerce Rotterdam (see also our{' '}
                    <a href="#">Terms &amp; Conditions</a> for entity list and
                    KvK numbers). Offices include Rotterdam and other locations
                    listed in the site footer.
                </p>
                <ToConfirm>
                    Named Data Protection Officer or privacy contact email for
                    data-subject requests.
                </ToConfirm>
            </>
        ),
    },
    {
        id: 'data',
        nav: 'Data we process',
        heading: '2. Data we process',
        body: (
            <>
                <p>Depending on how you interact with Youwe, we may process:</p>
                <ul>
                    <li>
                        Identity and contact details you submit via forms (name,
                        email, phone, company, message).
                    </li>
                    <li>
                        Technical data from your browser and device (IP address,
                        user agent, pages viewed) when you visit our websites.
                    </li>
                    <li>
                        Cookie and similar technology data as described under
                        Cookies.
                    </li>
                </ul>
                <ToConfirm>
                    Recruitment data if you apply via careers.youweagency.com
                    (hosted separately).
                </ToConfirm>
                <ToConfirm>
                    Client project personal data processed under a separate
                    agreement / DPA.
                </ToConfirm>
            </>
        ),
    },
    {
        id: 'purposes',
        nav: 'Purposes and bases',
        heading: '3. Purposes and legal bases',
        body: (
            <>
                <ul>
                    <li>
                        Responding to enquiries and providing requested
                        information (legitimate interest / steps prior to
                        contract).
                    </li>
                    <li>
                        Operating and securing the website (legitimate
                        interest).
                    </li>
                    <li>
                        Analytics and marketing cookies only where you consent
                        (consent) — see <a href="#">Cookie preferences</a>.
                    </li>
                </ul>
                <ToConfirm>
                    Full purpose matrix and retention periods per processing
                    activity.
                </ToConfirm>
            </>
        ),
    },
    {
        id: 'cookies',
        nav: 'Cookies',
        heading: '4. Cookies',
        body: (
            <p>
                Youwe uses cookies to give you the best online experience.
                Manage optional cookies on our <a href="#">Cookies</a> page.
                Necessary cookies support security and basic function.
            </p>
        ),
    },
    {
        id: 'sharing',
        nav: 'Sharing',
        heading: '5. Sharing',
        body: (
            <ToConfirm>
                Categories of processors (hosting, analytics, CRM, email) and
                whether personal data is transferred outside the EEA, with
                appropriate safeguards.
            </ToConfirm>
        ),
    },
    {
        id: 'rights',
        nav: 'Your rights',
        heading: '6. Your rights',
        body: (
            <>
                <p>
                    Under the GDPR you may have rights of access, rectification,
                    erasure, restriction, portability and objection, and the
                    right to withdraw consent where processing is consent-based.
                    You may lodge a complaint with the Autoriteit
                    Persoonsgegevens (Netherlands) or your local supervisory
                    authority.
                </p>
                <ToConfirm>
                    Process and SLA for handling data-subject requests.
                </ToConfirm>
            </>
        ),
    },
    {
        id: 'security',
        nav: 'Security',
        heading: '7. Security',
        body: (
            <p>
                Youwe is ISO 27001 certified (stated on the ACI Weave technology
                page). We apply appropriate technical and organisational
                measures to protect personal data.
            </p>
        ),
    },
    {
        id: 'contact',
        nav: 'Contact',
        heading: '8. Contact',
        body: (
            <p>
                Questions about this policy: use <a href="#">Contact</a> or call{' '}
                <a href="tel:+31104668638">+31 10 466 86 38</a>. Related:{' '}
                <a href="#">Terms &amp; Conditions</a> · <a href="#">Cookies</a>
                .
            </p>
        ),
    },
]

/* ---- Terms & Conditions ---- */

export const TERMS_TITLE = 'Terms & Conditions'
export const TERMS_LEAD =
    'Youwe General Terms of Conditions — version AV.v.1/2012.'
export const TERMS_INTRO = [
    'Structured summary of the official document at terms.youweagency.com (PDF). This page does not replace the PDF; for contracts, use the registered terms. Entity names and article headings follow the source.',
    'Applies to Youwe BV, Youwe Hosting BV, Youwe Commerce BV, Youwe Online BV, Youwe Concept BV, Youwe Creative Marketing BV and related entities as listed in the PDF.',
]
export const TERMS_PDF = {
    label: 'Download / open full PDF',
    href: 'https://terms.youweagency.com',
}

const T = (id: string, nav: string, text: string, heading = nav) => ({
    id,
    nav,
    heading,
    body: <p>{text}</p>,
})

export const TERMS: LegalSection[] = [
    T(
        'general',
        '1. General',
        'Applicability to offers, supplies and agreements with Youwe; rejection of client purchase terms unless accepted in writing; KvK registrations (Youwe Holding BV 53323394, Youwe BV 50254731, Youwe Hosting BV 24444745, Youwe Commerce BV 51792737, Youwe Online BV 34126832, Youwe Digital BV 60826886, Youwe Concept BV 24374830, Youwe Creative BV 55937675); change of terms with 30-day objection window; definitions (Application, Hosting, Client, Products, Working days, etc.); offers without obligation; agreement duration and termination (registered letter, 40 days); client accountability for data; confidentiality / non-competition; liability caps (direct damage up to contract price max €250,000; death/injury max €500,000; indirect damage excluded); employees non-poach fine; transfer; force majeure; invalidity; Dutch law; disputes via SGOA arbitration, else Rotterdam court.'
    ),
    T(
        'hosting',
        '2. Youwe Hosting',
        'Delivery and location of hosting; client equipment/software standards; instructions; log analysis; malfunction reporting; planned maintenance windows (00:00–06:00 CET when access affected); availability on best-effort basis; browser support; identification (login) responsibilities; changes to hosting properties; content of data traffic (client responsible; code of conduct); personal data roles (client as controller, Youwe as processor under Dutch Data Protection Act framing in the document); multi-use / overage; consequences of termination including identification voiding and possible termination fees.'
    ),
    T(
        'application',
        '3. Youwe Application',
        'Non-exclusive licence limited to agreed processing units and users; Object Code only unless Source Code agreed; no copy/alter without written consent; non-transferable; reverse engineering only as law allows; technical supervision and audit; under-licence true-up with 25% surcharge.'
    ),
    T(
        'webdesign',
        '4. Webdesign in general',
        'Sites built to written specifications; phases: specification, conceptual, development/programming, test, install on domain, acceptance; client responsible for supplied content and third-party rights.'
    ),
    T(
        'additional-products',
        '5. Additional products',
        'Maintenance (updates) and Support (advice); advice best knowledge/ability; customization on subsequent calculation unless agreed; additional work notice; installation/implementation conditions; backups primarily client responsibility; overtime rates (+50% / +100%); courses booking, cancellation and private course rules.'
    ),
    T(
        'third-party',
        '6. Third Party Products',
        'Youwe may supply third-party products under their general conditions; Youwe Terms prevail on conflict unless indicated otherwise; warranty/service limited to supplier conditions.'
    ),
    T(
        'delivery',
        '7. Delivery',
        'Delivery times are target periods, not fatal; risk passes on delivery; acceptance procedure and 14-day acceptance period when Youwe installs; Errors defined against written functional specifications; 2-month warranty striving to fix Errors; warranty voids if Source Code access granted or unauthorized changes.'
    ),
    T(
        'prices',
        '8. Prices / payments',
        'Prices exclude VAT; payment within 14 days; default interest and 15% extrajudicial collection costs (min €500); suspension rights; price changes with limited termination right if inflation+5% exceeded; Fixed Price, Subsequent Calculation, Advance; default payment schedule 20% upfront + monthly hours + settle at end if project agreement silent.'
    ),
    T(
        'ip',
        '9. Intellectual property rights',
        'Youwe retains IP in Youwe Products unless transferred by written deed; client may not remove rights notices; copyright infringement indemnity process for Youwe Products in the Netherlands; no indemnity for third-party products or client modifications.'
    ),
    T(
        'scrum',
        '10. Youwe Scrum',
        'Optional Agile/Scrum method; roles (Product Owner, Scrum Master, Development Team); Sprint, Product Backlog, User Stories, Increments, Definition of Ready/Done; starting points (limited cost / time / functionality variants); Sprint Planning, Daily Scrum, Sprint Review, Retrospective; cancellation notice at least one follow Sprint; liability risk framed per Sprint value within general liability caps.'
    ),
    T(
        'connectit',
        '11. Youwe ConnectIT',
        'Secondment of Youwe employees to client; duration and written termination; working hours, illness, holidays; non-solicit of employees (12 months) and freelancers (24 months) with contractual fines; fees on working hours including overtime; confidentiality; liability allocation; force majeure including unavailability of seconded person.',
        '11. Youwe ConnectIT — secondment'
    ),
]

export const TERMS_END = (
    <p>
        End of structured summary. Source: Youwe Algemene voorwaarden / General
        Terms of Conditions AV.v.1/2012 ·{' '}
        <a href="https://terms.youweagency.com">terms.youweagency.com</a>.
        Related: <a href="#">Privacy Policy</a> · <a href="#">Cookies</a>.
    </p>
)
