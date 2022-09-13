import React from "react";
import TaskForms from "./components/TaskForms";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { getTasks } from "./services/tasks";
import { useDispatch } from "react-redux";
import { getAll } from "./features/tasks/taskSlice";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
	const dispatch = useDispatch();

	/* Getting the tasks from the API and then dispatching them to the store. */
	React.useEffect(() => {
		getTasks().then((tasks) => {
			tasks.forEach((task) => {
				dispatch(getAll(task));
			});
		});
	}, []);

	return (
		<div className="bg-zinc-900 h-screen text-white">
			<div className="flex items-center justify-center h-full flex-col">
				<BrowserRouter>
					{/*<Navbar />*/}
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/task-list" element={<TaskList />} />
						<Route path="/create-task" element={<TaskForms />} />
						<Route path="/edit-task/:id" element={<TaskForms />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}
export default App;
