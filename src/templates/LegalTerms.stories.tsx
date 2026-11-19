import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Article } from '../blocks/article'
import { Button } from '../ui/button'
import { Prose } from '../shared/prose'
import type { Device } from './shared'
import { LegalPage, legalMeta } from './legal'
import {
    TERMS,
    TERMS_END,
    TERMS_INTRO,
    TERMS_LEAD,
    TERMS_PDF,
    TERMS_TITLE,
} from './legal.copy'

/*
  Templates/Legal/Terms & Conditions — first version (19 November). Copy from Figma 27263:18713 (copy
  only). Title-only hero, then the Article block: the nav titled "Articles" with the eleven articles and
  "Download / open full PDF" under it; the version line as lead, the scope as intro; one section per
  article; the source note at the end.
*/

const TermsPage = ({ Device }: { Device: Device }) => (
    <LegalPage
        Device={Device}
        title={TERMS_TITLE}
        ask="What do Youwe’s terms say about liability?"
    >
        {(D) => (
            <Article
                Device={D}
                labels={{ title: 'Articles' }}
                navFooter={
                    <div>
                        <Button
                            Variant="Outline"
                            Size="M"
                            label={TERMS_PDF.label}
                            href={TERMS_PDF.href}
                        />
                    </div>
                }
                lead={TERMS_LEAD}
                intro={TERMS_INTRO}
                sections={TERMS.map((s, i) =>
                    i === TERMS.length - 1
                        ? {
                              ...s,
                              children: (
                                  <Prose className="yw-body-md-reg">
                                      <hr />
                                      {TERMS_END}
                                  </Prose>
                              ),
                          }
                        : s
                )}
            />
        )}
    </LegalPage>
)

const meta: Meta = {
    title: 'Templates/Legal/Terms & Conditions',
    ...legalMeta(
        'Terms & Conditions: title-only hero with breadcrumb and Legal tag, then the Article block (Articles nav with the PDF button, version line, scope, eleven articles, source note), footer.'
    ),
}
export default meta
type Story = StoryObj

export const Desktop: Story = { render: () => <TermsPage Device="Desktop" /> }
export const Mobile: Story = {
    render: () => <TermsPage Device="Mobile" />,
    globals: { viewport: { value: 'mobile' } },
}
