import React , {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Colors } from './../app-example/constants/Colors';

export default class appcronometro extends Component{

    constructor(props){
        super(props);
        this.state = {

            numero:0,
            botao:'Vai',
            ultimo: null

        }
        // Variavel do timer relógio
        this.timer = null 
        this.vai = this.vai.bind(this)
        this.parar = this.parar.bind(this)
    }

    vai(){
        if(this.timer != null){
            // pausar o timer
            clearInterval(this.timer);
            this.timer = null;
            this.setState({botao:'Vai'})
        }
        else{
            this.timer = setInterval(() =>{
                this.setState({numero:this.state.numero + 0.1})
            }, 100);

            this.setState({botao:'Parar'});
        }
    }

    parar(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
        }
        this.setState({
            ultimo: this.state.numero,
            numero:0,
            botao:'Vai'
        })
    }



    render(){
        return(
            <View style={styles.container}>
            <Image
            source={require('../src/cronometro.png')}
            style={styles.img}
            />
            <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.btn} onPress={this.vai}>
                    <Text style={styles.btnTexto}>{this.state.botao}</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btn} onPress={this.parar}>
                    <Text style={styles.btnTexto}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaUltima}>
                <Text style={styles.txtCorrida}>
                    {this.state.ultimo > 0 ? 'Ultimo Tempo:' + this.state.ultimo.toFixed(2) + 's': ''}
                    </Text>
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00aeef',
    },
    img:{

    },
    timer:{
        marginTop:-160,
        color:'white',
        fontSize:70,
        fontWeight:'bold'
    },
    btnArea:{
        flexDirection:'row',
        marginTop:70,
        height:40
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:40,
        margin:17,
        borderRadius:9
    },
    btnTexto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#00aeef'
    },
    areaUltima:{
        marginTop:40,

    },
    txtCorrida:{
        fontSize:25,
        fontStyle:'italic',
        color:'white'
    }

})