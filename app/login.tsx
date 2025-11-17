import { useState } from "react";
import { View,Text,StyleSheet, Alert } from "react-native";

import Form from "@/components/form";
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button";
import { router } from "expo-router";

export default function Login(){
    const [mail,setMail] = useState("");
    const [errorMail,setMailError] = useState("");
    const [password ,setPassword] = useState('');
    const [errorpassword,setPasswordError] = useState('');



    const errorValidation = () =>{
        let isValid:boolean = true;
        if(!mail){
            setMailError("メールアドレスが入力されていません");
            isValid = false;
        }else{
            setMailError("");
        }

        if(!password){
            setPasswordError("パスワードを入力してください");
            isValid = false;
        }else{
            setPasswordError("");
        }
        return isValid
    }

    const handleSubmit  = () =>{
        if(!errorValidation()){
            return;
        }

        const formData =[
            mail,
            password
        ]
        Alert.alert(JSON.stringify(formData,null,2));
        router.replace('/');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>ログイン</Text>
            <Form label="メールアドレス" onChangeText={setMail} errorMessage={errorMail}></Form>
            <PasswordForm label="パスワード" onChangeText={setPassword} errorMessage={errorpassword}></PasswordForm>
            <Button buttonValue="ログイン" onPress={handleSubmit}></Button>
            <Text style={styles.baseLinkText}>アカウントをお持ちでないですか？<Text style={styles.greenLinkText} onPress={() => router.replace("/signup")}>新規登録</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:32,
        fontWeight:"bold",
        paddingBottom:48,
        color:"#81A88B",
        textAlign:"center"

    },
    container:{
        backgroundColor:"#DCEADE",
        paddingHorizontal:30,
        paddingVertical:92,
        flex:1,
    },
    baseLinkText:{
        color: '#1F1F1F',
        paddingTop:16,
        textAlign:"center",
        fontSize:14,
        marginRight: 4
    },
    greenLinkText:{
        color:"#81A88B",
    }

});