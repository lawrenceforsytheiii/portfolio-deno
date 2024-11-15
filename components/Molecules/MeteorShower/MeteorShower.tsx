import { random } from '@/utils/random.ts';
import { Meteor } from '@/atoms/Meteor/Meteor.tsx';
import { MeteorProps } from '@/atoms/Meteor/Meteor.types.ts';

export const MeteorShower = (
  {
    meteorSize = 20,
    tailLength = 100,
    dropShadowColor = 'rgba(105, 155, 255, 1)',
    tailColor = 'rgba(190, 37, 228, 1)',
    shineColor = '#68e8ff',
  }: MeteorProps,
) => {
  const meteors = Array.from({ length: 20 }, () => ({
    meteorSize,
    tailLength,
    dropShadowColor,
    tailColor,
    shineColor,
    animationDelay: random(9999),
    topValue: `calc(${random()}% - (${random(400)}px - 200px))`,
    rightValue: `calc(${random()}% - (${random(300)}px))`,
  }));

  return (
    <div
      className='h-full w-full relative'
      style={{ transform: 'rotateZ(-30deg)' }}
    >
      {meteors.map((meteor, index) => <Meteor key={index} {...meteor} />)}
    </div>
  );
};
