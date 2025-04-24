import {
    type ButtonColors,
    type ButtonSizes,
    type ButtonVariants, type ThemeContextType, useTheme
} from '@materio/rn-materio-ui';
import React, { forwardRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';

export type ButtonRounded = 'none' | 'full';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface ButtonProps extends RectButtonProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRounded;
  startIcon?: React.ReactElement<IconProps>;
  endIcon?: React.ReactElement<IconProps>;
  fullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export default forwardRef<typeof RectButton, ButtonProps>(function Button(
  {
    onPress,
    children,
    variant = 'solid',
    color = 'neutral',
    size = 'md',
    rounded,
    startIcon,
    endIcon,
    fullwidth,
    disabled = false,
    loading = false,
    ...props
  }: ButtonProps,
  ref
) {
  const theme = useTheme();
  const styles = useStyles({ theme, fullwidth });
  const sizeMap = {
    xs: { size: 10 },
    sm: { size: 12 },
    md: { size: 16 },
    lg: { size: 20 },
    xl: { size: 24 },
  };
  const iconContainerSize = sizeMap[size].size * (1 + 1 / 4);
  let paddingHorizontal = sizeMap[size].size;
  let paddingVertical = (sizeMap[size].size * 1) / 2;
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

  // Apply disabled styles if disabled prop is true
  if (disabled) {
    backgroundColor = theme.colorScheme.typography.disabled + '20'; // Using typography.disabled with opacity
    borderColor = theme.colorScheme.typography.disabled;
    textColor = theme.colorScheme.typography.disabled;
  }

  const icStartMargin = paddingHorizontal / 2;
  const icEndMargin = paddingHorizontal / 2;

  return (
    <RectButton
      ref={ref}
      onPress={loading || disabled ? undefined : onPress}
      enabled={!disabled && !loading}
      style={[
        styles.button,
        {
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          borderWidth: variant === 'outline' ? 1 : 0,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderRadius: borderRadius,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {startIcon && (
            <View
              style={[
                styles.iconContainer,
                {
                  width: iconContainerSize,
                  height: iconContainerSize,
                  marginRight: icStartMargin,
                },
              ]}
            >
              {React.cloneElement(startIcon, {
                color: textColor,
                size: sizeMap[size].size,
              })}
            </View>
          )}
          <Text
            style={[
              styles.buttonText,
              { color: textColor, fontSize: sizeMap[size].size },
            ]}
          >
            {children}
          </Text>
          {endIcon && (
            <View
              style={[
                styles.iconContainer,
                {
                  width: iconContainerSize,
                  height: iconContainerSize,
                  marginLeft: icEndMargin,
                },
              ]}
            >
              {React.cloneElement(endIcon, {
                color: textColor,
                size: sizeMap[size].size,
              })}
            </View>
          )}
        </>
      )}
    </RectButton>
  );
});

const useStyles = ({ fullwidth }: ThemeContextType & { fullwidth?: boolean }) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      width: fullwidth ? '100%' : 'auto',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
    },
    iconContainer: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'NotoSansMedium',
    },
  });
