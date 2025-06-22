import { twcolors, type Theme } from '@materio/rn-materio-ui';

const theme: Theme = {
  colorScheme: {
    dark: {
      palette: {
        neutral: {
          // Imperial Greys/Blacks
          base: { main: twcolors.slate[700], contrast: twcolors.slate[50] },
          high: { main: twcolors.slate[300], contrast: twcolors.slate[900] },
          low: { main: twcolors.slate[800], contrast: twcolors.slate[100] },
        },
        primary: {
          // Jedi Blue
          base: { main: twcolors.blue[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.blue[300], contrast: twcolors.blue[900] },
          low: { main: twcolors.blue[800], contrast: twcolors.blue[100] },
        },
        secondary: {
          // Sith Red
          base: { main: twcolors.red[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.red[300], contrast: twcolors.red[900] },
          low: { main: twcolors.red[800], contrast: twcolors.red[100] },
        },
        success: {
          // Lightsaber Green/Rebel Alliance
          base: { main: twcolors.green[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.green[300], contrast: twcolors.green[900] },
          low: { main: twcolors.green[800], contrast: twcolors.green[100] },
        },
        danger: {
          // Blaster Red/Alerts
          base: { main: twcolors.rose[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.rose[200], contrast: twcolors.rose[900] },
          low: { main: twcolors.rose[700], contrast: twcolors.rose[100] },
        },
        warning: {
          // Hutt Yellow/Caution
          base: { main: twcolors.yellow[400], contrast: twcolors.neutral[900] },
          high: { main: twcolors.yellow[200], contrast: twcolors.yellow[800] },
          low: { main: twcolors.yellow[600], contrast: twcolors.neutral[50] },
        },
        info: {
          // Hologram Cyan/Tech Blue
          base: { main: twcolors.cyan[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.cyan[200], contrast: twcolors.cyan[900] },
          low: { main: twcolors.cyan[700], contrast: twcolors.cyan[100] },
        },
        inactive: {
          // Deep Space/Shadows
          base: { main: twcolors.zinc[700], contrast: twcolors.zinc[300] },
          high: { main: twcolors.zinc[500], contrast: twcolors.zinc[100] },
          low: { main: twcolors.zinc[800], contrast: twcolors.zinc[400] },
        },
      },
      surface: {
        background: twcolors.black, // True black for the void of space
        overlay: twcolors.slate[800],
        divider: twcolors.stone[700],
        paper: twcolors.slate[900],
        input: twcolors.slate[800],
      },
      typography: {
        primary: twcolors.neutral[50],
        secondary: twcolors.stone[300],
        disabled: twcolors.stone[500],
        hint: twcolors.stone[500],
        link: twcolors.blue[400], // Jedi blue for links
        error: twcolors.red[400], // Sith red for errors
      },
    },
    light: {
      palette: {
        neutral: {
          // Tatooine Sands/Rebel Base
          base: { main: twcolors.stone[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.stone[700], contrast: twcolors.stone[50] },
          low: { main: twcolors.stone[200], contrast: twcolors.stone[900] },
        },
        primary: {
          // Rebel Blue/Sky
          base: { main: twcolors.sky[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.sky[800], contrast: twcolors.sky[100] },
          low: { main: twcolors.sky[300], contrast: twcolors.sky[900] },
        },
        secondary: {
          // Rebel Orange/Wookiee Brown
          base: { main: twcolors.orange[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.orange[700], contrast: twcolors.orange[100] },
          low: { main: twcolors.orange[300], contrast: twcolors.orange[900] },
        },
        success: {
          // Endor Green/Alliance
          base: { main: twcolors.emerald[600], contrast: twcolors.neutral[50] },
          high: {
            main: twcolors.emerald[800],
            contrast: twcolors.emerald[100],
          },
          low: { main: twcolors.emerald[300], contrast: twcolors.emerald[900] },
        },
        danger: {
          // Warning Red
          base: { main: twcolors.red[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.red[700], contrast: twcolors.red[100] },
          low: { main: twcolors.red[300], contrast: twcolors.red[900] },
        },
        warning: {
          // Desert Yellow/Droid
          base: { main: twcolors.amber[400], contrast: twcolors.neutral[900] },
          high: { main: twcolors.amber[200], contrast: twcolors.amber[800] },
          low: { main: twcolors.amber[600], contrast: twcolors.neutral[50] },
        },
        info: {
          // Tech Blue/Sky
          base: { main: twcolors.blue[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.blue[700], contrast: twcolors.blue[100] },
          low: { main: twcolors.blue[300], contrast: twcolors.blue[900] },
        },
        inactive: {
          // Dusty/Faded
          base: {
            main: twcolors.neutral[400],
            contrast: twcolors.neutral[800],
          },
          high: {
            main: twcolors.neutral[600],
            contrast: twcolors.neutral[100],
          },
          low: { main: twcolors.neutral[200], contrast: twcolors.neutral[700] },
        },
      },
      surface: {
        background: twcolors.slate[50], // Very light, almost white background
        overlay: twcolors.neutral[50],
        divider: twcolors.stone[300],
        paper: twcolors.stone[100],
        input: twcolors.stone[200],
      },
      typography: {
        primary: twcolors.neutral[900],
        secondary: twcolors.stone[700], // Darker secondary text for readability
        disabled: twcolors.stone[400],
        hint: twcolors.stone[400],
        link: twcolors.sky[700], // Rebel blue for links
        error: twcolors.red[600], // A strong red for errors
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
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
      },
      caption: {
        large: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 12,
          tracking: 0.4,
          lineHeight: 16,
        },
        medium: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
          fontSize: 11,
          tracking: 0.5,
          lineHeight: 16,
        },
        small: {
          fontFamily: 'NotoSansRegular',
          fontWeight: 'regular',
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
        borderRadius: 'xs',
      },
      sizes: {
        xs: {
          fontSize: 10,
          padding: { horizontal: 'sm', vertical: 'xs' },
          borderRadius: 'none',
          minHeight: 24,
        },
        sm: {
          fontSize: 12,
          padding: { horizontal: 'md', vertical: 'xs' },
          borderRadius: 'none',
          minHeight: 28,
        },
        md: {
          fontSize: 16,
          padding: { horizontal: 'lg', vertical: 'sm' },
          borderRadius: 'none',
          minHeight: 40,
        },
        lg: {
          fontSize: 20,
          padding: { horizontal: 'xl', vertical: 'md' },
          borderRadius: 'none',
          minHeight: 48,
        },
        xl: {
          fontSize: 24,
          padding: { horizontal: 'xxl', vertical: 'lg' },
          borderRadius: 'none',
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
        borderRadius: 'none',
        padding: 'sm',
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
        borderRadius: 'none',
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
        borderRadius: 'none',
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
    },
  },
};

export default theme;
