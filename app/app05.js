import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button} from "react-native";

export default class app05 extends Component{

    // como vamos trabalhar com estados e capturar o que a pessoa digita, sempre usar o contrutor concedendo a super classe com as propriedades e lá no <Text> chamar essa propriedade com o this.state
    constructor(props){
        super(props);
        this.state = {
        nome:  '',
        input: ''
        };

        this.entrar = this.entrar.bind(this)
    }


    entrar(){
        if(this.state.input === ''){
            alert('Digite seu nome!');
            return;
        }
        this.setState({nome: 'Bem vindo, ' + this.state.input})
    }



    render(){
        return(
            <View style={styles.container}>

                <TextInput style={styles.input} 
                placeholder="Digite seu nome:"
                // o onChangeTet é chamada toda vez que eu digito uma letra no input para pegar o que ele digita
                onChangeText={(texto) => this.setState({input:texto})}

                />

                <Button title="Entrar" onPress={this.entrar}/>

                <Text style={styles.texto}>{this.state.nome}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input:{
        height:45,
        borderWidth:1,
        borderColor: '#222',
        margin:10,
        fontSize:20,
        padding:10
    },
    texto:{
        textAlign:'center',
        fontSize:25
    }
});