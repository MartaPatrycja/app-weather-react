import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./index.css";
import WeatherForecastDaily from "./WeatherForecastDaily";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
      city: response.data.main.name,
      grnd_level: response.data.main.grnd_level,
    });
  }

  function search() {
    const apiKey = `5804e20be54f5001e6423f04ed96492c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="formular row mx-auto pt-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="🔎 Enter a city"
            onChange={updateCity}
            autoFocus="on"
            id="form-city-text"
            className="p-2"
          />
          <input
            type="submit"
            value="Change city"
            className="form-city-button p-2"
          />
          <input
            type="button"
            value="Current city"
            className="current-city-button p-2"
          />
        </form>
        <WeatherInfo info={weather} />
        <WeatherForecastDaily coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-inline-flex p-2">
        <p className="loading">Loading...</p>
        <InfinitySpin
          width="400"
          color="#1ab2a8"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}