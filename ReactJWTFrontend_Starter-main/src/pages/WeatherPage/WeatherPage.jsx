import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherPage = () => {
  const [weatherDetails, setWeatherDetails] = useState();
  const [zipCode, setZipCode] = useState(0);

  const displayWeatherDetails = async () => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${parseInt(
          zipCode,
          10
        )},US&units=imperial&appid=440ed8745d5dd10a03e50ff8bfac2665`
      );
      setWeatherDetails(response.data);
      console.log(weatherDetails);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (zipCode) {
      displayWeatherDetails(zipCode);
    }
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
      {weatherDetails && (
        <div>
          <h2>Local Weather</h2>
          <h3>
            Location: {weatherDetails.name} <b /> Temperature:{" "}
            {weatherDetails.main.temp} <b /> Atmospheric Pressure:{" "}
            {weatherDetails.main.pressure} <b/> Humidity: {weatherDetails.main.humidity} <b/>
            Wind Speed: {weatherDetails.wind.speed}<b/> Wind Degree: {weatherDetails.wind.deg}
            Latitude: {weatherDetails.coord.lat} <b/> Longitude: {weatherDetails.coord.lon}
          </h3>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
