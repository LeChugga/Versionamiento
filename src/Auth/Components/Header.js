import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Alert
}
    from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.toggleDrawer()}>
                    <Icon
                        name={"list"}
                        color="#fff"
                        size={25}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        paddingHorizontal: 15
    },
})

