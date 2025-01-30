import React, {useState,useRef} from "react";
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, keyboardType} from 'react-native'
import api from '../src/services/api03'

export default function AppBuscador(){

    const [cep, setCep] = useState('')
    const inputRef = useRef(null)

    async function buscar(){
        if (cep == ''){
            alert ('Digite um CEP válido')
            setCep('')
            return;
        }
        
        try{
            const response  = await api.get(`/${cep}/json`);
            console.log(response.data)
        }
        catch(error){
            console.log('Error: ' + error)
        }
        

    }

    function limpar(){
        setCep('')
        inputRef.current.focus()
    }


    return(
        <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Digite o cep desejado</Text>
            <TextInput
            style={styles.input}
            placeholder="Ex: 79003241"
            value={cep}
            onChangeText={ (texto) => setCep(texto) }
            keyboardType="numeric"
            ref={inputRef}

            />
          </View>
    
          <View style={styles.areaBtn}>
            <TouchableOpacity 
            style={[styles.botao, { backgroundColor: '#1d75cd' }]}
            onPress={buscar}
            >
              <Text style={styles.botaoText}>Buscar</Text>
            </TouchableOpacity>
    
            <TouchableOpacity 
            style={[styles.botao, { backgroundColor: '#cd3e1d' }]}
            onPress={limpar}
            >
              <Text style={styles.botaoText}>Limpar</Text>
            </TouchableOpacity>
          </View>
    
    

            <View style={styles.resultado}>
              <Text style={styles.itemText}>CEP: </Text>
              <Text style={styles.itemText}>Logradouro: </Text>
              <Text style={styles.itemText}>Bairro: </Text>
              <Text style={styles.itemText}>Cidade: </Text>
              <Text style={styles.itemText}>Estado: </Text>
            </View>

    
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        marginTop:25,
        marginBottom: 15,
        fontSize:25,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#DDD',
        borderRadius:5,
        width:'90%',
        padding:10,
        fontSize:18
    },
    areaBtn:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-around'
    },
    botao:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:5,

    },
    botaoText:{
        fontSize:15,
        color:'white'
    },
    resultado:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:250
    },
    itemText:{
        fontSize:18
    }
})