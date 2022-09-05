import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	Alert,
	TouchableOpacity,
	Share,
	Platform,
} from "react-native";
import * as imagePicker from "expo-image-picker";
import * as sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

const App = () => {
	const [selectedImage, setselectedImage] = React.useState(null);

	const onClick = async () => {
		let permission = await imagePicker.requestMediaLibraryPermissionsAsync();
		if (permission.granted === false) {
			alert("Permission to access camera is required");
			return;
		}
		const pickerResult = await imagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		if (Platform.OS === "web") {
			const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
			setselectedImage({ localUri: pickerResult.uri, remoteUri: remoteUri });
		} else {
			setselectedImage({ localUri: pickerResult.uri });
		}
	};
	const openShareDialog = async () => {
		if (!(await sharing.isAvailableAsync())) {
			alert("Sharing is not available in your platform");
			return;
		}
		await sharing.shareAsync(selectedImage.localUri);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My first React Native App</Text>
			<TouchableOpacity onPress={onClick}>
				<Image
					source={{
						uri:
							selectedImage !== null
								? selectedImage.localUri
								: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
					}}
					style={styles.image}
				/>
			</TouchableOpacity>
			{selectedImage ? (
				<TouchableOpacity onPress={openShareDialog} style={styles.touchable}>
					<Text>Share this image</Text>
				</TouchableOpacity>
			) : (
				<View />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#292929",
	},
	title: { fontSize: 30, color: "#fff" },
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		resizeMode: "contain",
		marginTop: 10,
	},
	touchable: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 10,
		marginTop: 10,
	},
});

export default App;
