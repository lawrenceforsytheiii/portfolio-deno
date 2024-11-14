import { MeteorProps } from './Meteor.types.ts';
import {
  meteorKeyframes,
  meteorShineInlineStyles,
  meteorShineLeftDynamicStyles,
  meteorShineRightDynamicStyles,
  meteorTailDynamicStyles,
  meteorTailInlineStyles,
} from './Meteor.styles.ts';

export const Meteor = (
  {
    animationDelay,
    meteorSize,
    tailLength,
    dropShadowColor,
    tailColor,
    shineColor,
    topValue,
    rightValue,
  }: MeteorProps,
) => {
  return (
    <div
      data-testid='meteor-tail'
      className={meteorTailInlineStyles}
      style={meteorTailDynamicStyles(
        tailColor,
        dropShadowColor,
        topValue,
        rightValue,
        animationDelay,
      )}
    >
      <style>
        {meteorKeyframes(tailLength, meteorSize)}
      </style>
      <div
        data-testid='meteor-shine-right'
        className={meteorShineInlineStyles}
        style={meteorShineRightDynamicStyles(shineColor, animationDelay)}
      />
      <div
        data-testid='meteor-shine-left'
        className={meteorShineInlineStyles}
        style={meteorShineLeftDynamicStyles(shineColor, animationDelay)}
      />
    </div>
  );
};
