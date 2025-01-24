import React , {Component} from "react";
import { Text, View, StyleSheet, Button,TextInput,Modal,Image, TouchableOpacity} from "react-native";



export default class appDesafio02 extends Component {

    constructor (props){
        super(props);
        this.state = {
            modal:false,
            alcool: '',
            gasolina:'',
            recomendacao: '',
            resultado: ''
        }

        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
        this.calculo = this.calculo.bind(this)
    }

    entrar(){
        this.setState({modal:true})
    }

    sair(){
        this.setState({modal:false})
    }

    calculo() {
        const { alcool, gasolina } = this.state;
        const resultado = (alcool / gasolina).toFixed(2);
        const recomendacao = (resultado < 0.7) ? 'Álcool' : 'Gasolina'; 
        this.setState({ recomendacao, resultado }); 
        this.entrar();
    }


    render(){


        return(
            <View style={styles.container}>

                <Image
                source={require('../src/logo02.png')}
                style={styles.logo}
                />
                
                <Text style={styles.txtlogo}>Qual a melhor opção?</Text>

                <View>
                    <Text style={styles.txtpreco}>Álcool (preço por litro): </Text>
                    <TextInput
                    keyboardType="numeric"
                    style={styles.txtinput}
                    onChangeText={(texto) => this.setState({alcool:texto})}
                    />
                </View>

                <View style={styles.gasolina}>
                    <Text style={styles.txtpreco}>Gasolina (preço por litro): </Text>
                    <TextInput
                    keyboardType="numeric"
                    style={styles.txtinput}
                    onChangeText={(texto)=> this.setState({gasolina:texto})}
                    />
                </View>

                <TouchableOpacity 
                style={styles.btnCalcular}
                onPress={this.calculo }
                >
                    <View>
                        <Text style={styles.txtbtn}>Calcular</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                 transparent={true} 
                 animationType="slide"
                 visible={this.state.modal}
                >
                    <View style={styles.modal}>

                        <Image
                        source={require('../src/gas.png')}
                        style={styles.imgModal}
                        />

                        <Text style={styles.mensagem}>Compensa usar  {this.state.recomendacao}</Text>
                        <Text style={styles.mensagem02}>Com os preços: </Text>
                        <Text style={styles.mensagem03}>Álcool: R$ {this.state.alcool} </Text>
                        <Text style={styles.mensagem04}>Gasolina: R$ {this.state.gasolina} </Text>

                        <TouchableOpacity
                        onPress={this.sair}
                        style={styles.btnsair}
                        >
                            <View style={styles.containersair}>
                                <Text style={styles.txtsair}>Calcular Novamente</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',

    },
    logo:{
        marginTop:100,
        left:95
        
    },
    txtlogo:{
        color:'white',
        textAlign:'center',
        alignItems:'center',
        marginTop:25,
        fontSize:30,
        fontWeight:'bold'
    },
    txtpreco:{
        color:'white',
        fontSize:17,
        fontWeight:'bold',
        marginTop:50,
        padding:20
    },
    txtinput:{
        width:350,
        height:60,
        backgroundColor:'white',
        borderRadius:5,
        padding:20,
        left:17,
        marginTop:-15,
        fontSize:20
    },
    gasolina:{
        marginTop:-45
    },
    btnCalcular:{
        marginTop:20,
        backgroundColor:'red',
        borderRadius:5,
        width:350,
        height:50,
        left:17
    },
    txtbtn:{
        color:'white',
        alignItems:'center',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:5
    },
    modal:{
        backgroundColor:'black',
        flex:1
    },
    txtsair:{
        fontSize:25,
        color:'white'
    },
    btnsair:{
        color:'red',
        alignItems:'center',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:5,
    },
    containersair:{
        backgroundColor:'red',
        borderRadius:5,
        padding:5,
        marginTop:50
    },
    imgModal:{
        left:100,
        marginTop:100
    },
    mensagem:{
        color:'green',
        fontSize:30,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center',
        marginTop:30
    },
    mensagem02:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center',
        marginTop:30
    },
    mensagem03:{
        color:'white',
        fontSize:20,
        alignItems:'center',
        textAlign:'center',
        marginTop:20
    },
    mensagem04:{
        color:'white',
        fontSize:20,
        alignItems:'center',
        textAlign:'center',
        marginTop:10
    }
    
})

