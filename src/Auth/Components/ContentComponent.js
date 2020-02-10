import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Alert,
    Touchable
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import {ApiConfig} from "../../Api";



import Icon from "react-native-vector-icons/FontAwesome"



class ContentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view: [],
            success: false,
        }
    }



    componentDidMount() {
        axios.get(`http://192.168.1.12/AnimePelis/categorias.php`)
            .then(res => {
                const view = res.data;
                this.setState({ view, success: true });
               
            }).catch(err => {
               
            })

            
    }

    UNSAFE_componentWillMount(){
       console.log(this.props.config);
    }

    _getView = () => {
        if (this.state.success) {
            const LIST = this.state.view;

            return LIST.map((item, index) => {
                return (


                    <TouchableOpacity  onPress={() => this.props.navigation.navigate("home")}>
                        <View style={styles.row}>
                            <Icon
                                name={"film"}
                                size={25}
                                color={"#000"}
                            />
                            <Text style={styles.text}>{item[1]}</Text>
                            <Icon style={{ left: 20 }}
                                name={"angle-right"}
                                size={30}
                                color={"#000"}
                            />
                        </View>
                    </TouchableOpacity>



                )
            })

        } else {
            return (
                <View>
                    <Text>Error  Conexion</Text>
                </View>

            )
        }
    }

    render() {
        return (

            <TouchableOpacity activeOpacity={1} style={styles.drawerTransparent}>
                <TouchableOpacity activeOpacity={1} style={styles.drawer}>
                    <View >
                        <ImageBackground source={require("../assets/img/fondoAnime.jpg")} style={{ width: "100%", height: "100%" }} style={styles.header}>
                            <Image source={require("../assets/img/user.png")} style={styles.headerImage} />

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.textPerfil}>Mi Perfil</Text>
                                <Icon style={{ left: 75, top: 13 }}
                                    name={"gear"}
                                    size={20}
                                    color="#fff"
                                    onPress={() => Alert.alert("Esta va a hacer la configuracion")}
                                />
                                <Icon style={{ right: 160, top: 13 }}
                                    name={"share"}
                                    size={20}
                                    color={"#fff"}
                                    onPress={() => Alert.alert("Aqui se compartira la aplicacion")}
                                />
                            </View>
                        </ImageBackground>
                        <View>

                        </View>

                    </View>
                    <ScrollView>
                        <TouchableHighlight underlayColor={'rgba(0,0,0,0,2)'} onPress={() => this.props.navigation.navigate("Configuration")}>
                            <View style={styles.row}>
                                <Icon
                                    name={"film"}
                                    size={25}
                                    color={"#000"}
                                />
                                <Text style={styles.text}>Descargas</Text>
                                <Icon style={{ left: 20 }}
                                    name={"angle-right"}
                                    size={30}
                                    color={"#000"}
                                />
                            </View>
                        </TouchableHighlight>
                        <TouchableOpacity underlayColor={'rgba(0,0,0,0,2)'} onPress={() => this.props.navigation.navigate("home")}>
                            <View style={styles.row}>
                                <Icon
                                    name={"film"}
                                    size={25}
                                    color={"#000"}
                                />
                                <Text style={styles.text}>Home</Text>
                                <Icon style={{ left: 20 }}
                                    name={"angle-right"}
                                    size={30}
                                    color={"#000"}
                                />
                            </View>
                        </TouchableOpacity>
                        {this._getView()}

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
        width: 250,
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
    textPerfil: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        color: "#fff"
    }

})

const mapStateToProps = state => ({

    config: state.config
  
  });
export default connect(mapStateToProps)(ContentComponent)