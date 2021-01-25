import { combineReducers } from "redux";
import { menuToggleReducer, weatherToggleReducer } from "./menuToggleReducer";
import weatherReducer from "./weatherReducer";
import guardianReducer from "./guardianReducers";
import { signUpReducer } from "./authReducers";

const allReducers = combineReducers({
    menuToggle: menuToggleReducer,
    weatherToggle: weatherToggleReducer,
    weather: weatherReducer,
    guardian: guardianReducer,
    signUp: signUpReducer,
});

export default allReducers;