import React from "react";
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

// Navegação - icons SVG

export default function app23(){

    return(
        <View style={styles.container}>
           <Text>Hello Word</Text>

            <FontAwesome
              name="home"
              size={35}
              color='#11118c'  
            />

            <FontAwesome
              name="user"
              size={35}
              color='#54a300'  
            />

            <Feather
            name="gift"
            size={35}
            color='#7565ff'
            />


        <TouchableOpacity style={styles.btnYoutube}>
            <FontAwesome
            name="youtube"
            size={35}
            color='white'
            />
            <Text style={styles.btntext}>Acessar Canal</Text>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    btnYoutube:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        backgroundColor:'red',
        borderRadius:5
    },
    btntext:{
        paddingLeft:10,
        color:'white'
    }
    }
)