import React , {useState, useEffect} from "react";
import {View,Text, StyleSheet,ActivityIndicator, TextInput, TouchableOpacity, Keyboard}  from 'react-native';
import { PickerItem } from "../src/picker";
import {api} from '../src/services/api02'




export default function appConversor(){

    const [load, setLoad] = useState(true)
    const [moedas, setMoedas] = useState([])
    const [moedaSelect , setMoedaSelect] = useState(null)
    const [valormoeda, setValorMoeda] = useState(null)
    const [valorConvertido, setvalorConvertido] = useState(0)
    const [moedaBValor, setmoedaBValor] = useState('')

    // uso uma função assincrona em js para fazer buscar http
    useEffect(() => {
        async function loadMoedas (){
            const response = await api.get("all")
            let arraymoedas = []
            Object.keys(response.data).map((key) => {
                arraymoedas.push({
                    // objetos ...
                    key: key,
                    label: key,
                    value: key,
                })
            })

            setMoedas(arraymoedas);
            setMoedaSelect(arraymoedas[0].key)
            setLoad(false);
        }

        loadMoedas()

    },[])

    async function converter(){
        if (moedaBValor == 0 || moedaBValor === '' || moedaBValor === null){
            return;
        }

        const response = await api.get(`/all/${moedaSelect}-BRL`)

        let resultado = (response.data[moedaSelect].ask * parseFloat (moedaBValor))

        setvalorConvertido(`${resultado.toLocaleString("pt-BR",{style: 'currency', currency:"BRL"})}`)
        setValorMoeda(moedaBValor)
        Keyboard.dismiss()
    }

    if (load){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
                <ActivityIndicator color='white' size='large' />
            </View>
        )
    }


    return(
        <View style={styles.container}>
            
            <View style={styles.areaMoeda}>
                <Text style={styles.titulo}>Selecione sua moeda: </Text>
                <PickerItem
                moedas = {moedas}
                moedaSelect = {moedaSelect}
                // esse onchange pega o valor e troca ele
                onChange={(moeda)=>{
                    setMoedaSelect(moeda)
                } }
                />
            </View>


            <View style={styles.areaValor}>
                <Text style={styles.titulo}> Digite um valor para converter em (R$)</Text>
                <TextInput
                placeholder="EX: 1.50"
                keyboardType="numeric"
                value={moedaBValor}
                onChangeText={(valor)=> setmoedaBValor(valor) }
                style={styles.input}
                />
            </View>

            <TouchableOpacity style={styles.botaoArea} onPress={converter}>
                <Text style={styles.botaoText}>Converter</Text>
            </TouchableOpacity>

                {/* renderizaçao condicional */}
            {valorConvertido !=0 &&(
                <View style={styles.areaResultado}>

                <Text style={styles.valorConvertido}> 
                    {valormoeda} {moedaSelect}
                </Text>

                <Text style={{fontSize:18, margin:8, fontWeight:'500', color:'black'}}>
                     corresponde a 
                </Text>

                <Text style={styles.valorConvertido}> 
                    {valorConvertido}
                </Text>
            </View>
            )}
                

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#101215',
        paddingTop:40,
        alignItems:'center'
    },
    areaMoeda:{
        backgroundColor:'#f9f9f9',
        width:'90%',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        padding:8,
        marginBottom:1
    },
    titulo:{
        fontSize:16,
        color:'#000',
        fontWeight:'500',
        paddingLeft:5,
        paddingTop:5
    },
    areaValor:{
        width:'90%',
        backgroundColor:"#f9f9f9",
        paddingTop:8,
        paddingBottom:8,

    },
    input:{
        width:'100%',
        padding:8,
        fontSize:18,
        color:'#000',

    },
    botaoArea:{
        width:'90%',
        backgroundColor:'red',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,

    },
    botaoText:{
        color:'black',
        fontWeight:'bold',
        fontSize:16
    },
    areaResultado:{
        width:'90%',
        backgroundColor:'white',
        marginTop:34,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        padding:24
    },
    valorConvertido:{
        fontSize:28,
        color:'black',
        fontWeight:'bold'
    }
})