import { twcolors, type Theme } from '@materio/rn-materio-ui';

const theme: Theme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          // Deep Ocean Blue
          high: {
            main: twcolors.blue[100],
            contrast: twcolors.blue[900],
          },
          base: {
            main: twcolors.blue[600],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.blue[800],
            contrast: twcolors.white,
          },
        },
        secondary: {
          // Seafoam Green
          high: {
            main: twcolors.teal[100],
            contrast: twcolors.teal[900],
          },
          base: {
            main: twcolors.teal[600],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.teal[800],
            contrast: twcolors.white,
          },
        },
        neutral: {
          // Sandy Beige
          high: {
            main: twcolors.stone[100],
            contrast: twcolors.stone[900],
          },
          base: {
            main: twcolors.stone[500],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.stone[700],
            contrast: twcolors.white,
          },
        },
        success: {
          // Kelp Green
          high: {
            main: twcolors.green[100],
            contrast: twcolors.green[900],
          },
          base: {
            main: twcolors.green[600],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.green[800],
            contrast: twcolors.white,
          },
        },
        warning: {
          // Coral Orange
          high: {
            main: twcolors.orange[100],
            contrast: twcolors.orange[900],
          },
          base: {
            main: twcolors.orange[500],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.orange[700],
            contrast: twcolors.white,
          },
        },
        danger: {
          // Urchin Red
          high: {
            main: twcolors.red[100],
            contrast: twcolors.red[900],
          },
          base: {
            main: twcolors.red[600],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.red[800],
            contrast: twcolors.white,
          },
        },
        info: {
          // Bright Aqua
          high: {
            main: twcolors.cyan[100],
            contrast: twcolors.cyan[900],
          },
          base: {
            main: twcolors.cyan[600],
            contrast: twcolors.white,
          },
          low: {
            main: twcolors.cyan[800],
            contrast: twcolors.white,
          },
        },
        inactive: {
          // Driftwood Gray
          high: {
            main: twcolors.slate[200],
            contrast: twcolors.slate[800],
          },
          base: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[900],
          },
          low: {
            main: twcolors.slate[500],
            contrast: twcolors.white,
          },
        },
      },
      surface: {
        background: twcolors.slate[50],
        overlay: 'rgba(30, 41, 59, 0.08)',
        divider: twcolors.slate[300],
        paper: twcolors.white,
        input: twcolors.slate[200],
      },
      typography: {
        primary: twcolors.slate[800],
        secondary: twcolors.slate[600],
        disabled: twcolors.slate[400],
        hint: twcolors.slate[500],
        link: twcolors.blue[600],
        error: twcolors.red[600],
      },
    },
    dark: {
      palette: {
        primary: {
          // Bioluminescent Blue
          high: {
            main: twcolors.blue[800],
            contrast: twcolors.blue[100],
          },
          base: {
            main: twcolors.blue[400],
            contrast: twcolors.blue[950],
          },
          low: {
            main: twcolors.blue[300],
            contrast: twcolors.blue[950],
          },
        },
        secondary: {
          // Deep Sea Teal
          high: {
            main: twcolors.teal[800],
            contrast: twcolors.teal[100],
          },
          base: {
            main: twcolors.teal[400],
            contrast: twcolors.teal[950],
          },
          low: {
            main: twcolors.teal[300],
            contrast: twcolors.teal[950],
          },
        },
        neutral: {
          // Volcanic Rock Gray
          high: {
            main: twcolors.slate[700],
            contrast: twcolors.slate[100],
          },
          base: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[900],
          },
          low: {
            main: twcolors.slate[300],
            contrast: twcolors.slate[900],
          },
        },
        success: {
          // Deep Kelp Green
          high: {
            main: twcolors.green[800],
            contrast: twcolors.green[100],
          },
          base: {
            main: twcolors.green[400],
            contrast: twcolors.green[950],
          },
          low: {
            main: twcolors.green[300],
            contrast: twcolors.green[950],
          },
        },
        warning: {
          // Sunken Treasure Gold
          high: {
            main: twcolors.yellow[800],
            contrast: twcolors.yellow[100],
          },
          base: {
            main: twcolors.yellow[400],
            contrast: twcolors.yellow[950],
          },
          low: {
            main: twcolors.yellow[300],
            contrast: twcolors.yellow[950],
          },
        },
        danger: {
          // Deepwater Red
          high: {
            main: twcolors.red[800],
            contrast: twcolors.red[100],
          },
          base: {
            main: twcolors.red[400],
            contrast: twcolors.red[950],
          },
          low: {
            main: twcolors.red[300],
            contrast: twcolors.red[950],
          },
        },
        info: {
          // Abyss Cyan
          high: {
            main: twcolors.cyan[800],
            contrast: twcolors.cyan[100],
          },
          base: {
            main: twcolors.cyan[400],
            contrast: twcolors.cyan[950],
          },
          low: {
            main: twcolors.cyan[300],
            contrast: twcolors.cyan[950],
          },
        },
        inactive: {
          // Shadowy Gray
          high: {
            main: twcolors.slate[700],
            contrast: twcolors.slate[300],
          },
          base: {
            main: twcolors.slate[500],
            contrast: twcolors.slate[100],
          },
          low: {
            main: twcolors.slate[600],
            contrast: twcolors.slate[200],
          },
        },
      },
      surface: {
        background: twcolors.slate[950],
        overlay: 'rgba(203, 213, 225, 0.08)',
        divider: twcolors.slate[700],
        paper: twcolors.slate[900],
        input: twcolors.slate[800],
      },
      typography: {
        primary: twcolors.slate[100],
        secondary: twcolors.slate[300],
        disabled: twcolors.slate[500],
        hint: twcolors.slate[400],
        link: twcolors.blue[400],
        error: twcolors.red[400],
      },
    },
  },
  typography: {
    tokens: {
      display: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 57,
          tracking: -0.25,
          lineHeight: 64,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 45,
          tracking: 0,
          lineHeight: 52,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 36,
          tracking: 0,
          lineHeight: 44,
        },
      },
      headline: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 32,
          tracking: 0,
          lineHeight: 40,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 28,
          tracking: 0,
          lineHeight: 36,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 24,
          tracking: 0,
          lineHeight: 32,
        },
      },
      title: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 22,
          tracking: 0,
          lineHeight: 28,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          fontSize: 16,
          tracking: 0.15,
          lineHeight: 24,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
      },
      body: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 16,
          tracking: 0.5,
          lineHeight: 24,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 14,
          tracking: 0.25,
          lineHeight: 20,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
      },
      label: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          fontSize: 12,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
      },
      caption: {
        large: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
        medium: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'regular',
          fontSize: 10,
          tracking: 0.5,
          lineHeight: 14,
        },
      },
    },
    weightMap: {
      light: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '300',
      },
      regular: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
      },
      semibold: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
      },
      bold: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
      },
    },
  },
  spacing: {
    'none': 0,
    'xs': 4,
    'sm': 8,
    'md': 12,
    'lg': 16,
    'xl': 24,
    '2xl': 32,
    '3xl': 48,
  },
  borderRadius: {
    'none': 0,
    'xs': 4,
    'sm': 8,
    'md': 12,
    'lg': 16,
    'xl': 24,
    '2xl': 32,
    '3xl': 48,
    'full': 9999,
  },
  borderWidths: {
    none: 0,
    hairline: 0.5, // Consider using StyleSheet.hairlineWidth if appropriate
    thin: 1,
    medium: 2,
    thick: 4,
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'solid',
        size: 'md',
        color: 'primary',
      },
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'md',
      },
      sizes: {
        xs: {
          fontSize: 10,
          padding: { horizontal: 'sm', vertical: 'xs' },
          borderRadius: 'sm',
          minHeight: 24,
        },
        sm: {
          fontSize: 12,
          padding: { horizontal: 'md', vertical: 'xs' },
          borderRadius: 'md',
          minHeight: 28,
        },
        md: {
          fontSize: 16,
          padding: { horizontal: 'lg', vertical: 'sm' },
          borderRadius: 'md',
          minHeight: 40,
        },
        lg: {
          fontSize: 20,
          padding: { horizontal: 'xl', vertical: 'md' },
          borderRadius: 'lg',
          minHeight: 48,
        },
        xl: {
          fontSize: 24,
          padding: { horizontal: '2xl', vertical: 'lg' },
          borderRadius: 'xl',
          minHeight: 56,
        },
      },
      variants: {
        solid: (_theme, color) => ({
          backgroundColor: `${color}.high.main`,
          textColor: `${color}.high.contrast`,
          borderWidth: 'none',
        }),
        outline: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderColor: `${color}.high.main`,
          borderWidth: 'thin',
        }),
        soft: (_theme, color) => ({
          backgroundColor: `${color}.low.main`,
          textColor: `${color}.low.contrast`,
          borderWidth: 'none',
        }),
        ghost: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderWidth: 'none',
        }),
      },
    },
    Chip: {
      defaultProps: {
        variant: 'soft',
        size: 'md',
        color: 'primary',
      },
      baseStyle: {
        borderRadius: 'xl',
        fontWeight: 'medium',
      },
      sizes: {
        xs: {
          fontSize: 10,
          padding: { horizontal: 'xs', vertical: 'xs' },
        },
        sm: {
          fontSize: 12,
          padding: { horizontal: 'sm', vertical: 'xs' },
        },
        md: {
          fontSize: 14,
          padding: { horizontal: 'md', vertical: 'xs' },
        },
        lg: {
          fontSize: 16,
          padding: { horizontal: 'lg', vertical: 'sm' },
        },
        xl: {
          fontSize: 18,
          padding: { horizontal: 'xl', vertical: 'md' },
        },
      },
      variants: {
        solid: (_theme, color) => ({
          backgroundColor: `${color}.high.main`,
          textColor: `${color}.high.contrast`,
          borderWidth: 'none',
        }),
        outline: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderColor: `${color}.high.main`,
          borderWidth: 'thin',
        }),
        soft: (_theme, color) => ({
          backgroundColor: `${color}.low.main`,
          textColor: `${color}.low.contrast`,
          borderWidth: 'none',
        }),
        ghost: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderWidth: 'none',
        }),
      },
    },
    Card: {
      baseStyle: {
        borderRadius: 'lg',
        padding: 'lg',
      },
      variants: {
        solid: (_theme) => ({
          backgroundColor: 'surface.paper',
          borderColor: 'transparent',
        }),
        outline: (_theme) => ({
          backgroundColor: 'transparent',
          borderColor: `surface.divider`,
          borderWidth: 'thin',
        }),
      },
    },
    Paper: {
      baseStyle: {
        borderRadius: 'md',
        borderWidth: 'none',
        padding: 'lg',
      },
      variants: {
        solid: (_theme) => ({
          backgroundColor: 'surface.paper',
          borderColor: 'transparent',
        }),
        outline: (_theme) => ({
          backgroundColor: 'transparent',
          borderColor: `surface.divider`,
          borderWidth: 'thin',
        }),
      },
    },
    TextInput: {
      // TODO: Refactor to clearly separate typography variant from visual variant (solid/outline) and improve code clarity.
      defaultProps: {
        size: 'small',
      },
      baseStyle: {
        borderRadius: 'md',
        minHeight: 40,
        // padding: { horizontal: 'md', vertical: 'sm' },
      },
      sizes: {
        small: {
          padding: { horizontal: 'sm', vertical: 'xs' },
        },
        medium: {
          padding: { horizontal: 'lg', vertical: 'sm' },
        },
        large: {
          padding: { horizontal: 'lg', vertical: 'md' },
        },
      },
      variants: {
        solid: (_theme) => ({
          backgroundColor: `surface.input`,
          borderColor: 'transparent',
          borderWidth: 'none',
        }),
        outline: (_theme) => ({
          backgroundColor: 'transparent',
          borderColor: `surface.divider`,
          borderWidth: 'thin',
        }),
      },
    },
    IconButton: {
      defaultProps: {
        variant: 'ghost',
        size: 'md',
        color: 'neutral',
      },
      baseStyle: {
        borderRadius: 'md',
      },
      sizes: {
        xs: { padding: 'xs' },
        sm: { padding: 'xs' },
        md: { padding: 'sm' },
        lg: { padding: 'md' },
        xl: { padding: 'lg' },
      },
      variants: {
        solid: (_theme, color) => ({
          backgroundColor: `${color}.high.main`,
          textColor: `${color}.high.contrast`,
          borderWidth: 'none',
        }),
        outline: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderColor: `${color}.high.main`,
          borderWidth: 'thin',
        }),
        soft: (_theme, color) => ({
          backgroundColor: `${color}.low.main`,
          textColor: `${color}.low.contrast`,
          borderWidth: 'none',
        }),
        ghost: (_theme, color) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderWidth: 'none',
        }),
      },
    },
    Menu: {
      baseStyle: {
        borderRadius: 'md',
        padding: 'xs',
        backgroundColor: (_theme) => `surface.paper`,
        borderWidth: 'thin',
        borderColor: (_theme) => `surface.divider`,
      },
    },
    Popover: {
      baseStyle: {
        borderRadius: 'md',
        padding: 'lg',
        backgroundColor: (_theme) => `surface.paper`,
        borderWidth: 'thin',
        borderColor: (_theme) => `surface.divider`,
      },
    },
    Backdrop: {
      baseStyle: {
        backgroundColor: (_theme) => `surface.overlay`,
      },
    },
    Divider: {
      baseStyle: {
        backgroundColor: (_theme) => `surface.divider`,
        borderWidth: 'hairline',
      },
    },
    Typography: {
      defaultProps: {
        variant: 'body',
        size: 'medium',
        usageType: 'primary',
        align: 'left',
        gutterBottom: false,
        color: null,
        colorTone: 'high',
        colorValue: 'contrast',
        colorAlpha: 'ff',
      },
      baseStyle: {
        textColor: 'typography.primary',
      },
    },
  },
};

export default theme;
