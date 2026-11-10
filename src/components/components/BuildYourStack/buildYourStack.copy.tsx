/* Build your stack copy: Figma content for "Sell B2B online"; placeholder panels for the other goals (decided 9 November). */
import type { BuildYourStackProps, StackGoal } from './BuildYourStack'
import { Logo } from '../../logos/Logo'
import { caseImage } from '../../../media/media'

const SELL: StackGoal = {
    label: 'Sell B2B online',
    system: '05  Drive revenue',
    intro: 'Adobe Commerce runs the shop on a Hyvä storefront. Pimcore holds the product data and Alumio connects it all to your ERP.',
    partners: [
        {
            Name: 'Alumio',
            logo: <Logo name="Alumio" box={[110, 32]} />,
            Level: 'Integration',
            Description: 'iPaaS that connects ERP, PIM and commerce.',
            href: '#',
        },
        {
            Name: 'Adobe',
            logo: <Logo name="Adobe" box={[110, 32]} />,
            Level: 'Commerce',
            Description: 'Adobe Commerce as the B2B platform.',
            href: '#',
        },
        {
            Name: 'Hyvä',
            logo: <Logo name="Hyvä" box={[110, 32]} />,
            Level: 'Gold Partner',
            Description: 'Fast Magento storefront.',
            href: '#',
        },
        {
            Name: 'Pimcore',
            logo: <Logo name="Pimcore" box={[110, 32]} />,
            Level: 'Strategic Partner',
            Description: 'One source for product data.',
            href: '#',
        },
    ],
    case: {
        Title: 'Accelerating Growth with a Digital Pioneer in Sports Supplements',
        Client: 'XXL Nutrition',
        logo: <Logo name="XXL Nutrition" box={[140, 48]} />,
        image: caseImage('xxl', 'wide'),
        tags: ['Magento', 'Adobe Commerce'],
        href: '#',
    },
}
/* Placeholder panel: same structure as the Figma goal, copy to follow. */
const placeholder = (label: string, n: number): StackGoal => ({
    label,
    system: `0${n}  System`,
    intro: 'Goal intro to follow: which platforms we combine for this goal and how they work together.',
    partners: [1, 2, 3, 4].map((i) => ({
        Name: `Partner ${i}`,
        Level: 'Partner level',
        Description: 'One line on the role of this partner.',
        href: '#',
    })),
    case: {
        Title: 'Case title to follow',
        Client: 'Client',
        tags: ['Platform', 'Technology'],
        href: '#',
    },
})
export const GOALS: StackGoal[] = [
    placeholder('Connect your systems', 1),
    placeholder('Build a data foundation', 2),
    placeholder('Put AI agents to work', 3),
    placeholder('Sharpen your pricing', 4),
    SELL,
]
export const BUILD_YOUR_STACK: Omit<BuildYourStackProps, 'Device'> = {
    kicker: 'Build your stack',
    title: 'Start with what you need.',
    body: 'Pick a goal. See the partners we usually combine for it, and a client who runs that stack today.',
    goals: GOALS,
    selected: 4,
}
