import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
	/* Getting the state from the store. */
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);

	//Dispatch (The way it executes the action)
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			{/* Dispatching the action to the reducer. */}
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			{isLogged ? <h3>You are logged in!</h3> : ""}
		</div>
	);
}

export default App;
