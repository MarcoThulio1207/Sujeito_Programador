import React from "react";
import {View,Text,StyleSheet} from 'react-native'


export default function appBD(){
    return(
        <View style={styles.container}> 
            <Text style={{  fontSize:24}}>Firebase</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:40
    }
})