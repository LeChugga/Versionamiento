import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from "../Components";


export default class Home extends Component {
    render() {
        return (
            <View>
                <Header {...this.props} ></Header>
                <Text onPress={() => console.log()}> Este es el home</Text>

            </View>
        )
    }
}
