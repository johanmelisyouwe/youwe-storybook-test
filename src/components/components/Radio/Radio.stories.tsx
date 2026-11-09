import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Radio, RadioLabel, type RadioProps } from './Radio';

/*
  Radio button — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=14649-9792
  Radio button label — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=14649-9859
  Figma State combines selection and interaction: Rest, Hover, Pressed, Focused, Disabled and
  Active, Active Hover, Active Pressed, Active Focused. Labels: Filter bar "Offering" options from Figma.
*/

type State = 'Rest' | 'Active' | 'Hover' | 'Disabled' | 'Focused' | 'Pressed' | 'Active Hover' | 'Active Pressed' | 'Active Focused';
type Args = RadioProps & { State: State };
const STATES: State[] = ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled', 'Active', 'Active Hover', 'Active Pressed', 'Active Focused'];
const pseudo = (s: State) => (/Hover/.test(s) ? 'pseudo-hover' : /Pressed/.test(s) ? 'pseudo-active' : '');
const focus = (s: State) => (/Focused/.test(s) ? 'pseudo-focus-visible' : '');

const meta: Meta<Args> = {
  title: 'Components/Radio Button',
  component: Radio,
  parameters: { layout: 'centered', docs: { description: { component: 'Single-select input for mutually exclusive choices within a group.' } } },
  argTypes: {
    State: { control: 'select', options: STATES },
    Size: { control: 'inline-radio', options: ['M', 'L'] },
  },
  args: { State: 'Rest', Size: 'M' },
  render: ({ State, Size }) => <Radio Size={Size} checked={State.startsWith('Active')} aria-label="Option" className={pseudo(State)} inputClassName={focus(State)} disabled={State === 'Disabled'} />,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const M: Story = { args: { Size: 'M' } };
export const L: Story = { args: { Size: 'L' } };

/** A working group with labels (Radio button label). */
export const Group: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [v, setV] = useState('Digital Infrastructure');
    return (
      <fieldset style={{ border: 0, padding: 0, display: 'grid', gap: 'var(--spacing-sm)' }}>
        <legend className="yw-body-sm-med" style={{ marginBottom: 'var(--spacing-xs)' }}>Offering</legend>
        {['Digital Infrastructure', 'Operational Optimization & Intelligence', 'Foundation for Data & Integrations'].map((o) => (
          <RadioLabel key={o} name="offering" value={o} label={o} checked={v === o} onChange={(x) => x && setV(x)} />
        ))}
      </fieldset>
    );
  },
};

/** Every Figma variant: Radio button (State × Size, 18) and Radio button label (State, 9). */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <table style={{ borderSpacing: 'var(--spacing-xl) var(--spacing-sm)' }}>
      <tbody>
        {STATES.map((s) => (
          <tr key={s}>
            <td className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{s}</td>
            {(['M', 'L'] as const).map((z) => (
              <td key={z}><Radio Size={z} checked={s.startsWith('Active')} aria-label={`${s} ${z}`} className={pseudo(s)} inputClassName={focus(s)} disabled={s === 'Disabled'} /></td>
            ))}
            <td><RadioLabel label="Digital Infrastructure" checked={s.startsWith('Active')} className={pseudo(s)} inputClassName={focus(s)} disabled={s === 'Disabled'} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
