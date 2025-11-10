import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

// Import your components from the correct path
import Form from "@/components/form"; 
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button"; 
import { router } from "expo-router";

export default function Signup() {
    // すべての入力フィールドの状態を定義
    const [username, setUsername] = useState(''); // ユーザネーム
    const [email, setEmail] = useState(''); // メールアドレス
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error,setError] = useState("");
    
    //バリデーション
    const errorValidation = () =>{
        if(!username){
            setError("ユーザーネームが入力されていません");
            false;
        }else{
            setError("このユーザーネームは既に使用されています");
            false;
        }

        
    }

    // Removed all validation logic. This function now just logs data.
    const handleSignup = () => {
        // --- Placeholder for SUCCESS: API call goes here ---
        console.log('Signup data:', { username, email, password });
        Alert.alert('確認', 'データ送信をシミュレーションします。'); 
    };

    return(
        // 画面がスクロール可能であることを保証するためにScrollViewを使用)
        <ScrollView contentContainerStyle={styles.screenContainer}>
            
            {/* Header: 新規登録 */}
            <Text style={styles.headerText}>新規登録</Text>
            
            <View style={styles.formContainer}>
                
                {/* 1. Username Field (ユーザネーム フィールド) - Functional */}
                <Form 
                    label="ユーザネーム" 
                />

                {/* 2. Email Field (メールアドレス フィールド) - Functional */}
                <Form 
                    label="メールアドレス" 
                    formplaceholder="exsample@example.com"
                />

                {/* 3. Password Field (パスワード フィールド) - Functional */}
                <PasswordForm 
                    label="パスワード" 
                />

                {/* 4. Password Confirmation Field (パスワード 確認フィールド) - Functional */}
                <PasswordForm 
                    label="パスワード(確認)" 
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