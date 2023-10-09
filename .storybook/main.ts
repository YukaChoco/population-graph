import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    "storybook-css-modules",
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    const existingResolve = config.resolve || {};

    config.resolve = {
      ...existingResolve,
      alias: {
        ...existingResolve.alias,
        '@': path.resolve(__dirname, '../src'),
      },
    };

    return config;
  },
};
export default config;
