//Aula 01 e 02
import React, {Component} from "react";
import { Text, View, Image } from "react-native";


export default class App01 extends Component{
  render(){

    // lembrandp que o let você delclara uma variável que pode ser reatribuída
    let nome = 'Logo Geomak' 


    return(
      <View>
        <Text>Hello Word</Text>
        <Text style={{color:"red", fontSize:50, margin:15}}>Testes de propriedades</Text>
        <Text>Abaixo, teste com imagens</Text>
        {/* Lembrando sempre de passar altura e largura */}

          <Text style={{fontSize:15, color:'green'}}> {nome} </Text>

          {/* criei um componente e chamei ele na classe principal para ele ser exibido */}
          {/* posso pegar a minha propriedade e para não deixar fixo, eu claro ela no componente */}
          {/* o this (eu referencio a classe onde declaro, no caso a classe Geomak, o props que recebe o valor dessa propriedade e em seguida o nome da variavel declarada no componente) */}

          {/* As propriedades (props) são estáticas e não muda de valor, para isso, usamos os estados (states) */}

          <Geomak largura={100} altura={370}/>

      </View>
    );
  }
}

class Geomak extends Component{
  render(){
    let img = 'https://marcothulio1207.github.io/Site_Geomak_Brasil/image/geomak_logo_02.png'

    return(

      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.altura, height:this.props.largura}}
          />
        <Text>Essa sim, acima é a logo geomak</Text>
      </View>

    );
  }
}
