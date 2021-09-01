import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./reducer/LoginReducer";
import { UserManagerReducer } from "./reducer/UserManagerReducer";

const reducer = combineReducers({
  // Reducer children
  LoginReducer,
  UserManagerReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
