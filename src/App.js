import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Łódź" />
        <footer>
          <div className="github-link pt-4">
            This project was coded by MartaPatrycja and is{" "}
            <a
              href="https://github.com/MartaPatrycja/app-weather-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}