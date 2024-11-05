import tailwindConfig from "../tailwind.config.ts";

export default {
  framework: "@storybook/react",
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  postcss: { plugins: [tailwindConfig] },
};