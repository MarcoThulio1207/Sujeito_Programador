import React, { Component } from "react";
import { Text, View, StyleSheet,FlatList} from "react-native";




export default class Pessoa extends Component{
    render(){
        return(
            <View style={styles.area}>
                <Text style={styles.txtpessoa}> {this.props.data.nome}</Text>
                <Text style={styles.txtpessoa}> {this.props.data.idade}</Text>
                <Text style={styles.txtpessoa}> {this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    txtpessoa:{
        color:'white',
        fontSize:20
    },
    area:{
        backgroundColor:'#222',
        marginBottom:15,
        height:200,
    }

})