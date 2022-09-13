import axios from "axios";

const baseUrl = "https://api-nodejs-todolist.herokuapp.com/user/";

const config = {
	headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const login = async (userData) => {
	await axios
		.post(baseUrl + "login", userData)
		.then(function (response) {
			console.log(response.data);
			localStorage.setItem("token", response.data.token);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const logout = async () => {
	console.log(config);
	await axios
		.post(baseUrl + "logout", config)
		.then(function (response) {
			console.log("siiiiii");
			localStorage.removeItem("token");
			return response;
		})
		.catch(function (error) {
			console.log("nooo");
			console.log(error);
		});
};
