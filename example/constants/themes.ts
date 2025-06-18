import frozen from '@/constants/frozen';
import oceanic from '@/constants/oceanic';
import starwars from '@/constants/starwars';
import theme from '@/constants/theme';
import zenith from '@/constants/zenith';
import type { Theme } from '@materio/rn-materio-ui';

export type ThemeName =
  | 'default'
  | 'frozen'
  | 'starwars'
  | 'oceanic'
  | 'zenith';

export const themes: Record<ThemeName, Theme> = {
  default: theme,
  frozen,
  starwars,
  oceanic,
  zenith,
};
