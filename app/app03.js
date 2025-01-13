import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class app03 extends Component{
    render(){
        return(
        <View style={styles.texto01}>
            {/* se eu quiser colocar mais de um grupo de estilo, eu utilizo colchetes [] */}
            <Text style={[styles.texto02, styles.texto03]}>Eu sou o texto 1 </Text> 
            <Text style={styles.texto03}>Eu sou o texto 2 </Text>
            <Text>Eu sou o texto 3 </Text>
            <Text style={styles.texto02}>Eu sou o texto 4 </Text>
        </View>
        );
    }
}


// é desta forma que eu crio um grupo de estilos
const styles = StyleSheet.create({
    texto01:{
        marginTop:40
    },
    texto02:{
        fontSize:25,
        color:'#FF0000'
    },
    texto03:{
        textAlign:'center'
    }
});