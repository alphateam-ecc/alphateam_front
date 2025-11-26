import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/button';
import EnvPreset from '@/components/envpreset';

export default function Setting() {
  const router = useRouter();
  return (
    <ScrollView style = {styles.container}>
        <ScrollView>
          <EnvPreset title="赤ちゃん" icon="child-care" ></EnvPreset>
          <EnvPreset title="省エネモード" icon="eco" ></EnvPreset>
          <EnvPreset title="お休み" icon="bedtime" ></EnvPreset>
          <EnvPreset title="赤ちゃん" icon="child-care" ></EnvPreset>
        </ScrollView>
        <Button buttonValue='新しい設定を追加' onPress={() => router.push('/environmentInput')}></Button>
    </ScrollView>
    
  );
}

const styles  = StyleSheet.create({
    container: {
    paddingHorizontal:30,
    paddingVertical:92,
    flex: 1,            // 画面いっぱいに広げる
    backgroundColor: '#E9F4EA',
  },
})
