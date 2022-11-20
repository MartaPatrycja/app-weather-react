import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function SearchEngine(props) {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
    const [year, setYear] = useState ({});
    const [hour, setHour] = useState ({});
}
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        hour: response.data.hour,
        year: response.data.year,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = `5804e20be54f5001e6423f04ed96492c`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(displayWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }

    function updateYear(event) {
        setYear(event.target.value);
    }
  
    function updateHour(event) {
        setHour(event.target.value);
    }

    let form = (
        <div className="formular" id="serach-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="🔎 Search" onChange={updateCity} />
            <input type="submit" value="Change city" className="form-city-button"/>
            <input type="button" value="Current city" className="current-city-button"
                      id="current-city-button"/>
          </form>
        </div>
      );
    
      if (loaded) {
        return (
    <div>
     <div className="col-9">
        <h2 id="year-top">{weather.year}</h2>
      </div>
      <div className="col-3">
        <h2 id="hour-top">{weather.hour}</h2>
      </div>
      <div>
        <div className="row d-flex justify-content-between">
          <div className="col-9">
            <h1 className="card-city" id="city">
              {weather.city}
            </h1>
          </div>
          <div className="col-3">
            <h3 className="card-country" id="country">
              {weather.country}
            </h3>
          </div>
        </div>

        <div>
        {form}
        </div>
       
          <div className="padding-icon d-flex justify-content-between">
            <ul className="changing-weather" style={{ width: `31rem` }}>
              <li>
                <img
                  src={weather.icon}
                  className="img-weather-big"
                  alt="sunny"
                  id="icon"
                />
              </li>
              <li id="temperature">{Math.round(weather.temperature)}</li>
              <li id="celsius">°C</li>
              <li id="weather-change">{weather.description}</li>
            </ul>
          </div>

          <ul className="additional-parameters">
            <li>
              Wind: {weather.wind}
              <span id="wind"></span> km/h
            </li>
            <li>
              Humidity: {weather.humidity}
              <span id="humidity"></span>%
            </li>
            <li>
              Pressure: {weather.pressure}
              <span id="pressure"></span> hPa
            </li>
          </ul>
        </div>
      </div>
        );
        
     } else {
        return form;
      }
    }
      