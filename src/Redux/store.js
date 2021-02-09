// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./Reducers/index";
// CONNECTED ROUTER
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// LOCAL STORAGE
// SAVE TO LOCAL STORAGE
function saveToLocalStorage(state) {
  // We set this function in a TRY block because certain privacy settings may not allow for local storage.
  try {
    // This const will be a stringified version of the state
    const serializedState = JSON.stringify(state);
    // Then we call setItem, give it the key "state" and pass in that stringified state.
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

// GET FROM LOCAL STORAGE
function loadFromLocalStorage() {
  try {
    // Here we retrieve our state from local storage
    const serializedState = localStorage.getItem("state");
    // We need to check if the serialized state is null, react redux doesn't expect a null value so we need to return the state or undefined.
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const persistedState = loadFromLocalStorage();
const composeEnhancer = compose;
const store = createStore(
  allReducers(history),
  persistedState,
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);

// This allows us to update the local storage everytime there is a state change.
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
