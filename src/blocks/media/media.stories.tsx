import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Media, type MediaProps } from './'
import { abstract, caseImage, video } from '../../media/media'

/* Content blocks/Media — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24988-606 (case photos exported from Figma, src/media) */

type Args = Pick<
    MediaProps,
    'Layout' | 'Device' | 'image' | 'image2' | 'images'
>
const W = { Desktop: '100%', Mobile: 360 }
const meta: Meta<Args> = {
    title: 'Content blocks/Media',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Image or video: Contained, Full bleed, Two-up or Two-up staggered; Gallery (code layout, v2 case gallery) takes `images` (any number, 3 columns). Every image is a URL or a CMS asset `{ src, alt }`. With `video` the frame is a Video Player and the image its poster; Autoplay "In view" (default) plays it muted while on screen, "Off" shows the play button. Motion: media clip reveal on scroll (inset 18%/8% → 0, scale 0.96 → 1).',
            },
        },
    },
    argTypes: {
        Layout: {
            control: 'inline-radio',
            options: [
                'Contained',
                'Full bleed',
                'Two-up staggered',
                'Two-up',
                'Gallery',
            ],
        },
        Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
    },
    args: {
        Layout: 'Contained',
        Device: 'Desktop',
        image: caseImage('fairphone', 'wide'),
        image2: caseImage('g-star', 'wide'),
        images: [
            {
                src: caseImage('quooker-1', 'wide'),
                alt: 'Quooker tap in a kitchen',
            },
            { src: caseImage('fairphone', 'wide'), alt: 'Fairphone on grass' },
            { src: caseImage('g-star', 'wide'), alt: 'G-Star model in denim' },
            { src: caseImage('bunzl', 'wide'), alt: 'BunzlOne app' },
            { src: caseImage('xxl', 'wide'), alt: 'XXL Nutrition products' },
            { src: caseImage('unipart', 'wide'), alt: 'Unipart parts' },
        ],
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
/** Gallery: any number of images, 3 columns (2 on mobile). */
export const Gallery: Story = { args: { Layout: 'Gallery' } }

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
