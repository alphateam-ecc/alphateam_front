import { useState } from "react";
import { router } from "expo-router";
import { View,Text,StyleSheet, Alert } from "react-native";
import axios, { isAxiosError }  from "axios";


import Form from "@/components/form";
import PasswordForm from "@/components/passwordInput";
import Button from "@/components/button";


//レスポンスの型定義
interface LoginResponse {
    message :string;
    token:string;

}
// エラーレスポンスの型定義
interface errorResponse{
    message:string;
}



export default function Login(){
    const [mail,setMail] = useState("");
    const [errorMail,setMailError] = useState("");
    const [password ,setPassword] = useState('');
    const [errorpassword,setPasswordError] = useState('');
    const [error,setError] = useState<string  | null>(null);



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

    const handlLoginn = async () =>{

        try{
             if(!errorValidation()){
                return;
            }
            const response = await axios.post('http://localhost:3000/app/login',{
                email:mail,
                password:password
            });

            if(response.data.token){
                localStorage.setItem("accessToken",response.data.token);
            }
            router.replace('/');

         }catch(err:unknown){
            if(isAxiosError(err) && err.response?.data){
                const errorData = err.response.data as errorResponse
                setError(errorData.message || "ログインに失敗しました");
            }else{
                setError("ログイン中にエラーが発生しました")
            }
         }
       

    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>ログイン</Text>
            <Form label="メールアドレス" onChangeText={setMail} errorMessage={errorMail}></Form>
            <PasswordForm label="パスワード" onChangeText={setPassword} errorMessage={errorpassword}></PasswordForm>
            <Button buttonValue="ログイン" onPress={handlLoginn}></Button>
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