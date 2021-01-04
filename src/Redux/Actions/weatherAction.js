import axios from "axios";
import { searchWeather, searchForecast } from "../../api";

export const loadWeather = (location) => async (dispatch) => {
  try {
    const weatherData = await axios.get(searchWeather(location));
    const forecastData = await axios.get(searchForecast(location));
    dispatch({
      type: "FETCH_WEATHER",
      payload: {
        weatherData: weatherData.data,
        forecastData: [
          forecastData.data.list[0],
          forecastData.data.list[1],
          forecastData.data.list[2],
        ],
      },
    });
  } catch {
    console.log("error");
  }
};
