import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from "../Components";
import axios from 'axios';


export default class Home extends Component {

    state = {
        nameList: []
    }


    /**
     * 
     *    componentDidMount() {
        axios.get(`http://192.168.1.12/AnimePelis/categorias.php`)
            .then(res => {
                const nameList = res.data;
                this.setState({ nameList });
                console.log(nameList)
            }).catch(err => {
                console.log(err)
            })
    }
     */
 

    render() {
        return (
            <View>
                <Header {...this.props} ></Header>
                <Text onPress={() => console.log()}> Este es el home</Text>
                    
                       
                    

            </View>
        )
    }
}
