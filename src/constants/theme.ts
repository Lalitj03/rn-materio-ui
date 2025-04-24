import { type Theme } from '@materio/rn-materio-ui';
import twcolors from './twcolors';

export default {
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
      paper: {
        base: {
          main: twcolors.stone[900],
        },
      },
      surface: {
        background: twcolors.neutral[900],
        overlay: twcolors.neutral[800],
        divider: twcolors.stone[700],
        paper: twcolors.stone[900],
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
      paper: {
        base: {
          main: twcolors.stone[50],
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
          lineHeight: 64,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontSize: 45,
          tracking: 0,
          lineHeight: 52,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontSize: 36,
          tracking: 0,
          lineHeight: 44,
        },
      },
      headline: {
        large: {
          fontFamily: 'NotoSansMedium',
          fontSize: 32,
          tracking: 0,
          lineHeight: 40,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontSize: 28,
          tracking: 0,
          lineHeight: 36,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontSize: 24,
          tracking: 0,
          lineHeight: 32,
        },
      },
      title: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontSize: 22,
          tracking: 0,
          lineHeight: 28,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontSize: 16,
          tracking: 0.15,
          lineHeight: 24,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
      },
      body: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontSize: 16,
          tracking: 0.5,
          lineHeight: 24,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontSize: 14,
          tracking: 0.25,
          lineHeight: 20,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
      },
      label: {
        large: {
          fontFamily: 'NotoSansMedium',
          fontSize: 14,
          tracking: 0.1,
          lineHeight: 20,
        },
        medium: {
          fontFamily: 'NotoSansMedium',
          fontSize: 12,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
      },
      caption: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontSize: 10,
          tracking: 0.5,
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
} as Theme;
