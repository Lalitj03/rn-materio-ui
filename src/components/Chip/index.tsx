import {
    useTheme, type ButtonSizes,
    type ButtonVariants,
    type ThemeColors
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
  const paddingHorizontal = (sizeMap[size].size * 2) / 3;
  const paddingVertical = (sizeMap[size].size * 1) / 3;
  const brN = (sizeMap[size].size * 3) / 4;

  const colorBlock = theme.colorScheme.palette[color];
  const solidPairing = colorBlock.high;
  const softPairing = colorBlock.low;

  const borderRadius = rounded === 'none' ? 0 : rounded === 'full' ? 9999 : brN;
  let borderColor = solidPairing.main;
  let backgroundColor = solidPairing.main;
  let textColor = solidPairing.contrast;

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
          borderWidth: variant === 'outline' ? 1 : 0,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderRadius: borderRadius,
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
