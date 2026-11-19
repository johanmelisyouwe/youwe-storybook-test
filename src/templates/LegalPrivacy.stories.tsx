import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Article } from '../blocks/article'
import type { Device } from './shared'
import { LegalPage, legalMeta } from './legal'
import { PRIVACY, PRIVACY_INTRO, PRIVACY_TITLE } from './legal.copy'

/*
  Templates/Legal/Privacy Policy — first version (19 November). Copy from Figma 27263:18605 (copy only).
  Title-only hero, then the Article block: "On this page" with the eight sections, the intro as lead,
  the numbered sections as rich text. The Figma "[To confirm]" gaps show as "To confirm" notes (quote
  style) until legal provides the text.
*/

const PrivacyPage = ({ Device }: { Device: Device }) => (
    <LegalPage
        Device={Device}
        title={PRIVACY_TITLE}
        ask="How does Youwe handle my personal data?"
    >
        {(D) => <Article Device={D} lead={PRIVACY_INTRO} sections={PRIVACY} />}
    </LegalPage>
)

const meta: Meta = {
    title: 'Templates/Legal/Privacy Policy',
    ...legalMeta(
        'Privacy Policy: title-only hero with breadcrumb and Legal tag, then the Article block (On this page, intro, eight numbered sections with To confirm notes), footer.'
    ),
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <PrivacyPage Device="Desktop" /> }
export const Mobile: Story = {
    render: () => <PrivacyPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
