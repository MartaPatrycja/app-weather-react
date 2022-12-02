import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Daily from "./Daily";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = `ebe09c380acce9a99f2cb99c1dae0509`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row d-flex justify-content-between mx-auto">
        <div className="row text-capitalize d-flex justify-content-between mx-auto">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-6 col-md-2 p-2" key={index}>
                  <strong><Daily data={dailyForecast} /></strong>
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
