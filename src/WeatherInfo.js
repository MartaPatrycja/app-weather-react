import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-city" id="city">
      <h1>{props.info.name}</h1>
      <ul className="row d-flex justify-content-between">
        <li id="hour-top">
          <DateFormat day={props.info.date} />
        </li>
        <li className="text-capitalize"><h4>{props.info.description}</h4></li>
      </ul>

      <div className="row d-flex justify-content-between">
          <div className="clearfix">
            <WeatherIcon code={props.info.icon} size={100} />
            <span className="ms-2" id="temperature">
              {Math.round(props.info.temp)}
              <span className="unit">°C</span>
            </span>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="additional-parameters">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} mph</li>
            <li>Pressure: {Math.round(props.info.grnd_level)} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}