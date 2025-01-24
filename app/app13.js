import React, { useState } from "react";
import {View,Text, StyleSheet, TouchableOpacity, TextInput}  from 'react-native';
import { visitFunctionBody } from "typescript";

// Hooks - UseState

export default function app13(){

    const [nome, setNome] = useState('Thulio')
    const [input, setInput] = useState('')

    function alteraNome(){
        // não precio mais usar o this pra chamar uma função, posso declarar ela direto
        setNome(input)
        setInput('')
    }

    return(
        <View style={styles.container}>

            <TextInput
            placeholder="Seu nome"
            // sempre que eu usar o textinput, preciso dar um valor pra ele e no onchange (que armazena o que eu digitar, posso também atribuílo a uma função)
            value={input} 
            onChangeText={(texto) => setInput(texto)}
            />


            <TouchableOpacity style={styles.btn} onPress={alteraNome}>
                <Text style={styles.btntxt}>Aletera Nome</Text>
            </TouchableOpacity>

            <Text style={styles.texto}>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    },
    texto:{
        color:'black',
        fontSize:35
    },
    btn:{
        backgroundColor:'#222',
        alignItems:'center'
    },
    btntxt:{
        fontSize:15,
        color:'white'
    }
})