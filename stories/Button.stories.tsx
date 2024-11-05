import { StoryFn, Meta } from "@storybook/react";
import Button from "../components/Button.tsx";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: StoryFn<{ label: string; color: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" }> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  color: "primary",
};