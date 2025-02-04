import React,{useLayoutEffect} from "react";
import {View, Text, StyleSheet, Button,} from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";

// Navegação 

//eu chamo o hook useRoute, para chamar justamente o objeto que instanciei na tela home
//function navegaSobre(){ navigation.navigate('Sobre', {nome: 'Thulio', email:'thulio@teste.com'})}
// dentro, por exempo do texto, eu chamo o nome da minha constante + params?. e depois o nome do obj
//essa ? ajuda que se por algum motivo eu não colocar o que quero no objeto, a aplicação não cracha


//useLayoutEffect - ele é sincrono, ou seja, só vai exibir meu layout depois de carregar o useLayoutEfecct



export default function Sobre(){
    // //navegação em pilhas
    // const rota = useRoute();
    const navegacao = useNavigation()

    // //navegação em pilhas
    // useLayoutEffect(()=>{
    // // usamos como dependência o use navigation, nesse caso, para alterar o title do header do app
    //     navegacao.setOptions({
    //         title: rota.params?.nome === '' ? 'Página sobre' : rota.params?.nome
    //         // se o rota.params?.nome vier vazio, uso o operador ternário para colocar um nome fixo
    //         //se for false, ou seja, o rota.params?.nome veio com o obj, ele irá exibir o que veio neles
    //     })


    // },[navigation]


    //navegação em tabs (menu)


    return(
        <View style={styles.container}>
           <Text>Tela  Sobre</Text>
           {/* <Text>{rota.params?.email}</Text>
           <Text>{rota.params?.nome}</Text>  */}
           {/* <Button title='Tela Contatos' onPress={()=>navegacao.navigate('Contato') }/> */}
           {/* <Button title='Voltar Tela' onPress={()=>navegacao.goBack() }/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },


})