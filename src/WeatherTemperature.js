import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState(`celsius`);

    function showFahrenheit(event) {
    event.preventDefalut();
    setUnit("fahrenheit");
}
function showCelsius(event) {
    event.preventDefalut();
    setUnit("celsius");
}

    if (unit === `celsius`) {
     return (
    <div className="mx-auto d-flex justify-content-between" id="temperature">
    <span>{Math.round(props.celsius)}</span>
    <span className="units p-1">°C</span>
    <span className="units dash">|</span>
    <span className="units p-1"><a href="/" onClick={showFahrenheit}>°F</a></span>
    </div>
   );

    } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    <div className="mx-auto d-flex justify-content-between" id="temperature">
    <span>{Math.round(fahrenheit)}</span>
    <span className="units p-1"><a href="/" onClick={showCelsius}>°C</a></span>
    <span className="units dash">|</span>
    <span className="units p-1">°F</span>
    </div>
}
}