import { combineReducers } from "redux";
import { menuToggleReducer, weatherToggleReducer } from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";
import guardianReducer from "./guardianReducers";

const allReducers = combineReducers({
  menuToggle: menuToggleReducer,
  weatherToggle: weatherToggleReducer,
  weather: weatherReducer,
  guardian: guardianReducer,
});

export default allReducers;
