import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Provider} from "react-redux";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import {connected} from "./helpers/redux";
import store from "./redux/store";

// Connect App component to redux's state using the "connected" helper (connect as decorator can't be used like before since v. 7.x.x)
const App = connected(
	class extends React.Component {
		render() {
			return <View style={styles.container}>
				<StatusBar/>
				<Navigation/>
			</View>;
		}
	},
);

export default props => <Provider store={store}>
	<App/>
</Provider>

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
