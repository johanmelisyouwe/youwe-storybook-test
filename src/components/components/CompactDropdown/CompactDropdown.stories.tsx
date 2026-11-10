import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CompactDropdown } from './CompactDropdown';
import { ModeFrame, type Mode } from '../../shared/ModeFrame';

/*
  Dropdown/Compact — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18597-11473
  Used by Pagination (View amount). States are shown with pseudo-state classes; Active is the native option list.
*/

type State = 'Rest' | 'Hover' | 'Active' | 'Filled' | 'Filled Hover' | 'Disabled' | 'Focused' | 'Success' | 'Error';
type Args = { State: State; Size: 'M' | 'S'; Hint: boolean; Mode: Mode };
const STATES: State[] = ['Rest', 'Hover', 'Active', 'Filled', 'Filled Hover', 'Disabled', 'Focused', 'Success', 'Error'];
const OPTIONS = [12, 24, 48];

function Example({ State, Size, Hint }: Omit<Args, 'Mode'>) {
  const filled = !['Rest', 'Hover', 'Focused', 'Active'].includes(State);
  const pseudo = { Hover: 'pseudo-hover', 'Filled Hover': 'pseudo-hover', Focused: 'pseudo-focus-within', Active: 'pseudo-focus-within' }[State as string];
  return (
    <CompactDropdown
      key={State}
      Size={Size}
      Hint={Hint}
      {...{ 'Hint text': State === 'Error' ? 'Choose a number' : State === 'Success' ? 'Saved' : 'Items per page' }}
      options={OPTIONS}
      placeholder={filled ? undefined : ''}
      defaultValue={filled ? 12 : undefined}
      status={State === 'Success' ? 'Success' : State === 'Error' ? 'Error' : undefined}
      disabled={State === 'Disabled'}
      controlClassName={pseudo}
      aria-label="Items per page"
    />
  );
}

const meta: Meta<Args> = {
  title: 'Components/Input/Compact dropdown',
  parameters: { layout: 'centered', docs: { description: { component: 'Small number picker without a label, e.g. "View max. 12 per page" in Pagination. Native select, field states from the input fields (hover, focus, success, error, disabled).' } } },
  argTypes: {
    State: { control: 'select', options: STATES },
    Size: { control: 'inline-radio', options: ['M', 'S'] },
    Hint: { control: 'boolean' },
    Mode: { control: 'inline-radio', options: ['Dark', 'Light'] },
  },
  args: { State: 'Filled', Size: 'M', Hint: false, Mode: 'Dark' },
  render: ({ Mode, ...a }) => <ModeFrame Mode={Mode} padding={32}><Example {...a} /></ModeFrame>,
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Small: Story = { args: { Size: 'S' } };
export const WithHint: Story = { args: { Hint: true } };

export const AllVariants: Story = {
  parameters: { controls: { include: ['Mode'] } },
  render: ({ Mode }) => (
    <ModeFrame Mode={Mode} padding={32}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, auto)', gap: 'var(--spacing-md)', alignItems: 'start' }}>
        {(['M', 'S'] as const).flatMap((Size) => STATES.map((State) => (
          <div key={Size + State} style={{ display: 'grid', gap: 'var(--spacing-2xs)' }}>
            <span className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)' }}>{`${State}, ${Size}`}</span>
            <Example State={State} Size={Size} Hint={State === 'Error' || State === 'Success'} />
          </div>
        )))}
      </div>
    </ModeFrame>
  ),
};
