import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import Daily from "./Daily";
import Hourly from "./Hourly";

export default function SearchEngine(props) {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
    const [year, setYear] = useState ({});
    const [hour, setHour] = useState ({});
    const [additional, setAdditional] = useState ("");
}
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        description: response.data.weather[0].description
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = `5804e20be54f5001e6423f04ed96492c`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(displayWeather);
    }
  
    


    let form  = (
        <div className="formular" id="serach-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="🔎 Search" onChange={updateCity} id="form-city-text"/>
            <input type="submit" value="Change city" className="form-city-button"/>
            <input type="button" value="Current city" className="current-city-button"
                      id="current-city-button"/>
          </form>
        </div>
      );

    function showData(response) {
       setYear(response.target.value);
       setHour(response.target.value);
    return (
    <div>
     <div className="col-9">
        <ul>
            <li id="year-top"><Date Format year={props.info.date} /></li>
            <li id="hour-top"><Date Format hour={props.info.hour} /></li>
     </ul>
      </div>
      );
      
      
      function updateCity(response) {
      setCity(response.target.value)}
               return (
      <div>
        <div className="row d-flex justify-content-between">
          <div className="col-9">
            <h1 className="card-city" id="city">
              {props.city}
            </h1>
          </div>
          <div className="col-3">
            <h3 className="card-country" id="country">
              {props.country}
            </h3>
          </div>
        </div>

        <div>
        {form}
        </div>
       
          <div className="padding-icon d-flex justify-content-between">
            <ul className="changing-weather" style={{ width: `31rem` }}>
              <li>
              <WeatherIcon code={props.info.icon} size={64} />
              </li>
              <li id="temperature">{Math.round(props.temperature)}</li>
              <li id="celsius">°C</li>
              <li id="weather-change">{props.description}</li>
            </ul>
          </div>

          <ul className="additional-parameters">
            <li>
              Wind: {props.info.wind}
              <span id="wind"></span> km/h
            </li>
            <li>
              Humidity: {props.info.humidity}
              <span id="humidity"></span>%
            </li>
            <li>
              Pressure: {props.info.pressure}
              <span id="pressure"></span> hPa
            </li>
          </ul>
        </div>
      </div>
      )
      }

function additional (response) {
    setAdditional(response.target.value);
      if (loaded) {
        return (
            <div>
            <div className="card-body-hourly">
            <div className="row">
              {forecast.map(function (hourlyForecast, index) {
                if (index < 6) {
                  return (
                    <div className="card-title-hourly" key={index}>
                      <Hourly data={hourlyForecast} />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="card-body-daily">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 6) {
                  return (
                    <div className="card-title-daily" key={index}>
                      <Daily data={dailyForecast} />
                    </div>
                    
                  );
                }
              })}
            </div>
          </div>
          </div>
        );
      } else {
        let apiKey = `5804e20be54f5001e6423f04ed96492c`;
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
      }
    }
      