import {
  createPalette,
  extendTheme,
  theme as materioTheme,
  twcolors,
  type Theme,
  type ThemeColors,
} from '@materio/rn-materio-ui';
import type { DeepPartial } from 'src/utils/extendTheme';

export const corporatePalette = createPalette({
  primary: ['pink', '500'],
  secondary: ['blue', '600'],
  success: ['green', '600'],
});

const theme = extendTheme({
  colorScheme: {
    light: {
      palette: corporatePalette.light,
      surface: {
        background: '#fefbff',
        overlay: twcolors.neutral[50],
        divider: twcolors.neutral[300],
        paper: twcolors.pink[50],
        input: twcolors.pink[100],
      },
    },
    dark: {
      palette: corporatePalette.dark,
      surface: {
        background: '#1a1a1a',
        overlay: twcolors.neutral[800],
        divider: twcolors.neutral[700],
        paper: '#160206',
        input: '#21080f',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        ...materioTheme.components.Button.baseStyle,
        borderRadius: 'sm',
        fontWeight: 'regular',
      } as DeepPartial<Theme['components']['Button']['baseStyle']>,
      variants: {
        outline: (_theme: Theme, color: ThemeColors) => ({
          backgroundColor: 'transparent',
          textColor: `${color}.high.main`,
          borderColor: `${color}.high.main`,
          borderWidth: 'hairline',
        }),
      },
    },
  },
});

export default theme;
