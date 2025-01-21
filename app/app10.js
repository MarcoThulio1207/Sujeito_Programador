import React , {Component} from "react";
import { Text, View, StyleSheet, Switch} from "react-native";

// switch

export default class app10 extends Component {

    constructor (props){
        super(props);
        this.state = {
            estado : false
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Switch
                value={this.state.estado}
                onValueChange={(valorSwitch) => this.setState({estado:valorSwitch})}
                thumbColor={'red'}
                />

                <Text style={{fontSize:30}}>
                    {(this.state.estado) ? 'Ativo' : 'Inativo'}
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

