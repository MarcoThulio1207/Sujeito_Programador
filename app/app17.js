import React ,{useEffect, useState}from "react";
import {View, Text, StyleSheet,FlatList} from 'react-native'
import api from '../src/services/api'

// Requisições HTTP
// npm install axios
export default function app17(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes (){
            const response = await api.get('r-api/?api=filmes')
            // console.log(response.data)
            setFilmes(response.data)
        }
        loadFilmes()
    },[])


    return(
        <View style={styles.container}>
            <FlatList/>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})