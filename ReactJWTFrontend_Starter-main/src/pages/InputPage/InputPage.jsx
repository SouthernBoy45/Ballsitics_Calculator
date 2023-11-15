import React, { useState } from "react";
import CoriolisMath from "../../components/CoriolisMath/CoriolisMath";

const InputPage = () => {
  const [muzzleVelocity, setMuzzleVelocity] = useState(0);
  const [targetRange, setTargetRange] = useState(0);
  const [caliber, setCaliber] = useState(0);
  const [scopeHeight, setScopeHeight] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [projectileWeight, setProjectileWeight] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const [timeOfFlight, setTimeOfFlight] = useState(0);
  const [bulletDrop, setBulletDrop] = useState(0);
  const [windDrift, setWindDrift] = useState(0);
  const [adjustedScopeHeight, setAdjustedScopeHeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const convertedMuzzleVelocity = parseFloat(muzzleVelocity);
    const convertedTargetRange = parseInt(targetRange);
    const convertedCaliber = parseInt(caliber);
    const convertedScopeHeight = parseInt(scopeHeight);
    const convertedWindSpeed = parseInt(windSpeed);
    const metricMuzzleVelocity = convertedMuzzleVelocity * 0.3048;
    const initialKineticEnergy =
      (0.5 * projectileWeight * Math.pow(convertedMuzzleVelocity, 2)) / 450240;

    const timeOfFlightResult =
      convertedTargetRange / (metricMuzzleVelocity * Math.sin(Math.PI / 4));
    const bulletDropResult =
      0.5 * 9.8 * Math.pow(timeOfFlightResult, 2) * (projectileWeight / 7000);
    const bulletDropCentimeters = bulletDropResult * 100;
    const windDriftResult = convertedWindSpeed * (timeOfFlightResult / 1000);
    const adjustedScopeHeightResult = convertedScopeHeight;

    setTimeOfFlight(timeOfFlightResult);
    setBulletDrop(bulletDropCentimeters);
    setWindDrift(windDriftResult);
    setAdjustedScopeHeight(adjustedScopeHeightResult);
  };

  const coriolisProps = {muzzleVelocity, timeOfFlight, targetRange};

  return (
    <div>
      <h1>Enter Shooting Parameters</h1>
      <form onSubmit={handleSubmit}>
        <label>Muzzle Velocity (fps):</label>
        <input
          type="number"
          value={muzzleVelocity}
          onChange={(e) => setMuzzleVelocity(e.target.value)}
        />
        <br />
        <label>Target Range (m):</label>
        <input
          type="number"
          value={targetRange}
          onChange={(e) => setTargetRange(e.target.value)}
        />
        <br />
        <label>Caliber (mm):</label>
        <input
          type="number"
          value={caliber}
          onChange={(e) => setCaliber(e.target.value)}
        />
        <br />
        <label>Scope Height (cm):</label>
        <input
          type="number"
          value={scopeHeight}
          onChange={(e) => setScopeHeight(e.target.value)}
        />
        <br />
        <label>Wind Speed (m/s):</label>
        <input
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
        />
        <br />
        <label>Projectile Weight (grains):</label>
        <input
          type="number"
          value={projectileWeight}
          onChange={(e) => setProjectileWeight(e.target.value)}
        />
        <br />
        <div>
          <p>Account for Coriolis Effect?</p>
          <CoriolisMath coriolisProps={coriolisProps} latitude={latitude} />
        </div>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Calculated Results</h2>
        <p>Time of Flight: {timeOfFlight.toFixed(3)} s</p>
        <p>Bullet Drop: {bulletDrop.toFixed(3)} cm</p>
        <p>Wind Drift: {windDrift.toFixed(3)} m</p>
      </div>
    </div>
  );
};

export default InputPage;
