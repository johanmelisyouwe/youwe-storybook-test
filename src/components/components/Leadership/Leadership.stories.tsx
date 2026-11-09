import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Leadership, PersonCard, type LeadershipProps } from './Leadership';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Content blocks/Leadership — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26848-385
  Person Card — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=26763-60 (Figma copy; photos are placeholders)
*/

const PEOPLE = [
  ['Rob Wiek', 'CEO'], ['Rogier Hosman', 'CMO'], ['Pieter Halenbeek', 'COO'], ['Steve Hulmes', 'Board of Directors'],
  ['Anneloes van der Wal', 'CHRO'], ['Erwin Idelenburg', 'CCO'], ['Jitze Bakker', 'CTO'], ['Tjitte Folkertsma', 'CGO'],
  ['Nathalie Seffinga', 'Operations manager NL'], ['Steve Hoyle', 'Operations manager UK'],
].map(([name, role]) => ({ name, role }));
type Args = Pick<LeadershipProps, 'Device'> & { Mode: Mode };
const W = { Desktop: '100%', Mobile: 360 };

const meta: Meta<Args> = {
  title: 'Content blocks/Leadership',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Section intro and Person Cards (no photo), four per row on desktop and two on mobile. Motion: block reveal staggered.' } } },
  argTypes: { Device: { control: 'inline-radio', options: ['Desktop', 'Mobile'] }, Mode: { control: 'inline-radio', options: ['Dark', 'Light'] } },
  args: { Device: 'Desktop', Mode: 'Dark' },
  render: ({ Device = 'Desktop', Mode }) => <ModeFrame Mode={Mode} padding={0}><div style={{ maxWidth: W[Device] }}><Leadership kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} /></div></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};

/** Person Card: Photo Yes / No (Figma copy). */
export const PersonCards: Story = {
  parameters: { layout: 'padded', controls: { include: ['Mode'] } },
  render: ({ Mode }) => (
    <ModeFrame Mode={Mode}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 300px)', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
        <PersonCard Photo="Yes" name="Henk Mensinga" role="Director of Product Implementation" email="h.mensinga@youweagency.com" />
        <PersonCard Photo="No" name="Henk Mensinga" role="Director of Product Implementation" email="h.mensinga@youweagency.com" />
      </div>
    </ModeFrame>
  ),
};

/** Every Figma variant: Mode × Device. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
      {(['Dark', 'Light'] as Mode[]).map((m) => (
        <ModeFrame key={m} Mode={m} padding={0}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'start' }}>
            <div style={{ width: 1440, flexShrink: 0 }}><Leadership kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} /></div>
            <div style={{ width: 360, flexShrink: 0 }}><Leadership kicker="Leadership" title="The people who lead Youwe" people={PEOPLE} /></div>
          </div>
        </ModeFrame>
      ))}
    </div>
  ),
};
