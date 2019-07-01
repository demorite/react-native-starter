import firebase from "firebase";
import "firebase/firestore";

var config = {
	apiKey: "API_KEY",
	authDomain: "BASE_NAME.firebaseapp.com",
	databaseURL: "https://BASE_NAME.firebaseio.com",
	projectId: "BASE_NAME",
	storageBucket: "",
	messagingSenderId: "MESSAGIN_ID",
};

export default firebase.initializeApp(config);
export const db = firebase.firestore();