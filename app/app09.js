import React , {Component} from "react";
import { Text, View, StyleSheet,} from "react-native";
import Slider from "@react-native-community/slider";

// slider

export default class app09 extends Component {

    constructor (props){
        super(props);
        this.state = {
            valor: 0
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Slider 
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado}) }
                    value={this.state.valor}
                    minimumTrackTintColor="green"
                    maximumTrackTintColor="red"
                />

                <Text style={{textAlign:'center', fontSize:30}}>
                    {this.state.valor.toFixed(0)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    }
})

