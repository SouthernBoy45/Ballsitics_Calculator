import React, { useState } from 'react';


const AmmoList = ({}) => {
const [selectedAmmo, setSelectedAmmo] = useState(null);
const [starterMuzzleVelocity, setStarterMuzzleVelocity] = useState(0);
const [starterCaliber, setStartCaliber] = useState(0);
const [starterWeight, setStarterWeight] = useState(0);

    const ammoTypes = ["30.06 Springfield", "7mm Mauser", "338 Lapua", "308 Winchester", "223 Remington"]
    const ammoData = {
        "30.06 Springfield": {starterMuzzleVelocity: 2920, starterCaliber: .308, starterWeight: 150},
        "7mm Mauser": {starterMuzzleVelocity: 2660, starterCaliber: .275, starterWeight: 1450},
        "338 Lapua": {starterMuzzleVelocity: 2900, starterCaliber: .338, starterWeight: 123},
        "308 Winchester": {starterMuzzleVelocity: 2820, starterCaliber: .308, starterWeight: 150},
        "223 Remington": {starterMuzzleVelocity: 2750, starterCaliber: .223, starterWeight: 60}
    };
    
    const handleClick = (ammoType) =>{
        console.log(ammoType, ammoData[selectedAmmo])
        setSelectedAmmo(ammoType)
        setStarterMuzzleVelocity(ammoData[ammoType].starterMuzzleVelocity)
        setStartCaliber(ammoData[ammoType].starterCaliber)
        setStarterWeight(ammoData[ammoType].starterWeight)
    }

    return ( 
        <div>
            <h2>Pre Set Ammo List</h2>
            <h3>Click to see more information</h3>
            <ul>
                {ammoTypes.map((ammoType) =>(
                    <li key={ammoType} onClick={()=> handleClick(ammoType)}>{ammoType}</li>
                ))}
            </ul>
            {selectedAmmo && ammoData[selectedAmmo] && (
            <div>
                <h4>Ammo Data</h4>
                <p>Muzzle Velocity: {starterMuzzleVelocity}</p>
                <p>Caliber: {starterCaliber}</p>
                <p>Weight in grains: {starterWeight}</p>    
            </div>)}
        </div>
     );
}
 
export default AmmoList;