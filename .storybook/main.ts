import type { StorybookConfig } from '@storybook/nextjs-vite';

// Aktiv Grotesk is a licensed font, so the files are NOT in this public repo.
// Set STORYBOOK_ADOBE_FONTS_KIT to an Adobe Fonts (Typekit) project id that
// includes "aktiv-grotesk" to load it; otherwise the system fallback is used.
const adobeKit = process.env.STORYBOOK_ADOBE_FONTS_KIT;

const config: StorybookConfig = {
  framework: { name: '@storybook/nextjs-vite', options: {} },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  staticDirs: ['../public'],
  previewHead: (head) => `${head}
    ${adobeKit ? `<link rel="stylesheet" href="https://use.typekit.net/${adobeKit}.css">` : ''}`,
  core: { disableTelemetry: true },
};

export default config;
