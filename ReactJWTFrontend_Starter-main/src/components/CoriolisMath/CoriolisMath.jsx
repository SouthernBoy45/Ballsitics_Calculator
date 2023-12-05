import React from "react";
import "./CoriolisMath.css";

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
        <p className="coriolis">Coriolis Effect: {calculateCoriolisEffect().toFixed(5)} m</p>
      ) : null}
    </div>
  );
};

export default CoriolisMath;
