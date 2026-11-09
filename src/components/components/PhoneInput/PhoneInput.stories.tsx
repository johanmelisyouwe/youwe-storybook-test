import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PhoneInput, type PhoneInputProps } from './PhoneInput';
import { fieldState, type FieldState } from '../Field/fieldStory';

/*
  Phone Input/Static Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18709-10372
  Phone Input/Floating Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18709-10502
  Label "Phone", placeholder "0000 000 000" and the filled number "7890 123 456" are the Figma defaults.
  Figma Phone Input has 8 states (no Success). Error copy is a stand-in (SYNC-REPORT.md).
*/

const PHONE_STATES = ['Rest', 'Hover', 'Active', 'Filled', 'Filled Hover', 'Disabled', 'Focused', 'Error'] as const;
type Args = PhoneInputProps & { State: (typeof PHONE_STATES)[number] };
const ERROR_COPY = 'Enter a valid phone number.';

const meta: Meta<Args> = {
  title: 'Components/Input/Phone',
  component: PhoneInput,
  parameters: { layout: 'centered', docs: { description: { component: 'Phone number input with a country code selector (flags from Figma) and a static or floating label.' } } },
  argTypes: {
    Labels: { control: 'inline-radio', options: ['Static', 'Floating'] },
    State: { control: 'select', options: PHONE_STATES },
    status: { control: false },
    controlClassName: { control: false },
  },
  args: { Labels: 'Static', State: 'Rest', Label: 'Phone', Required: true, Hint: false, 'Hint text': ERROR_COPY, Suffix: false },
  render: ({ State, ...args }) => {
    const s = fieldState(State as FieldState);
    return (
      <div style={{ width: 240, minHeight: 320 }}>
        <PhoneInput key={State + args.Labels} {...args} defaultValue={s.filled ? '7890 123 456' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} Hint={State === 'Error' || args.Hint} />
      </div>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Static: Story = { args: { Labels: 'Static' } };
export const Floating: Story = { args: { Labels: 'Floating' } };
export const CountryCodes: Story = {
  parameters: { controls: { disable: true } },
  render: () => <div style={{ width: 240, minHeight: 320 }}><PhoneInput Label="Phone" Required defaultLocaleOpen /></div>,
};

/** Every Figma variant: Static Labels (State, 8) and Floating Labels (State, 8). */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
      {(['Static', 'Floating'] as const).map((labels) => (
        <div key={labels} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 240px)', gap: 'var(--spacing-lg)' }}>
          {PHONE_STATES.map((st) => {
            const s = fieldState(st);
            return (
              <div key={st}>
                <p className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)', marginBottom: 'var(--spacing-2xs)' }}>{`${labels}: ${st}`}</p>
                <PhoneInput Labels={labels} Label="Phone" Required Hint={st === 'Error'} {...{ 'Hint text': ERROR_COPY }} defaultValue={s.filled ? '7890 123 456' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ),
};
