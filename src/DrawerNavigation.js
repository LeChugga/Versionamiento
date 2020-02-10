import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Home, Configuration } from "./Auth/Pages";
import { Dimensions } from "react-native";
import {  ContentComponent} from "./Auth/Components";

const MyDrawerNavigation = createDrawerNavigator({
    home: {
        screen: Home,
    },
    Configuration: {
        screen: Configuration,
    },
},
    {
        initialRouteName: "home",
        drawerWidth: Dimensions.get("window").width ,
        drawerPosition: "left",
        drawerBackgroundColor: "transparent",
        contentComponent: ContentComponent
    }

);

const AppContainer = createAppContainer(MyDrawerNavigation);

export default class DrawerNavigator extends Component {
    render() {
        return <AppContainer />;
    }
}