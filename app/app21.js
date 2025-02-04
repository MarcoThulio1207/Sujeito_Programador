import { useNavigation } from "expo-router";
import React ,{ useRef, useEffect}from "react";
import {View, Text, StyleSheet,Animated} from 'react-native'


//Animações em Interpolation
export default function app21(){

    const larguraAnimada = useRef(new Animated.Value(0)).current
    const altuuraAnimada = useRef(new Animated.Value(50)).current
    // const opacidadeAnimada = useRef(new Animated.Value(1)).current

    useEffect(()=> {

        Animated.sequence([
            
            Animated.timing(larguraAnimada,{
                toValue:100,
                duration:4000,
                useNativeDriver:false   
            }),
            Animated.timing(altuuraAnimada,{
                toValue:100,
                duration:4000,
                useNativeDriver:false   
            }),

        ]).start(()=>{
            alert('Animação Finallizada!!!')
        })
    
      }, []);



    let procentagemLargura = larguraAnimada.interpolate({
        inputRange: [0,100], //entrada 
        outputRange: ['0%' , '100%'] // saida de 0 ate 100%
    })
    let procentagemAltura = altuuraAnimada.interpolate({
        inputRange: [50,100], //entrada 
        outputRange: ['5%' , '100%'] // saida de 0 ate 100%
    })

    return(
        <View style={styles.container}>
            <Animated.View style={{
        //As animações ocorrem dentro de propriedades
                    
                width:procentagemLargura,
                height:procentagemAltura,
                backgroundColor:'#4169e1',
                justifyContent:'center',
                // opacity:opacidadeAnimada
                

            }}>
               
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