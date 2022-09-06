import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

//Store -----> Global state

/* Creating a store with all the reducers and the redux dev tools. */
const myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Action (Describes what you wanna do) Increment and Decrement
//Reducer (Describes how your actions transform the state into the next state)}
//Dispatch (The way it executes the action)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Providing the store to the app. */}
		<Provider store={myStore}>
			<App />
		</Provider>
	</React.StrictMode>
);
