import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CinemaManagerReducer } from "./reducers/CinemaManagerReducer";
import { MovieManagerReducer } from "./reducers/MovieManagerReducer";
import { UserManagerReducer } from "./reducers/UserManagerReducer";

const reducer = combineReducers({
  // reducer children
  MovieManagerReducer,
  UserManagerReducer,
  CinemaManagerReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
