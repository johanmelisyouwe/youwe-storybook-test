import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextArea, type TextAreaProps } from './TextArea';
import { FIELD_STATES, fieldState, type FieldState } from '../Field/fieldStory';

/*
  Text Area/Static Label — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18505-19110
  Text Area/Floating Labels — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=18505-19469
  Content from the Figma contact form: "Message", placeholder "How can we help you?".
  The filled text comes from the Figma sub-footer copy. Error copy is a stand-in (see SYNC-REPORT.md).
*/

type Args = TextAreaProps & { State: FieldState };
const FILLED = 'Tell us what you want to achieve and we will think along with you.';
const ERROR_COPY = 'Tell us briefly how we can help.';

const meta: Meta<Args> = {
  title: 'Components/Input/Text Area',
  component: TextArea,
  parameters: { layout: 'centered', docs: { description: { component: 'Multi-line text input with a static label above the field, or an animated floating label.' } } },
  argTypes: {
    Labels: { control: 'inline-radio', options: ['Static', 'Floating'] },
    State: { control: 'select', options: FIELD_STATES },
    status: { control: false },
    controlClassName: { control: false },
  },
  args: { Labels: 'Static', State: 'Rest', Label: 'Message', Required: true, Placeholder: true, placeholderText: 'How can we help you?', Hint: false, 'Hint text': ERROR_COPY },
  render: ({ State, ...args }) => {
    const s = fieldState(State);
    return (
      <div style={{ width: 400 }}>
        <TextArea key={State + args.Labels} {...args} defaultValue={s.filled ? FILLED : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} Hint={State === 'Error' || args.Hint} />
      </div>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {};
export const Static: Story = { args: { Labels: 'Static' } };
export const Floating: Story = { args: { Labels: 'Floating', Placeholder: false } };

/** Every Figma variant: Static Label (State, 9) and Floating Labels (State × Placeholder 'No' / 'Yes', 13). */
export const AllVariants: Story = {
  parameters: { layout: 'padded', controls: { disable: true } },
  render: () => {
    const sets: [('Static' | 'Floating'), boolean, readonly FieldState[]][] = [
      ['Static', true, FIELD_STATES],
      ['Floating', false, FIELD_STATES],
      ['Floating', true, ['Rest', 'Hover', 'Active', 'Focused']],
    ];
    return (
      <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
        {sets.map(([labels, ph, states]) => (
          <div key={labels + ph} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 400px)', gap: 'var(--spacing-lg)' }}>
            {states.map((st) => {
              const s = fieldState(st);
              return (
                <div key={st}>
                  <p className="yw-body-xs-reg" style={{ color: 'var(--color-shared-content-secondary)', marginBottom: 'var(--spacing-2xs)' }}>{`${labels}: ${st}${labels === 'Floating' ? `, Placeholder=${ph ? 'Yes' : 'No'}` : ''}`}</p>
                  <TextArea Labels={labels} Label="Message" Required Placeholder={ph} placeholderText="How can we help you?" Hint={st === 'Error'} {...{ 'Hint text': ERROR_COPY }} defaultValue={s.filled ? FILLED : ''} status={s.status} disabled={s.disabled} controlClassName={s.controlClassName} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
};
