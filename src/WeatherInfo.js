import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-city mx-auto p-2" id="city">
      <h1 className="mx-auto">{props.info.name}</h1>
      <ul className="row d-flex justify-content-between mx-auto">
        <li className="p-2" id="hour-top">
          <DateFormat day={props.info.date} />
        </li> 
        <li className="p-2 text-capitalize" id="description">{props.info.description}</li>
      </ul> 

         <ul className="d-flex">
            <li className="row mx-auto"><WeatherIcon code={props.info.icon} size={120} /></li>
            <li className="mx-auto d-flex justify-content-between clearfix" id="temperature">
              <span>{Math.round(props.info.temp)}</span>
              <span className="units p-1">°C</span>
              <span className="units dash">|</span>
              <span className="units p-1">°F</span>
              </li>
          </ul>

        <div className="d-flex justify-content-between mx-auto">
          <ul className="additional-parameters mx-auto p-3">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} mph</li>
            <li>Pressure: {Math.round(props.info.grnd_level)} hPa</li>
          </ul>
        </div>
      </div>
  );
}