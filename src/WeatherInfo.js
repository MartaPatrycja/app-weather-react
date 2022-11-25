import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-body-daily">
      <h1>{props.info.name}</h1>
      <ul className="row d-flex justify-content-between">
        <li id="hour-top">
          <DateFormat day={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row d-flex justify-content-between">
          <div className="clearfix mt-3">
            <WeatherIcon code={props.info.icon} size={64} />
            <span className="ms-2" id="temperature">
              {Math.round(props.info.temp)}
              <span className="unit">°C</span>
            </span>
        </div>
        <div className="additional-parameters d-flex justify-content-between">
          <ul className="mt-3">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} mph</li>
            <li>Pressure: {Math.round(props.info.grnd_level)} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}