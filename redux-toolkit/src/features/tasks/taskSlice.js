import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

/* Creating a slice of the Redux store. */
const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		getAll: (state, action) => {
			return [...state, action.payload];
		},
		addTask: (state, action) => {
			state.push(action.payload);
		},
		deleteTask: (state, action) => {
			const taskFound = state.find((task) => task._id === action.payload);
			if (taskFound) {
				state.splice(state.indexOf(taskFound), 1);
			}
		},
		editTask: (state, action) => {
			const { _id, description } = action.payload;
			const taskFound = state.find((task) => task._id === _id);
			if (taskFound) {
				taskFound.description = description;
			}
		},
	},
});

export const { addTask, deleteTask, editTask, getAll } = taskSlice.actions;
export default taskSlice.reducer;
