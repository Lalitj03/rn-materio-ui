import {
  useTheme,
  type ButtonSizes,
  type ButtonVariants,
  type ThemeColors,
} from '@materio/rn-materio-ui';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';

export type ButtonRounded = 'none' | 'full';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface ChipProps extends RectButtonProps {
  color?: ThemeColors;
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
  variant = 'solid',
  color = 'neutral',
  size = 'md',
  rounded,
  startIcon,
  endIcon,
  ...props
}: ChipProps) {
  const theme = useTheme();
  const sizeMap = {
    xs: { size: 10 },
    sm: { size: 12 },
    md: { size: 14 },
    lg: { size: 18 },
    xl: { size: 22 },
  };
  const icSize = sizeMap[size].size * (1 + 1 / 4); // Icon container size

  // Use theme.spacing for padding, mapped by chip size
  const paddingConfig = {
    xs: { h: theme.spacing.sm, v: theme.spacing.xs },
    sm: { h: theme.spacing.md, v: theme.spacing.xs },
    md: { h: theme.spacing.lg, v: theme.spacing.sm },
    lg: { h: theme.spacing.xl, v: theme.spacing.md },
    xl: { h: theme.spacing.xxl, v: theme.spacing.lg },
  };
  const paddingHorizontal = paddingConfig[size].h;
  const paddingVertical = paddingConfig[size].v;

  // Use theme.borderRadius, mapped by chip size, respecting 'rounded' prop
  const borderRadiusConfig = {
    xs: theme.borderRadius.sm,
    sm: theme.borderRadius.md,
    md: theme.borderRadius.md,
    lg: theme.borderRadius.lg,
    xl: theme.borderRadius.xl,
  };
  const baseBorderRadius = borderRadiusConfig[size];
  const finalBorderRadius =
    rounded === 'none' ? 0 : rounded === 'full' ? 9999 : baseBorderRadius;

  const colorBlock = theme.colorScheme.palette[color];
  const solidPairing = colorBlock.high;
  const softPairing = colorBlock.low;

  let borderColor = solidPairing.main;
  let backgroundColor = solidPairing.main;
  let textColor = solidPairing.contrast;
  // Use theme.borderWidths for outline variant
  const borderWidthValue = variant === 'outline' ? theme.borderWidths.thin : 0;

  if (variant === 'soft') {
    backgroundColor = softPairing.main;
    textColor = softPairing.contrast;
  }

  if (variant === 'outline') {
    backgroundColor = 'transparent';
    borderColor = solidPairing.main;
    textColor = solidPairing.main;
  }

  if (variant === 'ghost') {
    backgroundColor = 'transparent';
    textColor = solidPairing.main;
  }

  const icStartMargin = Platform.select({
    web: paddingHorizontal,
    default: paddingHorizontal / 2,
  }); // Right Margin for Start Icon
  const icEndMargin = paddingHorizontal / 2; // Left Margin for End Icon

  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.chip,
        {
          paddingHorizontal,
          paddingVertical,
          borderWidth: borderWidthValue,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
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
              width: icSize,
              height: icSize,
              marginRight: icStartMargin,
              marginLeft: Platform.select({ web: 4, default: 0 }),
            },
          ]}
        >
          {React.cloneElement(startIcon, {
            color: textColor,
            size: sizeMap[size].size + 1,
          })}
        </View>
      )}
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: sizeMap[size].size },
        ]}
      >
        {children}
      </Text>
      {endIcon && (
        <View
          style={[
            styles.iconContainer,
            { width: icSize, height: icSize, marginLeft: icEndMargin },
          ]}
        >
          {React.cloneElement(endIcon, {
            color: textColor,
            size: sizeMap[size].size + 1,
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
