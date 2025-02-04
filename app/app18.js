import { useNavigation } from "expo-router";
import React ,{ useRef, useEffect}from "react";
import {View, Text, StyleSheet,Animated} from 'react-native'


//Animações

export default function app18(){

    const larguraAnimada = useRef(new Animated.Value(150)).current
    const altuuraAnimada = useRef(new Animated.Value(50)).current

    useEffect(()=>{

        Animated.timing(larguraAnimada,{
            //valor final
            toValue : 350,
            //tempo que ele leva
            duration: 2000,
            //usa o drive nativo do emulador
            useNativeDriver: false
        }).start()

    },[])


    return(
        <View style={styles.container}>
            <Animated.View style={{
        //As animações ocorrem dentro de propriedades
                    
                width:larguraAnimada,
                height:altuuraAnimada,
                backgroundColor:'#4169e1',
                justifyContent:'center'

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