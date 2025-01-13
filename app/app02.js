import React, {Component} from "react";
import { Text, View, Button } from "react-native";

export default class app02 extends Component{

    // O construtor recebe todas as propriedades, ele acessa toda a super classe e criamos um objeto com o this.state{} (que será um estado)

    constructor(props){
        super(props)
        this.state={
            nome:'Geomak'
        };

        // com o bind, eu permito que ele acesse tudo do construtor

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){

        // o this.setState pegas as propriedades lá do nome (que foi declarado na variável) e nmuda o seu estado

        this.setState({
            nome: nome
        })
    }

    render(){
        return(
            <View style={{marginTop: 20}}>
                <Text style={{fontSize:50, color:'red', textAlign:'center'}}>
                    {this.state.nome}
                </Text>
                <Button title="Entrar" onPress={ () => this.entrar('Thulio')}/>
            </View>
        );
    }
}