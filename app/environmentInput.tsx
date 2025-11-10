import {useState} from "react";
import { View,Text,StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import SliderForm from "@/components/sliderForm";
import Form from "@/components/form";
export default function EnvironmentInput() {
    const router = useRouter();

    //各入力項目状態を定義
    const [title,setTitle] = useState("");
    const [titleError,setTitleError] = useState("");
    const [temperature,setTemperature] = useState(19);
    const [humidity,setHumidity] = useState(50);
    const [co2,setCo2] = useState(350);

    const handleSubmit = () =>{
        const formData =[
            title,
            temperature,
            humidity,
            co2
        ]

        //debug
        Alert.alert("送信データ",JSON.stringify(formData,null,2));

        //リダイレクト
        router.push('/(tabs)/_home');
    }


    //バリデーションチェック
    const validateTitle = () =>{
        if(!title){
            setTitleError("タイトルを入力してください");
        }else if(title.length <= 20){
            setTitle("タイトルは20文字以内で入力してください")
        }
    }

    

    return(
        <View style={styles.container}>
            <Form label="タイトル" formplaceholder="タイトルを入力" onChangeText={setTitle}></Form>
            <SliderForm label="温度" unit="℃" min={19} max={30} value={temperature} onChange={setTemperature}></SliderForm>
            <SliderForm label="湿度" unit="%" min ={0} max ={100} value={humidity} onChange={setHumidity}></SliderForm>
            <SliderForm label="目標二酸化炭素濃度" unit="ppm" min ={350} max ={700} value={co2} onChange={setCo2}></SliderForm>
            <Button buttonValue="設定を追加" onPress={handleSubmit}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:31,
        backgroundColor:"#DCEADE",
    }
});