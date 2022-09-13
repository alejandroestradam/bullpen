import axios from "axios";

const baseUrl = "https://api-nodejs-todolist.herokuapp.com/task";

/* A way to pass the token to the API. */
const config = {
	headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const getTasks = async () => {
	const res = await axios.get(baseUrl, config);
	return res.data.data;
};

export const addTasks = async (task) => {
	await axios
		.post(baseUrl, task, config)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const editTasks = async (id, description) => {
	console.log(baseUrl + "/" + id, { description }, config);
	await axios
		.put(baseUrl + "/" + id, { description }, config)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const deleteTasks = async (id) => {
	await axios
		.delete(baseUrl + "/" + id, config)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.log(error);
		});
};
