import { useState } from "react";
import { View,Text,StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import SliderForm from "@/components/sliderForm";
import Form from "@/components/form";
import useAPI from "@/hooks/useAPI";
export default function EnvironmentInput() {
    const router = useRouter();

    //各入力項目状態を定義
    const [title,setTitle] = useState("");
    const [titleError,setTitleError] = useState("");
    const [temperature,setTemperature] = useState(19);
    const [humidity,setHumidity] = useState(50);

    const {data,error,loading,fetchData} = useAPI<{message:string}>(
        "http://localhost:3000/Profiles",
        "POST"
    );

    //フォーム送信
    const handleSubmit = async() =>{
        //送信するデータを格納
        const formData =[
            title,
            temperature,
            humidity,
        ]

        if(errorValidation()){
            const result = await fetchData(formData);
            if(result){
                router.push("/")
            }
        }
    }

    //バリデーションチェック
    const errorValidation = () =>{
        if(!title){
            setTitleError("タイトルを入力してください");
            return false;
        }else if(title.length >= 20){
            setTitleError("タイトルは20文字以内で入力してください");
            return false;
        }else if(title){
            setTitleError("");
            return true;
        }
    }

    return(
        <View style={styles.container}>
            <Form label="タイトル" formplaceholder="タイトルを入力" onChangeText={setTitle} errorMessage={titleError}></Form>
            <SliderForm label="温度" unit="℃" min={19} max={30} value={temperature} onChange={setTemperature}></SliderForm>
            <SliderForm label="湿度" unit="%" min ={0} max ={100} value={humidity} onChange={setHumidity}></SliderForm>
            <Button buttonValue="設定を追加" onPress={handleSubmit}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:92,
        paddingHorizontal:31,
        backgroundColor:"#DCEADE",
    }
});