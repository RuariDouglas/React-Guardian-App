import { combineReducers } from "redux";
import { menuToggleReducer, weatherToggleReducer } from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";

const allReducers = combineReducers({
  menuToggle: menuToggleReducer,
  weatherToggle: weatherToggleReducer,
  weather: weatherReducer,
});

export default allReducers;
