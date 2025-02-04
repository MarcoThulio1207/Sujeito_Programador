import React,{useRef} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'


// AnimaTable

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function app22(){

    const buttorRef = useRef(null)


    function hundeClick (){
        buttorRef.current.shake()
    }

    return(
        <View style={styles.container}>
            <Animatable.Text style={styles.title}
            animation='shake'
            // iterationCount={Infinity}
            // duration={5000}
            >
            Hello Word
            </Animatable.Text>

            <ButtonAnimated style={styles.button}
            animation='pulse'
            ref={buttorRef}
            onPress={hundeClick}
            >
                <Text style={{color:'white'}}>Animar</Text>
            </ButtonAnimated>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    title:{
        fontSize:25
    },
    button:{
        width:'70%',
        height:30,
        backgroundColor:'#121212',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    }
})