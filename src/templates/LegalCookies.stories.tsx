import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Article } from '../blocks/article'
import { CookiePreferences } from '../ui/cookie-preferences'
import { Prose } from '../shared/prose'
import type { Device } from './shared'
import { LegalPage, legalMeta } from './legal'
import { COOKIES } from './legal.copy'

/*
  Templates/Legal/Cookies — first version (19 November). Copy from Figma 27263:18529 (copy only; the
  design notes on that frame are left out). Title-only hero, then one reading column: the intro, and
  "Cookie preferences" with the Cookie preferences panel (Necessary always on; Save preferences calls
  onSave, to be wired to the consent platform).
*/

const CookiesPage = ({ Device }: { Device: Device }) => (
    <LegalPage
        Device={Device}
        title={COOKIES.title}
        ask="Which cookies does Youwe use?"
    >
        {(D) => (
            <Article
                Device={D}
                nav={false}
                lead={COOKIES.intro}
                sections={[
                    {
                        id: 'preferences',
                        heading: COOKIES.heading,
                        body: [COOKIES.body],
                        children: (
                            <>
                                <CookiePreferences
                                    categories={COOKIES.categories}
                                />
                                <Prose className="yw-body-md-reg">
                                    <p>
                                        See also our{' '}
                                        <a href="#">Privacy Policy</a>.
                                    </p>
                                </Prose>
                            </>
                        ),
                    },
                ]}
            />
        )}
    </LegalPage>
)

const meta: Meta = {
    title: 'Templates/Legal/Cookies',
    ...legalMeta(
        'Cookies page: title-only hero with breadcrumb and Legal tag, intro, Cookie preferences panel, footer.'
    ),
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <CookiesPage Device="Desktop" /> }
export const Mobile: Story = {
    render: () => <CookiesPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
