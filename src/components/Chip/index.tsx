import {
  useTheme,
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants,
} from '@materio/rn-materio-ui';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';

export type ButtonRounded = 'none' | 'full';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface ChipProps extends RectButtonProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRounded;
  children: string;
  startIcon?: React.ReactElement<IconProps>;
  endIcon?: React.ReactElement<IconProps>;
}

export default function Chip({
  onPress,
  children,
  variant,
  color,
  size,
  rounded,
  startIcon,
  endIcon,
  ...props
}: ChipProps) {
  const theme = useTheme();

  // Get default props from theme
  const defaultProps = useComponentDefaults<ButtonVariants, ButtonSizes>(
    'Chip'
  );

  // Apply defaults with prop overrides
  const finalVariant = variant ?? defaultProps.variant ?? 'soft';
  const finalColor = color ?? defaultProps.color ?? 'neutral';
  const finalSize = size ?? defaultProps.size ?? 'md';

  // Use the new component style system
  const componentStyle = useComponentStyle(
    'Chip',
    finalVariant,
    finalSize,
    finalColor
  );

  // Handle rounded prop override
  const finalBorderRadius =
    rounded === 'none'
      ? 0
      : rounded === 'full'
        ? 9999
        : componentStyle.borderRadius;

  // Calculate icon size based on font size
  const iconSize = componentStyle.fontSize * 0.875; // Slightly smaller than font size

  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.chip,
        {
          paddingHorizontal: componentStyle.paddingHorizontal,
          paddingVertical: componentStyle.paddingVertical,
          borderWidth: componentStyle.borderWidth || 0,
          backgroundColor: componentStyle.backgroundColor,
          borderColor: componentStyle.borderColor,
          borderRadius: finalBorderRadius,
        },
      ]}
      {...props}
    >
      {startIcon && (
        <View
          style={[
            styles.iconContainer,
            {
              width: iconSize,
              height: iconSize,
              marginRight: theme.spacing.xs,
            },
          ]}
        >
          {React.cloneElement(startIcon, {
            color: componentStyle.color,
            size: iconSize,
          })}
        </View>
      )}
      <Text
        style={[
          styles.text,
          {
            color: componentStyle.color,
            fontSize: componentStyle.fontSize,
            fontWeight: componentStyle.fontWeight,
          },
        ]}
      >
        {children}
      </Text>
      {endIcon && (
        <View
          style={[
            styles.iconContainer,
            {
              width: iconSize,
              height: iconSize,
              marginLeft: theme.spacing.xs,
            },
          ]}
        >
          {React.cloneElement(endIcon, {
            color: componentStyle.color,
            size: iconSize,
          })}
        </View>
      )}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'NotoSansMedium',
  },
});
