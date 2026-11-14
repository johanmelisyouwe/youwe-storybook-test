import type { AciWeaveProps } from './aci-weave'
import { abstract, video } from '../../media/media'

/** Figma desktop copy (Home, Frame 6), shared by the story and the Home template. First panel: placeholder clip made from the
    poster; panels 2 and 3 are stills (placeholders for the product screenshots), as on the v2 site. */
export const ACI_WEAVE: Omit<AciWeaveProps, 'Device'> = {
    kicker: 'ACI Weave',
    title: 'AI agents that work inside your systems',
    body: 'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models.\nYour rules decide what an agent may do. A person approves where it counts, and every change and approval is logged.',
    snippet: {
        Title: 'How at Kingspan Insulated Panels, order emails become SAP orders once a person approves them by using ACI Weave.',
        href: '#',
    },
    button: { label: 'Explore ACI Weave', href: '#' },
    button2: { label: 'Kingspan case', href: '#' },
    videos: [
        {
            caption: 'ACI Weave in action',
            tag: 'Demo',
            poster: abstract('011'),
            src: video('011'),
        },
        {
            caption: 'Workflows, approvals and audit log',
            tag: 'Dashboard',
            poster: abstract('015'),
        },
        {
            caption: 'Agents connected to ERP, PIM, CRM and commerce',
            tag: 'Agents',
            poster: abstract('016'),
        },
    ],
}
