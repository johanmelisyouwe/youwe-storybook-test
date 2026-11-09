import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toaster, type ToasterProps, type ToasterVariant } from './Toaster';
import { Button } from '../Button/Button';

/* Toaster — https://www.figma.com/design/IP237ISXsaciooPrSykYMh/?node-id=6284-7291 (titles and messages are the Figma defaults) */

const COPY: Record<ToasterVariant, [string, string]> = {
  Information: ['Info', 'New settings available on your account.'],
  Success: ['Success', 'Your changes are saved successfully.'],
  Warning: ['Warning', 'Username you have entered is invalid.'],
  Error: ['Error', 'Error has occurred while saving changes.'],
};

const meta: Meta<ToasterProps> = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: { layout: 'centered', docs: { description: { component: 'Transient notification. Motion: enters with fade + distance/sm rise (duration/base, ease/emphasized), exits with fade (duration/fast, ease/exit). Error and Warning use role="alert".' } } },
  argTypes: {
    Variant: { control: 'inline-radio', options: ['Information', 'Success', 'Warning', 'Error'] },
    Shadow: { control: 'inline-radio', options: ['Yes', 'No'] },
  },
  args: { Variant: 'Information', Shadow: 'Yes', title: COPY.Information[0], message: COPY.Information[1] },
  render: (args) => <div style={{ width: 400 }}><Toaster key={args.Variant} {...args} title={COPY[args.Variant ?? 'Information'][0]} message={COPY[args.Variant ?? 'Information'][1]} /></div>,
};
export default meta;
type Story = StoryObj<ToasterProps>;

export const Default: Story = {};
export const Information: Story = { args: { Variant: 'Information' } };
export const Success: Story = { args: { Variant: 'Success' } };
export const Warning: Story = { args: { Variant: 'Warning' } };
export const Error: Story = { args: { Variant: 'Error' } };

/** Shows the enter and exit motion: show a toast, then close it. */
export const Motion: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [n, setN] = useState(0);
    const [open, setOpen] = useState(false);
    return (
      <div style={{ width: 400, display: 'grid', gap: 'var(--spacing-sm)', justifyItems: 'start' }}>
        <Button Variant="Solid" Size="S" label="Show toast" onClick={() => { setN(n + 1); setOpen(true); }} />
        {open && <Toaster key={n} Variant="Success" title={COPY.Success[0]} message={COPY.Success[1]} onClose={() => setOpen(false)} />}
      </div>
    );
  },
};

/** Every Figma variant: Variant × Shadow (8). */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 400px)', gap: 'var(--spacing-lg)' }}>
      {(['Yes', 'No'] as const).map((sh) => (
        <div key={sh} style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
          {(['Information', 'Success', 'Warning', 'Error'] as const).map((v) => <Toaster key={v} Variant={v} Shadow={sh} title={COPY[v][0]} message={COPY[v][1]} />)}
        </div>
      ))}
    </div>
  ),
};
