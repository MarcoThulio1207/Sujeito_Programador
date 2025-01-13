import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class appbiscoito extends Component{

    constructor(props){
        super(props);
        this.state = {
        txtfrases:'',
        img:require('../src/biscoito.png')
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            "O sucesso é uma jornada, não um destino.",
            "Grandes conquistas começam com pequenos passos.",
            "Confie em si mesmo e todo o universo conspirará a seu favor.",
            "Hoje é o primeiro dia do resto da sua vida.",
            "Um sorriso é a chave que abre muitas portas.",
            "Você está mais perto do que imagina de alcançar seus sonhos.",
            "A coragem cresce quando você enfrenta seus medos.",
            "Boas notícias estão a caminho.",
            "A sorte favorece os corajosos.",
            "Cada desafio é uma oportunidade disfarçada.",
            "A felicidade está nas coisas simples da vida.",
            "Alguém especial está pensando em você agora.",
            "Seu coração sabe o caminho. Siga-o com confiança.",
            "Você é mais forte do que acredita.",
            "Oportunidades surgirão quando você menos esperar.",
            "A gratidão é o segredo para atrair mais coisas boas.",
            "O amor e a alegria estão em sua volta. Perceba-os.",
            "Hoje é um ótimo dia para começar algo novo.",
            "Sua bondade ilumina o mundo.",
            "A persistência sempre vence o talento sem esforço.",
            "Permita-se brilhar. O mundo precisa do seu brilho.",
            "Cada escolha te leva mais perto do seu destino.",
            "Surpresas agradáveis virão em breve.",
            "A vida recompensa quem tem paciência e fé.",
            "Seu potencial é infinito. Acredite e vá em frente.",
]
    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

        this.setState({
            txtfrases: '"' + this.frases[numeroAleatorio] + '"',
            img:require('../src/biscoitoAberto.png')
            // txtfrases: this.frases[numeroAleatorio] ele percorre o array (numeroAleatório) e  atualiza
        })
    }



    render(){
        return(
            <View style={styles.container}>

            <Image
                style={styles.img}
                source={this.state.img}
            />
                
            <Text style={styles.textoFrase}>{this.state.txtfrases}</Text>

            {/* uma outra forma de  ter um botão: */}
            <TouchableOpacity style={styles.btnBiscoito} onPress={this.quebraBiscoito}>
                <View style={styles.containerbtn}>
                        <Text style={styles.btnFrase}>Abrir Biscoito</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        felx:1,
        paddingTop:150,
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:250,
        height:250,
    },
    textoFrase:{
        fontSize:20,
        color:'#dd7b22',
        margin:30,
        fontStyle:'italic',
        textAlign:'center',
    },
    btnBiscoito:{
        width:230,
        height:50,
        borderWidth:2,
        borderColor:'#dd7b22',
        borderRadius:25,
    },
    containerbtn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    btnFrase:{
        fontSize:18,
        fontWeight:'bold',
        color:'#dd7b22',
    }

});