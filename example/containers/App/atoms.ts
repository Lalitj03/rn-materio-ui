import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage } from 'jotai/utils';

export const themeModeAtom = atomWithStorage(
  'themeMode',
  'system' as 'system' | 'light' | 'dark',
  {
    getItem: async (key) => {
      const value = await AsyncStorage.getItem(key);
      return (value as 'system' | 'light' | 'dark') || 'system';
    },
    setItem: (key, value) => AsyncStorage.setItem(key, value),
    removeItem: (key) => AsyncStorage.removeItem(key),
  }
);

export const localeAtom = atomWithStorage(
  'locale',
  'en' as 'en' | 'hi' | 'es',
  {
    getItem: async (key) => {
      const value = await AsyncStorage.getItem(key);
      return value || 'en';
    },
    setItem: (key, value) => AsyncStorage.setItem(key, value),
    removeItem: (key) => AsyncStorage.removeItem(key),
  }
);
