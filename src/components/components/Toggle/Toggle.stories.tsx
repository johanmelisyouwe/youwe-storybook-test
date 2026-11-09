import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toggle, type ToggleProps } from './Toggle';

/* Toggle — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=15416-13125 */

type State = 'Rest' | 'Hover' | 'Focused' | 'Disabled';
type Args = ToggleProps & { State: State };
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover', Focused: 'pseudo-focus-visible', Disabled: '' };

const meta: Meta<Args> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'On/off switch for a binary setting. Motion: knob slides (duration/base, ease/emphasized); track colour (duration/base, ease/standard). Figma has no disabled-on variant.' } },
  },
  argTypes: {
    State: { control: 'inline-radio', options: ['Rest', 'Hover', 'Focused', 'Disabled'] },
    Size: { control: 'inline-radio', options: ['M', 'L'] },
    Active: { control: 'inline-radio', options: ['No', 'Yes'] },
  },
  args: { State: 'Rest', Size: 'M', Active: 'No', label: 'Toggle' },
  render: ({ State, Active, ...args }) => {
    const [on, setOn] = useState(Active === 'Yes');
    const disabled = State === 'Disabled';
    return <Toggle {...args} Active={disabled ? 'No' : on ? 'Yes' : 'No'} onChange={setOn} className={PSEUDO[State]} disabled={disabled} />;
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const M: Story = { args: { Size: 'M' } };
export const L: Story = { args: { Size: 'L' } };

/** Every Figma variant (14): Size × Active × State; Disabled exists only for Active=No. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <table style={{ borderSpacing: 'var(--spacing-lg) var(--spacing-sm)' }}>
      <tbody>
        {(['M', 'L'] as const).flatMap((z) =>
          (['No', 'Yes'] as const).map((a) => (
            <tr key={z + a}>
              <td className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{`Size=${z}, Active=${a}`}</td>
              {(['Rest', 'Hover', 'Focused', 'Disabled'] as State[]).map((s) => (
                <td key={s}>{s === 'Disabled' && a === 'Yes' ? null : <Toggle Size={z} Active={a} label={`${s} toggle`} className={PSEUDO[s]} disabled={s === 'Disabled'} />}</td>
              ))}
            </tr>
          )),
        )}
      </tbody>
    </table>
  ),
};
