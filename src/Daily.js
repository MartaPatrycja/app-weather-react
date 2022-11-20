import React from "react";
import "./index.css";

export default function Daily() {
  let weatherData = {
    day: "SAT",
    temperatureMax: 19,
    temperatureMin: 0,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png"
  };

  return (
    <div
      className="container row d-flex justify-content-between"
      style={{ width: `34rem` }}
    >
      <h4>DAILY</h4>
      <div className="weather-forecast" id="forecast-daily">
        <div className="row">
          <div className="col-2">
            <div className="card-body-daily d-flex justify-content-between">
              <h5 className="card-title-daily">{weatherData.day}</h5>
              <h5 className="temperatures-daily">
                <span className="daily-temperature-max">
                  {weatherData.temperatureMax}°
                </span>{" "}
                <span className="daily-temperature-min">
                  {weatherData.temperatureMin}°
                </span>
              </h5>
              <img
                src={weatherData.imgUrl}
                className="img-weather-small"
                alt="cloudy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
