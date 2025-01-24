import React , {Component} from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity,TextInput,Keyboard} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'


// AsyncStorage - A gente salva alguma informação, fechamos o app e quando baixamos, a informação continua la

// ciclos de vida: Quando o react é carregado, ele tem um ciclo de vida pra mostrar pra gente. Toda vez que a state for atualizada, ela fará algo.

export default class app11 extends Component {

    constructor (props){
        super(props);
        this.state = {
            input: '',
            nome: ''
        }

        this.gravanome = this.gravanome.bind(this)
    }

    // ComponentDidMount - Quando o componente é montado em tela, ele é exibido
    async componentDidMount(){
        await AsyncStorage.getItem('nome').then((value) => {
            this.setState({nome : value})
        })
    }

    // ComponentDidUpdate - Toda vez que a state é atualizada, ele executa algo
    // PrevProps - Quando você trata das Props anteriores
    // PrevState - O estado anterior de ser  alterado 
    async componentDidUpdate(_,prevState){
        const nome = this.state.nome;

        if (prevState !== nome){
            await AsyncStorage.setItem('nome', nome)
        }
    }







    gravanome(){
        // pegar o que foi digitado no input e jogar pro nome
        this.setState({
            nome: this.state.input
        });
        alert('Salvo com Sucesso!')
        Keyboard.dismiss();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput
                    style={styles.input}
                    value={this.state.input}
                    onChangeText={(text)=> this.setState({input: text})}
                    />

                    <TouchableOpacity onPress={this.gravanome}>
                        <Text style={styles.botao}>+</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.nome}>{this.state.nome}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems:'center'
    },
    viewInput:{
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        width:350,
        height:40,
        borderColor:'black',
        borderWidth:1,
        padding:10
    },
    botao:{
        backgroundColor:'#222',
        color:'white',
        height:40,
        padding:10,
        marginLeft:4
    },
    nome:{
        marginTop:15,
        fontSize:30,
        textAlign:'center'
    }
    
})

