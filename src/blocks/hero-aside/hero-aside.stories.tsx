import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HeroAside } from './'
import { Hero } from '../hero'
import { TextMedia } from '../text-media'
import { EventDetails } from '../../ui/event-details'
import { abstract } from '../../media/media'

/*
  Content blocks/Hero aside — code block (not in Figma), 19 November. Scroll the canvas: the panel starts
  beside the title, stays in view over the hero image and stops beside the intro. Full page: Templates/
  Insight detail/Event.
*/

const meta: Meta = {
    title: 'Content blocks/Hero aside',
    parameters: { layout: 'fullscreen', controls: { disable: true } },
}
export default meta
type Story = StoryObj

export const Default: Story = {
    render: () => (
        <>
            <HeroAside
                label="Event details"
                hero={
                    <Hero
                        Variant="Title + image"
                        title={['Higher Ground: what’s next for product data']}
                        label={{
                            Type: 'Breadcrumb',
                            crumbs: [
                                { label: 'Home', href: '#' },
                                { label: 'Insights', href: '#' },
                                { label: 'Event' },
                            ],
                        }}
                        image={abstract('001')}
                    />
                }
                aside={
                    <EventDetails
                        items={[
                            { label: 'Date', value: 'December 3, 2026' },
                            {
                                label: 'Time',
                                value: '2:00 PM to 9:00 PM (CET)',
                            },
                            {
                                label: 'Venue',
                                value: 'SnowWorld Zoetermeer\nBuytenparklaan 30\n2717 AX Zoetermeer\nNetherlands',
                            },
                        ]}
                        primary={{ label: 'Register now', href: '#' }}
                        secondary={{ label: 'Plan your route', href: '#' }}
                    />
                }
            >
                <TextMedia
                    Split="8/4"
                    heading="Youwe and Pimcore host the event for the people who decide how product data is organized, governed and published."
                    body="Pimcore opens with what is next for product data. Then the meeting room gives way to the slopes, and the day closes with PIM specialists from both teams over dinner."
                    media={<div aria-hidden="true" />}
                />
            </HeroAside>
        </>
    ),
}
