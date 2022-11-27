import React from "react";
import "./index.css";
import WeatherIcon from "./WeatherIcon";

export default function Daily(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
    return days[day];
  }
  return (
    <div>
      <div className="card-title-daily row d-flex justify-content-between mx-auto">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="card-title-daily mx-auto">
        <span className="temperatures-daily  mx-auto">{maxTemperature()} | </span>
        <span className="daily-temperature-min  mx-auto">{minTemperature()}</span>
      </div>
    </div>
  );
}