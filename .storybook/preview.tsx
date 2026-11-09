import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/globals.css';

// Figma is built at two device widths; these match the Figma frames.
const viewports = {
  mobile: { name: 'Mobile (Figma 360)', styles: { width: '360px', height: '800px' } },
  tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
  desktop: { name: 'Desktop (Figma 1440)', styles: { width: '1440px', height: '900px' } },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Colour mode (Figma color_semantics: dark / light)',
      toolbar: {
        title: 'Mode',
        icon: 'contrast',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'dark' },
  decorators: [
    (Story, context) => {
      const theme = context.parameters.theme ?? context.globals.theme ?? 'dark';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }
      return (
        <div data-theme={theme} style={{ background: 'var(--color-shared-surface-base-1)', color: 'var(--color-shared-content-primary)', minHeight: '100%' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
    viewport: { options: viewports },
    backgrounds: { disable: true },
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components', 'Content blocks', 'Templates', '*'],
      },
    },
  },
};

export default preview;
