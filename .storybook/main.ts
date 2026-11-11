import type { StorybookConfig } from '@storybook/nextjs-vite'

// Aktiv Grotesk (Youwe-licensed) is served from public/fonts and declared in
// src/styles/fonts.css. Preload the three weights the Figma text styles use.
const weights = ['regular', 'medium', 'bold']

const config: StorybookConfig = {
    framework: { name: '@storybook/nextjs-vite', options: {} },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        'storybook-addon-pseudo-states',
    ],
    staticDirs: ['../public'],
    // Keep the published Storybook out of search engines (GitHub Pages can't send
    // X-Robots-Tag headers, and a robots.txt only counts at the domain root).
    // The page behind Storybook is dark too, so the macOS overscroll bounce doesn't flash white.
    managerHead: (head) => `${head}
    <meta name="robots" content="noindex, nofollow, noarchive">
    <style>html, body { background: #04151c; /* legacy-ok: the manager page loads no tokens; neutral/900 */ }</style>`,
    previewHead: (head) => `${head}
    <meta name="robots" content="noindex, nofollow, noarchive">
    <style>html { background: var(--color-shared-surface-base-1); }</style>
    ${weights.map((w) => `<link rel="preload" href="./fonts/aktiv-grotesk/aktiv-grotesk-${w}.woff2" as="font" type="font/woff2" crossorigin>`).join('\n    ')}`,
    core: { disableTelemetry: true },
}

export default config
