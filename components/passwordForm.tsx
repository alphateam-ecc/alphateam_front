import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { View,Text,StyleSheet,TextInput } from "react-native";

interface passwordValue {
    label:string;
    placeholder?:string;
}




export default function PasswordForm(props:passwordValue){
    const [secure,setSecure] = useState(true);
    const [password ,setPassword] = useState('');
    const [error,setError] = useState('');

    const validationPassword = (text: string) =>{
        setPassword(text)
        if(!text){
            setError("パスワードを入力してください");
        }else if(text.length < 8){
            setError ("パスワードは8文字以上で入力してください");
        }else if(!/[A-Z]/.test(text)){
            setError("英数字を最低1文字以上入力してください");
        }else if(!/[0-9]/.test(text)){
            setError("パスワードを最低1文字以上入力してください");
        }else{
            setError('');
        }
    }
    return(
        <View style={styles.formContainer}>
             <Text>{props.label}</Text>
             <View style={styles.form}>
                <TextInput style={styles.input}
                secureTextEntry={secure} 
                ></TextInput>    
                    <Feather 
                    onPress={() =>setSecure(!secure) } 
                    name={secure ? "eye" : "eye-off"} 
                    size={24} 
                    value = {password}
                    onChangedText={validationPassword}
                    color="black" 
                    style={styles.icon}/>
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
        backgroundColor:"#ffffff",
    },
    icon:{
        position:"absolute",
        right:10,
    }
});