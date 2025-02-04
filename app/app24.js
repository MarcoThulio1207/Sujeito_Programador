import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Contato from '../Pages/Contato'
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'
//biblioteca de icons
import Feather from 'react-native-vector-icons/Feather'




//navegação ...

// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function app24(){
    return(
        //navegação em pilhas
        // <Stack.Navigator>

        //     <Stack.Screen 
        //     name="Home" 
        //     component={Home}
        //     options={{
        //         title: 'Tela Inicio',
        //         headerStyle:{
        //             backgroundColor:'#121212',
        //         },
        //         headerTintColor:'white',
        //         headerShown:false
        //     }}
        //     />


        //     <Stack.Screen 
        //     name="Sobre" 
        //     component={Sobre}
        //     options={{
        //         title: 'Tela Sobre'
        //     }}
        //     />

        //     <Stack.Screen
        //     name="Contato"
        //     component={Contato}
            
        //     />

        // </Stack.Navigator>

        //navegação em tabs (menu)

            <Tab.Navigator
            screenOptions={{
                //some com o nome do cabeçãlho
                headerShown: false,
                //quando tiver um input, a tabbar some
                tabBarHideOnKeyboard: true,
                //some com os nomes das tabs (como home, sobre e contato)
                tabBarShowLabel:false,
                //quando a tabbar estiver ativa, ela fica com essa cor
                tabBarActiveTintColor:'blue',
                //backgorund da tabbar unica
                // tabBarActiveBackgroundColor:'green'

                tabBarStyle:{
                    //muda a cor de toda tabbar
                    backgroundColor:'#202225',
                    borderTopWidth:0
                }
            }}
            
            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon:({color, size}) =>{
                            return <Feather name="home" color={color} size={size}/>
                        }
                    }}
                />

                <Tab.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        tabBarIcon:({color, size}) => {
                            return <Feather name="file-text" color={color} size={size}/>
                        }
                    }}
                />

                <Tab.Screen
                    name="Contato"
                    component={Contato}
                    options={{
                        tabBarIcon:({color, size}) => {
                            return <Feather name="phone-call" color={color} size={size}/>
                        }
                    }}
                />

            </Tab.Navigator>



    )
}