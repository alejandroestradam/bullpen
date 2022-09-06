//Action (Describes what you wanna do) Increment and Decrement

export const increment = (number) => {
	return {
		type: "INCREMENT",
		payload: number,
	};
};
export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};
