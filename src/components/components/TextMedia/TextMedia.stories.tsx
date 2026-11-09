import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextMedia, type TextMediaProps } from './TextMedia';
import { abstract } from '../../../media/media';

/* Content blocks/Text + media — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24985-702 (Figma copy; image placeholder) */

const COPY = {
  image: abstract('009'),
  heading: 'Global thinking,\nglobal understanding',
  body: 'We’re a driven collective of over 270 specialists. Big enough to cover every digital discipline, yet close enough to truly understand the specifics of your business. Together, we create digital ecosystems that drive lasting growth.',
};
type Args = Pick<TextMediaProps, 'Device' | 'Media position' | 'Split' | 'Theme'>;
const W = { Desktop: '100%', Tablet: 768, Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Text + media',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Text and media side by side (Split 6/6, 4/8, 8/4; media left or right); stacked on tablet and mobile. Theme: Dark, Deep blue or Light. Motion: text block reveal, media clip reveal.' } } },
  argTypes: {
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile', 'Tablet'] },
    'Media position': { control: 'inline-radio', options: ['Right', 'Left'] },
    Split: { control: 'inline-radio', options: ['6/6', '4/8', '8/4'] },
    Theme: { control: 'inline-radio', options: ['Dark', 'Deep blue', 'Light'] },
  },
  args: { Device: 'Desktop', 'Media position': 'Right', Split: '6/6', Theme: 'Dark' },
  render: (args) => <div style={{ maxWidth: W[args.Device ?? 'Desktop'] }}><TextMedia {...COPY} {...args} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const DeepBlue: Story = { args: { Theme: 'Deep blue' } };
export const Light: Story = { args: { Theme: 'Light', 'Media position': 'Left' } };

/** Every Figma variant: Media position × Split × Theme on desktop, plus tablet and mobile. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Deep blue', 'Light'] as const).map((t) => (
        <div key={t} style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
          {(['Right', 'Left'] as const).flatMap((p) => (['6/6', '4/8', '8/4'] as const).map((s) => (
            <div key={p + s} style={{ maxWidth: 1440 }}><TextMedia {...COPY} {...{ 'Media position': p }} Split={s} Theme={t} /></div>
          )))}
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'start' }}>
            {(['Right', 'Left'] as const).map((p) => <div key={`t${p}`} style={{ width: 768 }}><TextMedia {...COPY} Device="Tablet" {...{ 'Media position': p }} Theme={t} /></div>)}
            {(['Right', 'Left'] as const).map((p) => <div key={`m${p}`} style={{ width: 360 }}><TextMedia {...COPY} Device="Mobile" {...{ 'Media position': p }} Theme={t} /></div>)}
          </div>
        </div>
      ))}
    </div>
  ),
};
