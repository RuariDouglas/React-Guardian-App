// REACT
import React from "react";

// REDUX
import { useSelector } from "react-redux";

// AXIOS
import axios from "axios";

const WeatherApp = () => {
  const weatherData = useSelector((state) => state.weather);
  return (
    <div>
      <h1>{weatherData.name}</h1>
    </div>
  );
};

export default WeatherApp;
