import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CaseCarousel, type CaseCarouselProps } from './CaseCarousel';
import type { CaseCardProps } from '../CaseCard/CaseCard';
import { ClientLogo } from '../../logos/ClientLogo';
import { clientPhoto } from '../../../media/media';

/* Content blocks/Case carousel — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=24985-700 (cases from the Figma carousel; image placeholders) */

const CASES: CaseCardProps[] = [
  { Title: 'How a Design System strengthened G-Star’s brand consistency', Client: 'G-Star RAW', logo: <ClientLogo name="G-Star" />, href: '#' },
  { Title: 'Scaling smarter: a digital platform for global growth', Client: 'Quooker', stat: { value: '17', label: 'markets supported' }, href: '#' },
  { Title: 'Booking.com builds Partner Hub with Youwe', Client: 'Booking.com', stat: { value: '30', label: 'languages' }, href: '#' },
  { Title: 'AI matching for pricing intelligence', Client: 'Symson', stat: { value: '93%', label: 'average match score' }, href: '#' },
  { Title: 'A PIM system and SAP integration', Client: 'Heidelberg', stat: { value: '3', label: 'SAP ERP systems integrated' }, href: '#' },
  { Title: 'Scaling product data with Pimcore & AI', Client: 'Chadwicks Group', stat: { value: '+43%', label: 'marketable catalog uplift' }, href: '#' },
  { Title: 'From inbox to SAP: AI order intake', Client: 'Kingspan Insulated Panels', href: '#' },
  { Title: 'Seamless replatforming for Fairphone commerce platform', Client: 'Fairphone', href: '#' },
];
const WITH_MEDIA = CASES.map((c) => ({ ...c, image: clientPhoto(c.Client), logo: <ClientLogo name={c.Client} /> }));
CASES.splice(0, CASES.length, ...WITH_MEDIA);
const SHORT = { Title: 'Selected case studies', body: 'Explore how we’ve helped organizations build and scale their digital infrastructure, from custom commerce platforms to high-performing cloud environments. Each case highlights the impact of smart architecture and design choices.' };
const WIDE = { Kicker: 'Selected work', Title: 'Commerce, portals and AI in production', button: { label: 'All work', href: '#' } };
type Args = Pick<CaseCarouselProps, 'Layout' | 'Device'>;
const W = { Desktop: '100%', Mobile: 390 };
const props = (l: CaseCarouselProps['Layout']) => (l === 'Short' ? SHORT : WIDE);
const count = (l: CaseCarouselProps['Layout']) => (l === 'Full width 3' ? 3 : l === 'Full width 4' ? 4 : 8);

const meta: Meta<Args> = {
  title: 'Content blocks/Case carousel',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Section header and Case Cards: Short (prev/next + counter, cards bleed off the right edge), Full width 3 / 4 (a row of cards), Scroll (one row off the edge). Snapping native scroll; tabbing to a card scrolls it into view. Cards use the Case Card hover.' } } },
  argTypes: {
    Layout: { control: 'inline-radio', options: ['Short', 'Full width 3', 'Full width 4', 'Scroll'] },
    Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] },
  },
  args: { Layout: 'Short', Device: 'Desktop' },
  render: ({ Layout = 'Short', Device = 'Desktop' }) => <div style={{ maxWidth: W[Device] }}><CaseCarousel Layout={Layout} {...props(Layout)} cases={CASES.slice(0, count(Layout))} /></div>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const FullWidth3: Story = { args: { Layout: 'Full width 3' } };
export const Scroll: Story = { args: { Layout: 'Scroll' } };

/** Every Figma variant: Layout × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Short', 'Full width 3', 'Full width 4', 'Scroll'] as const).map((l) => (
        <div key={l} style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
          <div style={{ width: 1440, flexShrink: 0 }}><CaseCarousel Layout={l} {...props(l)} cases={CASES.slice(0, count(l))} /></div>
          <div style={{ width: 390, flexShrink: 0 }}><CaseCarousel Layout={l} {...props(l)} cases={CASES.slice(0, Math.min(3, count(l)))} /></div>
        </div>
      ))}
    </div>
  ),
};
