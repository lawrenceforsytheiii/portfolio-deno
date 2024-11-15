import { MeteorProps } from '@/atoms/Meteor/Meteor.types.ts';

export interface MeteorShowerProps extends MeteorProps {
  maxMeteorSize?: number;
  minMeteorSize?: number;
  showerSize?: number;
}
