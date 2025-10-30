import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { View,Text,StyleSheet,TextInput } from "react-native";

interface passwordValue {
    label:string;
    placeholder?:string;
}


export default function PasswordForm(props:passwordValue){
    const [secure,setSecure] = useState(true);
    return(
        <View style={styles.formContainer}>
             <Text>{props.label}</Text>
             <View style={styles.form}>
                <TextInput style={styles.input}
                secureTextEntry={secure} 
                ></TextInput>    
                    <Feather  onPress={() =>setSecure(!secure) } name={secure ? "eye" : "eye-off"} size={24} color="black" style={styles.icon}/>
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
    input:{
        width:"100%",
        position:"relative",
        paddingVertical:10,
        paddingLeft:10,
        paddingRight:36,
        borderWidth:1,
        borderColor:"1f1f1f",
        borderRadius:8,
    },
    icon:{
        position:"absolute",
        right:10,
    }
});