import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { View,Text,StyleSheet,TextInput } from "react-native";

interface passwordValue {
    label:string;
    placeholder?:string;
    onChangeText?:(text:string) => void;    //親から渡される関数
    errorMessage?:string;
}

export default function PasswordInput(props:passwordValue){
    const [secure,setSecure] = useState(true);
    

    return(
        <View style={styles.formContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={styles.errorMessage}>{props.errorMessage}</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} secureTextEntry={secure} onChangeText={props.onChangeText} placeholder={props.placeholder}></TextInput>    
                    <Feather 
                        onPress={() =>setSecure(!secure) } 
                        name={secure ? "eye-off" : "eye"} 
                        size={24} 
                        color="black" 
                        style={styles.icon}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        paddingBottom:21,
    },
    form:{
        flexDirection:"row",
        alignItems:"center",
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
        width:"100%",
        position:"relative",
        paddingVertical:10,
        paddingLeft:10,
        paddingRight:36,
        borderWidth:1,
        borderColor:"1f1f1f",
        borderRadius:8,
        backgroundColor:"#ffffff",
    },
    icon:{
        position:"absolute",
        right:10,
    },
    errorMessage:{
        fontSize:11,
        color:"#FF1B1B",
        paddingLeft:8,
    }
});