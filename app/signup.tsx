import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

// Import your components from the correct path
import Form from "@/components/form"; 
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button"; 
import { router } from "expo-router";

export default function Signup() {
    // すべての入力フィールドの状態を定義
    // const [username, setUsername] = useState(''); // ユーザネーム
    // const [email, setEmail] = useState(''); // メールアドレス
    // const [password, setPassword] = useState('');  //パスワード
    // const [passwordConfirm, setPasswordConfirm] = useState(''); //パスワード確認
    // const [error,setError] = useState("");
    
    const [formData,setFormData] = useState({username:"",email:"",password:"",passwordConfirm:""})
    const [error,setError] = useState({username:"",email:"",password:"",passwordConfirm:""});


    //バリデーション
    const errorValidation = () =>{
        const newError = {username:"",email:"",password:"",passwordConfirm:""};
        let isValid:boolean = true;
        if(!formData.username){
            newError.username = "ユーザネームが入力されていません";
            isValid = false;
        }if(/[ぁ-んァ-ヶ一-龥々]/.test(formData.passwordConfirm)){
            newError.username ="ユーザーネームに平仮名は入力できません"
            isValid = false;
        }else{
            newError.username ="";
            isValid = true;
        }

        if(!formData.passwordConfirm){
            newError.passwordConfirm = "パスワードが入力されていません";
            isValid = false;
        }else if(formData.passwordConfirm.length < 8){
            newError.passwordConfirm ="パスワードは8文字以上で入力してください";
            isValid = false;
        }else if(!/[A-Z]/.test(formData.passwordConfirm)){
            newError.passwordConfirm ="アルファベットを最低1文字以上入力してください";
            isValid = false;
        }else if(!/[0-9]/.test(formData.passwordConfirm)){
            newError.passwordConfirm = "数字を最低1文字以上入力してください";
            isValid = false;
        }else if(formData.password != formData.passwordConfirm ){
            newError.passwordConfirm = "パスワードが異なります";
            isValid = false;
        }else{
            newError.passwordConfirm = "";
            isValid = true;
        }

        if(formData.password != formData.passwordConfirm ){
            newError.passwordConfirm = "パスワードが異なります";
            isValid = false;
        }else{
            newError.passwordConfirm = "";
            isValid = true;
        }

        setError(newError);
        return isValid;
    }

    return(
        // 画面がスクロール可能であることを保証するためにScrollViewを使用)
        <ScrollView contentContainerStyle={styles.screenContainer}>
            
            {/* Header: 新規登録 */}
            <Text style={styles.headerText}>新規登録</Text>
            
            <View style={styles.formContainer}>
                
                {/* 1. Username Field (ユーザネーム フィールド) - Functional */}
                <Form 
                    label="ユーザネーム" 
                    onChangeText={(text) => setFormData({...formData,username:text})}
                    errorMessage={error.username}
                />

                {/* 2. Email Field (メールアドレス フィールド) - Functional */}
                <Form 
                    label="メールアドレス" 
                    formplaceholder="exsample@example.com"
                    onChangeText={(text) => setFormData({...formData,email:text})}
                    errorMessage={error.email}
                />

                {/* 3. Password Field (パスワード フィールド) - Functional */}
                <PasswordForm 
                    label="パスワード" 
                    onChangeText={(text)=>setFormData({...formData,password:text})}
                    errorMessage={error.password}
                />

                {/* 4. Password Confirmation Field (パスワード 確認フィールド) - Functional */}
                <PasswordForm 
                    label="パスワード(確認)" 
                    onChangeText={(text) => setFormData({...formData,passwordConfirm:text})}
                    errorMessage={error.passwordConfirm}
                />
                
                {/* The main action button (主要なアクションボタン) - Functional */}
                <Button 
                    buttonValue="新規登録"
                    onPress={() => router.replace("/login")} 
                    
                />

                {/* Link back to the login page (ログインページへのリンク) - Styled and Functional */}
                <Text style={styles.baseLinkText}>アカウントをお持ちですか?<Text style={styles.greenLinkText} onPress={() => router.replace("/login")}>新規登録</Text></Text> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // Full screen container with the light green background (薄い緑色の背景を持つ全画面コンテナ)
    screenContainer: {
        // Color based on the visual's background (ビジュアルの背景に基づく色)
        backgroundColor: '#E6F0E7', 
        // Ensures it fills the screen and allows scrolling (画面全体を埋め、スクロールを可能にする)
        flex: 1, 
        // Vertical padding to position content near the top (コンテンツを上部に近く配置するための垂直パディング)
        paddingVertical: 92, 
    },
    // Inner container to control horizontal padding for the form elements (フォーム要素の水平パディングを制御する内部コンテナ)
    formContainer: {
        // Horizontal padding to match the margin shown in the visual (ビジュアルに示されている余白と一致させるための水平パディング)
        paddingHorizontal: 30, 
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        // Color based on the visual's header color (ビジュアルのヘッダー色に基づく色)
        color: '#72A888', 
        textAlign: 'center',
        // Space below the header (ヘッダーの下のスペース)
        marginBottom: 40,
    },
    // Container style for the link text to arrange them horizontally (リンクテキストを水平に配置するためのコンテナスタイル)
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20, // Add spacing above the link (リンクの上に間隔を追加)
    },
    // Base style for the preceding gray text (先行する灰色のテキストの基本スタイル)
    baseLinkText: {
        textAlign:"center",
        paddingTop:16,
        color: '#1F1F1F',
        fontSize: 14,
        marginRight: 4, // Small space between the gray and green text (灰色と緑のテキストの間に小さなスペース)
    },
    // Style for the "新規登録" link text, making it green (緑色のリンクテキストのスタイル。「新規登録」を緑色にする)
    greenLinkText: {
        color: '#72A888', // Green color (緑色)
    }
});