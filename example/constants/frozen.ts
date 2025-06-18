import { twcolors, type Theme } from '@materio/rn-materio-ui';

export default {
  colorScheme: {
    dark: {
      palette: {
        neutral: {
          // Deep Ice/Glacier Shadows - Enhanced for better contrast
          base: { main: twcolors.slate[500], contrast: twcolors.sky[50] },
          high: { main: twcolors.slate[300], contrast: twcolors.slate[900] },
          low: { main: twcolors.slate[700], contrast: twcolors.sky[100] },
        },
        primary: {
          // Arctic Blue/Frozen Core - Brightened for better visibility
          base: { main: twcolors.cyan[400], contrast: twcolors.slate[900] },
          high: { main: twcolors.cyan[100], contrast: twcolors.cyan[900] },
          low: { main: twcolors.cyan[600], contrast: twcolors.neutral[50] },
        },
        secondary: {
          // Frost White/Ice Crystal - More vibrant secondary
          base: { main: twcolors.indigo[400], contrast: twcolors.neutral[50] },
          high: { main: twcolors.indigo[200], contrast: twcolors.indigo[900] },
          low: { main: twcolors.indigo[600], contrast: twcolors.indigo[50] },
        },
        success: {
          // Aurora Green - Enhanced northern lights effect
          base: { main: twcolors.emerald[500], contrast: twcolors.neutral[50] },
          high: {
            main: twcolors.emerald[200],
            contrast: twcolors.emerald[900],
          },
          low: { main: twcolors.emerald[700], contrast: twcolors.emerald[100] },
        },
        danger: {
          // Frostbite Red - Proper danger color while maintaining theme
          base: { main: twcolors.red[400], contrast: twcolors.neutral[50] },
          high: { main: twcolors.red[200], contrast: twcolors.red[900] },
          low: { main: twcolors.red[600], contrast: twcolors.red[100] },
        },
        warning: {
          // Winter Sun - Warmer yellow for better contrast
          base: { main: twcolors.amber[400], contrast: twcolors.amber[900] },
          high: { main: twcolors.amber[200], contrast: twcolors.amber[800] },
          low: { main: twcolors.amber[600], contrast: twcolors.neutral[50] },
        },
        info: {
          // Ice Crystal Blue - More distinct from primary
          base: {
            main: twcolors.sky[400],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.sky[200],
            contrast: twcolors.sky[900],
          },
          low: {
            main: twcolors.sky[600],
            contrast: twcolors.sky[100],
          },
        },
        inactive: {
          // Blizzard Mist - Improved visibility for disabled states
          base: {
            main: twcolors.slate[600],
            contrast: twcolors.slate[200],
          },
          high: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[800],
          },
          low: {
            main: twcolors.slate[700],
            contrast: twcolors.slate[300],
          },
        },
      },
      paper: {
        base: {
          main: twcolors.slate[800], // Deep frozen surface with subtle blue tint
        },
      },
      surface: {
        background: twcolors.slate[900], // Dark icy expanse
        overlay: 'rgba(148, 163, 184, 0.1)', // Subtle frost overlay
        divider: twcolors.slate[600],
        paper: twcolors.slate[800],
        input: twcolors.slate[700],
      },
      typography: {
        primary: twcolors.slate[50], // Crisp white like fresh snow
        secondary: twcolors.slate[200], // Softer white with better contrast
        disabled: twcolors.slate[500],
        hint: twcolors.slate[400],
        link: twcolors.cyan[300], // Brighter icy blue link
        error: twcolors.red[400], // Proper red for errors
      },
    },
    light: {
      palette: {
        neutral: {
          // Fresh Snow/Clear Ice - Enhanced contrast
          base: { main: twcolors.slate[400], contrast: twcolors.slate[900] },
          high: { main: twcolors.slate[600], contrast: twcolors.slate[50] },
          low: { main: twcolors.slate[200], contrast: twcolors.slate[800] },
        },
        primary: {
          // Deep Glacial Blue - More sophisticated primary
          base: {
            main: twcolors.blue[600],
            contrast: twcolors.neutral[50],
          },
          high: {
            main: twcolors.blue[800],
            contrast: twcolors.blue[50],
          },
          low: {
            main: twcolors.blue[400],
            contrast: twcolors.blue[900],
          },
        },
        secondary: {
          // Winter Lavender - More distinctive secondary
          base: { main: twcolors.purple[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.purple[700], contrast: twcolors.purple[50] },
          low: { main: twcolors.purple[300], contrast: twcolors.purple[900] },
        },
        success: {
          // Pine Green - Natural winter success color
          base: { main: twcolors.green[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.green[800], contrast: twcolors.green[50] },
          low: { main: twcolors.green[400], contrast: twcolors.green[900] },
        },
        danger: {
          // Winter Rose - Proper danger color with winter feel
          base: { main: twcolors.rose[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.rose[800], contrast: twcolors.rose[50] },
          low: { main: twcolors.rose[400], contrast: twcolors.rose[900] },
        },
        warning: {
          // Golden Sun - Warmer and more visible
          base: { main: twcolors.orange[500], contrast: twcolors.neutral[50] },
          high: { main: twcolors.orange[700], contrast: twcolors.orange[50] },
          low: { main: twcolors.orange[300], contrast: twcolors.orange[900] },
        },
        info: {
          // Crystalline Cyan - Distinct from primary
          base: { main: twcolors.cyan[600], contrast: twcolors.neutral[50] },
          high: { main: twcolors.cyan[800], contrast: twcolors.cyan[50] },
          low: { main: twcolors.cyan[400], contrast: twcolors.cyan[900] },
        },
        inactive: {
          // Soft Mist - Better disabled state visibility
          base: {
            main: twcolors.slate[400],
            contrast: twcolors.slate[800],
          },
          high: {
            main: twcolors.slate[600],
            contrast: twcolors.slate[100],
          },
          low: {
            main: twcolors.slate[300],
            contrast: twcolors.slate[700],
          },
        },
      },
      paper: {
        base: {
          main: '#ffffff', // Pure white snow
        },
      },
      surface: {
        background: twcolors.slate[50], // Subtle ice-blue tint instead of sky
        overlay: 'rgba(255, 255, 255, 0.9)', // Clean white overlay
        divider: twcolors.slate[300],
        paper: '#ffffff',
        input: twcolors.slate[100],
      },
      typography: {
        primary: twcolors.slate[900], // High contrast dark text
        secondary: twcolors.slate[700], // Medium contrast
        disabled: twcolors.slate[400],
        hint: twcolors.slate[500],
        link: twcolors.blue[600], // Strong blue link
        error: twcolors.rose[600], // Proper error color
      },
    },
  },
  typography: {
    tokens: {
      display: {
        large: {
          fontFamily: 'NotoSansLight', // Lighter weight for large displays
          fontWeight: 'light',
          fontSize: 57,
          tracking: -0.25,
          lineHeight: 64,
        },
        medium: {
          fontFamily: 'NotoSansLight',
          fontWeight: 'light',
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
          fontFamily: 'NotoSansMedium',
          fontWeight: 'medium',
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
    xs: 2, // Tighter spacing for frozen precision
    sm: 6, // Slightly smaller than default
    md: 10, // More refined intervals
    lg: 14, // Crisp, clean spacing
    xl: 20, // Elegant larger spacing
    xxl: 28, // Sophisticated extra large
    xxxl: 36, // Premium maximum spacing
  },
  borderRadius: {
    none: 0,
    xs: 2, // Subtle crystalline edges
    sm: 6, // Soft ice corners
    md: 10, // Balanced frozen curves
    lg: 14, // Elegant ice formation
    xl: 20, // Smooth glacier edges
    xxl: 28, // Flowing ice shapes
    xxxl: 36, // Organic winter forms
  },
} as Theme;
