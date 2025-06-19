import {
  useTheme,
  type PaperVariants,
  type Theme,
  type ThemeColors,
  type ThemeColorTones,
} from '@materio/rn-materio-ui';
import { View } from 'react-native';
import { BaseButton, type BaseButtonProps } from 'react-native-gesture-handler';

export interface ColoredCardProps extends BaseButtonProps {
  color?: ThemeColors;
  colorTone?: ThemeColorTones;
  variant?: PaperVariants;
  /** The border radius of the card. Can be a theme key or a number */
  rounded?: keyof Theme['borderRadius'] | number;
  /** Adds padding to the card. Can be a theme key or a number. Default is 'sm' */
  padding?: keyof Theme['spacing'] | number;
  pressable?: boolean;
}

export default function ColoredCard({
  children,
  color = 'neutral',
  colorTone = 'low',
  variant = 'solid',
  enabled = true,
  rounded = 'md',
  padding = 'sm',
  style,
  pressable,
  ...props
}: ColoredCardProps) {
  const theme = useTheme();
  const colorBlock = theme.colorScheme.palette[color];
  let backgroundColor = colorBlock[colorTone].main;
  let borderColor = colorBlock[colorTone].main;

  if (variant === 'outline') {
    backgroundColor = 'transparent';
  }

  if (variant === 'solid') {
    borderColor = 'transparent';
  }

  if (!enabled) {
    if (variant === 'solid') {
      backgroundColor += '60';
    } else {
      borderColor += '60';
    }
  }

  const borderWidth =
    variant === 'outline' ? theme.borderWidths.medium : theme.borderWidths.none;
  let borderRadius: number;
  if (
    typeof rounded === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.borderRadius, rounded)
  ) {
    borderRadius = theme.borderRadius[rounded as keyof Theme['borderRadius']];
  } else if (typeof rounded === 'number') {
    borderRadius = rounded;
  } else {
    borderRadius = theme.borderRadius.md;
  }

  let resolvedPadding: number;
  if (
    typeof padding === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.spacing, padding)
  ) {
    resolvedPadding = theme.spacing[padding as keyof Theme['spacing']];
  } else if (typeof padding === 'number') {
    resolvedPadding = padding;
  } else {
    resolvedPadding = theme.spacing.sm;
  }

  if (pressable) {
    return (
      <BaseButton
        style={[
          {
            borderWidth,
            backgroundColor,
            borderColor,
            borderRadius,
            padding: resolvedPadding,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </BaseButton>
    );
  }

  return (
    <View
      style={[
        {
          borderWidth,
          backgroundColor,
          borderColor,
          borderRadius,
          padding: resolvedPadding,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
