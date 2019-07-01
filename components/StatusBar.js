import Constants from "expo-constants";
import React from "react";
import {StatusBar as SB, View} from "react-native";
import styled from "styled-components";

export default class StatusBar extends React.Component {
	render() {
		return <Wrapper>
			<SB barStyle="light-content"/>
		</Wrapper>;
	}
};

const Wrapper = styled(View)`
	background-color: teal;
	height: ${Constants.statusBarHeight}px;
`;