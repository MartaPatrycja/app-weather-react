import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Hourly from "./Hourly";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }

  function load() {
    let apiKey = `5804e20be54f5001e6423f04ed96492c`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="mt-2">
        <div className="row">
          {forecast.map(function (hourlyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <Hourly data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
