import React from "react";
import {View, Text} from "react-native";
import {connected} from "../helpers/redux";

@connected
class Home extends React.Component {
	render() {
		return <View>
			<Text>Home</Text>
		</View>;
	}

	to = (route) => (event) => this.props.navigation.navigate(route);
}

export default Home;