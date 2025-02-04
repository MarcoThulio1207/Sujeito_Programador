import { useNavigation } from "expo-router";
import React ,{ useRef, useEffect}from "react";
import {View, Text, StyleSheet,Animated} from 'react-native'


//Animações em loop
export default function app20(){

    const larguraAnimada = useRef(new Animated.Value(150)).current
    const altuuraAnimada = useRef(new Animated.Value(50)).current
    // const opacidadeAnimada = useRef(new Animated.Value(1)).current

    useEffect(()=> {

        Animated.loop(
            Animated.sequence([ 
                Animated.timing(larguraAnimada,{
                    toValue:300,
                    duration:2000,
                    useNativeDriver:false   
                }),
                Animated.timing(larguraAnimada,{
                    toValue:150,
                    duration:2000,
                    useNativeDriver:false   
                }),
            ])

        ).start()
    
      }, []);



    return(
        <View style={styles.container}>
            <Animated.View style={{
        //As animações ocorrem dentro de propriedades
                    
                width:larguraAnimada,
                height:altuuraAnimada,
                backgroundColor:'#4169e1',
                justifyContent:'center',
                // opacity:opacidadeAnimada
                borderRadius:50

            }}>
                <Text style={{
                    textAlign:'center',
                    fontSize:22,
                    color:'white',
                    
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