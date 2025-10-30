import {useState,useEffect} from "react";
import { Text , View,StyleSheet } from "react-native";
import Gauge from "@/components/gauge";

import { VictoryTheme } from 'victory-core';

import { LinearGradient } from 'expo-linear-gradient';


export default function Dashboard(){
    return(
        <LinearGradient
            colors={["#9DC0B2","#89A3BA"]}
            style={styles.viewContent}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Gauge value={30} unit="°C" label="温度" max={60} />
                <Gauge value={90} unit="%" label="湿度" max={100} />
            </View>
            <View style={styles.co2param}>
                <Text>現在のCO2濃度</Text>
                <Text>810ppm</Text>
            </View>
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    viewContent:{
        paddingHorizontal:31,
        flex:1,
    },
    co2param:{
        backgroundColor:"#fff",

    }
});