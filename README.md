# Materio UI for React Native

<p align="center">
  <img src="docs/assets/icon.png" alt="Materio UI Logo" width="200" height="200">
</p>

[![npm version](https://img.shields.io/npm/v/@materio/rn-materio-ui)](https://www.npmjs.com/package/@materio/rn-materio-ui)
[![license](https://img.shields.io/npm/l/@materio/rn-materio-ui)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.65+-blue)](https://reactnative.dev/)

A comprehensive, customizable UI component library for React Native with Material Design influences. Materio UI provides a set of accessible, reusable components to help you build beautiful mobile applications for iOS and Android and Web.

## Features

- 📱 **Cross-Platform**: Works seamlessly on iOS and Android
- 🎨 **Themeable**: Light/dark mode support with customizable colors
- 🧩 **Component-Based**: Composable components for consistent UIs
- ⚡ **Performant**: Optimized for React Native apps
- 🔍 **Accessible**: Built with accessibility in mind
- 📚 **Well-Documented**: Clear examples and comprehensive [documentation](docs/DOCUMENTATION.md).

## Installation

```sh
# Using npm
npm install @materio/rn-materio-ui

# Using yarn
yarn add @materio/rn-materio-ui

# Using pnpm
pnpm add @materio/rn-materio-ui
```

### Dependencies

Materio UI requires the following peer dependencies to be installed:

```sh
yarn add react-native-gesture-handler react-native-reanimated react-native-safe-area-context
```

## Usage

Wrap your application with the `ThemeProvider` and start using components:

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

## Components

Materio UI includes the following components:

### Core Components

- `Button` - Standard button with multiple variants and states
- `IconButton` - Icon-only button for compact actions
- `Card` - Container for content and actions
- `ColoredCard` - Card with background color based on theme
- `Chip` - Compact elements for input, attributes, or actions
- `Typography` - Text display with consistent styling

### Form Components

- `TextInput` - Text entry field with variants and validation states

### Layout Components

- `Paper` - Surface foundation for other components
- `Divider` - Visual separator between content

### Overlay Components

- `Menu` - Popup menu for displaying a list of choices
- `Popover` - Floating content with contextual information
- `Backdrop` - Overlay for modal interfaces

## Component Examples

### Buttons

```jsx
import { Button, IconButton } from '@materio/rn-materio-ui';
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

// Icon Button
<IconButton color="primary">
  <Feather name="heart" />
</IconButton>
```

### Typography

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
```

### Cards

```jsx
import { Card, ColoredCard, Typography } from '@materio/rn-materio-ui';

// Basic Card
<Card>
  <Typography variant="title" size="medium">Card Title</Typography>
  <Typography variant="body">Card content goes here</Typography>
</Card>

// Card with color
<ColoredCard color="primary" colorTone="low">
  <Typography>Colored Card Content</Typography>
</ColoredCard>
```

## Theme Support

Materio UI comes with a built-in theme system that supports light and dark modes:

```jsx
import { ThemeProvider, useTheme, Button } from '@materio/rn-materio-ui';

// The ThemeProvider accepts a colorScheme prop
export function App() {
  return (
    <ThemeProvider colorScheme="dark">
      <AppContent />
    </ThemeProvider>
  );
}

// Accessing theme in components
function AppContent() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colorScheme.surface.background }}>
      <Button color="primary">Themed Button</Button>
    </View>
  );
}
```

> Materio UI has a powerful theme architecture that allows for deep customization. You can override default colors, typography, spacing, and even component-specific styles. See our [Theme Architecture Guide](docs/THEME_ARCHITECTURE.md) for more details.

## Contributing

We welcome contributions to Materio UI! Please see our [contributing guide](CONTRIBUTING.md) for more information on how to get started.

## Demo App

This repository includes a comprehensive demo app built with Expo. You can run it locally to see all the components in action:

```sh
# Clone the repo
git clone https://github.com/Lalitj03/rn-materio-ui.git

# Install dependencies
cd rn-materio-ui
yarn install

# Start the demo app
yarn example start
```

## License

[MIT](LICENSE)

---

Made with ❤️ by [Lalit Jharbade](https://github.com/Lalitj03)
