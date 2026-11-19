import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CookiePreferences, type CookiePreferencesProps } from './'
import { COOKIES } from '../../templates/legal.copy'

/*
  Cookie preferences — code component (not in Figma as a component), 19 November. Copy from the Figma
  Cookies page (27263:18529). Toggle the categories and save to see the status line.
*/

const meta: Meta<CookiePreferencesProps> = {
    title: 'Components/Cookie preferences',
    component: CookiePreferences,
    parameters: { layout: 'padded' },
    args: { categories: COOKIES.categories },
    render: (args) => (
        <div style={{ maxWidth: 740 }}>
            <CookiePreferences {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<CookiePreferencesProps>

export const Default: Story = {}
export const Narrow: Story = {
    render: (args) => (
        <div style={{ maxWidth: 343 }}>
            <CookiePreferences {...args} />
        </div>
    ),
}
