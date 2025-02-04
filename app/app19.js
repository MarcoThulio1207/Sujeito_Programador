import { useNavigation } from "expo-router";
import React ,{ useRef, useEffect}from "react";
import {View, Text, StyleSheet,Animated} from 'react-native'


//Animações Sequêncial e Paralela

export default function app19(){

    const larguraAnimada = useRef(new Animated.Value(150)).current
    const altuuraAnimada = useRef(new Animated.Value(50)).current
    const opacidadeAnimada = useRef(new Animated.Value(1)).current

    useEffect(()=> {

        Animated.sequence([
          Animated.timing(opacidadeAnimada, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
          }),
    
          Animated.parallel([
            Animated.timing(larguraAnimada, {
              toValue: 300,
              duration: 2000,
              useNativeDriver: false
            }),
            Animated.timing(altuuraAnimada, {
              toValue: 300,
              duration: 2000,
              useNativeDriver: false
            }),        
          ]),
    
          Animated.timing(opacidadeAnimada, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
          })
    
        ]).start();
    
      }, []);





        // Animated.sequence([
        //     Animated.timing(larguraAnimada,{
        //         toValue:300,
        //         duration:2000,
        //         useNativeDriver:false
        //     }),
        // Animated.parallel([
        //     Animated.timing(larguraAnimada,{
        //         toValue:300,
        //         duration:2000,
        //         useNativeDriver:false
        //     }),
        //     Animated.timing(altuuraAnimada,{
        //         toValue: 200,
        //         duration:2000,
        //         useNativeDriver:false
        //     }),
        //     Animated.timing(opacidadeAnimada,{
        //         toValue:0,
        //         duration:1000,
        //         useNativeDriver:false
        //     })
        // ]).start()



    return(
        <View style={styles.container}>
            <Animated.View style={{
        //As animações ocorrem dentro de propriedades
                    
                width:larguraAnimada,
                height:altuuraAnimada,
                backgroundColor:'#4169e1',
                justifyContent:'center',
                opacity:opacidadeAnimada

            }}>
                <Text style={{
                    textAlign:'center',
                    fontSize:22,
                    color:'white'
                }}>
                    Carregando ...</Text>
            </Animated.View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})