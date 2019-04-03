import {createAppContainer, createStackNavigator} from 'react-navigation'
import Home from '../screens/Home'

const navigationStack = createStackNavigator({
	Home
}, {headerMode: "none"});

export default createAppContainer(navigationStack)