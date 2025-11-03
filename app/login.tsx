import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Form from "@/components/form";
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button";
import { router } from "expo-router";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text>ログイン</Text>
            <Form label="メールアドレス"></Form>
            <PasswordForm label="パスワード"></PasswordForm>
            <Button buttonValue="ログイン" onPress={() => router.push('/(tabs)/_home')}></Button>
            <Text>アカウントをお持ちでないですか？<Text>新規登録</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"#DCEADE",
        paddingHorizontal:30,
        paddingVertical:92,
        flex:1,
    }
});