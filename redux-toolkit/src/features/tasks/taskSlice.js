import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		title: "Task 1",
		description: "Task 1 description",
		completed: false,
	},
	{
		id: "2",
		title: "Task 2",
		description: "Task 2 description",
		completed: false,
	},
];

/* Creating a slice of the Redux store. */
const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducer: {
		addTasks: (state, action) => {
			console.log(state, action);
		},
	},
});

export default taskSlice.reducer;
