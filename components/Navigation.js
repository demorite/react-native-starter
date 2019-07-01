import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from "../screens/Home";
import Gallery from "../screens/Gallery";

const navigationStack = createStackNavigator({
	Home,
	Gallery,
}, {
	headerMode: "none", cardStyle: {
		flex: 1,
	},
});

export default createAppContainer(navigationStack);