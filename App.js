import React from "react";
import {View, StyleSheet} from "react-native";
import {Provider} from "react-redux";
import store from "./redux/store";
import {connected} from "./helpers/redux";
import StatusBar from "./components/StatusBar";
import Navigation from "./components/Navigation";

@connected
class App extends React.Component {
	render() {
		return <View style={styles.container}>
			<StatusBar/>
			<Navigation/>
		</View>;
	}
}

export default (props) => <Provider store={store}>
	<App/>
</Provider>;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});