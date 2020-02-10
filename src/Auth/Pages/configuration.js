import React, { Component } from 'react'
import {
    Text,
    View
}
    from 'react-native'
import { Header } from "../Components";
export default class configuration extends Component {
    render() {
        return (
            <View>
                <Header {...this.props}/>
                <Text onPress={() => this.props.navigation.toggleDrawer()}> Esta es la configuracion </Text>

            </View>
        )
    }
}
