import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

// Import your components from the correct path
import Form from "@/components/form"; 
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button"; 

export default function Signup() {
    // 1. Define state for all four input fields (4つの入力フィールドの状態を定義)
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSignup = () => {
        // --- Input Validation Checks (入力検証チェック) ---
        if (!email || !emailConfirm || !password || !passwordConfirm) {
            Alert.alert('エラー', 'すべての項目を入力してください。');
            return;
        }
        if (email !== emailConfirm) {
            Alert.alert('エラー', 'メールアドレスが一致しません。');
            return;
        }
        if (password.length < 6) { 
            Alert.alert('エラー', 'パスワードは6文字以上で入力してください。');
            return;
        }
        if (password !== passwordConfirm) {
            Alert.alert('エラー', 'パスワードが一致しません。');
            return;
        }
        
        // 2. SUCCESS: This is where you would call your backend API for registration (登録のためのバックエンドAPI呼び出し)
        console.log('Signup data:', { email, password });
        Alert.alert('成功', '登録処理を開始します。'); 
    };

    return(
        // ScrollView is used to ensure the page is scrollable on smaller devices (画面が小さいデバイスでもスクロール可能にするためにScrollViewを使用)
        <ScrollView contentContainerStyle={styles.screenContainer}>
            
            {/* Header: 新規登録 */}
            <Text style={styles.headerText}>新規登録</Text>
            
            <View style={styles.formContainer}>
                {/* Email Field 1 (メールアドレス フィールド 1) */}
                <Form 
                    label="メールアドレス" 
                    formplaceholder="exsample@example.com"
                    value={email} 
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                {/* Email Confirmation Field 2 (メールアドレス 確認フィールド 2) */}
                <Form 
                    label="メールアドレス(確認)"
                    formplaceholder="exsample@example.com"
                    value={emailConfirm}
                    onChangeText={setEmailConfirm}
                    keyboardType="email-address"
                />

                {/* Password Field 1 (パスワード フィールド 1) */}
                <PasswordForm 
                    label="パスワード" 
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Password Confirmation Field 2 (パスワード 確認フィールド 2) */}
                <PasswordForm 
                    label="パスワード(確認)" 
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                />
                
                {/* The main action button (主要なアクションボタン) */}
                <Button 
                    buttonValue="ログイン" 
                    onPress={handleSignup} 
                />

                {/* Link back to the login page (ログインページへのリンク) */}
                {/* MODIFICATION: The container is now a View. Only the second Text is wrapped in TouchableOpacity. */}
                <View style={styles.linkContainer}>
                    <Text style={styles.baseLinkText}>アカウントをお持ちですか?</Text> 
                    {/* The link is ONLY applied to "新規登録" (リンクは「新規登録」にのみ適用されます) */}
                    <TouchableOpacity onPress={() => console.log('Navigate to Login Screen')}>
                        <Text style={styles.greenLinkText}>新規登録</Text>
                    </TouchableOpacity>
                </View>
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
        // Removed justifyContent: 'center' to stop vertical centering (垂直方向の中央揃えを停止するためにjustifyContent: 'center'を削除)
    },
    // Inner container to control horizontal padding for the form elements (フォーム要素の水平パディングを制御する内部コンテナ)
    formContainer: {
        // Horizontal padding to match the margin shown in the visual (ビジュアルに示されている余白と一致させるための水平パディング)
        paddingHorizontal: 35, 
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
        color: 'gray',
        fontSize: 14,
        marginRight: 4, // Small space between the gray and green text (灰色と緑のテキストの間に小さなスペース)
    },
    // Style for the "新規登録" link text, making it green (緑色のリンクテキストのスタイル。「新規登録」を緑色にする)
    greenLinkText: {
        color: '#72A888', // Green color (緑色)
        fontSize: 14,
        fontWeight: 'bold', // Optionally bolded for link emphasis (リンクの強調のためにオプションで太字に)
    }
});