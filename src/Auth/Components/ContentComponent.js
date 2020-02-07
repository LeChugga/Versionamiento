import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground
} from "react-native";


import Icon from "react-native-vector-icons/FontAwesome"


export default class ContentComponent extends Component {
    render() {
        return (

            <TouchableOpacity activeOpacity={1} style={styles.drawerTransparent}>
                <TouchableOpacity activeOpacity={1} style={styles.drawer}>
                    <ScrollView>
                        <View >
                            <ImageBackground source={require("../assets/img/fondoAnime.jpg")} style={{width:"100%", height:"100%"}} style={styles.header}>
                                <Image source={require("../assets/img/user.png")} style={styles.headerImage} />
                                <Text style={styles.textPerfil}>Mi Perfil</Text>
                            </ImageBackground>

                        </View>
                        <TouchableHighlight underlayColor={'rgba(0,0,0,0,2)'} onPress={() => this.props.navigation.navigate("Configuration")}>
                            <View style={styles.row}>
                                <Icon
                                    name={"download"}
                                    size={25}
                                    color={"#000"}
                                />
                                <Text style={styles.text}>Descargas</Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </TouchableOpacity>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    drawerTransparent: {
        flex: 1,
        backgroundColor: "transparent",
    },
    drawer: {
        flex: 1,
        width: 350,
        backgroundColor: "#fff"
    },
    header: {
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    headerImage: {
        borderRadius: 100,
    },
    row: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingLeft: 10
    },
    menu: {
        width: 10,
        height: 10,
        backgroundColor: "#FF0000",
        borderRadius: 50,
        alignSelf: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        color: "#000"
    },
    line: {
        width: "90%",
        alignSelf: "center",
        height: 1,
        backgroundColor: "gray",
        margin: 15
    },
    textPerfil:{
        fontSize: 20,
        fontWeight:"bold",
        marginLeft:15,
        color:"#fff"
    }

})