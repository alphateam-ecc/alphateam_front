import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Button from "@/components/button";
import SliderForm from "@/components/sliderForm";
import Form from "@/components/form";
export default function EnvironmentInput() {
    return(
        <View style={styles.contaier}>
            <Form label="タイトル" formplaceholder="タイトルを入力"></Form>
            <SliderForm label="温度" unit="℃" min={19} max={30}></SliderForm>
            <SliderForm label="湿度" unit="%" min ={0} max ={100}></SliderForm>
            <SliderForm label="目標二酸化炭素濃度" unit="ppm" min ={350} max ={700}></SliderForm>
            <Button buttonValue={"追加"}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    contaier:{
        paddingHorizontal:31,
    }
});