import React from "react";
import {View, Text, Button} from 'react-native'
import { useNavigation, StackActions } from "@react-navigation/native";


export default function Contato(){
    const navegacao = useNavigation()

    function voltarHome(){
        //navegação em pilhas
        // navegacao.dispatch(StackActions.popToTop())
        // esa função me leva para o topo da pilha, lá da tela home
    }
    return(
        <View>
            <Text>Página Contato</Text>
            {/* <Button title="Voltar Home" onPress={voltarHome}/> */}
        </View>
    )
}