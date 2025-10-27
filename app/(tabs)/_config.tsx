import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Gauge from '@/components/gauge';
import Sliderform from '@/components/sliderForm';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Setting() {
  return (
    <View style = {styles.container}>

        <View style = {styles.setting}>
            <View style = {styles.iconContainer}>
                <MaterialIcons name="eco" size={24} color="#81A88B"  />
            </View>
            <Text style = {styles.settingText}>赤ちゃん</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Gauge value={30} unit="°C" label="温度" max={60} />
          <Gauge value={90} unit="%" label="湿度" max={100} />
        </View>
        <Sliderform
          label='温度'
          unit='℃'
          min={17}
          max={35}
        ></Sliderform>
    </View>
  );
}

const styles  = StyleSheet.create({
    container: {
    paddingHorizontal:30,
    flex: 1,            // 画面いっぱいに広げる
    backgroundColor: '#9DC0B2',
  },
  setting: {
    flexDirection:'row',
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius:16,
    backgroundColor:'#FFFFFF',
  },
  settingText:{
    fontSize:24,
  },
  iconContainer :{
    backgroundColor:'#E9F4EA',
    padding:8,
    borderRadius:90,
    marginRight:8,
  }
})

