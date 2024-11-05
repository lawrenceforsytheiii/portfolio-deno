import tailwindConfig from "../tailwind.config.ts";

export default {
  framework: "@storybook/react",
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ["babel-loader"],
    });
    return config;
  },
  postcss: { plugins: [tailwindConfig] },
};