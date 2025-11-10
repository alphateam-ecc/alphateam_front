import {useState,useEffect} from "react";
import { Text , View,StyleSheet } from "react-native";
import Gauge from "@/components/gauge";
import Button from "@/components/button";
import { LinearGradient } from 'expo-linear-gradient';
import Chart from "@/components/chart";
import { router } from "expo-router";


export default function Dashboard(){
    return(
        <LinearGradient
            colors={["#9DC0B2","#89A3BA"]}
            style={styles.viewContent}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Gauge value={30} unit="°C" label="温度" max={40} />
                <Gauge value={90} unit="%" label="湿度" max={100} />
            </View>
            <View style={styles.paramWrapper}>
                <View style={styles.co2param}>
                    <Text style={{color:"#FFFFFF", fontSize:15}}>現在のCO2濃度</Text>
                    <Text style={{color:"#FFFFFF",fontSize:24,fontWeight:"bold", }}>810ppm</Text>
                </View>
            </View>
            <Button 
                buttonValue="設定を変更する"
                onPress={() => router.push("/(tabs)/_config")}    
            ></Button>
            <Chart ></Chart>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    viewContent:{
        paddingVertical:92,
        paddingHorizontal:16,
        flex:1,
    },
    paramWrapper:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    co2param:{
        textAlign:"center",
        width:160,
        backgroundColor:"#ABCABA",
        paddingHorizontal:24,
        paddingVertical:8,
        borderRadius:16,
        color:"#FFFFFF",
        
    }
});