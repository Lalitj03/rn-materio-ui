# Materio UI Documentation

<p align="center">
  <img src="https://via.placeholder.com/200x200?text=Materio+UI" alt="Materio UI Logo" width="200" height="200">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@materio/rn-materio-ui" alt="npm version">
  <img src="https://img.shields.io/npm/l/@materio/rn-materio-ui" alt="license">
  <img src="https://img.shields.io/badge/React%20Native-0.65+-blue" alt="React Native">
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
- [Components](#components)
  - [Core Components](#core-components)
  - [Form Components](#form-components)
  - [Layout Components](#layout-components)
  - [Overlay Components](#overlay-components)
- [Advanced Usage](#advanced-usage)
  - [Customizing Themes](#customizing-themes)
  - [Responsive Design](#responsive-design)
  - [Accessibility](#accessibility)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Materio UI is a cross-platform UI component library for React Native applications. It provides a set of accessible, reusable, and customizable components that follow Material Design principles while adding unique styling and flexibility.

**Key Features:**

- 📱 **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- 🎨 **Themeable**: Light/dark mode support with customizable colors
- 🧩 **Component-Based**: Composable components for consistent UIs
- ⚡ **Performant**: Optimized for React Native apps
- 🔍 **Accessible**: Built with accessibility in mind

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
import { ThemeProvider, Button, Typography } from '@materio/rn-materio-ui';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider colorScheme="light">
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

You can implement theme switching between light and dark modes:

```jsx
import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { ThemeProvider, Button, Typography } from '@materio/rn-materio-ui';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider colorScheme={isDarkMode ? 'dark' : 'light'}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body" size="medium">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>

        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
        />

        <Button color="primary" onPress={() => setIsDarkMode((prev) => !prev)}>
          Toggle Theme
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

The `ThemeProvider` component wraps your application and manages the theme state:

```jsx
import { ThemeProvider } from '@materio/rn-materio-ui';

function App() {
  return (
    <ThemeProvider colorScheme="light">{/* Your app content */}</ThemeProvider>
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
        backgroundColor: theme.colorScheme.surface.background,
        padding: theme.spacing.md,
      }}
    >
      <Typography color="primary">Themed Text</Typography>
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
- `xxl` - 32px
- `xxxl` - 40px

Border radius follows the same scale:

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
      }}
    >
      {/* Content */}
    </View>
  );
}
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
| `weight`       | TypographyWeights                          | -            | Font weight                          |
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
<Typography variant="caption">Caption Text</Typography>

// Sizes
<Typography variant="body" size="large">Large Body</Typography>
<Typography variant="body" size="medium">Medium Body</Typography>
<Typography variant="body" size="small">Small Body</Typography>

// Colors
<Typography color="primary">Primary Text</Typography>
<Typography color="secondary">Secondary Text</Typography>
<Typography usageType="link">Link Text</Typography>
<Typography usageType="error">Error Message</Typography>

// Alignment
<Typography align="center">Centered Text</Typography>
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

| Prop        | Type                 | Default     | Description                   |
| ----------- | -------------------- | ----------- | ----------------------------- |
| `color`     | ThemeColors          | `'neutral'` | Card background color         |
| `colorTone` | ThemeColorTones      | `'low'`     | Color tone for the background |
| `variant`   | 'solid' \| 'outline' | `'solid'`   | Card variant style            |
| `rounded`   | number               | `16`        | Border radius of the card     |
| `padding`   | number               | `8`         | Internal padding for the card |
| `pressable` | boolean              | `false`     | Whether the card is pressable |
| `enabled`   | boolean              | `true`      | Whether the card is enabled   |

**Example:**

```jsx
import { ColoredCard, Typography } from '@materio/rn-materio-ui';

// Basic ColoredCard
<ColoredCard color="primary" colorTone="low" style={{ padding: 16 }}>
  <Typography>Colored Card Content</Typography>
</ColoredCard>

// Outlined variant
<ColoredCard
  color="secondary"
  colorTone="low"
  variant="outline"
  style={{ padding: 16 }}
>
  <Typography>Outlined Colored Card</Typography>
</ColoredCard>

// Pressable ColoredCard
<ColoredCard
  color="success"
  pressable
  onPress={() => console.log('Card pressed')}
  style={{ padding: 16 }}
>
  <Typography>Pressable Colored Card</Typography>
</ColoredCard>
```

#### Chip

Compact elements that represent inputs, attributes, or actions.

**Props:**

| Prop        | Type                                      | Default      | Description                          |
| ----------- | ----------------------------------------- | ------------ | ------------------------------------ |
| `children`  | string                                    | **Required** | Text content of the chip             |
| `color`     | ThemeColors                               | `'neutral'`  | Chip color                           |
| `variant`   | 'solid' \| 'soft' \| 'outline' \| 'ghost' | `'solid'`    | Chip style variant                   |
| `size`      | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'      | `'md'`       | Chip size                            |
| `rounded`   | 'none' \| 'full' \| number                | -            | Border radius of the chip            |
| `startIcon` | ReactElement                              | -            | Icon to display at start of chip     |
| `endIcon`   | ReactElement                              | -            | Icon to display at end of chip       |
| `onPress`   | function                                  | -            | Function called when chip is pressed |

**Example:**

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

// With icons
<View>
  <Chip startIcon={<Feather name="check" />} color="success">
    Selected
  </Chip>

  <Chip endIcon={<Feather name="info" />} color="info">
    Information
  </Chip>

  <Chip
    startIcon={<Feather name="user" />}
    endIcon={<Feather name="x" />}
    color="primary"
  >
    User
  </Chip>
</View>

// Interactive
<Chip onPress={() => console.log('Chip pressed')}>
  Pressable Chip
</Chip>
```

### Form Components

#### TextInput

Text input fields with support for various states.

**Props:**

| Prop           | Type                                       | Default      | Description                       |
| -------------- | ------------------------------------------ | ------------ | --------------------------------- |
| `variant`      | 'solid' \| 'outline'                       | `'outline'`  | Input style variant               |
| `size`         | 'small' \| 'medium' \| 'large'             | `'small'`    | Input size                        |
| `padding`      | SpacingOptions                             | `'md'`       | Internal padding                  |
| `borderRadius` | SpacingOptions                             | `'md'`       | Border radius                     |
| `label`        | string                                     | -            | Input label                       |
| `helperText`   | string                                     | -            | Helper text displayed below input |
| `error`        | boolean                                    | `false`      | Error state                       |
| `errorMessage` | string                                     | -            | Error message to display          |
| `fullWidth`    | boolean                                    | `false`      | Whether input takes full width    |
| `disabled`     | boolean                                    | `false`      | Disables the input                |
| `color`        | ThemeColors                                | `'neutral'`  | Input color                       |
| `colorTone`    | ColorTones                                 | `'low'`      | Color tone for the input          |
| `colorValue`   | ColorValues                                | `'contrast'` | Color value (main/contrast)       |
| `colorAlpha`   | string                                     | `'ff'`       | Alpha value for the color (hex)   |
| `usageType`    | TypographyUsageTypes                       | `'primary'`  | Semantic usage type               |
| `align`        | 'left' \| 'center' \| 'right' \| 'justify' | `'left'`     | Text alignment                    |
| `weight`       | TypographyWeights \| null                  | -            | Font weight                       |

**Example:**

```jsx
import { TextInput, View } from '@materio/rn-materio-ui';

<View>
  {/* Basic input */}
  <TextInput
    label="Username"
    placeholder="Enter your username"
    variant="outline"
  />

  {/* Solid variant */}
  <TextInput label="Email" placeholder="Enter your email" variant="solid" />

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
  />

  {/* Full width input */}
  <TextInput
    label="Full Width"
    placeholder="This input takes full width"
    fullWidth
  />

  {/* Different sizes */}
  <TextInput label="Small Input" size="small" placeholder="Small input" />

  <TextInput label="Medium Input" size="medium" placeholder="Medium input" />

  <TextInput label="Large Input" size="large" placeholder="Large input" />
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

> **Coming Soon:** Custom theme support will be available in future versions, allowing you to override default colors and styling.

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
  children: ReactNode;
}
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
}
```

See the [Core Concepts](#core-concepts) section for more details on these properties.

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
