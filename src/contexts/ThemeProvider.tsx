import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';
import theme from 'src/constants/theme';
import type {
  BorderRadius,
  BorderWidths,
  ColorScheme,
  Spacing,
  Theme,
  Typography,
} from 'src/utils/types/theme';

export interface ThemeContextType {
  theme: {
    colorScheme: ColorScheme['light'] | ColorScheme['dark'];
    typography: Typography;
    spacing: Spacing;
    borderRadius: BorderRadius;
    borderWidths: BorderWidths;
  };
}

// Create context with a default value
const defaultTheme = {
  theme: {
    colorScheme: theme.colorScheme.light,
    typography: theme.typography,
    borderRadius: theme.borderRadius,
    spacing: theme.spacing,
    borderWidths: theme.borderWidths,
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export interface ThemeProviderProps {
  /**
   * The color scheme to use for the theme.
   * - 'light': Use light theme (default)
   * - 'dark': Use dark theme
   * If not provided, defaults to 'light'
   */
  colorScheme?: 'light' | 'dark';
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  colorScheme = 'light',
  theme: inheritedTheme,
  children,
}) => {
  const {
    colorScheme: themeColorScheme,
    typography,
    borderRadius,
    spacing,
    borderWidths,
  } = inheritedTheme;

  // Directly use the provided colorScheme without internal state
  const currentColorScheme =
    colorScheme === 'dark' ? themeColorScheme.dark : themeColorScheme.light;

  const contextValue = {
    theme: {
      colorScheme: currentColorScheme,
      typography,
      borderRadius,
      spacing,
      borderWidths,
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context.theme;
};
