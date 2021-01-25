// Connected Router
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { menuToggleReducer, weatherToggleReducer } from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";
import guardianReducer from "./guardianReducers";
import { currentUserReducer, errorReducer } from "./authReducers";

const allReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    menuToggle: menuToggleReducer,
    weatherToggle: weatherToggleReducer,
    weather: weatherReducer,
    guardian: guardianReducer,
    currentUser: currentUserReducer,
    error: errorReducer,
  });

export default allReducers;
