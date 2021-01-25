// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./Reducers/index";
// CONNECTED ROUTER
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers(history),
  // persistedState,
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
