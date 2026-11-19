import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Article, type ArticleProps } from './'

/*
  Content blocks/Article — code block (not in Figma), 19 November. Sticky "On this page" nav + one
  reading column. Scroll the canvas to see the nav follow the sections. Full page: Templates/Insight
  detail/Blog v2.
*/

const P =
    'Financiers and assessors of public schemes largely ask the same questions as your board. What does it deliver in time, cost or revenue? How do you measure that? Is the data in order? Are the risks under control?'

const SECTIONS: ArticleProps['sections'] = [
    {
        id: 'a-brief',
        nav: 'The report in brief',
        heading: 'The Wennink report in brief',
        body: [P, P],
    },
    {
        id: 'a-means',
        nav: 'What it means for you',
        heading: 'What this means for your organization',
        body: [P, P, P],
    },
    {
        id: 'a-steps',
        nav: 'Investment-ready in 3 steps',
        kicker: 'Steps',
        heading: 'How to make your AI plans investment-ready',
        steps: [
            {
                Title: 'Start with the process, not the technology',
                Description:
                    'Map where manual work, waiting time or errors cost the most time and money.',
            },
            {
                Title: 'Make the gain measurable',
                Description:
                    'Define up front what a project must deliver in hours, lead time, cost or revenue.',
            },
            {
                Title: 'Check your data',
                Description: 'AI is only as good as the data it runs on.',
            },
        ],
    },
    {
        id: 'a-faq',
        nav: 'FAQ',
        kicker: 'FAQ',
        heading: 'Frequently asked questions',
        faq: [
            { label: 'What is the Wennink report?', content: P },
            { label: 'Will the WBSO be broadened for AI?', content: P },
        ],
    },
]

const meta: Meta<ArticleProps> = {
    title: 'Content blocks/Article',
    component: Article,
    parameters: { layout: 'fullscreen' },
    argTypes: {
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
        nav: { control: 'boolean' },
        sections: { control: 'object' },
    },
    args: { Device: 'Desktop', nav: true, sections: SECTIONS },
    render: (args) => (
        <div style={{ maxWidth: args.Device === 'Mobile' ? 360 : '100%' }}>
            <Article {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<ArticleProps>

export const Desktop: Story = {}
export const Mobile: Story = { args: { Device: 'Mobile' } }
export const WithoutNav: Story = { name: 'Without nav', args: { nav: false } }
