// Connected Router
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { menuToggleReducer } from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";
import guardianReducer from "./guardianReducers";
import { currentUserReducer, errorReducer } from "./authReducers";
import { getCommentsReducer } from "./dbReducers";

const allReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    menuToggle: menuToggleReducer,
    weather: weatherReducer,
    guardian: guardianReducer,
    currentUser: currentUserReducer,
    comments: getCommentsReducer,
    error: errorReducer,
  });

export default allReducers;
