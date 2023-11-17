import React from "react";

const CoriolisMath = ({
  latitude,
  targetRange,
  timeOfFlight,
  muzzleVelocity,
  includeCoriolis,
}) => {
  const calculateCoriolisEffect = () => {
    const earthRotationRate = 7.2921159 * Math.pow(10, -5);

    const latitudeRad = latitude * (Math.PI / 180);

    const coriolisEffect =
      2 *
      earthRotationRate *
      Math.sin(latitudeRad) *
      (targetRange / muzzleVelocity) *
      timeOfFlight;

    return coriolisEffect;
  };

  return (
    <div>
      {includeCoriolis ? (
        <p>Coriolis Effect: {calculateCoriolisEffect().toFixed(5)}</p>
      ) : null}
    </div>
  );
};

export default CoriolisMath;
