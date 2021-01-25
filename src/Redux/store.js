// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./Reducers/index";

// We set this function in a TRY block because certain privacy settings may not allow for local storage.
function saveToLocalStorage(state) {
  try {
    // This const will be a stringified version of the state
    const serializedState = JSON.stringify(state);
    // Then we call setItem, give it the key "state" and pass in that stringified state.
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

// This allows us to update the local storage everytime there is a state change.
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
