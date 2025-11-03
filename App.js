import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfigScreen from './app/(tabs)/_config'
import HomeScreen from './app/(tabs)/_home'
import EnvInputScreen from './app/environmentInput'


const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="Home" component ={HomeScreen}></Stack.Screen>
                <Stack.Screen name ="Config" component ={ConfigScreen}></Stack.Screen>
                <Stack.Screen name ="EnvInput" component ={EnvInputScreen} option={{title:"新しい環境設定"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}