# Materio UI Documentation

<p align="center">
  <img src="assets/icon.png" alt="Materio UI Logo" width="200" height="200">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@materio/rn-materio-ui"><img src="https://img.shields.io/npm/v/@materio/rn-materio-ui" alt="npm version"></a>
  <a href="../LICENSE"><img src="https://img.shields.io/npm/l/@materio/rn-materio-ui" alt="license"></a>
  <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React%20Native-0.65+-blue" alt="React Native"></a>
</p>

<p align="center">
  A comprehensive, customizable UI component library for React Native with Material Design influences.
</p>

---

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Core Concepts](#core-concepts)
  - [Theme System](#theme-system)
  - [Color System](#color-system)
  - [Typography](#typography-system)
  - [Spacing & Layout](#spacing--layout)
- [Exports and Utilities](#exports-and-utilities)
  - [Available Exports](#available-exports)
  - [Tailwind Colors](#tailwind-colors)
  - [Utility Functions](#utility-functions)
    - [createPalette](#createpalette)
    - [extendTheme](#extendtheme)
    - [invertTone](#inverttone)
  - [TypeScript Support](#typescript-support)
- [Components](#components)
  - [Core Components](#core-components)
  - [Form Components](#form-components)
  - [Layout Components](#layout-components)
  - [Overlay Components](#overlay-components)
- [Advanced Usage](#advanced-usage)
  - [Customizing Themes](#customizing-themes)
    - [Quick Theme Customization with Utilities](#quick-theme-customization-with-utilities)
    - [Advanced Palette Customization](#advanced-palette-customization)
    - [Partial Theme Extensions](#partial-theme-extensions)
    - [Creating Custom Themes from Scratch](#creating-custom-themes-from-scratch)
    - [Practical Theme Examples](#practical-theme-examples)
    - [Dynamic Theme Switching](#dynamic-theme-switching)
    - [Enhanced Theme Integration](#enhanced-theme-integration)
    - [Theme Customization Best Practices](#theme-customization-best-practices)
  - [Responsive Design](#responsive-design)
  - [Accessibility](#accessibility)
- [API Reference](#api-reference)
- [Theme Management Best Practices](#theme-management-best-practices)
  - [State Management for Themes](#state-management-for-themes)
  - [Theme Performance Optimization](#theme-performance-optimization)
  - [Testing Themed Components](#testing-themed-components)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Materio UI is a cross-platform UI component library for React Native applications. It provides a set of accessible, reusable, and customizable components that follow Material Design principles while adding unique styling and flexibility.

**Key Features:**

- 📱 **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- 🎨 **Fully Customizable Themes**: Complete theme customization support with a default theme included
- 🌙 **Dark/Light Mode**: Automatic system theme detection with manual override
- 🧩 **Component-Based**: Composable components for consistent UIs
- ⚡ **Performant**: Optimized for React Native apps with efficient re-rendering
- 🔍 **Accessible**: Built with accessibility in mind
- 📦 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎯 **Tailwind Integration**: Built-in Tailwind CSS colors for easy customization

---

## Installation

### Prerequisites

- React Native project (version 0.65 or higher)
- Yarn or npm

### Installing the Package

```sh
# Using npm
npm install @materio/rn-materio-ui

# Using yarn
yarn add @materio/rn-materio-ui

# Using pnpm
pnpm add @materio/rn-materio-ui
```

### Required Dependencies

Materio UI requires the following peer dependencies:

```sh
yarn add react-native-gesture-handler react-native-reanimated react-native-safe-area-context
```

### Font Setup (Optional)

For the best experience, we recommend installing the Noto Sans font family:

```sh
# Create a fonts directory if it doesn't exist
mkdir -p assets/fonts

# Download Noto Sans fonts
# Place the following files in your assets/fonts directory:
# - NotoSans-Light.ttf
# - NotoSans-Regular.ttf
# - NotoSans-Medium.ttf
# - NotoSans-SemiBold.ttf
# - NotoSans-Bold.ttf
```

Then, load the fonts in your application:

```jsx
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    NotoSansLight: require('./assets/fonts/NotoSans-Light.ttf'),
    NotoSansRegular: require('./assets/fonts/NotoSans-Regular.ttf'),
    NotoSansMedium: require('./assets/fonts/NotoSans-Medium.ttf'),
    NotoSansSemiBold: require('./assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansBold: require('./assets/fonts/NotoSans-Bold.ttf'),
  });

  if (!loaded) {
    return null; // Or a loading screen
  }

  // Your app content
}
```

---

## Getting Started

### Basic Setup

Wrap your application with the `ThemeProvider` to enable theming support:

```jsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ThemeProvider,
  Button,
  Typography,
  theme, // Default theme
} from '@materio/rn-materio-ui';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider colorScheme="light" theme={theme}>
        <Typography variant="title" size="large" color="primary">
          Hello World
        </Typography>
        <Button color="primary">Click Me</Button>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
```

### Theme Switching

You can implement theme switching between light and dark modes, and even switch between different theme styles:

```jsx
import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import {
  ThemeProvider,
  Button,
  Typography,
  theme as defaultTheme, // Default theme
  twcolors,
} from '@materio/rn-materio-ui';

// Example of creating custom themes (you can import pre-made ones too)
const customTheme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: twcolors.purple[600], contrast: twcolors.white },
          high: { main: twcolors.purple[800], contrast: twcolors.purple[50] },
          low: { main: twcolors.purple[100], contrast: twcolors.purple[900] },
        },
        // ... other colors
      },
      surface: { main: twcolors.white, contrast: twcolors.black },
      typography: {
        primary: twcolors.black,
        secondary: twcolors.gray[600],
        disabled: twcolors.gray[400],
      },
    },
    dark: {
      palette: {
        primary: {
          base: { main: twcolors.purple[400], contrast: twcolors.black },
          high: { main: twcolors.purple[200], contrast: twcolors.purple[900] },
          low: { main: twcolors.purple[800], contrast: twcolors.purple[100] },
        },
        // ... other colors
      },
      surface: { main: twcolors.gray[900], contrast: twcolors.white },
      typography: {
        primary: twcolors.white,
        secondary: twcolors.gray[300],
        disabled: twcolors.gray[500],
      },
    },
  },
  typography: {
    /* typography config */
  },
  spacing: {
    /* spacing config */
  },
  borderRadius: {
    /* border radius config */
  },
  // ... other theme properties
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = {
    default: defaultTheme,
    custom: customTheme,
  };

  return (
    <ThemeProvider
      colorScheme={isDarkMode ? 'dark' : 'light'}
      theme={themes[selectedTheme]}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body" size="medium">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>

        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
        />

        <Button color="primary" onPress={() => setIsDarkMode((prev) => !prev)}>
          Toggle Theme Mode
        </Button>

        <Button
          color="secondary"
          onPress={() =>
            setSelectedTheme(selectedTheme === 'default' ? 'custom' : 'default')
          }
        >
          Switch Theme Style
        </Button>
      </View>
    </ThemeProvider>
  );
}
```

---

## Core Concepts

### Theme System

Materio UI comes with a built-in theme system that provides consistent styling across components. The theme includes colors, typography, spacing, and border radius definitions.

#### Using the ThemeProvider

The `ThemeProvider` component wraps your application and manages the theme state. You can pass a custom theme object to completely customize the appearance:

```jsx
import { ThemeProvider, twcolors } from '@materio/rn-materio-ui';

// Create a custom theme
const customTheme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: twcolors.blue[600], contrast: twcolors.white },
          high: { main: twcolors.blue[800], contrast: twcolors.blue[50] },
          low: { main: twcolors.blue[100], contrast: twcolors.blue[900] },
        },
        secondary: {
          base: { main: twcolors.purple[600], contrast: twcolors.white },
          high: { main: twcolors.purple[800], contrast: twcolors.purple[50] },
          low: { main: twcolors.purple[100], contrast: twcolors.purple[900] },
        },
        // ... other color definitions (success, danger, warning, info, neutral)
      },
      surface: { main: twcolors.white, contrast: twcolors.black },
      typography: {
        primary: twcolors.black,
        secondary: twcolors.gray[600],
        disabled: twcolors.gray[400],
      },
    },
    dark: {
      palette: {
        primary: {
          base: { main: twcolors.blue[400], contrast: twcolors.black },
          high: { main: twcolors.blue[200], contrast: twcolors.blue[900] },
          low: { main: twcolors.blue[800], contrast: twcolors.blue[100] },
        },
        // ... other color definitions for dark mode
      },
      surface: { main: twcolors.gray[900], contrast: twcolors.white },
      typography: {
        primary: twcolors.white,
        secondary: twcolors.gray[300],
        disabled: twcolors.gray[500],
      },
    },
  },
  typography: {
    variants: {
      display: {
        /* font family, letterSpacing, etc. */
      },
      headline: {
        /* font styles */
      },
      title: {
        /* font styles */
      },
      body: {
        /* font styles */
      },
      label: {
        /* font styles */
      },
    },
    sizes: {
      large: {
        /* size definitions */
      },
      medium: {
        /* size definitions */
      },
      small: {
        /* size definitions */
      },
    },
    weights: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    // ... more spacing values
  },
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    // ... more border radius values
  },
};

function App() {
  return (
    <ThemeProvider colorScheme="light" theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

#### Accessing the Theme

You can access the current theme in your components using the `useTheme` hook:

```jsx
import { useTheme, Typography, View } from '@materio/rn-materio-ui';

function MyComponent() {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colorScheme.surface.main,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
      }}
    >
      <Typography style={{ color: theme.colorScheme.typography.primary }}>
        Themed Text
      </Typography>

      <View
        style={{
          backgroundColor: theme.colorScheme.palette.primary.base.main,
          padding: theme.spacing.sm,
          borderRadius: theme.borderRadius.sm,
        }}
      >
        <Typography
          style={{ color: theme.colorScheme.palette.primary.base.contrast }}
        >
          Primary Color Box
        </Typography>
      </View>
    </View>
  );
}
```

### Color System

Materio UI uses a sophisticated color system with palettes, tones, and values:

#### Color Palettes

The library includes the following color palettes:

- `primary` - Main brand color (default is emerald)
- `secondary` - Secondary brand color (default is rose)
- `neutral` - Neutral colors for backgrounds, text, etc.
- `success` - For success states and actions
- `warning` - For warning states and actions
- `danger` - For error states and dangerous actions
- `info` - For informational content
- `inactive` - For disabled or inactive elements

#### Color Tones

Each color has three tones:

- `high` - Highly saturated or vibrant version of the color
- `base` - The standard version of the color
- `low` - A more subtle or muted version of the color

#### Color Values

Each tone has two color values:

- `main` - The main color
- `contrast` - A contrasting color for text/elements on top of the main color

Example of accessing colors:

```jsx
import { useTheme, View, Text } from '@materio/rn-materio-ui';

function ColorExample() {
  const theme = useTheme();

  const primaryColor = theme.colorScheme.palette.primary.base.main;
  const contrastColor = theme.colorScheme.palette.primary.base.contrast;

  return (
    <View style={{ backgroundColor: primaryColor }}>
      <Text style={{ color: contrastColor }}>
        This text has proper contrast
      </Text>
    </View>
  );
}
```

### Typography System

Materio UI includes a comprehensive typography system with various variants, sizes, and weights.

#### Typography Variants

- `display` - For large, prominent displays
- `headline` - For section headings
- `title` - For content titles
- `body` - For regular body text
- `label` - For form labels and small emphasized text
- `caption` - For auxiliary information

#### Typography Sizes

Each variant comes in three sizes:

- `large`
- `medium`
- `small`

#### Typography Weights

- `light`
- `regular`
- `medium`
- `semibold`
- `bold`

#### Usage Example

```jsx
import { Typography } from '@materio/rn-materio-ui';

function TypographyExample() {
  return (
    <>
      <Typography variant="display" size="large">
        Large Display Text
      </Typography>

      <Typography variant="headline" size="medium" weight="semibold">
        Medium Headline with Semibold Weight
      </Typography>

      <Typography variant="body" size="small" color="secondary">
        Small body text in secondary color
      </Typography>

      <Typography usageType="link">This looks like a link</Typography>
    </>
  );
}
```

### Spacing & Layout

Materio UI provides consistent spacing values through the theme:

- `none` - 0px
- `xs` - 4px
- `sm` - 8px
- `md` - 12px
- `lg` - 16px
- `xl` - 24px
- `2xl` - 32px
- `3xl` - 40px

Border radius follows the same scale, and border widths are available for consistent borders:

**Border Widths:**

- `none` - 0px (no border)
- `hairline` - 0.5px (very thin border)
- `thin` - 1px (standard thin border)
- `medium` - 2px (medium border)
- `thick` - 4px (thick border)

```jsx
import { useTheme, View } from '@materio/rn-materio-ui';

function SpacingExample() {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: theme.spacing.md,
        margin: theme.spacing.lg,
        borderRadius: theme.borderRadius.md,
        borderWidth: theme.borderWidths.thin,
        borderColor: '#e5e5e5',
      }}
    >
      {/* Content */}
    </View>
  );
}
```

---

## Exports and Utilities

### Available Exports

Materio UI exports all the components, hooks, types, and utilities you need:

```jsx
import {
  // Components
  Button,
  IconButton,
  Typography,
  Card,
  ColoredCard,
  Chip,
  TextInput,
  Paper,
  Divider,
  Menu,
  MenuItem,
  Popover,
  Backdrop,

  // Theme System
  ThemeProvider,
  useTheme,
  theme, // Default theme

  // Theme Utilities
  createPalette, // Create color palettes from Tailwind colors
  extendTheme, // Extend the default theme with custom overrides
  twcolors, // Tailwind CSS colors
  invertTone, // Utility for inverting color tones

  // Types (for TypeScript)
  // All types are exported as well, including:
  Theme,
  ThemeColors,
  ColorTones,
  ColorValues,
  ButtonColors,
  ButtonVariants,
  ButtonSizes,
  TypographyVariants,
  TypographySizes,
  TypographyWeights,
  TypographyUsageTypes,
  ThemeContextType,
  // ... and many more
} from '@materio/rn-materio-ui';
```

### Tailwind Colors

The library exports Tailwind CSS colors for easy theming:

```jsx
import { twcolors } from '@materio/rn-materio-ui';

// Use Tailwind colors anywhere in your app
const customStyle = {
  backgroundColor: twcolors.blue[500],
  borderColor: twcolors.slate[300],
  color: twcolors.gray[900],
};

// Available color scales include:
// slate, gray, zinc, neutral, stone, red, orange, amber, yellow,
// lime, green, emerald, teal, cyan, sky, blue, indigo, violet,
// purple, fuchsia, pink, rose
```

### Utility Functions

#### `invertTone`

Utility function to get the opposite tone for better contrast:

```jsx
import { invertTone } from '@materio/rn-materio-ui';

const oppositeTone = invertTone('high'); // Returns 'low'
const anotherTone = invertTone('base'); // Returns 'base'
```

#### `createPalette`

A powerful utility for creating complete color palettes from simple Tailwind color definitions. This function generates both light and dark mode color schemes with automatically calculated contrast colors and tones.

```jsx
import { createPalette, twcolors } from '@materio/rn-materio-ui';

// Create a palette using simple color definitions
const customPalette = createPalette({
  primary: 'purple', // Uses purple-500 as base
  secondary: ['rose', '600'], // Uses rose-600 as base
  success: 'emerald', // Uses emerald-500 as base
  // Different colors for light and dark modes
  neutral: {
    light: 'stone',
    dark: ['slate', '400'],
  },
});

// Returns an object with light and dark palettes
const { light, dark } = customPalette;
```

**Parameters:**

- `config`: An object where keys are theme color names and values can be:
  - `string`: A Tailwind color family name (uses 500 shade by default)
  - `[family, shade]`: A tuple specifying both color family and shade
  - `{ light: ColorInput, dark: ColorInput }`: Different colors for light/dark modes

**Returns:**

An object with `light` and `dark` properties, each containing partial color palettes that can be merged into your theme.

#### `extendTheme`

A utility for extending the default Materio UI theme with custom overrides. This function performs a deep merge, allowing you to customize only the parts of the theme you need without rewriting the entire theme object.

```jsx
import { extendTheme, twcolors } from '@materio/rn-materio-ui';

// Extend the default theme with custom overrides
const customTheme = extendTheme({
  // Override specific colors
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: twcolors.indigo[600], contrast: '#ffffff' },
          high: { main: twcolors.indigo[800], contrast: twcolors.indigo[50] },
          low: { main: twcolors.indigo[100], contrast: twcolors.indigo[900] },
        },
      },
      surface: {
        background: twcolors.gray[50],
      },
    },
  },
  // Customize spacing
  spacing: {
    xs: 2,
    sm: 6,
    md: 10,
  },
  // Override component defaults
  components: {
    Button: {
      defaultProps: {
        variant: 'outline',
        color: 'secondary',
      },
    },
  },
});
```

**Parameters:**

- `overrides`: A partial theme object containing your customizations. Only the properties you specify will be overridden.

**Returns:**

A complete theme object with your customizations merged into the default theme.

**Combining createPalette and extendTheme:**

For maximum flexibility, you can combine both utilities:

```jsx
import { createPalette, extendTheme, twcolors } from '@materio/rn-materio-ui';

// First, create a custom palette
const palette = createPalette({
  primary: 'violet',
  secondary: 'pink',
  success: 'emerald',
  danger: 'red',
});

// Then extend the theme with the palette and other customizations
const customTheme = extendTheme({
  colorScheme: {
    light: {
      palette: palette.light,
      surface: {
        background: twcolors.violet[50],
        paper: '#ffffff',
      },
    },
    dark: {
      palette: palette.dark,
      surface: {
        background: twcolors.violet[950],
        paper: twcolors.violet[900],
      },
    },
  },
  spacing: {
    xs: 3,
    sm: 6,
    md: 12,
  },
});
```

### TypeScript Support

Materio UI is built with TypeScript and provides comprehensive type definitions:

```tsx
import {
  Button,
  type ButtonColors,
  type ButtonVariants,
  type Theme,
} from '@materio/rn-materio-ui';

// All props are properly typed
const MyButton: React.FC = () => {
  const color: ButtonColors = 'primary';
  const variant: ButtonVariants = 'solid';

  return (
    <Button color={color} variant={variant}>
      Typed Button
    </Button>
  );
};

// Theme objects are also typed
const customTheme: Theme = {
  // TypeScript will ensure all required properties are present
  colorScheme: {
    /* ... */
  },
  typography: {
    /* ... */
  },
  spacing: {
    /* ... */
  },
  borderRadius: {
    /* ... */
  },
};
```

---

## Components

### Core Components

#### Button

Buttons allow users to take actions with a single tap.

**Variants:**

- `solid` (default) - Filled button with background color
- `soft` - Button with a lighter background color
- `outline` - Button with a border and transparent background
- `ghost` - Button with no background or border

**Colors:**
All theme colors are supported (`primary`, `secondary`, `success`, etc.)

**Sizes:**

- `xs` - Extra small
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large
- `xl` - Extra large

**Props:**

| Prop        | Type             | Default     | Description                            |
| ----------- | ---------------- | ----------- | -------------------------------------- |
| `color`     | ButtonColors     | `'neutral'` | Button color                           |
| `variant`   | ButtonVariants   | `'solid'`   | Button variant style                   |
| `size`      | ButtonSizes      | `'md'`      | Button size                            |
| `rounded`   | 'none' \| 'full' | -           | Button border radius style             |
| `fullwidth` | boolean          | `false`     | Whether button takes full width        |
| `disabled`  | boolean          | `false`     | Disables the button                    |
| `loading`   | boolean          | `false`     | Shows a loading indicator              |
| `startIcon` | ReactNode        | -           | Icon to display before text            |
| `endIcon`   | ReactNode        | -           | Icon to display after text             |
| `onPress`   | function         | -           | Function called when button is pressed |

**Examples:**

```jsx
import { Button } from '@materio/rn-materio-ui';
import { Feather } from '@expo/vector-icons';

// Basic Button
<Button color="primary">Primary Button</Button>

// Variants
<Button variant="soft" color="secondary">Soft Button</Button>
<Button variant="outline" color="success">Outline Button</Button>
<Button variant="ghost" color="danger">Ghost Button</Button>

// With Icons
<Button
  color="primary"
  startIcon={<Feather name="mail" />}
  endIcon={<Feather name="arrow-right" />}
>
  Send Email
</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// Full width
<Button fullwidth>Full Width Button</Button>
```

#### IconButton

Icon-only buttons for compact actions.

**Props:**

| Prop      | Type             | Default     | Description                            |
| --------- | ---------------- | ----------- | -------------------------------------- |
| `color`   | ButtonColors     | `'neutral'` | Button color                           |
| `variant` | ButtonVariants   | `'solid'`   | Button variant style                   |
| `size`    | ButtonSizes      | `'md'`      | Button size                            |
| `rounded` | 'none' \| 'full' | -           | Button border radius style             |
| `onPress` | function         | -           | Function called when button is pressed |

**Example:**

```jsx
import { IconButton } from '@materio/rn-materio-ui';
import { Feather } from '@expo/vector-icons';

<IconButton color="primary" onPress={() => console.log('Pressed')}>
  <Feather name="heart" size={24} />
</IconButton>;
```

#### Typography

Text component with consistent styling based on the theme.

**Props:**

| Prop           | Type                                       | Default      | Description                          |
| -------------- | ------------------------------------------ | ------------ | ------------------------------------ |
| `variant`      | TypographyVariants                         | `'body'`     | Text style variant                   |
| `size`         | TypographySizes                            | `'small'`    | Text size                            |
| `weight`       | TypographyWeights \| null                  | -            | Font weight                          |
| `color`        | ThemeColors                                | -            | Text color from theme                |
| `colorTone`    | ColorTones                                 | `'low'`      | Color tone when using a theme color  |
| `colorValue`   | ColorValues                                | `'contrast'` | Color value when using a theme color |
| `colorAlpha`   | string                                     | `'ff'`       | Alpha value for the color (hex)      |
| `usageType`    | TypographyUsageTypes                       | `'primary'`  | Usage type for semantics             |
| `align`        | 'left' \| 'center' \| 'right' \| 'justify' | `'left'`     | Text alignment                       |
| `gutterBottom` | boolean                                    | `false`      | Adds bottom margin                   |

**Examples:**

```jsx
import { Typography } from '@materio/rn-materio-ui';

// Variants
<Typography variant="display">Display Text</Typography>
<Typography variant="headline">Headline Text</Typography>
<Typography variant="title">Title Text</Typography>
<Typography variant="body">Body Text</Typography>
<Typography variant="label">Label Text</Typography>

// Sizes
<Typography variant="body" size="large">Large Body</Typography>
<Typography variant="body" size="medium">Medium Body</Typography>
<Typography variant="body" size="small">Small Body</Typography>

// Colors with tones
<Typography color="primary" colorTone="high">Primary High Tone</Typography>
<Typography color="secondary" colorTone="low">Secondary Low Tone</Typography>
<Typography color="success" colorValue="main">Success Main Color</Typography>

// Usage types
<Typography usageType="link">Link Text</Typography>
<Typography usageType="error">Error Message</Typography>
<Typography usageType="secondary">Secondary Text</Typography>

// Weight and alignment
<Typography weight="bold" align="center">Bold Centered Text</Typography>
<Typography weight="light" align="right">Light Right-Aligned Text</Typography>

// With gutter bottom
<Typography variant="title" gutterBottom>
  Title with bottom margin
</Typography>

// Color with alpha
<Typography color="primary" colorAlpha="80">
  Semi-transparent primary text
</Typography>
```

#### Card

Containers for content and actions.

**Props:**

| Prop      | Type                 | Default   | Description                          |
| --------- | -------------------- | --------- | ------------------------------------ |
| `variant` | 'solid' \| 'outline' | `'solid'` | Card style variant                   |
| `rounded` | number               | `12`      | Border radius of the card            |
| `style`   | ViewStyle            | -         | Additional styles for the card       |
| `onPress` | function             | -         | Function called when card is pressed |

**Example:**

```jsx
import { Card, Typography, View } from '@materio/rn-materio-ui';

// Basic Card
<Card style={{ padding: 16 }}>
  <Typography variant="title" size="medium">
    Card Title
  </Typography>
  <Typography variant="body">Card content goes here</Typography>
</Card>

// Outline variant
<Card variant="outline" style={{ padding: 16 }}>
  <Typography variant="title" size="medium">
    Outlined Card
  </Typography>
  <Typography variant="body">Card with outline</Typography>
</Card>

// Pressable Card
<Card
  onPress={() => console.log('Card pressed')}
  style={{ padding: 16 }}
>
  <Typography variant="title" size="medium">
    Pressable Card
  </Typography>
  <Typography variant="body">Tap this card</Typography>
</Card>
```

#### ColoredCard

Cards with background color based on the theme.

**Props:**

| Prop        | Type                                  | Default     | Description                   |
| ----------- | ------------------------------------- | ----------- | ----------------------------- |
| `color`     | ThemeColors                           | `'neutral'` | Card background color         |
| `colorTone` | ThemeColorTones                       | `'low'`     | Color tone for the background |
| `variant`   | PaperVariants                         | `'solid'`   | Card variant style            |
| `rounded`   | keyof Theme['borderRadius'] \| number | `'md'`      | Border radius of the card     |
| `padding`   | keyof Theme['spacing'] \| number      | `'sm'`      | Internal padding for the card |
| `pressable` | boolean                               | `false`     | Whether the card is pressable |
| `enabled`   | boolean                               | `true`      | Whether the card is enabled   |

**Examples:**

```jsx
import { ColoredCard, Typography, View } from '@materio/rn-materio-ui';

// Basic ColoredCard
<ColoredCard color="primary" colorTone="low">
  <Typography>Colored Card Content</Typography>
</ColoredCard>

// Different color tones
<View>
  <ColoredCard color="primary" colorTone="low" padding="md">
    <Typography>Primary Low Tone</Typography>
  </ColoredCard>

  <ColoredCard color="primary" colorTone="base" padding="md">
    <Typography>Primary Base Tone</Typography>
  </ColoredCard>

  <ColoredCard color="primary" colorTone="high" padding="md">
    <Typography>Primary High Tone</Typography>
  </ColoredCard>
</View>

// Different colors
<View>
  <ColoredCard color="secondary" colorTone="low" padding="md">
    <Typography>Secondary Color</Typography>
  </ColoredCard>

  <ColoredCard color="success" colorTone="low" padding="md">
    <Typography>Success Color</Typography>
  </ColoredCard>

  <ColoredCard color="warning" colorTone="low" padding="md">
    <Typography>Warning Color</Typography>
  </ColoredCard>
</View>

// Outlined variant
<ColoredCard
  color="secondary"
  colorTone="base"
  variant="outline"
  padding="lg"
>
  <Typography>Outlined Colored Card</Typography>
</ColoredCard>

// Custom rounded corners
<ColoredCard
  color="info"
  colorTone="low"
  rounded="xl"
  padding="md"
>
  <Typography>Extra Large Rounded</Typography>
</ColoredCard>

// Pressable ColoredCard
<ColoredCard
  color="success"
  colorTone="low"
  pressable
  onPress={() => console.log('Card pressed')}
  padding="md"
>
  <Typography>Pressable Colored Card</Typography>
</ColoredCard>

// Disabled card
<ColoredCard
  color="primary"
  colorTone="base"
  enabled={false}
  padding="md"
>
  <Typography>Disabled Card</Typography>
</ColoredCard>
```

#### Chip

Compact elements that represent inputs, attributes, or actions.

**Props:**

| Prop        | Type               | Default      | Description                          |
| ----------- | ------------------ | ------------ | ------------------------------------ |
| `children`  | string             | **Required** | Text content of the chip             |
| `color`     | ButtonColors       | `'neutral'`  | Chip color                           |
| `variant`   | ButtonVariants     | `'soft'`     | Chip style variant                   |
| `size`      | ButtonSizes        | `'md'`       | Chip size                            |
| `rounded`   | 'none' \| 'full'   | -            | Border radius of the chip            |
| `startIcon` | React.ReactElement | -            | Icon to display at start of chip     |
| `endIcon`   | React.ReactElement | -            | Icon to display at end of chip       |
| `onPress`   | function           | -            | Function called when chip is pressed |

**Examples:**

```jsx
import { Chip, View } from '@materio/rn-materio-ui';
import { Feather } from '@expo/vector-icons';

// Basic Chip
<Chip>Basic Chip</Chip>

// Different variants
<View>
  <Chip variant="solid" color="primary">Solid</Chip>
  <Chip variant="soft" color="secondary">Soft</Chip>
  <Chip variant="outline" color="success">Outline</Chip>
  <Chip variant="ghost" color="warning">Ghost</Chip>
</View>

// Different sizes
<View>
  <Chip size="xs">Extra Small</Chip>
  <Chip size="sm">Small</Chip>
  <Chip size="md">Medium</Chip>
  <Chip size="lg">Large</Chip>
  <Chip size="xl">Extra Large</Chip>
</View>

// Different colors
<View>
  <Chip color="primary">Primary</Chip>
  <Chip color="secondary">Secondary</Chip>
  <Chip color="success">Success</Chip>
  <Chip color="warning">Warning</Chip>
  <Chip color="danger">Danger</Chip>
  <Chip color="info">Info</Chip>
  <Chip color="neutral">Neutral</Chip>
</View>

// With icons
<View>
  <Chip startIcon={<Feather name="check" size={16} />} color="success">
    Selected
  </Chip>

  <Chip endIcon={<Feather name="info" size={16} />} color="info">
    Information
  </Chip>

  <Chip
    startIcon={<Feather name="user" size={16} />}
    endIcon={<Feather name="x" size={16} />}
    color="primary"
  >
    User
  </Chip>
</View>

// Rounded chips
<View>
  <Chip rounded="none">Square Chip</Chip>
  <Chip rounded="full">Fully Rounded</Chip>
</View>

// Interactive
<Chip onPress={() => console.log('Chip pressed')}>
  Pressable Chip
</Chip>
```

### Form Components

#### TextInput

Text input fields with typography alignment and theming support.

**Props:**

| Prop           | Type                                       | Default      | Description                               |
| -------------- | ------------------------------------------ | ------------ | ----------------------------------------- |
| `variant`      | TypographyVariants                         | `'body'`     | Typography variant for text styling       |
| `size`         | TypographySizes                            | `'small'`    | Typography size for text                  |
| `weight`       | TypographyWeights \| null                  | -            | Font weight                               |
| `color`        | ThemeColors                                | -            | Input text color from theme               |
| `colorTone`    | ColorTones                                 | `'low'`      | Color tone when using a theme color       |
| `colorValue`   | ColorValues                                | `'contrast'` | Color value when using a theme color      |
| `colorAlpha`   | string                                     | `'ff'`       | Alpha value for the color (hex)           |
| `usageType`    | TypographyUsageTypes                       | `'primary'`  | Semantic usage type                       |
| `align`        | 'left' \| 'center' \| 'right' \| 'justify' | `'left'`     | Text alignment                            |
| `outlined`     | boolean                                    | `false`      | Whether to show outline border (vs solid) |
| `label`        | string                                     | -            | Input label                               |
| `helperText`   | string                                     | -            | Helper text displayed below input         |
| `error`        | boolean                                    | `false`      | Error state                               |
| `errorMessage` | string                                     | -            | Error message to display                  |
| `fullWidth`    | boolean                                    | `false`      | Whether input takes full width            |
| `disabled`     | boolean                                    | `false`      | Disables the input                        |

**Examples:**

```jsx
import { TextInput, View } from '@materio/rn-materio-ui';

<View>
  {/* Basic input */}
  <TextInput
    label="Username"
    placeholder="Enter your username"
    outlined={true}
  />

  {/* Solid input (no outline) */}
  <TextInput label="Email" placeholder="Enter your email" outlined={false} />

  {/* With helper text */}
  <TextInput
    label="Password"
    placeholder="Enter your password"
    secureTextEntry
    helperText="At least 8 characters"
  />

  {/* With error */}
  <TextInput
    label="Email"
    placeholder="Enter your email"
    error={true}
    errorMessage="Invalid email address"
  />

  {/* Colored input */}
  <TextInput
    label="Custom Color"
    placeholder="Primary colored input"
    color="primary"
    colorTone="high"
  />

  {/* Full width input */}
  <TextInput
    label="Full Width"
    placeholder="This input takes full width"
    fullWidth
  />

  {/* Different typography styles */}
  <TextInput
    label="Title Style"
    variant="title"
    size="medium"
    placeholder="Title variant input"
  />

  <TextInput
    label="Body Style"
    variant="body"
    size="large"
    placeholder="Body variant input"
  />

  {/* Different usage types */}
  <TextInput
    label="Link Style"
    usageType="link"
    placeholder="Link usage type"
  />
</View>;
```

### Layout Components

#### Paper

Surface foundation for other components.

**Props:**

| Prop      | Type                 | Default   | Description                     |
| --------- | -------------------- | --------- | ------------------------------- |
| `variant` | 'solid' \| 'outline' | `'solid'` | Paper style variant             |
| `rounded` | number               | `8`       | Border radius of the paper      |
| `style`   | ViewStyle            | -         | Additional styles for the paper |

**Example:**

```jsx
import { Paper, Typography } from '@materio/rn-materio-ui';

// Basic Paper
<Paper style={{ padding: 16 }}>
  <Typography>Content on a paper surface</Typography>
</Paper>

// Outline variant
<Paper variant="outline" style={{ padding: 16 }}>
  <Typography>Content on outlined paper</Typography>
</Paper>

// Custom rounded corners
<Paper rounded={24} style={{ padding: 16 }}>
  <Typography>Paper with custom rounded corners</Typography>
</Paper>
```

#### Divider

Visual separator between content.

**Props:**

| Prop          | Type                       | Default        | Description                          |
| ------------- | -------------------------- | -------------- | ------------------------------------ |
| `marginH`     | number                     | `0`            | Horizontal margin                    |
| `marginV`     | number                     | `0`            | Vertical margin                      |
| `color`       | ThemeColors                | -              | Divider color                        |
| `colorTone`   | ThemeColorTones            | `'high'`       | Color tone                           |
| `colorAlpha`  | string                     | `'4A'`         | Alpha value for the color (hex)      |
| `orientation` | 'horizontal' \| 'vertical' | `'horizontal'` | Divider orientation                  |
| `thickness`   | number                     | `1`            | Divider thickness                    |
| `customColor` | string                     | -              | Custom color (overrides theme color) |

**Example:**

```jsx
import { Divider, View, Typography } from '@materio/rn-materio-ui';

<View>
  <Typography>Content above divider</Typography>
  <Divider marginV={8} />
  <Typography>Content below divider</Typography>

  {/* Custom colored divider */}
  <Divider color="primary" thickness={2} marginV={16} />

  {/* Vertical divider */}
  <View style={{ flexDirection: 'row', height: 40 }}>
    <Typography>Left</Typography>
    <Divider orientation="vertical" marginH={8} />
    <Typography>Right</Typography>
  </View>
</View>;
```

### Overlay Components

#### Menu

Popup menu for displaying a list of choices.

**Props:**

| Prop        | Type                         | Default      | Description                              |
| ----------- | ---------------------------- | ------------ | ---------------------------------------- |
| `open`      | boolean                      | **Required** | Whether the menu is visible              |
| `onClose`   | function                     | **Required** | Function called when menu is dismissed   |
| `targetRef` | React.RefObject              | **Required** | Reference to the anchor element          |
| `children`  | ReactNode                    | **Required** | Menu items to display                    |
| `separator` | boolean                      | `false`      | Whether to show separators between items |
| `color`     | ButtonColors                 | -            | Color of the menu                        |
| `colorTone` | ThemeColorTones              | `'low'`      | Color tone of the menu                   |
| `size`      | 'xs' \| 'sm' \| 'md' \| 'lg' | -            | Size of menu items                       |

**Example:**

```jsx
import { useState, useRef } from 'react';
import { Menu, MenuItem, Button } from '@materio/rn-materio-ui';

function MenuExample() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <Button ref={buttonRef} onPress={() => setOpen(true)}>
        Show Menu
      </Button>

      <Menu open={open} onClose={() => setOpen(false)} targetRef={buttonRef}>
        <MenuItem
          onSelected={() => {
            console.log('Option 1');
            setOpen(false);
          }}
        >
          Option 1
        </MenuItem>
        <MenuItem
          onSelected={() => {
            console.log('Option 2');
            setOpen(false);
          }}
        >
          Option 2
        </MenuItem>
        <MenuItem
          onSelected={() => {
            console.log('Option 3');
            setOpen(false);
          }}
        >
          Option 3
        </MenuItem>
      </Menu>
    </>
  );
}
```

#### MenuItem

Individual item within a Menu component.

**Props:**

| Prop              | Type                         | Default | Description                              |
| ----------------- | ---------------------------- | ------- | ---------------------------------------- |
| `children`        | string                       | -       | Text content of the menu item            |
| `startIcon`       | ReactElement                 | -       | Icon to display at start of item         |
| `endIcon`         | ReactElement                 | -       | Icon to display at end of item           |
| `size`            | 'xs' \| 'sm' \| 'md' \| 'lg' | `'xs'`  | Size of the menu item                    |
| `color`           | ButtonColors                 | -       | Color of the menu item                   |
| `colorTone`       | ThemeColorTones              | `'low'` | Color tone of the menu item              |
| `onSelected`      | function                     | -       | Function called when item is selected    |
| `onClose`         | function                     | -       | Function to close the parent menu        |
| `typographyProps` | TypographyProps              | -       | Props passed to the Typography component |
| `iconProps`       | object                       | -       | Props passed to the icons                |
| `itemProps`       | MenuItemProps                | -       | Additional props for customization       |

**Example:**

```jsx
<MenuItem
  startIcon={<Feather name="user" />}
  endIcon={<Feather name="chevron-right" />}
  color="primary"
  onSelected={() => console.log('Profile selected')}
>
  Profile
</MenuItem>
```

#### Popover

Floating content with contextual information.

**Props:**

| Prop                 | Type                                                                            | Default        | Description                               |
| -------------------- | ------------------------------------------------------------------------------- | -------------- | ----------------------------------------- |
| `open`               | boolean                                                                         | **Required**   | Whether the popover is visible            |
| `onClose`            | function                                                                        | **Required**   | Function called when popover is dismissed |
| `targetRef`          | React.RefObject                                                                 | **Required**   | Reference to the anchor element           |
| `children`           | ReactNode                                                                       | **Required**   | Content to display inside the popover     |
| `placement`          | 'top' \| 'bottom' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' | `'bottom'`     | Popover placement relative to anchor      |
| `distance`           | number                                                                          | `4`            | Space between target and popover          |
| `color`              | ButtonColors                                                                    | -              | Color of the popover                      |
| `colorTone`          | ThemeColorTones                                                                 | `'low'`        | Color tone of the popover                 |
| `adoptTargetWidth`   | boolean                                                                         | `false`        | If true, adopts the width of the target   |
| `bottomTabBarHeight` | number                                                                          | Platform-based | Height of bottom tab bar (for avoidance)  |

**Example:**

```jsx
import { useState, useRef } from 'react';
import { Popover, Button, Typography, View } from '@materio/rn-materio-ui';

function PopoverExample() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <Button ref={buttonRef} onPress={() => setOpen(true)}>
        Show Popover
      </Button>

      <Popover
        open={open}
        onClose={() => setOpen(false)}
        targetRef={buttonRef}
        placement="bottom"
        color="primary"
        colorTone="low"
      >
        <View style={{ padding: 16 }}>
          <Typography variant="title" size="small" gutterBottom>
            Popover Title
          </Typography>
          <Typography variant="body" size="small">
            This is a popover with helpful information
          </Typography>
        </View>
      </Popover>
    </>
  );
}
```

#### Backdrop

Overlay for modal interfaces.

**Props:**

| Prop                | Type      | Default                | Description                              |
| ------------------- | --------- | ---------------------- | ---------------------------------------- |
| `onPress`           | function  | -                      | Function called when backdrop is pressed |
| `onClose`           | function  | -                      | Function called when backdrop is closed  |
| `backdropColor`     | string    | `'rgba(0, 0, 0, 0.5)'` | Background color of the backdrop         |
| `animationDuration` | number    | -                      | Duration of the fade animation           |
| `children`          | ReactNode | -                      | Content to display over the backdrop     |

**Example:**

```jsx
import { useState } from 'react';
import { Backdrop, Button, View, Typography } from '@materio/rn-materio-ui';

function BackdropExample() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onPress={() => setVisible(true)}>Show Backdrop</Button>

      {visible && (
        <Backdrop onPress={() => setVisible(false)}>
          <View
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: -100,
              marginLeft: -150,
              width: 300,
              padding: 20,
              borderRadius: 10,
              backgroundColor: 'white',
              alignItems: 'center',
            }}
          >
            <Typography variant="title" size="medium" gutterBottom>
              Modal Content
            </Typography>
            <Typography variant="body" gutterBottom>
              This is displayed over a backdrop
            </Typography>
            <Button onPress={() => setVisible(false)}>Close</Button>
          </View>
        </Backdrop>
      )}
    </>
  );
}
```

---

## Advanced Usage

### Customizing Themes

Materio UI provides powerful tools for theme customization, making it easy to create and maintain custom themes. You can either create themes from scratch or use the provided utilities to simplify the process.

> **Note**: The library provides only a default theme. The additional theme variants mentioned in examples (like "Frozen", "Star Wars", "Oceanic", and "Zenith") are custom themes included in the example app to demonstrate how you can create your own themes. You can find these example themes in the `example/constants/` directory of the repository.

#### Quick Theme Customization with Utilities

The easiest way to create custom themes is using the `createPalette` and `extendTheme` utilities:

```jsx
import {
  createPalette,
  extendTheme,
  ThemeProvider,
} from '@materio/rn-materio-ui';

// Step 1: Create a custom color palette
const customPalette = createPalette({
  primary: 'violet', // Uses violet-500 as base
  secondary: 'pink', // Uses pink-500 as base
  success: 'emerald', // Uses emerald-500 as base
  warning: 'amber',
  danger: 'red',
  info: 'sky',
});

// Step 2: Extend the default theme with your palette and other customizations
const myTheme = extendTheme({
  colorScheme: {
    light: {
      palette: customPalette.light,
    },
    dark: {
      palette: customPalette.dark,
    },
  },
  // Customize other aspects
  spacing: {
    xs: 3,
    sm: 6,
    md: 12,
    lg: 18,
  },
  borderRadius: {
    xs: 2,
    sm: 6,
    md: 10,
    lg: 16,
  },
});

// Step 3: Use your custom theme
export default function App() {
  return (
    <ThemeProvider theme={myTheme} colorScheme="light">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

#### Advanced Palette Customization

The `createPalette` utility supports advanced configurations:

```jsx
import { createPalette, twcolors } from '@materio/rn-materio-ui';

const advancedPalette = createPalette({
  // Use specific shades
  primary: ['indigo', '600'], // indigo-600 as base
  secondary: ['rose', '500'], // rose-500 as base

  // Different colors for light and dark modes
  neutral: {
    light: 'stone', // stone-500 for light mode
    dark: ['slate', '400'], // slate-400 for dark mode
  },

  // Mix approaches
  success: 'emerald', // emerald-500
  warning: {
    light: ['amber', '600'], // amber-600 for light
    dark: ['yellow', '400'], // yellow-400 for dark
  },
});
```

#### Partial Theme Extensions

You can extend just specific parts of the theme:

```jsx
import { extendTheme } from '@materio/rn-materio-ui';

// Only customize component defaults
const buttonFocusedTheme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        variant: 'outline',
        color: 'primary',
      },
      sizes: {
        md: {
          fontSize: 18,
          padding: { horizontal: 'xl', vertical: 'md' },
        },
      },
    },
  },
});

// Only customize spacing
const tightSpacingTheme = extendTheme({
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
});

// Only customize colors for light mode
const lightOnlyTheme = extendTheme({
  colorScheme: {
    light: {
      surface: {
        background: '#f8fafc',
        paper: '#ffffff',
      },
    },
  },
});
```

#### Creating Custom Themes from Scratch

For complete control, you can still create themes from scratch by defining your own theme object:Here's an example of how you might create a "Frozen" theme inspired by winter aesthetics (this example shows the structure you'd use to build custom themes):

```jsx
import { ThemeProvider, twcolors } from '@materio/rn-materio-ui';

// Example: Creating a custom "Frozen" theme
const frozenTheme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: twcolors.blue[600], contrast: '#ffffff' },
          high: { main: twcolors.blue[800], contrast: twcolors.blue[50] },
          low: { main: twcolors.blue[100], contrast: twcolors.blue[900] },
        },
        secondary: {
          base: { main: twcolors.purple[500], contrast: '#ffffff' },
          high: { main: twcolors.purple[700], contrast: twcolors.purple[50] },
          low: { main: twcolors.purple[300], contrast: twcolors.purple[900] },
        },
        // ... other colors customized for frozen theme
      },
      surface: {
        background: twcolors.slate[50],
        paper: '#ffffff',
        divider: twcolors.slate[300],
        overlay: 'rgba(255, 255, 255, 0.9)',
        input: twcolors.slate[100],
      },
      typography: {
        primary: twcolors.slate[900],
        secondary: twcolors.slate[700],
        disabled: twcolors.slate[400],
        hint: twcolors.slate[500],
        link: twcolors.blue[600],
        error: twcolors.rose[600],
      },
    },
    dark: {
      // Dark mode variants of the frozen theme
      palette: {
        primary: {
          base: { main: twcolors.cyan[400], contrast: twcolors.slate[900] },
          high: { main: twcolors.cyan[100], contrast: twcolors.cyan[900] },
          low: { main: twcolors.cyan[600], contrast: '#ffffff' },
        },
        // ... other dark mode colors
      },
      surface: {
        background: twcolors.slate[900],
        paper: twcolors.slate[800],
        divider: twcolors.slate[600],
        overlay: 'rgba(148, 163, 184, 0.1)',
        input: twcolors.slate[700],
      },
      typography: {
        primary: twcolors.slate[50],
        secondary: twcolors.slate[200],
        disabled: twcolors.slate[500],
        hint: twcolors.slate[400],
        link: twcolors.cyan[300],
        error: twcolors.red[400],
      },
    },
  },
  typography: {
    tokens: {
      // Typography configuration with refined spacing for winter theme
      display: {
        large: {
          fontFamily: 'NotoSansLight',
          fontWeight: 'light',
          fontSize: 57,
          tracking: -0.25,
          lineHeight: 64,
        },
        // ... other typography tokens
      },
    },
    weightMap: {
      light: { fontFamily: 'NotoSansLight', fontWeight: '300' },
      regular: { fontFamily: 'NotoSansRegular', fontWeight: '400' },
      medium: { fontFamily: 'NotoSansMedium', fontWeight: '500' },
      semibold: { fontFamily: 'NotoSansSemiBold', fontWeight: '600' },
      bold: { fontFamily: 'NotoSansBold', fontWeight: '700' },
    },
  },
  spacing: {
    none: 0,
    xs: 2, // Tighter spacing for frozen precision
    sm: 6, // Slightly smaller than default
    md: 10, // More refined intervals
    lg: 14, // Crisp, clean spacing
    xl: 20, // Elegant larger spacing
    2xl: 28, // Sophisticated extra large
    3xl: 36, // Premium maximum spacing
  },
  borderRadius: {
    none: 0,
    xs: 2, // Subtle crystalline edges
    sm: 6, // Soft ice corners
    md: 10, // Balanced frozen curves
    lg: 14, // Elegant ice formation
    xl: 20, // Smooth glacier edges
    2xl: 28, // Flowing ice shapes
    3xl: 36, // Organic winter forms
  },
};
```

#### Additional Custom Themes

You can create completely custom themes by defining your own theme object:

```jsx
import { twcolors, type Theme } from '@materio/rn-materio-ui';

const myCustomTheme: Theme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: '#your-color', contrast: '#contrast-color' },
          high: { main: '#darker-variant', contrast: '#light-contrast' },
          low: { main: '#lighter-variant', contrast: '#dark-contrast' },
        },
        // Define all other colors...
      },
      surface: {
        background: '#your-background',
        paper: '#your-paper',
        divider: '#your-divider',
        overlay: 'rgba(0, 0, 0, 0.1)',
        input: '#your-input-background',
      },
      typography: {
        primary: '#your-text-color',
        secondary: '#your-secondary-text',
        disabled: '#your-disabled-text',
        hint: '#your-hint-text',
        link: '#your-link-color',
        error: '#your-error-color',
      },
    },
    dark: {
      // Dark mode configuration
    },  },
  typography: {
    // Typography system configuration
  },
  spacing: {
    // Spacing system configuration
  },
  borderRadius: {
    // Border radius system configuration
  },
  borderWidths: {
    // Border width system configuration
    none: 0,
    hairline: 0.5,
    thin: 1,
    medium: 2,
    thick: 4,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={myCustomTheme} colorScheme="light">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

#### Practical Theme Examples

Here are complete, real-world examples of creating custom themes using the new utilities:

**Example 1: E-commerce App Theme**

```jsx
import {
  createPalette,
  extendTheme,
  ThemeProvider,
} from '@materio/rn-materio-ui';

// Create an e-commerce focused palette
const ecommercePalette = createPalette({
  primary: 'emerald', // Trust and growth
  secondary: 'orange', // Energy and enthusiasm
  success: 'green', // Positive actions
  warning: 'amber', // Caution
  danger: 'red', // Errors and alerts
  info: 'blue', // Information
  neutral: {
    light: 'slate',
    dark: 'gray',
  },
});

const ecommerceTheme = extendTheme({
  colorScheme: {
    light: {
      palette: ecommercePalette.light,
      surface: {
        background: '#fafafa',
        paper: '#ffffff',
        input: '#f1f5f9',
      },
    },
    dark: {
      palette: ecommercePalette.dark,
      surface: {
        background: '#0f172a',
        paper: '#1e293b',
        input: '#334155',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'solid',
        color: 'primary',
      },
      baseStyle: {
        borderRadius: 'lg',
      },
    },
    Card: {
      baseStyle: {
        borderRadius: 'xl',
        padding: 'lg',
      },
    },
  },
});

export default function EcommerceApp() {
  return (
    <ThemeProvider theme={ecommerceTheme} colorScheme="light">
      {/* Your e-commerce app */}
    </ThemeProvider>
  );
}
```

**Example 2: Healthcare App Theme**

```jsx
import { createPalette, extendTheme } from '@materio/rn-materio-ui';

// Healthcare-focused color palette
const healthcarePalette = createPalette({
  primary: ['blue', '600'], // Professional and trustworthy
  secondary: 'teal', // Calming and healing
  success: 'emerald', // Health and wellness
  warning: 'amber', // Important notifications
  danger: 'red', // Critical alerts
  info: ['cyan', '500'], // Information
  neutral: 'slate',
});

const healthcareTheme = extendTheme({
  colorScheme: {
    light: {
      palette: healthcarePalette.light,
      surface: {
        background: '#f8fafc',
        paper: '#ffffff',
      },
    },
    dark: {
      palette: healthcarePalette.dark,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
  components: {
    Card: {
      baseStyle: {
        borderRadius: 'md',
        padding: 'lg',
      },
      variants: {
        solid: () => ({
          backgroundColor: 'surface.paper',
          borderColor: 'surface.divider',
          borderWidth: 'hairline',
        }),
      },
    },
  },
});
```

**Example 3: Gaming App Theme**

```jsx
import { createPalette, extendTheme, twcolors } from '@materio/rn-materio-ui';

const gamingPalette = createPalette({
  primary: 'purple',
  secondary: ['pink', '500'],
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'cyan',
  neutral: {
    light: 'slate',
    dark: ['zinc', '700'],
  },
});

const gamingTheme = extendTheme({
  colorScheme: {
    light: {
      palette: gamingPalette.light,
      surface: {
        background: twcolors.slate[50],
        paper: '#ffffff',
      },
    },
    dark: {
      palette: gamingPalette.dark,
      surface: {
        background: '#0a0a0a',
        paper: '#171717',
      },
    },
  },
  borderRadius: {
    'xs': 2,
    'sm': 4,
    'md': 8,
    'lg': 12,
    'xl': 16,
    '2xl': 20,
    '3xl': 24,
    'full': 9999,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
      },
      variants: {
        solid: (theme, color) => ({
          backgroundColor: `${color}.high.main`,
          textColor: `${color}.high.contrast`,
          // Add glow effect for gaming theme
          shadowColor: `${color}.high.main`,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }),
      },
    },
  },
});
```

**Example 4: Minimalist App Theme**

```jsx
import { createPalette, extendTheme } from '@materio/rn-materio-ui';

const minimalistPalette = createPalette({
  primary: 'gray',
  secondary: 'stone',
  success: ['emerald', '600'],
  warning: ['amber', '600'],
  danger: ['red', '600'],
  info: ['blue', '600'],
  neutral: 'neutral',
});

const minimalistTheme = extendTheme({
  colorScheme: {
    light: {
      palette: minimalistPalette.light,
      surface: {
        background: '#ffffff',
        paper: '#fafafa',
        divider: '#e5e5e5',
      },
    },
    dark: {
      palette: minimalistPalette.dark,
      surface: {
        background: '#0a0a0a',
        paper: '#171717',
        divider: '#404040',
      },
    },
  },
  spacing: {
    'xs': 2,
    'sm': 4,
    'md': 8,
    'lg': 16,
    'xl': 24,
    '2xl': 32,
    '3xl': 48,
  },
  borderRadius: {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 6,
    xl: 8,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'sm',
      },
      variants: {
        outline: (theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderColor: `${color}.high.main`,
          borderWidth: 'hairline', // Very subtle borders
        }),
      },
    },
  },
});
```

#### Dynamic Theme Switching

You can implement dynamic theme switching in your application:

```jsx
import React, { useState } from 'react';
import { ThemeProvider, Button, Menu, MenuItem } from '@materio/rn-materio-ui';
// Import your custom themes (these would be themes you've created)
import defaultTheme from './themes/default';
import frozenTheme from './themes/frozen';
import starwarsTheme from './themes/starwars';

const themes = {
  default: defaultTheme,
  frozen: frozenTheme,
  starwars: starwarsTheme,
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [colorMode, setColorMode] = useState('light');

  return (
    <ThemeProvider theme={themes[currentTheme]} colorScheme={colorMode}>
      <Button onPress={() => setCurrentTheme('frozen')}>
        Switch to Frozen Theme
      </Button>
      <Button
        onPress={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

#### Using Tailwind Colors

Materio UI exports Tailwind CSS colors for easy theme customization:

```jsx
import { twcolors, type Theme } from '@materio/rn-materio-ui';

// Use Tailwind colors in your custom theme
const theme: Theme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          base: { main: twcolors.indigo[600], contrast: twcolors.white },
          high: { main: twcolors.indigo[800], contrast: twcolors.indigo[50] },
          low: { main: twcolors.indigo[100], contrast: twcolors.indigo[900] },
        },
        success: {
          base: { main: twcolors.emerald[500], contrast: twcolors.white },
          high: { main: twcolors.emerald[700], contrast: twcolors.emerald[50] },
          low: { main: twcolors.emerald[100], contrast: twcolors.emerald[800] },
        },
        // ... other colors
      },
    },
  },
  // ... rest of theme configuration
};
```

#### Enhanced Theme Integration

All components have been updated to use the standardized theme system for consistent spacing, border radius, and border widths. This ensures better consistency across your application and easier customization.

**Components with Enhanced Theme Integration:**

- **Button**: Uses `theme.spacing` for padding, `theme.borderRadius` for corners, and `theme.borderWidths` for outline variant
- **Card & ColoredCard**: Support theme keys for border radius (`'sm'`, `'md'`, `'lg'`, `'xl'`) and padding
- **Chip**: Uses theme-based spacing and border radius mapping by size
- **IconButton**: Uses theme spacing and border radius with size-based mapping
- **Menu/MenuItem**: Uses theme spacing for padding and gaps
- **Paper**: Supports theme keys for border radius and uses theme border widths
- **Popover**: Uses theme border radius for modal styling
- **TextInput**: Already integrated with theme spacing and border radius

**Usage Example:**

```jsx
import { Button, Card, Paper } from '@materio/rn-materio-ui';

// All these components now use theme values
<Button size="lg">
  Uses theme.spacing.xl for padding and theme.borderRadius.lg for corners
</Button>

<Card rounded="md" variant="outline">
  Uses theme.borderRadius.md and theme.borderWidths.medium
</Card>

<Paper rounded="lg" variant="outline">
  Supports both theme keys and custom values
</Paper>
```

#### Theme Customization Best Practices

When using `createPalette` and `extendTheme`, follow these best practices for optimal results:

**1. Start with createPalette for Color Schemes**

```jsx
// ✅ Good: Use createPalette for consistent color generation
const palette = createPalette({
  primary: 'blue',
  secondary: 'purple',
  // This automatically generates proper contrast ratios and tones
});

// ❌ Avoid: Manually defining every color variant
const manualColors = {
  primary: {
    base: { main: '#3b82f6', contrast: '#ffffff' },
    high: { main: '#1d4ed8', contrast: '#dbeafe' },
    low: { main: '#dbeafe', contrast: '#1e3a8a' },
    // Lots of manual work and potential inconsistencies
  },
};
```

**2. Use extendTheme for Incremental Customization**

```jsx
// ✅ Good: Only override what you need
const customTheme = extendTheme({
  spacing: {
    xs: 2, // Only change specific values
    sm: 6,
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'outline', // Just change defaults
      },
    },
  },
});

// ❌ Avoid: Recreating entire theme objects
const fullTheme = {
  colorScheme: {
    /* entire color scheme */
  },
  typography: {
    /* entire typography system */
  },
  // ... unnecessarily verbose
};
```

**3. Combine Utilities for Complex Themes**

```jsx
// ✅ Good: Use both utilities together
const brandPalette = createPalette({
  primary: 'indigo',
  secondary: 'pink',
});

const brandTheme = extendTheme({
  colorScheme: {
    light: { palette: brandPalette.light },
    dark: { palette: brandPalette.dark },
  },
  spacing: { xs: 3, sm: 6, md: 12 },
  components: {
    Button: {
      baseStyle: { borderRadius: 'xl' },
    },
  },
});
```

**4. Consistent Color Usage**

```jsx
// ✅ Good: Use theme color names consistently
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: (theme, color) => ({
          backgroundColor: `${color}.high.main`,
          textColor: `${color}.high.contrast`,
        }),
      },
    },
  },
});

// ❌ Avoid: Hardcoded colors in component styles
const badTheme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: () => ({
          backgroundColor: '#3b82f6', // Hardcoded, won't adapt
          textColor: '#ffffff',
        }),
      },
    },
  },
});
```

**5. Theme Organization**

```jsx
// ✅ Good: Organize themes in separate files
// themes/colors.js
export const appPalette = createPalette({
  primary: 'blue',
  secondary: 'purple',
});

// themes/components.js
export const componentOverrides = {
  Button: {
    defaultProps: { variant: 'outline' },
  },
  Card: {
    baseStyle: { borderRadius: 'lg' },
  },
};

// themes/index.js
import { extendTheme } from '@materio/rn-materio-ui';
import { appPalette } from './colors';
import { componentOverrides } from './components';

export const customTheme = extendTheme({
  colorScheme: {
    light: { palette: appPalette.light },
    dark: { palette: appPalette.dark },
  },
  components: componentOverrides,
});
```

**6. TypeScript Integration**

```tsx
// ✅ Good: Use proper typing for custom themes
import { extendTheme, type Theme } from '@materio/rn-materio-ui';

const typedTheme: Theme = extendTheme({
  spacing: {
    xs: 2,
    sm: 4,
    // TypeScript will ensure you don't miss required properties
  },
});

// Use module declaration for custom theme properties
declare module '@materio/rn-materio-ui' {
  interface CustomTheme {
    customProperty?: string;
  }
}
```

---

### Responsive Design

Materio UI components are designed to adapt to different screen sizes. You can use React Native's `Dimensions` API along with Materio UI's components to create responsive layouts:

```jsx
import { Dimensions } from 'react-native';
import { Card, Typography, useTheme } from '@materio/rn-materio-ui';

function ResponsiveComponent() {
  const theme = useTheme();
  const { width } = Dimensions.get('window');

  // Calculate responsive values
  const isSmallScreen = width < 375;
  const cardPadding = isSmallScreen ? theme.spacing.sm : theme.spacing.lg;
  const titleSize = isSmallScreen ? 'small' : 'large';

  return (
    <Card style={{ padding: cardPadding }}>
      <Typography variant="title" size={titleSize}>
        Responsive Title
      </Typography>
    </Card>
  );
}
```

### Accessibility

Materio UI components are built with accessibility in mind. Here are some best practices:

1. **Provide accessible labels**:

```jsx
<IconButton accessibilityLabel="Add to favorites" accessibilityRole="button">
  <Feather name="heart" />
</IconButton>
```

2. **Use semantic variants**:

```jsx
<Typography variant="headline" accessibilityRole="header">
  Section Header
</Typography>
```

3. **Ensure sufficient contrast**:

```jsx
// Good contrast
<Typography color="primary" colorTone="high">
  This text has good contrast
</Typography>

// For links and important content
<Typography usageType="link" accessibilityRole="link">
  Learn more
</Typography>
```

---

## API Reference

### ThemeProvider

```tsx
interface ThemeProviderProps {
  /**
   * The color scheme to use for the theme.
   * - 'light': Use light theme (default)
   * - 'dark': Use dark theme
   */
  colorScheme?: 'light' | 'dark';
  /**
   * The theme object to use. This allows you to completely customize
   * the appearance of all components.
   */
  theme: Theme;
  children: ReactNode;
}
```

**Example:**

```jsx
import { ThemeProvider } from '@materio/rn-materio-ui';
import myCustomTheme from './themes/myTheme';

<ThemeProvider theme={myCustomTheme} colorScheme="light">
  {/* Your app */}
</ThemeProvider>;
```

### useTheme Hook

Returns the current theme object with the following structure:

```tsx
interface Theme {
  colorScheme: {
    palette: ColorPalette;
    paper: { base: { main: string } };
    surface: SurfaceColors;
    typography: TypographyColors;
  };
  typography: {
    tokens: TypographyTokens;
    weightMap: TypographyWeightMap;
  };
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidths: BorderWidths;
}
```

See the [Core Concepts](#core-concepts) section for more details on these properties.

---

## Theme Management Best Practices

### State Management for Themes

For production applications, you'll want to persist theme preferences. Here's an example using Jotai and AsyncStorage:

```jsx
// atoms.ts
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

export const selectedThemeAtom = atomWithStorage(
  'selectedTheme',
  'default' as 'default' | 'frozen' | 'starwars' | 'oceanic' | 'zenith',
  {
    getItem: async (key) => {
      const value = await AsyncStorage.getItem(key);
      return value || 'default';
    },
    setItem: (key, value) => AsyncStorage.setItem(key, value),
    removeItem: (key) => AsyncStorage.removeItem(key),
  }
);
```

```jsx
// App.tsx
import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useAtomValue } from 'jotai';
import { ThemeProvider } from '@materio/rn-materio-ui';
import { themeModeAtom, selectedThemeAtom } from './atoms';
import { themes } from './themes';

export default function App() {
  const selectedTheme = useAtomValue(selectedThemeAtom);
  const themeMode = useAtomValue(themeModeAtom);
  const systemColorScheme = useColorScheme();

  const currentTheme = useMemo(() => {
    return themes[selectedTheme];
  }, [selectedTheme]);

  const colorMode = useMemo(() => {
    return themeMode === 'system' ? systemColorScheme || 'light' : themeMode;
  }, [themeMode, systemColorScheme]);

  return (
    <ThemeProvider colorScheme={colorMode} theme={currentTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Theme Performance Optimization

For better performance when switching themes:

1. **Memoize theme objects** to prevent unnecessary re-renders
2. **Use React.memo** for components that don't need to re-render on theme changes
3. **Lazy load themes** that aren't immediately needed

```jsx
import React, { useMemo } from 'react';

// Lazy load themes
const loadTheme = (themeName) => {
  switch (themeName) {
    case 'frozen':
      return import('./themes/frozen').then((m) => m.default);
    case 'starwars':
      return import('./themes/starwars').then((m) => m.default);
    default:
      return import('./themes/default').then((m) => m.default);
  }
};

// Memoized theme selector
const useSelectedTheme = (themeName) => {
  return useMemo(() => {
    return loadTheme(themeName);
  }, [themeName]);
};
```

### Testing Themed Components

When testing components that use themes:

```jsx
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@materio/rn-materio-ui';
import MyComponent from './MyComponent';
import testTheme from './themes/test';

const renderWithTheme = (component, theme = testTheme) => {
  return render(
    <ThemeProvider theme={theme} colorScheme="light">
      {component}
    </ThemeProvider>
  );
};

test('renders correctly with theme', () => {
  const { getByText } = renderWithTheme(<MyComponent />);
  expect(getByText('Hello')).toBeTruthy();
});
```

---

## Contributing

We welcome contributions to Materio UI! Please see our [CONTRIBUTING.md](../CONTRIBUTING.md) file for details on how to get started.

---

## License

Materio UI is licensed under the [MIT License](../LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Lalitj03">Lalit Jharbade</a>
</p>
