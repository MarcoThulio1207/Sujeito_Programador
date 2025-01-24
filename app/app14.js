import React, { useState, useEffect } from "react";
import {View,Text, StyleSheet, TouchableOpacity, TextInput}  from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Hooks - UseEffect

export default function app14(){

    const [nome, setNome] = useState('')
    const [input, setInput] = useState('')

        // Component Didmouth
    useEffect(()=> {
        async function getStorage(){
            const nomeStorage = await AsyncStorage.getItem('nomes')
            if (nomeStorage !== null){
                setNome(nomeStorage)
            }
        }

        getStorage()
    },[])


    // Component DidUpdate
    useEffect(()=>{
        async function saveStorage (){
            await AsyncStorage.setItem('nomes', nome)

            // toda vez que meu nome for alterado, ele executa essa função acima e salva a aletração
        }
        saveStorage();
    }, [nome])



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