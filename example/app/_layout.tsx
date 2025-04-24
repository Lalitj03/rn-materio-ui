import { themeModeAtom } from '@/containers/App/atoms';
import Feather from '@expo/vector-icons/Feather';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { ThemeProvider } from 'rn-materio-ui';
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NotoSansLight: require('../assets/fonts/NotoSans-Light.ttf'),
    NotoSansRegular: require('../assets/fonts/NotoSans-Regular.ttf'),
    NotoSansMedium: require('../assets/fonts/NotoSans-Medium.ttf'),
    NotoSansSemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansBold: require('../assets/fonts/NotoSans-Bold.ttf'),
    ...Feather.font,
  });
  const colorScheme = useColorScheme() || 'light';
  const themeMode = useAtomValue(themeModeAtom);
  const currentMode = themeMode === 'system' ? colorScheme : themeMode;

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider colorScheme={currentMode}>
        <RNThemeProvider
          value={currentMode === 'dark' ? DarkTheme : DefaultTheme}
        >
          <StatusBar translucent={true} style="auto" />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </RNThemeProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
