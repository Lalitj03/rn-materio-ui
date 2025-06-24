import { twcolors, type Theme } from '@materio/rn-materio-ui';

const theme: Theme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          high: {
            main: '#EBF8FF',
            contrast: '#2C5282',
          },
          base: {
            main: '#3182CE',
            contrast: twcolors.white,
          },
          low: {
            main: '#2C5282',
            contrast: twcolors.white,
          },
        },
        secondary: {
          high: {
            main: '#E2E8F0',
            contrast: '#4A5568',
          },
          base: {
            main: '#718096',
            contrast: twcolors.white,
          },
          low: {
            main: '#4A5568',
            contrast: twcolors.white,
          },
        },
        neutral: {
          high: {
            main: '#F7FAFC',
            contrast: '#2D3748',
          },
          base: {
            main: '#A0AEC0',
            contrast: twcolors.black,
          },
          low: {
            main: '#718096',
            contrast: twcolors.white,
          },
        },
        success: {
          high: {
            main: '#F0FFF4',
            contrast: '#276749',
          },
          base: {
            main: '#38A169',
            contrast: twcolors.white,
          },
          low: {
            main: '#2F855A',
            contrast: twcolors.white,
          },
        },
        warning: {
          high: {
            main: '#FFFAF0',
            contrast: '#B7791F',
          },
          base: {
            main: '#D69E2E',
            contrast: twcolors.white,
          },
          low: {
            main: '#B7791F',
            contrast: twcolors.white,
          },
        },
        danger: {
          high: {
            main: '#FFF5F5',
            contrast: '#C53030',
          },
          base: {
            main: '#E53E3E',
            contrast: twcolors.white,
          },
          low: {
            main: '#C53030',
            contrast: twcolors.white,
          },
        },
        info: {
          high: {
            main: '#EBF8FF',
            contrast: '#2B6CB0',
          },
          base: {
            main: '#3182CE',
            contrast: twcolors.white,
          },
          low: {
            main: '#2B6CB0',
            contrast: twcolors.white,
          },
        },
        inactive: {
          high: {
            main: '#EDF2F7',
            contrast: '#718096',
          },
          base: {
            main: '#A0AEC0',
            contrast: '#2D3748',
          },
          low: {
            main: '#718096',
            contrast: twcolors.white,
          },
        },
      },
      surface: {
        background: '#F7FAFC',
        overlay: 'rgba(0, 0, 0, 0.04)',
        divider: '#E2E8F0',
        paper: twcolors.white,
        input: '#EDF2F7',
      },
      typography: {
        primary: '#1A202C',
        secondary: '#4A5568',
        disabled: '#A0AEC0',
        hint: '#718096',
        link: '#2B6CB0',
        error: '#E53E3E',
      },
    },
    dark: {
      palette: {
        primary: {
          high: {
            main: '#2A4365',
            contrast: '#90CDF4',
          },
          base: {
            main: '#63B3ED',
            contrast: '#1A202C',
          },
          low: {
            main: '#4299E1',
            contrast: twcolors.white,
          },
        },
        secondary: {
          high: {
            main: '#2D3748',
            contrast: '#A0AEC0',
          },
          base: {
            main: '#A0AEC0',
            contrast: '#EDF2F7',
          },
          low: {
            main: '#718096',
            contrast: '#1A202C',
          },
        },
        neutral: {
          high: {
            main: '#2D3748',
            contrast: '#E2E8F0',
          },
          base: {
            main: '#718096',
            contrast: '#1A202C',
          },
          low: {
            main: '#4A5568',
            contrast: '#F7FAFC',
          },
        },
        success: {
          high: {
            main: '#2F524A',
            contrast: '#68D391',
          },
          base: {
            main: '#68D391',
            contrast: '#1A202C',
          },
          low: {
            main: '#48BB78',
            contrast: twcolors.white,
          },
        },
        warning: {
          high: {
            main: '#654D29',
            contrast: '#F6E05E',
          },
          base: {
            main: '#F6E05E',
            contrast: '#1A202C',
          },
          low: {
            main: '#ECC94B',
            contrast: '#1A202C',
          },
        },
        danger: {
          high: {
            main: '#643232',
            contrast: '#FEB2B2',
          },
          base: {
            main: '#FC8181',
            contrast: '#1A202C',
          },
          low: {
            main: '#F56565',
            contrast: twcolors.white,
          },
        },
        info: {
          high: {
            main: '#2C5282',
            contrast: '#63B3ED',
          },
          base: {
            main: '#63B3ED',
            contrast: '#1A202C',
          },
          low: {
            main: '#4299E1',
            contrast: twcolors.white,
          },
        },
        inactive: {
          high: {
            main: '#2D3748',
            contrast: '#718096',
          },
          base: {
            main: '#4A5568',
            contrast: '#A0AEC0',
          },
          low: {
            main: '#2D3748',
            contrast: '#718096',
          },
        },
      },
      surface: {
        background: '#171923',
        overlay: 'rgba(0, 0, 0, 0.4)',
        divider: '#2D3748',
        paper: '#20242E',
        input: '#2D3748',
      },
      typography: {
        primary: '#EDF2F7',
        secondary: '#A0AEC0',
        disabled: '#718096',
        hint: '#A0AEC0',
        link: '#63B3ED',
        error: '#FC8181',
      },
    },
  },
  typography: {
    tokens: {
      display: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: 57,
          tracking: -0.25,
          lineHeight: 64,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: 45,
          tracking: 0,
          lineHeight: 52,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
          fontSize: 36,
          tracking: 0,
          lineHeight: 44,
        },
      },
      headline: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 32,
          tracking: 0,
          lineHeight: 40,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 28,
          tracking: 0,
          lineHeight: 36,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 24,
          tracking: 0,
          lineHeight: 32,
        },
      },
      title: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 22,
          tracking: 0,
          lineHeight: 28,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 16,
          tracking: 0.15,
          lineHeight: 24,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'semibold',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
      },
      body: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 16,
          tracking: 0.5,
          lineHeight: 24,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 14,
          tracking: 0.25,
          lineHeight: 20,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
      },
      label: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: 12,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'medium',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
      },
      caption: {
        large: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
        medium: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'regular',
          fontSize: 10,
          tracking: 0.5,
          lineHeight: 14,
        },
      },
    },
    weightMap: {
      light: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '300',
      },
      regular: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      },
      semibold: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '600',
      },
      bold: {
        fontFamily: 'Inter, sans-serif',
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
    'xs': 2,
    'sm': 4,
    'md': 8,
    'lg': 12,
    'xl': 16,
    '2xl': 24,
    '3xl': 32,
    'full': 9999,
  },
  borderWidths: {
    none: 0,
    hairline: 0.5,
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
      baseStyle: {
        textColor: 'typography.primary',
      },
    },
  },
};

export default theme;
