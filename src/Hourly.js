import React from "react";
import "./index.css";
import WeatherIcon from "./WeatherIcon";

export default function Hourly(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  
  function hour(timestamp) {
    let now = new Date(timestamp * 1000);
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    
      return `${hours}:${minutes}`;
  
    }

  return (
    <div>
      <div className="img-weather-small">{hour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={24} />
      <div className="card-title-hourly">
        <span className="temperatures-hourly">{maxTemperature()} </span>
      </div>
    </div>
  );
}





