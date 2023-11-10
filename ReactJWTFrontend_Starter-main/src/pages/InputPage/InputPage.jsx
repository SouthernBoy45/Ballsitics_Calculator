import React, { useState, useEffect } from 'react';

const InputPage = ({}) => {

    const [muzzleVelocity, setMuzzleVelocity] = useState(0);
    const [targetRange, setTargetRange] = useState(0);
    const [projectileWeight, setProjectileWeight] = useState(0);
    const [caliber, setCaliber] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [scopeHeight, setScoptHeight] = useState(0);

    return ( 
        <h1>Enter Shooting Parameters</h1>
        
     );
}
 
export default InputPage;