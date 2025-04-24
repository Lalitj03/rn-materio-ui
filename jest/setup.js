/* eslint-env jest */
// Mock for react-native modules
import * as jestModule from '@jest/globals';
const { jest } = jestModule;

jest.mock('react-native', () => {
  return {
    // Components
    View: 'View',
    Text: 'Text',
    TouchableOpacity: 'TouchableOpacity',
    Pressable: 'Pressable',
    Platform: {
      OS: 'ios',
      select: jest.fn((obj) => obj.ios),
      Version: 42,
    },
    // APIs
    StyleSheet: {
      create: (styles) => styles,
      compose: (style1, style2) => [style1, style2],
      flatten: jest.fn((style) => style),
      hairlineWidth: 1,
    },
    Dimensions: {
      get: jest.fn(() => ({ width: 375, height: 812 })),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    Animated: {
      View: 'Animated.View',
      Text: 'Animated.Text',
      createAnimatedComponent: jest.fn((comp) => `Animated.${comp}`),
      timing: jest.fn(() => ({
        start: jest.fn((cb) => cb && cb({ finished: true })),
      })),
      spring: jest.fn(() => ({
        start: jest.fn((cb) => cb && cb({ finished: true })),
      })),
      Value: jest.fn(() => ({
        setValue: jest.fn(),
        interpolate: jest.fn(() => ({
          interpolate: jest.fn(),
        })),
      })),
    },
    // Add other necessary react-native APIs here
  };
});

// Mock ThemeContext used in components
jest.mock('../src/contexts/ThemeProvider', () => {
  const mockTheme = {
    colorScheme: {
      palette: {
        neutral: {
          high: { main: '#000', contrast: '#fff' },
          low: { main: '#ccc', contrast: '#333' },
        },
        primary: {
          high: { main: '#007bff', contrast: '#fff' },
          low: { main: '#cce5ff', contrast: '#004085' },
        },
      },
    },
  };

  return {
    ThemeProvider: ({ children }) => children,
    useTheme: jest.fn(() => mockTheme),
    ThemeContextType: {},
  };
});

// Mock for react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  // We don't actually use this variable, but we're keeping the import pattern
  // eslint-disable-next-line no-unused-vars
  const View = require('react-native').View;

  return {
    RectButton: 'RectButton',
    BaseButton: 'BaseButton',
    TouchableOpacity: 'GH.TouchableOpacity',
    ScrollView: 'GH.ScrollView',
    State: {},
    PanGestureHandler: 'PanGestureHandler',
  };
});

// Mock for react-native-reanimated
jest.mock('react-native-reanimated', () => {
  return {
    default: {
      View: 'Reanimated.View',
      createAnimatedComponent: jest.fn((comp) => `Reanimated.${comp}`),
    },
    useSharedValue: jest.fn((initial) => ({ value: initial })),
    useDerivedValue: jest.fn((fn) => ({ value: fn() })),
    useAnimatedStyle: jest.fn(() => ({})),
    withTiming: jest.fn((toValue) => toValue),
    withSpring: jest.fn((toValue) => toValue),
    withDelay: jest.fn((_, animation) => animation),
    withSequence: jest.fn((...animations) => animations[0]),
    withRepeat: jest.fn((animation) => animation),
    FadeIn: { duration: jest.fn(() => ({ randomDelay: jest.fn(() => ({})) })) },
    FadeOut: { duration: jest.fn(() => ({})) },
    Layout: {
      springify: jest.fn(() => ({})),
      easing: jest.fn(() => ({})),
    },
  };
});

// Mock safe area context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(() => ({ top: 0, right: 0, bottom: 0, left: 0 })),
  SafeAreaProvider: ({ children }) => children,
}));
