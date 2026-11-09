import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionIntro, type SectionIntroProps } from './SectionHeader';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/* Content blocks/Section intro — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26847-85 (Figma copy) */

const COPY = { Kicker: 'Industries we serve', Title: 'Pick an industry.\nSee the work.', Body: 'Each tile opens a quick view with the clients we work for in that industry.' };
type Args = Pick<SectionIntroProps, 'Layout'> & { Mode: Mode; Device: 'Desktop' | 'Mobile' };
const W = { Desktop: 1280, Mobile: 336 };

const meta: Meta<Args> = {
  title: 'Content blocks/Section intro',
  parameters: { layout: 'padded', docs: { description: { component: 'Section intro inside the container: kicker, title (heading/xl) and body. Split = title left, body right; Stacked = body under the title; mobile always stacks. Motion: title word reveal; the body lights up word by word as you scroll (28% → 100%, never fades back).' } } },
  argTypes: {
    Layout: { control: 'inline-radio', options: ['Split', 'Stacked'] },
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Layout: 'Split', Mode: 'Dark', Device: 'Desktop' },
  render: ({ Layout, Mode, Device }) => <ModeFrame Mode={Mode}><div className="yw-block" style={{ maxWidth: W[Device], background: 'none' }}><SectionIntro {...COPY} Layout={Layout} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Stacked: Story = { args: { Layout: 'Stacked' } };

/** Every Figma variant: Layout × Mode × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m}>
          <div style={{ display: 'grid', gap: 'var(--spacing-2xl)' }}>
            {(['Split', 'Stacked'] as const).map((l) => (
              <div key={l} style={{ display: 'flex', gap: 'var(--spacing-2xl)', alignItems: 'start' }}>
                <div className="yw-block" style={{ width: 1280, background: 'none' }}><SectionIntro {...COPY} Layout={l} /></div>
                <div className="yw-block" style={{ width: 336, background: 'none' }}><SectionIntro {...COPY} Layout={l} /></div>
              </div>
            ))}
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
