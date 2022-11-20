import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from "./Weather";
import Hourly from "./Hourly";
import Daily from "./Daily";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Weather />
    <Hourly />
    <Daily />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
