import "./App.css";
import TaskForms from "./components/TaskForms";
import TaskList from "./components/TaskList";

function App() {
	return (
		<div className="App">
			<h1>Redux toolkit</h1>
			<TaskForms />
			<TaskList />
		</div>
	);
}

export default App;
