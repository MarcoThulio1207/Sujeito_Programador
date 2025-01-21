import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from "react-native";

export default function Home (){
    return(
        <View style={styles.container}>
            <Text style={styles.txthome}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red'
    },
    txthome:{
        fontSize:50,
        textAlign:'center'
    }
})