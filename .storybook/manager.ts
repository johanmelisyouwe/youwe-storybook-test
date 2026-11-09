import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Youwe design system',
    colorPrimary: '#e40046',
    colorSecondary: '#e40046',
    appBg: '#04151c',
    appContentBg: '#04151c',
    appBorderColor: '#253f4b',
    barBg: '#0f2934',
    textColor: '#ffffff',
    fontBase: '"Aktiv Grotesk", "aktiv-grotesk", system-ui, sans-serif',
  }),
});
