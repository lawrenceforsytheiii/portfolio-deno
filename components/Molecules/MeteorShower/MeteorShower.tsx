import { random } from "../../../utils/random.ts";
import { Meteor } from "../../Atoms/Meteor/Meteor.tsx";

export const MeteorShower = () => {
  const meteors = Array.from({ length: 20 }, () => ({
    animationDelay: random(9999),
    meteorSize: 20,
    tailLength: 100,
  }));

  return (
    <div
      className="h-full w-full relative"
      style={{ transform: 'rotateZ(-30deg)' }}
    >
      {meteors.map((meteor, index) => (
        <Meteor key={index} {...meteor} />
      ))}
    </div>
  );
};