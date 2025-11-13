import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack , useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name = "login" options={{headerShown: false}} />
        <Stack.Screen name = "signup" options={{headerShown: false}} />
        <Stack.Screen
  name="environmentInput"
  options={{
    title: '環境登録',
    headerTransparent: true,
    headerBackTitle: "",
    headerTitleStyle: { color: '#4b6043', fontWeight: 'bold' },
    headerLeft: () => {
      const router = useRouter();
      return (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#4b6043" />
        </TouchableOpacity>
      );
    },
  }}
/>
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
