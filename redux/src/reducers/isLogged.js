/**
 * If the action type is SIGN_IN, then return the opposite of the current state. Otherwise, return the
 * current state.
 * @param [state=false] - This is the current state of the reducer.
 * @param action - This is an object that has a type property.
 * @returns The state is being returned.
 */
//Reducer (Describes how your actions transform the state into the next state)}
const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case "SIGN_IN":
			return !state;
		default:
			return state;
	}
};

export default loggedReducer;
