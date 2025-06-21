import { type ThemeColors } from '@materio/rn-materio-ui';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';

export type DividerVariants = 'solid';
export type DividerSizes = 'thin' | 'medium' | 'thick';

export interface DividerProps extends ViewProps {
  color?: ThemeColors;
  variant?: DividerVariants;
  size?: DividerSizes;
  /** Margin horizontal */
  marginH?: number;
  /** Margin vertical */
  marginV?: number;
  /** Orientation of the divider (horizontal or vertical) */
  orientation?: 'horizontal' | 'vertical';
  /** Custom color in hex format (overrides color prop) */
  customColor?: string;
}

export default function Divider({
  children,
  marginH = 0,
  marginV = 0,
  color,
  variant,
  size,
  orientation = 'horizontal',
  customColor,
  style,
  ...props
}: DividerProps) {
  // Get default props from theme
  const defaultProps = useComponentDefaults<DividerVariants, DividerSizes>(
    'Divider'
  );

  // Apply defaults with prop overrides
  const finalVariant = variant ?? defaultProps.variant ?? 'solid';
  const finalColor = color ?? defaultProps.color ?? 'neutral';
  const finalSize = size ?? defaultProps.size ?? 'thin';

  // Use the new component style system
  const componentStyle = useComponentStyle(
    'Divider',
    finalVariant,
    finalSize,
    finalColor
  );

  // Use custom color if provided, otherwise use component style
  const backgroundColor = customColor || componentStyle.backgroundColor;

  // Calculate thickness based on size
  const thicknessMap = {
    thin: 1,
    medium: 2,
    thick: 4,
  };
  const thickness = thicknessMap[finalSize];

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
          backgroundColor: backgroundColor,
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
