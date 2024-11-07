import { random } from "@/utils/random.ts";

export interface MeteorProps {
  animationDelay: number;
  meteorSize: number;
  tailLength: number;
}

export const Meteor = ({ animationDelay, meteorSize, tailLength }: MeteorProps) => {
  const topValue = `calc(${random()}% - (${random(400)}px - 200px))`;
  const rightValue = `calc(${random()}% - (${random(300)}px))`;

  return (
    <div
      className="absolute h-[2px] rounded-[999px] filter drop-shadow-[0_0_6px_rgba(105,155,255,1)]"
      style={{
        background: 'linear-gradient(30deg, rgba(190, 37, 228, 1), rgba(0, 0, 255, 0))',
        top: topValue,
        right: rightValue,
        animation: `tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite`,
        animationDelay: `${animationDelay}ms`,
      }}
    >
      <style>
        {`
          @keyframes tail {
            0% { width: 0 }
            30% { width: ${tailLength}px }
            100% { width: 0 }
          }
          @keyframes shining {
            100% { width: 0 }
            50% { width: ${meteorSize}px }
            0% { width: 0 }
          }
          @keyframes shooting {
            100% { transform: translateX(0) }
            0% { transform: translateX(300px) }
          }
        `}
      </style>
      <div
        className="absolute top-[calc(50%-1px)] left-0 h-[2px] bg-gradient-to-r from-transparent via-[#68e8ff] to-transparent rounded-full"
        style={{
          animation: `shining 5000ms ease-in-out infinite`,
          animationDelay: `${animationDelay}ms`,
          transform: 'translateX(-50%) rotateZ(45deg)',
        }}
      />
      <div
        className="absolute top-[calc(50%-1px)] left-0 h-[2px] bg-gradient-to-r from-transparent via-[#68e8ff] to-transparent rounded-full"
        style={{
          animation: `shining 5000ms ease-in-out infinite`,
          animationDelay: `${animationDelay}ms`,
          transform: 'translateX(-50%) rotateZ(-45deg)',
        }}
      />
    </div>
  );
};