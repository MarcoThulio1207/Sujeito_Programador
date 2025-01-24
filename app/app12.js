import React , {Component} from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity,TextInput,Modal} from "react-native";
import Entrar from '../src/entrar'

//  Modal (popUp)


export default class app12 extends Component {

    constructor (props){
        super(props);
        this.state = {
            modalVisible: false,
        }

        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)

    }

    entrar(){
        // se o modal for falso, ele não é exibido, se for true, ele aparece
        this.setState({modalVisible:true})
    }

    sair(visible){
        this.setState({modalVisible:visible})
    }


    render(){
        return(
            <View style={styles.container}>
                <Button title='Entrar' onPress={this.entrar}/>

                <Modal
                transparent={true} 
                animationType="slide"
                visible={this.state.modalVisible}
                >
                    <View style={{margin:15,flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Entrar fechar={() => this.sair(false)}/>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DDD'
    },
    
})

