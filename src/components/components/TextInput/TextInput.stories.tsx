import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextInput, type TextInputProps } from './TextInput';
import { FIELD_STATES, fieldState, type FieldState } from '../Field/fieldStory';

/*
  Text Input/Static Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-6276
  Text Input/Floating Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6394-3683
  Content from the Figma contact form (Contact CTA, Variant=Form): label "Business email",
  placeholder "name@company.com". Figma has no real hint or error copy yet (only the default); the
  error message below is a stand-in, listed as an open question in SYNC-REPORT.md.
*/

type Args = TextInputProps & { State: FieldState };
const ERROR_COPY = 'Enter a valid business email address.';

const meta: Meta<Args> = {
  title: 'Components/Input/Text',
  component: TextInput,
  parameters: { layout: 'centered', docs: { description: { component: 'Single-line text input with a static label above the field, or an animated floating label inside it.' } } },
  argTypes: {
    Labels: { control: 'inline-radio', options: ['Static', 'Floating'] },
    State: { control: 'select', options: FIELD_STATES },
    Placeholder: { control: 'boolean', description: 'Static: show placeholder. Floating: Figma axis Placeholder=Yes/No' },
    Required: { control: 'boolean' },
    Hint: { control: 'boolean' },
    Suffix: { control: 'boolean' },
    status: { control: false },
    controlClassName: { control: false },
  },
  args: { Labels: 'Static', State: 'Rest', Label: 'Business email', Required: true, Placeholder: true, placeholderText: 'name@company.com', Hint: false, 'Hint text': ERROR_COPY, Suffix: false, type: 'email' },
  render: ({ State, ...args }) => {
    const s = fieldState(State);
    return (
      <div style={{ width: 240 }}>
        <TextInput key={State + args.Labels} {...args} defaultValue={s.filled ? 'name@company.com' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
      </div>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Static: Story = { args: { Labels: 'Static' } };
export const Floating: Story = { args: { Labels: 'Floating', Placeholder: false } };
export const Error: Story = { args: { State: 'Error', Hint: true } };
export const ContactForm: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)', width: 496 }}>
      <TextInput Label="First name" Required placeholderText="First name" autoComplete="given-name" />
      <TextInput Label="Last name" Required placeholderText="Last name" autoComplete="family-name" />
      <TextInput Label="Business email" Required placeholderText="name@company.com" type="email" autoComplete="email" />
      <TextInput Label="Phone number" Required placeholderText="Phone number" type="tel" autoComplete="tel" />
    </div>
  ),
};

/** Every Figma variant: Static Labels (State, 9) and Floating Labels (State × Placeholder, 13). */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => {
    const floatingYes: FieldState[] = ['Rest', 'Hover', 'Active', 'Focused'];
    const row = (labels: 'Static' | 'Floating', placeholder: boolean, states: readonly FieldState[]) => (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 240px)', gap: 'var(--spacing-lg)' }}>
        {states.map((st) => {
          const s = fieldState(st);
          return (
            <div key={st}>
              <p className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)', marginBottom: 'var(--spacing-2xs)' }}>{`${labels}: ${st}${labels === 'Floating' ? `, Placeholder=${placeholder ? 'Yes' : 'No'}` : ''}`}</p>
              <TextInput Labels={labels} Label="Business email" Required Placeholder={placeholder} placeholderText="name@company.com" Hint={st === 'Error'} {...{ 'Hint text': ERROR_COPY }} defaultValue={s.filled ? 'name@company.com' : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
            </div>
          );
        })}
      </div>
    );
    return (
      <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
        {row('Static', true, FIELD_STATES)}
        {row('Floating', false, FIELD_STATES)}
        {row('Floating', true, floatingYes)}
      </div>
    );
  },
};
