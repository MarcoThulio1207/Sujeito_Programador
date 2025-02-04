import React from "react";
import {View, Text, StyleSheet,Button} from 'react-native'
import { useNavigation } from "@react-navigation/native";

// Navegação 

export default function Home(){
    const navigation = useNavigation()

    function navegaSobre(){
        //navegação em pilhas
        // navigation.navigate('Sobre', {nome: 'Thulio', email:'thulio@teste.com'}  ) // chamei um objeto que vai acompanhar a função
        
        
        //navegação em tabs (menu)
        navigation.navigate('Sobre')
    }

    return(
        <View style={styles.container}>
           <Text>Tela Home</Text>
           <Button title="Ir para Sobre" onPress={navegaSobre}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#ff0000'
    },


})