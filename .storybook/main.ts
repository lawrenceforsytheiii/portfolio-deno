import path from 'path';
import type { StorybookConfig } from "@storybook/preact-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/preact-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '#atoms': path.resolve(__dirname, '../components/atoms'),
      '#molecules': path.resolve(__dirname, '../components/molecules'),
      '#organisms': path.resolve(__dirname, '../components/organisms'),
      '#static': path.resolve(__dirname, '../static'),
      '#utils': path.resolve(__dirname, '../utils'),
    };

    return config; 
  },
};
export default config;
