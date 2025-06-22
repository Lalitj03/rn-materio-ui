import { type Theme } from '../utils/types/theme';
import twcolors from './twcolors';

const theme: Theme = {
  colorScheme: {
    dark: {
      palette: {
        neutral: {
          base: {
            main: twcolors.stone[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.stone[100],
            contrast: twcolors.stone[900],
          },
          low: {
            main: twcolors.stone[700],
            contrast: twcolors.stone[50],
          },
        },
        primary: {
          base: {
            main: twcolors.emerald[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.emerald[100],
            contrast: twcolors.emerald[900],
          },
          low: {
            main: twcolors.emerald[900],
            contrast: twcolors.emerald[100],
          },
        },
        secondary: {
          base: {
            main: twcolors.rose[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.rose[100],
            contrast: twcolors.rose[900],
          },
          low: {
            main: twcolors.rose[900],
            contrast: twcolors.rose[100],
          },
        },
        success: {
          base: {
            main: twcolors.green[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.green[100],
            contrast: twcolors.green[900],
          },
          low: {
            main: twcolors.green[900],
            contrast: twcolors.green[200],
          },
        },
        danger: {
          base: {
            main: twcolors.red[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.red[100],
            contrast: twcolors.red[900],
          },
          low: {
            main: twcolors.red[900],
            contrast: twcolors.red[100],
          },
        },
        warning: {
          base: {
            main: twcolors.amber[400],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.amber[100],
            contrast: twcolors.amber[900],
          },
          low: {
            main: twcolors.amber[900],
            contrast: twcolors.amber[100],
          },
        },
        info: {
          base: {
            main: twcolors.sky[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.sky[100],
            contrast: twcolors.sky[900],
          },
          low: {
            main: twcolors.sky[900],
            contrast: twcolors.sky[100],
          },
        },
        inactive: {
          base: {
            main: twcolors.slate[600],
            contrast: twcolors.slate[100],
          },
          high: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[200],
          },
          low: {
            main: twcolors.slate[800],
            contrast: twcolors.slate[200],
          },
        },
      },
      surface: {
        background: twcolors.neutral[900],
        overlay: twcolors.neutral[800],
        divider: twcolors.stone[700],
        paper: twcolors.stone[800],
        input: twcolors.stone[800],
      },
      typography: {
        primary: twcolors.neutral[50],
        secondary: twcolors.stone[300],
        disabled: twcolors.stone[500],
        hint: twcolors.stone[500],
        link: twcolors.emerald[500],
        error: twcolors.red[500],
      },
    },
    light: {
      palette: {
        neutral: {
          base: {
            main: twcolors.stone[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.stone[700],
            contrast: twcolors.stone[50],
          },
          low: {
            main: twcolors.stone[100],
            contrast: twcolors.stone[900],
          },
        },
        primary: {
          base: {
            main: twcolors.emerald[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.emerald[900],
            contrast: twcolors.emerald[100],
          },
          low: {
            main: twcolors.emerald[100],
            contrast: twcolors.emerald[900],
          },
        },
        secondary: {
          base: {
            main: twcolors.rose[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.rose[900],
            contrast: twcolors.rose[100],
          },
          low: {
            main: twcolors.rose[100],
            contrast: twcolors.rose[900],
          },
        },
        success: {
          base: {
            main: twcolors.green[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.green[900],
            contrast: twcolors.green[200],
          },
          low: {
            main: twcolors.green[100],
            contrast: twcolors.green[900],
          },
        },
        danger: {
          base: {
            main: twcolors.red[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.red[800],
            contrast: twcolors.red[50],
          },
          low: {
            main: twcolors.red[200],
            contrast: twcolors.red[950],
          },
        },
        warning: {
          base: {
            main: twcolors.amber[600],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.amber[900],
            contrast: twcolors.amber[100],
          },
          low: {
            main: twcolors.amber[100],
            contrast: twcolors.amber[900],
          },
        },
        info: {
          base: {
            main: twcolors.sky[500],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.sky[900],
            contrast: twcolors.sky[100],
          },
          low: {
            main: twcolors.sky[100],
            contrast: twcolors.sky[900],
          },
        },
        inactive: {
          base: {
            main: twcolors.slate[600],
            contrast: twcolors.slate[100],
          },
          high: {
            main: twcolors.slate[800],
            contrast: twcolors.slate[200],
          },
          low: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[200],
          },
        },
      },
      surface: {
        background: twcolors.neutral[100],
        overlay: twcolors.neutral[50],
        divider: twcolors.stone[300],
        paper: twcolors.stone[50],
        input: twcolors.stone[200],
      },
      typography: {
        primary: twcolors.neutral[900],
        secondary: twcolors.stone[600],
        disabled: twcolors.stone[500],
        hint: twcolors.stone[500],
        link: twcolors.emerald[500],
        error: twcolors.red[500],
      },
    },
  },
  typography: {
    tokens: {
      display: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 57,
          tracking: -0.25,
          lineHeight: 72,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 45,
          tracking: 0,
          lineHeight: 52,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 36,
          tracking: 0,
          lineHeight: 44,
        },
      },
      headline: {
        large: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 32,
          tracking: 0,
          lineHeight: 40,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 28,
          tracking: 0,
          lineHeight: 36,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 24,
          tracking: 0,
          lineHeight: 32,
        },
      },
      title: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 22,
          tracking: 0,
          lineHeight: 28,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 16,
          tracking: 0.15,
          lineHeight: 24,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
      },
      body: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 16,
          tracking: 0.5,
          lineHeight: 24,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 14,
          tracking: 0.25,
          lineHeight: 20,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
      },
      label: {
        large: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 12,
          tracking: 0.05,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 11,
          tracking: 0.05,
          lineHeight: 16,
        },
      },
      caption: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 11,
          tracking: 0.04,
          lineHeight: 16,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 10,
          tracking: 0.03,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 9,
          tracking: 0.02,
          lineHeight: 14,
        },
      },
    },
    weightMap: {
      light: {
        fontFamily: 'NotoSansLight',
        fontWeight: '300',
      },
      regular: {
        fontFamily: 'NotoSansRegular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'NotoSansMedium',
        fontWeight: '500',
      },
      semibold: {
        fontFamily: 'NotoSansSemiBold',
        fontWeight: '600',
      },
      bold: {
        fontFamily: 'NotoSansBold',
        fontWeight: '700',
      },
    },
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40,
  },
  borderRadius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40,
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
        borderRadius: 'md',
        fontWeight: 'medium',
      },
      sizes: {
        xs: {
          fontSize: 10,
          padding: { horizontal: 'sm', vertical: 'xs' },
          minHeight: 24,
        },
        sm: {
          fontSize: 12,
          padding: { horizontal: 'md', vertical: 'xs' },
          minHeight: 28,
        },
        md: {
          fontSize: 16,
          padding: { horizontal: 'lg', vertical: 'sm' },
          minHeight: 40,
        },
        lg: {
          fontSize: 20,
          padding: { horizontal: 'xl', vertical: 'md' },
          minHeight: 48,
        },
        xl: {
          fontSize: 24,
          padding: { horizontal: 'xxl', vertical: 'lg' },
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
    Chip: {
      defaultProps: {
        variant: 'solid',
        size: 'md',
        color: 'neutral',
      },
      baseStyle: {
        borderRadius: 'xl',
        fontWeight: 'medium',
      },
      sizes: {
        xs: {
          fontSize: 10,
          padding: { horizontal: 'sm', vertical: 'xs' },
        },
        sm: {
          fontSize: 12,
          padding: { horizontal: 'md', vertical: 'xs' },
        },
        md: {
          fontSize: 14,
          padding: { horizontal: 'lg', vertical: 'sm' },
        },
        lg: {
          fontSize: 18,
          padding: { horizontal: 'xl', vertical: 'md' },
        },
        xl: {
          fontSize: 22,
          padding: { horizontal: 'xxl', vertical: 'lg' },
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
        variant: 'solid',
        size: 'md',
        color: 'neutral',
      },
      baseStyle: {
        borderRadius: 'md',
      },
      sizes: {
        xs: {
          padding: 'xs',
        },
        sm: {
          padding: 'sm',
        },
        md: {
          padding: 'md',
        },
        lg: {
          padding: 'lg',
        },
        xl: {
          padding: 'xl',
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
    Menu: {
      baseStyle: {
        borderRadius: 'md',
        borderWidth: 'thin',
        padding: 'xs',
      },
    },
    Popover: {
      baseStyle: {
        borderRadius: 'md',
        borderWidth: 'thin',
        padding: 'lg',
      },
    },
    Backdrop: {
      baseStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    Divider: {
      baseStyle: {
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
        colorTone: 'low',
        colorValue: 'contrast',
        colorAlpha: 'ff',
      },
    },
  },
};

export default theme;
