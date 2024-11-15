import {
  meteorKeyframes,
  meteorShineInlineStyles,
  meteorShineLeftDynamicStyles,
  meteorShineRightDynamicStyles,
  meteorTailDynamicStyles,
  meteorTailInlineStyles,
} from './Meteor.styles.ts';
import { MeteorProps } from './Meteor.types.ts';

export const Meteor = (
  {
    animationDelay,
    dropShadowColor,
    index,
    rightValue,
    shineColor,
    tailColor,
    tailLength,
    topValue,
  }: MeteorProps,
) => {
  return (
    <div
      data-testid='meteor-tail'
      className={meteorTailInlineStyles}
      style={meteorTailDynamicStyles(
        animationDelay,
        dropShadowColor,
        index,
        rightValue,
        tailColor,
        topValue,
      )}
    >
      <style>
        {meteorKeyframes(index, tailLength)}
      </style>
      <div
        data-testid='meteor-shine-right'
        className={meteorShineInlineStyles}
        style={meteorShineRightDynamicStyles(animationDelay, index, shineColor)}
      />
      <div
        data-testid='meteor-shine-left'
        className={meteorShineInlineStyles}
        style={meteorShineLeftDynamicStyles(animationDelay, index, shineColor)}
      />
    </div>
  );
};
