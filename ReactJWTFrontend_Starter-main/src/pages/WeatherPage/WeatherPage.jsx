import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "../HomePage/HomePage";

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
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="text-container"><b>Enter your Zip Code</b></label>
        <input
        style={{margin: "20px"}}
          type="number"
          name="zipCode"
          min="1"
          max="99999"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
        <button type="submit" style={{margin: "20px"}} >Get Weather</button>
      </form>
      {weatherDetails && (
        <div className="text-container">
          <h2>Local Weather</h2> <br/>
          <h3>Location: {weatherDetails.name}</h3> <br />
          <p>
            Temperature: {weatherDetails.main.temp} <br /> Atmospheric Pressure:{" "}
            {weatherDetails.main.pressure} <br /> Humidity:{" "}
            {weatherDetails.main.humidity} <br />
            Wind Speed: {weatherDetails.wind.speed}
            <br /> Wind Degree: {weatherDetails.wind.deg} <br/>
            Latitude: {weatherDetails.coord.lat} <br /> Longitude:{" "}
            {weatherDetails.coord.lon}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
