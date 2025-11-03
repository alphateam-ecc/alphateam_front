import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Form from "@/components/form";
import PasswordForm from "@/components/passwordForm";
import Button from "@/components/button";
import { router } from "expo-router";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>ログイン</Text>
            <Form label="メールアドレス"></Form>
            <PasswordForm label="パスワード"></PasswordForm>
            <Button buttonValue="ログイン" onPress={() => router.replace('/(tabs)/_home')}></Button>
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