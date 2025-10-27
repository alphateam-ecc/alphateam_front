import React, { useState } from "react"
import { View,Text,StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"



interface sliderValue {
    label:string;
    unit:string;
    min:number;
    max:number;
}
export default function SliderForm({label,unit,min,max}:sliderValue){
    const [value,setValue] = useState(min); //初期値
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.content}>
                <Text style={styles.statusValue}>{Math.round(value)}{unit}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={min}
                    maximumValue={max}
                    step={1}
                    minimumTrackTintColor="#81A88B"
                    maximumTrackTintColor="#D9D9D9"
                    thumbTintColor="#D9D9D9"
                    value = {value}
                    onValueChange={setValue}

                >
                </Slider>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingBottom:20,
    },
    label:{
        color:"#81A88B",
        fontSize:16,
        fontWeight:"bold",
        paddingBottom:11,
        paddingLeft:8,
    },
    content:{
        backgroundColor:"#FFF",
        paddingHorizontal:12,
        paddingVertical:11,
        borderRadius:8,
    },
    slider:{
        height:14,
    },
    statusValue:{
        color:"#81A88B",
        fontSize:36,
        fontWeight:"bold",
        paddingLeft:10,
        paddingBottom:9,
    }
})