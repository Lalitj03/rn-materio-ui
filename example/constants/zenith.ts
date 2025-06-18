import type { Theme } from '@materio/rn-materio-ui';

export default {
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
            contrast: '#FFFFFF',
          },
          low: {
            main: '#2C5282',
            contrast: '#FFFFFF',
          },
        },
        secondary: {
          high: {
            main: '#E2E8F0',
            contrast: '#4A5568',
          },
          base: {
            main: '#718096',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#4A5568',
            contrast: '#FFFFFF',
          },
        },
        neutral: {
          high: {
            main: '#F7FAFC',
            contrast: '#2D3748',
          },
          base: {
            main: '#A0AEC0',
            contrast: '#000000',
          },
          low: {
            main: '#718096',
            contrast: '#FFFFFF',
          },
        },
        success: {
          high: {
            main: '#F0FFF4',
            contrast: '#276749',
          },
          base: {
            main: '#38A169',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#2F855A',
            contrast: '#FFFFFF',
          },
        },
        warning: {
          high: {
            main: '#FFFAF0',
            contrast: '#B7791F',
          },
          base: {
            main: '#D69E2E',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#B7791F',
            contrast: '#FFFFFF',
          },
        },
        danger: {
          high: {
            main: '#FFF5F5',
            contrast: '#C53030',
          },
          base: {
            main: '#E53E3E',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#C53030',
            contrast: '#FFFFFF',
          },
        },
        info: {
          high: {
            main: '#EBF8FF',
            contrast: '#2B6CB0',
          },
          base: {
            main: '#3182CE',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#2B6CB0',
            contrast: '#FFFFFF',
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
            contrast: '#FFFFFF',
          },
        },
      },
      paper: {
        base: {
          main: '#FFFFFF',
        },
      },
      surface: {
        background: '#F7FAFC',
        overlay: 'rgba(0, 0, 0, 0.04)',
        divider: '#E2E8F0',
        paper: '#FFFFFF',
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
            contrast: '#FFFFFF',
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
            contrast: '#FFFFFF',
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
            contrast: '#FFFFFF',
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
            contrast: '#FFFFFF',
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
      paper: {
        base: {
          main: '#20242E',
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
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    xxxl: 32,
  },
} as Theme;
