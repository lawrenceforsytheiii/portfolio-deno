import { Meteor } from "@/atoms/Meteor/Meteor.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Meteor',
  component: Meteor,
  tags: ['autodocs'],
  argTypes: {
    animationDelay: { control: 'number' },
    meteorSize: { control: 'number' },
    tailLength: { control: 'number' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    animationDelay: 3000,
    meteorSize: 20,
    tailLength: 100,
  },
};

export const Secondary = {
  args: {
    animationDelay: 6000,
    meteorSize: 30,
    tailLength: 200,
  },
};
