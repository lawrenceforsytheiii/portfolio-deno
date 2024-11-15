import { Meteor } from '@/atoms/Meteor/Meteor.tsx';
import { MeteorShowerProps } from './MeteorShower.types.ts';
import { random } from '@/utils/random.ts';

export const MeteorShower = ({
  dropShadowColor = 'rgba(105, 155, 255, 1)',
  maxMeteorSize = 200,
  minMeteorSize = 20,
  shineColor = '#68e8ff',
  showerSize = 20,
  tailColor = 'rgba(190, 37, 228, 1)',
}: MeteorShowerProps) => {
  const meteors = Array.from({ length: showerSize }, (_, index) => ({
    animationDelay: random(9999),
    dropShadowColor,
    rightValue: `calc(${random()}% - (${random(300)}px))`,
    shineColor,
    tailColor,
    tailLength: random(maxMeteorSize, minMeteorSize),
    topValue: `calc(${random()}% - (${random(400)}px - 200px))`,
    index,
  }));

  return (
    <div className='h-full w-full relative' style={{ transform: 'rotateZ(-30deg)' }}>
      {meteors.map((meteor) => <Meteor key={meteor.index} {...meteor} />)}
    </div>
  );
};
