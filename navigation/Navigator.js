import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import MainDrawer from '../common/MainDrawer';

const drawerScreen = createDrawerNavigator({
    screen1: Screen1,
    screen2: Screen2,
    screen3: Screen3,
    screen4: Screen4,
}, {
        initialRouteName: 'screen3',
        contentComponent: props => <MainDrawer {...props} />,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

const switchNav = createSwitchNavigator({
    login: LoginScreen,
    drawer: drawerScreen,
}, {
        initialRouteName: 'login',
    });

const Navigator = createAppContainer(switchNav)


export default Navigator;


