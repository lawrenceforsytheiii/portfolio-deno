import { Story, Meta } from "@storybook/react";
import Button from "../components/Button.tsx";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<{ label: string }> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  color: "primary",
  variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  color: "secondary",
  variant: "outlined",
};
