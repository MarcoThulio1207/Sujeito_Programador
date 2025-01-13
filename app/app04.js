import React, { Component } from "react";
import { Text, View } from "react-native";


export default class app04 extends Component{
    render(){
        return(
        <View style={{  flex:1, 
                        flexDirection: 'column', 
                        alignItems:'stretch',

                        }}>
            {/* para ajustar o container do tamanho total da pagina, posso usar o flex:1 */}
            <View style={{width:50, height:50, backgroundColor:'red'}}></View>

            <View style={{ height:50, backgroundColor:'green'}}></View>

            <View style={{height:50, backgroundColor:'yellow'}}></View>

        </View>
        );
    }
}


