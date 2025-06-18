// import theme from '@/constants/frozen';
import theme from '@/constants/theme';
import { themes } from '@/constants/themes';
import { selectedThemeAtom, themeModeAtom } from '@/containers/App/atoms';
import Feather from '@expo/vector-icons/Feather';
import { ThemeProvider } from '@materio/rn-materio-ui';
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
import { useCallback, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
} as const;

// Font configuration
const FONT_CONFIG = {
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  NotoSansLight: require('../assets/fonts/NotoSans-Light.ttf'),
  NotoSansRegular: require('../assets/fonts/NotoSans-Regular.ttf'),
  NotoSansMedium: require('../assets/fonts/NotoSans-Medium.ttf'),
  NotoSansSemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
  NotoSansBold: require('../assets/fonts/NotoSans-Bold.ttf'),
  ...Feather.font,
} as const;

SplashScreen.preventAutoHideAsync();

function useThemeSelection() {
  const selectedTheme = useAtomValue(selectedThemeAtom);
  const themeMode = useAtomValue(themeModeAtom);
  const systemColorScheme = useColorScheme();

  const currentTheme = useMemo(() => {
    return themes[selectedTheme] || theme;
  }, [selectedTheme]);

  const colorMode = useMemo(() => {
    return themeMode === 'system' ? systemColorScheme || 'light' : themeMode;
  }, [themeMode, systemColorScheme]);

  return { currentTheme, colorMode };
}

function useAppInitialization() {
  const [fontsLoaded, fontError] = useFonts(FONT_CONFIG);

  const handleFontError = useCallback(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  const hideSplashScreen = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(handleFontError, [handleFontError]);
  useEffect(hideSplashScreen, [hideSplashScreen]);

  return { isReady: fontsLoaded };
}

export default function RootLayout() {
  const { isReady } = useAppInitialization();
  const { currentTheme, colorMode } = useThemeSelection();

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider colorScheme={colorMode} theme={currentTheme}>
        <RNThemeProvider
          value={colorMode === 'dark' ? DarkTheme : DefaultTheme}
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
