
import React from "react"

import { View,Text, StyleSheet,TouchableOpacity} from "react-native"

interface button{
    buttonValue:string;
    onPress: () => void;
}

export default function Button({buttonValue,onPress}:button){
    return(
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <Text style={styles.text}>{buttonValue}</Text>
        </TouchableOpacity>   
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