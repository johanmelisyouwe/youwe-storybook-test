import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox, CheckboxLabel, type CheckboxProps } from './Checkbox';

/*
  Checkbox — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=15432-8660
  Checkbox label — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=15432-8734
  Labels use the Filter bar options from Figma (Industries). States are real CSS (pseudo-states preview).
*/

type State = 'Rest' | 'Hover' | 'Pressed' | 'Focused' | 'Disabled' | 'Indeterminate';
type Args = CheckboxProps & { State: State; label: string };
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover', Pressed: 'pseudo-active', Focused: '', Disabled: '', Indeterminate: '' };
const FOCUS = (s: State) => (s === 'Focused' ? 'pseudo-focus-visible' : '');

const meta: Meta<Args> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered', docs: { description: { component: 'Binary selection input, standalone (Checkbox) or with a label (Checkbox label). Indeterminate exists only checked; Disabled only unchecked (as in Figma).' } } },
  argTypes: {
    Active: { control: 'inline-radio', options: ['No', 'Yes'] },
    State: { control: 'inline-radio', options: ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled', 'Indeterminate'] },
    Size: { control: 'inline-radio', options: ['S', 'M', 'L'] },
  },
  args: { Active: 'No', State: 'Rest', Size: 'M', label: 'Manufacturing' },
  render: ({ State, Active, label, ...args }) => {
    const [on, setOn] = useState(Active === 'Yes');
    return (
      <CheckboxLabel
        {...args}
        label={label}
        Active={State === 'Disabled' ? 'No' : on ? 'Yes' : 'No'}
        onChange={setOn}
        className={PSEUDO[State]} inputClassName={FOCUS(State)}
        disabled={State === 'Disabled'}
      />
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const S: Story = { args: { Size: 'S' } };
export const M: Story = { args: { Size: 'M' } };
export const L: Story = { args: { Size: 'L' } };
export const Standalone: Story = {
  render: ({ State, Active, Size }) => <Checkbox Size={Size} Active={Active} indeterminate={State === 'Indeterminate'} aria-label="Manufacturing" className={PSEUDO[State]} inputClassName={FOCUS(State)} disabled={State === 'Disabled'} />,
};

const STATES: State[] = ['Rest', 'Hover', 'Pressed', 'Focused', 'Indeterminate', 'Disabled'];
const exists = (a: 'No' | 'Yes', s: State) => !(a === 'Yes' && s === 'Disabled') && !(a === 'No' && s === 'Indeterminate');

/** Every Figma variant: Checkbox (30) and Checkbox label (27): Active × State × Size. */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-2xl)' }}>
      {[false, true].map((labelled) => (
        <table key={String(labelled)} style={{ borderSpacing: 'var(--spacing-lg) var(--spacing-sm)' }}>
          <caption className="yw-heading-sm" style={{ textAlign: 'left' }}>{labelled ? 'Checkbox label' : 'Checkbox'}</caption>
          <thead>
            <tr>
              <th />
              {STATES.filter((s) => !(labelled && s === 'Indeterminate')).map((s) => (
                <th key={s} className="yw-body-xs-med" style={{ textAlign: 'left', color: 'var(--color-shared-content-secondary)' }}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(['No', 'Yes'] as const).flatMap((a) =>
              (['S', 'M', 'L'] as const).map((z) => (
                <tr key={a + z}>
                  <td className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{`Active=${a}, Size=${z}`}</td>
                  {STATES.filter((s) => !(labelled && s === 'Indeterminate')).map((s) => (
                    <td key={s}>
                      {exists(a, s) &&
                        (labelled ? (
                          <CheckboxLabel Size={z} Active={a} label="Manufacturing" className={PSEUDO[s]} inputClassName={FOCUS(s)} disabled={s === 'Disabled'} />
                        ) : (
                          <Checkbox Size={z} Active={a} indeterminate={s === 'Indeterminate'} aria-label="Manufacturing" className={PSEUDO[s]} inputClassName={FOCUS(s)} disabled={s === 'Disabled'} />
                        ))}
                    </td>
                  ))}
                </tr>
              )),
            )}
          </tbody>
        </table>
      ))}
    </div>
  ),
};
