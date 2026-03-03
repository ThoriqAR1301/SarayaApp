import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="main" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="survey1" options={{ headerShown: false }} />
        <Stack.Screen name="survey2" options={{ headerShown: false }} />
        <Stack.Screen name="survey3" options={{ headerShown: false }} />
        <Stack.Screen name="survey4" options={{ headerShown: false }} />
        <Stack.Screen name="survey5" options={{ headerShown: false }} />
        <Stack.Screen name="congrats" options={{ headerShown: false }} />
        <Stack.Screen name= "notif" options={{ headerShown: false }} />
        <Stack.Screen name="exless" options={{ headerShown: false }} />
        <Stack.Screen name="materi" options={{ headerShown: false }} />
        <Stack.Screen name="quiz1" options={{ headerShown: false }} />
        <Stack.Screen name="false" options={{ headerShown: false }} />
        <Stack.Screen name="correct" options={{ headerShown: false }} />
        <Stack.Screen name="congratsquiz" options={{ headerShown: false }} />
        <Stack.Screen name="celve" options={{ headerShown: false }} />
        <Stack.Screen name="track" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
