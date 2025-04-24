import theme from '../constants/theme';
import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export interface ThemeContextType {
  theme: {
    colorScheme: typeof theme.colorScheme.light | typeof theme.colorScheme.dark;
    typography: typeof theme.typography;
    borderRadius: typeof theme.borderRadius;
    spacing: typeof theme.spacing;
  };
}

// Create context with a default value
const defaultTheme = {
  theme: {
    colorScheme: theme.colorScheme.light,
    typography: theme.typography,
    borderRadius: theme.borderRadius,
    spacing: theme.spacing,
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
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  colorScheme = 'light',
  children,
}) => {
  const {
    colorScheme: themeColorScheme,
    typography,
    borderRadius,
    spacing,
  } = theme;

  // Directly use the provided colorScheme without internal state
  const currentColorScheme =
    colorScheme === 'dark' ? themeColorScheme.dark : themeColorScheme.light;

  const contextValue = {
    theme: {
      colorScheme: currentColorScheme,
      typography,
      borderRadius,
      spacing,
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
