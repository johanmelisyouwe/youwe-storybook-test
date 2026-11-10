import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from '../blocks/hero'
import { CaseCard, type CaseCardProps } from '../ui/case-card'
import { TextMedia } from '../blocks/text-media'
import { Testimonial } from '../blocks/testimonial'
import { CardGrid } from '../blocks/card-grid'
import { ServiceCard } from '../ui/service-card'
import { CaseCarousel } from '../blocks/case-carousel'
import { ContactCTA } from '../blocks/contact-cta'
import '../shared/block/block.css'
import { CLIENT_LOGOS, Page, Section, footer, header, logo } from './shared'
import { abstract, caseImage, clientPhoto } from '../media/media'

/*
  Templates/Industries detail — Figma "Page / Industries detail" (Manufacturing): Desktop 26926:34632.
  Figma has no mobile frame for this template. Copy, props and order from figma/templates.js.
  "Frame 6" (intro text next to a Case Card) is hand-built in Figma; it is built with Text + media (8/4)
  with the Case Card as its media (decided 9 November). "Frame 7" wraps a full-width Case Card. Country options for the contact form are examples (not in Figma).
*/

const SERVICES = [
    [
        '01 · Digital Infrastructure',
        'Self-Service Portal for Customers',
        'Give business customers one portal for orders, reorders, invoices, certificates and product data, so your team spends less time on manual requests.',
    ],
    [
        '02 · Digital Infrastructure',
        'D2C Next to Your Dealers',
        'Open a direct online channel to end users alongside your distributor model, as JC-Electronics did with Youwe.',
    ],
    [
        '03 · Foundation for Data & Integrations',
        'Supply Chain Integration',
        'We connect supply chains with MDM platforms and data integrations, and help you move to industry standards such as EDI, ETIM, GS1 or RosettaNet.',
    ],
    [
        '04 · Operational Optimization & Intelligence',
        'Intelligent Pricing for Margin Optimization',
        'We build pricing strategies on AI-driven pricing platforms that help you sharpen margins based on competitor data and your own data.',
    ],
    [
        '05 · Digital Infrastructure',
        'Master Data Management',
        'Integrate GS1 standards into your master data management for uniform product identification and simpler data governance.',
    ],
    [
        '06 · Foundation for Data & Integrations',
        'Your Own Language Model for Sharing Knowledge',
        'A private language model trained on your manuals, product data and service history helps employees, dealers and customers find answers in your own knowledge.',
    ],
]

const c = (
    Title: string,
    Client: string,
    stat?: [string, string]
): CaseCardProps => ({
    Title,
    Client,
    logo: logo(Client),
    image: clientPhoto(Client),
    stat: stat && { value: stat[0], label: stat[1] },
    href: '#',
})
const CASES = [
    c('A PIM system and SAP integration', 'Heidelberg', [
        '3',
        'SAP ERP systems integrated',
    ]),
    c('From inbox to SAP: AI order intake', 'Kingspan Insulated Panels'),
    c('Scaling smarter: a digital platform for global growth', 'Quooker', [
        '17',
        'markets supported',
    ]),
]
const COUNTRIES = [
    'The Netherlands',
    'United Kingdom',
    'Sweden',
    'Belgium',
    'Germany',
    'Other',
].map((x) => ({ value: x, label: x }))

function IndustriesDetailPage() {
    const Device = 'Desktop' as const
    return (
        <Page Device={Device}>
            <Hero
                Device={Device}
                image={caseImage('heidelberg', 'wide')}
                title={['Manufacturing']}
                label={{
                    Type: 'Breadcrumb',
                    crumbs: [
                        { label: 'Home', href: '#' },
                        { label: 'Industries', href: '#' },
                        { label: 'Manufacturing' },
                    ],
                }}
                bar={{
                    Type: 'Logos',
                    logos: CLIENT_LOGOS.map((n) => logo(n, 118)),
                }}
                header={header(Device)}
            />
            <Section Mode="Dark">
                <TextMedia
                    Device={Device}
                    Theme="Dark"
                    Split="8/4"
                    heading="Manufacturers face challenges ranging from complex supply chains to customers who want more customization and speed."
                    body="At Youwe, we help clients make the right decisions to build their digital business. We connect digital technology to existing industrial processes, so the go to market for your products links closely to your production lines. You cannot change everything at once, because your operations rely on your current infrastructure. That is why we help you integrate your legacy systems with modern technology, with a pragmatic approach that avoids unnecessary complexity."
                    media={
                        <CaseCard
                            Device={Device}
                            Title="A Magento platform for motorists and partner garages, linked to SAP"
                            Client="Unipart Autoparts"
                            logo={logo('Unipart Autoparts')}
                            stat={{
                                value: '75%',
                                label: 'Increase in online orders',
                            }}
                            tags={['Automotive', 'Magento · SAP']}
                            image={caseImage('unipart')}
                            href="#"
                        />
                    }
                />
                <section className="yw-block" aria-label="Featured case">
                    <div className="yw-block__inner" style={{ paddingTop: 0 }}>
                        <CaseCard
                            Size="Full"
                            Device={Device}
                            Title="Accelerating Growth with a Digital Pioneer in Sports Supplements"
                            Client="XXL Nutrition"
                            logo={logo('XXL Nutrition', 140)}
                            tags={['Magento', 'Adobe Commerce']}
                            image={caseImage('xxl', 'wide')}
                            href="#"
                        />
                    </div>
                </section>
                <Testimonial
                    Device={Device}
                    image={abstract('005')}
                    quotes={[
                        {
                            Quote: 'With a D2C channel, manufacturers shorten the path from concept to customer and learn directly from the people who use their products.',
                        },
                    ]}
                    {...{ 'Show logo': false }}
                />
                <CardGrid
                    Layout="3 columns"
                    Device={Device}
                    intro={{
                        Layout: 'Split',
                        Kicker: 'Related services',
                        Title: 'How we can support you.',
                        Body: 'Each tile opens its practice in the services overview.',
                    }}
                    cells={SERVICES.map(([Eyebrow, Title, Description]) => (
                        <ServiceCard
                            key={Title}
                            Eyebrow={Eyebrow}
                            Title={Title}
                            Description={Description}
                            {...{ 'Hover CTA': 'Explore the service' }}
                            href="#"
                        />
                    ))}
                />
                <CaseCarousel
                    Layout="Full width 3"
                    Device={Device}
                    Kicker="Manufacturing"
                    Title="Manufacturing case studies"
                    cases={CASES}
                />
            </Section>
            <Section Mode="Dark">
                <ContactCTA
                    Variant="Form"
                    Device={Device}
                    title="Get in touch with our experts"
                    body="Ready to take the next step? Feel free to contact us. You can reach our experts personally or call us at our general phone number:"
                    phone="+31 10 466 86 38"
                    countries={COUNTRIES}
                    submit="Get in touch"
                />
            </Section>
            {footer(Device)}
        </Page>
    )
}

const meta: Meta = {
    title: 'Templates/Industries detail',
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
        docs: {
            description: {
                component:
                    'Industry page template (Manufacturing): hero with breadcrumb and client logos, industry intro (not a component yet), featured case, quote, related services, industry cases, contact form and footer. Desktop only in Figma.',
            },
        },
    },
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <IndustriesDetailPage /> }
