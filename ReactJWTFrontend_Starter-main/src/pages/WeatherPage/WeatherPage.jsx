import React, { useState } from 'react';
import axios from 'axios';

const WeatherPage = () => {
 const [weatherDetails, setWeatherDetails] = useState();
 const [zipCode, setZipCode] = useState(0);

 const displayWeatherDetails = async () =>{
    try {
        let response = await axios.get(
            `http://api.weatherstack.com/current?access_key=9baaa31981bb905a7485fcae06096008&query=${zipCode}&units=f`);
            setWeatherDetails(response.data)
            console.log(response);
    }catch(error) {
        console.log(error);
    }
 }
 function handleSubmit (event) {
    event.preventDefault();
    displayWeatherDetails(zipCode);
 }
 return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your Zip Code</label>
                <input type="number"
                        name="zipCode"
                        min="1"
                        max="99999"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}/>
            </form>
            <h2>Local Weather</h2>
            {/* <h3>Location: {weatherDetails.location.name}{weatherDetails.location.region}</h3> */}
        </div>
    )
};

export default WeatherPage;