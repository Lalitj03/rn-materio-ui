import {
  useTheme,
  type ThemeColors,
  type ThemeColorTones,
} from '@materio/rn-materio-ui';
import { View, type ViewProps, type ViewStyle } from 'react-native';

export interface DividerProps extends ViewProps {
  color?: ThemeColors;
  colorTone?: ThemeColorTones;
  /** Margin horizontal */
  marginH?: number;
  /** Margin vertical */
  marginV?: number;
  /** Color alpha Ex: 1A */
  colorAlpha?: string;
  /** Orientation of the divider (horizontal or vertical) */
  orientation?: 'horizontal' | 'vertical';
  /** Thickness of the divider line */
  thickness?: number;
  /** Custom color in hex format (overrides color prop) */
  customColor?: string;
}

export default function Divider({
  children,
  marginH = 0,
  marginV = 0,
  color,
  colorTone = 'high',
  colorAlpha = '4A',
  orientation = 'horizontal',
  thickness = 1,
  customColor,
  style,
  ...props
}: DividerProps) {
  const theme = useTheme();
  let background = theme.colorScheme.surface.divider;

  if (customColor) {
    background = customColor;
  } else if (color) {
    background = theme.colorScheme.palette[color][colorTone].main + colorAlpha;
  }

  // Calculate styles based on orientation
  const dividerStyle: ViewStyle =
    orientation === 'horizontal'
      ? {
          height: thickness,
          width: '100%',
          marginHorizontal: marginH,
          marginVertical: marginV,
        }
      : {
          width: thickness,
          height: '100%',
          marginHorizontal: marginH,
          marginVertical: marginV,
        };

  return (
    <View
      style={[
        {
          backgroundColor: background,
          ...dividerStyle,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
