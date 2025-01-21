import React, { Component } from "react";
import { Text, View, StyleSheet,FlatList} from "react-native";

// Flatlist

import Pessoa from '../Pessoa/pessoa'

export default class app06 extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id:'0',nome: 'Marco', idade:25, email:'teste@teste.com'}, 
                {id:'1',nome: 'Thulio', idade:20, email:'teste1@teste.com'}, 
                {id:'2',nome: 'Cacique', idade:50, email:'teste2@teste.com'}, 
                {id:'3',nome: 'Martins', idade:36, email:'teste3@teste.com'}, 
                {id:'4',nome: 'Francisco', idade:77, email:'teste4@teste.com'}, 
            ]
        };
    }



    render(){
        return(


            <View style={styles.container}>

            <FlatList
            // props obrigatórias:
            // data: lista em si que ele vai receber
            data={this.state.feed}
            // Render: responsável por mostrar na tela
            renderItem={({item}) => <Pessoa data={item}/>}
            />

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

