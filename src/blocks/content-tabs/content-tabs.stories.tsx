import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { caseImage } from '../../media/media'
import { ModeFrame } from '../../shared/mode-frame'
import { ContentTabs, type ContentTabsProps } from './content-tabs'

const TABS: ContentTabsProps['tabs'] = [
    {
        label: 'Catalogue and product data teams',
        body: [
            'Teams that keep product and service information accurate across brands, suppliers and markets.',
            'One governed source for every channel.',
        ],
        case: {
            Title: 'One central Pimcore PIM for a Nordic IT catalogue',
            Client: 'Advania',
            image: { src: caseImage('advania'), alt: 'Advania office' },
            href: '#',
        },
    },
    {
        label: 'Channel and portal teams',
        body: 'Teams that run partner portals, storefronts and service portals and need reliable product and offer data.',
    },
    {
        label: 'Integration and platform owners',
        body: (
            <>
                <p>
                    Architects who connect <strong>PIM, commerce</strong> and
                    surrounding tools.
                </p>
                <ul>
                    <li>Catalogues stay in sync</li>
                    <li>
                        Services follow the same model, see{' '}
                        <a href="#case">the case</a>
                    </li>
                </ul>
            </>
        ),
    },
]

const meta = {
    title: 'Content blocks/Content tabs',
    component: ContentTabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Content tabs (code block, v2 "Who we work with" on Industry detail): kicker, title, intro and a tab per audience. Each panel is rich text with an optional related Case Card. CMS: tabs[] → { label, body (rich text), case? }.',
            },
        },
    },
    args: {
        Device: 'Desktop',
        kicker: 'Who we work with',
        title: 'Teams we build for',
        tabs: TABS,
    },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    render: (args) => (
        <ModeFrame Mode="Dark" padding={0}>
            <div style={{ maxWidth: args.Device === 'Mobile' ? 390 : 1440 }}>
                <ContentTabs {...args} />
            </div>
        </ModeFrame>
    ),
} satisfies Meta<typeof ContentTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
