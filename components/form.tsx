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
        <View style={Styles.form}>
            <View style={Styles.labelContainer}>
                <Text style={Styles.label}>{props.label}</Text>
                <Text style={Styles.errorMessage}>sssss</Text>
            </View>
            <TextInput style={Styles.input}
            placeholder={props.formplaceholder}
            placeholderTextColor="gray"
            onChangeText={props.onChangeText}
            >
            </TextInput>
        </View>
    )
}

const Styles = StyleSheet.create({
    form:{
        width: "100%",
        paddingBottom:21,
    },
    label:{
        fontSize:14,
        paddingLeft:4,
        paddingBottom:7,
        fontWeight:"600",
    },
    labelContainer:{
        display:"flex",
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
