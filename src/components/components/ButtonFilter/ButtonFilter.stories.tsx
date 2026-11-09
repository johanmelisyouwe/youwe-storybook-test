import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ButtonFilter, type ButtonFilterProps } from './ButtonFilter';

/*
  Button/Filter — Figma: https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=7375-5158
  Label "Filters" as used in the Figma Filter bar (mobile). State is real CSS, previewed with pseudo-states.
*/

type State = 'Rest' | 'Disabled' | 'Focused' | 'Hover' | 'Pressed';
type Args = ButtonFilterProps & { State: State };
const PSEUDO: Record<State, string> = { Rest: '', Hover: 'pseudo-hover', Pressed: 'pseudo-active', Focused: 'pseudo-focus-visible', Disabled: '' };

const meta: Meta<Args> = {
  title: 'Components/Buttons/Filter',
  component: ButtonFilter,
  parameters: { layout: 'centered', docs: { description: { component: 'Button used to represent or trigger filter actions. The counter shows how many filters are active.' } } },
  argTypes: {
    State: { control: 'inline-radio', options: ['Rest', 'Disabled', 'Focused', 'Hover', 'Pressed'] },
    Size: { control: 'inline-radio', options: ['M', 'S', 'L'] },
    'Active Filter': { control: 'boolean' },
    count: { control: { type: 'number', min: 0, max: 99 } },
    onClick: { action: 'click' },
  },
  args: { State: 'Rest', Size: 'M', 'Active Filter': true, count: 1, label: 'Filters' },
  render: ({ State, ...args }) => (
    <div style={{ padding: 'var(--spacing-xs)' }}>
      <ButtonFilter {...args} className={PSEUDO[State]} disabled={State === 'Disabled' || args.disabled} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const M: Story = { args: { Size: 'M' } };
export const S: Story = { args: { Size: 'S' } };
export const L: Story = { args: { Size: 'L' } };
export const NoActiveFilters: Story = { args: { 'Active Filter': false } };

const states: State[] = ['Rest', 'Hover', 'Pressed', 'Focused', 'Disabled'];

/** Every Figma variant: Size (rows) × State (columns). */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <table style={{ borderSpacing: 'var(--spacing-sm)' }}>
      <tbody>
        {(['L', 'M', 'S'] as const).map((z) => (
          <tr key={z}>
            <td className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{`Size=${z}`}</td>
            {states.map((s) => (
              <td key={s}><ButtonFilter Size={z} label="Filters" className={PSEUDO[s]} disabled={s === 'Disabled'} /></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
