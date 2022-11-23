import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-body-daily">
      <h1>{props.info.name}</h1>
      <ul>
        <li>
          <DateFormat day={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix mt-3">
            <WeatherIcon code={props.info.icon} size={64} />
            <span className="temperature ms-2">
              {Math.round(props.info.temp)}
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="mt-3">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} mph</li>
            <li>Pressure: {Math.round(props.info.main.grnd_level)} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}