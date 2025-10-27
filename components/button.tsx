
import React from "react"

import { View,Text, StyleSheet} from "react-native"

interface button{
    buttonValue:string;
}

export default function Button({buttonValue}:button){
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>{buttonValue}</Text>
        </View>   
    )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#81A88B',
        borderRadius:90,
        paddingVertical:11,
        width:"100%",
    },
    text:{
        color:"#fff",
        fontSize:20,
        textAlign:'center',
        fontWeight:"bold",
    }
});