import React , {Component} from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity,TextInput,Modal} from "react-native";


//  Modal (popUp) como component
export default class entrar extends Component {

    render(){
        return(
             <View style={{backgroundColor:"#292929", width:'100%', height:350, borderRadius:15}}>
                 <Text style={{paddingTop:15, textAlign:'center', color:'white', fontSize:28}}>Seja bem-vindo</Text>
                 <Button title="Sair" onPress={this.props.fechar}/>
             </View>
        );
    }
}

