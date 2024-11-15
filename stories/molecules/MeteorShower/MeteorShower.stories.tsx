import { MeteorShower } from '#molecules/MeteorShower/MeteorShower.tsx';

export default {
  title: 'Example/MeteorShower',
  component: MeteorShower,
  tags: ['autodocs'],
  argTypes: {
    dropShadowColor: { control: 'color' },
    maxMeteorSize: { control: 'number' },
    minMeteorSize: { control: 'number' },
    shineColor: { control: 'color' },
    showerSize: { control: 'number' },
    tailColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    dropShadowColor: 'rgba(105, 155, 255, 1)',
    maxMeteorSize: 200,
    minMeteorSize: 20,
    shineColor: '#68e8ff',
    showerSize: 20,
    tailColor: 'rgba(190, 37, 228, 1)',
  },
};