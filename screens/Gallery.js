import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";

export default class Gallery extends React.Component {
	render() {
		return <View>
			<Title>Gallery</Title>
			<NavigationButton onPress={this.to("Home")}>
				<WhiteText>Gallery</WhiteText>
				<Icon name={"arrow-right"} color="white" size={20}/>
			</NavigationButton>
		</View>;
	}

	to = screen => event => this.props.navigation.navigate(screen);
}

const NavigationButton = styled(TouchableOpacity)`
	align-items: center;
	background-color: teal;
	flex-direction: row;
	justify-content: center;
	margin: 0 20px;
	padding: 10px 20px;
`;

const WhiteText = styled(Text)`
	color: white;
	font-weight: bold;
	margin-right: 10px;
`;

const Title = styled(Text)`
	font-size: 24px;
	padding: 20px;
`;