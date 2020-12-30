import { combineReducers } from "redux";
import menuToggleReducer from "./menuToggleReducer";

const allReducers = combineReducers({
  menuToggle: menuToggleReducer,
});

export default allReducers;
