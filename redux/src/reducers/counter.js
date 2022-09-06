/**
 * If the action is INCREMENT, return the current state plus one. If the action is DECREMENT, return
 * the current state minus one. Otherwise, return the current state.
 * @param [state=0] - This is the current state of the store.
 * @param action - This is an object that has a type property.
 * @returns The state is being returned.
 */

//Reducer (Describes how your actions transform the state into the next state)}

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

export default counterReducer;
