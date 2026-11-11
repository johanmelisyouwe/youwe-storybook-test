import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Media, type MediaProps } from './'
import { abstract, caseImage, video } from '../../media/media'

/* Content blocks/Media — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-606 (case photos exported from Figma, src/media) */

type Args = Pick<MediaProps, 'Layout' | 'Device' | 'image' | 'image2'>
const W = { Desktop: '100%', Mobile: 360 }
const meta: Meta<Args> = {
    title: 'Content blocks/Media',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Image or video: Contained, Full bleed, Two-up or Two-up staggered. With `video` the frame is a Video Player and the image its poster; Autoplay "In view" (default) plays it muted while on screen, "Off" shows the play button. Motion: media clip reveal on scroll (inset 18%/8% → 0, scale 0.96 → 1).',
            },
        },
    },
    argTypes: {
        Layout: {
            control: 'inline-radio',
            options: ['Contained', 'Full bleed', 'Two-up staggered', 'Two-up'],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: {
        Layout: 'Contained',
        Device: 'Desktop',
        image: caseImage('fairphone', 'wide'),
        image2: caseImage('g-star', 'wide'),
    },
    render: (args) => (
        <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}>
            <Media {...args} />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const TwoUpStaggered: Story = { args: { Layout: 'Two-up staggered' } }

type VideoArgs = Pick<MediaProps, 'Layout' | 'Autoplay'>
/** A video in the image's place (not a Figma property). The clips are placeholders made from the posters. */
export const WithVideo: StoryObj<VideoArgs> = {
    name: 'With video',
    argTypes: {
        Layout: {
            control: 'inline-radio',
            options: ['Contained', 'Full bleed', 'Two-up staggered', 'Two-up'],
        },
        Autoplay: { control: 'inline-radio', options: ['In view', 'Off'] },
    },
    args: { Layout: 'Full bleed', Autoplay: 'In view' },
    render: ({ Layout, Autoplay }) => (
        <Media
            key={`${Layout}${Autoplay}`}
            Layout={Layout}
            Autoplay={Autoplay}
            image={caseImage('xxl', 'wide')}
            video={video('xxl')}
            alt="Placeholder: XXL case video"
            image2={abstract('016')}
            video2={video('016')}
            alt2="Placeholder: abstract video"
        />
    ),
}

/** Every Figma variant: Device × Layout. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {(
                [
                    'Contained',
                    'Full bleed',
                    'Two-up staggered',
                    'Two-up',
                ] as const
            ).map((l) => (
                <div
                    key={l}
                    style={{
                        display: 'flex',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'start',
                    }}
                >
                    <div style={{ width: 1440 }}>
                        <Media
                            image={caseImage('fairphone', 'wide')}
                            image2={caseImage('g-star', 'wide')}
                            Layout={l}
                        />
                    </div>
                    <div style={{ width: 360 }}>
                        <Media
                            image={caseImage('fairphone', 'wide')}
                            image2={caseImage('g-star', 'wide')}
                            Layout={l}
                        />
                    </div>
                </div>
            ))}
        </div>
    ),
}
