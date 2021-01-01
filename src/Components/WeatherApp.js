// REACT
import React from "react";

// REDUX
import { useSelector } from "react-redux";

const WeatherApp = () => {
  const weatherData = useSelector((state) => state.weather);
  return <div>{!weatherData.loading && <h1>{weatherData.name}</h1>}</div>;
};

export default WeatherApp;
