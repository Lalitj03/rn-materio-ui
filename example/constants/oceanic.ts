import type { Theme } from '@materio/rn-materio-ui';

const theme: Theme = {
  colorScheme: {
    light: {
      palette: {
        primary: {
          high: {
            main: '#D4E3FF',
            contrast: '#001B3E',
          },
          base: {
            main: '#0B61A4',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#00487A',
            contrast: '#FFFFFF',
          },
        },
        secondary: {
          high: {
            main: '#DCE2F9',
            contrast: '#131C2B',
          },
          base: {
            main: '#555F71',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#283041',
            contrast: '#FFFFFF',
          },
        },
        neutral: {
          high: {
            main: '#F1F0F4',
            contrast: '#1A1C1E',
          },
          base: {
            main: '#8F9194',
            contrast: '#000000',
          },
          low: {
            main: '#464649',
            contrast: '#FFFFFF',
          },
        },
        success: {
          high: {
            main: '#D9FDD9',
            contrast: '#00220A',
          },
          base: {
            main: '#266C2E',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#005319',
            contrast: '#FFFFFF',
          },
        },
        warning: {
          high: {
            main: '#FFDECC',
            contrast: '#381E00',
          },
          base: {
            main: '#954A00',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#653300',
            contrast: '#FFFFFF',
          },
        },
        danger: {
          high: {
            main: '#FFDAD6',
            contrast: '#410002',
          },
          base: {
            main: '#BA1A1A',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#93000A',
            contrast: '#FFFFFF',
          },
        },
        info: {
          high: {
            main: '#D2E4FF',
            contrast: '#001C3A',
          },
          base: {
            main: '#0060A9',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#004982',
            contrast: '#FFFFFF',
          },
        },
        inactive: {
          high: {
            main: '#E0E2EC',
            contrast: '#44474F',
          },
          base: {
            main: '#C4C6D0',
            contrast: '#191C23',
          },
          low: {
            main: '#74777F',
            contrast: '#FFFFFF',
          },
        },
      },
      paper: {
        base: {
          main: '#FEFBFF',
        },
      },
      surface: {
        background: '#FDFBFF',
        overlay: 'rgba(0, 0, 0, 0.08)',
        divider: '#757575',
        paper: '#FFFFFF',
        input: '#E7E0EC',
      },
      typography: {
        primary: '#1A1C1E',
        secondary: '#43474E',
        disabled: '#A0A3A9',
        hint: '#6F7277',
        link: '#0B61A4',
        error: '#BA1A1A',
      },
    },
    dark: {
      palette: {
        primary: {
          high: {
            main: '#3E4758',
            contrast: '#D4E3FF',
          },
          base: {
            main: '#A5C8FF',
            contrast: '#003264',
          },
          low: {
            main: '#80ACFF',
            contrast: '#002A53',
          },
        },
        secondary: {
          high: {
            main: '#3E4758',
            contrast: '#BEC6DC',
          },
          base: {
            main: '#BFC7DC',
            contrast: '#283141',
          },
          low: {
            main: '#A3ADC5',
            contrast: '#1F2837',
          },
        },
        neutral: {
          high: {
            main: '#44474A',
            contrast: '#E4E2E6',
          },
          base: {
            main: '#8F9194',
            contrast: '#FFFFFF',
          },
          low: {
            main: '#606164',
            contrast: '#FFFFFF',
          },
        },
        success: {
          high: {
            main: '#005319',
            contrast: '#99F79A',
          },
          base: {
            main: '#80DA81',
            contrast: '#003914',
          },
          low: {
            main: '#64BE67',
            contrast: '#00300F',
          },
        },
        warning: {
          high: {
            main: '#755A00',
            contrast: '#FFDDB7',
          },
          base: {
            main: '#FFB95A',
            contrast: '#4F2600',
          },
          low: {
            main: '#EAA040',
            contrast: '#422100',
          },
        },
        danger: {
          high: {
            main: '#93000A',
            contrast: '#FFDAD6',
          },
          base: {
            main: '#FFB4AB',
            contrast: '#690005',
          },
          low: {
            main: '#FF897D',
            contrast: '#570003',
          },
        },
        info: {
          high: {
            main: '#004982',
            contrast: '#D2E4FF',
          },
          base: {
            main: '#A0C9FF',
            contrast: '#00315E',
          },
          low: {
            main: '#7BABF1',
            contrast: '#00284D',
          },
        },
        inactive: {
          high: {
            main: '#44474F',
            contrast: '#E0E2EC',
          },
          base: {
            main: '#8E9099',
            contrast: '#2D3038',
          },
          low: {
            main: '#60626A',
            contrast: '#F9FAFF',
          },
        },
      },
      paper: {
        base: {
          main: '#121417',
        },
      },
      surface: {
        background: '#121417',
        overlay: 'rgba(255, 255, 255, 0.08)',
        divider: '#43474E',
        paper: '#1C1B1F',
        input: '#2A2E33',
      },
      typography: {
        primary: '#E3E2E6',
        secondary: '#C7C6CA',
        disabled: '#8E9094',
        hint: '#777A7E',
        link: '#A5C8FF',
        error: '#FFB4AB',
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
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  borderWidths: {
    none: 0,
    hairline: 0.5, // Consider using StyleSheet.hairlineWidth if appropriate
    thin: 1,
    medium: 2,
    thick: 4,
  },
};
export default theme;
