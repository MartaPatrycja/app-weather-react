import React from "react";
import "./index.css";

export default function Hourly() {
  let weatherData = {
    hour: "12:12",
    temperature: 19,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png"
  };

  return (
    <div
      className="container row d-flex justify-content-between"
      style={{ width: `34rem` }}
    >
      <h4>HOURLY</h4>

      <div className="weather-forecast" id="forecast-hourly">
        <div className="row">
          <div className="col-2">
            <div className="card-body-hourly d-flex justify-content-between">
              <h5 className="card-title-hourly">{weatherData.hour}</h5>
              <h5 className="temperatures-hourly">
                <span className="hourly-temperature">
                  {weatherData.temperature}°
                </span>
              </h5>
              <img
                src={weatherData.imgUrl}
                className="img-weather-small"
                alt="sunny"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
