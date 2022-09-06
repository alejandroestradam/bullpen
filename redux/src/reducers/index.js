import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

/* Combining all the reducers into one reducer. */
const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
});

export default allReducers;
