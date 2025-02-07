import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {db} from './Firebase/FirebaseConection'
import { deleteDoc, doc } from 'firebase/firestore'

export function Listausuarios ({data, handleEdit}){


    async function deletarItem(){
        const docRef = doc(db, "Users",data.id)
        await deleteDoc(docRef)
    }  
    
    function editarItem(){
        handleEdit(data)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.item}>Nome: {data.nome}</Text>
            <Text style={styles.item}>Idade: {data.idade} </Text>
            <Text style={styles.item}>Cargo: {data.cargo}</Text>

            <TouchableOpacity style={styles.btn}
            onPress={deletarItem}
            >
                <Text style={styles.btntxt}>Deletar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}
            onPress={editarItem}
            >
                <Text style={styles.btntxt}>Editar Usuário</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        padding:8,
        borderRadius:4,
        marginBottom:14
    },
    item:{
        color:'black',
        fontSize:16
    },
    btn:{
        backgroundColor:"#B3261E",
        alignSelf:'flex-start',
        padding:4,
        borderRadius:4,
        marginTop:16
    },
    btn2:{
        backgroundColor:"black",
        alignSelf:'flex-start',
        padding:4,
        borderRadius:4,
        marginTop:16
    },
    btntxt:{
        color:'#fff',
        paddingLeft:8,
        paddingRight:8
    }
})