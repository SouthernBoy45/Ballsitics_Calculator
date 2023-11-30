import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherPage = () => {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [zipCode, setZipCode] = useState(0);

  const displayWeatherDetails = async () => {
    debugger
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&units=imperial&appid=440ed8745d5dd10a03e50ff8bfac2665`
      );
      setWeatherDetails(response.data);
    } catch (error) {
      console.log(error);
    } console.log(weatherDetails);
  };
  function handleSubmit(event) {
    event.preventDefault();
    displayWeatherDetails(zipCode);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your Zip Code</label>
        <input
          type="number"
          name="zipCode"
          min="1"
          max="99999"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
      </form>
      <h2>Local Weather</h2>
      <h3>Location: {weatherDetails.name} {weatherDetails.main.temp} {weatherDetails.main.pressure}</h3>
    </div>
  );
};

export default WeatherPage;
