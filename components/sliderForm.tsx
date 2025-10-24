import React from "react"
import { View,Text,StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"


// interface formValue {
//     label:string;
//     unit:string;
//     min:number;
//     max:number;

// }
export default function Sliderform(){
    return(
        <View>
            <Text style={styles.label}>湿度</Text>
            <View style={styles.content}>
                <Text style={styles.statusValue}>75%</Text>
                <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#81A88B"
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor="#D9D9D9"

                >
                </Slider>
            </View>

            
        </View>
    )
}


const styles = StyleSheet.create({
    label:{
        color:"#81A88B",
        fontSize:14,
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