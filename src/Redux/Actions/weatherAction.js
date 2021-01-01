import axios from "axios";
import { searchWeather } from "../../api";

export const loadWeather = () => async (dispatch) => {
  const weatherData = await axios.get(searchWeather());
  dispatch({
    type: "FETCH_WEATHER",
    payload: weatherData.data,
  });
};
