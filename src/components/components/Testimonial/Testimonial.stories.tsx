import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Testimonial, type Quote, type TestimonialProps } from './Testimonial';
import { ClientLogo } from '../../logos/ClientLogo';

/*
  Content blocks/Testimonial — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26535-238
  Figma has default copy here; the stories use the Bunzl quote from the Figma Vertical slider and the
  G-Star case line from the Case Card.
*/

const QUOTES: Quote[] = [
  { Quote: '“We turned the vision into a platform. Now we’re adding new customers and suppliers.”', Name: 'Frank Daamen', Role: 'Digital Director Bunzl & Founder of BunzlOne', logo: <span className="yw-heading-md">Bunzl</span> },
  { Quote: '“How a Design System strengthened G-Star’s brand consistency.”', Name: 'G-Star RAW', Role: 'Case · Design System', logo: <ClientLogo name="G-Star" width={190} /> },
];
type Args = Pick<TestimonialProps, 'Device' | 'Show logo'> & { 'Show image': boolean };
const W = { Desktop: 1440, Mobile: 390 };

const meta: Meta<Args> = {
  title: 'Content blocks/Testimonial',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Client quote with attribution; optional full-bleed photo with the tint-1 overlay. With several quotes it auto-advances every 7s (View Transition: old quote blurs and lifts, new one rises in) and pauses on hover, focus and when off-screen.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] } },
  args: { Device: 'Desktop', 'Show logo': true, 'Show image': false },
  render: ({ Device = 'Desktop', 'Show image': img, ...args }) => <div style={{ maxWidth: W[Device] }}><Testimonial quotes={QUOTES.slice(0, 1)} image={img || undefined} {...args} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const WithImage: Story = { args: { 'Show image': true } };
/** Two quotes: auto-advance every 7s with the View Transition. */
export const Rotating: Story = { render: () => <div style={{ maxWidth: 1440 }}><Testimonial quotes={QUOTES} /></div> };

/** Every Figma variant (Device), with and without image. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {[false, true].map((img) => (
        <div key={String(img)} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
          <div style={{ width: 1440 }}><Testimonial quotes={QUOTES.slice(0, 1)} image={img || undefined} autoAdvance={false} /></div>
          <div style={{ width: 390 }}><Testimonial quotes={QUOTES.slice(0, 1)} image={img || undefined} autoAdvance={false} /></div>
        </div>
      ))}
    </div>
  ),
};
