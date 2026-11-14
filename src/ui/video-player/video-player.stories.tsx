import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { VideoPlayer, type VideoPlayerProps } from './video-player'
import { QUOOKER_VIDEO, abstract, caseImage, video } from '../../media/media'

/*
  Video Player — Figma 27239:102 (Autoplay: Off, In view).
  https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=27239-102
  The clip is a placeholder made from the poster image.
*/

type Args = Pick<VideoPlayerProps, 'Autoplay'>

const meta: Meta<Args> = {
    title: 'Components/Video Player',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Basic video player: a 16:9 poster with the red play button. Autoplay "Off" plays on click with the browser controls. Autoplay "In view" plays muted and looped while at least half of it is on screen, with a pause button in the corner; once paused by the viewer it stays paused. With reduced motion it never autoplays. Optional WebVTT captions.',
            },
        },
    },
    argTypes: {
        Autoplay: { control: 'inline-radio', options: ['Off', 'In view'] },
    },
    args: { Autoplay: 'Off' },
    render: ({ Autoplay }) => (
        <div style={{ maxWidth: 600 }}>
            <VideoPlayer
                key={Autoplay}
                Autoplay={Autoplay}
                src={video('011')}
                poster={abstract('011')}
                title="Demo: ACI Weave in action"
            />
        </div>
    ),
}
export default meta
type Story = StoryObj<Args>

export const Default: Story = {}
export const AutoplayInView: Story = {
    name: 'Autoplay in view',
    args: { Autoplay: 'In view' },
}

/** A Vimeo URL as src: background mode for "In view", the Vimeo player with sound for "Off". */
export const Vimeo: Story = {
    args: { Autoplay: 'In view' },
    render: ({ Autoplay }) => (
        <div style={{ maxWidth: 800 }}>
            <VideoPlayer
                key={Autoplay}
                Autoplay={Autoplay}
                src={QUOOKER_VIDEO}
                poster={caseImage('quooker-1', 'wide')}
                title="Quooker: late summer video"
            />
        </div>
    ),
}

/** Every Figma variant: Autoplay Off and In view. */
export const AllVariants: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--spacing-xl)',
            }}
        >
            {(['Off', 'In view'] as const).map((a) => (
                <VideoPlayer
                    key={a}
                    Autoplay={a}
                    src={video('011')}
                    poster={abstract('011')}
                    title={`Autoplay ${a}`}
                />
            ))}
        </div>
    ),
}

/** Without a video file: poster and a decorative play button only. */
export const PosterOnly: Story = {
    parameters: { controls: { disable: true } },
    render: () => (
        <div style={{ maxWidth: 600 }}>
            <VideoPlayer poster={abstract('015')} title="Coming soon" />
        </div>
    ),
}

/** Scroll the in-view videos in and out: each plays while half of it is visible and pauses when it leaves. */
export const InViewScroll: Story = {
    name: 'In view while scrolling',
    parameters: { controls: { disable: true } },
    render: () => (
        <div
            style={{
                display: 'grid',
                gap: 'var(--spacing-4xl)',
                maxWidth: 600,
                paddingBlock: '60vh',
            }}
        >
            {['011', '015', '016'].map((k) => (
                <VideoPlayer
                    key={k}
                    Autoplay="In view"
                    src={video(k)}
                    poster={abstract(k)}
                    title={`Placeholder clip ${k}`}
                />
            ))}
        </div>
    ),
}
