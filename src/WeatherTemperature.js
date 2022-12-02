import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState(`celsius`);

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit(`fahrenheit`);
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit(`celsius`);
    }

    if (unit === `celsius`) {
        return (
            <div className="mx-auto d-flex justify-content-center" id="temperature">
                <span>{Math.round(props.celsius)}</span>
                <span className="units p-1">°C</span>
                <span className="units dash">|</span>
                <span className="units fahrenheit p-1"><p onClick={showFahrenheit}>°F</p></span>
            </div>
        );

    } else {

        let fahrenheit = (props.celsius * 9 / 5) + 32;
        return <div className="mx-auto d-flex justify-content-center" id="temperature">
            <span>{Math.round(fahrenheit)}</span>
            <span className="units p-1"><p onClick={showCelsius}>°C</p></span>
            <span className="units dash">|</span>
            <span className="units fahrenheit p-1">°F</span>
        </div>
    }
}