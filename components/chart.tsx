import {useState ,useEffect} from "react"
import { View, Dimensions ,StyleSheet,ActivityIndicator } from "react-native"
import { LineChart } from "react-native-chart-kit"



export default function Chart() {
    const [temperatureData,setTemperatureData] = useState<number[]>([]);
    const [humidityData,setHumidityData] = useState<number[]>([]);
    const [labels,setLabels] = useState<string[]>([]);

    useEffect(() => {
        const labelArray = [];  //ラベル配列
        const tempArray = [];   //温度配列
        const humidArray = [];  //湿度配列

        for(let i = 0 ; i <30; i++){
            const minute = i * 2;
            minute %10 == 0 ? labelArray.push(`${minute}`) : labelArray.push("");
            tempArray.push(19 + Math.random() * 11);
            humidArray.push(50 + Math.random() * 50);
        }
        setTemperatureData(tempArray);
        setHumidityData(humidArray);
        setLabels(labelArray);
    },[]);

    if (temperatureData.length === 0 || humidityData.length === 0 || labels.length === 0) {
        return (
            <View style={[styles.container, {height: 250, justifyContent: 'center', alignItems: 'center'}]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <LineChart
                data={{
                    labels: labels,
                    datasets:[
                        {
                            data:temperatureData,
                            color: () =>"#539798",
                            strokeWidth:1
                        },
                         {
                            data:humidityData,
                            color: () =>"#985353ff",
                            strokeWidth:1
                        },
                        
                    ],
                    legend:["温度(℃)","湿度(%)"]
                }}
                width={Dimensions.get("window").width -32}
                height={250}
                chartConfig={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    backgroundGradientFrom: "rgba(255, 255, 255, 0.5)",
                    backgroundGradientTo: "rgba(255, 255, 255, 0.5)",
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForDots: {r: "3",strokeWidth: "1",},
                }} 
                style={{
                  paddingVertical:22,
                  borderRadius:8,
                }}
                fromZero={true}
            />
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
  },
});