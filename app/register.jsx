import {  useRouter } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput } from "react-native";


export default function Register (){

    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.txtcontainer}> Cadastre-se</Text>

            <View style={styles.form}>
                <TextInput
                style={styles.txtinput}
                placeholder="Nome"
                />
                <TextInput
                style={styles.txtinput}
                placeholder="Email"
                />
                <TextInput
                style={styles.txtinput}
                placeholder="Senha"
                secureTextEntry
                />
                <TextInput
                style={styles.txtinput}
                placeholder="Repetir Senha"
                secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.btn}
            onPress={() => router.push('/home')}>
                <Text style={styles.txtbtn}>Voltar para Home</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       padding:25,
       marginTop:10,
       backgroundColor:'green'
    },
    txtcontainer:{
        textAlign:'center',
        fontSize:35,
        marginTop:10,
    },
    form:{
        marginTop:25,

    },
    txtinput:{
        fontSize:25,
        color:'black',
        borderRadius:20,
        backgroundColor:'white',
        marginTop:15,
        padding:10
    },
    btn:{
        backgroundColor:'red',
        borderRadius:25,
        marginTop:50,
        alignItems:'center'
    },
    txtbtn:{
        fontSize:25,
        color:'white'
    }
})
