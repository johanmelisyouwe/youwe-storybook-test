import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ContactCTA, type ContactCTAProps, type ContactCTAVariant } from './ContactCTA';
import { ModeFrame } from '../../shared/ModeFrame';
import { abstract } from '../../../media/media';

/* Content blocks/Contact CTA — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26535-451 (Figma copy) */

const COUNTRIES = ['The Netherlands', 'United Kingdom', 'Sweden', 'Belgium', 'Germany', 'Indonesia', 'Ukraine', 'Other'].map((c) => ({ value: c, label: c }));
const FORM: ContactCTAProps = {
  title: 'Get in touch with our experts',
  body: 'Ready to take the next step? Feel free to contact us. You can reach our experts personally or call us at our general phone number:',
  phone: '+31 10 466 86 38',
  countries: COUNTRIES,
};
const SUB: ContactCTAProps = {
  title: 'Where does growth get stuck?',
  body: 'Tell us what you want to achieve and we will think along with you.',
  primary: { label: 'Contact us', href: '#' },
  secondary: { label: 'Submit an RFP', href: '#' },
  image: abstract('005'),
  offices: ['Rotterdam', 'Groningen', 'London', 'Leeds', 'Shrewsbury', 'Stockholm', 'Bandung', 'Kyiv'],
};
const copy = (v: ContactCTAVariant) => (v === 'Form' ? FORM : SUB);
type Args = Pick<ContactCTAProps, 'Variant' | 'Device'>;
const W = { Desktop: '100%', Mobile: 360 };
const VARIANTS: ContactCTAVariant[] = ['Form', 'Sub-footer split', 'Sub-footer background'];

const meta: Meta<Args> = {
  title: 'Content blocks/Contact CTA',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Contact form or sub-footer call to action (split with an image, or over a background image). Motion: block reveal; image variants use a clip reveal on scroll.' } } },
  argTypes: {
    Variant: { control: 'inline-radio', options: ['Form', 'Sub-footer split', 'Sub-footer background'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Variant: 'Form', Device: 'Desktop' },
  render: ({ Variant = 'Form', Device = 'Desktop' }) => (
    <ModeFrame Mode="Dark" padding={0}><div style={{ maxWidth: W[Device] }}><ContactCTA {...copy(Variant)} Variant={Variant} Device={Device} /></div></ModeFrame>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Form: Story = {};
export const SubFooterSplit: Story = { args: { Variant: 'Sub-footer split' } };
export const SubFooterBackground: Story = { args: { Variant: 'Sub-footer background' } };

/** Every Figma variant: Variant × Device (6). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ModeFrame Mode="Dark" padding={0}>
      <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
        {VARIANTS.map((v) => (
          <div key={v} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            <div style={{ width: 1440, flexShrink: 0 }}><ContactCTA {...copy(v)} Variant={v} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><ContactCTA {...copy(v)} Variant={v} Device="Mobile" /></div>
          </div>
        ))}
      </div>
    </ModeFrame>
  ),
};
