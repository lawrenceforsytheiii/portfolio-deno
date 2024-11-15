export const meteorTailInlineStyles = 'absolute h-[2px] rounded-full';

export const meteorShineInlineStyles =
  'absolute top-[calc(50%-1px)] left-0 h-[2px] bg-gradient-to-r from-transparent to-transparent rounded-full';

export const meteorTailDynamicStyles = (
  animationDelay: number,
  dropShadowColor: string,
  index: number,
  rightValue: string,
  tailColor: string,
  topValue: string,
) => ({
  background: `linear-gradient(30deg, ${tailColor}, rgba(0, 0, 255, 0))`,
  top: topValue,
  right: rightValue,
  filter: `drop-shadow(0 0 6px ${dropShadowColor})`,
  animation: `tail${index} 5000ms ease-in-out infinite, shooting${index} 5000ms ease-in-out infinite`,
  animationDelay: `${animationDelay}ms`,
});

export const meteorShineRightDynamicStyles = (
  animationDelay: number,
  index: number,
  shineColor: string,
) => ({
  background: `linear-gradient(to right, transparent, ${shineColor}, transparent)`,
  animation: `shining${index} 5000ms ease-in-out infinite`,
  animationDelay: `${animationDelay}ms`,
  transform: 'translateX(-50%) rotateZ(45deg)',
});

export const meteorShineLeftDynamicStyles = (
  animationDelay: number,
  index: number,
  shineColor: string,
) => ({
  background: `linear-gradient(to right, transparent, ${shineColor}, transparent)`,
  animation: `shining${index} 5000ms ease-in-out infinite`,
  animationDelay: `${animationDelay}ms`,
  transform: 'translateX(-50%) rotateZ(-45deg)',
});

export const meteorKeyframes = (index: number, tailLength: number) => `
  @keyframes tail${index} {
    0% { width: 0 }
    30% { width: ${tailLength}px }
    100% { width: 0 }
  }
  @keyframes shining${index} {
    0% { width: 0 }
    50% { width: calc(${tailLength}px * .10) }
    100% { width: 0 }
  }
  @keyframes shooting${index} {
    0% { transform: translateX(calc(${tailLength}px * 3)) }
    100% { transform: translateX(0) }
  }
`;
