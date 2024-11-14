export const meteorTailInlineStyles = 'absolute h-[2px] rounded-full';

export const meteorShineInlineStyles =
  'absolute top-[calc(50%-1px)] left-0 h-[2px] bg-gradient-to-r from-transparent to-transparent rounded-full';

export const meteorTailDynamicStyles = (
  tailColor: string,
  dropShadowColor: string,
  topValue: string,
  rightValue: string,
  animationDelay: number,
) => ({
  background: `linear-gradient(30deg, ${tailColor}, rgba(0, 0, 255, 0))`,
  top: topValue,
  right: rightValue,
  filter: `drop-shadow(0 0 6px ${dropShadowColor})`,
  animation: 'tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite',
  animationDelay: `${animationDelay}ms`,
});

export const meteorShineRightDynamicStyles = (
  shineColor: string,
  animationDelay: number,
) => ({
  background: `linear-gradient(to right, transparent, ${shineColor}, transparent)`,
  animation: 'shining 5000ms ease-in-out infinite',
  animationDelay: `${animationDelay}ms`,
  transform: 'translateX(-50%) rotateZ(45deg)',
});

export const meteorShineLeftDynamicStyles = (
  shineColor: string,
  animationDelay: number,
) => ({
  background: `linear-gradient(to right, transparent, ${shineColor}, transparent)`,
  animation: 'shining 5000ms ease-in-out infinite',
  animationDelay: `${animationDelay}ms`,
  transform: 'translateX(-50%) rotateZ(-45deg)',
});

export const meteorKeyframes = (tailLength: number, meteorSize: number) => `
  @keyframes tail {
    0% { width: 0 }
    30% { width: ${tailLength}px }
    100% { width: 0 }
  }
  @keyframes shining {
    0% { width: 0 }
    50% { width: ${meteorSize}px }
    100% { width: 0 }
  }
  @keyframes shooting {
    0% { transform: translateX(300px) }
    100% { transform: translateX(0) }
  }
`;
