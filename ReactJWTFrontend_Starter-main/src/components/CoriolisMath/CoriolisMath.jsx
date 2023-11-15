import React from "react";

const CoriolisMath = ({
  latitude,
  targetRange,
  muzzleVelocity,
  timeOfFlight,
}) => {
  const coriolisConstant = 0.000293;

  const calculateCoriolisEffect = () => {
    const coriolisEffect =
      coriolisConstant *
      latitude *
      Math.sin(
        (2 * Math.PI * targetRange) / (muzzleVelocity * timeOfFlight)
      );

    return coriolisEffect;
  };
  return (
        <div>
            
          <p>Coriolis Effect: {calculateCoriolisEffect()}</p>
        </div>
      );
};

export default CoriolisMath;