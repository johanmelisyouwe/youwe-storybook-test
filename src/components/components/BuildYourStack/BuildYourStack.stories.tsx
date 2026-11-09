import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BuildYourStack, type BuildYourStackProps } from './BuildYourStack';
import { BUILD_YOUR_STACK } from './buildYourStack.copy';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Content blocks/Build your stack — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26851-1491
  Figma has the content for one goal ("Sell B2B online"); the other four goals use placeholder panels
  (same structure, placeholder copy) until the content is written (decided 9 November).
*/

const COPY = BUILD_YOUR_STACK;
type Args = Pick<BuildYourStackProps, 'Device'> & { Mode: Mode };
const W = { Desktop: '100%', Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Build your stack',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Intro, goal tabs, goal intro, four vertical Technology Cards and a full-width Case Card. Mobile: tabs scroll sideways, cards stack. Motion: block reveal staggered.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark' },
  render: ({ Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><BuildYourStack {...COPY} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** Every Figma variant: Mode × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m} padding={0}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            <div style={{ width: 1440, flexShrink: 0 }}><BuildYourStack {...COPY} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><BuildYourStack {...COPY} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
