import React , {useState, useEffect}from "react";
import {View, Text, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native'

export default function appDesafio003(){

    const [contador, setContador] = useState(0)
    const desabilitar = contador <= 0
    const limite = contador >= 10


    useEffect (() =>{
        if (contador === 10){
            alert( 'O Restaurante está no seu limite de Pessoas!')
        }
    }, [contador])


    function soma(){
        setContador (contador + 1)
    }
    
    function subtracao(){
        setContador (contador - 1)
    }




    return(
        <SafeAreaView style={styles.container}>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.txtPrincipal}>Pessoas no Restaurante</Text>

                    <Text style={styles.txtnumero}>{contador}</Text>
                </View>
            
                  <View style={styles.areaBtn}>
                    <TouchableOpacity 
                    style={[styles.botao, { backgroundColor: '#1d75cd' }]}
                    onPress={soma}
                    disabled={limite}
                    >
                      <Text style={styles.botaoText}>Adicionar</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity 
                    style={[styles.botao, { backgroundColor: '#1d75cd' }]}
                    onPress={subtracao}
                    disabled={desabilitar}
                    >
                      <Text style={styles.botaoText}>Remover</Text>
                    </TouchableOpacity>
                  </View>
            
            
                </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    txtPrincipal:{
        marginTop:25,
        marginBottom: 80,
        fontSize:25,

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
    txtnumero:{
        fontSize:50,
        color:'white',
        backgroundColor:'black',
        borderRadius:5,
        padding:8
    }
})



// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Pressable } from 'react-native';

// export default function App() {
//   const [contador, setContador] = useState(0);
//   const [limite, setLimite] = useState(10);

//   function mudarContador(contador){

//     if(contador <= 0) return;

//     if(contador >= limite){
//       setContador(10)
//       return;
//     }
    
//     setContador(contador)
  
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Pessoas no restaurante:
//       </Text>
//       <Text style={styles.counterText}>
//         {contador}
//       </Text>

//       {contador >= limite && (
//         <Text style={styles.warning}>
//           Restaurante está no seu limite de pessoas.
//         </Text>
//       )}


//       <View style={styles.buttonContainer}>
//         <Pressable
//           disabled={contador >= limite}
//           style={[
//             styles.button,
//             contador >= limite && { backgroundColor: "#DDD"}
//           ]}
//           onPress={() => mudarContador(contador + 1)}
//         >
//           <Text style={styles.buttonText}>Adicionar</Text>
//         </Pressable>
//         <Pressable
//           style={[
//             styles.button,
//             contador === 0 && { backgroundColor: "#DDD"}
//           ]}
//           onPress={() => mudarContador(contador - 1)}
//         >
//           <Text style={styles.buttonText}>Remover</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   counterText: {
//     fontSize: 30,
//     marginBottom: 20,
//     backgroundColor: "#121212",
//     color: "#FFF",
//     padding: 14,
//     borderRadius: 8
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     margin: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   buttonPressed: {
//     backgroundColor: '#0056b3',
//   },
//   warning:{
//     backgroundColor: "#F8B135",
//     padding: 4,
//     borderRadius:4,
//   }
// });

