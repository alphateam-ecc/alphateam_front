import { useState } from "react";
import { View,Text,StyleSheet,TextInput } from "react-native"

interface formValue{
    label:string;
    formplaceholder?:string;
    errorMessage?:string;
    onChangeText?:(text:string) => void;
}
export default function Form(props:formValue){

    return(
        <View style={styles.form}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={styles.errorMessage}>{props.errorMessage}</Text>
            </View>
            <TextInput style={styles.input}
            placeholder={props.formplaceholder}
            placeholderTextColor="gray"
            onChangeText={props.onChangeText}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        width: "100%",
        paddingBottom:21,
    },
    labelContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
         paddingBottom:7,
    },
    label:{
        color:"#81A88B",
        fontSize:14,
        paddingLeft:4,
        fontWeight:"600",
    },
    input:{
        padding: 10,
        backgroundColor:"#ffffff",
        borderColor:"1f1f1f",
        borderWidth:1,
        borderRadius:8,
    },
    errorMessage:{
        fontSize:11,
        color:"#FF1B1B",
        paddingLeft:8,
    }
});
