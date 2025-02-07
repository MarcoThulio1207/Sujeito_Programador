import React ,{useEffect, useRef, useState} from "react";
import {View,Text,StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {db} from '../src/Firebase/FirebaseConection'
import {doc, getDoc, onSnapshot,setDoc, collection, addDoc, getDocs, updateDoc} from 'firebase/firestore'
import {Listausuarios} from '../src/usuarios'




export default function appBD(){
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cargo, setCargo] = useState('')
    const [formulario, setFormulario] = useState(true)
    const [listaUsers, setListaUsers] = useState([])
    const [edicao, setEdicao] = useState('')

    useEffect(()=>{
        async function getDados() {

        //estou criando uma lista do meu banco e ele exibira ela pra mim

        const usersRef = collection(db, 'Users')

        onSnapshot(usersRef,(retorno) => {
            let lista = []
            //percorrendo essa lista
            //uso o foreach para mapear e acessar cada coleção e propriedade do banco
            retorno.forEach((documentos)=>{
                //o push pega esses dados lá do meu banco ...
                lista.push({
                    id: documentos.id,
                    // nomeio a variável, depois chamo a propriedade documentos,
                    //o .data() ele acessa o bando e depois o .nome é a propriedade que já está no banco
                    nome: documentos.data().nome,
                    idade: documentos.data().idade,
                    cargo: documentos.data().cargo
                })
            })
            setListaUsers(lista)
        })





        // getDocs(usersRef)
        // //poderia usar o snapshot - que é a mesma coisa
        // .then((retorno)=>{
        //     //criando a lista
        //     let lista = []
        //     //percorrendo essa lista
        //     //uso o foreach para mapear e acessar cada coleção e propriedade do banco
        //     retorno.forEach((documentos)=>{
        //         //o push pega esses dados lá do meu banco ...
        //         lista.push({
        //             id: documentos.id,
        //             // nomeio a variável, depois chamo a propriedade documentos,
        //             //o .data() ele acessa o bando e depois o .nome é a propriedade que já está no banco
        //             nome: documentos.data().nome,
        //             idade: documentos.data().idade,
        //             cargo: documentos.data().cargo
        //         })
        //     })
        //     setListaUsers(lista)
        // })

        // .catch((erro) =>{
        //     console.log(erro)
        // })




            // dessa forma, você só busca mesmo e vizualiza 

        //     const docref = doc(db, 'Users','2')

        // getDoc(docref)
        // //nao precisa usar o await, usamos o .then - caso dê certo, ele exibirá no console log se deu ok
        // .then((deucerto)=> {
        //     setNome(deucerto.data()?.nome)
        // })
        // //usamos o .cath se caso der erro
        // .catch((erro)=>{
        //     console.log("Deu ruim")
        //     console.log(erro)
        // })


        //é um observer, ele atualiza automatico com o banco
        // onSnapshot(doc(db, 'Users','1'),(retorno) =>{
        //     setNome(retorno.data()?.nome)
        // })


        }
        //para iniciar

        getDados();
    },[])

    async function registrar(){
        //espera pra mim o setDoc, acessasmos o doc, inicamos nossa conexao com o banco
        //passamos dentro dos parenteses do doc qual é o item,
        //qual o item que quero criar no banco,
        //quero dentro dos {} do novo usuario ... 
        //ponho o nome,  idade e cargo, passo esses parametros que está no banco
        //ele sentrou dentro da tabela Users, e criou o a linha 03


        // await setDoc(doc(db,'Users', '3'),{
        //     nome: 'Paloma',
        //     idade: '27',
        //     cargo: 'Adiministrativo'
        // })


        // agora pra fazer de uma outra forma, ao invez de ficar criando usuario 01, usuario 02 ...
        // fazer com que ele crie tipo um aleatório, fazemos ASSIM:
        //abro o await seguindo o  addDoc, uso o collections, faço com a conexao com o banco usando o db,
        // Passo a tabela onde quero criar e dentro dos {} as propriedades que quero inserir
        //ele gera um ID aleatório, isso garante que não se repete
        
        await addDoc(collection(db,"Users"),{
            nome:nome,
            idade: idade,
            cargo:cargo
        })
        .then(()=>{
            console.log("CADASTRADO COM SUCESSO")
            //limpa os campos ...
            setNome('')
            setCargo('')
            setIdade('')
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }

    function esconderFormulario(){
        //se tiver true ele vira false
        //se tiver false, vira true
        setFormulario(!formulario)
    } 



    function editarUser (data){
        setNome(data.nome)
        setIdade(data.idade)
        setCargo(data.cargo)
        setEdicao(data.id)
    }

    async function editaroUsuario(){
        const docRef = doc(db, "Users",edicao)
        await updateDoc(docRef, {
            nome: nome,
            idade: idade,
            cargo: cargo,
            
        })
    }

    return(
        <View style={styles.container}> 
            {formulario &&(
                <View>
                    <Text style={styles.label}>Nome:</Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome ..."
                    value={nome}
                    onChangeText={(textodigitado)=>setNome(textodigitado)}
                    />


                    <Text style={styles.label}>Idade:</Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Digite sua idade ..."
                    value={idade}
                    onChangeText={(textodigitado)=>setIdade(textodigitado)}
                    />


                    <Text style={styles.label}>Cargo:</Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu cargo ..."
                    value={cargo}
                    onChangeText={(textodigitado)=>setCargo(textodigitado)}
                    />

                {edicao !==  '' ? (
                    <TouchableOpacity style={styles.button}
                    onPress={editaroUsuario}
                    >
                        <Text style={styles.txtbuton}>Editar Usuário</Text>
                    </TouchableOpacity>  
                ) : (
                    <TouchableOpacity style={styles.button}
                        onPress={registrar}
                         >
                        <Text style={styles.txtbuton}>Adicionar</Text>
                        </TouchableOpacity>
                )}


                </View>
            )}
                <TouchableOpacity
                onPress={esconderFormulario}
                style={{marginTop:8}}
                >
                    <Text style={{textAlign:'center', color:'white', backgroundColor:'red'}}
                    >{formulario ? 'Esconder Formulario' : 'Abrir formulário'}
                    </Text>
                </TouchableOpacity>

                <Text style={{marginTop:14, marginLeft:8, fontSize:20,color:'black'}}>
                Usuarios:
                </Text>

                <FlatList
                style={styles.lista}
                data={listaUsers}
                //infomrar o id da lista
                keyExtractor={(item) => String(item.id)}
                //escolho a forma de renderização
                renderItem={({item}) => <Listausuarios data={item} handleEdit={(item)=> editarUser(item)}/>}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:40
    },
    button:{
        backgroundColor:'black',
        marginLeft:8,
        marginRight:8
    },
    txtbuton:{
        padding:8,
        color:'white',
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        marginLeft:8,
        marginRight:8,
        marginBottom:8

    },
    label:{
        fontSize:18, 
        color:'#000', 
        marginBottom:4,
        marginLeft:8
    },
    list:{
        marginTop:8,
        marginLeft:8,
        marginRight:8,

    }
})