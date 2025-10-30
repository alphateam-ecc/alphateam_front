import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Form from "@/components/form";
import PasswordForm from "@/components/passwordForm";

export default function Login(){
    return(
        <View>
            <Text>ログイン</Text>
            <Form label="メールアドレス"></Form>
            <PasswordForm label="パスワード"></PasswordForm>
            
        </View>
    )
}

const styles = StyleSheet.create({

});