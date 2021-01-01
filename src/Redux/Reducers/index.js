import { combineReducers } from "redux";
import menuToggleReducer from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";

const allReducers = combineReducers({
  menuToggle: menuToggleReducer,
  weather: weatherReducer,
});

export default allReducers;
