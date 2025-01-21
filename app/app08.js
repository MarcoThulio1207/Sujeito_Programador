import React , {Component} from "react";
import { Text, View, StyleSheet,} from "react-native";
import {Picker} from '@react-native-picker/picker';

//picker 




export default class app08 extends Component{

    constructor(props){
        super(props);
        this.state={
            pizza: 0,
            pizzas: [
                {key:1, nome:'Calabresa', valor:35.90},
                {key:2, nome:'Quatro Queijos', valor:40.90},
                {key:3, nome:'Portuguesa', valor:38.90},
                {key:4, nome:'Brigadeiro', valor:55.90},
                {key:5, nome:'Papaia', valor:100.00},
            ]
        }
    }


    


    render(){

        // rendereização mapeada - acessa oa arraypizzas e percore esses objetos com o map, tendo o v de value e k de key
        let pizzasItem = this.state.pizzas.map((v,k) => {
            return <Picker.Item key={k} value={k} label={v.nome}/>
        } )


        return( 
            <View style={styles.container}>
            <Text style={styles.logo}>Menu Pizza</Text>

            <Picker
            // ele busca do nosso state
            selectedValue={this.state.pizza}
            // recebe uma função com dois parametos, o value(valor) e o index(posição)
            onValueChange={(itemValue, itemIndex) => this.setState({pizza:itemValue})}
            
            >
                {pizzasItem}
                {/* Para cada picker.Item precisa ter esses três módulos */}
                {/* <Picker.Item key={1} value={1} label="Calabresa"/>
                <Picker.Item key={2} value={2} label="Porugesa"/>
                <Picker.Item key={3} value={3} label="Brigadeiro"/>
                <Picker.Item key={4} value={4} label="Marguerita"/> */}
            </Picker>

            <Text style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
            <Text style={styles.pizza}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            {/* <Text style={{fontSize:50}}>{this.state.pizza}</Text> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,

    },
    logo:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold'

    },
    pizza:{
        marginTop:15,
        fontSize:25,
        textAlign:'center'
    }
}); 