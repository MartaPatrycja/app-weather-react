import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div id="city">
      <h1>{props.info.name}</h1>
      <ul>
        <li className="p-2" id="hour-top">
          <DateFormat day={props.info.date} />
        </li> 
        <li className="p-2 text-capitalize" id="description">{props.info.description}</li>
      </ul> 

         <ul className="d-flex">
            <li className="mx-auto"><WeatherIcon code={props.info.icon} size={100} /></li>
            <li className="mx-auto"><WeatherTemperature celsius={props.info.temp}/></li>
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