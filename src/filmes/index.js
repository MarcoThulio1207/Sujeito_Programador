import React, {useState}from "react";
import {View,Text, StyleSheet, TouchableOpacity, TextInput, Image, Modal}  from 'react-native';
import Detalhes from '../Detalhes'

export default function Filmes({data}){

    const [visibleModal, setvisibleModal] = useState(false);

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image
                source={{uri: data.foto}}
                style={styles.capa}
                />

                <View style={styles.areabotao}>
                    <TouchableOpacity style={styles.botao} onPress={()=> setvisibleModal(true)}>
                        <Text style={styles.textobotao}>Saiba Mais</Text>
                    </TouchableOpacity>
                </View>

                <Modal transparent={true} animationType="slide" visible={visibleModal}>
                    <Detalhes filme={data} voltar ={()=> setvisibleModal(false)}/>
                </Modal>
            </View>
        </View>
    )
}

const   styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        margin:15,
        elevation:2
    },
    capa:{
        height:250,
        zIndex:2
    },
    titulo:{
        padding:15,
        fontSize:18
    },
    areabotao:{
        alignItems:'flex-end',
        marginTop:-45,
        zIndex:9
    },
    botao:{
        width:100,
        backgroundColor:'#09A6FF',
        opacity:1,
        padding:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    textobotao:{
        color:'white',
        textAlign:'center'
    }
})